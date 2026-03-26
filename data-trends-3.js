(function() {
  var t = {
    TNB: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "TNB's critical grid infrastructure requires robust OT security against cyber threats.", initiatives: ["Grid SCADA security hardening", "ICS/OT incident response framework"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "TNB uses cloud for billing, analytics, and non-critical workloads.", initiatives: ["Cloud migration for billing systems", "Hybrid cloud for demand analytics"] },
      { category: "5G & IoT", icon: "signal", relevance: "High", summary: "Smart grid and smart meters drive TNB's IoT and 5G deployment.", initiatives: ["Smart meter rollout nationwide", "5G-enabled grid monitoring"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "TNB needs reliable connectivity for grid operations and customer services.", initiatives: ["Private LTE for substations", "Fiber backbone for control centers"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "TNB leverages AI for demand forecasting and grid optimization.", initiatives: ["AI-based load forecasting", "Predictive maintenance for assets"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "TNB's IT development pace is moderate for utility operations.", initiatives: ["CI/CD for billing apps", "Agile for customer portals"] }
    ],
    AIRSELANGOR: [
      { category: "Cybersecurity", icon: "shield", relevance: "Medium", summary: "Air Selangor protects water SCADA and customer data from cyber risks.", initiatives: ["SCADA network segmentation", "Customer data encryption"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "Air Selangor adopts cloud for billing and analytics workloads.", initiatives: ["Cloud billing platform migration", "NRW analytics on cloud"] },
      { category: "5G & IoT", icon: "signal", relevance: "High", summary: "Smart water meters and leak detection drive Air Selangor's IoT adoption.", initiatives: ["Smart meter deployment in Selangor", "IoT-based leak detection sensors"] },
      { category: "Connectivity", icon: "globe", relevance: "Low", summary: "Air Selangor requires connectivity for meter data and operations.", initiatives: ["LPWAN for meter connectivity", "Fiber for treatment plants"] },
      { category: "Data & AI", icon: "brain", relevance: "Medium", summary: "Air Selangor uses data analytics for NRW reduction and demand prediction.", initiatives: ["NRW analytics dashboard", "Demand forecasting models"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "Air Selangor's IT development focuses on operational systems.", initiatives: ["Billing system modernization", "Asset management digitization"] }
    ],
    GASMSIA: [
      { category: "Cybersecurity", icon: "shield", relevance: "Medium", summary: "Gas Malaysia secures OT/SCADA systems for pipeline and metering operations.", initiatives: ["SCADA security assessment", "OT network isolation"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "Gas Malaysia uses cloud for billing and analytics.", initiatives: ["Cloud-based billing platform", "Gas demand analytics"] },
      { category: "5G & IoT", icon: "signal", relevance: "High", summary: "Smart gas meters and pipeline monitoring drive Gas Malaysia's IoT focus.", initiatives: ["Smart gas meter rollout", "Pipeline pressure IoT sensors"] },
      { category: "Connectivity", icon: "globe", relevance: "Low", summary: "Gas Malaysia needs connectivity for meter data and SCADA.", initiatives: ["Meter data backhaul network", "SCADA redundancy links"] },
      { category: "Data & AI", icon: "brain", relevance: "Medium", summary: "Gas Malaysia applies analytics for demand forecasting and leak detection.", initiatives: ["Demand prediction models", "Anomaly detection for leaks"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "Gas Malaysia's IT pace is moderate for regulated utility.", initiatives: ["Billing system updates", "Customer portal enhancements"] }
    ],
    KUMH: [
      { category: "Cybersecurity", icon: "shield", relevance: "Medium", summary: "KUMH protects water treatment and billing systems from cyber threats.", initiatives: ["Treatment plant SCADA security", "Customer data protection"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "KUMH adopts cloud for cost-effective IT and analytics.", initiatives: ["Cloud billing for Kelantan", "NRW analytics platform"] },
      { category: "5G & IoT", icon: "signal", relevance: "High", summary: "Smart meters and leak detection are key for KUMH's NRW reduction.", initiatives: ["Smart meter pilot in Kelantan", "IoT leak detection in pipes"] },
      { category: "Connectivity", icon: "globe", relevance: "Low", summary: "KUMH needs connectivity for meter data in rural Kelantan.", initiatives: ["LPWAN for rural meters", "Treatment plant connectivity"] },
      { category: "Data & AI", icon: "brain", relevance: "Medium", summary: "KUMH uses data for NRW tracking and operational efficiency.", initiatives: ["NRW reduction analytics", "Asset performance tracking"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "KUMH's IT development is limited by scale and funding.", initiatives: ["Billing digitization", "Basic asset management"] }
    ],
    ALTEL: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "Altel secures network infrastructure and customer data as a telecom.", initiatives: ["Network security monitoring", "Customer data encryption"] },
      { category: "Cloud", icon: "cloud", relevance: "High", summary: "Altel uses cloud for core network functions and BSS/OSS.", initiatives: ["Cloud-native BSS platform", "NFV for network functions"] },
      { category: "5G & IoT", icon: "signal", relevance: "High", summary: "Altel's 5G and IoT are core to wireless broadband and enterprise.", initiatives: ["5G FWA deployment", "Enterprise IoT connectivity"] },
      { category: "Connectivity", icon: "globe", relevance: "High", summary: "Connectivity is Altel's core business across wireless and fiber.", initiatives: ["Rural broadband expansion", "Wholesale 5G access"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "Altel applies AI for network optimization and customer analytics.", initiatives: ["Network traffic optimization", "Churn prediction models"] },
      { category: "DevOps", icon: "code", relevance: "High", summary: "Altel adopts DevOps for rapid service deployment and updates.", initiatives: ["CI/CD for network services", "Automated provisioning"] }
    ],
    TUNEPRO: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "TuneProtect protects policyholder data and digital platforms as insurtech.", initiatives: ["Policy data encryption", "Fraud detection systems"] },
      { category: "Cloud", icon: "cloud", relevance: "High", summary: "TuneProtect runs digital insurance on cloud for scale and agility.", initiatives: ["Cloud-native policy platform", "Multi-region cloud deployment"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "5G and IoT are limited for TuneProtect's travel and general insurance.", initiatives: ["Telematics pilot for motor", "IoT for property risk"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "TuneProtect needs connectivity for digital distribution and APIs.", initiatives: ["API connectivity for partners", "CDN for digital channels"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "TuneProtect uses AI for underwriting, claims, and customer experience.", initiatives: ["AI underwriting automation", "Claims fraud detection"] },
      { category: "DevOps", icon: "code", relevance: "Medium", summary: "TuneProtect adopts DevOps for digital product delivery.", initiatives: ["CI/CD for insurance apps", "Agile product development"] }
    ],
    UNISEM: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "Unisem protects semiconductor IP and manufacturing data from theft.", initiatives: ["Fab data loss prevention", "Supply chain security"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "Unisem uses cloud for ERP, analytics, and non-fab workloads.", initiatives: ["Cloud ERP for operations", "Yield analytics platform"] },
      { category: "5G & IoT", icon: "signal", relevance: "Medium", summary: "5G and IoT drive chip demand; Unisem supplies packaging for these.", initiatives: ["RF packaging for 5G", "IoT chip packaging capacity"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "Unisem needs connectivity for global customers and supply chain.", initiatives: ["Secure customer portals", "Supply chain visibility"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "Unisem uses AI for yield optimization and defect prediction.", initiatives: ["AI yield optimization", "Defect prediction models"] },
      { category: "DevOps", icon: "code", relevance: "Medium", summary: "Unisem adopts DevOps for IT and manufacturing software.", initiatives: ["MES automation pipelines", "IT application CI/CD"] }
    ],
    VITROX: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "ViTrox protects machine vision IP and customer data in semiconductor.", initiatives: ["Product IP protection", "Customer data security"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "ViTrox uses cloud for software delivery and analytics.", initiatives: ["Cloud-based AOI software", "Equipment analytics SaaS"] },
      { category: "5G & IoT", icon: "signal", relevance: "Medium", summary: "ViTrox's AOI serves 5G and IoT chip manufacturers.", initiatives: ["AOI for advanced packaging", "5G chip inspection systems"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "ViTrox needs connectivity for global support and remote diagnostics.", initiatives: ["Remote equipment diagnostics", "Global support portal"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "ViTrox applies AI in machine vision for defect detection.", initiatives: ["AI defect classification", "Computer vision R&D"] },
      { category: "DevOps", icon: "code", relevance: "Medium", summary: "ViTrox uses DevOps for software and firmware delivery.", initiatives: ["Firmware CI/CD pipeline", "Software release automation"] }
    ],
    SILTERRA: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "SilTerra protects wafer fab IP and process data from cyber threats.", initiatives: ["Fab network segmentation", "Process data encryption"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "SilTerra uses cloud for ERP and non-fab analytics.", initiatives: ["Cloud ERP migration", "Yield analytics on cloud"] },
      { category: "5G & IoT", icon: "signal", relevance: "Medium", summary: "SilTerra's mature nodes serve power and IoT chip demand.", initiatives: ["Power chip capacity expansion", "IoT wafer process optimization"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "SilTerra needs connectivity for global customers and DNeX.", initiatives: ["Customer portal connectivity", "DNeX group integration"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "SilTerra uses AI for yield optimization and process control.", initiatives: ["AI yield improvement", "Process control automation"] },
      { category: "DevOps", icon: "code", relevance: "Medium", summary: "SilTerra adopts DevOps for IT and fab software.", initiatives: ["MES automation", "IT system CI/CD"] }
    ],
    INFINEON_MY: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "Infineon Malaysia protects power and auto chip IP and fab data.", initiatives: ["Fab security standards", "Supply chain cyber audit"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "Infineon Malaysia uses cloud for global ERP and analytics.", initiatives: ["SAP on cloud", "Manufacturing analytics"] },
      { category: "5G & IoT", icon: "signal", relevance: "Medium", summary: "Infineon supplies chips for 5G and IoT; Malaysia fab supports this.", initiatives: ["Power IC for 5G infrastructure", "IoT chip production"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "Infineon Malaysia needs connectivity for global Infineon AG.", initiatives: ["Global network integration", "Remote fab monitoring"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "Infineon Malaysia uses AI for yield and quality optimization.", initiatives: ["AI yield optimization", "Predictive maintenance"] },
      { category: "DevOps", icon: "code", relevance: "Medium", summary: "Infineon Malaysia adopts DevOps for manufacturing software.", initiatives: ["MES CI/CD", "Automation pipelines"] }
    ],
    IOI: [
      { category: "Cybersecurity", icon: "shield", relevance: "Low", summary: "IOI's plantation and refining have moderate cyber exposure.", initiatives: ["ERP security hardening", "OT network protection"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "IOI uses cloud for ERP, analytics, and property systems.", initiatives: ["Cloud ERP for plantation", "Property management cloud"] },
      { category: "5G & IoT", icon: "signal", relevance: "High", summary: "IOI deploys drones and sensors for precision agriculture.", initiatives: ["Drone-based FFB monitoring", "Soil moisture IoT sensors"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "IOI needs connectivity for estate and refinery operations.", initiatives: ["Estate connectivity rollout", "Refinery SCADA links"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "IOI uses AI for yield prediction and plantation optimization.", initiatives: ["Yield prediction models", "Harvest optimization AI"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "IOI's IT development pace is moderate for plantation sector.", initiatives: ["ERP module updates", "Reporting automation"] }
    ],
    KLK: [
      { category: "Cybersecurity", icon: "shield", relevance: "Low", summary: "KLK's plantation and oleo have moderate cyber exposure.", initiatives: ["ERP and OT security", "Data protection compliance"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "KLK uses cloud for global ERP and oleo analytics.", initiatives: ["Cloud ERP for plantation", "Oleo demand analytics"] },
      { category: "5G & IoT", icon: "signal", relevance: "High", summary: "KLK deploys precision agriculture with drones and IoT.", initiatives: ["Drone estate mapping", "IoT for mill monitoring"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "KLK needs connectivity across Malaysia and Indonesia estates.", initiatives: ["Estate connectivity", "Mill network upgrade"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "KLK uses AI for yield optimization and oleo forecasting.", initiatives: ["Yield optimization AI", "Oleo margin forecasting"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "KLK's IT development focuses on operational systems.", initiatives: ["ERP enhancements", "Oleo system updates"] }
    ],
    SDG: [
      { category: "Cybersecurity", icon: "shield", relevance: "Low", summary: "SD Guthrie's plantation operations have moderate cyber exposure.", initiatives: ["Traceability system security", "ERP protection"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "SD Guthrie uses cloud for traceability and sustainability data.", initiatives: ["Cloud traceability platform", "Sustainability analytics"] },
      { category: "5G & IoT", icon: "signal", relevance: "High", summary: "SD Guthrie deploys IoT for traceability and precision agriculture.", initiatives: ["Traceability IoT sensors", "Drone-based monitoring"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "SD Guthrie needs connectivity across Malaysia, Indonesia, Liberia.", initiatives: ["Estate connectivity", "Traceability data links"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "SD Guthrie uses AI for yield and EUDR compliance analytics.", initiatives: ["Yield prediction AI", "EUDR compliance analytics"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "SD Guthrie's IT pace is moderate for plantation scale.", initiatives: ["Traceability system updates", "Reporting automation"] }
    ],
    GAMUDA: [
      { category: "Cybersecurity", icon: "shield", relevance: "Medium", summary: "Gamuda protects project data and BIM from cyber threats.", initiatives: ["BIM data protection", "Project network security"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "Gamuda uses cloud for BIM, project management, and analytics.", initiatives: ["Cloud BIM collaboration", "Project analytics platform"] },
      { category: "5G & IoT", icon: "signal", relevance: "High", summary: "Gamuda deploys IoT for smart construction and site monitoring.", initiatives: ["IoT site safety monitoring", "Equipment telematics"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "Gamuda needs connectivity for MRT and construction sites.", initiatives: ["Site connectivity for MRT", "Data center network"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "Gamuda uses AI for BIM analytics and project optimization.", initiatives: ["BIM analytics and clash detection", "Project risk AI"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "Gamuda's IT development focuses on project systems.", initiatives: ["Project management tools", "BIM workflow automation"] }
    ],
    SUNWAY: [
      { category: "Cybersecurity", icon: "shield", relevance: "Medium", summary: "Sunway protects healthcare, property, and construction data.", initiatives: ["Healthcare data protection", "Property system security"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "Sunway uses cloud for healthcare, property, and construction.", initiatives: ["Healthcare cloud systems", "Property management cloud"] },
      { category: "5G & IoT", icon: "signal", relevance: "High", summary: "Sunway deploys IoT for smart property and construction.", initiatives: ["Smart building IoT", "Construction site sensors"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "Sunway needs connectivity for township and healthcare.", initiatives: ["Township connectivity", "Healthcare network"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "Sunway uses AI for healthcare, property, and BIM analytics.", initiatives: ["Healthcare analytics AI", "BIM and property analytics"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "Sunway's IT development spans multiple business units.", initiatives: ["Healthcare system updates", "Property app development"] }
    ],
    SIME: [
      { category: "Cybersecurity", icon: "shield", relevance: "Medium", summary: "Sime Darby protects industrial, motors, and logistics data.", initiatives: ["Dealership data protection", "Industrial systems security"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "Sime Darby uses cloud for ERP and dealership systems.", initiatives: ["Cloud ERP for group", "Dealership CRM cloud"] },
      { category: "5G & IoT", icon: "signal", relevance: "Medium", summary: "Sime Darby explores IoT for equipment and fleet tracking.", initiatives: ["Equipment telematics", "Fleet IoT tracking"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "Sime Darby needs connectivity for regional operations.", initiatives: ["Regional network integration", "Dealership connectivity"] },
      { category: "Data & AI", icon: "brain", relevance: "Medium", summary: "Sime Darby uses analytics for sales and logistics.", initiatives: ["Sales forecasting analytics", "Logistics optimization"] },
      { category: "DevOps", icon: "code", relevance: "Medium", summary: "Sime Darby adopts DevOps for diversified IT systems.", initiatives: ["Dealership app CI/CD", "ERP module automation"] }
    ],
    DRB: [
      { category: "Cybersecurity", icon: "shield", relevance: "Medium", summary: "DRB-HICOM protects automotive and services data.", initiatives: ["Dealership data security", "Proton systems protection"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "DRB-HICOM uses cloud for automotive and services.", initiatives: ["Cloud for Proton systems", "Services platform cloud"] },
      { category: "5G & IoT", icon: "signal", relevance: "Medium", summary: "DRB-HICOM explores connected cars via Proton and Honda.", initiatives: ["Proton connected car features", "Dealership IoT"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "DRB-HICOM needs connectivity for automotive and services.", initiatives: ["Dealership network", "Proton connectivity"] },
      { category: "Data & AI", icon: "brain", relevance: "Medium", summary: "DRB-HICOM uses analytics for sales and operations.", initiatives: ["Sales analytics", "Proton customer analytics"] },
      { category: "DevOps", icon: "code", relevance: "Medium", summary: "DRB-HICOM adopts DevOps for automotive IT.", initiatives: ["Proton app development", "Dealership system updates"] }
    ],
    PROTON: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "Proton secures vehicle cybersecurity and connected car systems.", initiatives: ["Vehicle cybersecurity framework", "OTA update security"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "Proton uses cloud for connected services and analytics.", initiatives: ["Connected car cloud platform", "Sales analytics cloud"] },
      { category: "5G & IoT", icon: "signal", relevance: "High", summary: "Proton's connected cars rely on 5G and IoT for smart features.", initiatives: ["5G connected car features", "Vehicle IoT telematics"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "Proton needs connectivity for connected car and dealerships.", initiatives: ["Connected car connectivity", "Dealership network"] },
      { category: "Data & AI", icon: "brain", relevance: "Medium", summary: "Proton uses AI for manufacturing and customer analytics.", initiatives: ["Manufacturing AI", "Customer preference analytics"] },
      { category: "DevOps", icon: "code", relevance: "Medium", summary: "Proton adopts DevOps for software-defined vehicle features.", initiatives: ["OTA update pipeline", "In-car software CI/CD"] }
    ],
    NCT: [
      { category: "Cybersecurity", icon: "shield", relevance: "Medium", summary: "NCT protects trading and property systems from cyber risks.", initiatives: ["ERP security", "Property data protection"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "NCT uses cloud for cost-effective IT and analytics.", initiatives: ["Cloud ERP for group", "Property analytics"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "5G and IoT have limited relevance for NCT's industrial trading.", initiatives: ["Warehouse IoT pilot", "Asset tracking"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "NCT needs connectivity for trading and property operations.", initiatives: ["Trading portal connectivity", "Property systems"] },
      { category: "Data & AI", icon: "brain", relevance: "Medium", summary: "NCT uses analytics for trading and property decisions.", initiatives: ["Trading analytics", "Property demand models"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "NCT's IT development is moderate for mid-tier group.", initiatives: ["ERP enhancements", "Property system updates"] }
    ]
  };
  for (var k in t) if (COMPANIES[k]) COMPANIES[k].techTrends = t[k];

  var ict = {
    TNB: { total: "MYR 850M", pctRevenue: "1.5%", yoy: "+12%", focusAreas: ["Smart Grid", "SCADA Security", "AI Forecasting"], source: "estimated" },
    AIRSELANGOR: { total: "MYR 120M", pctRevenue: "3.5%", yoy: "+15%", focusAreas: ["Smart Meters", "NRW Analytics", "Billing Cloud"], source: "estimated" },
    GASMSIA: { total: "MYR 65M", pctRevenue: "1.6%", yoy: "+8%", focusAreas: ["Pipeline SCADA", "Billing Systems", "Safety IoT"], source: "estimated" },
    KUMH: { total: "MYR 15M", pctRevenue: "2.5%", yoy: "+10%", focusAreas: ["Water Monitoring", "Billing Upgrade", "NRW Detection"], source: "estimated" },
    ALTEL: { total: "MYR 80M", pctRevenue: "18.0%", yoy: "+20%", focusAreas: ["5G Spectrum", "Network Build", "Enterprise IoT"], source: "estimated" },
    TUNEPRO: { total: "MYR 45M", pctRevenue: "5.8%", yoy: "+18%", focusAreas: ["Insurtech Platform", "Cloud Native", "AI Pricing"], source: "estimated" },
    UNISEM: { total: "MYR 110M", pctRevenue: "4.2%", yoy: "+10%", focusAreas: ["Test Automation", "MES Systems", "IP Security"], source: "estimated" },
    VITROX: { total: "MYR 85M", pctRevenue: "12.5%", yoy: "+15%", focusAreas: ["Vision AI R&D", "Cloud Analytics", "Product Dev"], source: "estimated" },
    SILTERRA: { total: "MYR 95M", pctRevenue: "8.0%", yoy: "+12%", focusAreas: ["Fab Automation", "Yield AI", "Cleanroom IoT"], source: "estimated" },
    INFINEON_MY: { total: "MYR 350M", pctRevenue: "4.5%", yoy: "+14%", focusAreas: ["Smart Factory", "Digital Twin", "Supply Chain AI"], source: "estimated" },
    IOI: { total: "MYR 120M", pctRevenue: "0.8%", yoy: "+10%", focusAreas: ["Precision Agriculture", "ERP Cloud", "ESG Tracking"], source: "estimated" },
    KLK: { total: "MYR 140M", pctRevenue: "0.6%", yoy: "+9%", focusAreas: ["Oleo Automation", "Drone Monitoring", "Supply Chain"], source: "estimated" },
    SDG: { total: "MYR 130M", pctRevenue: "1.0%", yoy: "+12%", focusAreas: ["Estate IoT", "EUDR Compliance", "Yield Analytics"], source: "estimated" },
    GAMUDA: { total: "MYR 200M", pctRevenue: "1.3%", yoy: "+18%", focusAreas: ["BIM Digital", "Smart Construction", "Project Analytics"], source: "estimated" },
    SUNWAY: { total: "MYR 250M", pctRevenue: "2.0%", yoy: "+15%", focusAreas: ["Smart City", "Digital Health", "Education Tech"], source: "estimated" },
    SIME: { total: "MYR 350M", pctRevenue: "1.2%", yoy: "+10%", focusAreas: ["Industrial IoT", "ERP Modernisation", "Dealer Digital"], source: "estimated" },
    DRB: { total: "MYR 180M", pctRevenue: "1.1%", yoy: "+8%", focusAreas: ["Proton Digital", "Automotive Tech", "Service Systems"], source: "estimated" },
    PROTON: { total: "MYR 250M", pctRevenue: "1.8%", yoy: "+20%", focusAreas: ["Connected Car", "Factory 4.0", "EV Platform"], source: "estimated" },
    NCT: { total: "MYR 25M", pctRevenue: "1.5%", yoy: "+6%", focusAreas: ["ERP Systems", "Trading Platform", "Operations IT"], source: "estimated" }
  };
  for (var k in ict) if (COMPANIES[k]) COMPANIES[k].ictSpend = ict[k];

  var ins = {
    TNB: {
      topPriorities: [
        { priority: "Grid of the Future smart grid transformation", techInfluence: [
          { area: "5G & IoT", detail: "Smart grid sensors and IoT devices across 600,000+ km transmission and distribution network" },
          { area: "Data & AI", detail: "AI load forecasting and grid balancing for renewable energy integration" }
        ]},
        { priority: "Renewable energy transition to 8.3 GW RE by 2025", techInfluence: [
          { area: "Data & AI", detail: "AI-driven solar/wind generation forecasting and grid storage optimisation" },
          { area: "5G & IoT", detail: "IoT monitoring for distributed RE generation assets across Malaysia" }
        ]},
        { priority: "Customer experience digitisation", techInfluence: [
          { area: "Cloud", detail: "Cloud-based CRM and billing platform for 10M+ electricity consumers" },
          { area: "Connectivity", detail: "Smart meter AMI network connecting millions of consumer endpoints" }
        ]},
        { priority: "OT cybersecurity for critical national infrastructure", techInfluence: [
          { area: "Cybersecurity", detail: "Power grid SCADA/EMS security under Cyber Security Bill 2024 requirements" },
          { area: "5G & IoT", detail: "Secure communications for grid control systems and substation automation" }
        ]},
        { priority: "Microsoft digital foundation partnership", techInfluence: [
          { area: "Cloud", detail: "Azure cloud platform for enterprise applications and data analytics" },
          { area: "DevOps", detail: "Modern development practices and CI/CD adoption through Microsoft partnership" }
        ]}
      ],
      painPoints: [
        "Massive grid infrastructure scale (600,000+ km) creating enormous IoT deployment complexity and cost",
        "Legacy SCADA and grid control systems with cybersecurity vulnerabilities as they connect to cloud analytics",
        "Smart meter rollout delays due to procurement, installation logistics, and consumer resistance",
        "Renewable intermittency challenging grid stability as RE capacity grows beyond 8 GW",
        "Regulated tariff structure limiting ability to invest in technology vs. infrastructure maintenance"
      ],
      strategicInvestments: ["Microsoft MoU for digital foundation modernisation (Sept 2022)", "Smart meter nationwide rollout programme"],
      direction: "TNB is transforming Malaysia's power grid into a smart, digitalised infrastructure to support the energy transition. The Grid of the Future strategy combines IoT, AI, and renewable integration to future-proof the national electricity system.",
      partnerships: [
        { partner: "Microsoft", area: "Digital Foundation & Cloud", impact: "High" },
        { partner: "Huawei", area: "Smart Grid Technology", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+12-15%", narrative: "Smart grid rollout, renewable energy integration, and Microsoft digital partnership are driving 12-15% annual IT spend growth. Cyber Security Bill 2024 adds OT security compliance costs for critical infrastructure." }
    },
    AIRSELANGOR: {
      topPriorities: [
        { priority: "Non-Revenue Water reduction through smart monitoring", techInfluence: [
          { area: "5G & IoT", detail: "IoT pressure sensors and acoustic leak detectors across pipe network" },
          { area: "Data & AI", detail: "AI leak detection algorithms analysing flow data patterns to locate NRW losses" }
        ]},
        { priority: "Water treatment plant automation", techInfluence: [
          { area: "5G & IoT", detail: "IoT sensors for real-time water quality and treatment process monitoring" },
          { area: "Data & AI", detail: "AI-optimised chemical dosing and treatment plant process control" }
        ]},
        { priority: "Customer billing and service digitalisation", techInfluence: [
          { area: "Cloud", detail: "Cloud-based billing and CRM for 8M consumers in Klang Valley" },
          { area: "Connectivity", detail: "Mobile customer portal for billing, payments, and service requests" }
        ]},
        { priority: "Smart water meter deployment", techInfluence: [
          { area: "5G & IoT", detail: "AMI smart water meters with cellular/LPWAN connectivity for remote reading" },
          { area: "Data & AI", detail: "Consumption analytics from smart meter data for demand management" }
        ]},
        { priority: "Climate resilience and flood management", techInfluence: [
          { area: "Data & AI", detail: "AI flood prediction and dam management analytics for water supply resilience" },
          { area: "Cybersecurity", detail: "Critical water infrastructure protection under national cyber resilience framework" }
        ]}
      ],
      painPoints: [
        "36% NRW rate significantly above international benchmarks requiring massive infrastructure and technology investment",
        "Aging pipe network (some 50+ years old) limiting effectiveness of smart monitoring technology",
        "Low water tariffs constraining technology investment budget for digital transformation",
        "Raw water quality deterioration from pollution and development requiring more sophisticated treatment",
        "Limited IoT connectivity coverage in remote water catchment and distribution areas"
      ],
      strategicInvestments: ["Smart water meter deployment across Selangor", "NRW analytics and leak detection IoT platform"],
      direction: "Air Selangor is becoming a data-driven water utility, using IoT smart meters and AI analytics to reduce NRW losses and improve service delivery for 8 million consumers in the Klang Valley.",
      partnerships: [
        { partner: "Xylem", area: "Smart Water Technology", impact: "High" },
        { partner: "Itron", area: "Smart Metering", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+14-16%", narrative: "Smart meter rollout and NRW analytics platform are driving 14-16% IT growth from a mid-size base. Government water reform mandates ensure sustained investment in digital utility infrastructure." }
    },
    GASMSIA: {
      topPriorities: [
        { priority: "Pipeline safety and integrity monitoring", techInfluence: [
          { area: "5G & IoT", detail: "IoT pressure and flow sensors for real-time pipeline integrity monitoring" },
          { area: "Cybersecurity", detail: "SCADA security for gas pipeline control systems" }
        ]},
        { priority: "Customer billing system modernisation", techInfluence: [
          { area: "Cloud", detail: "Cloud-based CRM and billing platform replacing legacy systems" },
          { area: "Data & AI", detail: "Consumption analytics for commercial and industrial customer demand planning" }
        ]},
        { priority: "Hydrogen-ready infrastructure planning", techInfluence: [
          { area: "Data & AI", detail: "Simulation and analytics for hydrogen blending compatibility in existing gas network" },
          { area: "5G & IoT", detail: "Sensor upgrades for hydrogen-compatible pipeline monitoring" }
        ]},
        { priority: "Operational efficiency and cost management", techInfluence: [
          { area: "DevOps", detail: "Automated operational reporting and maintenance scheduling workflows" },
          { area: "Cloud", detail: "Cloud-based asset management replacing on-premises systems" }
        ]},
        { priority: "Regulatory compliance and safety reporting", techInfluence: [
          { area: "Data & AI", detail: "Automated safety compliance analytics and incident reporting" },
          { area: "Connectivity", detail: "Connected safety systems with real-time reporting to regulators" }
        ]}
      ],
      painPoints: [
        "Gas pipeline ageing creating safety risks and limiting digital monitoring system deployment",
        "Hydrogen transition uncertainty complicating long-term technology investment planning",
        "Limited IoT connectivity along remote pipeline routes in East Malaysia and rural areas",
        "Small customer base compared to electricity limiting digital investment scale economies",
        "SCADA system legacy creating cybersecurity vulnerabilities in critical gas infrastructure"
      ],
      strategicInvestments: ["SCADA pipeline monitoring upgrade", "Billing and CRM platform modernisation"],
      direction: "Gas Malaysia is modernising its pipeline monitoring and billing infrastructure while preparing for the hydrogen economy transition that could transform its distribution network.",
      partnerships: [
        { partner: "MMC Group", area: "Parent Group Technology", impact: "Medium" },
        { partner: "Honeywell", area: "Pipeline Safety Systems", impact: "High" }
      ],
      spendOutlook: { trend: "Stable", delta: "+7-9%", narrative: "Pipeline SCADA upgrade and billing modernisation drive 7-9% steady IT growth. Hydrogen infrastructure planning will increase tech spend if Malaysia's hydrogen roadmap accelerates." }
    },
    KUMH: {
      topPriorities: [
        { priority: "Water supply reliability improvement", techInfluence: [
          { area: "5G & IoT", detail: "Basic IoT water pressure and flow monitoring for supply reliability" },
          { area: "Data & AI", detail: "Supply disruption prediction analytics for proactive maintenance" }
        ]},
        { priority: "NRW reduction in Kelantan", techInfluence: [
          { area: "5G & IoT", detail: "Leak detection sensors in priority district metered areas" },
          { area: "Data & AI", detail: "Data analysis of flow patterns to identify high-loss pipe segments" }
        ]},
        { priority: "Basic billing and operations digitalisation", techInfluence: [
          { area: "Cloud", detail: "Cloud-based billing system replacing manual and legacy processes" },
          { area: "Connectivity", detail: "Mobile billing and payment collection for rural areas" }
        ]},
        { priority: "Treatment plant monitoring upgrade", techInfluence: [
          { area: "5G & IoT", detail: "Water quality sensors for treatment plant process monitoring" },
          { area: "Cybersecurity", detail: "Basic security controls for water treatment SCADA systems" }
        ]},
        { priority: "Federal water reform compliance", techInfluence: [
          { area: "Data & AI", detail: "Performance reporting analytics for SPAN regulatory compliance" },
          { area: "Cloud", detail: "Cloud-based reporting platform for regulatory submissions" }
        ]}
      ],
      painPoints: [
        "Severely underinvested infrastructure with some of the highest NRW rates in Malaysia (60%+)",
        "Very limited IT budget and technical staff for any meaningful digital transformation",
        "Rural and remote geography of Kelantan creating extreme connectivity challenges",
        "Political and governance factors affecting technology procurement and implementation",
        "Basic operational systems still largely manual, requiring foundational digitalisation before smart water tech"
      ],
      strategicInvestments: ["Water treatment monitoring systems", "Basic NRW detection technology"],
      direction: "KUMH is at an early stage of digitalisation, focusing on basic water supply reliability and NRW reduction for Kelantan's challenging geography and infrastructure constraints.",
      partnerships: [
        { partner: "Kelantan State Government", area: "Infrastructure Funding", impact: "High" },
        { partner: "SPAN", area: "Regulatory Compliance", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+10-12%", narrative: "Starting from a low base, federal water reform funding and NRW targets drive 10-12% IT growth. Basic digitalisation of monitoring and billing systems represents a multi-year investment cycle." }
    },
    ALTEL: {
      topPriorities: [
        { priority: "5G fixed wireless access deployment", techInfluence: [
          { area: "5G & IoT", detail: "5G FWA network build-out for underserved enterprise and rural broadband" },
          { area: "Connectivity", detail: "Last-mile broadband connectivity using 5G spectrum for homes and businesses" }
        ]},
        { priority: "Enterprise IoT connectivity services", techInfluence: [
          { area: "5G & IoT", detail: "Enterprise IoT platform for smart agriculture, manufacturing, and logistics" },
          { area: "Cloud", detail: "IoT data management platform on cloud for enterprise customers" }
        ]},
        { priority: "Spectrum monetisation strategy", techInfluence: [
          { area: "Connectivity", detail: "Spectrum asset optimisation to maximise revenue from allocated frequencies" },
          { area: "5G & IoT", detail: "5G spectrum deployment planning for optimal coverage and capacity" }
        ]},
        { priority: "Network operations efficiency", techInfluence: [
          { area: "Data & AI", detail: "AI network optimisation for capacity planning and fault prediction" },
          { area: "DevOps", detail: "Automated network provisioning and configuration management" }
        ]},
        { priority: "Partnerships for scale and distribution", techInfluence: [
          { area: "Connectivity", detail: "MVNO and wholesale partnerships for broader market reach" },
          { area: "Cloud", detail: "Shared cloud infrastructure with partners to reduce per-subscriber costs" }
        ]}
      ],
      painPoints: [
        "Very small scale relative to CelcomDigi/Maxis limiting technology investment capacity and vendor leverage",
        "DNB 5G wholesale dependency creating strategic vulnerability in network access and pricing",
        "Limited brand recognition requiring higher customer acquisition costs in competitive market",
        "Enterprise IoT market in Malaysia still nascent with slow adoption of connected solutions",
        "Spectrum license renewal uncertainty creating long-term investment planning challenges"
      ],
      strategicInvestments: ["5G network build-out and coverage expansion", "Enterprise IoT platform development"],
      direction: "Altel is positioning as a niche 5G and enterprise IoT connectivity provider, leveraging its spectrum assets to serve underserved enterprise and rural broadband segments that larger telcos overlook.",
      partnerships: [
        { partner: "Nokia", area: "5G Network Equipment", impact: "High" },
        { partner: "DNB", area: "5G Wholesale Access", impact: "High" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+18-22%", narrative: "5G network build-out and enterprise IoT platform development drive aggressive 18-22% capex growth. As a smaller telco, technology investment intensity is high relative to revenue." }
    },
    TUNEPRO: {
      topPriorities: [
        { priority: "Cloud-native insurance platform rebuild", techInfluence: [
          { area: "Cloud", detail: "Complete platform rebuild on AWS cloud-native microservices architecture" },
          { area: "DevOps", detail: "CI/CD pipelines and containerised deployment for rapid feature releases" }
        ]},
        { priority: "AI-driven dynamic pricing and underwriting", techInfluence: [
          { area: "Data & AI", detail: "Real-time AI pricing models adjusting premiums based on risk signals and demand" },
          { area: "Cloud", detail: "Scalable ML inference infrastructure for real-time pricing decisions" }
        ]},
        { priority: "Travel insurance digital distribution leadership", techInfluence: [
          { area: "Connectivity", detail: "API-first embedded insurance integration with AirAsia and travel platforms" },
          { area: "Cloud", detail: "High-availability cloud platform handling peak travel booking volumes" }
        ]},
        { priority: "Data-driven customer acquisition and retention", techInfluence: [
          { area: "Data & AI", detail: "Customer propensity modelling and digital marketing optimisation" },
          { area: "Connectivity", detail: "Multi-channel digital engagement across web, app, and partner platforms" }
        ]},
        { priority: "Regulatory compliance automation", techInfluence: [
          { area: "Cybersecurity", detail: "Data protection compliance for cross-border travel insurance transactions" },
          { area: "DevOps", detail: "Automated compliance testing and regulatory reporting workflows" }
        ]}
      ],
      painPoints: [
        "Travel insurance margin pressure from comparison platforms and price-sensitive travellers",
        "AirAsia ecosystem dependency creating single-channel concentration risk",
        "Legacy system technical debt slowing cloud-native platform migration timeline",
        "Cross-border data compliance complexity for travel insurance across ASEAN jurisdictions",
        "Limited brand recognition outside travel insurance constraining general insurance expansion"
      ],
      strategicInvestments: ["Cloud-native insurance platform rebuild", "AI pricing and underwriting engine"],
      direction: "TuneProtect is evolving from a traditional insurer into a cloud-native insurtech, leveraging its AirAsia ecosystem relationship for embedded travel insurance and expanding into digital general insurance.",
      partnerships: [
        { partner: "AirAsia", area: "Embedded Travel Insurance", impact: "High" },
        { partner: "AWS", area: "Cloud-Native Platform", impact: "High" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+16-20%", narrative: "Cloud-native platform rebuild and AI pricing engine are driving 16-20% IT growth. Embedded insurance distribution through digital partners requires scalable, API-first technology architecture." }
    },
    UNISEM: {
      topPriorities: [
        { priority: "Advanced packaging test capability for AI chips", techInfluence: [
          { area: "Data & AI", detail: "AI-powered test pattern generation and defect classification for advanced packages" },
          { area: "DevOps", detail: "Automated test programme development and validation pipelines" }
        ]},
        { priority: "Manufacturing execution system (MES) upgrade", techInfluence: [
          { area: "Cloud", detail: "Cloud-connected MES for real-time production monitoring and yield tracking" },
          { area: "5G & IoT", detail: "IoT sensors on packaging equipment for predictive maintenance and utilisation" }
        ]},
        { priority: "IP and trade secret cybersecurity", techInfluence: [
          { area: "Cybersecurity", detail: "Semiconductor IP protection and trade secret security for advanced packaging processes" },
          { area: "Data & AI", detail: "AI-based anomaly detection for insider threat and data exfiltration prevention" }
        ]},
        { priority: "Quality AI for zero-defect manufacturing", techInfluence: [
          { area: "Data & AI", detail: "Computer vision AI for automated optical inspection and defect classification" },
          { area: "5G & IoT", detail: "High-speed IoT data from inspection equipment for real-time quality analytics" }
        ]},
        { priority: "Supply chain visibility and optimisation", techInfluence: [
          { area: "Cloud", detail: "Cloud-based supply chain platform for customer order tracking and planning" },
          { area: "Connectivity", detail: "EDI and API connectivity with global semiconductor customers and suppliers" }
        ]}
      ],
      painPoints: [
        "Semiconductor cycle volatility creating unpredictable technology investment capacity",
        "Advanced packaging competition from larger OSAT players (ASE, Amkor) with bigger R&D budgets",
        "Cybersecurity risk from nation-state actors targeting semiconductor IP and process data",
        "Equipment automation integration complexity with mixed vendor environments across Ipoh and Chengdu facilities",
        "Skilled semiconductor test engineering talent shortage in Ipoh competing with Penang and Singapore"
      ],
      strategicInvestments: ["Advanced packaging line automation", "MES and quality AI system upgrade"],
      direction: "Unisem is investing in advanced packaging and test capabilities to ride the AI chip demand wave, upgrading its manufacturing systems to handle more complex, higher-value semiconductor packages.",
      partnerships: [
        { partner: "TSMC", area: "Advanced Packaging Collaboration", impact: "Medium" },
        { partner: "Applied Materials", area: "Equipment & Automation", impact: "High" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+10-12%", narrative: "AI chip demand is driving advanced packaging line investments that require upgraded MES and quality AI systems. Semiconductor upcycle tailwinds support 10-12% annual IT growth." }
    },
    VITROX: {
      topPriorities: [
        { priority: "AI-powered machine vision R&D leadership", techInfluence: [
          { area: "Data & AI", detail: "Deep learning vision algorithms for semiconductor and electronics inspection at 12.5% R&D intensity" },
          { area: "Cloud", detail: "Cloud training infrastructure for vision AI model development" }
        ]},
        { priority: "Global market expansion for test equipment", techInfluence: [
          { area: "Cloud", detail: "Cloud-based remote equipment monitoring and diagnostics for global customers" },
          { area: "Connectivity", detail: "Remote support and software update delivery for equipment deployed worldwide" }
        ]},
        { priority: "Recurring revenue from software and services", techInfluence: [
          { area: "Cloud", detail: "SaaS analytics platform for equipment performance and yield data" },
          { area: "DevOps", detail: "Continuous software updates and feature delivery for installed base" }
        ]},
        { priority: "Next-gen inspection for advanced packaging", techInfluence: [
          { area: "Data & AI", detail: "AI inspection for 3D chip stacking, chiplet packaging, and heterogeneous integration" },
          { area: "5G & IoT", detail: "High-speed data acquisition from inspection systems for real-time analytics" }
        ]},
        { priority: "Manufacturing automation of own products", techInfluence: [
          { area: "5G & IoT", detail: "Smart factory IoT for own manufacturing operations in Penang" },
          { area: "DevOps", detail: "Automated production testing and quality assurance for equipment assembly" }
        ]}
      ],
      painPoints: [
        "Heavy R&D spend (12.5% of revenue) creating margin pressure during semiconductor downturns",
        "Competition from Cognex, Keyence, and KLA with larger R&D budgets and global sales networks",
        "Customer concentration in semiconductor and electronics limiting industry diversification",
        "AI vision model training data scarcity for novel defect types in emerging packaging technologies",
        "Penang talent competition with Intel, Broadcom, and other semiconductor companies for AI engineers"
      ],
      strategicInvestments: ["Next-gen AI vision inspection systems (12.5% R&D intensity)", "Cloud analytics platform for remote equipment monitoring"],
      direction: "ViTrox is Malaysia's semiconductor equipment champion, investing heavily in AI-powered machine vision to capture the global shift toward automated quality inspection in semiconductor manufacturing.",
      partnerships: [
        { partner: "Intel", area: "Machine Vision AI Collaboration", impact: "Medium" },
        { partner: "NVIDIA", area: "GPU for Vision AI", impact: "High" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+14-16%", narrative: "AI vision R&D at 12.5% of revenue and cloud analytics platform development drive 14-16% growth. ViTrox's R&D intensity is among the highest in Malaysia's tech sector." }
    },
    SILTERRA: {
      topPriorities: [
        { priority: "Specialty chip focus (MEMS, power, RF)", techInfluence: [
          { area: "Data & AI", detail: "AI-driven process control for specialty semiconductor manufacturing yields" },
          { area: "5G & IoT", detail: "RF chip fabrication for 5G frontend components and IoT sensors" }
        ]},
        { priority: "Yield optimisation through AI", techInfluence: [
          { area: "Data & AI", detail: "ML-based yield prediction and root cause analysis for wafer defects" },
          { area: "Cloud", detail: "Cloud-connected fab analytics for real-time yield monitoring" }
        ]},
        { priority: "200mm wafer fab capacity utilisation", techInfluence: [
          { area: "Data & AI", detail: "AI production scheduling and equipment utilisation optimisation" },
          { area: "DevOps", detail: "Automated recipe management and process qualification workflows" }
        ]},
        { priority: "Fab automation and digitalisation", techInfluence: [
          { area: "5G & IoT", detail: "IoT sensors on fab equipment for predictive maintenance and OEE monitoring" },
          { area: "Cloud", detail: "Cloud-based MES integration for wafer tracking and quality management" }
        ]},
        { priority: "IP security and export compliance", techInfluence: [
          { area: "Cybersecurity", detail: "Semiconductor process IP protection and export control compliance" },
          { area: "Connectivity", detail: "Secure data sharing with customers and partners for design collaboration" }
        ]}
      ],
      painPoints: [
        "200mm fab technology generation gap vs. leading-edge foundries limiting high-value chip opportunities",
        "Dagang NeXchange ownership transition creating strategic direction uncertainty",
        "Global 200mm wafer capacity oversupply during semiconductor downturns pressuring utilisation",
        "Limited R&D budget for developing new specialty processes compared to GlobalFoundries and TowerSemi",
        "Kulim location creating talent attraction challenges vs. Penang semiconductor cluster"
      ],
      strategicInvestments: ["Fab automation and yield AI programme", "Specialty process development for IoT chips"],
      direction: "SilTerra is repositioning as a specialty foundry for MEMS, power, and RF chips under Dagang NeXchange ownership, using AI-driven yield optimisation to improve competitiveness in the 200mm wafer segment.",
      partnerships: [
        { partner: "Dagang NeXchange", area: "Parent Group Investment", impact: "High" },
        { partner: "GlobalFoundries", area: "Technology Licensing", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+12-14%", narrative: "Specialty chip repositioning and yield AI require sustained fab automation investment. IoT and automotive chip demand support 12-14% annual IT growth as SilTerra scales specialty processes." }
    },
    INFINEON_MY: {
      topPriorities: [
        { priority: "Smart factory transformation (Industry 4.0)", techInfluence: [
          { area: "5G & IoT", detail: "Private 5G and IoT sensor network across Kulim and Melaka manufacturing plants" },
          { area: "Data & AI", detail: "AI-driven predictive maintenance, quality control, and production scheduling" }
        ]},
        { priority: "Power semiconductor capacity expansion for EV market", techInfluence: [
          { area: "Data & AI", detail: "AI yield optimisation for power semiconductor manufacturing processes" },
          { area: "Cloud", detail: "Cloud-connected MES for real-time capacity monitoring and planning" }
        ]},
        { priority: "Digital twin and supply chain AI", techInfluence: [
          { area: "Data & AI", detail: "Digital twin simulation for fab processes and supply chain scenario planning" },
          { area: "Cloud", detail: "Siemens digital twin platform on cloud for manufacturing simulation" }
        ]},
        { priority: "Cybersecurity for semiconductor manufacturing", techInfluence: [
          { area: "Cybersecurity", detail: "Fab network security and IP protection for automotive-grade chip processes" },
          { area: "5G & IoT", detail: "Secure OT network for manufacturing equipment and automation systems" }
        ]},
        { priority: "Infineon global platform standardisation", techInfluence: [
          { area: "Cloud", detail: "Global Infineon cloud platform adoption for Malaysia manufacturing sites" },
          { area: "DevOps", detail: "Standardised deployment practices and MES integration across global factories" }
        ]}
      ],
      painPoints: [
        "Kulim expansion creating massive integration complexity for new fab with existing operations",
        "EV market demand volatility affecting capacity planning and investment timing",
        "Global Infineon platform mandates sometimes misaligned with Malaysia-specific manufacturing needs",
        "Cybersecurity risk from nation-state targeting of automotive-grade semiconductor IP",
        "Power management during fab expansion with extremely high energy demands for semiconductor manufacturing"
      ],
      strategicInvestments: ["Kulim Hi-Tech Park smart factory expansion", "Digital twin for semiconductor manufacturing"],
      direction: "Infineon Malaysia is the global group's largest manufacturing hub, executing an ambitious smart factory transformation at Kulim to serve the booming EV power semiconductor market with Industry 4.0 capabilities.",
      partnerships: [
        { partner: "Infineon Global", area: "Group Technology Platform", impact: "High" },
        { partner: "Siemens", area: "Digital Twin & Factory Automation", impact: "High" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+14-16%", narrative: "Kulim smart factory expansion and digital twin deployment drive 14-16% IT growth. EV power semiconductor demand ensures sustained capacity and technology investment through 2028." }
    },
    IOI: {
      topPriorities: [
        { priority: "Precision agriculture across 170,000+ ha estates", techInfluence: [
          { area: "5G & IoT", detail: "Drone monitoring, satellite imaging, and soil IoT sensors across vast estate network" },
          { area: "Data & AI", detail: "AI yield prediction, pest detection, and optimal harvesting scheduling" }
        ]},
        { priority: "EUDR supply chain traceability compliance", techInfluence: [
          { area: "Cloud", detail: "Cloud-based traceability platform tracking palm oil from estate to export" },
          { area: "Data & AI", detail: "AI-verified geolocation and deforestation-free supply chain analytics" }
        ]},
        { priority: "Oleochemical process optimisation", techInfluence: [
          { area: "Data & AI", detail: "AI process control for oleochemical plant yield and energy optimisation" },
          { area: "5G & IoT", detail: "IoT sensors for real-time oleochemical process monitoring" }
        ]},
        { priority: "ESG data management and reporting", techInfluence: [
          { area: "Cloud", detail: "Cloud ESG data platform for sustainability reporting to investors and regulators" },
          { area: "Data & AI", detail: "Carbon footprint tracking and water usage analytics across operations" }
        ]},
        { priority: "Supply chain and logistics efficiency", techInfluence: [
          { area: "Connectivity", detail: "GPS fleet tracking and logistics coordination for FFB transportation" },
          { area: "DevOps", detail: "Automated supply chain reporting and operational dashboards" }
        ]}
      ],
      painPoints: [
        "170,000+ ha estate scale creating massive technology deployment and maintenance challenge",
        "Remote estate locations with poor connectivity limiting IoT and cloud access",
        "EUDR compliance deadline pressure with complex multi-tier supply chain traceability requirements",
        "Plantation workforce digital literacy limiting adoption of precision agriculture tools",
        "High technology deployment cost per hectare challenging ROI in commodity-price-sensitive business"
      ],
      strategicInvestments: ["Drone and satellite monitoring for estate management", "EUDR traceability blockchain platform"],
      direction: "IOI is deploying precision agriculture and blockchain traceability to meet EU Deforestation Regulation requirements while optimising yields across its vast estate portfolio through data-driven management.",
      partnerships: [
        { partner: "Satelligence", area: "Satellite Monitoring", impact: "Medium" },
        { partner: "SAP", area: "Supply Chain ERP", impact: "High" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+10-12%", narrative: "EUDR compliance traceability and precision agriculture are driving 10-12% IT growth. Regulatory-mandated supply chain digitisation creates a structural spend floor for plantation companies." }
    },
    KLK: {
      topPriorities: [
        { priority: "Oleochemical and specialty chemical process digitalisation", techInfluence: [
          { area: "Data & AI", detail: "AI process optimisation for oleochemical manufacturing yield and efficiency" },
          { area: "5G & IoT", detail: "IoT sensors for real-time process monitoring across chemical plants" }
        ]},
        { priority: "Estate productivity through data analytics", techInfluence: [
          { area: "Data & AI", detail: "Drone and analytics-based yield estimation and harvesting optimisation" },
          { area: "5G & IoT", detail: "Estate IoT monitoring for soil moisture, weather, and pest surveillance" }
        ]},
        { priority: "Sustainability reporting and ESG data management", techInfluence: [
          { area: "Cloud", detail: "Cloud ESG platform for integrated sustainability reporting across value chain" },
          { area: "Data & AI", detail: "Carbon footprint and water usage analytics for ESG compliance" }
        ]},
        { priority: "EUDR supply chain compliance", techInfluence: [
          { area: "Cloud", detail: "Cloud traceability platform for deforestation-free palm oil verification" },
          { area: "Connectivity", detail: "Supply chain connectivity linking estates, mills, and refineries for traceability" }
        ]},
        { priority: "ERP modernisation across integrated operations", techInfluence: [
          { area: "Cloud", detail: "SAP cloud ERP for integrated plantation-to-oleochemical value chain management" },
          { area: "DevOps", detail: "Standardised deployment practices across geographically dispersed operations" }
        ]}
      ],
      painPoints: [
        "Integrated value chain complexity making end-to-end digitalisation expensive and time-consuming",
        "Remote plantation and factory locations creating connectivity and technology deployment challenges",
        "Multiple legacy ERP systems across business divisions hindering data integration",
        "EUDR compliance requiring granular supply chain traceability not previously captured digitally",
        "Chemical plant safety and environmental compliance adding OT security requirements"
      ],
      strategicInvestments: ["Oleochemical plant automation programme", "Estate drone monitoring fleet"],
      direction: "KLK is digitising its integrated plantation-to-oleochemical value chain, focusing on process automation in manufacturing and data-driven estate management to improve margins and sustainability credentials.",
      partnerships: [
        { partner: "ABB", area: "Process Automation", impact: "High" },
        { partner: "Trimble", area: "Estate Management Technology", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+8-10%", narrative: "Oleochemical automation and ESG data management drive 8-10% IT growth. EUDR compliance adds mandatory traceability investment across the supply chain." }
    },
    SDG: {
      topPriorities: [
        { priority: "EUDR compliance leadership", techInfluence: [
          { area: "Cloud", detail: "Cloud traceability platform for verifying deforestation-free supply chain across 500,000+ ha" },
          { area: "Data & AI", detail: "Satellite AI analysis for deforestation monitoring and compliance verification" }
        ]},
        { priority: "Estate IoT and precision agriculture", techInfluence: [
          { area: "5G & IoT", detail: "IoT sensor deployment across plantations for soil, weather, and crop monitoring" },
          { area: "Data & AI", detail: "AI-driven yield prediction and precision fertiliser application" }
        ]},
        { priority: "Sustainability and carbon footprint tracking", techInfluence: [
          { area: "Data & AI", detail: "Carbon accounting AI and lifecycle assessment analytics" },
          { area: "Cloud", detail: "Sustainability data platform on cloud for investor and regulatory reporting" }
        ]},
        { priority: "Downstream refinery optimisation", techInfluence: [
          { area: "Data & AI", detail: "AI process control for refinery yield optimisation" },
          { area: "5G & IoT", detail: "IoT monitoring for refinery equipment condition and energy consumption" }
        ]},
        { priority: "Workforce digital enablement", techInfluence: [
          { area: "Connectivity", detail: "Mobile apps and connectivity for field workers in remote estate locations" },
          { area: "Cloud", detail: "Cloud-based HR and operations platforms accessible from mobile devices" }
        ]}
      ],
      painPoints: [
        "500,000+ ha estate portfolio creating one of the largest agricultural IoT deployment challenges globally",
        "EUDR compliance timeline pressure with complex multi-country (Malaysia, Indonesia, PNG) supply chain",
        "Remote estate connectivity gaps in Sabah, Sarawak, and Indonesia limiting digital tool adoption",
        "High cost of deploying precision agriculture technology across commodity-price-sensitive operations",
        "Legacy Sime Darby Plantation IT systems still being rationalised post-demerger"
      ],
      strategicInvestments: ["Estate IoT sensor network deployment", "EUDR traceability and sustainability data platform"],
      direction: "SD Guthrie is investing in estate-level IoT and sustainability data platforms to lead the industry on EUDR compliance and ESG reporting, building competitive advantage through verifiable supply chain transparency.",
      partnerships: [
        { partner: "Palantir", area: "Supply Chain Analytics", impact: "Medium" },
        { partner: "RSPO", area: "Sustainability Certification", impact: "High" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+12-14%", narrative: "EUDR compliance deadline and ESG reporting requirements are driving accelerated 12-14% IT growth. Estate IoT deployment across 500,000+ ha creates significant ongoing technology investment." }
    },
    GAMUDA: {
      topPriorities: [
        { priority: "Digital construction and BIM adoption", techInfluence: [
          { area: "Cloud", detail: "Cloud-hosted BIM collaboration platform for MRT3, ECRL, and overseas mega-projects" },
          { area: "Data & AI", detail: "AI-assisted BIM clash detection and construction scheduling optimisation" }
        ]},
        { priority: "Overseas mega-project execution excellence", techInfluence: [
          { area: "Cloud", detail: "Cloud project management platform connecting Malaysia HQ with Australia and Taiwan sites" },
          { area: "Connectivity", detail: "Secure connectivity between distributed project teams across continents" }
        ]},
        { priority: "Smart construction site monitoring", techInfluence: [
          { area: "5G & IoT", detail: "IoT sensors for site safety, progress monitoring, and equipment tracking" },
          { area: "Data & AI", detail: "AI video analytics for construction site safety and productivity" }
        ]},
        { priority: "Property technology and smart buildings", techInfluence: [
          { area: "5G & IoT", detail: "Smart building IoT systems for Gamuda property developments" },
          { area: "Cloud", detail: "Smart property management platform for building automation and tenant services" }
        ]},
        { priority: "Sustainability and carbon tracking for projects", techInfluence: [
          { area: "Data & AI", detail: "AI carbon footprint estimation and sustainable construction analytics" },
          { area: "DevOps", detail: "Automated ESG reporting workflows for project sustainability metrics" }
        ]}
      ],
      painPoints: [
        "MYR 32B orderbook creating massive technology scaling challenge across concurrent mega-projects",
        "Multi-country project delivery (Malaysia, Australia, Taiwan) requiring different compliance and tech standards",
        "Construction industry digital adoption lagging other sectors with workforce resistance to BIM",
        "Smart construction site connectivity challenges in greenfield project locations",
        "Subcontractor technology capability gaps limiting end-to-end digital project delivery"
      ],
      strategicInvestments: ["BIM and digital twin for MRT3 and overseas mega-projects", "Smart construction site monitoring platform"],
      direction: "Gamuda is becoming a digitally-enabled construction group, using BIM, digital twins, and smart construction monitoring to deliver its record MYR 32B orderbook across Malaysia, Australia, and Taiwan.",
      partnerships: [
        { partner: "Autodesk", area: "BIM & Digital Twin", impact: "High" },
        { partner: "Oracle Aconex", area: "Project Collaboration", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+16-20%", narrative: "Record MYR 32B orderbook and overseas expansion drive 16-20% IT growth. Each mega-project (MRT3, Sydney Metro) requires dedicated digital delivery platforms and smart construction systems." }
    },
    SUNWAY: {
      topPriorities: [
        { priority: "Sunway iLabs innovation and smart city platform", techInfluence: [
          { area: "5G & IoT", detail: "Smart city IoT platform for Sunway City KL connecting buildings, transport, and services" },
          { area: "Data & AI", detail: "AI city management for traffic, energy, waste, and security optimisation" }
        ]},
        { priority: "Healthcare and education digital services", techInfluence: [
          { area: "Cloud", detail: "Cloud platforms for Sunway Medical Centre telemedicine and Sunway University e-learning" },
          { area: "Connectivity", detail: "High-bandwidth connectivity for telehealth video consultations and online education" }
        ]},
        { priority: "Sustainability and net-zero property development", techInfluence: [
          { area: "Data & AI", detail: "AI building energy management and carbon footprint tracking for green developments" },
          { area: "5G & IoT", detail: "Smart building IoT for energy, water, and waste monitoring across Sunway properties" }
        ]},
        { priority: "Retail and hospitality digital experience", techInfluence: [
          { area: "Data & AI", detail: "AI customer analytics and personalisation for Sunway Malls and hotels" },
          { area: "Connectivity", detail: "Wi-Fi 6 and 5G coverage across Sunway retail and hospitality venues" }
        ]},
        { priority: "Integrated smart city security", techInfluence: [
          { area: "Cybersecurity", detail: "Smart city cybersecurity for connected building and infrastructure systems" },
          { area: "Data & AI", detail: "AI video surveillance and access control for Sunway City safety" }
        ]}
      ],
      painPoints: [
        "Smart city technology integration complexity across construction, healthcare, education, and retail divisions",
        "Massive IoT deployment across Sunway City KL creating cybersecurity surface area challenges",
        "Healthcare digital services requiring stringent data privacy and medical device compliance",
        "Multi-business-unit IT governance creating inconsistent technology standards and vendor fragmentation",
        "Smart city ROI measurement difficulty across diverse revenue streams and public amenities"
      ],
      strategicInvestments: ["Sunway Smart City platform for Sunway City KL", "Digital health platform for Sunway Medical Centre network"],
      direction: "Sunway is building Malaysia's first integrated smart city ecosystem at Sunway City KL, combining construction, healthcare, education, and property into a digitally-connected community powered by IoT and AI.",
      partnerships: [
        { partner: "Huawei", area: "Smart City Platform", impact: "High" },
        { partner: "Microsoft", area: "Education & Cloud", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+14-16%", narrative: "Smart city platform deployment, digital health expansion, and education technology drive 14-16% IT growth. Sunway's diversified digital strategy creates compounding tech spend across multiple business units." }
    },
    SIME: {
      topPriorities: [
        { priority: "Industrial equipment IoT and predictive maintenance", techInfluence: [
          { area: "5G & IoT", detail: "Caterpillar connected fleet IoT for heavy equipment monitoring across mining and construction" },
          { area: "Data & AI", detail: "AI predictive maintenance models for Caterpillar, Komatsu equipment fleets" }
        ]},
        { priority: "Motors dealer network digitalisation", techInfluence: [
          { area: "Cloud", detail: "Cloud dealer management system for BMW, Hyundai, and other brand dealerships" },
          { area: "Connectivity", detail: "Connected vehicle data integration and digital showroom experiences" }
        ]},
        { priority: "Supply chain optimisation with AI", techInfluence: [
          { area: "Data & AI", detail: "AI demand forecasting and parts inventory optimisation for industrial and motors" },
          { area: "Cloud", detail: "Cloud-based supply chain platform for multi-country spare parts management" }
        ]},
        { priority: "Regional operational hub digitalisation", techInfluence: [
          { area: "Cloud", detail: "Centralised cloud operations platform for Asia-Pacific regional management" },
          { area: "Connectivity", detail: "Secure connectivity across operations in 18 countries" }
        ]},
        { priority: "Sustainability and fleet electrification tracking", techInfluence: [
          { area: "Data & AI", detail: "Fleet electrification analytics and carbon tracking for customer reporting" },
          { area: "5G & IoT", detail: "EV charging infrastructure monitoring for fleet electrification" }
        ]}
      ],
      painPoints: [
        "Multi-brand, multi-country complexity creating diverse technology standards and integration challenges",
        "Industrial equipment IoT in remote mining and construction sites with poor connectivity",
        "Dealer franchise model limiting technology standardisation across independently-owned dealerships",
        "OEM (Caterpillar, BMW) technology mandates sometimes conflicting across business divisions",
        "Parts supply chain disruption from geopolitics and logistics affecting digital planning accuracy"
      ],
      strategicInvestments: ["Caterpillar connected fleet management platform", "Dealer management system modernisation"],
      direction: "Sime Darby is digitising its industrial equipment and motors businesses, using IoT and predictive maintenance for heavy equipment while modernising dealer networks across the Asia-Pacific region.",
      partnerships: [
        { partner: "Caterpillar", area: "Connected Equipment IoT", impact: "High" },
        { partner: "BMW", area: "Digital Dealer Platform", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+10-12%", narrative: "Industrial IoT for Caterpillar equipment and BMW digital dealer modernisation drive 10-12% IT growth. Asia-Pacific expansion adds technology investment across new markets." }
    },
    DRB: {
      topPriorities: [
        { priority: "Proton automotive technology upgrade with Geely", techInfluence: [
          { area: "Data & AI", detail: "Geely GKUI connected car AI system integration into Proton vehicle lineup" },
          { area: "5G & IoT", detail: "Connected vehicle IoT for telematics, diagnostics, and OTA update capability" }
        ]},
        { priority: "Pos Malaysia digital transformation", techInfluence: [
          { area: "Cloud", detail: "Cloud e-commerce logistics platform for Pos Malaysia parcel operations" },
          { area: "Data & AI", detail: "AI-driven last-mile delivery optimisation and demand forecasting" }
        ]},
        { priority: "Group-wide ERP modernisation", techInfluence: [
          { area: "Cloud", detail: "Group SAP cloud ERP for financial consolidation across diverse businesses" },
          { area: "DevOps", detail: "Standardised deployment practices across automotive, postal, and property divisions" }
        ]},
        { priority: "Defence and security technology capabilities", techInfluence: [
          { area: "Cybersecurity", detail: "DRB Defence subsidiary requiring secure communications and data protection" },
          { area: "5G & IoT", detail: "Defence IoT and communications systems for military vehicles and equipment" }
        ]},
        { priority: "Property and hospitality digitalisation", techInfluence: [
          { area: "Cloud", detail: "Cloud property management and hospitality systems for Proton City development" },
          { area: "Connectivity", detail: "Connected building and smart property infrastructure" }
        ]}
      ],
      painPoints: [
        "Extreme business diversification (auto, postal, defence, property) creating fragmented IT landscape",
        "Pos Malaysia financial losses limiting postal division digital transformation budget",
        "Geely technology dependency for Proton creating vendor lock-in and localisation challenges",
        "Defence technology procurement subject to government processes and security clearances",
        "Group-level IT governance weak across autonomous business divisions with different priorities"
      ],
      strategicInvestments: ["Proton connected car platform (Geely technology)", "Pos Malaysia e-commerce logistics digitalisation"],
      direction: "DRB-HICOM's technology strategy is driven by its two key assets: Proton's Geely-powered automotive transformation and Pos Malaysia's e-commerce logistics pivot, both requiring significant digital investment.",
      partnerships: [
        { partner: "Geely", area: "Proton Technology & EV Platform", impact: "High" },
        { partner: "Alibaba", area: "Pos Malaysia Logistics Tech", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+8-10%", narrative: "Proton-Geely technology transfer and Pos Malaysia logistics digitalisation drive 8-10% IT growth. Automotive connected car and EV platform investments will accelerate as Proton scales." }
    },
    PROTON: {
      topPriorities: [
        { priority: "Connected car platform leveraging Geely GKUI", techInfluence: [
          { area: "Data & AI", detail: "Geely AI voice assistant, navigation, and in-car entertainment ecosystem localisation" },
          { area: "Connectivity", detail: "Built-in 4G/5G connectivity for connected car services and OTA updates" }
        ]},
        { priority: "Factory 4.0 smart manufacturing at Tanjung Malim", techInfluence: [
          { area: "5G & IoT", detail: "Smart factory IoT for robotic assembly line monitoring and quality control" },
          { area: "Data & AI", detail: "AI quality inspection and production scheduling optimisation" }
        ]},
        { priority: "EV platform development for Malaysian market", techInfluence: [
          { area: "5G & IoT", detail: "EV battery management IoT and charging infrastructure integration" },
          { area: "Cloud", detail: "Cloud-based EV fleet and charging network management platform" }
        ]},
        { priority: "Dealer and customer digital experience", techInfluence: [
          { area: "Cloud", detail: "Cloud-based dealer management and digital showroom platform" },
          { area: "Connectivity", detail: "Online vehicle configurator and digital sales channel integration" }
        ]},
        { priority: "After-sales digitalisation and parts management", techInfluence: [
          { area: "Data & AI", detail: "AI parts demand forecasting and service appointment optimisation" },
          { area: "DevOps", detail: "Automated service workflow and warranty claims processing" }
        ]}
      ],
      painPoints: [
        "Geely technology dependency creating vendor lock-in for connected car and EV platforms",
        "Factory 4.0 implementation complexity retrofitting automation into existing Tanjung Malim facility",
        "EV charging infrastructure inadequacy in Malaysia limiting EV model sales potential",
        "Dealer network uneven digital readiness with many small dealers lacking IT investment capacity",
        "Skilled automotive software engineering talent shortage in Malaysia vs. established EV markets"
      ],
      strategicInvestments: ["Geely CMA/SEA EV platform localisation", "Tanjung Malim smart factory automation"],
      direction: "Proton is leveraging its Geely partnership to leapfrog in connected car technology and EV capabilities, positioning as ASEAN's leading affordable smart and electric vehicle manufacturer from its Tanjung Malim hub.",
      partnerships: [
        { partner: "Geely", area: "EV Platform & Connected Car", impact: "High" },
        { partner: "Lotus", area: "Performance EV Technology", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+18-22%", narrative: "Geely technology transfer, EV platform localisation, and Factory 4.0 are driving aggressive 18-22% tech spend growth. Each new connected car model requires incremental software and connectivity investment." }
    },
    NCT: {
      topPriorities: [
        { priority: "Industrial operations efficiency", techInfluence: [
          { area: "Cloud", detail: "Cloud ERP for consolidated industrial and trading operations management" },
          { area: "Data & AI", detail: "Basic analytics for operational efficiency and cost management" }
        ]},
        { priority: "ERP system consolidation", techInfluence: [
          { area: "Cloud", detail: "SAP cloud ERP replacing fragmented legacy systems across divisions" },
          { area: "DevOps", detail: "Standardised deployment practices for ERP rollout" }
        ]},
        { priority: "Property development technology", techInfluence: [
          { area: "Cloud", detail: "Cloud-based property sales and project management platform" },
          { area: "Connectivity", detail: "Digital property sales portal and customer engagement" }
        ]},
        { priority: "Supply chain visibility", techInfluence: [
          { area: "Data & AI", detail: "Basic supply chain analytics for trading operations" },
          { area: "Connectivity", detail: "EDI connectivity with trading partners and suppliers" }
        ]},
        { priority: "Basic cybersecurity posture", techInfluence: [
          { area: "Cybersecurity", detail: "Foundational security controls and endpoint protection across operations" },
          { area: "Cloud", detail: "Cloud security for migrated workloads and business applications" }
        ]}
      ],
      painPoints: [
        "Small scale limiting technology investment budget and vendor negotiation leverage",
        "Fragmented IT landscape across industrial, trading, and property divisions",
        "Limited in-house IT expertise requiring heavy reliance on external system integrators",
        "Low technology adoption maturity requiring foundational digitalisation before advanced capabilities",
        "Property market cyclicality affecting technology investment consistency"
      ],
      strategicInvestments: ["Group ERP consolidation project", "Property sales digital platform"],
      direction: "NCT Group is consolidating its fragmented IT landscape into a unified ERP while selectively digitising its property development and industrial trading operations.",
      partnerships: [
        { partner: "SAP", area: "ERP Platform", impact: "Medium" },
        { partner: "PropertyGuru", area: "Digital Property Sales", impact: "Low" }
      ],
      spendOutlook: { trend: "Stable", delta: "+5-7%", narrative: "ERP consolidation drives one-time tech investment, settling to 5-7% steady growth. Limited digital ambition beyond operational efficiency keeps spend growth moderate." }
    }
  };
  for (var k in ins) if (COMPANIES[k]) COMPANIES[k].industryInsights = ins[k];
})();
