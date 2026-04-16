import os
import json
from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, StreamingResponse
from pydantic import BaseModel
from typing import List, Optional
import anthropic
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="GeoChat - Geographer AI Assistant")

ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY", "")

GEOGRAPHY_SYSTEM_PROMPT = """You are GeoBot, an expert AI assistant specialized in geography and earth sciences. You assist geographers, researchers, students, and geography enthusiasts with accurate and insightful geographical information.

Your areas of expertise include:
- **Physical Geography**: Landforms, terrain, mountains, rivers, lakes, oceans, glaciers, volcanoes, tectonic plates, erosion, and geomorphology
- **Human Geography**: Population distribution, urbanization, migration, cultural landscapes, political boundaries, and demographic trends
- **Climate & Meteorology**: Climate zones (Köppen classification), weather patterns, ocean currents, biomes, and climate change impacts
- **Cartography & GIS**: Map projections, coordinate systems (latitude/longitude), spatial analysis, and geographic data interpretation
- **Biogeography**: Species distribution, ecosystems, biodiversity hotspots, and habitat zones
- **Economic Geography**: Natural resources, trade routes, agricultural regions, and industrial geography
- **Regional Geography**: Detailed knowledge of all world regions, countries, capitals, borders, and regional characteristics
- **Oceanography**: Ocean basins, currents, tides, marine geography, and coastal features
- **Geopolitics**: Political geography, territorial disputes, international boundaries, and sovereignty

When responding:
1. Be precise with geographical data (coordinates, elevations, areas, populations)
2. Use proper geographical terminology
3. When mentioning specific locations, include coordinates in the format [LAT: X.XX, LON: Y.YY] so they can be mapped
4. Provide context about why geographical features matter
5. Reference relevant geographical concepts, theories, or frameworks when appropriate
6. If asked about a country or region, include: capital, area, population, notable physical features, and climate
7. Structure complex responses with clear headings when helpful

You can help with:
- Answering geography questions and research queries
- Explaining geographical phenomena and processes
- Comparing regions, countries, or geographical features
- Analyzing geographical patterns and distributions
- Helping interpret maps and spatial data
- Discussing environmental geography and sustainability
- Historical geography and how landscapes have changed over time"""


class Message(BaseModel):
    role: str
    content: str


class ChatRequest(BaseModel):
    messages: List[Message]
    stream: Optional[bool] = False


class ChatResponse(BaseModel):
    response: str
    coordinates: Optional[List[dict]] = None


def extract_coordinates(text: str) -> List[dict]:
    """Extract coordinate mentions from AI response for map display."""
    import re
    coords = []
    # Match pattern [LAT: X.XX, LON: Y.YY] optionally followed by a label
    pattern = r'\[LAT:\s*([-\d.]+),\s*LON:\s*([-\d.]+)\](?:\s*[-–]\s*([^\n\[]+))?'
    matches = re.findall(pattern, text)
    seen = set()
    for match in matches:
        lat, lon = float(match[0]), float(match[1])
        label = match[2].strip() if match[2] else f"{lat}, {lon}"
        key = (lat, lon)
        if key not in seen:
            seen.add(key)
            coords.append({"lat": lat, "lon": lon, "label": label})
    return coords


@app.post("/api/chat")
async def chat(request: ChatRequest):
    if not ANTHROPIC_API_KEY:
        raise HTTPException(status_code=500, detail="ANTHROPIC_API_KEY not configured")

    client = anthropic.Anthropic(api_key=ANTHROPIC_API_KEY)

    # Build messages for the API, using prompt caching on system prompt
    api_messages = [
        {"role": msg.role, "content": msg.content}
        for msg in request.messages
    ]

    try:
        response = client.messages.create(
            model="claude-sonnet-4-6",
            max_tokens=2048,
            system=[
                {
                    "type": "text",
                    "text": GEOGRAPHY_SYSTEM_PROMPT,
                    "cache_control": {"type": "ephemeral"},
                }
            ],
            messages=api_messages,
        )

        reply = response.content[0].text
        coordinates = extract_coordinates(reply)

        return ChatResponse(response=reply, coordinates=coordinates)

    except anthropic.AuthenticationError:
        raise HTTPException(status_code=401, detail="Invalid Anthropic API key")
    except anthropic.RateLimitError:
        raise HTTPException(status_code=429, detail="Rate limit exceeded. Please try again later.")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/chat/stream")
async def chat_stream(request: ChatRequest):
    if not ANTHROPIC_API_KEY:
        raise HTTPException(status_code=500, detail="ANTHROPIC_API_KEY not configured")

    client = anthropic.Anthropic(api_key=ANTHROPIC_API_KEY)

    api_messages = [
        {"role": msg.role, "content": msg.content}
        for msg in request.messages
    ]

    def generate():
        full_text = ""
        try:
            with client.messages.stream(
                model="claude-sonnet-4-6",
                max_tokens=2048,
                system=[
                    {
                        "type": "text",
                        "text": GEOGRAPHY_SYSTEM_PROMPT,
                        "cache_control": {"type": "ephemeral"},
                    }
                ],
                messages=api_messages,
            ) as stream:
                for text in stream.text_stream:
                    full_text += text
                    yield f"data: {json.dumps({'type': 'text', 'text': text})}\n\n"

            # Send coordinates after full response
            coordinates = extract_coordinates(full_text)
            if coordinates:
                yield f"data: {json.dumps({'type': 'coordinates', 'coordinates': coordinates})}\n\n"

            yield "data: [DONE]\n\n"

        except anthropic.AuthenticationError:
            yield f"data: {json.dumps({'type': 'error', 'message': 'Invalid API key'})}\n\n"
        except Exception as e:
            yield f"data: {json.dumps({'type': 'error', 'message': str(e)})}\n\n"

    return StreamingResponse(generate(), media_type="text/event-stream")


@app.get("/api/health")
async def health():
    has_key = bool(ANTHROPIC_API_KEY)
    return {"status": "ok", "api_key_configured": has_key}


# Serve static files
app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get("/")
async def root():
    return FileResponse("static/index.html")


if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 8000))
    uvicorn.run("app:app", host="0.0.0.0", port=port, reload=True)
