/* ============================================================
   MVX — Application Logic (v2)
   ============================================================ */

/* ---------- 1. API CONFIG ---------- */
const TMDB_API_KEY = "6fbf59759e4fb40d0bfd5bcd409b157d";
const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_IMG_URL  = "https://image.tmdb.org/t/p/";

/* ⚠️ Add your YouTube Data API v3 key here (your TMDB key will NOT work). */
const YOUTUBE_API_KEY = "AIzaSyD52PD_n9J5UQCzowHzHzK6saBmwb8BLS8";
const YOUTUBE_SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";

/* ---------- 2. CURATED COLLECTIONS ---------- */
const CURATED_COLLECTIONS = {
  featured: [
    { id: "dQw4w9WgXcQ", title: "Rick Astley — Never Gonna Give You Up", channel: "Rick Astley", desc: "The internet's most legendary music video.", thumb: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg" },
    { id: "JGwWNGJdvx8", title: "Ed Sheeran — Shape of You", channel: "Ed Sheeran", desc: "Official music video for the global hit.", thumb: "https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg" },
    { id: "kJQP7kiw5Fk", title: "Luis Fonsi — Despacito ft. Daddy Yankee", channel: "Luis Fonsi", desc: "One of the most viewed videos on YouTube.", thumb: "https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg" },
    { id: "RgKAFK5djSk", title: "Wiz Khalifa — See You Again ft. Charlie Puth", channel: "Wiz Khalifa", desc: "A tribute to Paul Walker.", thumb: "https://i.ytimg.com/vi/RgKAFK5djSk/hqdefault.jpg" },
  ],
  music: [
    { id: "OPf0YbXqDm0", title: "Mark Ronson — Uptown Funk ft. Bruno Mars", channel: "Mark Ronson", desc: "Legendary funk groove.", thumb: "https://i.ytimg.com/vi/OPf0YbXqDm0/hqdefault.jpg" },
    { id: "CevxZvSJLk8", title: "Katy Perry — Roar", channel: "Katy Perry", desc: "Empowering pop anthem.", thumb: "https://i.ytimg.com/vi/CevxZvSJLk8/hqdefault.jpg" },
    { id: "hT_nvWreIhg", title: "OneRepublic — Counting Stars", channel: "OneRepublic", desc: "Anthemic pop-rock classic.", thumb: "https://i.ytimg.com/vi/hT_nvWreIhg/hqdefault.jpg" },
    { id: "fRh_vgS2dFE", title: "Justin Bieber — Sorry", channel: "Justin Bieber", desc: "Dance-driven official video.", thumb: "https://i.ytimg.com/vi/fRh_vgS2dFE/hqdefault.jpg" },
  ],
  official: [
    { id: "papuvlVeZg8", title: "Rema — Calm Down", channel: "Rema", desc: "Afrobeats global smash.", thumb: "https://i.ytimg.com/vi/papuvlVeZg8/hqdefault.jpg" },
    { id: "2Vv-BfVoq4g", title: "Ed Sheeran — Perfect", channel: "Ed Sheeran", desc: "Official music video.", thumb: "https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg" },
    { id: "rtOvBOTyX00", title: "Christina Perri — A Thousand Years", channel: "Christina Perri", desc: "From The Twilight Saga.", thumb: "https://i.ytimg.com/vi/rtOvBOTyX00/hqdefault.jpg" },
    { id: "YQHsXMglC9A", title: "Adele — Hello", channel: "Adele", desc: "Iconic comeback single.", thumb: "https://i.ytimg.com/vi/YQHsXMglC9A/hqdefault.jpg" },
  ],
  trailers: [
    { id: "TcMBFSGVi1c", title: "Avengers: Endgame — Official Trailer", channel: "Marvel", desc: "The epic conclusion.", thumb: "https://i.ytimg.com/vi/TcMBFSGVi1c/hqdefault.jpg" },
    { id: "zSWdZVtXT7E", title: "Interstellar — Official Trailer", channel: "Warner Bros.", desc: "Space epic from Nolan.", thumb: "https://i.ytimg.com/vi/zSWdZVtXT7E/hqdefault.jpg" },
    { id: "8g18jFHCLXk", title: "Dune — Official Trailer", channel: "Warner Bros.", desc: "Sci-fi desert saga.", thumb: "https://i.ytimg.com/vi/8g18jFHCLXk/hqdefault.jpg" },
    { id: "K0eDlFX9GMc", title: "Oppenheimer — Official Trailer", channel: "Universal Pictures", desc: "Nolan's historical epic.", thumb: "https://i.ytimg.com/vi/K0eDlFX9GMc/hqdefault.jpg" },
  ],
};

/* ---------- 3. SAMPLE MOVIES ---------- */
const SAMPLE_MOVIES = [
  { id: "s1", title: "Inception", year: "2010", rating: 8.8, genres: "Sci-Fi · Thriller", overview: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.", poster: null },
  { id: "s2", title: "Interstellar", year: "2014", rating: 8.7, genres: "Sci-Fi · Drama", overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.", poster: null },
  { id: "s3", title: "The Dark Knight", year: "2008", rating: 9.0, genres: "Action · Crime", overview: "Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos.", poster: null },
  { id: "s4", title: "Parasite", year: "2019", rating: 8.5, genres: "Thriller · Drama", overview: "Greed and class discrimination threaten the newly formed symbiotic relationship between two families.", poster: null },
  { id: "s5", title: "Dune: Part Two", year: "2024", rating: 8.5, genres: "Sci-Fi · Adventure", overview: "Paul Atreides unites with the Fremen to wage war against the House Harkonnen.", poster: null },
  { id: "s6", title: "Everything Everywhere All at Once", year: "2022", rating: 7.8, genres: "Action · Comedy", overview: "An aging Chinese immigrant is swept up in an insane adventure across the multiverse.", poster: null },
  { id: "s7", title: "Oppenheimer", year: "2023", rating: 8.3, genres: "Drama · History", overview: "The story of J. Robert Oppenheimer and the creation of the atomic bomb.", poster: null },
  { id: "s8", title: "Joker", year: "2019", rating: 8.4, genres: "Drama · Crime", overview: "A mentally troubled comedian embarks on a downward spiral of crime and chaos.", poster: null },
];

/* ---------- 4. STATE ---------- */
const state = {
  ytQuery: "", ytSort: "relevance", ytResults: [],
  ytNextPageToken: null, ytPrevPageToken: null, ytPage: 1,
  ytAbort: null, ytCache: new Map(),
  movieTab: "trending", movieQuery: "",
  activeCollection: "featured",
};

/* ---------- 5. UTILITIES ---------- */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
function escapeHtml(s) {
  if (s == null) return "";
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
function formatDate(iso) {
  if (!iso) return "";
  try { return new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" }); }
  catch { return ""; }
}
function showToast(msg, icon = "bi-check-circle-fill") {
  let t = $("#mvxToast");
  if (!t) { t = document.createElement("div"); t.id = "mvxToast"; t.className = "mvx-toast"; t.setAttribute("role", "status"); t.setAttribute("aria-live", "polite"); document.body.appendChild(t); }
  t.innerHTML = `<i class="bi ${icon}"></i> ${escapeHtml(msg)}`;
  t.classList.add("show");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => t.classList.remove("show"), 2400);
}
function youtubeWatchUrl(id) { return `https://www.youtube.com/watch?v=${encodeURIComponent(id)}`; }
function youtubeSearchUrl(q) { return `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`; }
function youtubeThumb(id) { return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`; }

/* ---------- 6. HERO SLIDESHOW (2s rotation) ---------- */
function initHeroSlideshow() {
  const slides = $$(".mvx-hero-slide");
  if (slides.length < 2) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let idx = 0;
  setInterval(() => {
    slides[idx].classList.remove("active");
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add("active");
  }, 2000); // change every 2 seconds
}

/* ---------- 7. YOUTUBE SEARCH ---------- */
function initYouTubeSearch() {
  const form = $("#ytSearchForm");
  const input = $("#ytSearchInput");
  const sortSel = $("#ytSortSelect");
  const clearBtn = $("#ytClearBtn");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = input.value.trim();
    if (!q) return;
    state.ytSort = sortSel.value || "relevance";
    state.ytQuery = q; state.ytPage = 1;
    state.ytNextPageToken = null; state.ytPrevPageToken = null;
    runYouTubeSearch(q, null);
  });
  sortSel.addEventListener("change", () => {
    if (!state.ytQuery) return;
    state.ytSort = sortSel.value; state.ytPage = 1;
    state.ytNextPageToken = null; state.ytPrevPageToken = null;
    runYouTubeSearch(state.ytQuery, null);
  });
  clearBtn.addEventListener("click", () => {
    input.value = ""; state.ytQuery = ""; state.ytResults = []; state.ytPage = 1;
    state.ytNextPageToken = null; state.ytPrevPageToken = null;
    $("#ytResults").innerHTML = "";
    $("#ytResultsMeta").textContent = "Enter a search above to discover music and videos.";
    $("#ytStatus").textContent = ""; $("#ytPageInfo").textContent = "Page 1";
    $("#ytPrevBtn").disabled = true; $("#ytNextBtn").disabled = true;
    clearBtn.classList.add("d-none");
    if (state.ytAbort) state.ytAbort.abort();
  });
  $$(".mvx-chip").forEach(chip => {
    chip.addEventListener("click", () => { input.value = chip.dataset.chip; form.requestSubmit(); });
  });
  $("#ytPrevBtn")?.addEventListener("click", () => {
    if (!state.ytPrevPageToken) return;
    state.ytPage--; runYouTubeSearch(state.ytQuery, state.ytPrevPageToken, true);
  });
  $("#ytNextBtn")?.addEventListener("click", () => {
    if (!state.ytNextPageToken) return;
    state.ytPage++; runYouTubeSearch(state.ytQuery, state.ytNextPageToken);
  });
}

async function runYouTubeSearch(query, pageToken, isPrev = false) {
  const statusEl = $("#ytStatus");
  const resultsEl = $("#ytResults");
  const metaEl = $("#ytResultsMeta");
  const clearBtn = $("#ytClearBtn");

  if (!YOUTUBE_API_KEY || YOUTUBE_API_KEY === "YOUR_YOUTUBE_API_KEY") {
    renderYouTubeApiMissing(resultsEl, query);
    statusEl.textContent = ""; clearBtn.classList.remove("d-none");
    metaEl.textContent = `Search: "${query}"`;
    return;
  }
  if (state.ytAbort) state.ytAbort.abort();
  state.ytAbort = new AbortController();

  const cacheKey = `${query}|${state.ytSort}|${pageToken || "first"}`;
  if (state.ytCache.has(cacheKey)) {
    applyYouTubeResults(state.ytCache.get(cacheKey), query, clearBtn, metaEl, statusEl);
    return;
  }
  resultsEl.innerHTML = renderSkeletons(8, true);
  statusEl.textContent = `Searching YouTube for "${query}"…`;
  metaEl.textContent = `Search: "${query}"`;
  clearBtn.classList.remove("d-none");

  try {
    const params = new URLSearchParams({
      part: "snippet", type: "video", q: query, maxResults: "24",
      order: state.ytSort, key: YOUTUBE_API_KEY,
    });
    if (pageToken) params.set("pageToken", pageToken);
    const res = await fetch(`${YOUTUBE_SEARCH_URL}?${params}`, { signal: state.ytAbort.signal });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error?.message || `YouTube API error (${res.status})`);
    }
    const data = await res.json();
    const items = (data.items || []).filter(it => it.id?.videoId);
    state.ytResults = items;
    state.ytNextPageToken = data.nextPageToken || null;
    if (!isPrev) state.ytPrevPageToken = data.prevPageToken || (state.ytPage > 1 ? state.ytPrevPageToken : null);
    else state.ytPrevPageToken = data.prevPageToken || null;
    state.ytCache.set(cacheKey, items);
    applyYouTubeResults(items, query, clearBtn, metaEl, statusEl, data);
  } catch (err) {
    if (err.name === "AbortError") return;
    resultsEl.innerHTML = renderErrorState("YouTube search failed", err.message || "Please check your API key and try again.", youtubeSearchUrl(query));
    statusEl.textContent = "";
    $("#ytPrevBtn").disabled = true; $("#ytNextBtn").disabled = true;
  }
}

function applyYouTubeResults(items, query, clearBtn, metaEl, statusEl) {
  const resultsEl = $("#ytResults");
  statusEl.textContent = items.length ? `${items.length} results on this page.` : "";
  metaEl.textContent = `Search: "${query}"`;
  clearBtn.classList.remove("d-none");
  if (!items.length) {
    resultsEl.innerHTML = renderEmptyState("No results found", `No videos matched "${escapeHtml(query)}". Try a different search.`);
  } else {
    resultsEl.innerHTML = items.map(v => renderVideoCard({
      id: v.id.videoId, title: v.snippet.title, channel: v.snippet.channelTitle,
      published: v.snippet.publishedAt, description: v.snippet.description,
      thumb: v.snippet.thumbnails?.high?.url || v.snippet.thumbnails?.medium?.url || youtubeThumb(v.id.videoId),
    })).join("");
    bindCardEvents(resultsEl);
  }
  $("#ytPrevBtn").disabled = !state.ytPrevPageToken && state.ytPage <= 1;
  $("#ytNextBtn").disabled = !state.ytNextPageToken;
  $("#ytPageInfo").textContent = `Page ${state.ytPage}`;
}

function renderYouTubeApiMissing(container, query) {
  container.innerHTML = `
    <div class="mvx-error" style="grid-column:1/-1;">
      <i class="bi bi-key-fill"></i>
      <div>
        <h4>YouTube API key not configured</h4>
        <p>The site owner needs to add a YouTube Data API v3 key in <code>app.js</code>. In the meantime, search directly on YouTube.</p>
        <a href="${youtubeSearchUrl(query)}" target="_blank" rel="noopener"><i class="bi bi-youtube"></i> Search "${escapeHtml(query)}" on YouTube</a>
      </div>
    </div>
  `;
}

/* ---------- 8. CURATED COLLECTIONS ---------- */
function renderCuratedCollection(name) {
  const grid = $("#curatedGrid");
  const items = CURATED_COLLECTIONS[name] || [];
  if (!items.length) { grid.innerHTML = renderEmptyState("No curated videos", "Add entries to CURATED_COLLECTIONS."); return; }
  grid.innerHTML = items.map(v => renderVideoCard({
    id: v.id, title: v.title, channel: v.channel, published: null,
    description: v.desc, thumb: v.thumb || youtubeThumb(v.id), curated: true,
  })).join("");
  bindCardEvents(grid);
}
function initCuratedTabs() {
  $$(".mvx-tab[data-collection]").forEach(tab => {
    tab.addEventListener("click", () => {
      $$(".mvx-tab[data-collection]").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      state.activeCollection = tab.dataset.collection;
      renderCuratedCollection(state.activeCollection);
    });
  });
}

/* ---------- 9. CARD RENDERERS ---------- */
function renderVideoCard(v, curated = false) {
  return `
    <article class="mvx-card mvx-card--video mvx-fade-in" data-video-id="${escapeHtml(v.id)}">
      <div class="mvx-card-media">
        <img src="${escapeHtml(v.thumb)}" alt="${escapeHtml(v.title)}" loading="lazy"
             onerror="this.src='https://i.ytimg.com/vi/${escapeHtml(v.id)}/hqdefault.jpg'" />
        <div class="mvx-card-overlay">
          <button class="mvx-play-btn" data-play="${escapeHtml(v.id)}" aria-label="Play ${escapeHtml(v.title)}">
            <i class="bi bi-play-fill"></i>
          </button>
        </div>
        ${curated ? `<span class="mvx-rating" style="color:#fff;border-color:rgba(139,92,246,.5);background:rgba(139,92,246,.35);"><i class="bi bi-patch-check-fill"></i> Curated</span>` : ""}
      </div>
      <div class="mvx-card-body">
        <h3 class="mvx-card-title">${escapeHtml(v.title)}</h3>
        <div class="mvx-card-meta">
          <span>${escapeHtml(v.channel || "")}</span>
          ${v.published ? `<span class="dot"></span><span>${formatDate(v.published)}</span>` : ""}
        </div>
        ${v.description ? `<p class="mvx-card-desc">${escapeHtml(v.description)}</p>` : ""}
      </div>
    </article>
  `;
}
function renderMovieCard(m) {
  const poster = m.poster || null;
  const posterMarkup = poster
    ? `<img src="${escapeHtml(poster)}" alt="${escapeHtml(m.title)} poster" loading="lazy"
             onerror="this.parentElement.innerHTML='<div class=\\'mvx-poster-fallback\\'><i class=\\'bi bi-film\\'></i></div>'" />`
    : `<div class="mvx-poster-fallback"><i class="bi bi-film"></i></div>`;
  const rating = m.rating ? `<span class="mvx-rating"><i class="bi bi-star-fill"></i> ${Number(m.rating).toFixed(1)}</span>` : "";
  return `
    <article class="mvx-card mvx-fade-in" data-movie-id="${escapeHtml(m.id)}">
      <div class="mvx-card-media">
        ${posterMarkup}
        ${rating}
      </div>
      <div class="mvx-card-body">
        <h3 class="mvx-card-title">${escapeHtml(m.title)}</h3>
        <div class="mvx-card-meta">
          ${m.year ? `<span>${escapeHtml(m.year)}</span>` : ""}
          ${m.genres ? `<span class="dot"></span><span>${escapeHtml(m.genres)}</span>` : ""}
        </div>
      </div>
    </article>
  `;
}
function renderSkeletons(count, isVideo = false) {
  let s = "";
  for (let i = 0; i < count; i++) s += `<div class="${isVideo ? 'mvx-card mvx-card--video' : ''}"><div class="mvx-skeleton"></div></div>`;
  return s;
}
function renderEmptyState(title, msg) {
  return `<div class="mvx-empty"><i class="bi bi-inbox"></i><h4>${escapeHtml(title)}</h4><p>${msg}</p></div>`;
}
function renderErrorState(title, msg, fallbackUrl) {
  return `
    <div class="mvx-error">
      <i class="bi bi-exclamation-triangle-fill"></i>
      <div>
        <h4>${escapeHtml(title)}</h4><p>${escapeHtml(msg)}</p>
        ${fallbackUrl ? `<a href="${escapeHtml(fallbackUrl)}" target="_blank" rel="noopener"><i class="bi bi-box-arrow-up-right"></i> Open on YouTube</a>` : ""}
      </div>
    </div>
  `;
}

/* ---------- 10. CARD EVENTS ---------- */
function bindCardEvents(container = document) {
  $$("[data-play]", container).forEach(btn => {
    btn.addEventListener("click", (e) => { e.stopPropagation(); openVideoModal(btn.dataset.play); });
  });
  $$(".mvx-card--video[data-video-id]", container).forEach(card => {
    card.addEventListener("click", (e) => {
      if (e.target.closest("button")) return;
      openVideoModal(card.dataset.videoId);
    });
  });
  $$(".mvx-card[data-movie-id]:not(.mvx-card--video)", container).forEach(card => {
    card.addEventListener("click", (e) => {
      if (e.target.closest("button")) return;
      openMovieModal(card.dataset.movieId);
    });
  });
}

/* ---------- 11. PLAYER MODAL ---------- */
function openVideoModal(videoId) {
  if (!videoId) return;
  const frame = $("#ytPlayerFrame");
  const meta = $("#videoModalMeta");
  const titleEl = $("#videoModalTitle");
  const link = $("#videoExternalLink");

  frame.src = `https://www.youtube.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0`;
  titleEl.textContent = "Now Playing";
  meta.textContent = "Playing via official YouTube embed. If the video owner has disabled embeds, use the button below to watch on YouTube.";
  link.href = youtubeWatchUrl(videoId);

  bootstrap.Modal.getOrCreateInstance($("#videoModal")).show();
}
function initVideoModalTeardown() {
  const modalEl = $("#videoModal");
  if (!modalEl) return;
  modalEl.addEventListener("hidden.bs.modal", () => {
    const frame = $("#ytPlayerFrame");
    if (frame) frame.src = "";
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const a = bootstrap.Modal.getInstance(modalEl); if (a) a.hide();
      const b = bootstrap.Modal.getInstance($("#movieModal")); if (b) b.hide();
    }
  });
}

/* ---------- 12. MOVIES ---------- */
async function tmdbFetch(path, params = {}) {
  const url = new URL(`${TMDB_BASE_URL}${path}`);
  url.searchParams.set("api_key", TMDB_API_KEY);
  url.searchParams.set("language", "en-US");
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`TMDB ${res.status}: ${res.statusText}`);
  return res.json();
}
function mapTmdbMovie(m) {
  return {
    id: m.id, title: m.title || m.name || "Untitled",
    year: (m.release_date || m.first_air_date || "").slice(0, 4),
    rating: m.vote_average || 0, overview: m.overview || "",
    poster: m.poster_path ? `${TMDB_IMG_URL}w500${m.poster_path}` : null,
    genres: "",
  };
}
async function loadMoviesByTab(tab) {
  const grid = $("#movieGrid");
  const statusEl = $("#movieStatus");
  const note = $("#movieSourceNote");
  state.movieTab = tab; state.movieQuery = "";
  grid.innerHTML = renderSkeletons(12);
  statusEl.textContent = "Loading movies…";
  try {
    const data = await tmdbFetch(tab === "now_playing" ? "/movie/now_playing" : `/movie/${tab}`, { page: "1" });
    renderMovieGrid((data.results || []).map(mapTmdbMovie));
    statusEl.textContent = ""; note.textContent = "Live data from TMDB.";
  } catch {
    grid.innerHTML = ""; statusEl.textContent = "";
    note.textContent = "Showing sample movie data (TMDB unavailable).";
    renderMovieGrid(SAMPLE_MOVIES);
  }
}
async function searchMovies(query) {
  const grid = $("#movieGrid");
  const statusEl = $("#movieStatus");
  const note = $("#movieSourceNote");
  grid.innerHTML = renderSkeletons(12);
  statusEl.textContent = `Searching movies for "${query}"…`;
  try {
    const data = await tmdbFetch("/search/movie", { query, page: "1", include_adult: "false" });
    const movies = (data.results || []).map(mapTmdbMovie).filter(m => m.poster);
    note.textContent = `Search results for "${query}" (TMDB)`;
    if (!movies.length) grid.innerHTML = renderEmptyState("No movies found", "Try a different title.");
    else renderMovieGrid(movies);
    statusEl.textContent = "";
  } catch {
    statusEl.textContent = "Movie search failed. Showing sample data.";
    renderMovieGrid(SAMPLE_MOVIES);
  }
}
function renderMovieGrid(movies) {
  const grid = $("#movieGrid");
  if (!movies.length) { grid.innerHTML = renderEmptyState("No movies available", "Try a different tab or search."); return; }
  grid.innerHTML = movies.map(renderMovieCard).join("");
  bindCardEvents(grid);
}
function initMovieTabs() {
  $$("#movieTabs .mvx-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      $$("#movieTabs .mvx-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      loadMoviesByTab(tab.dataset.tab);
    });
  });
  $("#movieSearchForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = $("#movieSearchInput").value.trim();
    if (!q) { loadMoviesByTab("trending"); return; }
    searchMovies(q);
  });
}
async function openMovieModal(id) {
  const body = $("#movieModalBody");
  body.innerHTML = `<p style="color:var(--mvx-text-2)">Loading details…</p>`;
  $("#movieModalTitle").textContent = "Movie Details";
  bootstrap.Modal.getOrCreateInstance($("#movieModal")).show();

  if (String(id).startsWith("s")) {
    const m = SAMPLE_MOVIES.find(x => x.id === id);
    if (m) renderMovieDetailModal(m, true);
    return;
  }
  try {
    const data = await tmdbFetch(`/movie/${id}`, {});
    const mapped = mapTmdbMovie(data);
    mapped.genres = (data.genres || []).map(g => g.name).join(" · ");
    mapped.tagline = data.tagline || "";
    mapped.runtime = data.runtime || 0;
    renderMovieDetailModal(mapped, false);
  } catch (err) {
    body.innerHTML = renderErrorState("Could not load movie", err.message, null);
  }
}
function renderMovieDetailModal(m, isSample = false) {
  const body = $("#movieModalBody");
  $("#movieModalTitle").textContent = m.title;
  const poster = m.poster
    ? `<img src="${escapeHtml(m.poster)}" alt="${escapeHtml(m.title)} poster" />`
    : `<div class="mvx-poster-fallback"><i class="bi bi-film"></i></div>`;
  body.innerHTML = `
    <div class="mvx-md-hero">
      <div class="mvx-md-poster">${poster}</div>
      <div class="mvx-md-info">
        <h3>${escapeHtml(m.title)}</h3>
        <div class="mvx-card-meta">
          ${m.year ? `<span>${escapeHtml(m.year)}</span>` : ""}
          ${m.rating ? `<span class="dot"></span><span><i class="bi bi-star-fill" style="color:#ffd166"></i> ${Number(m.rating).toFixed(1)}</span>` : ""}
          ${m.runtime ? `<span class="dot"></span><span>${m.runtime} min</span>` : ""}
          ${m.genres ? `<span class="dot"></span><span>${escapeHtml(m.genres)}</span>` : ""}
        </div>
        ${m.tagline ? `<p style="font-style:italic;opacity:.8;margin-bottom:10px">"${escapeHtml(m.tagline)}"</p>` : ""}
        <p>${escapeHtml(m.overview || "No overview available.")}</p>
        <div class="mvx-md-actions">
          <button class="btn mvx-btn-primary" id="movieTrailerBtn"><i class="bi bi-youtube"></i> Watch Trailer on YouTube</button>
          ${isSample ? `<span class="mvx-badge" style="margin:0;background:rgba(139,92,246,.15);border-color:rgba(139,92,246,.4);">Sample data</span>` : ""}
        </div>
      </div>
    </div>
  `;
  $("#movieTrailerBtn")?.addEventListener("click", () => {
    window.open(youtubeSearchUrl(`${m.title} ${m.year || ""} official trailer`.trim()), "_blank", "noopener");
  });
}

/* ---------- 13. NAV / MISC ---------- */
function initNav() {
  const nav = $("#mvxNav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 30);
  }, { passive: true });

  const sections = ["home", "movies", "music", "trending"]
    .map(id => document.getElementById(id)).filter(Boolean);
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        $$(".mvx-nav-link").forEach(l => l.classList.remove("active"));
        const l = $(`.mvx-nav-link[href="#${en.target.id}"]`);
        if (l) l.classList.add("active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach(s => io.observe(s));

  $$(".mvx-nav-link").forEach(link => {
    link.addEventListener("click", () => {
      const c = bootstrap.Collapse.getInstance($("#navMenu"));
      if (c && window.innerWidth < 992) c.hide();
    });
  });
}
function initYear() {
  const el = $("#year");
  if (el) el.textContent = new Date().getFullYear();
}
function initLegalLinks() {
  $$("[data-legal]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const type = link.dataset.legal;
      if (type === "privacy") {
        alert("MVX Privacy Policy\n\nWe do not collect personal data. Movie data is provided by TMDB. Videos play via official YouTube embeds.");
      } else if (type === "terms") {
        alert("MVX Terms of Use\n\nMVX is a discovery platform. All videos play through official YouTube embeds. MVX does not host, download, or claim ownership of third-party content. Movie data by TMDB.");
      }
    });
  });
}

/* ---------- 14. INIT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initHeroSlideshow();
  initNav();
  initYear();
  initYouTubeSearch();
  initCuratedTabs();
  renderCuratedCollection("featured");
  initMovieTabs();
  loadMoviesByTab("trending");
  initVideoModalTeardown();
  initLegalLinks();
});
