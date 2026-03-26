/**
 * Key Leadership Data for 9 Companies
 * Data current as of March 2025 (2025-2026)
 * Sources: Company websites, investor relations, press releases, verified news
 */

// 1. Apple (AAPL)
const AAPL = [
  { name: "Tim Cook", title: "Chief Executive Officer" },
  { name: "Craig Federighi", title: "Senior Vice President, Software Engineering" },
  { name: "John Ternus", title: "Senior Vice President, Hardware Engineering" },
  { name: "John Giannandrea", title: "Senior Vice President, Machine Learning & AI Strategy" },
  // Note: Apple does not have CTO, CIO, or CDO. Tech leadership is distributed among SVPs.
  // John Giannandrea retiring spring 2026; Amar Subramanya appointed VP of AI (reporting to Federighi)
];

// 2. Microsoft (MSFT)
const MSFT = [
  { name: "Satya Nadella", title: "Chairman and Chief Executive Officer" },
  { name: "Kevin Scott", title: "Executive Vice President and Chief Technology Officer" },
  { name: "Andrew Wilson", title: "Chief Digital Officer, Core Services Engineering" },
  { name: "Mustafa Suleyman", title: "Executive Vice President and CEO of Microsoft AI" },
  // Note: Microsoft does not have a separate CIO; CDO oversees Core Services Engineering (internal IT).
];

// 3. Google/Alphabet (GOOGL)
const GOOGL = [
  { name: "Sundar Pichai", title: "Chief Executive Officer (Google and Alphabet)" },
  { name: "Koray Kavukcuoglu", title: "Chief AI Architect; Chief Technology Officer, Google DeepMind" },
  { name: "Demis Hassabis", title: "CEO and Co-Founder, Google DeepMind" },
  { name: "Phil Venables", title: "Vice President and Chief Information Security Officer, Google Cloud" },
  // Note: Google/Alphabet does not have a corporate-level CTO, CIO, or CDO. Kavukcuoglu appointed Chief AI Architect June 2025.
];

// 4. Amazon (AMZN)
const AMZN = [
  { name: "Andy Jassy", title: "Chief Executive Officer" },
  { name: "Werner Vogels", title: "Vice President and Chief Technology Officer" },
  { name: "Peter DeSantis", title: "Senior Vice President, AI Models, Silicon & Quantum (reports to CEO)" },
  { name: "Matt Garman", title: "Chief Executive Officer, AWS" },
  // Note: Amazon does not have a dedicated CIO or CDO.
];

// 5. NVIDIA (NVDA)
const NVDA = [
  { name: "Jensen Huang", title: "Founder, President and Chief Executive Officer" },
  { name: "Michael Kagan", title: "Chief Technology Officer" },
  { name: "Bill Dally", title: "Chief Scientist and Senior Vice President" },
  // Note: NVIDIA does not have CIO or CDO.
];

// 6. Meta (META)
const META = [
  { name: "Mark Zuckerberg", title: "Founder, Chairman and Chief Executive Officer" },
  { name: "Andrew Bosworth", title: "Chief Technology Officer" },
  { name: "Atish Banerjea", title: "Chief Information Officer" },
  { name: "Guy Rosen", title: "Chief Information Security Officer" },
  // Note: Meta does not have CDO. Vishal Shah heads AI Product Management; Alexandr Wang leads AI Superintelligence Labs.
];

// 7. CelcomDigi (CDB)
const CDB = [
  { name: "Albern Murty", title: "Chief Executive Officer" },
  { name: "Kesavan Sivabalan", title: "Chief Technology Officer" },
  { name: "Kugan Thirunavakasaru", title: "Chief Innovation Officer" },
  // Note: CelcomDigi does not have CIO or CDO. Murty appointed CEO Feb 10, 2026.
];

// 8. Tesla (TSLA)
const TSLA = [
  { name: "Elon Musk", title: "Chief Executive Officer and Technoking" },
  { name: "Ashok Elluswamy", title: "Vice President of AI Software" },
  { name: "Vaibhav Taneja", title: "Chief Financial Officer" },
  // Note: Tesla does not have CTO, CIO, or CDO. Drew Baglino (SVP Powertrain) left April 2024.
];

// 9. Petronas (PETRONAS)
const PETRONAS = [
  { name: "Tengku Muhammad Taufik", title: "President and Group Chief Executive Officer" },
  { name: "Ir Mohd Yusri Mohamed Yusof", title: "Senior Vice President, Projects, Technology & HSSE" },
  // Note: Petronas does not have CTO, CIO, or CDO at group level. Aadrin Azly was CDO (2020-2023) but moved to VP; no successor publicly identified.
];

// Export for use
const COMPANY_LEADERSHIP = {
  AAPL,
  MSFT,
  GOOGL,
  AMZN,
  NVDA,
  META,
  CDB,
  TSLA,
  PETRONAS,
};
