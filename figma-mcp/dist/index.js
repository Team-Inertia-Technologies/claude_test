import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema, } from "@modelcontextprotocol/sdk/types.js";
import { FigmaClient } from "./figma-client.js";
const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
if (!FIGMA_TOKEN) {
    console.error("Error: FIGMA_TOKEN environment variable is required");
    process.exit(1);
}
const client = new FigmaClient(FIGMA_TOKEN);
const server = new Server({ name: "figma-mcp", version: "1.0.0" }, { capabilities: { tools: {} } });
server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: [
        {
            name: "get_file",
            description: "Get a Figma file by its key. Returns the full document tree, components, styles and metadata.",
            inputSchema: {
                type: "object",
                properties: {
                    file_key: { type: "string", description: "The Figma file key (found in the file URL)" },
                    depth: { type: "number", description: "Depth of the node tree to return (default: full tree)" },
                    version: { type: "string", description: "Specific version of the file to retrieve" },
                    geometry: { type: "string", enum: ["paths"], description: "Include vector path data when set to 'paths'" },
                },
                required: ["file_key"],
            },
        },
        {
            name: "get_file_nodes",
            description: "Get specific nodes from a Figma file by their node IDs.",
            inputSchema: {
                type: "object",
                properties: {
                    file_key: { type: "string", description: "The Figma file key" },
                    node_ids: {
                        type: "array",
                        items: { type: "string" },
                        description: "List of node IDs to retrieve (e.g. '1:2', '3:4')",
                    },
                    depth: { type: "number", description: "Depth of child nodes to include" },
                    version: { type: "string", description: "Specific version to retrieve from" },
                    geometry: { type: "string", enum: ["paths"], description: "Include vector path data when set to 'paths'" },
                },
                required: ["file_key", "node_ids"],
            },
        },
        {
            name: "get_file_components",
            description: "Get all published components in a Figma file.",
            inputSchema: {
                type: "object",
                properties: {
                    file_key: { type: "string", description: "The Figma file key" },
                },
                required: ["file_key"],
            },
        },
        {
            name: "get_file_styles",
            description: "Get all published styles (colors, text, effects, grids) in a Figma file.",
            inputSchema: {
                type: "object",
                properties: {
                    file_key: { type: "string", description: "The Figma file key" },
                },
                required: ["file_key"],
            },
        },
        {
            name: "get_images",
            description: "Export Figma nodes as images. Returns URLs to the rendered images.",
            inputSchema: {
                type: "object",
                properties: {
                    file_key: { type: "string", description: "The Figma file key" },
                    node_ids: {
                        type: "array",
                        items: { type: "string" },
                        description: "List of node IDs to export",
                    },
                    scale: { type: "number", description: "Image scale factor (0.01–4). Default: 1" },
                    format: {
                        type: "string",
                        enum: ["jpg", "png", "svg", "pdf"],
                        description: "Image format. Default: png",
                    },
                    svg_include_id: { type: "boolean", description: "Include id attributes in SVG output" },
                    svg_simplify_stroke: { type: "boolean", description: "Simplify strokes in SVG output" },
                    use_absolute_bounds: { type: "boolean", description: "Use absolute bounding box for cropping" },
                    version: { type: "string", description: "Specific file version to render from" },
                },
                required: ["file_key", "node_ids"],
            },
        },
        {
            name: "get_image_fills",
            description: "Get download URLs for all images used as fills in a Figma file.",
            inputSchema: {
                type: "object",
                properties: {
                    file_key: { type: "string", description: "The Figma file key" },
                },
                required: ["file_key"],
            },
        },
        {
            name: "get_comments",
            description: "Get all comments on a Figma file.",
            inputSchema: {
                type: "object",
                properties: {
                    file_key: { type: "string", description: "The Figma file key" },
                },
                required: ["file_key"],
            },
        },
        {
            name: "post_comment",
            description: "Post a comment on a Figma file, optionally anchored to a position or node.",
            inputSchema: {
                type: "object",
                properties: {
                    file_key: { type: "string", description: "The Figma file key" },
                    message: { type: "string", description: "The comment text" },
                    x: { type: "number", description: "Canvas x-coordinate to pin the comment to" },
                    y: { type: "number", description: "Canvas y-coordinate to pin the comment to" },
                    node_id: { type: "string", description: "Node ID to anchor the comment to instead of coordinates" },
                    node_offset_x: { type: "number", description: "X offset relative to the node (required with node_id)" },
                    node_offset_y: { type: "number", description: "Y offset relative to the node (required with node_id)" },
                },
                required: ["file_key", "message"],
            },
        },
        {
            name: "delete_comment",
            description: "Delete a comment from a Figma file.",
            inputSchema: {
                type: "object",
                properties: {
                    file_key: { type: "string", description: "The Figma file key" },
                    comment_id: { type: "string", description: "The ID of the comment to delete" },
                },
                required: ["file_key", "comment_id"],
            },
        },
        {
            name: "get_team_projects",
            description: "List all projects in a Figma team.",
            inputSchema: {
                type: "object",
                properties: {
                    team_id: { type: "string", description: "The Figma team ID" },
                },
                required: ["team_id"],
            },
        },
        {
            name: "get_project_files",
            description: "List all files in a Figma project.",
            inputSchema: {
                type: "object",
                properties: {
                    project_id: { type: "string", description: "The Figma project ID" },
                },
                required: ["project_id"],
            },
        },
        {
            name: "get_team_components",
            description: "Get all published components for a Figma team (across all team libraries).",
            inputSchema: {
                type: "object",
                properties: {
                    team_id: { type: "string", description: "The Figma team ID" },
                    page_size: { type: "number", description: "Number of results per page (max 100)" },
                    after: { type: "number", description: "Cursor for forward pagination" },
                    before: { type: "number", description: "Cursor for backward pagination" },
                },
                required: ["team_id"],
            },
        },
        {
            name: "get_team_styles",
            description: "Get all published styles for a Figma team (across all team libraries).",
            inputSchema: {
                type: "object",
                properties: {
                    team_id: { type: "string", description: "The Figma team ID" },
                    page_size: { type: "number", description: "Number of results per page (max 100)" },
                    after: { type: "number", description: "Cursor for forward pagination" },
                    before: { type: "number", description: "Cursor for backward pagination" },
                },
                required: ["team_id"],
            },
        },
    ],
}));
server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    try {
        switch (name) {
            case "get_file": {
                const { file_key, depth, version, geometry } = args;
                const result = await client.getFile(file_key, { depth, version, geometry });
                return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
            }
            case "get_file_nodes": {
                const { file_key, node_ids, depth, version, geometry } = args;
                const result = await client.getFileNodes(file_key, node_ids, { depth, version, geometry });
                return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
            }
            case "get_file_components": {
                const { file_key } = args;
                const result = await client.getFileComponents(file_key);
                return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
            }
            case "get_file_styles": {
                const { file_key } = args;
                const result = await client.getFileStyles(file_key);
                return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
            }
            case "get_images": {
                const { file_key, node_ids, scale, format, svg_include_id, svg_simplify_stroke, use_absolute_bounds, version } = args;
                const result = await client.getImages(file_key, node_ids, {
                    scale,
                    format,
                    svg_include_id,
                    svg_simplify_stroke,
                    use_absolute_bounds,
                    version,
                });
                return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
            }
            case "get_image_fills": {
                const { file_key } = args;
                const result = await client.getImageFills(file_key);
                return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
            }
            case "get_comments": {
                const { file_key } = args;
                const result = await client.getComments(file_key);
                return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
            }
            case "post_comment": {
                const { file_key, message, x, y, node_id, node_offset_x, node_offset_y } = args;
                let client_meta;
                if (node_id !== undefined) {
                    client_meta = {
                        node_id,
                        node_offset: { x: node_offset_x ?? 0, y: node_offset_y ?? 0 },
                    };
                }
                else if (x !== undefined && y !== undefined) {
                    client_meta = { x, y };
                }
                const result = await client.postComment(file_key, message, client_meta);
                return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
            }
            case "delete_comment": {
                const { file_key, comment_id } = args;
                await client.deleteComment(file_key, comment_id);
                return { content: [{ type: "text", text: `Comment ${comment_id} deleted successfully.` }] };
            }
            case "get_team_projects": {
                const { team_id } = args;
                const result = await client.getTeamProjects(team_id);
                return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
            }
            case "get_project_files": {
                const { project_id } = args;
                const result = await client.getProjectFiles(project_id);
                return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
            }
            case "get_team_components": {
                const { team_id, page_size, after, before } = args;
                const result = await client.getTeamComponents(team_id, { page_size, after, before });
                return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
            }
            case "get_team_styles": {
                const { team_id, page_size, after, before } = args;
                const result = await client.getTeamStyles(team_id, { page_size, after, before });
                return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
            }
            default:
                throw new Error(`Unknown tool: ${name}`);
        }
    }
    catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        return {
            content: [{ type: "text", text: `Error: ${message}` }],
            isError: true,
        };
    }
});
const transport = new StdioServerTransport();
await server.connect(transport);
//# sourceMappingURL=index.js.map