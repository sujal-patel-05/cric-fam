/**
 * TURF CRICKET CHAMPIONSHIP - OFFICIAL APP LOGIC
 * Cricket Fam | The Hundred & IPL Broadcast Experience
 */

// ============================================================================
// 1. DATA REPOSITORIES (TEAMS, SQUADS, FIXTURES)
// ============================================================================

const TEAMS_DATA = {
  MM: {
    id: "MM",
    name: "Megha Marvels",
    shortName: "Marvels",
    code: "MM",
    motto: "The Reigning Power • Precision & Might",
    captain: "Krunal Gandhi",
    owner: "Megha Desai",
    color: "#00A3FF",
    secondaryColor: "#38BDF8",
    gradient: "linear-gradient(135deg, #0077C8 0%, #00C6FF 100%)",
    bgClass: "team-mm",
    logoSvg: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 12L62 30L82 22L75 48H25L18 22L38 30L50 12Z" fill="#38BDF8" stroke="#FFFFFF" stroke-width="2"/>
        <path d="M22 82L35 38H45L50 56L55 38H65L78 82H64L58 56L53 74H47L42 56L36 82H22Z" fill="#00A3FF" stroke="#FFFFFF" stroke-width="2"/>
        <circle cx="50" cy="18" r="4" fill="#FFD13B"/>
        <circle cx="28" cy="24" r="3.5" fill="#FFD13B"/>
        <circle cx="72" cy="24" r="3.5" fill="#FFD13B"/>
      </svg>
    `,
    players: [
      { id: "mm-1", name: "Saurin Desai" },
      { id: "mm-2", name: "Meet Gundlavkar" },
      { id: "mm-3", name: "Sujal Patel" },
      { id: "mm-4", name: "Manan Desai" },
      { id: "mm-5", name: "Ankit Sheth" },
      { id: "mm-6", name: "Yaksh Patel" },
      { id: "mm-7", name: "Krunal Gandhi" }
    ]
  },

  AA: {
    id: "AA",
    name: "Arpita Avengers",
    shortName: "Avengers",
    code: "AA",
    motto: "Fearless Aggression • Striking with Fury",
    captain: "Derick",
    owner: "Arpita",
    color: "#EF4444",
    secondaryColor: "#F87171",
    gradient: "linear-gradient(135deg, #B91C1C 0%, #EF4444 100%)",
    bgClass: "team-aa",
    logoSvg: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10L18 85H36L44 65H58L50 42L47 52H53L50 42L44 65H56L64 85H82L50 10Z" fill="#EF4444" stroke="#FFFFFF" stroke-width="2.5"/>
        <path d="M40 56H88L78 44H48L40 56Z" fill="#FFFFFF"/>
        <path d="M50 14L24 82H36L44 63H56L64 82H76L50 14Z" stroke="#FCA5A5" stroke-width="1.5"/>
      </svg>
    `,
    players: [
      { id: "aa-1", name: "Tirth Doshi" },
      { id: "aa-2", name: "Yash Thakkar" },
      { id: "aa-3", name: "Akshat Trevadiya" },
      { id: "aa-4", name: "Golu Bhai" },
      { id: "aa-5", name: "Raj" },
      { id: "aa-6", name: "Jinal Parmar" },
      { id: "aa-7", name: "Derick" }
    ]
  },

  SSS: {
    id: "SSS",
    name: "Sohi Super Strikers",
    shortName: "Strikers",
    code: "SSS",
    motto: "Blazing Velocity • Scorching the Turf",
    captain: "Chirag Desai",
    owner: "Sohi Desai",
    color: "#F97316",
    secondaryColor: "#FBBF24",
    gradient: "linear-gradient(135deg, #EA580C 0%, #F59E0B 100%)",
    bgClass: "team-sss",
    logoSvg: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="68" cy="32" r="18" fill="#F97316" stroke="#FFD13B" stroke-width="2"/>
        <path d="M52 26C45 28 32 36 20 54C28 50 38 48 46 48C34 56 24 68 18 80C28 72 40 68 50 68" stroke="#FFD13B" stroke-width="4" stroke-linecap="round"/>
        <path d="M26 62L34 50H46L38 62H48L40 76H26L34 64H24L26 62Z" fill="#FFFFFF"/>
        <text x="32" y="86" font-family="'Chakra Petch', sans-serif" font-weight="900" font-size="22" fill="#FFFFFF" letter-spacing="1">SSS</text>
      </svg>
    `,
    players: [
      { id: "sss-1", name: "Chirag Desai" },
      { id: "sss-2", name: "Sarth" },
      { id: "sss-3", name: "Swarup" },
      { id: "sss-4", name: "Meet" },
      { id: "sss-5", name: "Harsh" },
      { id: "sss-6", name: "Shivang" },
      { id: "sss-7", name: "Vihaan" }
    ]
  },

  HH: {
    id: "HH",
    name: "Hitakshi Hurricane",
    shortName: "Hurricane",
    code: "HH",
    motto: "The Unstoppable Storm • Whirlwind Intensity",
    captain: "Saurabh Desai",
    owner: "Hitakshi Desai",
    color: "#06B6D4",
    secondaryColor: "#8B5CF6",
    gradient: "linear-gradient(135deg, #0284C7 0%, #8B5CF6 100%)",
    bgClass: "team-hh",
    logoSvg: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10C27.9 10 10 27.9 10 50C10 72.1 27.9 90 50 90C72.1 90 90 72.1 90 50" stroke="#06B6D4" stroke-width="4" stroke-dasharray="8 4"/>
        <path d="M28 28C38 18 64 16 74 30C82 42 76 60 62 66C48 72 34 82 44 92" stroke="#8B5CF6" stroke-width="4.5" stroke-linecap="round"/>
        <path d="M36 34V66M64 34V66M36 50H64" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round"/>
      </svg>
    `,
    players: [
      { id: "hh-1", name: "Senku" },
      { id: "hh-2", name: "Ankit Desai" },
      { id: "hh-3", name: "Soham Naik" },
      { id: "hh-4", name: "Bhavish Desai" },
      { id: "hh-5", name: "Vivaan Sheth" },
      { id: "hh-6", name: "Darshan Sanghvi" },
      { id: "hh-7", name: "Saurabh Desai" }
    ]
  },

  PP: {
    id: "PP",
    name: "Priyansi Power Hitters",
    shortName: "Power Hitters",
    code: "PP",
    motto: "Maximum Firepower • Big Hits, Zero Limits",
    captain: "Chirag Desai",
    owner: "Priyansi Desai",
    color: "#A855F7",
    secondaryColor: "#EC4899",
    gradient: "linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)",
    bgClass: "team-pp",
    logoSvg: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 80L55 25L65 30L35 85L25 80Z" fill="#EC4899"/>
        <circle cx="68" cy="22" r="7" fill="#FFFFFF"/>
        <path d="M42 45L78 20L84 28L48 53L42 45Z" fill="#A855F7" stroke="#FFFFFF" stroke-width="2"/>
        <path d="M22 88C35 70 65 60 85 75" stroke="#FFD13B" stroke-width="4" stroke-linecap="round"/>
        <path d="M30 40H48C56 40 60 46 60 52C60 58 56 64 48 64H38V76H30V40Z" fill="#FFFFFF"/>
      </svg>
    `,
    players: [
      { id: "pp-1", name: "Ayush Dadhania" },
      { id: "pp-2", name: "Vivaan Desai" },
      { id: "pp-3", name: "Kirtan Desai" },
      { id: "pp-4", name: "Heet Parekh" },
      { id: "pp-5", name: "Parth Sanghvi" },
      { id: "pp-6", name: "Vimal Vyas" },
      { id: "pp-7", name: "Chirag Desai" }
    ]
  }
};

// 10 Official Championship Matches from Poster & User Brief
const MATCHES_DATA = [
  { id: 1, team1: "MM", team2: "HH", venue: "Cricket Fam Arena • Turf Pitch 1", round: "Match 1" },
  { id: 2, team1: "AA", team2: "SSS", venue: "Cricket Fam Arena • Turf Pitch 1", round: "Match 2" },
  { id: 3, team1: "PP", team2: "MM", venue: "Cricket Fam Arena • Turf Pitch 1", round: "Match 3" },
  { id: 4, team1: "HH", team2: "AA", venue: "Cricket Fam Arena • Turf Pitch 1", round: "Match 4" },
  { id: 5, team1: "SSS", team2: "PP", venue: "Cricket Fam Arena • Turf Pitch 1", round: "Match 5" },
  { id: 6, team1: "MM", team2: "AA", venue: "Cricket Fam Arena • Turf Pitch 1", round: "Match 6" },
  { id: 7, team1: "HH", team2: "PP", venue: "Cricket Fam Arena • Turf Pitch 1", round: "Match 7" },
  { id: 8, team1: "MM", team2: "SSS", venue: "Cricket Fam Arena • Turf Pitch 1", round: "Match 8" },
  { id: 9, team1: "AA", team2: "PP", venue: "Cricket Fam Arena • Turf Pitch 1", round: "Match 9" },
  { id: 10, team1: "HH", team2: "SSS", venue: "Cricket Fam Arena • Turf Pitch 1", round: "Match 10" }
];

// Standings Table Data (Official Tournament Starting State)
let standingsState = {
  MM: { played: 0, won: 0, lost: 0, pts: 0, nrr: "+0.000", form: ["-", "-", "-", "-"] },
  AA: { played: 0, won: 0, lost: 0, pts: 0, nrr: "+0.000", form: ["-", "-", "-", "-"] },
  SSS: { played: 0, won: 0, lost: 0, pts: 0, nrr: "+0.000", form: ["-", "-", "-", "-"] },
  HH: { played: 0, won: 0, lost: 0, pts: 0, nrr: "+0.000", form: ["-", "-", "-", "-"] },
  PP: { played: 0, won: 0, lost: 0, pts: 0, nrr: "+0.000", form: ["-", "-", "-", "-"] }
};

// Fan Poll Votes
let pollVotes = {
  MM: 48,
  AA: 34,
  SSS: 36,
  HH: 29,
  PP: 45
};

// Audio Synthesizer State
let audioCtx = null;
let soundEnabled = false;

// ============================================================================
// 2. AUDIO SYNTHESIS ENGINE
// ============================================================================

function initAudio() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function playBatCrackSound() {
  if (!soundEnabled || !audioCtx) return;
  try {
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(80, now + 0.08);

    gain.gain.setValueAtTime(0.8, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.14);

    const subOsc = audioCtx.createOscillator();
    const subGain = audioCtx.createGain();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(140, now);
    subOsc.frequency.exponentialRampToValueAtTime(40, now + 0.25);
    subGain.gain.setValueAtTime(0.5, now);
    subGain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

    subOsc.connect(subGain);
    subGain.connect(audioCtx.destination);
    subOsc.start(now);
    subOsc.stop(now + 0.3);
  } catch (e) {
    console.error("Audio error", e);
  }
}

function playChimeSound() {
  if (!soundEnabled || !audioCtx) return;
  try {
    const now = audioCtx.currentTime;
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.06);
      gain.gain.setValueAtTime(0.2, now + i * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.35);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now + i * 0.06);
      osc.stop(now + i * 0.06 + 0.4);
    });
  } catch (e) {
    console.error("Audio error", e);
  }
}

// ============================================================================
// 3. RENDER FUNCTIONS
// ============================================================================

// Render Horizontal Match Ticker (Clean Official Fixtures)
function renderMatchTicker() {
  const container = document.getElementById("matchTickerArea");
  if (!container) return;

  container.innerHTML = MATCHES_DATA.map(m => {
    const t1 = TEAMS_DATA[m.team1];
    const t2 = TEAMS_DATA[m.team2];

    return `
      <div class="ticker-card" onclick="document.getElementById('fixtures').scrollIntoView({behavior:'smooth'})">
        <div class="ticker-match-head">
          <span class="ticker-match-num">Match ${m.id}</span>
          <span class="ticker-match-stage">14th Nov</span>
        </div>
        <div class="ticker-clash-mini">
          <div class="ticker-team-row">
            <span class="ticker-team-badge-name">
              <span style="width: 14px; height: 14px; display: inline-flex;">${t1.logoSvg}</span>
              ${t1.name}
            </span>
          </div>
          <div class="ticker-team-row">
            <span class="ticker-team-badge-name">
              <span style="width: 14px; height: 14px; display: inline-flex;">${t2.logoSvg}</span>
              ${t2.name}
            </span>
          </div>
        </div>
        <span class="ticker-status-pill">Match ${m.id}</span>
      </div>
    `;
  }).join('');
}

// Render Franchise Dock (5 Teams on Home Page)
function renderFranchiseDock() {
  const container = document.getElementById("franchiseDockGrid");
  if (!container) return;

  container.innerHTML = Object.keys(TEAMS_DATA).map(key => {
    const t = TEAMS_DATA[key];
    return `
      <div class="dock-team-card" data-team="${t.id}" onclick="openTeamModal('${t.id}')">
        <div class="dock-logo-box">${t.logoSvg}</div>
        <span class="dock-team-code" style="color: ${t.color}">${t.code}</span>
        <h4 class="dock-team-title">${t.name}</h4>
        <span class="dock-captain-tag">Capt: <strong>${t.captain}</strong></span>
        <span class="dock-squad-btn">
          View Squad
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </span>
      </div>
    `;
  }).join('');
}

// Render Fixture Cards (Clean Official Schedule - Time removed per specification)
function renderFixtures(filter = "ALL") {
  const container = document.getElementById("fixturesContainer");
  if (!container) return;

  let filtered = MATCHES_DATA;
  if (filter !== "ALL") {
    filtered = MATCHES_DATA.filter(m => m.team1 === filter || m.team2 === filter);
  }

  container.innerHTML = filtered.map(m => {
    const t1 = TEAMS_DATA[m.team1];
    const t2 = TEAMS_DATA[m.team2];

    return `
      <div class="fixture-card" data-match-id="${m.id}">
        <div class="fixture-card-top">
          <span class="fixture-match-no">Match ${m.id} • Official Fixture</span>
          <span class="fixture-status-pill scheduled">Official Clash</span>
        </div>

        <div class="fixture-teams-row">
          <div class="fixture-team-item ${t1.bgClass}">
            <div class="fixture-team-brand">
              <div class="fixture-team-emblem">${t1.logoSvg}</div>
              <span class="fixture-team-title">${t1.name}</span>
            </div>
            <span style="font-size: 0.72rem; color: ${t1.secondaryColor}; font-weight: 800;">${t1.code}</span>
          </div>

          <div class="fixture-team-item ${t2.bgClass}">
            <div class="fixture-team-brand">
              <div class="fixture-team-emblem">${t2.logoSvg}</div>
              <span class="fixture-team-title">${t2.name}</span>
            </div>
            <span style="font-size: 0.72rem; color: ${t2.secondaryColor}; font-weight: 800;">${t2.code}</span>
          </div>
        </div>

        <div class="fixture-card-footer">
          <span class="fixture-venue-text">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
            ${m.venue}
          </span>
          <span style="font-family: var(--font-display); font-size: 0.74rem; font-weight: 800; color: var(--turf-green); letter-spacing: 0.5px;">
            MATCH ${m.id}
          </span>
        </div>
      </div>
    `;
  }).join('');
}

// Render Teams Showcase Cards
function renderTeams() {
  const container = document.getElementById("teamsGrid");
  if (!container) return;

  const teamKeys = Object.keys(TEAMS_DATA);
  container.innerHTML = teamKeys.map(key => {
    const team = TEAMS_DATA[key];
    const squadPills = team.players.slice(0, 4).map(p => `
      <span class="player-preview-pill">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
        ${p.name}
      </span>
    `).join('');

    return `
      <div class="team-card" data-team="${team.id}">
        <div class="team-card-header">
          <div class="team-logo-wrapper">
            ${team.logoSvg}
          </div>
          <div class="team-header-meta">
            <span class="team-short-tag">${team.code} Franchise</span>
            <h3 class="team-name-title">${team.name}</h3>
            <span class="team-motto">${team.motto}</span>
            <div style="display: flex; gap: 10px; margin-top: 10px; font-size: 0.78rem; flex-wrap: wrap;">
              <span style="background: rgba(255,255,255,0.06); padding: 3px 8px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); color: var(--text-secondary);">
                Capt: <strong style="color: #FFFFFF;">${team.captain}</strong>
              </span>
              <span style="background: rgba(255,255,255,0.06); padding: 3px 8px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); color: var(--text-secondary);">
                Owner: <strong style="color: ${team.secondaryColor};">${team.owner}</strong>
              </span>
            </div>
          </div>
        </div>

        <div class="team-card-body">
          <div class="squad-count-chip">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            7 Registered Turf Players
          </div>
          <div class="team-player-pills-preview">
            ${squadPills}
            <span class="player-preview-pill">+3 more</span>
          </div>
        </div>

        <div class="team-card-actions">
          <button class="btn-team-explore" onclick="openTeamModal('${team.id}')">
            View Player Squad List
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Render Standings Table
function renderStandings() {
  const tbody = document.getElementById("standingsTableBody");
  if (!tbody) return;

  const sortedTeamKeys = Object.keys(standingsState);

  tbody.innerHTML = sortedTeamKeys.map((key, index) => {
    const team = TEAMS_DATA[key];
    const data = standingsState[key];
    const rank = index + 1;

    let rowClass = "";
    if (rank === 1) rowClass = "row-direct-final";
    else if (rank === 2 || rank === 3) rowClass = "row-semi-final";

    const formDots = data.form.map(f => {
      let dotClass = "pending";
      if (f === "W") dotClass = "win";
      if (f === "L") dotClass = "loss";
      return `<span class="form-dot ${dotClass}">${f}</span>`;
    }).join('');

    return `
      <tr class="${rowClass}">
        <td>
          <div class="team-cell">
            <span class="team-rank">${rank}</span>
            <div class="team-cell-info">
              <div style="width: 28px; height: 28px;">${team.logoSvg}</div>
              <span class="team-cell-name">${team.name}</span>
            </div>
          </div>
        </td>
        <td>${data.played}</td>
        <td>${data.won}</td>
        <td>${data.lost}</td>
        <td class="pts-cell">${data.pts}</td>
        <td>${data.nrr}</td>
        <td>
          <div class="form-guide-dots">
            ${formDots}
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

// Fetch and Sync Fan Poll with Netlify Serverless Backend
async function syncLivePollVotes() {
  try {
    const res = await fetch("/.netlify/functions/vote");
    if (res.ok) {
      const data = await res.json();
      if (data && typeof data === 'object') {
        pollVotes = { ...pollVotes, ...data };
        renderFanPoll();
      }
    }
  } catch (err) {
    // Graceful fallback if running offline
  }
}

// Render Fan Poll
function renderFanPoll() {
  const container = document.getElementById("pollTeamsContainer");
  if (!container) return;

  const totalVotes = Object.values(pollVotes).reduce((a, b) => a + b, 0);

  container.innerHTML = Object.keys(TEAMS_DATA).map(key => {
    const team = TEAMS_DATA[key];
    const votes = pollVotes[key] || 0;
    const pct = totalVotes > 0 ? Math.round((votes / totalVotes) * 100) : 0;

    return `
      <div class="poll-option-item" onclick="castVote('${key}')">
        <div class="poll-progress-bar" style="width: ${pct}%"></div>
        <div class="poll-team-data">
          <div style="width: 26px; height: 26px;">${team.logoSvg}</div>
          <span>${team.name}</span>
        </div>
        <span class="poll-percent">${pct}%</span>
      </div>
    `;
  }).join('');
}

async function castVote(teamKey) {
  playBatCrackSound();
  pollVotes[teamKey] = (pollVotes[teamKey] || 0) + 1;
  renderFanPoll();
  showToast(`Voted for ${TEAMS_DATA[teamKey].name}!`);

  try {
    const res = await fetch("/.netlify/functions/vote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ team: teamKey })
    });
    if (res.ok) {
      const updatedVotes = await res.json();
      if (updatedVotes && typeof updatedVotes === 'object') {
        pollVotes = { ...pollVotes, ...updatedVotes };
        renderFanPoll();
      }
    }
  } catch (e) {
    // Fallback to local state
  }
}

// ============================================================================
// 4. CLEAN PLAYER SQUAD MODAL (NAMES ONLY - NO POINTS, NO LEFT/RIGHT STATS)
// ============================================================================

function openTeamModal(teamId) {
  playChimeSound();
  const team = TEAMS_DATA[teamId];
  if (!team) return;

  const modal = document.getElementById("teamModal");
  const modalContent = document.getElementById("teamModalContent");
  if (!modal || !modalContent) return;

  // Clean, modern player cards displaying only player names and jersey numbers with Captain badge
  const rosterHtml = team.players.map((p, idx) => {
    const isCaptain = p.name.trim().toLowerCase() === team.captain.trim().toLowerCase();
    return `
      <div class="player-roster-card" style="cursor: default;">
        <div class="player-jersey-badge">
          <span class="jersey-no">#${idx + 1}</span>
        </div>
        <div class="player-info-meta">
          <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
            <h4 class="player-card-name" style="font-size: 1.1rem; color: #FFFFFF; font-weight: 800; margin: 0;">${p.name}</h4>
            ${isCaptain ? `<span style="background: var(--turf-green); color: #041009; font-size: 0.65rem; font-weight: 900; padding: 2px 7px; border-radius: 4px; letter-spacing: 0.5px;">CAPTAIN</span>` : ''}
          </div>
          <span style="font-size: 0.72rem; color: ${team.secondaryColor}; font-weight: 700; text-transform: uppercase; margin-top: 2px;">${team.name}</span>
        </div>
      </div>
    `;
  }).join('');

  modalContent.innerHTML = `
    <div class="modal-team-header" style="--modal-team-grad: ${team.gradient}">
      <div class="modal-team-brand-row">
        <div class="modal-team-emblem">${team.logoSvg}</div>
        <div class="modal-team-details">
          <span class="team-short-tag" style="color: ${team.secondaryColor}; font-weight: 800; letter-spacing: 2px;">OFFICIAL SQUAD</span>
          <h2>${team.name}</h2>
          <div style="display: flex; gap: 14px; margin-top: 6px; flex-wrap: wrap;">
            <p style="color: #E2E8F0; font-size: 0.88rem; margin: 0;">Captain: <strong style="color: #FFFFFF;">${team.captain}</strong></p>
            <p style="color: #E2E8F0; font-size: 0.88rem; margin: 0;">Owner: <strong style="color: ${team.secondaryColor};">${team.owner}</strong></p>
          </div>
        </div>
      </div>
    </div>

    <div class="modal-content-body">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <h3 style="font-family: var(--font-display); font-size: 1.15rem; text-transform: uppercase; color: #FFFFFF;">Playing VII Squad Players</h3>
        <span style="font-size: 0.76rem; color: var(--turf-green); font-weight: 800;">7 SQUAD PLAYERS</span>
      </div>

      <div class="squad-roster-grid">
        ${rosterHtml}
      </div>
    </div>
  `;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

// Lightbox for Posters
function openPosterModal(imageSrc, title) {
  playChimeSound();
  const modal = document.getElementById("posterLightboxModal");
  const imgElem = document.getElementById("lightboxImage");
  const titleElem = document.getElementById("lightboxTitle");
  if (!modal || !imgElem) return;

  imgElem.src = imageSrc;
  if (titleElem) titleElem.textContent = title;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closePosterModal() {
  const modal = document.getElementById("posterLightboxModal");
  if (modal) modal.classList.remove("open");
  document.body.style.overflow = "";
}

function closeTeamModal() {
  const modal = document.getElementById("teamModal");
  if (modal) modal.classList.remove("open");
  document.body.style.overflow = "";
}

// Global Toast Message
function showToast(message) {
  const toast = document.getElementById("globalToast");
  if (!toast) return;

  toast.style.cssText = `
    display: block;
    position: fixed;
    bottom: 24px;
    right: 24px;
    background: #00F59B;
    color: #05140D;
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 0.88rem;
    padding: 12px 22px;
    border-radius: var(--radius-md);
    box-shadow: 0 10px 30px rgba(0, 245, 155, 0.5);
    z-index: 9999;
    transform: translateY(0);
    opacity: 1;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  `;
  toast.textContent = message;

  setTimeout(() => {
    toast.style.transform = "translateY(100px)";
    toast.style.opacity = "0";
    setTimeout(() => { toast.style.display = "none"; }, 300);
  }, 2600);
}

// Share Tournament Hub (Mobile Native Share or Clipboard)
function shareTournament() {
  playChimeSound();
  const shareData = {
    title: "Turf Cricket Championship 2026 • Cricket Fam",
    text: "Check out the official Turf Cricket Championship schedule, team squads & live fan poll organized by Cricket Fam!",
    url: window.location.href
  };

  if (navigator.share) {
    navigator.share(shareData).catch(() => { });
  } else {
    navigator.clipboard.writeText(window.location.href).then(() => {
      showToast("Tournament link copied to clipboard!");
    }).catch(() => {
      showToast("Official Link: " + window.location.href);
    });
  }
}

// Live Search Functionality (Search Players by Name)
function handleSearch(query) {
  const cleanQ = query.trim().toLowerCase();
  const searchResultsDiv = document.getElementById("searchResults");
  if (!searchResultsDiv) return;

  if (!cleanQ) {
    searchResultsDiv.style.display = "none";
    searchResultsDiv.innerHTML = "";
    return;
  }

  let matches = [];
  Object.values(TEAMS_DATA).forEach(team => {
    team.players.forEach(p => {
      if (p.name.toLowerCase().includes(cleanQ) || team.name.toLowerCase().includes(cleanQ)) {
        matches.push({ player: p, team: team });
      }
    });
  });

  if (matches.length === 0) {
    searchResultsDiv.innerHTML = `<div style="padding: 14px; color: var(--text-muted); font-size: 0.85rem;">No players found matching "${query}"</div>`;
  } else {
    searchResultsDiv.innerHTML = matches.slice(0, 6).map(m => `
      <div style="padding: 12px 14px; border-bottom: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between; cursor: pointer; transition: background 0.2s;" 
           onmouseover="this.style.background='rgba(255,255,255,0.06)'" 
           onmouseout="this.style.background='transparent'"
           onclick="openTeamModal('${m.team.id}')">
        <div>
          <strong style="color: #FFFFFF; font-size: 0.92rem;">${m.player.name}</strong>
          <span style="font-size: 0.72rem; color: ${m.team.color}; display: block; font-weight: 700;">${m.team.name}</span>
        </div>
        <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 800;">${m.team.code}</span>
      </div>
    `).join('');
  }

  searchResultsDiv.style.display = "block";
}

function closeMobileNav() {
  const navLinks = document.getElementById("navLinks");
  if (navLinks) {
    navLinks.classList.remove("mobile-open");
  }
}

// ============================================================================
// 6. THEME SONG MUSIC PLAYER
// ============================================================================

let musicExpanded = false;

function toggleMusicExpand() {
  musicExpanded = !musicExpanded;
  const card = document.getElementById('musicCard');
  if (card) card.classList.toggle('open', musicExpanded);
}

function toggleThemeSong() {
  const audio = document.getElementById('themeSongAudio');
  const playIcon = document.getElementById('musicPlayIcon');
  const pauseIcon = document.getElementById('musicPauseIcon');
  const bars = document.getElementById('musicBars');
  const noteIcon = document.getElementById('musicNoteIcon');
  const waveform = document.getElementById('musicWaveform');
  if (!audio) return;

  if (audio.paused) {
    audio.play().then(() => {
      // Switched to playing
      if (playIcon) playIcon.style.display = 'none';
      if (pauseIcon) pauseIcon.style.display = 'block';
      if (bars) bars.classList.add('active');
      if (noteIcon) noteIcon.classList.add('hidden');
      if (waveform) waveform.classList.add('playing');
    }).catch(() => {
      showToast('Tap play to start theme song 🎵');
    });
  } else {
    audio.pause();
    if (playIcon) playIcon.style.display = 'block';
    if (pauseIcon) pauseIcon.style.display = 'none';
    if (bars) bars.classList.remove('active');
    if (noteIcon) noteIcon.classList.remove('hidden');
    if (waveform) waveform.classList.remove('playing');
  }
}

function seekMusic(seconds) {
  const audio = document.getElementById('themeSongAudio');
  if (!audio || isNaN(audio.duration)) return;
  audio.currentTime = Math.max(0, Math.min(audio.duration, audio.currentTime + seconds));
}

function setMusicVolume(val) {
  const audio = document.getElementById('themeSongAudio');
  if (audio) audio.volume = parseFloat(val);
}

function formatMusicTime(secs) {
  if (isNaN(secs)) return '--:--';
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return m + ':' + String(s).padStart(2, '0');
}

function initMusicPlayer() {
  const audio = document.getElementById('themeSongAudio');
  const fillEl = document.getElementById('musicProgressFill');
  const curEl = document.getElementById('musicCurrentTime');
  const durEl = document.getElementById('musicDuration');
  const progressBar = document.getElementById('musicProgressBar');

  if (!audio) return;

  // Set initial volume
  audio.volume = 0.7;

  // Update progress and time displays
  audio.addEventListener('timeupdate', () => {
    if (isNaN(audio.duration)) return;
    const pct = (audio.currentTime / audio.duration) * 100;
    if (fillEl) fillEl.style.width = pct + '%';
    if (curEl) curEl.textContent = formatMusicTime(audio.currentTime);
  });

  audio.addEventListener('loadedmetadata', () => {
    if (durEl) durEl.textContent = formatMusicTime(audio.duration);
  });

  audio.addEventListener('ended', () => {
    // Loop is set, but handle UI reset if loop is disabled
    const playIcon = document.getElementById('musicPlayIcon');
    const pauseIcon = document.getElementById('musicPauseIcon');
    const bars = document.getElementById('musicBars');
    const noteIcon = document.getElementById('musicNoteIcon');
    const waveform = document.getElementById('musicWaveform');
    if (playIcon) playIcon.style.display = 'block';
    if (pauseIcon) pauseIcon.style.display = 'none';
    if (bars) bars.classList.remove('active');
    if (noteIcon) noteIcon.classList.remove('hidden');
    if (waveform) waveform.classList.remove('playing');
    if (fillEl) fillEl.style.width = '0%';
  });

  // Click on progress bar to seek
  if (progressBar) {
    progressBar.addEventListener('click', (e) => {
      if (isNaN(audio.duration)) return;
      const rect = progressBar.getBoundingClientRect();
      const fraction = (e.clientX - rect.left) / rect.width;
      audio.currentTime = fraction * audio.duration;
    });
  }
}

// Modern Countdown Clock Ticker to Match Day: 14th November at 9:00 PM IST
function startCountdown() {
  const daysElem = document.getElementById("cdDays");
  const hoursElem = document.getElementById("cdHours");
  const minsElem = document.getElementById("cdMins");
  const secsElem = document.getElementById("cdSecs");

  // 14th November 2026, 9:00 PM (21:00:00) IST
  const targetDate = new Date("2026-11-14T21:00:00+05:30").getTime();

  function update() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      if (daysElem) daysElem.textContent = "00";
      if (hoursElem) hoursElem.textContent = "00";
      if (minsElem) minsElem.textContent = "00";
      if (secsElem) secsElem.textContent = "00";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    if (daysElem) daysElem.textContent = String(days).padStart(2, '0');
    if (hoursElem) hoursElem.textContent = String(hours).padStart(2, '0');
    if (minsElem) minsElem.textContent = String(mins).padStart(2, '0');
    if (secsElem) secsElem.textContent = String(secs).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

// ============================================================================
// 5. INITIALIZATION ON DOM READY
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
  renderMatchTicker();
  renderFranchiseDock();
  renderFixtures("ALL");
  renderTeams();
  renderStandings();
  renderFanPoll();
  startCountdown();
  initMusicPlayer();

  // Sync live poll with Netlify backend & poll every 10 seconds for live updates
  syncLivePollVotes();
  setInterval(syncLivePollVotes, 10000);

  // Sound toggle button
  const soundBtn = document.getElementById("soundToggleBtn");
  if (soundBtn) {
    soundBtn.addEventListener("click", () => {
      initAudio();
      soundEnabled = !soundEnabled;
      soundBtn.classList.toggle("active", soundEnabled);
      showToast(soundEnabled ? "Stadium Audio ON" : "Stadium Audio Muted");
      if (soundEnabled) playBatCrackSound();
    });
  }

  // Mobile nav toggle
  const mobileToggle = document.getElementById("mobileToggle");
  const navLinks = document.getElementById("navLinks");
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
    });

    // Close mobile drawer when clicking any link
    navLinks.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        closeMobileNav();
      });
    });
  }

  // Filter Buttons
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const teamFilter = btn.getAttribute("data-filter");
      renderFixtures(teamFilter);
      playBatCrackSound();
    });
  });

  // Modal Backdrop click to close
  document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        closeTeamModal();
        closePosterModal();
      }
    });
  });

  // Escape key listener
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeTeamModal();
      closePosterModal();
    }
  });

  // Search input listener
  const searchInput = document.getElementById("universalSearch");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      handleSearch(e.target.value);
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".search-box-wrapper")) {
        const searchResultsDiv = document.getElementById("searchResults");
        if (searchResultsDiv) searchResultsDiv.style.display = "none";
      }
    });
  }
});
