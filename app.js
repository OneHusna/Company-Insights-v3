/* ===== State ===== */
let activeCharts = [];
let activeSectorFilter = "All";

/* ===== DOM refs ===== */
const searchInput = document.getElementById("companySearch");
const searchDropdown = document.getElementById("searchDropdown");
const landingScreen = document.getElementById("landingScreen");
const dashboard = document.getElementById("dashboard");
const featuredContainer = document.getElementById("featuredCompanies");
const sectorFiltersEl = document.getElementById("sectorFilters");
const entityCountEl = document.getElementById("entityCount");

/* ===== Helpers ===== */
function getSectors() {
  const sectors = new Set();
  Object.values(COMPANIES).forEach((c) => sectors.add(c.sector));
  return ["All", ...Array.from(sectors).sort()];
}

function isListed(c) {
  return c.entityType === "public";
}

function isGovernment(c) {
  return c.entityType === "government";
}

function entityBadge(c) {
  if (c.entityType === "private") return '<span class="entity-badge badge-private">Private</span>';
  if (c.entityType === "government") return '<span class="entity-badge badge-gov">Government</span>';
  if (c.entityType === "statutory") return '<span class="entity-badge badge-stat">Statutory</span>';
  return "";
}

/* ===== Init ===== */
document.addEventListener("DOMContentLoaded", () => {
  const count = Object.keys(COMPANIES).length;
  entityCountEl.textContent = `${count} Entities`;
  renderSectorFilters();
  renderFeatured();
  searchInput.addEventListener("input", onSearch);
  searchInput.addEventListener("focus", onSearch);
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-container")) hideDropdown();
  });
});

/* ===== Sector Filters ===== */
function renderSectorFilters() {
  const sectors = getSectors();
  sectorFiltersEl.innerHTML = sectors
    .map((s) => `<button class="sector-pill${s === activeSectorFilter ? " active" : ""}" onclick="filterSector('${s}')">${s}</button>`)
    .join("");
}

function filterSector(sector) {
  activeSectorFilter = sector;
  renderSectorFilters();
  renderFeatured();
}

/* ===== Featured Companies (Landing) ===== */
function renderFeatured() {
  const entries = Object.entries(COMPANIES);
  const filtered = activeSectorFilter === "All"
    ? entries
    : entries.filter(([, c]) => c.sector === activeSectorFilter);

  if (filtered.length === 0) {
    featuredContainer.innerHTML = '<div style="color:var(--text-muted);padding:1rem;">No companies in this sector.</div>';
    return;
  }

  featuredContainer.innerHTML = filtered
    .sort((a, b) => a[1].name.localeCompare(b[1].name))
    .map(([t, c]) => {
      const badge = c.entityType !== "public" ? ` <span class="fbadge">${c.entityType}</span>` : "";
      return `<button class="featured-btn" onclick="selectCompany('${t}')">
        <span class="fticker">${t}</span>${c.name}${badge}
      </button>`;
    })
    .join("");
}

/* ===== Search ===== */
function onSearch() {
  const q = searchInput.value.toLowerCase().trim();
  if (!q) { hideDropdown(); return; }

  const results = Object.entries(COMPANIES).filter(([ticker, c]) =>
    ticker.toLowerCase().includes(q) ||
    c.name.toLowerCase().includes(q) ||
    c.sector.toLowerCase().includes(q) ||
    c.industry.toLowerCase().includes(q) ||
    (c.entityType && c.entityType.toLowerCase().includes(q))
  );

  if (results.length === 0) {
    searchDropdown.innerHTML = '<div class="search-item"><span class="name" style="color:var(--text-muted)">No results found</span></div>';
  } else {
    searchDropdown.innerHTML = results
      .slice(0, 15)
      .map(([ticker, c]) =>
        `<div class="search-item" onclick="selectCompany('${ticker}')">
          <span class="ticker">${ticker}</span>
          <span class="name">${c.name}</span>
          <span class="sector">${c.sector}</span>
        </div>`
      )
      .join("");
    if (results.length > 15) {
      searchDropdown.innerHTML += '<div class="search-item" style="color:var(--text-muted);font-size:0.8rem;justify-content:center;">+' + (results.length - 15) + ' more results — refine your search</div>';
    }
  }
  searchDropdown.classList.remove("hidden");
}

function hideDropdown() {
  searchDropdown.classList.add("hidden");
}

/* ===== Select Company ===== */
function selectCompany(ticker) {
  const company = COMPANIES[ticker];
  if (!company) return;

  hideDropdown();
  searchInput.value = "";
  landingScreen.classList.add("hidden");
  dashboard.classList.remove("hidden");

  destroyCharts();
  renderHeader(company);
  renderKPIs(company);
  renderRevenueChart(company);
  renderMarginChart(company);
  renderSegmentChart(company);
  renderCompetitiveChart(company);
  renderSWOT(company);
  renderInsights(company);
  renderLeadership(company);
  renderTechTrends(company);
  renderSolutionOpportunity(company);

  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ===== Back to Landing ===== */
document.querySelector(".logo").addEventListener("click", () => {
  dashboard.classList.add("hidden");
  landingScreen.classList.remove("hidden");
  destroyCharts();
});

/* ===== Render: Header ===== */
function renderHeader(c) {
  const badge = entityBadge(c);
  let priceHtml = "";

  if (isListed(c)) {
    const changeClass = c.change >= 0 ? "positive" : "negative";
    const arrow = c.change >= 0 ? "&#9650;" : "&#9660;";
    priceHtml = `
      <div class="ch-price">
        <div class="price">${c.marketCap && c.marketCap.startsWith("MYR") ? "MYR " : "$"}${c.price.toFixed(2)}</div>
        <div class="change ${changeClass}">${arrow} ${Math.abs(c.change).toFixed(2)} (${c.changePct >= 0 ? "+" : ""}${c.changePct.toFixed(2)}%)</div>
        <div style="font-size:0.78rem;color:var(--text-muted);margin-top:2px;">Mkt Cap: ${c.marketCap} &middot; P/E: ${c.peRatio} &middot; Beta: ${c.beta}</div>
      </div>
    `;
  } else {
    priceHtml = `
      <div class="ch-price">
        <div style="font-size:0.9rem;color:var(--text-muted);">${c.entityType === "government" ? "Government Entity" : c.entityType === "statutory" ? "Statutory Body" : "Private Company"}</div>
        ${c.revenue52w ? '<div style="font-size:0.82rem;color:var(--text-muted);margin-top:4px;">' + (isGovernment(c) ? "Budget: " : "Est. Revenue: ") + c.revenue52w + '</div>' : ""}
      </div>
    `;
  }

  document.getElementById("companyHeader").innerHTML = `
    <div class="ch-logo">${c.ticker.slice(0, 2)}</div>
    <div class="ch-info">
      <h2>${c.name} <span style="color:var(--text-muted);font-weight:400;font-size:1rem;">(${c.ticker})</span> ${badge}</h2>
      <div class="ch-meta">
        <span>${c.sector} &middot; ${c.industry}</span>
        <span>HQ: ${c.hq}</span>
        <span>${isGovernment(c) ? "Head" : "CEO"}: ${c.ceo}</span>
        <span>${isGovernment(c) ? "Staff" : "Employees"}: ${c.employees}</span>
      </div>
    </div>
    ${priceHtml}
    <button class="sp-generate-btn" onclick="openSalesPitch('${c.ticker}')">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
      Generate Sales Pitch
    </button>
  `;
}

/* ===== Render: KPIs ===== */
function renderKPIs(c) {
  document.getElementById("kpiRow").innerHTML = c.kpis
    .map((k) => `
      <div class="kpi-card">
        <div class="kpi-label">${k.label}</div>
        <div class="kpi-value">${k.value}</div>
        <div class="kpi-sub">${k.sub}</div>
      </div>
    `).join("");
}

/* ===== Chart Helpers ===== */
const chartDefaults = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { labels: { color: "#8892a8", font: { family: "Inter", size: 11 } } },
    tooltip: {
      backgroundColor: "#1a2035",
      titleColor: "#e2e8f0",
      bodyColor: "#8892a8",
      borderColor: "#1e2a42",
      borderWidth: 1,
      cornerRadius: 8,
      padding: 12,
    },
  },
  scales: {
    x: { ticks: { color: "#8892a8", font: { size: 11 } }, grid: { color: "rgba(30,42,66,0.5)" } },
    y: { ticks: { color: "#8892a8", font: { size: 11 } }, grid: { color: "rgba(30,42,66,0.5)" } },
  },
};

function createChart(canvasId, config) {
  const ctx = document.getElementById(canvasId).getContext("2d");
  const chart = new Chart(ctx, config);
  activeCharts.push(chart);
  return chart;
}

function destroyCharts() {
  activeCharts.forEach((ch) => ch.destroy());
  activeCharts = [];
}

/* ===== Chart: Revenue & Net Income ===== */
function renderRevenueChart(c) {
  const isGov = isGovernment(c);
  const titleEl = document.getElementById("revenueChartTitle");
  titleEl.textContent = isGov ? "Budget Allocation & Utilization" : "Revenue & Net Income";

  createChart("revenueChart", {
    type: "bar",
    data: {
      labels: c.financials.years,
      datasets: [
        {
          label: isGov ? "Budget (MYR B)" : (c.revenue52w && c.revenue52w.includes("MYR") ? "Revenue (MYR B)" : "Revenue ($B)"),
          data: c.financials.revenue,
          backgroundColor: "rgba(99,102,241,0.7)",
          borderRadius: 6,
          barPercentage: 0.6,
        },
        {
          label: isGov ? "Utilization (MYR B)" : (c.revenue52w && c.revenue52w.includes("MYR") ? "Net Income (MYR B)" : "Net Income ($B)"),
          data: c.financials.netIncome,
          backgroundColor: "rgba(6,182,212,0.7)",
          borderRadius: 6,
          barPercentage: 0.6,
        },
      ],
    },
    options: {
      ...chartDefaults,
      plugins: {
        ...chartDefaults.plugins,
        legend: { ...chartDefaults.plugins.legend, position: "top" },
      },
    },
  });
}

/* ===== Chart: Margin Trends ===== */
function renderMarginChart(c) {
  const isGov = isGovernment(c);
  const titleEl = document.getElementById("marginChartTitle");
  titleEl.textContent = isGov ? "Utilization Rate Trends" : "Margin Trends";

  createChart("marginChart", {
    type: "line",
    data: {
      labels: c.financials.years,
      datasets: [
        {
          label: isGov ? "Budget Utilization %" : "Gross Margin %",
          data: c.financials.grossMargin,
          borderColor: "#22c55e",
          backgroundColor: "rgba(34,197,94,0.1)",
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointBackgroundColor: "#22c55e",
        },
        {
          label: isGov ? "Program Delivery %" : "Operating Margin %",
          data: c.financials.operatingMargin,
          borderColor: "#6366f1",
          backgroundColor: "rgba(99,102,241,0.1)",
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointBackgroundColor: "#6366f1",
        },
        {
          label: isGov ? "Efficiency %" : "Net Margin %",
          data: c.financials.netMargin,
          borderColor: "#06b6d4",
          backgroundColor: "rgba(6,182,212,0.1)",
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointBackgroundColor: "#06b6d4",
        },
      ],
    },
    options: {
      ...chartDefaults,
      plugins: {
        ...chartDefaults.plugins,
        legend: { ...chartDefaults.plugins.legend, position: "top" },
      },
      scales: {
        ...chartDefaults.scales,
        y: { ...chartDefaults.scales.y, ticks: { ...chartDefaults.scales.y.ticks, callback: (v) => v + "%" } },
      },
    },
  });
}

/* ===== Chart: Segment Breakdown ===== */
function renderSegmentChart(c) {
  const isGov = isGovernment(c);
  const titleEl = document.getElementById("segmentChartTitle");
  titleEl.textContent = isGov ? "Budget by Division" : "Revenue by Segment";

  createChart("segmentChart", {
    type: "doughnut",
    data: {
      labels: c.segments.labels,
      datasets: [{
        data: c.segments.values,
        backgroundColor: c.segments.colors,
        borderWidth: 0,
        hoverOffset: 8,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "62%",
      plugins: {
        legend: {
          position: "right",
          labels: { color: "#8892a8", font: { family: "Inter", size: 11 }, padding: 14, usePointStyle: true },
        },
        tooltip: chartDefaults.plugins.tooltip,
      },
    },
  });
}

/* ===== Chart: Competitive Comparison ===== */
function renderCompetitiveChart(c) {
  const isMYR = c.revenue52w && c.revenue52w.includes("MYR");
  const currLabel = isMYR ? "Revenue (MYR B)" : "Revenue ($B)";

  createChart("competitiveChart", {
    type: "bar",
    data: {
      labels: c.competitors.labels,
      datasets: [
        {
          label: currLabel,
          data: c.competitors.revenue,
          backgroundColor: c.competitors.labels.map((l, i) =>
            i === 0 ? "rgba(99,102,241,0.8)" : "rgba(99,102,241,0.25)"
          ),
          borderRadius: 6,
          barPercentage: 0.5,
          yAxisID: "y",
        },
        {
          label: isGovernment(c) ? "Utilization %" : "Net Margin %",
          data: c.competitors.margin,
          type: "line",
          borderColor: "#f59e0b",
          backgroundColor: "rgba(245,158,11,0.1)",
          pointBackgroundColor: "#f59e0b",
          pointRadius: 5,
          tension: 0.3,
          yAxisID: "y1",
        },
      ],
    },
    options: {
      ...chartDefaults,
      plugins: {
        ...chartDefaults.plugins,
        legend: { ...chartDefaults.plugins.legend, position: "top" },
      },
      scales: {
        x: chartDefaults.scales.x,
        y: {
          ...chartDefaults.scales.y,
          position: "left",
          title: { display: true, text: currLabel, color: "#8892a8", font: { size: 11 } },
        },
        y1: {
          ...chartDefaults.scales.y,
          position: "right",
          grid: { drawOnChartArea: false },
          title: { display: true, text: isGovernment(c) ? "Utilization %" : "Net Margin %", color: "#8892a8", font: { size: 11 } },
          ticks: { ...chartDefaults.scales.y.ticks, callback: (v) => v + "%" },
        },
      },
    },
  });
}

/* ===== SWOT ===== */
function renderSWOT(c) {
  const renderQuadrant = (key, label) => `
    <div class="swot-quadrant ${key}">
      <h4>${label}</h4>
      <ul>${c.swot[key].map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
  `;
  document.getElementById("swotCard").innerHTML = `
    <h3>SWOT Analysis</h3>
    <div class="swot-grid">
      ${renderQuadrant("strengths", "Strengths")}
      ${renderQuadrant("weaknesses", "Weaknesses")}
      ${renderQuadrant("opportunities", "Opportunities")}
      ${renderQuadrant("threats", "Threats")}
    </div>
  `;
}

/* ===== Key Insights ===== */
function renderInsights(c) {
  document.getElementById("insightsCard").innerHTML = `
    <h3>Key Strategic Insights</h3>
    ${c.insights.map((ins) => `
      <div class="insight-item">
        <span class="insight-tag tag-${ins.tag}">${ins.tagLabel}</span>
        <div class="insight-text">${ins.text}</div>
      </div>
    `).join("")}
  `;
}

/* ===== Key Leadership ===== */
function getLeaderBadge(title) {
  var t = title.toLowerCase();
  if (t.includes("chief executive") || t.includes("managing director") || t.includes("president") || t.includes("governor") || t.includes("minister") || t === "founder & chairman") return "badge-ceo";
  if (t.includes("chief technology") || t.includes("cto") || t.includes("chief technical")) return "badge-cto";
  if (t.includes("chief information officer") || t.includes("cio")) return "badge-cio";
  if (t.includes("chief digital") || t.includes("cdo")) return "badge-cdo";
  if (t.includes("security") || t.includes("ciso")) return "badge-ciso";
  return "badge-other";
}

function getBadgeLabel(title) {
  var t = title.toLowerCase();
  if (t.includes("chief executive") || t.includes("managing director") || t.includes("group chief executive")) return "CEO";
  if (t.includes("president") && !t.includes("chief")) return "President";
  if (t.includes("governor")) return "Governor";
  if (t.includes("minister") && !t.includes("secretary")) return "Minister";
  if (t.includes("founder")) return "Founder";
  if (t.includes("chief technology") || t.includes("cto") || t.includes("chief technical")) return "CTO";
  if (t.includes("chief information officer")) return "CIO";
  if (t.includes("chief digital")) return "CDO";
  if (t.includes("chief information security") || t.includes("ciso")) return "CISO";
  if (t.includes("chief innovation")) return "CInO";
  if (t.includes("chief operating")) return "COO";
  if (t.includes("chief financial")) return "CFO";
  if (t.includes("chief scientist")) return "CSO";
  return "";
}

function getInitials(name) {
  return name.split(" ").filter(function(w) {
    return w && !["Dato'", "Datuk", "Tan", "Sri", "Dato", "Seri", "Tun", "Ts.", "Dr.", "Ir.", "Tuan", "Haji", "Dato'"].includes(w);
  }).map(function(w) { return w[0]; }).slice(0, 2).join("").toUpperCase();
}

function renderLeadership(c) {
  var el = document.getElementById("leadershipCard");
  if (!c.leadership || !c.leadership.length) {
    el.style.display = "none";
    return;
  }
  el.style.display = "";

  var cards = c.leadership.map(function(p) {
    var badgeCls = getLeaderBadge(p.title);
    var badgeLabel = getBadgeLabel(p.title);
    var initials = getInitials(p.name);
    var badgeHtml = badgeLabel ? '<span class="leadership-title-badge ' + badgeCls + '">' + badgeLabel + '</span>' : '';

    return '<div class="leadership-item">' +
      '<div class="leadership-avatar">' + initials + '</div>' +
      '<div class="leadership-info">' +
        '<div class="leadership-name">' + p.name + '</div>' +
        '<div class="leadership-title">' + badgeHtml + p.title + '</div>' +
      '</div>' +
    '</div>';
  }).join("");

  el.innerHTML = '<h3>Key Leadership</h3><div class="leadership-grid">' + cards + '</div>';
}

/* ===== Tech Trends ===== */
const TREND_ICONS = {
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
  signal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h.01"/><path d="M7 20v-4"/><path d="M12 20v-8"/><path d="M17 20V8"/><path d="M22 4v16"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  brain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a4 4 0 0 1 4 4 4 4 0 0 1 2 3.5 4 4 0 0 1-1 7.5v1a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-1a4 4 0 0 1-1-7.5A4 4 0 0 1 8 6a4 4 0 0 1 4-4z"/><path d="M12 2v20"/><path d="M8 6h8"/><path d="M7 9.5h10"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
};

const TREND_ICON_CLASS = {
  Cybersecurity: "icon-cybersecurity",
  Cloud: "icon-cloud",
  "5G & IoT": "icon-5g-iot",
  Connectivity: "icon-connectivity",
  "Data & AI": "icon-data-ai",
  DevOps: "icon-devops",
};

function renderTechTrends(c) {
  const el = document.getElementById("techTrendsCard");
  if (!c.techTrends || !c.techTrends.length) {
    el.style.display = "none";
    return;
  }
  el.style.display = "";

  let ictHtml = "";
  if (c.ictSpend) {
    const s = c.ictSpend;
    ictHtml = `
      <div class="ict-spend-bar">
        <div class="ict-spend-item">
          <span class="ict-spend-label">ICT Spend</span>
          <span class="ict-spend-value">${s.total}</span>
        </div>
        <div class="ict-spend-item">
          <span class="ict-spend-label">% of Revenue</span>
          <span class="ict-spend-value">${s.pctRevenue}</span>
        </div>
        <div class="ict-spend-item">
          <span class="ict-spend-label">YoY Growth</span>
          <span class="ict-spend-value ${s.yoy.startsWith("+") ? "positive" : s.yoy.startsWith("-") ? "negative" : ""}">${s.yoy}</span>
        </div>
        <div class="ict-spend-item ict-spend-focus">
          <span class="ict-spend-label">Top Focus</span>
          <span class="ict-spend-tags">${s.focusAreas.map((a) => '<span class="ict-focus-tag">' + a + "</span>").join("")}</span>
        </div>
      </div>
      <div class="ict-source-note">
        Source: <span class="ict-source-badge ${s.source === "reported" ? "source-reported" : "source-estimated"}">${s.source === "reported" ? "Reported" : "Estimated"}</span>
        ${s.source === "reported" ? "Public filings (10-K / Annual Report / Investor Presentation)" : "Estimated from reported revenue using industry IT spending benchmarks (Gartner/IDC)"}
      </div>`;
  }

  let iiHtml = "";
  if (c.industryInsights) {
    const ii = c.industryInsights;
    const trendCls = ii.spendOutlook.trend === "Stable" ? "trend-stable" : ii.spendOutlook.trend === "Decreasing" ? "trend-decreasing" : "";
    const arrow = ii.spendOutlook.trend === "Increasing" ? "&#9650;" : ii.spendOutlook.trend === "Decreasing" ? "&#9660;" : "&#9644;";
    const trendColor = ii.spendOutlook.trend === "Increasing" ? "var(--green)" : ii.spendOutlook.trend === "Decreasing" ? "var(--red)" : "var(--amber)";

    const TECH_TAG_CLS = { "Cybersecurity": "tag-cybersecurity", "Cloud": "tag-cloud", "Data & AI": "tag-data-ai", "5G & IoT": "tag-5g-iot", "Connectivity": "tag-connectivity", "DevOps": "tag-devops" };

    const prioritiesHtml = Array.isArray(ii.topPriorities) && ii.topPriorities.length
      ? (typeof ii.topPriorities[0] === "object"
        ? `<div class="ii-priorities-list">${ii.topPriorities.map((p, i) => {
            const tags = (p.techInfluence || []).map((inf) => {
              const cls = TECH_TAG_CLS[inf.area] || "tag-cloud";
              return '<span class="ii-tech-tag ' + cls + '"><span class="ii-tech-tag-area">' + inf.area + '</span> <span class="ii-tech-tag-detail">' + inf.detail + "</span></span>";
            }).join("");
            return '<div class="ii-priority-item"><div class="ii-priority-num">Priority ' + (i + 1) + '</div><div class="ii-priority-text">' + p.priority + '</div><div class="ii-tech-tags">' + tags + "</div></div>";
          }).join("")}</div>`
        : `<div class="ii-col-title">Top Priorities</div><ul class="ii-list">${ii.topPriorities.map((p) => "<li>" + p + "</li>").join("")}</ul>`)
      : "";

    const painHtml = ii.painPoints && ii.painPoints.length
      ? `<div class="ii-pain-points"><div class="ii-pain-label">Current Telco &amp; Tech Challenges</div><ul class="ii-pain-list">${ii.painPoints.map((p) => "<li>" + p + "</li>").join("")}</ul></div>`
      : "";

    iiHtml = `
      <div class="ii-panel">
        <h4>Industry Insights</h4>
        ${prioritiesHtml}
        <div class="ii-columns">
          <div>
            <div class="ii-col-title">Strategic Investments</div>
            <ul class="ii-list">${ii.strategicInvestments.map((s) => "<li>" + s + "</li>").join("")}</ul>
          </div>
          <div>
            <div class="ii-col-title">Company Direction</div>
            <div class="ii-direction-text">${ii.direction}</div>
          </div>
        </div>
        ${painHtml}
        <div class="ii-partnerships">
          <div class="ii-partnerships-label">Key Partnerships</div>
          <div class="ii-partnerships-list">
            ${ii.partnerships.map((p) => {
              const cls = "ii-impact-" + p.impact.toLowerCase();
              return '<span class="ii-partner-tag"><span class="ii-partner-name">' + p.partner + '</span><span class="ii-partner-area">' + p.area + '</span><span class="ii-partner-impact ' + cls + '">' + p.impact + "</span></span>";
            }).join("")}
          </div>
        </div>
        <div class="ii-spend-outlook ${trendCls}">
          <div class="ii-outlook-indicator">
            <span class="ii-outlook-arrow" style="color:${trendColor}">${arrow}</span>
            <span class="ii-outlook-trend" style="color:${trendColor}">${ii.spendOutlook.trend}</span>
            <span class="ii-outlook-delta" style="color:${trendColor}">${ii.spendOutlook.delta}</span>
          </div>
          <div class="ii-outlook-body">
            <div class="ii-outlook-title">Telco &amp; Tech Spend Outlook</div>
            <div class="ii-outlook-narrative">${ii.spendOutlook.narrative}</div>
          </div>
        </div>
      </div>`;
  }

  el.innerHTML = `
    <h3>Telco &amp; Tech Trends</h3>
    ${ictHtml}
    ${iiHtml}
    <div class="tech-trends-grid">
      ${c.techTrends.map((t) => {
        const iconSvg = TREND_ICONS[t.icon] || TREND_ICONS.globe;
        const iconCls = TREND_ICON_CLASS[t.category] || "icon-cloud";
        const relCls = "relevance-" + t.relevance.toLowerCase();
        return `
          <div class="tech-trend-card">
            <div class="tech-trend-header">
              <div class="tech-trend-icon ${iconCls}">${iconSvg}</div>
              <span class="tech-trend-title">${t.category}</span>
              <span class="trend-relevance ${relCls}">${t.relevance}</span>
            </div>
            <div class="tech-trend-summary">${t.summary}</div>
            <ul class="trend-initiatives">
              ${t.initiatives.map((i) => `<li>${i}</li>`).join("")}
            </ul>
          </div>`;
      }).join("")}
    </div>
  `;
}

/* ===== Solution Opportunity Assessment ===== */
const SO_CATEGORIES = ["Cybersecurity", "Cloud", "Data & AI", "Connectivity", "5G & IoT", "DevOps"];

const SO_ICONS = {
  "Cybersecurity": TREND_ICONS.shield,
  "Cloud": TREND_ICONS.cloud,
  "Data & AI": TREND_ICONS.brain,
  "Connectivity": TREND_ICONS.globe,
  "5G & IoT": TREND_ICONS.signal,
  "DevOps": TREND_ICONS.code
};

const SO_ICON_CLS = {
  "Cybersecurity": "icon-cybersecurity",
  "Cloud": "icon-cloud",
  "Data & AI": "icon-data-ai",
  "Connectivity": "icon-connectivity",
  "5G & IoT": "icon-5g-iot",
  "DevOps": "icon-devops"
};

function computeSolutionOpportunity(c) {
  var spend = parseSpend(c.ictSpend ? c.ictSpend.total : null);
  if (!spend) return null;

  var alloc = SECTOR_ALLOCATION[c.sector];
  if (!alloc) {
    alloc = SECTOR_ALLOCATION["Conglomerates"];
  }

  var relevanceMap = {};
  if (c.techTrends) {
    c.techTrends.forEach(function(t) {
      relevanceMap[t.category] = t.relevance || "Medium";
    });
  }

  var results = [];
  var totalOpp = 0;

  SO_CATEGORIES.forEach(function(cat) {
    var pct = alloc[cat] || 0.10;
    var catSpend = spend.value * pct;

    var addr = ADDRESSABILITY[cat] || { mid: 0.25 };
    var addressable = catSpend * addr.mid;
    var addrPct = Math.round(addr.mid * 1000) / 10;

    var rel = relevanceMap[cat] || "Medium";
    var mult = RELEVANCE_MULTIPLIER[rel] || 1.0;
    var adjusted = addressable * mult;

    var arrBase = adjusted * REVENUE_SPLIT.arr;
    var projBase = adjusted * REVENUE_SPLIT.project;

    results.push({
      category: cat,
      relevance: rel,
      catSpend: catSpend,
      addressable: addressable,
      addrPct: addrPct,
      addrRationale: ADDRESSABILITY_RATIONALE[cat] || "",
      adjusted: adjusted,
      arrLow: arrBase * PRICING_RANGE.low,
      arrHigh: arrBase * PRICING_RANGE.high,
      projLow: projBase * PRICING_RANGE.low,
      projHigh: projBase * PRICING_RANGE.high,
      totalLow: adjusted * PRICING_RANGE.low,
      totalHigh: adjusted * PRICING_RANGE.high,
      arrPct: REVENUE_SPLIT.arr,
      projPct: REVENUE_SPLIT.project
    });

    totalOpp += adjusted;
  });

  return {
    currency: spend.currency,
    totalValue: spend.value,
    results: results,
    totalOppLow: totalOpp * PRICING_RANGE.low,
    totalOppHigh: totalOpp * PRICING_RANGE.high,
    totalArrLow: totalOpp * REVENUE_SPLIT.arr * PRICING_RANGE.low,
    totalArrHigh: totalOpp * REVENUE_SPLIT.arr * PRICING_RANGE.high,
    totalProjLow: totalOpp * REVENUE_SPLIT.project * PRICING_RANGE.low,
    totalProjHigh: totalOpp * REVENUE_SPLIT.project * PRICING_RANGE.high
  };
}

var SO_MARKET_CONTEXT = {
  "Cybersecurity": "Malaysia\u2019s cybersecurity market ~MYR 4.5B (2025, +14% YoY). BNM RMiT and MCMC regulations drive compliance spending. Gartner: security = 10\u201315% of IT budgets in banking/healthcare.",
  "Cloud": "Malaysia cloud market ~MYR 12B (2025, +22% YoY). MyDIGITAL target: 80% cloud adoption by 2025. Gartner: public cloud = ~13% of global IT spending ($723B of $5.54T).",
  "Data & AI": "Malaysia AI market ~MYR 3B (2025, +28% YoY). Microsoft committed MYR 10.5B for AI infrastructure. National AI Roadmap targets 30% GDP uplift from AI by 2030.",
  "Connectivity": "Malaysia enterprise connectivity market ~MYR 8B (2025). SD-WAN adoption growing 35%+ YoY. Gartner: 76% of enterprises prefer managed/subscription network models.",
  "5G & IoT": "Malaysia 5G rollout via DNB+telcos; enterprise 5G market ~MYR 1.5B by 2027. IDC: IoT surpassing $1T globally in 2026. JENDELA Phase 2 targets 100% 4G coverage.",
  "DevOps": "Malaysia DevOps services market ~MYR 800M (2025). Growing with cloud adoption. Most enterprises self-serve; telco opportunity is in managed platforms and consulting."
};

function getTopDealForCategory(c, cat) {
  var deals = getDealBenchmarks(c)[cat] || [];
  if (!deals.length) return null;
  return deals[0];
}

function getCategorySummary(c, cat) {
  if (!c.techTrends) return "";
  for (var i = 0; i < c.techTrends.length; i++) {
    if (c.techTrends[i].category === cat) return c.techTrends[i].summary || "";
  }
  return "";
}

function renderSolutionOpportunity(c) {
  var el = document.getElementById("solutionOpportunityCard");
  if (!c.ictSpend || !c.sector) {
    el.style.display = "none";
    return;
  }

  var opp = computeSolutionOpportunity(c);
  if (!opp) { el.style.display = "none"; return; }
  el.style.display = "";

  var cur = opp.currency;
  var fmt = function(v) { return formatSpend(v, cur); };
  var isMY = isMalaysianCompany(c);
  var isGov = isGovernment(c);

  var ictSource = (c.ictSpend.source === "reported") ? "Reported" : "Estimated";
  var ictSourceCls = (c.ictSpend.source === "reported") ? "source-reported" : "source-estimated";

  var sorted = opp.results.slice().sort(function(a, b) { return b.adjusted - a.adjusted; });

  var cardsHtml = sorted.map(function(r, idx) {
    var iconSvg = SO_ICONS[r.category] || SO_ICONS["Cloud"];
    var iconCls = SO_ICON_CLS[r.category] || "icon-cloud";
    var relCls = "relevance-" + r.relevance.toLowerCase();

    var summary = getCategorySummary(c, r.category);
    var topDeal = getTopDealForCategory(c, r.category);
    var mktCtx = isMY ? (SO_MARKET_CONTEXT[r.category] || "") : "";

    var oppLow = r.totalLow;
    var oppHigh = r.totalHigh;

    var barWidth = 0;
    if (sorted[0].adjusted > 0) barWidth = Math.round((r.adjusted / sorted[0].adjusted) * 100);

    return '<div class="so-card">' +
      '<div class="so-card-header">' +
        '<div class="so-card-icon ' + iconCls + '">' + iconSvg + '</div>' +
        '<span class="so-card-title">' + r.category + '</span>' +
        '<span class="so-card-relevance ' + relCls + '">' + r.relevance + '</span>' +
      '</div>' +
      (summary ? '<div class="so-card-summary">' + summary + '</div>' : '') +
      '<div class="so-card-opp">' +
        '<span class="so-card-opp-label">Estimated Opportunity</span>' +
        '<span class="so-card-opp-value">' + fmt(oppLow) + ' \u2014 ' + fmt(oppHigh) + '</span>' +
      '</div>' +
      '<div class="so-card-bar-wrap">' +
        '<div class="so-card-bar" style="width:' + barWidth + '%"></div>' +
      '</div>' +
      (mktCtx ? '<div class="so-card-context">' + mktCtx + '</div>' : '') +
      (topDeal ? '<div class="so-deal-ref"><strong>Ref:</strong> ' + topDeal.deal + ' \u2014 ' + topDeal.value + ' <span class="so-deal-source">(' + topDeal.source + ')</span></div>' : '') +
    '</div>';
  }).join("");

  var ictFocusHtml = c.ictSpend.focusAreas
    ? c.ictSpend.focusAreas.map(function(a) { return '<span class="ict-focus-tag">' + a + '</span>'; }).join("")
    : "";

  var methodId = "soMethodology";

  el.innerHTML =
    '<h3>Solution Opportunity Assessment</h3>' +

    '<div class="so-ict-bar">' +
      '<div class="so-ict-item">' +
        '<span class="so-ict-label">ICT Spend</span>' +
        '<span class="so-ict-value">' + c.ictSpend.total + '</span>' +
      '</div>' +
      (c.ictSpend.pctRevenue && c.ictSpend.pctRevenue !== "N/A" ? '<div class="so-ict-item"><span class="so-ict-label">% of ' + (isGov ? 'Budget' : 'Revenue') + '</span><span class="so-ict-value">' + c.ictSpend.pctRevenue + '</span></div>' : '') +
      '<div class="so-ict-item">' +
        '<span class="so-ict-label">YoY Growth</span>' +
        '<span class="so-ict-value ' + (c.ictSpend.yoy.startsWith("+") ? "positive" : "") + '">' + c.ictSpend.yoy + '</span>' +
      '</div>' +
      '<div class="so-ict-item">' +
        '<span class="so-ict-label">Source</span>' +
        '<span class="ict-source-badge ' + ictSourceCls + '">' + ictSource + '</span>' +
      '</div>' +
      (ictFocusHtml ? '<div class="so-ict-item so-ict-focus"><span class="so-ict-label">Focus Areas</span><span class="ict-spend-tags">' + ictFocusHtml + '</span></div>' : '') +
    '</div>' +

    '<div class="so-summary-bar">' +
      '<div class="so-summary-total">' +
        '<span class="so-summary-total-label">Total Estimated Opportunity</span>' +
        '<span class="so-summary-total-value">' + fmt(opp.totalOppLow) + ' \u2014 ' + fmt(opp.totalOppHigh) + '</span>' +
      '</div>' +
      '<div class="so-summary-note">Based on ' + c.ictSpend.total + ' ICT spend, ' + c.sector + ' sector allocation, and telco addressability benchmarks</div>' +
    '</div>' +

    '<div class="so-grid">' + cardsHtml + '</div>' +

    '<div class="so-methodology" id="' + methodId + '">' +
      '<div class="so-methodology-header" onclick="document.getElementById(\'' + methodId + '\').classList.toggle(\'open\')">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>' +
        'Sources &amp; Methodology' +
      '</div>' +
      '<div class="so-methodology-body">' +
        '<p><strong>How this is calculated:</strong> ' + c.name + '\u2019s ICT spend (' + c.ictSpend.total + ') is split across solution categories using sector-specific allocation benchmarks from <strong>Gartner IT Spending Forecast (2025\u201326)</strong> and <strong>IDC Spending Guides</strong>. ' +
        'Each category is then filtered by telco-addressable share (what a provider like CelcomDigi can realistically compete for vs. in-house or existing vendors), adjusted by relevance from the Tech Trends analysis, and shown as a \u00b120% range.</p>' +
        '<p><strong>Key benchmarks:</strong> Gartner global IT $5.54T (2025). Security = 8\u201312% of IT budget. Public cloud $723B (~13% of IT). IDC: IoT surpassing $1T in 2026. ' +
        (isMY ? 'Malaysia ICT market ~MYR 35B (2025). MyDIGITAL cloud target 80%. BNM RMiT drives security spend.' : '') + '</p>' +
        '<p><strong>Deal references:</strong> ' + (isMY ? 'Malaysian deal precedents (2024\u20132026) from kyndryl.com, awantec.my, computerweekly.com, reuters.com, businessnews.com.my, mida.gov.my, tm.com.my, telecompaper.com, theedgemarkets.com, digitalnewsasia.com, thestar.com.my, dnex.com.my.' : 'International deal precedents (2024\u20132025) from proximus.com, technode.global, w.media, longbridge.com.') + '</p>' +
        '<p class="so-source-footer">All figures are indicative estimates \u2014 not guaranteed pricing. ICT spend is ' + (c.ictSpend.source === "reported" ? 'reported from public filings.' : 'estimated from revenue using Gartner/IDC IT spending benchmarks.') + '</p>' +
      '</div>' +
    '</div>';
}

/* ===== CelcomDigi Sales Pitch Generator ===== */

var _currentPitchTicker = null;

function openSalesPitch(ticker) {
  var c = COMPANIES[ticker];
  if (!c) return;
  _currentPitchTicker = ticker;
  var html = buildSalesPitch(c);
  document.getElementById("salesPitchContent").innerHTML = html;
  document.getElementById("salesPitchOverlay").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeSalesPitch() {
  document.getElementById("salesPitchOverlay").classList.add("hidden");
  document.body.style.overflow = "";
}

function copySalesPitch() {
  var el = document.getElementById("salesPitchContent");
  var text = el.innerText || el.textContent;
  navigator.clipboard.writeText(text).then(function() {
    var btn = document.querySelector(".sp-btn-copy");
    btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Copied!';
    setTimeout(function() {
      btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy';
    }, 2000);
  });
}

function downloadSalesPitchPDF() {
  var ticker = _currentPitchTicker;
  var c = COMPANIES[ticker];
  if (!c) return;

  if (!window.jspdf || !window.jspdf.jsPDF) {
    alert("PDF library (jsPDF) is still loading. Please wait a moment and try again.");
    return;
  }

  var btn = document.querySelector(".sp-btn-pdf");
  var origHtml = btn.innerHTML;
  btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="sp-spin"><path d="M12 2v4m0 12v4m-8-10H2m20 0h-2m-2.93-6.07L15.66 7.34m-7.32 9.32-1.41 1.41m0-12.14 1.41 1.41m9.32 9.32 1.41 1.41"/></svg> Generating\u2026';
  btn.disabled = true;

  setTimeout(function() {
    try {
      _generateNativePDF(c);
    } catch (err) {
      console.error("PDF generation failed:", err);
      alert("PDF generation failed: " + err.message);
    }
    btn.innerHTML = origHtml;
    btn.disabled = false;
  }, 80);
}

function _generateNativePDF(c) {
  var pdf = new window.jspdf.jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });

  var PW = 595.28, PH = 841.89;
  var ML = 48, MR = 48, MT = 52, MB = 44;
  var CW = PW - ML - MR;
  var y = MT;
  var isGov = isGovernment(c);
  var opp = computeSolutionOpportunity(c);
  var cur = opp ? opp.currency : "MYR";
  var fmt = function(v) { return formatSpend(v, cur); };
  var trendMap = {};
  if (c.techTrends) c.techTrends.forEach(function(t) { trendMap[t.category] = t; });
  var solutions = rankSolutions(c, opp, trendMap);
  var dateStr = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

  function strip(s) { return s.replace(/<[^>]+>/g, ""); }

  function newPage() {
    pdf.addPage();
    y = MT;
    _pdfHeader(pdf, c, PW);
    y = 50;
  }

  function need(h) {
    if (y + h > PH - MB) newPage();
  }

  function wrappedText(text, opts) {
    opts = opts || {};
    var sz = opts.size || 9;
    var style = opts.style || "normal";
    var clr = opts.color || [50, 50, 50];
    var indent = opts.indent || 0;
    var maxW = opts.maxW || (CW - indent);
    var leading = opts.leading || (sz * 1.55);
    pdf.setFont("helvetica", style);
    pdf.setFontSize(sz);
    pdf.setTextColor(clr[0], clr[1], clr[2]);
    var lines = pdf.splitTextToSize(text, maxW);
    for (var i = 0; i < lines.length; i++) {
      need(leading);
      pdf.text(lines[i], ML + indent, y);
      y += leading;
    }
    return lines.length;
  }

  function sectionHeading(title) {
    need(32);
    y += 6;
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(13);
    pdf.setTextColor(0, 48, 135);
    pdf.text(title, ML, y);
    y += 4;
    pdf.setDrawColor(0, 48, 135);
    pdf.setLineWidth(1.5);
    pdf.line(ML, y, ML + 44, y);
    y += 14;
  }

  function labelText(label) {
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(7);
    pdf.setTextColor(120, 120, 120);
    pdf.text(label.toUpperCase(), ML + 8, y);
    y += 11;
  }

  // ─── COVER PAGE ───
  pdf.setFillColor(0, 48, 135);
  pdf.rect(0, 0, PW, PH, "F");

  pdf.setDrawColor(255, 255, 255);
  pdf.setLineWidth(0.6);
  pdf.rect(ML, 160, 82, 18, "S");
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(7.5);
  pdf.setTextColor(255, 255, 255);
  pdf.text("CONFIDENTIAL", ML + 9, 172);

  pdf.setFillColor(255, 255, 255);
  pdf.rect(ML, 200, 50, 3, "F");

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(13);
  pdf.setTextColor(170, 195, 230);
  pdf.text("CelcomDigi Enterprise Solutions", ML, 232);

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(30);
  pdf.setTextColor(255, 255, 255);
  pdf.text("Sales Pitch", ML, 272);

  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(20);
  var nameLines = pdf.splitTextToSize(c.name, CW);
  nameLines.forEach(function(nl, i) { pdf.text(nl, ML, 308 + i * 26); });
  var nameBottom = 308 + nameLines.length * 26;

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(10.5);
  pdf.setTextColor(170, 195, 230);
  pdf.text(c.sector + "  \u00B7  " + c.industry, ML, nameBottom + 10);
  pdf.text(c.hq, ML, nameBottom + 26);
  pdf.text("Prepared: " + dateStr, ML, nameBottom + 50);

  pdf.setFillColor(0, 175, 95);
  pdf.rect(0, PH - 7, PW, 7, "F");

  // ─── CONTENT PAGES ───
  newPage();

  // Executive Summary
  sectionHeading("Executive Summary");
  wrappedText(strip(buildExecSummary(c, solutions, opp, fmt)), { size: 9.5, leading: 15 });
  y += 10;

  // Client Profile
  sectionHeading("Client Profile");
  var profile = [
    ["Company", c.name],
    ["Sector", c.sector + " / " + c.industry],
    ["Headquarters", c.hq],
    [isGov ? "Head" : "CEO", c.ceo],
    [isGov ? "Staff" : "Employees", String(c.employees)]
  ];
  if (c.revenue52w) profile.push([isGov ? "Budget" : "Revenue", c.revenue52w]);
  if (c.ictSpend) profile.push(["Est. ICT Spend", c.ictSpend.total + " (" + c.ictSpend.pctRevenue + " of revenue, " + c.ictSpend.yoy + " YoY)"]);

  var rowH = 17;
  profile.forEach(function(r, i) {
    need(rowH);
    if (i % 2 === 0) {
      pdf.setFillColor(244, 246, 250);
      pdf.rect(ML, y - 11, CW, rowH, "F");
    }
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(8);
    pdf.setTextColor(100, 100, 110);
    pdf.text(r[0], ML + 8, y);
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(9);
    pdf.setTextColor(30, 30, 40);
    pdf.text(String(r[1]), ML + 125, y);
    y += rowH;
  });
  y += 12;

  // Strategic Needs
  sectionHeading("Strategic Needs Assessment");
  wrappedText("Based on " + c.name + "\u2019s SWOT analysis, strategic insights, and industry trends:", { size: 8, color: [110, 110, 110] });
  y += 4;
  var needs = extractNeeds(c);
  needs.forEach(function(n) {
    var txt = strip(n.text);
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(8);
    var lines = pdf.splitTextToSize(txt, CW - 72);
    var bH = Math.max(16, lines.length * 12 + 6);
    need(bH);

    var clr = (n.type === "weakness" || n.type === "risk") ? [192, 57, 43] :
              (n.type === "opportunity" || n.type === "growth") ? [39, 174, 96] :
              (n.type === "threat" || n.type === "pain") ? [230, 126, 34] : [41, 128, 185];

    pdf.setFillColor(clr[0], clr[1], clr[2]);
    pdf.rect(ML, y - 9, 3, bH, "F");

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(6.5);
    pdf.setTextColor(clr[0], clr[1], clr[2]);
    pdf.text(n.label.toUpperCase(), ML + 10, y);

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(8);
    pdf.setTextColor(55, 55, 55);
    lines.forEach(function(l, li) {
      pdf.text(l, ML + 68, y + li * 12);
    });
    y += bH + 2;
  });
  y += 10;

  // Recommended Solutions
  sectionHeading("Recommended CelcomDigi Solutions");
  wrappedText("Ranked by strategic fit, opportunity size, and CelcomDigi competitive advantage.", { size: 8, color: [110, 110, 110] });
  y += 6;

  solutions.forEach(function(sol, idx) {
    var ratText = strip(sol.rationale);
    var diffText = strip(sol.differentiator);

    need(60);

    var prClr = sol.priority === "Primary" ? [39, 174, 96] : sol.priority === "Secondary" ? [230, 126, 34] : [149, 165, 166];

    pdf.setFillColor(prClr[0], prClr[1], prClr[2]);
    pdf.rect(ML, y - 6, 3, 20, "F");

    pdf.setFillColor(0, 48, 135);
    pdf.circle(ML + 18, y + 3, 9, "F");
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(9);
    pdf.setTextColor(255, 255, 255);
    pdf.text(String(idx + 1), ML + 15, y + 6);

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(11);
    pdf.setTextColor(25, 25, 50);
    pdf.text(sol.category, ML + 34, y + 6);

    pdf.setFillColor(prClr[0], prClr[1], prClr[2]);
    var prTxt = sol.priority;
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(6.5);
    var prTw = pdf.getTextWidth(prTxt) + 10;
    pdf.roundedRect(ML + 120, y - 3, prTw, 14, 2, 2, "F");
    pdf.setTextColor(255, 255, 255);
    pdf.text(prTxt, ML + 125, y + 6);

    if (sol.oppData) {
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(8.5);
      pdf.setTextColor(0, 48, 135);
      pdf.text(fmt(sol.oppData.totalLow) + " \u2014 " + fmt(sol.oppData.totalHigh), PW - MR, y + 6, { align: "right" });
    }

    y += 22;

    labelText("Strategic Rationale");
    wrappedText(ratText, { size: 8, indent: 8, color: [55, 55, 55], leading: 12 });
    y += 6;

    need(16);
    labelText("Proposed Offerings");
    sol.offerings.forEach(function(o) {
      var oText = "\u2022  " + strip(o);
      wrappedText(oText, { size: 8, indent: 12, color: [55, 55, 55], leading: 12 });
    });
    y += 4;

    need(16);
    labelText("CelcomDigi Differentiator");
    wrappedText(diffText, { size: 8, indent: 8, color: [55, 55, 55], leading: 12 });

    y += 14;

    if (idx < solutions.length - 1) {
      pdf.setDrawColor(220, 225, 235);
      pdf.setLineWidth(0.4);
      pdf.line(ML + 8, y - 6, PW - MR - 8, y - 6);
    }
  });

  // Total Opportunity
  if (opp) {
    need(48);
    y += 4;
    pdf.setFillColor(0, 48, 135);
    pdf.roundedRect(ML, y, CW, 38, 3, 3, "F");
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(8);
    pdf.setTextColor(170, 195, 230);
    pdf.text("Total Estimated Opportunity", ML + 14, y + 14);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(14);
    pdf.setTextColor(255, 255, 255);
    pdf.text(fmt(opp.totalOppLow) + " \u2014 " + fmt(opp.totalOppHigh), ML + 14, y + 30);
    y += 52;
  }

  // Key Decision Makers
  if (c.leadership && c.leadership.length) {
    sectionHeading("Key Decision Makers");

    need(20);
    pdf.setFillColor(0, 48, 135);
    pdf.rect(ML, y - 10, CW, 16, "F");
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(7);
    pdf.setTextColor(255, 255, 255);
    pdf.text("Name", ML + 8, y - 1);
    pdf.text("Title", ML + 135, y - 1);
    pdf.text("Engagement Relevance", ML + 280, y - 1);
    y += 12;

    c.leadership.forEach(function(p, i) {
      var rel = getLeaderRelevance(p.title) || "\u2014";
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(7.5);
      var nameL = pdf.splitTextToSize(p.name, 118);
      var titleL = pdf.splitTextToSize(p.title, 136);
      var relL = pdf.splitTextToSize(rel, CW - 280);
      var maxL = Math.max(nameL.length, titleL.length, relL.length);
      var rH = maxL * 11 + 5;
      need(rH);

      if (i % 2 === 0) {
        pdf.setFillColor(244, 246, 250);
        pdf.rect(ML, y - 9, CW, rH, "F");
      }

      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(7.5);
      pdf.setTextColor(30, 30, 50);
      nameL.forEach(function(nl, li) { pdf.text(nl, ML + 8, y + li * 11); });

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(7.5);
      pdf.setTextColor(55, 55, 55);
      titleL.forEach(function(tl, li) { pdf.text(tl, ML + 135, y + li * 11); });

      pdf.setFont("helvetica", "italic");
      pdf.setFontSize(7);
      pdf.setTextColor(100, 100, 110);
      relL.forEach(function(rl, li) { pdf.text(rl, ML + 280, y + li * 11); });

      y += rH;
    });
    y += 12;
  }

  // Why CelcomDigi?
  sectionHeading("Why CelcomDigi?");
  var whyItems = [
    ["Market Leadership", "#1 mobile operator in Malaysia with 20.5M subscribers. Widest combined network post-merger."],
    ["End-to-End Solutions", "Full stack across Connectivity, Cloud, Cybersecurity, Data & AI, DevOps, and 5G/IoT."],
    ["5G & Network Advantage", "Dual 4G/5G network with widest coverage. Spectrum assets pure-play IT vendors cannot replicate."],
    ["Enterprise Track Record", "Proven enterprise division with government contracts and managed services for " + c.sector + " sector."],
    ["Local Compliance", "Malaysian-headquartered with full understanding of BNM, MCMC, and sector-specific regulatory requirements."],
    ["Merger Synergies", "MYR 800M+ merger synergies enable competitive pricing and best-of-both-worlds solutions."]
  ];

  var colW = (CW - 14) / 2;
  for (var wi = 0; wi < whyItems.length; wi += 2) {
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(7.5);
    var lLines = pdf.splitTextToSize(whyItems[wi][1], colW - 18);
    var rLines = whyItems[wi + 1] ? pdf.splitTextToSize(whyItems[wi + 1][1], colW - 18) : [];
    var cH = Math.max(lLines.length, rLines.length) * 10 + 28;
    need(cH);

    pdf.setFillColor(244, 246, 250);
    pdf.roundedRect(ML, y - 2, colW, cH, 3, 3, "F");
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(8.5);
    pdf.setTextColor(0, 48, 135);
    pdf.text(whyItems[wi][0], ML + 8, y + 10);
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(7.5);
    pdf.setTextColor(70, 70, 70);
    lLines.forEach(function(ll, li) { pdf.text(ll, ML + 8, y + 23 + li * 10); });

    if (whyItems[wi + 1]) {
      var rx = ML + colW + 14;
      pdf.setFillColor(244, 246, 250);
      pdf.roundedRect(rx, y - 2, colW, cH, 3, 3, "F");
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(8.5);
      pdf.setTextColor(0, 48, 135);
      pdf.text(whyItems[wi + 1][0], rx + 8, y + 10);
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(7.5);
      pdf.setTextColor(70, 70, 70);
      rLines.forEach(function(rl, li) { pdf.text(rl, rx + 8, y + 23 + li * 10); });
    }
    y += cH + 8;
  }
  y += 4;

  // Next Steps
  sectionHeading("Recommended Next Steps");
  var steps = [
    ["Discovery Workshop", "Schedule a half-day workshop with " + c.name + "\u2019s IT leadership to validate priorities and identify quick wins."],
    ["Solution Architecture", "CelcomDigi\u2019s solution architects develop a tailored proposal addressing the top priority areas."],
    ["Proof of Concept", "Deploy a focused PoC on the highest-priority solution, targeting 4\u20136 week delivery with measurable KPIs."],
    ["Commercial Proposal", "Present a comprehensive commercial proposal with pricing, SLAs, and a phased rollout roadmap."]
  ];
  steps.forEach(function(s, i) {
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(8);
    var sLines = pdf.splitTextToSize(s[1], CW - 38);
    var sH = sLines.length * 12 + 20;
    need(sH);

    pdf.setFillColor(0, 48, 135);
    pdf.circle(ML + 10, y + 4, 8, "F");
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(9);
    pdf.setTextColor(255, 255, 255);
    pdf.text(String(i + 1), ML + 7, y + 7);

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(9);
    pdf.setTextColor(25, 25, 50);
    pdf.text(s[0], ML + 28, y + 4);

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(8);
    pdf.setTextColor(70, 70, 70);
    sLines.forEach(function(sl, li) { pdf.text(sl, ML + 28, y + 16 + li * 12); });

    y += sH;
  });
  y += 10;

  // Disclaimer
  need(36);
  pdf.setDrawColor(200, 200, 200);
  pdf.setLineWidth(0.3);
  pdf.line(ML, y, PW - MR, y);
  y += 10;
  wrappedText("This pitch was generated by DeepInsight based on publicly available company data, Gartner/IDC industry benchmarks, and CelcomDigi\u2019s solution portfolio. All opportunity figures are indicative estimates. Prepared for internal CelcomDigi use only.", { size: 6.5, color: [150, 150, 150] });

  // Add footers with correct page numbers to all pages (skip cover = page 1)
  var totalPages = pdf.getNumberOfPages();
  for (var pg = 2; pg <= totalPages; pg++) {
    pdf.setPage(pg);
    _pdfFooter(pdf, dateStr, pg - 1, totalPages - 1, PW, PH, ML, MR);
  }

  var filename = "CelcomDigi_SalesPitch_" + c.name.replace(/[^a-zA-Z0-9]/g, "_") + ".pdf";
  pdf.save(filename);
}

function _pdfHeader(pdf, c, pageW) {
  pdf.setFillColor(0, 48, 135);
  pdf.rect(0, 0, pageW, 34, "F");
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(9);
  pdf.setTextColor(255, 255, 255);
  pdf.text("CelcomDigi Enterprise Solutions", 20, 14);
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(7);
  pdf.setTextColor(190, 205, 230);
  pdf.text("Sales Pitch \u2014 " + c.name, 20, 26);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(6.5);
  pdf.setTextColor(255, 255, 255);
  pdf.text("CONFIDENTIAL", pageW - 20, 14, { align: "right" });
}

function _pdfFooter(pdf, dateStr, pageNum, totalPages, pageW, pageH, ml, mr) {
  var fy = pageH - 16;
  pdf.setDrawColor(200, 200, 200);
  pdf.setLineWidth(0.3);
  pdf.line(ml, fy - 6, pageW - mr, fy - 6);
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(6);
  pdf.setTextColor(150, 150, 150);
  pdf.text("Prepared by DeepInsight for CelcomDigi  |  " + dateStr, ml, fy);
  pdf.text("Page " + pageNum + " of " + totalPages, pageW - mr, fy, { align: "right" });
}

function buildSalesPitch(c) {
  var isGov = isGovernment(c);
  var isMY = isMalaysianCompany(c);
  var opp = computeSolutionOpportunity(c);
  var cur = opp ? opp.currency : "MYR";
  var fmt = function(v) { return formatSpend(v, cur); };

  var trendMap = {};
  if (c.techTrends) {
    c.techTrends.forEach(function(t) {
      trendMap[t.category] = t;
    });
  }

  var solutions = rankSolutions(c, opp, trendMap);

  var today = new Date();
  var dateStr = today.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

  var html = '';

  html += '<div class="sp-header-banner">';
  html += '<div class="sp-banner-left">';
  html += '<div class="sp-banner-badge">CONFIDENTIAL</div>';
  html += '<h1>CelcomDigi Enterprise Solutions</h1>';
  html += '<h2>Sales Pitch for ' + c.name + '</h2>';
  html += '<div class="sp-banner-date">Prepared: ' + dateStr + '</div>';
  html += '</div>';
  html += '<div class="sp-banner-right">';
  html += '<div class="sp-banner-logo">CD</div>';
  html += '</div>';
  html += '</div>';

  html += '<div class="sp-section">';
  html += '<h3>Executive Summary</h3>';
  html += '<p>' + buildExecSummary(c, solutions, opp, fmt) + '</p>';
  html += '</div>';

  html += '<div class="sp-section">';
  html += '<h3>Client Profile at a Glance</h3>';
  html += '<div class="sp-profile-grid">';
  html += profileItem("Company", c.name);
  html += profileItem("Sector", c.sector + " / " + c.industry);
  html += profileItem("Headquarters", c.hq);
  html += profileItem(isGov ? "Head" : "CEO", c.ceo);
  html += profileItem(isGov ? "Staff" : "Employees", c.employees);
  if (c.revenue52w) html += profileItem(isGov ? "Budget" : "Revenue", c.revenue52w);
  if (c.ictSpend) html += profileItem("Est. ICT Spend", c.ictSpend.total);
  if (c.ictSpend) html += profileItem("ICT % of Revenue", c.ictSpend.pctRevenue);
  html += '</div>';
  html += '</div>';

  html += '<div class="sp-section">';
  html += '<h3>Strategic Needs Assessment</h3>';
  html += '<p class="sp-sub-text">Based on ' + c.name + '\'s SWOT analysis, strategic insights, industry trends, and technology posture, the following needs have been identified:</p>';
  html += '<div class="sp-needs-grid">';
  var needs = extractNeeds(c);
  needs.forEach(function(n) {
    html += '<div class="sp-need-item sp-need-' + n.type + '">';
    html += '<div class="sp-need-label">' + n.label + '</div>';
    html += '<div class="sp-need-text">' + n.text + '</div>';
    html += '</div>';
  });
  html += '</div>';
  html += '</div>';

  html += '<div class="sp-section">';
  html += '<h3>Recommended CelcomDigi Solutions</h3>';
  html += '<p class="sp-sub-text">Solutions are ranked by strategic fit, opportunity size, and CelcomDigi\'s competitive advantage. Priority is determined by the company\'s tech relevance signals, SWOT alignment, and addressable spend.</p>';

  solutions.forEach(function(sol, idx) {
    var priorityCls = sol.priority === "Primary" ? "sp-priority-primary" : sol.priority === "Secondary" ? "sp-priority-secondary" : "sp-priority-exploratory";
    var iconCls = SO_ICON_CLS[sol.category] || "icon-cloud";
    var iconSvg = SO_ICONS[sol.category] || SO_ICONS["Cloud"];

    html += '<div class="sp-solution-card">';
    html += '<div class="sp-sol-header">';
    html += '<div class="sp-sol-rank">#' + (idx + 1) + '</div>';
    html += '<div class="sp-sol-icon ' + iconCls + '">' + iconSvg + '</div>';
    html += '<div class="sp-sol-title">' + sol.category + '</div>';
    html += '<div class="sp-sol-priority ' + priorityCls + '">' + sol.priority + '</div>';
    html += '</div>';

    html += '<div class="sp-sol-body">';
    html += '<div class="sp-sol-rationale">';
    html += '<div class="sp-sol-rationale-label">Strategic Rationale</div>';
    html += '<p>' + sol.rationale + '</p>';
    html += '</div>';

    if (sol.oppData) {
      html += '<div class="sp-sol-opp">';
      html += '<div class="sp-sol-opp-item sp-sol-opp-highlight"><span>Estimated Opportunity</span><span>' + fmt(sol.oppData.totalLow) + ' \u2014 ' + fmt(sol.oppData.totalHigh) + '</span></div>';
      html += '</div>';
    }

    html += '<div class="sp-sol-offerings">';
    html += '<div class="sp-sol-rationale-label">Proposed CelcomDigi Offerings</div>';
    html += '<ul>';
    sol.offerings.forEach(function(o) { html += '<li>' + o + '</li>'; });
    html += '</ul>';
    html += '</div>';

    html += '<div class="sp-sol-differentiator">';
    html += '<div class="sp-sol-rationale-label">CelcomDigi Differentiator</div>';
    html += '<p>' + sol.differentiator + '</p>';
    html += '</div>';

    html += '</div>';
    html += '</div>';
  });

  if (opp) {
    html += '<div class="sp-total-opp">';
    html += '<div class="sp-total-opp-label">Total Estimated Opportunity</div>';
    html += '<div class="sp-total-opp-value">' + fmt(opp.totalOppLow) + ' \u2014 ' + fmt(opp.totalOppHigh) + '</div>';
    html += '<div class="sp-total-opp-note">Based on ' + c.ictSpend.total + ' ICT spend, Gartner/IDC sector benchmarks, and telco addressability</div>';
    html += '</div>';
  }

  html += '</div>';

  if (c.leadership && c.leadership.length) {
    html += '<div class="sp-section">';
    html += '<h3>Key Decision Makers</h3>';
    html += '<div class="sp-leaders-grid">';
    c.leadership.forEach(function(p) {
      var badgeLabel = getBadgeLabel(p.title);
      var relevance = getLeaderRelevance(p.title);
      html += '<div class="sp-leader-card">';
      html += '<div class="sp-leader-avatar">' + getInitials(p.name) + '</div>';
      html += '<div class="sp-leader-info">';
      html += '<div class="sp-leader-name">' + p.name + '</div>';
      html += '<div class="sp-leader-title">' + (badgeLabel ? '<span class="sp-leader-badge">' + badgeLabel + '</span>' : '') + p.title + '</div>';
      if (relevance) html += '<div class="sp-leader-relevance">' + relevance + '</div>';
      html += '</div>';
      html += '</div>';
    });
    html += '</div>';
    html += '</div>';
  }

  html += '<div class="sp-section">';
  html += '<h3>Why CelcomDigi?</h3>';
  html += '<div class="sp-why-grid">';
  html += whyCard("Market Leadership", "#1 mobile operator in Malaysia with 20.5M subscribers. Largest combined network post-merger gives unmatched reach for enterprise connectivity and 5G.");
  html += whyCard("End-to-End Solutions", "Full stack across Connectivity, Cloud, Cybersecurity, Data & AI, DevOps, and 5G/IoT \u2014 one partner for the entire digital transformation journey.");
  html += whyCard("5G & Network Advantage", "Dual 4G/5G network with widest coverage in Malaysia. Spectrum assets and infrastructure give CelcomDigi a structural advantage that pure-play IT vendors cannot replicate.");
  html += whyCard("Enterprise Track Record", "Proven enterprise division with government contracts, managed services, and dedicated account management for " + c.sector + " sector.");
  html += whyCard("Local Compliance", "Malaysian-headquartered with full understanding of BNM, MCMC, and sector-specific regulatory requirements for data sovereignty and compliance.");
  html += whyCard("Merger Synergies", "MYR 800M+ merger synergies enable competitive pricing. Combined Celcom enterprise + Digi business capabilities deliver best-of-both-worlds solutions.");
  html += '</div>';
  html += '</div>';

  html += '<div class="sp-section">';
  html += '<h3>Recommended Next Steps</h3>';
  html += '<div class="sp-steps">';
  html += stepItem(1, "Discovery Workshop", "Schedule a half-day workshop with " + c.name + "'s IT leadership to validate priorities, map current vendor landscape, and identify quick wins.");
  html += stepItem(2, "Solution Architecture", "CelcomDigi's solution architects develop a tailored proposal addressing the top " + Math.min(3, solutions.filter(function(s) { return s.priority === "Primary"; }).length || 2) + " priority areas identified above.");
  html += stepItem(3, "Proof of Concept", "Deploy a focused PoC on the highest-priority solution to demonstrate value, targeting 4\u20136 week delivery with measurable KPIs.");
  html += stepItem(4, "Commercial Proposal", "Present a comprehensive commercial proposal with ARR and project pricing, SLAs, and a phased rollout roadmap aligned to " + c.name + "'s budget cycle.");
  html += '</div>';
  html += '</div>';

  html += '<div class="sp-footer">';
  html += '<p>This pitch was auto-generated by DeepInsight based on publicly available company data, industry benchmarks, and CelcomDigi\'s solution portfolio. All opportunity figures are indicative estimates. Prepared for internal CelcomDigi use only.</p>';
  html += '</div>';

  return html;
}

function profileItem(label, value) {
  return '<div class="sp-profile-item"><span class="sp-profile-label">' + label + '</span><span class="sp-profile-value">' + value + '</span></div>';
}

function whyCard(title, text) {
  return '<div class="sp-why-card"><div class="sp-why-title">' + title + '</div><div class="sp-why-text">' + text + '</div></div>';
}

function stepItem(num, title, text) {
  return '<div class="sp-step"><div class="sp-step-num">' + num + '</div><div class="sp-step-body"><div class="sp-step-title">' + title + '</div><div class="sp-step-text">' + text + '</div></div></div>';
}

function getLeaderRelevance(title) {
  var t = title.toLowerCase();
  if (t.includes("chief technology") || t.includes("cto") || t.includes("chief technical")) return "Primary contact for Cloud, DevOps, and infrastructure decisions";
  if (t.includes("chief information officer") || t.includes("cio")) return "Key stakeholder for IT strategy, procurement, and vendor management";
  if (t.includes("chief digital") || t.includes("cdo")) return "Decision maker for digital transformation and Data & AI initiatives";
  if (t.includes("chief information security") || t.includes("ciso")) return "Primary contact for Cybersecurity solutions";
  if (t.includes("chief executive") || t.includes("managing director") || t.includes("president") || t.includes("governor")) return "Executive sponsor for strategic partnerships";
  if (t.includes("chief operating")) return "Operational stakeholder for connectivity and efficiency solutions";
  if (t.includes("chief financial")) return "Budget authority and ROI validation";
  return "";
}

function extractNeeds(c) {
  var needs = [];
  if (c.swot) {
    c.swot.weaknesses.forEach(function(w) {
      if (/digital|legacy|system|technology|innovation|cyber|cloud|data/i.test(w)) {
        needs.push({ type: "weakness", label: "Weakness", text: w });
      }
    });
    c.swot.opportunities.forEach(function(o) {
      if (/digital|cloud|5g|ai|data|iot|cyber|tech|fintech|smart|automat/i.test(o)) {
        needs.push({ type: "opportunity", label: "Opportunity", text: o });
      }
    });
    c.swot.threats.forEach(function(t) {
      if (/digital|cyber|tech|disrupt|compet.*digital|security/i.test(t)) {
        needs.push({ type: "threat", label: "Threat", text: t });
      }
    });
  }
  if (c.insights) {
    c.insights.forEach(function(ins) {
      if (/digital|cloud|5g|ai|data|iot|cyber|tech|security|network|platform/i.test(ins.text)) {
        needs.push({ type: ins.tag, label: ins.tagLabel, text: ins.text });
      }
    });
  }
  if (c.industryInsights && c.industryInsights.painPoints) {
    c.industryInsights.painPoints.forEach(function(p) {
      needs.push({ type: "pain", label: "Pain Point", text: p });
    });
  }
  return needs.slice(0, 8);
}

function rankSolutions(c, opp, trendMap) {
  var categories = ["Cybersecurity", "Cloud", "Data & AI", "Connectivity", "5G & IoT", "DevOps"];
  var scored = [];

  categories.forEach(function(cat) {
    var score = 0;
    var trend = trendMap[cat];
    var relevance = trend ? trend.relevance : "Medium";

    if (relevance === "High") score += 30;
    else if (relevance === "Medium") score += 15;
    else score += 5;

    var oppData = null;
    if (opp) {
      opp.results.forEach(function(r) { if (r.category === cat) oppData = r; });
    }
    if (oppData) {
      score += Math.min(25, oppData.adjusted * 0.5);
    }

    var addr = ADDRESSABILITY[cat];
    if (addr) score += addr.mid * 20;

    if (c.swot) {
      var swotText = c.swot.weaknesses.concat(c.swot.opportunities, c.swot.threats).join(" ").toLowerCase();
      var keywords = getKeywordsForCategory(cat);
      keywords.forEach(function(kw) {
        if (swotText.includes(kw)) score += 5;
      });
    }

    if (c.industryInsights && c.industryInsights.painPoints) {
      var painText = c.industryInsights.painPoints.join(" ").toLowerCase();
      var keywords2 = getKeywordsForCategory(cat);
      keywords2.forEach(function(kw) {
        if (painText.includes(kw)) score += 4;
      });
    }

    scored.push({
      category: cat,
      score: score,
      relevance: relevance,
      trend: trend,
      oppData: oppData,
      rationale: buildRationale(c, cat, trend, oppData),
      offerings: getOfferings(cat, c),
      differentiator: getDifferentiator(cat),
      priority: "Exploratory"
    });
  });

  scored.sort(function(a, b) { return b.score - a.score; });

  scored.forEach(function(sol, idx) {
    if (idx < 2) sol.priority = "Primary";
    else if (idx < 4) sol.priority = "Secondary";
    else sol.priority = "Exploratory";
  });

  return scored;
}

function getKeywordsForCategory(cat) {
  var map = {
    "Cybersecurity": ["security", "cyber", "fraud", "breach", "compliance", "data protection", "privacy", "threat"],
    "Cloud": ["cloud", "migration", "saas", "iaas", "hybrid", "hosting", "infrastructure", "legacy system"],
    "Data & AI": ["ai", "data", "analytics", "machine learning", "intelligence", "ml", "automation", "insight"],
    "Connectivity": ["network", "connectivity", "wan", "mpls", "sd-wan", "bandwidth", "branch", "remote"],
    "5G & IoT": ["5g", "iot", "sensor", "smart", "connected", "wireless", "edge", "m2m"],
    "DevOps": ["devops", "agile", "ci/cd", "development", "deployment", "software", "release", "engineering"]
  };
  return map[cat] || [];
}

function buildRationale(c, cat, trend, oppData) {
  var name = c.name;
  var sector = c.sector;

  var weaknesses = (c.swot && c.swot.weaknesses) ? c.swot.weaknesses.join(". ") : "";
  var opportunities = (c.swot && c.swot.opportunities) ? c.swot.opportunities.join(". ") : "";
  var relNote = trend ? " Tech trend relevance is rated <strong>" + trend.relevance + "</strong>" + (trend.summary ? ": " + trend.summary : ".") : "";

  switch(cat) {
    case "Cybersecurity":
      return name + " operates in the " + sector + " sector where regulatory compliance and data protection are paramount. " +
        (weaknesses.match(/security|cyber|fraud|legacy|compliance/i) ? "SWOT analysis highlights vulnerability areas in security posture. " : "") +
        "With increasing sophistication of cyber threats, a managed security approach can reduce risk and operational burden." + relNote;

    case "Cloud":
      return name + "'s digital transformation journey requires scalable, compliant cloud infrastructure. " +
        (weaknesses.match(/legacy|system|digital|agil/i) ? "Legacy system modernization and digital capability gaps identified in the SWOT present a strong cloud migration opportunity. " : "") +
        (opportunities.match(/digital|cloud/i) ? "Strategic opportunities around digital services align directly with cloud adoption. " : "") +
        "CelcomDigi's managed cloud services can accelerate time-to-value while maintaining data sovereignty." + relNote;

    case "Data & AI":
      return "Data-driven decision making is becoming critical in " + sector + ". " + name +
        (opportunities.match(/ai|data|analytics|intelligence/i) ? " has identified analytics and AI as strategic opportunities. " : " can benefit from AI-powered insights across operations. ") +
        "CelcomDigi's Data & AI services can help unlock value from existing data assets while building future-ready analytics capabilities." + relNote;

    case "Connectivity":
      return "As a " + sector + " entity with " + (c.employees || "multiple") + " employees, " + name +
        " requires robust, reliable connectivity across all locations and operations. " +
        "CelcomDigi's nationwide network infrastructure and managed SD-WAN services provide cost-effective, high-performance connectivity with SLA guarantees." + relNote;

    case "5G & IoT":
      return "5G and IoT present transformative opportunities for " + sector + ". " +
        (opportunities.match(/5g|iot|smart|connected|wireless/i) ? name + " has identified 5G/IoT as a strategic growth area. " : "") +
        "CelcomDigi's 5G network leadership and spectrum assets uniquely position us to deliver private 5G, edge computing, and IoT solutions that pure-play IT vendors cannot match." + relNote;

    case "DevOps":
      return name + "'s digital initiatives require agile software delivery capabilities. " +
        (weaknesses.match(/agil|speed|innovation|digital/i) ? "Identified gaps in development velocity and digital innovation create an opportunity for DevOps modernization. " : "") +
        "CelcomDigi's managed DevOps platforms and consulting can accelerate release cycles and improve software quality." + relNote;

    default:
      return "Strategic opportunity identified based on " + name + "'s technology posture and industry requirements." + relNote;
  }
}

function getOfferings(cat, c) {
  var isMY = isMalaysianCompany(c);
  var sector = c.sector;

  var map = {
    "Cybersecurity": [
      "Managed Security Operations Centre (SOC) \u2014 24/7 monitoring, threat detection, and incident response",
      "Endpoint Detection & Response (EDR) and network security managed services",
      "Security assessment and compliance audit (" + (sector === "Banking & Finance" ? "BNM RMiT, PCI-DSS" : "MCMC, ISO 27001") + ")",
      "DDoS protection and web application firewall (WAF) services",
      "Security awareness training and phishing simulation"
    ],
    "Cloud": [
      "Managed hybrid/private cloud \u2014 data sovereignty compliant hosting",
      "Cloud migration assessment and execution (lift-and-shift or re-platform)",
      "Managed public cloud services (AWS, Azure, GCP) with local support",
      "Cloud backup, disaster recovery, and business continuity",
      "Application modernization and containerization"
    ],
    "Data & AI": [
      "Enterprise data platform design and implementation",
      "AI/ML model development for " + (sector === "Banking & Finance" ? "credit scoring, fraud detection, customer segmentation" : "operational optimization and predictive analytics"),
      "Business intelligence dashboards and data visualization",
      "Data governance and quality management framework",
      "AI proof-of-concept development with measurable KPIs"
    ],
    "Connectivity": [
      "Managed SD-WAN for all " + (c.employees ? "branch locations" : "sites") + " with centralized management",
      "Dedicated internet access and MPLS/IP-VPN services",
      "Unified communications and collaboration platform",
      "Network-as-a-Service with flexible bandwidth scaling",
      isMY ? "Nationwide coverage leveraging CelcomDigi's merged network" : "Regional connectivity with partner networks"
    ],
    "5G & IoT": [
      "Private 5G network for campus/facility connectivity",
      "IoT platform and device management",
      (sector === "Banking & Finance" ? "Smart branch and ATM connectivity with 5G backup" : sector === "Oil, Gas & Energy" ? "Industrial IoT for remote asset monitoring" : "IoT-enabled operations monitoring and automation"),
      "Edge computing for low-latency applications",
      "5G fixed wireless access as fiber alternative"
    ],
    "DevOps": [
      "Managed CI/CD pipeline setup and operation",
      "Cloud-native development consulting and platform engineering",
      "Container orchestration (Kubernetes) managed services",
      "Infrastructure-as-Code implementation",
      "DevSecOps integration and automated security testing"
    ]
  };
  return map[cat] || [];
}

function getDifferentiator(cat) {
  var map = {
    "Cybersecurity": "CelcomDigi combines network-level visibility with managed security services. Unlike pure-play cybersecurity vendors, we see threats at the network layer and can apply security policies across connectivity, cloud, and endpoints from a single platform. Our in-country SOC ensures BNM and MCMC compliance.",
    "Cloud": "CelcomDigi offers managed cloud with a local-first approach \u2014 in-country data centres for sovereignty, direct peering with hyperscalers for performance, and bundled connectivity that eliminates the cloud access gap. Competitors sell cloud without owning the network; we deliver both.",
    "Data & AI": "CelcomDigi brings unique telecom data assets (mobility, network, usage patterns) that can enrich enterprise AI models. Combined with partnerships and local implementation capability, we bridge the gap between global AI platforms and local business context.",
    "Connectivity": "As Malaysia's #1 mobile operator with the widest 4G/5G coverage, CelcomDigi owns the network infrastructure. This means better SLAs, direct control over quality, and bundled pricing that third-party resellers cannot match. Our merged Celcom-Digi backbone provides redundancy by design.",
    "5G & IoT": "CelcomDigi holds the spectrum and operates the 5G infrastructure. Private 5G, network slicing, and edge computing require a telco partner with physical network assets \u2014 something cloud vendors and IT integrators simply cannot provide. We are the only partner that can deliver end-to-end 5G solutions in Malaysia.",
    "DevOps": "CelcomDigi complements DevOps with managed infrastructure and connectivity. While engineering teams focus on code, we handle the underlying platform \u2014 Kubernetes clusters, cloud environments, CI/CD runners \u2014 all connected via our high-performance network."
  };
  return map[cat] || "";
}

function buildExecSummary(c, solutions, opp, fmt) {
  var name = c.name;
  var top2 = solutions.slice(0, 2).map(function(s) { return '<strong>' + s.category + '</strong>'; }).join(" and ");
  var allPrimary = solutions.filter(function(s) { return s.priority === "Primary"; }).map(function(s) { return s.category; });

  var summary = name + " represents a strategic enterprise opportunity for CelcomDigi. ";
  summary += "Operating in the <strong>" + c.sector + "</strong> sector with ";

  if (c.revenue52w) {
    summary += c.revenue52w + " in " + (isGovernment(c) ? "budget" : "annual revenue") + " and ";
  }
  summary += c.employees + " " + (isGovernment(c) ? "staff" : "employees") + ", ";

  if (c.ictSpend) {
    summary += "the organisation's estimated ICT spend of <strong>" + c.ictSpend.total + "</strong> ";
    summary += "(" + c.ictSpend.pctRevenue + " of revenue) signals significant technology investment. ";
  }

  summary += "Analysis of " + name + "'s strategic priorities, technology posture, and industry trends identifies ";
  summary += top2 + " as the <strong>primary solution areas</strong> where CelcomDigi can deliver the most value. ";

  if (opp) {
    summary += "The total addressable opportunity is estimated at <strong>" + fmt(opp.totalOppLow) + " \u2014 " + fmt(opp.totalOppHigh) + "</strong>. ";
  }

  summary += "This pitch outlines a tailored approach across all six CelcomDigi solution pillars, ranked by strategic fit and commercial potential.";

  return summary;
}

