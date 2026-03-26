/* =============================================================================
 * Solution Pricing Configuration — Dual-Sourced Benchmarks
 *
 * Sector allocation derived from global research:
 *   - Gartner IT Spending Forecast (Jan/Jul/Nov 2025)
 *   - IDC Security, Cloud, IoT Spending Guides (2025-2026)
 *   - Gartner: Security = 8-12% of IT budget (10-15% for banking/healthcare)
 *   - Gartner: Public cloud = ~13% of total IT ($723B of $5.54T)
 *   - IDC: IoT surpassing $1T in 2026; manufacturing = 33% of IoT
 *   - IDC: ~1,800 managed services deals in 2023, >$100B TCV
 *
 * Deal precedents are dual-sourced:
 *   - DEAL_BENCHMARKS_MY:   Malaysian deal examples (2024-2026)
 *   - DEAL_BENCHMARKS_INTL: International / global deal examples
 *   getDealBenchmarks(c) picks the right set based on company HQ.
 * ========================================================================== */

var SECTOR_ALLOCATION = {
  "Banking & Finance":      { "Cybersecurity": 0.14, "Cloud": 0.25, "Data & AI": 0.15, "Connectivity": 0.18, "5G & IoT": 0.08, "DevOps": 0.10 },
  "Oil, Gas & Energy":      { "Cybersecurity": 0.12, "Cloud": 0.20, "Data & AI": 0.12, "Connectivity": 0.22, "5G & IoT": 0.20, "DevOps": 0.06 },
  "Government":             { "Cybersecurity": 0.18, "Cloud": 0.22, "Data & AI": 0.10, "Connectivity": 0.22, "5G & IoT": 0.10, "DevOps": 0.05 },
  "Insurance":              { "Cybersecurity": 0.12, "Cloud": 0.28, "Data & AI": 0.18, "Connectivity": 0.16, "5G & IoT": 0.06, "DevOps": 0.10 },
  "Technology":             { "Cybersecurity": 0.10, "Cloud": 0.28, "Data & AI": 0.18, "Connectivity": 0.12, "5G & IoT": 0.10, "DevOps": 0.12 },
  "Utilities":              { "Cybersecurity": 0.10, "Cloud": 0.20, "Data & AI": 0.10, "Connectivity": 0.25, "5G & IoT": 0.22, "DevOps": 0.05 },
  "Automotive":             { "Cybersecurity": 0.10, "Cloud": 0.22, "Data & AI": 0.15, "Connectivity": 0.18, "5G & IoT": 0.22, "DevOps": 0.06 },
  "Plantation":             { "Cybersecurity": 0.08, "Cloud": 0.20, "Data & AI": 0.12, "Connectivity": 0.20, "5G & IoT": 0.25, "DevOps": 0.05 },
  "Construction":           { "Cybersecurity": 0.08, "Cloud": 0.22, "Data & AI": 0.10, "Connectivity": 0.22, "5G & IoT": 0.25, "DevOps": 0.05 },
  "Consumer":               { "Cybersecurity": 0.10, "Cloud": 0.25, "Data & AI": 0.18, "Connectivity": 0.18, "5G & IoT": 0.10, "DevOps": 0.10 },
  "Conglomerates":          { "Cybersecurity": 0.10, "Cloud": 0.22, "Data & AI": 0.14, "Connectivity": 0.20, "5G & IoT": 0.16, "DevOps": 0.08 },
  "Healthcare":             { "Cybersecurity": 0.14, "Cloud": 0.25, "Data & AI": 0.16, "Connectivity": 0.18, "5G & IoT": 0.12, "DevOps": 0.06 },
  "Telecommunications":     { "Cybersecurity": 0.10, "Cloud": 0.20, "Data & AI": 0.12, "Connectivity": 0.28, "5G & IoT": 0.18, "DevOps": 0.08 },
  "Aviation & Transport":   { "Cybersecurity": 0.10, "Cloud": 0.22, "Data & AI": 0.12, "Connectivity": 0.25, "5G & IoT": 0.18, "DevOps": 0.05 },
  "GLICs":                  { "Cybersecurity": 0.12, "Cloud": 0.24, "Data & AI": 0.16, "Connectivity": 0.18, "5G & IoT": 0.10, "DevOps": 0.08 },
  "Infra":                  { "Cybersecurity": 0.08, "Cloud": 0.20, "Data & AI": 0.10, "Connectivity": 0.22, "5G & IoT": 0.27, "DevOps": 0.05 },
  "Retail":                 { "Cybersecurity": 0.10, "Cloud": 0.25, "Data & AI": 0.20, "Connectivity": 0.20, "5G & IoT": 0.12, "DevOps": 0.05 }
};

/*
 * Addressability rates — what % of a company's category spend can realistically
 * be targeted by an external telco/tech provider (vs. in-house or existing vendor).
 *
 * Connectivity & 5G/IoT are highest because telcos have network-infrastructure advantage.
 * DevOps is lowest because most enterprises keep this in-house.
 */
var ADDRESSABILITY = {
  "Cybersecurity": { low: 0.30, mid: 0.375, high: 0.45 },
  "Cloud":         { low: 0.25, mid: 0.30,  high: 0.35 },
  "Data & AI":     { low: 0.20, mid: 0.25,  high: 0.30 },
  "Connectivity":  { low: 0.55, mid: 0.625, high: 0.70 },
  "5G & IoT":      { low: 0.45, mid: 0.525, high: 0.60 },
  "DevOps":        { low: 0.15, mid: 0.20,  high: 0.25 }
};

var ADDRESSABILITY_RATIONALE = {
  "Cybersecurity": "30\u201345% \u2014 Managed SOC/MSSP is commonly outsourced (Gartner: 12% of security budgets go to outsourcing, trending upward due to talent shortages). Telcos compete with pure-play vendors (CrowdStrike, Palo Alto) but win on bundled network+security.",
  "Cloud": "25\u201335% \u2014 Telcos compete with hyperscalers (AWS, Azure, GCP) on public cloud but win on private/hybrid cloud, data sovereignty, and managed services wrapping hyperscaler platforms (see Awantec MyGovUC 3.0 model).",
  "Data & AI": "20\u201330% \u2014 Specialized domain; companies often buy from AI specialists or build in-house. Telco\u2019s addressable slice is the services layer: implementation, managed platform operations, and data infrastructure.",
  "Connectivity": "55\u201370% \u2014 Telco core strength. SD-WAN, MPLS, leased lines, and internet services must be purchased from a network provider. 76% of enterprises prefer managed/subscription models (Gartner 2025).",
  "5G & IoT": "45\u201360% \u2014 Private 5G requires telco spectrum and infrastructure. IoT platforms depend on network connectivity. Telcos are a natural provider for network-adjacent IoT solutions.",
  "DevOps": "15\u201325% \u2014 Overwhelmingly in-house function. Engineering teams self-serve with GitHub/GitLab/Jenkins. Telco has minimal structural advantage; addressable slice is managed environments and consulting only."
};

var RELEVANCE_MULTIPLIER = { "High": 1.2, "Medium": 1.0, "Low": 0.7 };

var REVENUE_SPLIT = { arr: 0.60, project: 0.40 };

var PRICING_RANGE = { low: 0.80, high: 1.20 };

/*
 * Malaysian deal benchmarks — shown for companies with HQ in Malaysia.
 * All sourced from public announcements 2024-2026.
 */
var DEAL_BENCHMARKS_MY = {
  "Cybersecurity": [
    { deal: "LifeTech / Kyndryl SOC on AWS", value: "~40% cost reduction", scope: "In-country SOC on public cloud, BNM-compliant", source: "kyndryl.com, Feb 2025" },
    { deal: "CelcomDigi Bridgenet MSSP", value: "RM80M financing", scope: "Enterprise SOC expansion", source: "ambankgroup.com, Oct 2025" }
  ],
  "Cloud": [
    { deal: "Awantec / REDtone MyGovUC 3.0", value: "RM294M / 57.5mo (~RM61M/yr)", scope: "Google Cloud managed services, Malaysia Gov", source: "awantec.my, Feb 2024" },
    { deal: "Maybank / Microsoft Azure", value: "RM1B / 5yr (~RM200M/yr)", scope: "Azure migration, M365 Copilot 44K users, AI CoE", source: "computerweekly.com, Aug 2025" },
    { deal: "DNeX / Google Sovereign Cloud", value: "Multi-year deal", scope: "Air-gapped cloud for regulated sectors", source: "reuters.com, Sep 2024" }
  ],
  "Data & AI": [
    { deal: "Nvidia / YTL AI Hub", value: "RM10B", scope: "Green AI data centres, sovereign LLM", source: "businessnews.com.my, Jul 2025" },
    { deal: "Magna AI / Zchwantech", value: "USD 700M", scope: "20MW AI data centre, Sarawak", source: "middleeastainews.com, 2025" },
    { deal: "Microsoft Malaysia AI Investment", value: "RM10.5B / 4yr", scope: "Cloud + AI infra, National AI Centre, 300K skilling", source: "mida.gov.my, May 2024" }
  ],
  "Connectivity": [
    { deal: "TM ONE / Agrobank SD-WAN", value: "5yr managed contract", scope: "Nationwide SD-WAN + security", source: "tm.com.my, Aug 2025" },
    { deal: "TM ONE / KPJ Healthcare SD-WAN", value: "Nationwide deployment", scope: "SD-WAN across all KPJ hospitals", source: "telecompaper.com, Dec 2024" },
    { deal: "TM ONE / EPF SD-WAN + SSE", value: "Managed services", scope: "SD-WAN + Security Service Edge", source: "tmone.com.my, 2024" },
    { deal: "U Mobile / TM 5G Fibre", value: "RM2.4B / 10yr (~RM240M/yr)", scope: "Leased lines, DC access, nationwide", source: "theedgemarkets.com, 2026" }
  ],
  "5G & IoT": [
    { deal: "DNB / Ericsson + Intel / SKF / Scania", value: "MoUs (undisclosed)", scope: "Smart manufacturing, fleet mgmt, autonomous transport", source: "digitalnewsasia.com, May 2024" },
    { deal: "DNB / KPJ Healthcare 5G", value: "MoU (undisclosed)", scope: "5G healthcare services pilot", source: "digitalnewsasia.com, Dec 2024" },
    { deal: "TM / Petronas / Gentari", value: "MoU (undisclosed)", scope: "5G + cloud + IoT for energy sector", source: "thestar.com.my, Dec 2024" }
  ],
  "DevOps": [
    { deal: "DNeX iGFMAS", value: "RM104M / 60mo (~RM21M/yr)", scope: "Gov financial system maintenance + enhancement", source: "dnex.com.my, Jun 2025" },
    { deal: "Maybank / Microsoft DevOps + AI", value: "Part of RM1B deal", scope: "Cloud-native dev, CI/CD, AI integration", source: "computerweekly.com, Aug 2025" }
  ]
};

/*
 * International / global deal benchmarks — shown for non-Malaysian companies.
 * All sourced from public announcements 2024-2025.
 */
var DEAL_BENCHMARKS_INTL = {
  "Cybersecurity": [
    { deal: "Proximus NXT / Belgian Fed Gov", value: "EUR 100M / 7yr (~EUR 14M/yr)", scope: "75 services, 70K users, managed SOC", source: "proximus.com, Feb 2025" }
  ],
  "Cloud": [
    { deal: "DNeX iGFMAS (MY)", value: "RM104M / 60mo", scope: "Gov financial system maintenance", source: "dnex.com.my, Jun 2025" }
  ],
  "Data & AI": [
    { deal: "Singtel NCS AI Transformation", value: "S$130M / 3yr (~S$43M/yr)", scope: "AI platform, Agentic AI, APAC-wide", source: "technode.global, Jul 2025" }
  ],
  "Connectivity": [
    { deal: "Gorilla / Freyr AI Data Centres", value: "USD 1.4B / 3yr", scope: "AI DC network across MY/ID/TH", source: "w.media, Sep 2025" },
    { deal: "NeraTel SEA Network", value: ">USD 15M", scope: "Managed network, ~200 sites", source: "longbridge.com, 2025" }
  ],
  "5G & IoT": [
    { deal: "Gorilla / Freyr AI Data Centres", value: "USD 1.4B / 3yr", scope: "AI DC network across MY/ID/TH", source: "w.media, Sep 2025" },
    { deal: "NeraTel SEA Network", value: ">USD 15M", scope: "Managed network, ~200 sites", source: "longbridge.com, 2025" }
  ],
  "DevOps": [
    { deal: "Enterprise DevOps platforms", value: "$100K-$500K/yr", scope: "CI/CD, GitOps, managed pipelines", source: "codefresh.io, harness.io, 2025" }
  ]
};

/*
 * Malaysian per-unit pricing benchmarks (RM-denominated).
 */
var UNIT_BENCHMARKS_MY = {
  "Cybersecurity": "RM50\u2013500/user/month; Managed SOC RM1\u20134M/yr (BNM-regulated entities)",
  "Cloud":         "Managed cloud RM300\u2013800/user/month; Gov CFA avg contract RM50\u2013100M",
  "Data & AI":     "PoC RM80\u2013200K; Platform RM2\u201310M; AI DC investment RM100M+",
  "Connectivity":  "SD-WAN RM300\u20133,000/site/month; Managed WAN add-on RM500\u20131,500/site/month",
  "5G & IoT":      "Private 5G pilot RM2\u201310M; IoT platform RM500K\u20135M/yr",
  "DevOps":        "Platform + consulting RM500K\u20132M/yr; Managed environments RM100\u2013400K/yr"
};

/*
 * International per-unit pricing benchmarks (USD-denominated).
 */
var UNIT_BENCHMARKS_INTL = {
  "Cybersecurity": "$15-150/user/month; Enterprise SOC $300K-$1.2M/yr (1K+ employees)",
  "Cloud":         "Managed cloud $100-250/user/month; Avg AWS enterprise contract ~$2M/yr",
  "Data & AI":     "PoC $20-50K; MVP $50-150K; Enterprise platform SGD 5-12M",
  "Connectivity":  "SD-WAN $100-1,000/site/month; Managed add-on +$125-375/site/month",
  "5G & IoT":      "Private 5G market $2.4B (2025) growing to $12B (2030); per-site varies widely",
  "DevOps":        "Platform licensing $4K-custom/yr; Managed DevOps $100K-500K/yr"
};

function isMalaysianCompany(c) {
  return c && c.hq && c.hq.indexOf("Malaysia") !== -1;
}

function getDealBenchmarks(c) {
  return isMalaysianCompany(c) ? DEAL_BENCHMARKS_MY : DEAL_BENCHMARKS_INTL;
}

function getUnitBenchmarks(c) {
  return isMalaysianCompany(c) ? UNIT_BENCHMARKS_MY : UNIT_BENCHMARKS_INTL;
}

/**
 * Parse a spend string like "MYR 280M", "USD 31.4B", "MYR 2.1B" into a
 * numeric value (in millions) plus currency.
 */
function parseSpend(str) {
  if (!str) return null;
  var m = str.match(/^(USD|MYR|SGD|EUR)\s*([\d,.]+)\s*([BMK]?)$/i);
  if (!m) return null;
  var currency = m[1].toUpperCase();
  var num = parseFloat(m[2].replace(/,/g, ""));
  var unit = m[3].toUpperCase();
  if (unit === "B") num *= 1000;
  else if (unit === "K") num /= 1000;
  return { value: num, currency: currency };
}

/**
 * Format a number (in millions) into a readable string.
 */
function formatSpend(millions, currency) {
  if (millions >= 1000) {
    return currency + " " + (millions / 1000).toFixed(1) + "B";
  }
  if (millions >= 1) {
    return currency + " " + millions.toFixed(1) + "M";
  }
  return currency + " " + (millions * 1000).toFixed(0) + "K";
}
