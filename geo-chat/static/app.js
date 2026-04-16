/* ============================================================
   GeoChat – Geographer AI Assistant  |  client-side logic
   ============================================================ */

'use strict';

// ── State ──────────────────────────────────────────────────────────────────
const state = {
  messages:    [],   // {role, content}
  isStreaming: false,
  map:         null,
  markers:     [],
  allCoords:   [],
};

// ── DOM references ─────────────────────────────────────────────────────────
const $ = id => document.getElementById(id);

const DOM = {
  sidebar:       $('sidebar'),
  sidebarToggle: $('sidebarToggle'),
  topbarToggle:  $('topbarToggle'),
  newChatBtn:    $('newChatBtn'),
  topicBtns:     document.querySelectorAll('.topic-btn'),
  exampleCards:  document.querySelectorAll('.example-card'),

  welcome:       $('welcome'),
  messages:      $('messages'),

  userInput:     $('userInput'),
  sendBtn:       $('sendBtn'),

  mapPanel:      $('mapPanel'),
  mapToggleBtn:  $('mapToggleBtn'),
  mapCloseBtn:   $('mapCloseBtn'),
  locationList:  $('locationList'),

  statusDot:     $('statusDot'),
  statusText:    $('statusText'),
};

// ── Marked.js configuration ────────────────────────────────────────────────
marked.setOptions({
  breaks: true,
  gfm:    true,
});

// ── API health check ───────────────────────────────────────────────────────
async function checkHealth() {
  try {
    const res = await fetch('/api/health');
    const data = await res.json();
    if (data.api_key_configured) {
      DOM.statusDot.className = 'status-dot ok';
      DOM.statusText.textContent = 'Connected';
    } else {
      DOM.statusDot.className = 'status-dot warning';
      DOM.statusText.textContent = 'API key missing';
    }
  } catch {
    DOM.statusDot.className = 'status-dot error';
    DOM.statusText.textContent = 'Server offline';
  }
}

// ── Sidebar toggle ─────────────────────────────────────────────────────────
function toggleSidebar() {
  DOM.sidebar.classList.toggle('collapsed');
}

DOM.sidebarToggle.addEventListener('click', toggleSidebar);
DOM.topbarToggle.addEventListener('click', toggleSidebar);

// ── Map initialisation ─────────────────────────────────────────────────────
function initMap() {
  if (state.map) return;

  state.map = L.map('map', {
    center:         [20, 0],
    zoom:           2,
    zoomControl:    true,
    attributionControl: false,
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
  }).addTo(state.map);

  // Fix Leaflet marker icon paths (CDN usage)
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl:       'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl:     'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  });
}

function addCoordinatesToMap(coords) {
  if (!coords || coords.length === 0) return;

  // Open map panel automatically when new coordinates arrive
  if (DOM.mapPanel.classList.contains('hidden')) {
    openMapPanel();
  }

  coords.forEach(coord => {
    // Skip if already pinned
    const exists = state.allCoords.some(c => c.lat === coord.lat && c.lon === coord.lon);
    if (exists) return;

    state.allCoords.push(coord);

    const marker = L.marker([coord.lat, coord.lon]).addTo(state.map);
    marker.bindPopup(`<strong>${escapeHtml(coord.label)}</strong><br/><code>${coord.lat}, ${coord.lon}</code>`);
    state.markers.push(marker);

    // Add to location list
    const item = document.createElement('div');
    item.className = 'location-item';
    item.innerHTML = `<span class="location-dot"></span><span>${escapeHtml(coord.label)}</span>`;
    item.addEventListener('click', () => {
      state.map.setView([coord.lat, coord.lon], 6, { animate: true });
      marker.openPopup();
    });
    DOM.locationList.appendChild(item);
  });

  // Remove empty-state text
  const noLoc = DOM.locationList.querySelector('.no-locations');
  if (noLoc) noLoc.remove();

  // Fit map to all markers
  if (state.markers.length === 1) {
    state.map.setView([coords[0].lat, coords[0].lon], 5);
  } else if (state.markers.length > 1) {
    const group = L.featureGroup(state.markers);
    state.map.fitBounds(group.getBounds().pad(0.2));
  }
}

function openMapPanel() {
  DOM.mapPanel.classList.remove('hidden');
  DOM.mapToggleBtn.classList.add('active');
  initMap();
  setTimeout(() => state.map && state.map.invalidateSize(), 300);
}

function closeMapPanel() {
  DOM.mapPanel.classList.add('hidden');
  DOM.mapToggleBtn.classList.remove('active');
}

DOM.mapToggleBtn.addEventListener('click', () => {
  if (DOM.mapPanel.classList.contains('hidden')) {
    openMapPanel();
  } else {
    closeMapPanel();
  }
});

DOM.mapCloseBtn.addEventListener('click', closeMapPanel);

// ── Render helpers ─────────────────────────────────────────────────────────
function escapeHtml(str) {
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
}

/**
 * Post-process bot markdown: highlight coordinate tags so they are
 * clickable and show them on the map.
 */
function renderBotContent(rawText) {
  // Render markdown first
  let html = marked.parse(rawText);

  // Then highlight [LAT: X, LON: Y] patterns with a clickable span
  html = html.replace(
    /\[LAT:\s*([-\d.]+),\s*LON:\s*([-\d.]+)\]/g,
    (match, lat, lon) => {
      const label = `${lat}, ${lon}`;
      return `<span class="coord-tag" data-lat="${lat}" data-lon="${lon}" title="Click to zoom map">`
           + `📍 ${lat}, ${lon}</span>`;
    }
  );

  return html;
}

function createMessageRow(role, content) {
  const row = document.createElement('div');
  row.className = `message-row ${role}`;

  const avatar = document.createElement('div');
  avatar.className = `avatar ${role}`;
  avatar.textContent = role === 'bot' ? '🌍' : '👤';

  const msgContent = document.createElement('div');
  msgContent.className = 'message-content';

  const name = document.createElement('div');
  name.className = 'message-name';
  name.textContent = role === 'bot' ? 'GeoBot' : 'You';

  const bubble = document.createElement('div');
  bubble.className = 'message-bubble';

  if (role === 'bot') {
    bubble.innerHTML = renderBotContent(content);
    // Wire up coord-tag clicks after rendering
    bubble.querySelectorAll('.coord-tag').forEach(tag => {
      tag.addEventListener('click', () => {
        const lat = parseFloat(tag.dataset.lat);
        const lon = parseFloat(tag.dataset.lon);
        openMapPanel();
        state.map.setView([lat, lon], 7, { animate: true });
      });
    });
  } else {
    bubble.textContent = content;
  }

  msgContent.appendChild(name);
  msgContent.appendChild(bubble);
  row.appendChild(avatar);
  row.appendChild(msgContent);
  return { row, bubble };
}

function appendUserMessage(text) {
  DOM.welcome.classList.add('hidden');

  const { row } = createMessageRow('user', text);
  DOM.messages.appendChild(row);
  scrollToBottom();
}

function appendBotMessage(text, coords) {
  const { row, bubble } = createMessageRow('bot', text);
  DOM.messages.appendChild(row);

  if (coords && coords.length > 0) {
    addCoordinatesToMap(coords);
  }

  scrollToBottom();
  return bubble;
}

function appendTypingIndicator() {
  const row = document.createElement('div');
  row.className = 'message-row bot';
  row.id = 'typing-row';

  const avatar = document.createElement('div');
  avatar.className = 'avatar bot';
  avatar.textContent = '🌍';

  const msgContent = document.createElement('div');
  msgContent.className = 'message-content';

  const name = document.createElement('div');
  name.className = 'message-name';
  name.textContent = 'GeoBot';

  const bubble = document.createElement('div');
  bubble.className = 'message-bubble';
  bubble.innerHTML = `<div class="typing-indicator">
    <div class="typing-dot"></div>
    <div class="typing-dot"></div>
    <div class="typing-dot"></div>
  </div>`;

  msgContent.appendChild(name);
  msgContent.appendChild(bubble);
  row.appendChild(avatar);
  row.appendChild(msgContent);
  DOM.messages.appendChild(row);
  scrollToBottom();
  return row;
}

function removeTypingIndicator() {
  const el = $('typing-row');
  if (el) el.remove();
}

function showError(msg) {
  const div = document.createElement('div');
  div.className = 'message-error';
  div.textContent = `Error: ${msg}`;
  DOM.messages.appendChild(div);
  scrollToBottom();
}

function scrollToBottom() {
  DOM.messages.scrollTop = DOM.messages.scrollHeight;
}

// ── Send message ───────────────────────────────────────────────────────────
async function sendMessage(text) {
  if (!text.trim() || state.isStreaming) return;

  state.isStreaming = true;
  DOM.sendBtn.disabled = true;
  DOM.userInput.disabled = true;

  appendUserMessage(text);
  state.messages.push({ role: 'user', content: text });

  const typingRow = appendTypingIndicator();

  try {
    // Use streaming endpoint for a live-typing feel
    const res = await fetch('/api/chat/stream', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ messages: state.messages, stream: true }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: res.statusText }));
      throw new Error(err.detail || 'Request failed');
    }

    removeTypingIndicator();

    // Create bot message row (will be filled incrementally)
    const row = document.createElement('div');
    row.className = 'message-row bot';

    const avatar = document.createElement('div');
    avatar.className = 'avatar bot';
    avatar.textContent = '🌍';

    const msgContent = document.createElement('div');
    msgContent.className = 'message-content';

    const nameEl = document.createElement('div');
    nameEl.className = 'message-name';
    nameEl.textContent = 'GeoBot';

    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';

    msgContent.appendChild(nameEl);
    msgContent.appendChild(bubble);
    row.appendChild(avatar);
    row.appendChild(msgContent);
    DOM.messages.appendChild(row);

    // Stream SSE
    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let fullText = '';
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop(); // keep incomplete last line

      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;
        const payload = line.slice(6);
        if (payload === '[DONE]') continue;

        try {
          const evt = JSON.parse(payload);

          if (evt.type === 'text') {
            fullText += evt.text;
            bubble.innerHTML = renderBotContent(fullText);
            // Wire coord-tag clicks
            bubble.querySelectorAll('.coord-tag').forEach(tag => {
              if (!tag.dataset.wired) {
                tag.dataset.wired = '1';
                tag.addEventListener('click', () => {
                  const lat = parseFloat(tag.dataset.lat);
                  const lon = parseFloat(tag.dataset.lon);
                  openMapPanel();
                  state.map.setView([lat, lon], 7, { animate: true });
                });
              }
            });
            scrollToBottom();

          } else if (evt.type === 'coordinates') {
            addCoordinatesToMap(evt.coordinates);

          } else if (evt.type === 'error') {
            throw new Error(evt.message);
          }
        } catch (parseErr) {
          if (parseErr.message !== 'Unexpected end of JSON input') {
            console.warn('SSE parse error:', parseErr);
          }
        }
      }
    }

    // Save to conversation history
    state.messages.push({ role: 'assistant', content: fullText });
    DOM.welcome.classList.add('hidden');

  } catch (err) {
    removeTypingIndicator();
    showError(err.message);
  } finally {
    state.isStreaming = false;
    DOM.sendBtn.disabled = false;
    DOM.userInput.disabled = false;
    DOM.userInput.focus();
  }
}

// ── Input handling ─────────────────────────────────────────────────────────
DOM.userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    const text = DOM.userInput.value.trim();
    if (text) {
      DOM.userInput.value = '';
      autoResize();
      sendMessage(text);
    }
  }
});

DOM.sendBtn.addEventListener('click', () => {
  const text = DOM.userInput.value.trim();
  if (text) {
    DOM.userInput.value = '';
    autoResize();
    sendMessage(text);
  }
});

function autoResize() {
  DOM.userInput.style.height = 'auto';
  DOM.userInput.style.height = Math.min(DOM.userInput.scrollHeight, 160) + 'px';
}
DOM.userInput.addEventListener('input', autoResize);

// ── Quick topics & example cards ───────────────────────────────────────────
DOM.topicBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const prompt = btn.dataset.prompt;
    if (prompt) sendMessage(prompt);
    // On mobile: close sidebar after selecting
    if (window.innerWidth < 768) DOM.sidebar.classList.add('collapsed');
  });
});

DOM.exampleCards.forEach(card => {
  card.addEventListener('click', () => {
    const prompt = card.dataset.prompt;
    if (prompt) sendMessage(prompt);
  });
});

// ── New chat ───────────────────────────────────────────────────────────────
DOM.newChatBtn.addEventListener('click', () => {
  state.messages = [];

  // Clear messages
  DOM.messages.innerHTML = '';
  DOM.welcome.classList.remove('hidden');

  // Clear map markers
  state.markers.forEach(m => state.map && state.map.removeLayer(m));
  state.markers  = [];
  state.allCoords = [];
  DOM.locationList.innerHTML = '<p class="no-locations">No locations pinned yet.</p>';

  DOM.userInput.focus();
  if (window.innerWidth < 768) DOM.sidebar.classList.add('collapsed');
});

// ── Init ───────────────────────────────────────────────────────────────────
(function init() {
  checkHealth();

  // Set initial empty-state for location list
  DOM.locationList.innerHTML = '<p class="no-locations">No locations pinned yet.</p>';

  DOM.userInput.focus();
})();
