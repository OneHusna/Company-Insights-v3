(function() {
  var t = {
    LHDN: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "LHDN protects sensitive taxpayer data and e-filing systems from breaches.", initiatives: ["Secure e-filing authentication", "Tax data encryption at rest"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "LHDN uses cloud for e-filing infrastructure and tax return processing.", initiatives: ["Cloud-hosted MyTax portal", "Scalable e-filing backend"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "LHDN has limited IoT use; tax administration is office-based.", initiatives: ["Future office IoT pilots", "Document digitization workflows"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "LHDN MyTax portal enables citizens to file taxes online nationwide.", initiatives: ["MyTax portal availability", "Mobile-friendly tax services"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "LHDN uses AI for tax compliance analytics and risk detection.", initiatives: ["Tax evasion risk scoring", "Compliance analytics dashboards"] },
      { category: "DevOps", icon: "code", relevance: "Medium", summary: "LHDN e-filing platform relies on DevOps for continuous delivery.", initiatives: ["E-filing CI/CD pipeline", "Automated tax form testing"] }
    ],
    STATE_SEL_PJ: [
      { category: "Cybersecurity", icon: "shield", relevance: "Medium", summary: "Selangor and Putrajaya state ministries secure citizen and gov data.", initiatives: ["State portal security hardening", "Access control for officials"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "State ministries adopt cloud for digital services and citizen portals.", initiatives: ["Cloud-hosted state services", "Shared state data platform"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "State admin has limited IoT deployment; focus on digital services.", initiatives: ["Smart city pilot evaluation", "IoT feasibility studies"] },
      { category: "Connectivity", icon: "globe", relevance: "High", summary: "Selangor and Putrajaya deliver smart state services via digital channels.", initiatives: ["Unified state citizen portal", "Smart state service delivery"] },
      { category: "Data & AI", icon: "brain", relevance: "Medium", summary: "State ministries use data analytics for policy and service planning.", initiatives: ["Citizen service analytics", "Policy impact dashboards"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "State admin DevOps maturity is evolving for digital transformation.", initiatives: ["Legacy system modernization", "Agile delivery adoption"] }
    ],
    MOE: [
      { category: "Cybersecurity", icon: "shield", relevance: "Medium", summary: "MOE secures student and teacher data across schools nationwide.", initiatives: ["School network security", "Student data protection"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "MOE uses cloud for digital learning platforms and admin systems.", initiatives: ["Cloud-based learning management", "Centralized school admin"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "MOE has limited IoT in education; focus on digital content.", initiatives: ["Smart classroom pilots", "IoT lab experiments"] },
      { category: "Connectivity", icon: "globe", relevance: "High", summary: "MOE enables digital education access for students across Malaysia.", initiatives: ["Digital learning portal access", "Rural school connectivity"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "MOE uses education analytics for student outcomes and curriculum.", initiatives: ["Student performance analytics", "Curriculum effectiveness insights"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "MOE digital platforms use basic DevOps for deployment.", initiatives: ["Learning platform updates", "School system rollouts"] }
    ],
    FGV: [
      { category: "Cybersecurity", icon: "shield", relevance: "Low", summary: "FGV plantation ops have moderate cyber needs; focus on OT security.", initiatives: ["OT network segmentation", "Plantation data backup"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "FGV uses cloud for plantation management and supply chain systems.", initiatives: ["Cloud ERP for plantations", "Supply chain visibility"] },
      { category: "5G & IoT", icon: "signal", relevance: "High", summary: "FGV deploys precision agriculture, drones, and IoT for palm oil.", initiatives: ["Drone-based yield monitoring", "Soil and weather sensors"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "FGV connects estates and mills for real-time operations data.", initiatives: ["Estate connectivity rollout", "Mill-to-estate data links"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "FGV uses AI for yield optimization and palm oil forecasting.", initiatives: ["Yield prediction models", "Harvest scheduling AI"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "FGV IT focuses on plantation systems; DevOps is emerging.", initiatives: ["Agri-tech platform updates", "Legacy system integration"] }
    ],
    AMBANK: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "AmBank protects customer accounts and banking systems from threats.", initiatives: ["Fraud detection systems", "Secure digital banking"] },
      { category: "Cloud", icon: "cloud", relevance: "High", summary: "AmBank adopts cloud for core banking and digital services.", initiatives: ["Cloud-native banking apps", "Scalable transaction processing"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "AmBank has limited IoT; banking is app and branch focused.", initiatives: ["ATM network monitoring", "Branch IoT pilots"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "AmBank delivers digital banking via mobile and web channels.", initiatives: ["Mobile banking reliability", "API banking connectivity"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "AmBank uses AI for credit scoring, fraud, and customer insights.", initiatives: ["AI credit risk models", "Customer 360 analytics"] },
      { category: "DevOps", icon: "code", relevance: "Medium", summary: "AmBank uses DevOps for faster digital banking releases.", initiatives: ["Banking app CI/CD", "Microservices deployment"] }
    ],
    KWAP: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "KWAP secures pensioner data and investment systems as statutory fund.", initiatives: ["Pensioner data encryption", "Investment system security"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "KWAP uses cloud for investment analytics and fund management.", initiatives: ["Cloud investment platform", "Portfolio management tools"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "KWAP pension fund has minimal IoT; focus on financial systems.", initiatives: ["Office infrastructure", "Data center monitoring"] },
      { category: "Connectivity", icon: "globe", relevance: "Low", summary: "KWAP connectivity needs are internal; limited citizen-facing.", initiatives: ["Secure member portal", "Partner API integration"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "KWAP uses AI for investment analytics and portfolio optimization.", initiatives: ["Investment analytics AI", "Risk modeling dashboards"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "KWAP IT focuses on stability; DevOps adoption is gradual.", initiatives: ["Investment system updates", "Reporting automation"] }
    ],
    KPJ: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "KPJ protects patient data and hospital systems across its network.", initiatives: ["Patient data protection", "Hospital network security"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "KPJ uses cloud for health records and hospital management systems.", initiatives: ["Cloud EHR deployment", "Hospital management SaaS"] },
      { category: "5G & IoT", icon: "signal", relevance: "Medium", summary: "KPJ deploys medical IoT for patient monitoring and diagnostics.", initiatives: ["Wearable patient monitors", "Smart medical devices"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "KPJ connects hospitals for shared records and telemedicine.", initiatives: ["Inter-hospital data sharing", "Telemedicine connectivity"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "KPJ uses clinical AI for diagnostics and treatment support.", initiatives: ["Clinical decision support AI", "Diagnostic imaging AI"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "KPJ healthcare IT prioritizes stability; DevOps is emerging.", initiatives: ["EHR deployment pipeline", "Hospital app updates"] }
    ],
    GENTING: [
      { category: "Cybersecurity", icon: "shield", relevance: "Medium", summary: "Genting secures resort, gaming, and guest data across properties.", initiatives: ["Resort network security", "Guest data protection"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "Genting uses cloud for hospitality and leisure operations.", initiatives: ["Cloud property management", "Reservation system scaling"] },
      { category: "5G & IoT", icon: "signal", relevance: "Medium", summary: "Genting deploys IoT for smart rooms and resort operations.", initiatives: ["Smart room automation", "Resort facility sensors"] },
      { category: "Connectivity", icon: "globe", relevance: "High", summary: "Genting delivers resort wifi and smart room connectivity.", initiatives: ["Resort-wide wifi coverage", "Smart room connectivity"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "Genting uses customer analytics for personalization and loyalty.", initiatives: ["Guest preference analytics", "Loyalty program AI"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "Genting IT focuses on operations; DevOps adoption is limited.", initiatives: ["Reservation system updates", "Legacy integration"] }
    ],
    ALBUKHARY: [
      { category: "Cybersecurity", icon: "shield", relevance: "Medium", summary: "Albukhary secures data across automotive, property, and philanthropy.", initiatives: ["Group-wide security policy", "Business unit data protection"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "Albukhary adopts cloud across diversified business units.", initiatives: ["Cloud ERP for group", "Property management cloud"] },
      { category: "5G & IoT", icon: "signal", relevance: "Medium", summary: "Albukhary explores IoT in automotive and property segments.", initiatives: ["Automotive IoT pilots", "Smart building sensors"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "Albukhary connects group businesses for shared services.", initiatives: ["Group network connectivity", "Unified communications"] },
      { category: "Data & AI", icon: "brain", relevance: "Medium", summary: "Albukhary uses data analytics across diversified operations.", initiatives: ["Group analytics platform", "Business unit reporting"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "Albukhary IT is traditional; DevOps maturity is low.", initiatives: ["Legacy system maintenance", "Gradual modernization"] }
    ],
    CCCC_MY: [
      { category: "Cybersecurity", icon: "shield", relevance: "Medium", summary: "CCCC Malaysia secures ECRL and construction project data.", initiatives: ["Project data protection", "Construction site security"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "CCCC Malaysia uses cloud for ECRL project and construction mgmt.", initiatives: ["ECRL project cloud platform", "Construction management SaaS"] },
      { category: "5G & IoT", icon: "signal", relevance: "High", summary: "CCCC Malaysia deploys smart construction and ECRL monitoring.", initiatives: ["ECRL progress monitoring IoT", "Smart construction sensors"] },
      { category: "Connectivity", icon: "globe", relevance: "Low", summary: "CCCC Malaysia connectivity is project-focused; limited public.", initiatives: ["Site connectivity", "Project office networks"] },
      { category: "Data & AI", icon: "brain", relevance: "Medium", summary: "CCCC Malaysia uses AI for construction planning and ECRL analytics.", initiatives: ["Construction schedule AI", "Project risk analytics"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "CCCC Malaysia IT supports construction; DevOps is minimal.", initiatives: ["Project system updates", "Document management"] }
    ],
    PAYNET: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "PayNet secures Malaysia payment infrastructure and transactions.", initiatives: ["Payment security standards", "DuitNow fraud prevention"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "PayNet uses cloud for payment processing and clearing systems.", initiatives: ["Cloud payment processing", "Clearing system scaling"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "PayNet payment infrastructure has minimal IoT requirements.", initiatives: ["Data center monitoring", "Network infrastructure"] },
      { category: "Connectivity", icon: "globe", relevance: "High", summary: "PayNet operates national payment network connecting banks.", initiatives: ["DuitNow network reliability", "Interbank connectivity"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "PayNet uses AI for fraud detection across payment network.", initiatives: ["Real-time fraud detection", "Transaction anomaly AI"] },
      { category: "DevOps", icon: "code", relevance: "Medium", summary: "PayNet uses DevOps for payment platform reliability.", initiatives: ["Payment API CI/CD", "Clearing system automation"] }
    ],
    SPEEDMART: [
      { category: "Cybersecurity", icon: "shield", relevance: "Low", summary: "99 Speedmart has basic retail security; focus on POS and inventory.", initiatives: ["POS security hardening", "Store data backup"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "99 Speedmart uses cloud for inventory management across stores.", initiatives: ["Cloud inventory system", "Multi-store stock visibility"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "99 Speedmart has limited IoT; focus on retail systems.", initiatives: ["Store sensor pilots", "Shelf monitoring evaluation"] },
      { category: "Connectivity", icon: "globe", relevance: "Low", summary: "99 Speedmart connects stores for inventory and POS sync.", initiatives: ["Store network connectivity", "POS data sync"] },
      { category: "Data & AI", icon: "brain", relevance: "Medium", summary: "99 Speedmart uses demand forecasting for convenience retail.", initiatives: ["Demand forecasting models", "Store replenishment AI"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "99 Speedmart IT supports retail ops; DevOps is minimal.", initiatives: ["POS system updates", "Inventory system rollouts"] }
    ],
    GHAZANAH_SABAH: [
      { category: "Cybersecurity", icon: "shield", relevance: "Medium", summary: "Qhazanah Sabah secures state investment and development data.", initiatives: ["Investment data protection", "State fund security"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "Qhazanah Sabah uses cloud for investment and portfolio management.", initiatives: ["Cloud portfolio platform", "Investment analytics"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "Qhazanah Sabah state fund has minimal IoT requirements.", initiatives: ["Office infrastructure", "Data center ops"] },
      { category: "Connectivity", icon: "globe", relevance: "Low", summary: "Qhazanah Sabah connectivity is internal and partner-focused.", initiatives: ["Secure partner portal", "Investment network"] },
      { category: "Data & AI", icon: "brain", relevance: "Medium", summary: "Qhazanah Sabah uses analytics for state investment decisions.", initiatives: ["Investment analytics", "Portfolio dashboards"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "Qhazanah Sabah IT focuses on stability; DevOps is emerging.", initiatives: ["System modernization", "Reporting automation"] }
    ],
    TERENGGANU_INC: [
      { category: "Cybersecurity", icon: "shield", relevance: "Medium", summary: "Terengganu Inc secures state investment and development data.", initiatives: ["Investment data protection", "State fund security"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "Terengganu Inc uses cloud for investment and portfolio management.", initiatives: ["Cloud portfolio platform", "Investment analytics"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "Terengganu Inc state fund has minimal IoT requirements.", initiatives: ["Office infrastructure", "Data center ops"] },
      { category: "Connectivity", icon: "globe", relevance: "Low", summary: "Terengganu Inc connectivity is internal and partner-focused.", initiatives: ["Secure partner portal", "Investment network"] },
      { category: "Data & AI", icon: "brain", relevance: "Medium", summary: "Terengganu Inc uses analytics for state investment decisions.", initiatives: ["Investment analytics", "Portfolio dashboards"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "Terengganu Inc IT focuses on stability; DevOps is emerging.", initiatives: ["System modernization", "Reporting automation"] }
    ]
  };
  for (var k in t) if (COMPANIES[k]) COMPANIES[k].techTrends = t[k];

  var ict = {
    LHDN: { total: "MYR 350M", pctRevenue: "N/A", yoy: "+14%", focusAreas: ["MyTax Platform", "Tax Analytics AI", "E-Filing Security"], source: "estimated" },
    STATE_SEL_PJ: { total: "MYR 280M", pctRevenue: "N/A", yoy: "+10%", focusAreas: ["Smart Selangor", "Citizen Portal", "State Cloud"], source: "estimated" },
    MOE: { total: "MYR 600M", pctRevenue: "N/A", yoy: "+15%", focusAreas: ["DELIMa Platform", "School Connectivity", "Teacher Digital"], source: "estimated" },
    FGV: { total: "MYR 95M", pctRevenue: "0.5%", yoy: "+10%", focusAreas: ["Precision Agriculture", "Sugar Mill IoT", "ESG Digital"], source: "estimated" },
    AMBANK: { total: "MYR 750M", pctRevenue: "7.0%", yoy: "+11%", focusAreas: ["Digital Banking", "AI Risk", "Cloud Migration"], source: "estimated" },
    KWAP: { total: "MYR 180M", pctRevenue: "N/A", yoy: "+13%", focusAreas: ["Pension Analytics", "Portfolio AI", "Member Digital"], source: "estimated" },
    KPJ: { total: "MYR 200M", pctRevenue: "2.5%", yoy: "+18%", focusAreas: ["Hospital IT", "Clinical AI", "Telehealth"], source: "estimated" },
    GENTING: { total: "MYR 450M", pctRevenue: "1.6%", yoy: "+12%", focusAreas: ["Smart Resort", "Guest Analytics", "Casino Tech"], source: "estimated" },
    ALBUKHARY: { total: "MYR 80M", pctRevenue: "1.5%", yoy: "+8%", focusAreas: ["Auto Dealership", "Property Systems", "Group IT"], source: "estimated" },
    CCCC_MY: { total: "MYR 150M", pctRevenue: "1.2%", yoy: "+10%", focusAreas: ["ECRL Monitoring", "BIM Systems", "Safety IoT"], source: "estimated" },
    PAYNET: { total: "MYR 320M", pctRevenue: "28.0%", yoy: "+20%", focusAreas: ["DuitNow QR", "Real-Time Payments", "Fraud AI"], source: "estimated" },
    SPEEDMART: { total: "MYR 120M", pctRevenue: "1.2%", yoy: "+22%", focusAreas: ["Inventory AI", "POS Systems", "Supply Chain"], source: "estimated" },
    GHAZANAH_SABAH: { total: "MYR 25M", pctRevenue: "N/A", yoy: "+8%", focusAreas: ["Portfolio Systems", "State Analytics", "Digital Ops"], source: "estimated" },
    TERENGGANU_INC: { total: "MYR 30M", pctRevenue: "1.7%", yoy: "+10%", focusAreas: ["Investment Platform", "O&G Digital", "State Cloud"], source: "estimated" }
  };
  for (var k in ict) if (COMPANIES[k]) COMPANIES[k].ictSpend = ict[k];

  var ins = {
    LHDN: {
      topPriorities: [
        { priority: "E-invoicing national mandate", techInfluence: [
          { area: "Cloud", detail: "Cloud-scalable e-invoicing platform processing billions of invoices from all Malaysian businesses" },
          { area: "Data & AI", detail: "AI tax compliance analytics matching e-invoice data with tax declarations" }
        ]},
        { priority: "Tax compliance AI and risk-based audit", techInfluence: [
          { area: "Data & AI", detail: "ML risk models for taxpayer compliance scoring and audit case selection" },
          { area: "Cybersecurity", detail: "Secure handling of sensitive taxpayer financial data" }
        ]},
        { priority: "MyTax platform capacity and resilience", techInfluence: [
          { area: "Cloud", detail: "Cloud infrastructure scaling for annual filing peak loads (millions of concurrent users)" },
          { area: "Cybersecurity", detail: "Tax system protection from cyber attacks during critical filing periods" }
        ]},
        { priority: "Cross-agency data integration", techInfluence: [
          { area: "Data & AI", detail: "AI-driven cross-referencing of tax data with SSM, customs, and banking records" },
          { area: "Connectivity", detail: "Government-to-government API connectivity for tax data sharing" }
        ]},
        { priority: "Digital tax services for individuals and businesses", techInfluence: [
          { area: "Cloud", detail: "Cloud self-service portal for tax filing, payment, and correspondence" },
          { area: "Connectivity", detail: "Mobile tax services app for taxpayer access and notifications" }
        ]}
      ],
      painPoints: ["E-invoicing mandate rollout creating massive onboarding challenge for millions of SMEs", "MyTax platform capacity concerns during peak annual filing periods", "Taxpayer data privacy concerns amid expanding cross-agency data sharing", "Resistance from informal economy operators to digital tax compliance tools", "Cybersecurity threats targeting tax system during critical filing windows"],
      strategicInvestments: ["National e-invoicing platform rollout", "AI-powered tax compliance analytics engine"],
      direction: "LHDN is transforming Malaysia's tax administration through mandatory e-invoicing and AI-powered compliance analytics, aiming to close the tax gap and increase collection efficiency under the expanded tax base strategy.",
      partnerships: [
        { partner: "MDEC", area: "E-Invoicing Platform", impact: "High" },
        { partner: "SAP", area: "Tax Administration System", impact: "High" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+14-16%", narrative: "E-invoicing mandate rollout (expanding to all businesses by 2025) and AI compliance engine are driving 14-16% annual IT growth. Tax collection target increases ensure sustained technology investment." }
    },
    STATE_SEL_PJ: {
      topPriorities: [
        { priority: "Smart Selangor digital government programme", techInfluence: [
          { area: "Cloud", detail: "Cloud-based state government services platform for 6M+ residents" },
          { area: "5G & IoT", detail: "IoT smart city sensors for traffic, flood, and environmental monitoring" }
        ]},
        { priority: "Flood management and disaster early warning", techInfluence: [
          { area: "5G & IoT", detail: "IoT river level sensors and weather stations for flood prediction" },
          { area: "Data & AI", detail: "AI flood modelling and early warning system for flood-prone areas" }
        ]},
        { priority: "Citizen service digitalisation", techInfluence: [
          { area: "Cloud", detail: "Cloud citizen service portal for state government transactions" },
          { area: "Connectivity", detail: "Mobile-first state government services for citizen access" }
        ]},
        { priority: "State economic development analytics", techInfluence: [
          { area: "Data & AI", detail: "Economic data analytics for state investment and development planning" },
          { area: "Cloud", detail: "Cloud data platform for state economic indicators and performance" }
        ]},
        { priority: "Public safety and smart surveillance", techInfluence: [
          { area: "Data & AI", detail: "AI video analytics for public safety monitoring in urban areas" },
          { area: "Cybersecurity", detail: "Privacy-compliant surveillance data management and security" }
        ]}
      ],
      painPoints: ["Flood management urgency after devastating 2021-2024 floods driving immediate IoT investment needs", "Smart city technology integration across multiple local councils with varying IT maturity", "Citizen digital divide with aging population segments less comfortable with digital government services", "State government IT procurement processes slower than private sector vendor expectations", "Data sharing challenges between state, federal, and local government systems"],
      strategicInvestments: ["Smart Selangor integrated state platform", "IoT flood monitoring and early warning system"],
      direction: "Selangor and Putrajaya are pioneering smart state governance with integrated digital services and IoT-based disaster management, serving as a model for Malaysia's other states.",
      partnerships: [
        { partner: "Huawei", area: "Smart State Platform", impact: "High" },
        { partner: "Google Cloud", area: "State Data Analytics", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+10-12%", narrative: "Smart Selangor programme and flood IoT monitoring drive 10-12% annual growth. As Malaysia's wealthiest state, Selangor has budget capacity for sustained digital government investment." }
    },
    MOE: {
      topPriorities: [
        { priority: "DELIMa digital learning platform for 5M+ students", techInfluence: [
          { area: "Cloud", detail: "Cloud-scalable learning platform supporting millions of concurrent student sessions" },
          { area: "Data & AI", detail: "AI-personalised learning pathways and student performance analytics" }
        ]},
        { priority: "School connectivity under JENDELA initiative", techInfluence: [
          { area: "Connectivity", detail: "Broadband connectivity for 10,000+ schools including rural and remote areas" },
          { area: "5G & IoT", detail: "4G/5G school connectivity for bandwidth-intensive educational content" }
        ]},
        { priority: "Teacher digital competency development", techInfluence: [
          { area: "Cloud", detail: "Cloud-based teacher training and professional development platform" },
          { area: "DevOps", detail: "Digital content creation tools and curriculum deployment systems" }
        ]},
        { priority: "Education data analytics and student performance", techInfluence: [
          { area: "Data & AI", detail: "AI student performance prediction and early intervention analytics" },
          { area: "Cloud", detail: "Cloud education data warehouse for national education performance tracking" }
        ]},
        { priority: "STEM and digital skills curriculum", techInfluence: [
          { area: "Data & AI", detail: "AI and coding curriculum integration across primary and secondary schools" },
          { area: "Cloud", detail: "Cloud coding and STEM education platforms for student hands-on learning" }
        ]}
      ],
      painPoints: ["10,000+ school scale creating enormous connectivity and device deployment challenge", "Urban-rural digital divide with rural schools having poor broadband and limited devices", "Teacher digital literacy gaps limiting effective use of DELIMa and digital learning tools", "Student device access inequality with many B40 families unable to afford learning devices", "Curriculum-technology alignment challenges integrating digital skills into traditional subjects"],
      strategicInvestments: ["DELIMa platform expansion and content development", "School broadband connectivity programme"],
      direction: "MOE is building Malaysia's national digital education infrastructure through the DELIMa platform and school connectivity, aiming to close the urban-rural digital divide in education for 10,000+ schools.",
      partnerships: [
        { partner: "Google", area: "Classroom & Chromebook", impact: "High" },
        { partner: "Microsoft", area: "Education Cloud & Teams", impact: "High" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+14-18%", narrative: "DELIMa platform scaling to 5M+ students and JENDELA school connectivity drive 14-18% annual growth. Education digitalisation is a national priority ensuring sustained budget allocation." }
    },
    FGV: {
      topPriorities: [
        { priority: "Precision agriculture for 440,000 ha estate", techInfluence: [
          { area: "5G & IoT", detail: "Drone and satellite monitoring across the world's largest managed palm oil estate" },
          { area: "Data & AI", detail: "AI yield prediction and pest detection for estate productivity improvement" }
        ]},
        { priority: "EUDR supply chain traceability compliance", techInfluence: [
          { area: "Cloud", detail: "Cloud traceability platform tracking palm oil from 440,000 ha to export port" },
          { area: "Data & AI", detail: "AI-verified geolocation and deforestation-free supply chain analytics" }
        ]},
        { priority: "Sugar and logistics operations digitalisation", techInfluence: [
          { area: "Cloud", detail: "Cloud ERP for integrated sugar refining and logistics operations" },
          { area: "Data & AI", detail: "AI demand forecasting for sugar production and distribution planning" }
        ]},
        { priority: "FELDA settler digital services", techInfluence: [
          { area: "Connectivity", detail: "Mobile digital services for FELDA settlers in rural estate areas" },
          { area: "Cloud", detail: "Cloud platform for settler land management and financial services" }
        ]},
        { priority: "ESG data management and sustainability reporting", techInfluence: [
          { area: "Data & AI", detail: "Carbon footprint tracking and sustainability analytics across operations" },
          { area: "Cloud", detail: "Cloud ESG data platform for investor and regulatory reporting" }
        ]}
      ],
      painPoints: ["440,000 ha scale creating the largest agricultural technology deployment challenge in Malaysia", "FELDA settler digital literacy limiting precision agriculture tool adoption on estates", "Remote estate locations with poor connectivity preventing real-time IoT data transmission", "EUDR compliance requiring granular supply chain traceability not previously tracked", "Financial constraints from historical losses limiting technology investment budget"],
      strategicInvestments: ["Precision agriculture drone and satellite platform", "EUDR traceability system for palm oil supply chain"],
      direction: "FGV is deploying precision agriculture technology across the world's largest palm oil estate portfolio while building EUDR-compliant traceability systems to maintain European market access.",
      partnerships: [
        { partner: "FELDA", area: "Estate Technology Co-investment", impact: "High" },
        { partner: "Sime Darby", area: "EUDR Industry Collaboration", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+10-12%", narrative: "EUDR compliance deadline and precision agriculture deployment across 440,000 ha drive 10-12% IT growth. Mandatory traceability creates a structural tech spend floor for all plantation companies." }
    },
    AMBANK: {
      topPriorities: [
        { priority: "Digital banking transformation under Catalyst strategy", techInfluence: [
          { area: "Cloud", detail: "Multi-year cloud migration programme moving core banking workloads to Azure" },
          { area: "Data & AI", detail: "AI credit scoring and customer analytics for digital banking growth" }
        ]},
        { priority: "AI-powered risk management and credit scoring", techInfluence: [
          { area: "Data & AI", detail: "ML fraud detection and automated credit risk assessment for faster loan approvals" },
          { area: "Cybersecurity", detail: "AI-enhanced threat detection for online banking security" }
        ]},
        { priority: "Cloud-first infrastructure migration", techInfluence: [
          { area: "Cloud", detail: "Azure cloud migration for application hosting and data platform modernisation" },
          { area: "DevOps", detail: "Cloud-native development practices and CI/CD pipeline adoption" }
        ]},
        { priority: "Digital payments and mobile banking", techInfluence: [
          { area: "Connectivity", detail: "Enhanced mobile banking and DuitNow integration for seamless digital payments" },
          { area: "5G & IoT", detail: "Contactless and IoT payment terminal deployment across merchant network" }
        ]},
        { priority: "Customer experience personalisation", techInfluence: [
          { area: "Data & AI", detail: "AI-driven product recommendations and personalised banking offers" },
          { area: "Cloud", detail: "Cloud customer data platform for unified omnichannel experience" }
        ]}
      ],
      painPoints: ["Mid-tier market position with smaller IT budget than Big 3 banks (Maybank, CIMB, Public Bank)", "Legacy core banking system creating integration bottlenecks for cloud migration", "Digital banking competition from larger banks and digital-only challengers (GXBank, Boost Bank)", "Cybersecurity posture needing strengthening amid rising online fraud targeting mid-tier banks", "Catalyst transformation programme execution risk with multiple concurrent technology initiatives"],
      strategicInvestments: ["Cloud migration programme (multi-year)", "AI credit risk and fraud detection platform"],
      direction: "AmBank is executing its Catalyst digital transformation strategy, migrating to cloud infrastructure while deploying AI across risk management and customer analytics to compete with larger digital-first peers.",
      partnerships: [
        { partner: "Microsoft Azure", area: "Cloud Infrastructure", impact: "High" },
        { partner: "MetLife", area: "Bancassurance Digital Integration", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+11-13%", narrative: "Catalyst digital strategy and cloud migration programme drive 11-13% annual IT growth. AI risk management and digital banking platforms require sustained multi-year investment." }
    },
    KWAP: {
      topPriorities: [
        { priority: "Pension portfolio AI optimisation", techInfluence: [
          { area: "Data & AI", detail: "AI-driven pension fund portfolio optimisation and risk analytics for RM190B+ AUM" },
          { area: "Cloud", detail: "Cloud investment analytics platform for multi-asset portfolio management" }
        ]},
        { priority: "Member digital services modernisation", techInfluence: [
          { area: "Cloud", detail: "Cloud self-service portal for government pensioner account management" },
          { area: "Connectivity", detail: "Mobile app for pension members to check balances and request services" }
        ]},
        { priority: "GEAR-uP portfolio company technology investment", techInfluence: [
          { area: "Data & AI", detail: "AI investment analytics for GEAR-uP portfolio company performance monitoring" },
          { area: "Cloud", detail: "Cloud governance platform for portfolio company digital maturity tracking" }
        ]},
        { priority: "ESG and sustainable investment analytics", techInfluence: [
          { area: "Data & AI", detail: "ESG scoring and climate risk analytics for pension fund investment decisions" },
          { area: "Cloud", detail: "Cloud ESG data aggregation from portfolio companies and external sources" }
        ]},
        { priority: "Operational efficiency and regulatory compliance", techInfluence: [
          { area: "DevOps", detail: "Automated regulatory reporting and compliance workflows" },
          { area: "Cybersecurity", detail: "Pension fund data protection for government employee financial records" }
        ]}
      ],
      painPoints: ["Government pension fund governance constraints limiting technology vendor flexibility", "Legacy investment management systems not designed for modern multi-asset class analytics", "ESG data quality challenges with limited standardised reporting from portfolio companies", "Cybersecurity risk from managing sensitive government employee financial records", "Limited internal technology talent competing with private sector fund managers"],
      strategicInvestments: ["AI-driven pension portfolio management system", "Digital member self-service platform"],
      direction: "KWAP is modernising its investment management with AI analytics while expanding digital services for government pensioners, simultaneously catalysing technology investment across its GEAR-uP portfolio companies.",
      partnerships: [
        { partner: "Khazanah", area: "Joint Startup Ecosystem (RM750M)", impact: "High" },
        { partner: "Bloomberg", area: "Investment Data & Analytics", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+13-15%", narrative: "AI portfolio analytics and GEAR-uP technology mandates drive 13-15% annual growth. Joint RM750M startup fund with Khazanah demonstrates commitment to digital economy investment." }
    },
    KPJ: {
      topPriorities: [
        { priority: "Hospital information system modernisation across 30+ hospitals", techInfluence: [
          { area: "Cloud", detail: "Cloud-hosted unified HIS platform replacing fragmented systems across hospital network" },
          { area: "Data & AI", detail: "AI clinical decision support and patient outcome analytics" }
        ]},
        { priority: "Telehealth and digital health services", techInfluence: [
          { area: "Connectivity", detail: "Teleconsultation platform with video conferencing for remote patient access" },
          { area: "Cloud", detail: "Cloud telehealth platform supporting multi-specialty virtual consultations" }
        ]},
        { priority: "Medical tourism digital marketing", techInfluence: [
          { area: "Data & AI", detail: "AI-driven marketing analytics for medical tourism patient acquisition" },
          { area: "Cloud", detail: "Cloud patient relationship management for international patient coordination" }
        ]},
        { priority: "Clinical AI and diagnostic support", techInfluence: [
          { area: "Data & AI", detail: "AI radiology, pathology, and clinical analytics for diagnostic accuracy" },
          { area: "5G & IoT", detail: "Medical IoT devices and patient monitoring across hospital network" }
        ]},
        { priority: "Patient experience and engagement", techInfluence: [
          { area: "Cloud", detail: "Cloud patient portal for appointments, records, and billing across all hospitals" },
          { area: "Connectivity", detail: "Hospital-wide Wi-Fi and patient mobile engagement platform" }
        ]}
      ],
      painPoints: ["30+ hospital HIS fragmentation creating inconsistent patient data and care quality", "Healthcare data privacy requirements (medical records) creating complex cloud compliance", "Telehealth reimbursement uncertainty limiting investment in virtual care infrastructure", "Clinical AI regulatory approval processes for diagnostic tools unclear in Malaysia", "Medical IoT device cybersecurity risk with connected patient monitoring equipment"],
      strategicInvestments: ["Unified HIS platform across KPJ hospital network", "Telehealth and remote consultation platform"],
      direction: "KPJ is building a unified digital health platform across its 30+ hospital network, combining HIS modernisation with telehealth and AI-assisted diagnostics to capture the growing medical tourism market.",
      partnerships: [
        { partner: "InterSystems", area: "Hospital Information System", impact: "High" },
        { partner: "Philips", area: "Clinical AI & Imaging", impact: "High" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+16-20%", narrative: "HIS modernisation across 30+ hospitals and telehealth platform deployment drive 16-20% annual growth. Medical tourism digitalisation and clinical AI add incremental tech spend." }
    },
    GENTING: {
      topPriorities: [
        { priority: "Genting SkyWorlds and resort digital experience", techInfluence: [
          { area: "Data & AI", detail: "AI guest experience personalisation and attraction queue management" },
          { area: "5G & IoT", detail: "IoT theme park ride monitoring and guest wearable integration" }
        ]},
        { priority: "Casino technology and gaming innovation", techInfluence: [
          { area: "Data & AI", detail: "AI gaming analytics for player behaviour and revenue optimisation" },
          { area: "Cybersecurity", detail: "Gaming system integrity and anti-fraud protection" }
        ]},
        { priority: "Hospitality customer analytics and personalisation", techInfluence: [
          { area: "Data & AI", detail: "AI customer lifetime value and loyalty programme personalisation" },
          { area: "Cloud", detail: "Cloud CRM for unified guest profile across resort, casino, and entertainment" }
        ]},
        { priority: "Smart resort IoT operations", techInfluence: [
          { area: "5G & IoT", detail: "Smart building IoT for resort energy, HVAC, and facility management" },
          { area: "Cloud", detail: "Cloud IoT platform for centralised resort operations monitoring" }
        ]},
        { priority: "Global gaming platform and digital presence", techInfluence: [
          { area: "Cloud", detail: "Cloud gaming and entertainment platform for Genting global properties" },
          { area: "Connectivity", detail: "Resort-wide Wi-Fi 6 and 5G coverage for guest connectivity" }
        ]}
      ],
      painPoints: ["Resort mountain-top location creating unique connectivity and infrastructure challenges", "Gaming industry regulatory complexity for technology deployment in casinos", "Customer data across casino, hotel, theme park siloed in different legacy systems", "Cybersecurity risk from gaming systems attractive to sophisticated attack groups", "Smart resort IoT deployment complexity across mixed-age resort infrastructure"],
      strategicInvestments: ["Smart resort IoT and guest experience platform", "AI-powered customer loyalty and analytics system"],
      direction: "Genting is transforming its resort and gaming operations with smart technology, using IoT, AI analytics, and digital guest experiences to enhance customer engagement and operational efficiency across its global properties.",
      partnerships: [
        { partner: "Oracle Hospitality", area: "Resort Management System", impact: "High" },
        { partner: "IGT", area: "Gaming Technology", impact: "High" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+10-14%", narrative: "Smart resort technology and gaming innovation drive 10-14% annual IT growth. Genting SkyWorlds digital experience and customer analytics create compounding tech investment across resort operations." }
    },
    ALBUKHARY: {
      topPriorities: [
        { priority: "Automotive dealership network digitalisation", techInfluence: [
          { area: "Cloud", detail: "Cloud dealer management system for Proton and other brand dealerships" },
          { area: "Connectivity", detail: "Digital showroom and online sales capabilities" }
        ]},
        { priority: "Property development technology", techInfluence: [
          { area: "Cloud", detail: "Cloud property CRM and sales management platform" },
          { area: "Data & AI", detail: "AI property market analytics for development planning" }
        ]},
        { priority: "Group operational consolidation", techInfluence: [
          { area: "Cloud", detail: "Cloud ERP for group financial consolidation across divisions" },
          { area: "DevOps", detail: "Standardised IT practices across diverse business units" }
        ]},
        { priority: "Customer engagement and marketing", techInfluence: [
          { area: "Data & AI", detail: "AI customer targeting for automotive and property marketing" },
          { area: "Connectivity", detail: "Multi-channel digital marketing and customer engagement" }
        ]},
        { priority: "Basic cybersecurity posture", techInfluence: [
          { area: "Cybersecurity", detail: "Group-wide security controls and endpoint protection" },
          { area: "Cloud", detail: "Cloud security for migrated business applications" }
        ]}
      ],
      painPoints: ["Diverse business portfolio creating fragmented IT landscape and priorities", "Automotive dealer digital readiness varying across urban and rural locations", "Limited group IT budget for comprehensive digital transformation", "Low technology adoption maturity requiring foundational digitalisation first", "Dependency on OEM (Proton) technology decisions for dealer systems"],
      strategicInvestments: ["Dealership management digital platform", "Property CRM and sales platform"],
      direction: "Albukhary Group is digitising its automotive dealership and property operations, taking a measured approach to technology investment focused on operational efficiency rather than transformative digital bets.",
      partnerships: [
        { partner: "Proton", area: "Dealer Technology Integration", impact: "Medium" },
        { partner: "CDK Global", area: "Dealership Management", impact: "Medium" }
      ],
      spendOutlook: { trend: "Stable", delta: "+7-9%", narrative: "Dealership and property digitalisation drive steady 7-9% IT growth. Group diversification limits concentrated technology investment, spreading spend across multiple low-intensity sectors." }
    },
    CCCC_MY: {
      topPriorities: [
        { priority: "ECRL mega-project digital delivery", techInfluence: [
          { area: "Cloud", detail: "Cloud project management and BIM collaboration for 665km ECRL railway" },
          { area: "Data & AI", detail: "AI construction progress monitoring and schedule optimisation" }
        ]},
        { priority: "BIM and construction technology excellence", techInfluence: [
          { area: "Cloud", detail: "Cloud-hosted BIM platform for design coordination and clash detection" },
          { area: "DevOps", detail: "BIM model management and version control workflows" }
        ]},
        { priority: "Smart construction safety and monitoring", techInfluence: [
          { area: "5G & IoT", detail: "IoT sensors for construction site safety monitoring and equipment tracking" },
          { area: "Data & AI", detail: "AI video analytics for construction site safety compliance" }
        ]},
        { priority: "Quality assurance and material tracking", techInfluence: [
          { area: "5G & IoT", detail: "IoT material tracking and quality monitoring across construction sites" },
          { area: "Cloud", detail: "Cloud quality management platform for material certification and testing" }
        ]},
        { priority: "Project financial management", techInfluence: [
          { area: "Cloud", detail: "Cloud-based project accounting and cost control system" },
          { area: "Data & AI", detail: "AI cost forecasting and budget variance analytics" }
        ]}
      ],
      painPoints: ["ECRL project completion timeline creating technology investment peak and cliff", "CCCC Group technology platforms designed for Chinese construction context requiring local adaptation", "665km linear project creating connectivity challenges across remote construction sections", "Cross-cultural technology adoption between Chinese and Malaysian project teams", "Post-ECRL project pipeline uncertainty affecting long-term technology investment planning"],
      strategicInvestments: ["ECRL digital project monitoring platform", "BIM-enabled smart construction systems"],
      direction: "CCCC Malaysia is deploying Chinese construction technology for the ECRL mega-project, leveraging BIM and IoT monitoring as the project nears its January 2027 commercial operations target.",
      partnerships: [
        { partner: "CCCC Group", area: "Parent Group Construction Technology", impact: "High" },
        { partner: "Bentley Systems", area: "BIM & Infrastructure Design", impact: "Medium" }
      ],
      spendOutlook: { trend: "Stable", delta: "+8-10%", narrative: "ECRL project completion in 2027 will peak and then reduce construction tech spend. Any new project wins post-ECRL would reset the investment cycle, maintaining 8-10% growth." }
    },
    PAYNET: {
      topPriorities: [
        { priority: "DuitNow QR merchant network expansion to 3M+", techInfluence: [
          { area: "Connectivity", detail: "Payment terminal connectivity for 3M+ merchant QR acceptance points" },
          { area: "Cloud", detail: "Cloud payment processing infrastructure scaling for transaction volume growth" }
        ]},
        { priority: "Real-time cross-border payment connectivity", techInfluence: [
          { area: "Connectivity", detail: "Cross-border payment network linking DuitNow with Singapore, Thailand, Indonesia" },
          { area: "Cybersecurity", detail: "Cross-border transaction security and fraud prevention" }
        ]},
        { priority: "Payment fraud detection and cybersecurity", techInfluence: [
          { area: "Data & AI", detail: "AI real-time fraud detection processing 6B+ annual transactions" },
          { area: "Cybersecurity", detail: "Payment infrastructure protection as national critical information infrastructure" }
        ]},
        { priority: "Instant payments infrastructure scaling", techInfluence: [
          { area: "Cloud", detail: "Cloud-native payment processing for handling peak transaction volumes" },
          { area: "DevOps", detail: "Zero-downtime deployment for payment system updates and patches" }
        ]},
        { priority: "Open banking and API ecosystem", techInfluence: [
          { area: "Connectivity", detail: "API platform for fintech and bank integration with national payment infrastructure" },
          { area: "Cybersecurity", detail: "Open banking API security and third-party access control" }
        ]}
      ],
      painPoints: ["6B+ annual transactions creating extreme scaling and uptime requirements (99.999%)", "Cross-border payment fraud sophistication increasing with ASEAN payment network expansion", "Merchant QR fragmentation with competing standards from banks and e-wallets", "Real-time payment system availability expectations creating zero-tolerance for downtime", "API security challenges with growing number of fintech integrations into payment network"],
      strategicInvestments: ["DuitNow cross-border payment platform (ASEAN linkages)", "AI-powered real-time fraud detection engine"],
      direction: "PayNet is building ASEAN's most connected real-time payment infrastructure, expanding DuitNow's QR and cross-border capabilities while hardening fraud detection as transaction volumes surpass 6 billion annually.",
      partnerships: [
        { partner: "Bank Negara Malaysia", area: "Payment Policy & Oversight", impact: "High" },
        { partner: "NETS Singapore", area: "Cross-border QR Payments", impact: "High" },
        { partner: "PromptPay Thailand", area: "Cross-border Linkage", impact: "High" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+18-22%", narrative: "DuitNow cross-border expansion and fraud AI drive aggressive 18-22% annual growth. As Malaysia's payment infrastructure backbone, PayNet's tech spend scales with national digital payment adoption." }
    },
    SPEEDMART: {
      topPriorities: [
        { priority: "Store expansion technology platform (3,000+ stores)", techInfluence: [
          { area: "Cloud", detail: "Cloud POS and store management platform scalable to 3,000+ outlets" },
          { area: "Connectivity", detail: "Reliable store connectivity for POS, inventory, and management systems" }
        ]},
        { priority: "Inventory and demand forecasting AI", techInfluence: [
          { area: "Data & AI", detail: "AI demand prediction for 4,000+ SKUs across 2,500+ store locations" },
          { area: "Cloud", detail: "Cloud inventory management platform with real-time stock visibility" }
        ]},
        { priority: "Supply chain and distribution centre automation", techInfluence: [
          { area: "Data & AI", detail: "AI warehouse picking optimisation and route planning for distribution" },
          { area: "5G & IoT", detail: "IoT monitoring for cold chain compliance and warehouse automation" }
        ]},
        { priority: "Store operations efficiency", techInfluence: [
          { area: "Cloud", detail: "Cloud-based workforce scheduling and store performance management" },
          { area: "Data & AI", detail: "AI store layout and product placement optimisation" }
        ]},
        { priority: "Customer analytics and pricing optimisation", techInfluence: [
          { area: "Data & AI", detail: "AI competitive pricing and promotion effectiveness analytics" },
          { area: "Cloud", detail: "Cloud data platform for customer purchasing pattern analysis" }
        ]}
      ],
      painPoints: ["Rapid store expansion (100+ new stores/year) creating massive technology scaling challenge", "Thin grocery margins limiting per-store technology investment budget", "Store locations in varied areas with inconsistent broadband connectivity quality", "Legacy POS and inventory systems needing replacement across existing 2,500+ stores", "Limited in-house technology team relative to store expansion pace"],
      strategicInvestments: ["Centralised inventory AI platform", "Distribution centre automation programme"],
      direction: "99 Speedmart is building scalable technology infrastructure to support its aggressive expansion towards 3,000+ stores, using AI for inventory optimisation and distribution automation to maintain thin-margin efficiency.",
      partnerships: [
        { partner: "Oracle", area: "Retail ERP Platform", impact: "High" },
        { partner: "Blue Yonder", area: "Supply Chain AI", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+20-25%", narrative: "Aggressive store expansion and distribution automation drive 20-25% IT growth. Each 100 new stores require POS, connectivity, and inventory system deployment, creating scaling tech spend." }
    },
    GHAZANAH_SABAH: {
      topPriorities: [
        { priority: "Sabah economic development investment tracking", techInfluence: [
          { area: "Cloud", detail: "Cloud investment portfolio tracking and reporting platform" },
          { area: "Data & AI", detail: "Economic development analytics for Sabah growth sector identification" }
        ]},
        { priority: "Portfolio company governance and reporting", techInfluence: [
          { area: "Cloud", detail: "Cloud governance platform for portfolio company performance monitoring" },
          { area: "DevOps", detail: "Automated reporting workflows for board and stakeholder updates" }
        ]},
        { priority: "State development analytics", techInfluence: [
          { area: "Data & AI", detail: "Sabah socioeconomic analytics for informed development investment decisions" },
          { area: "Cloud", detail: "Cloud data platform for Sabah economic indicators" }
        ]},
        { priority: "Tourism and agriculture digital development", techInfluence: [
          { area: "Data & AI", detail: "Tourism and agriculture data analytics for Sabah sector development" },
          { area: "Connectivity", detail: "Digital platforms for Sabah tourism and agriculture promotion" }
        ]},
        { priority: "Basic IT infrastructure and capability", techInfluence: [
          { area: "Cloud", detail: "Cloud-based office and collaboration infrastructure" },
          { area: "Cybersecurity", detail: "Basic security controls for investment and financial data protection" }
        ]}
      ],
      painPoints: ["Limited budget and small team constraining technology ambition", "Sabah geographic remoteness creating connectivity and vendor access challenges", "State economic dependency on commodity sectors limiting digital investment returns", "Low digital maturity requiring foundational IT before advanced analytics", "Talent retention difficulty with skilled staff migrating to KL and Singapore"],
      strategicInvestments: ["Investment portfolio management platform", "Economic development data analytics"],
      direction: "Qhazanah Sabah is building basic digital infrastructure for portfolio management and state development tracking, supporting Sabah's economic growth strategy through data-driven investment decisions.",
      partnerships: [
        { partner: "Sabah State Government", area: "State Development Planning", impact: "High" },
        { partner: "Deloitte", area: "Portfolio Governance", impact: "Medium" }
      ],
      spendOutlook: { trend: "Stable", delta: "+7-9%", narrative: "Portfolio management digitalisation and state analytics drive steady 7-9% growth. Limited scale and Sabah's economic constraints moderate the pace of technology adoption." }
    },
    TERENGGANU_INC: {
      topPriorities: [
        { priority: "Oil & gas investment portfolio digital management", techInfluence: [
          { area: "Cloud", detail: "Cloud investment tracking for petroleum-dependent portfolio" },
          { area: "Data & AI", detail: "AI analytics for O&G price scenario modelling and portfolio impact" }
        ]},
        { priority: "State economic diversification tracking", techInfluence: [
          { area: "Data & AI", detail: "Economic diversification analytics for tourism, aquaculture, and halal sectors" },
          { area: "Cloud", detail: "Cloud data platform for state economic performance monitoring" }
        ]},
        { priority: "Tourism and halal industry digital platforms", techInfluence: [
          { area: "Cloud", detail: "Cloud platform for Terengganu tourism promotion and halal certification" },
          { area: "Connectivity", detail: "Digital tourism services for visitor information and booking" }
        ]},
        { priority: "Aquaculture and agriculture digitalisation", techInfluence: [
          { area: "5G & IoT", detail: "IoT water quality monitoring for aquaculture operations" },
          { area: "Data & AI", detail: "AI analytics for aquaculture production optimisation" }
        ]},
        { priority: "State government digital services", techInfluence: [
          { area: "Cloud", detail: "Cloud-based state government administration and citizen services" },
          { area: "Cybersecurity", detail: "Data protection for state investment and administrative records" }
        ]}
      ],
      painPoints: ["Heavy petroleum revenue dependency creating budget uncertainty for digital investments", "Limited local technology vendor ecosystem in Terengganu for implementation support", "State-level IT governance and procurement processes slowing technology adoption", "Low digital literacy in rural and fishing community segments targeted for digital services", "Aquaculture and tourism IoT connectivity challenges in coastal and remote areas"],
      strategicInvestments: ["Investment tracking and reporting platform", "Tourism and halal industry digital platforms"],
      direction: "Terengganu Inc is digitising its investment management while supporting the state's economic diversification from oil & gas into tourism, aquaculture, and halal industry through digital enabling platforms.",
      partnerships: [
        { partner: "Terengganu State Government", area: "State Investment Policy", impact: "High" },
        { partner: "Petronas", area: "O&G Investment Collaboration", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+9-11%", narrative: "Economic diversification platforms and investment digitalisation drive 9-11% annual growth. State tourism and halal industry digital mandates create incremental tech spend requirements." }
    }
  };
  for (var k in ins) if (COMPANIES[k]) COMPANIES[k].industryInsights = ins[k];
})();
