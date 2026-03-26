(function() {
  var t = {
    AIA: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "AIA Bhd secures policyholder data and digital channels across life insurance operations.", initiatives: ["PII encryption for policy records", "SOC 2 compliance for digital platforms"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "AIA adopts cloud for claims processing and policy administration scalability.", initiatives: ["Hybrid cloud for core systems", "Cloud-based claims workflow"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "AIA explores wearables and IoT for wellness-linked insurance products.", initiatives: ["Wearable data for underwriting", "IoT pilot for health tracking"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "AIA expands digital distribution and agent connectivity across Malaysia.", initiatives: ["Agent portal and mobile app", "API integration with bancassurance"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "AIA uses AI for actuarial modeling, claims automation, and customer analytics.", initiatives: ["AI-driven claims adjudication", "Predictive underwriting models"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "AIA modernizes delivery pipelines for digital insurance platforms.", initiatives: ["CI/CD for mobile apps", "Infrastructure as code adoption"] }
    ],
    ALLIANZ_MY: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "Allianz Malaysia protects customer and policy data across life and general lines.", initiatives: ["Data loss prevention for PII", "Penetration testing for web apps"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "Allianz Malaysia migrates claims and policy systems to cloud infrastructure.", initiatives: ["Azure migration for non-core systems", "Cloud backup and DR"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "Allianz Malaysia pilots IoT for motor telematics and property risk assessment.", initiatives: ["Telematics for motor pricing", "IoT sensors for property claims"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "Allianz Malaysia enhances digital channels and partner connectivity.", initiatives: ["API gateway for distribution partners", "Unified customer portal"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "Allianz Malaysia applies AI to claims processing and fraud detection.", initiatives: ["ML-based fraud scoring", "NLP for claims document extraction"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "Allianz Malaysia adopts DevOps for faster digital product releases.", initiatives: ["Automated testing pipelines", "Container orchestration for apps"] }
    ],
    ETIQA: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "Etiqa secures policyholder data across life, general, and takaful portfolios.", initiatives: ["Multi-factor auth for customer portal", "Encryption for takaful records"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "Etiqa leverages cloud for claims and policy processing at scale.", initiatives: ["Cloud-based policy admin system", "Scalable claims processing"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "Etiqa explores IoT for motor and property insurance innovation.", initiatives: ["Telematics for motor products", "Smart home sensors pilot"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "Etiqa strengthens Maybank integration and digital distribution.", initiatives: ["Maybank ecosystem API integration", "Digital takaful distribution"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "Etiqa uses AI for actuarial modeling and automated claims handling.", initiatives: ["AI claims triage and routing", "Actuarial analytics platform"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "Etiqa streamlines delivery for digital insurance and takaful products.", initiatives: ["Agile delivery for digital products", "Release automation"] }
    ],
    GREATEASTERN: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "Great Eastern Life protects policyholder data and digital insurance channels.", initiatives: ["Customer data encryption at rest", "Security monitoring for web apps"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "Great Eastern adopts cloud for claims processing and policy administration.", initiatives: ["Cloud migration for legacy systems", "SaaS for HR and finance"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "Great Eastern pilots IoT and wearables for wellness-linked life products.", initiatives: ["Wearable integration for wellness", "IoT pilot for health programs"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "Great Eastern expands digital distribution and agent connectivity.", initiatives: ["Agent mobile app and portal", "Bancassurance API integration"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "Great Eastern applies AI to actuarial work, claims, and customer insights.", initiatives: ["AI-powered claims automation", "Customer segmentation analytics"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "Great Eastern modernizes delivery for digital life insurance platforms.", initiatives: ["CI/CD for customer apps", "Cloud-native deployment"] }
    ],
    LIBERTY_MY: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "Liberty General secures claims data and policy information across general lines.", initiatives: ["Claims data protection", "Network segmentation for core systems"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "Liberty General uses cloud for claims processing and underwriting systems.", initiatives: ["Cloud-based claims platform", "Underwriting workflow automation"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "Liberty General explores IoT for motor and property risk assessment.", initiatives: ["Motor telematics pilot", "Property IoT for risk scoring"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "Liberty General enhances broker and customer digital connectivity.", initiatives: ["Broker portal and APIs", "Customer self-service portal"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "Liberty General applies AI to claims adjudication and fraud detection.", initiatives: ["ML fraud detection engine", "Claims automation with NLP"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "Liberty General adopts DevOps for faster general insurance product delivery.", initiatives: ["Automated deployment pipelines", "Infrastructure automation"] }
    ],
    PRUDENTIAL_MY: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "Prudential Malaysia protects policyholder and claims data across life operations.", initiatives: ["Zero-trust security architecture", "Data classification and DLP"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "Prudential Malaysia migrates to cloud for claims and policy scalability.", initiatives: ["AWS/Azure for core workloads", "Cloud-native policy admin"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "Prudential Malaysia explores wearables and IoT for health-linked products.", initiatives: ["Pulse wellness app integration", "IoT for health incentives"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "Prudential Malaysia strengthens digital distribution and agent tools.", initiatives: ["Agent digital toolkit", "Partner API ecosystem"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "Prudential Malaysia uses AI for actuarial, claims, and customer analytics.", initiatives: ["AI claims assessment", "Predictive customer analytics"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "Prudential Malaysia accelerates delivery with DevOps and cloud-native.", initiatives: ["Microservices deployment", "Continuous delivery pipelines"] }
    ],
    AMMETLIFE: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "AmMet Life secures takaful and life policy data in AmBank partnership.", initiatives: ["AmBank integration security", "Takaful data encryption"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "AmMet Life adopts cloud for policy and claims processing scalability.", initiatives: ["Cloud policy administration", "Claims workflow on cloud"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "AmMet Life explores IoT for future takaful and life product innovation.", initiatives: ["Wearable pilot for takaful", "IoT feasibility study"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "AmMet Life enhances AmBank channel and digital takaful distribution.", initiatives: ["AmBank branch integration", "Digital takaful portal"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "AmMet Life applies AI to actuarial modeling and takaful claims automation.", initiatives: ["AI for takaful underwriting", "Claims automation"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "AmMet Life modernizes delivery for digital takaful and life products.", initiatives: ["Agile and DevOps adoption", "Cloud deployment automation"] }
    ],
    PETRONAS: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "Petronas deploys OT cybersecurity across offshore platforms and refineries.", initiatives: ["OT/IT security convergence", "Critical infrastructure protection"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "Petronas adopts hybrid cloud for enterprise and exploration workloads.", initiatives: ["Hybrid cloud for exploration data", "Enterprise cloud migration"] },
      { category: "5G & IoT", icon: "signal", relevance: "High", summary: "Petronas deploys industrial IoT for asset monitoring and predictive maintenance.", initiatives: ["Offshore platform IoT sensors", "Pipeline monitoring networks"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "Petronas strengthens connectivity for remote sites and global operations.", initiatives: ["Satellite and terrestrial links", "Global network integration"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "Petronas uses AI for predictive maintenance, exploration, and reservoir modeling.", initiatives: ["AI for seismic interpretation", "Predictive maintenance models"] },
      { category: "DevOps", icon: "code", relevance: "Medium", summary: "Petronas adopts DevOps for digital and industrial software delivery.", initiatives: ["DevOps for digital products", "Industrial software pipelines"] }
    ],
    PETROS: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "Petroleum Sarawak secures OT systems across upstream oil and gas operations.", initiatives: ["OT security for production facilities", "Incident response for critical systems"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "Petros adopts cloud for upstream data management and analytics.", initiatives: ["Cloud for seismic and well data", "Analytics platform on cloud"] },
      { category: "5G & IoT", icon: "signal", relevance: "High", summary: "Petros deploys IoT for remote monitoring of Sarawak upstream assets.", initiatives: ["Remote well monitoring IoT", "Production facility sensors"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "Petros enhances connectivity for remote Sarawak oil and gas sites.", initiatives: ["Remote site connectivity", "Data backhaul from fields"] },
      { category: "Data & AI", icon: "brain", relevance: "Medium", summary: "Petros applies AI to reservoir and production optimization.", initiatives: ["Reservoir analytics", "Production optimization AI"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "Petros adopts DevOps for internal and operational software.", initiatives: ["Internal app delivery", "Operational tool automation"] }
    ],
    PETRONM: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "Petron Malaysia secures SCADA and refining systems across downstream operations.", initiatives: ["SCADA and DCS security", "Refinery network segmentation"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "Petron Malaysia adopts cloud for enterprise and retail systems.", initiatives: ["Cloud for ERP and finance", "Retail analytics on cloud"] },
      { category: "5G & IoT", icon: "signal", relevance: "Medium", summary: "Petron Malaysia deploys IoT for refinery and retail site monitoring.", initiatives: ["Refinery sensor networks", "Retail site monitoring"] },
      { category: "Connectivity", icon: "globe", relevance: "Low", summary: "Petron Malaysia maintains connectivity for refinery and station network.", initiatives: ["Refinery site connectivity", "Station network management"] },
      { category: "Data & AI", icon: "brain", relevance: "Medium", summary: "Petron Malaysia uses AI for refining optimization and demand forecasting.", initiatives: ["Refining process optimization", "Demand forecasting models"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "Petron Malaysia adopts DevOps for digital and retail applications.", initiatives: ["Retail app deployment", "Digital product pipelines"] }
    ],
    BOUSTEAD_PETROL: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "Boustead Petroleum secures SCADA and marketing systems across downstream ops.", initiatives: ["SCADA security for terminals", "Marketing system protection"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "Boustead Petroleum adopts cloud for enterprise and retail operations.", initiatives: ["Cloud for back-office systems", "Retail data analytics"] },
      { category: "5G & IoT", icon: "signal", relevance: "Medium", summary: "Boustead Petroleum deploys IoT for terminal and station monitoring.", initiatives: ["Terminal level monitoring", "Station IoT sensors"] },
      { category: "Connectivity", icon: "globe", relevance: "Low", summary: "Boustead Petroleum maintains connectivity for marketing network.", initiatives: ["Station connectivity", "Head office network"] },
      { category: "Data & AI", icon: "brain", relevance: "Medium", summary: "Boustead Petroleum applies AI to demand forecasting and operations.", initiatives: ["Demand forecasting", "Operational analytics"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "Boustead Petroleum modernizes delivery for digital retail systems.", initiatives: ["Retail system deployment", "Automated testing"] }
    ],
    CHEVRON_MY: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "Chevron Malaysia secures SCADA and upstream/downstream operations.", initiatives: ["OT security for Caltex stations", "Upstream facility protection"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "Chevron Malaysia leverages cloud for enterprise and exploration workloads.", initiatives: ["Hybrid cloud for exploration", "Enterprise cloud migration"] },
      { category: "5G & IoT", icon: "signal", relevance: "Medium", summary: "Chevron Malaysia deploys IoT for refinery, pipeline, and station monitoring.", initiatives: ["Pipeline monitoring IoT", "Station equipment sensors"] },
      { category: "Connectivity", icon: "globe", relevance: "Low", summary: "Chevron Malaysia maintains connectivity for Caltex and upstream sites.", initiatives: ["Caltex network connectivity", "Remote site links"] },
      { category: "Data & AI", icon: "brain", relevance: "Medium", summary: "Chevron Malaysia uses AI for predictive maintenance and demand analytics.", initiatives: ["Predictive maintenance for assets", "Retail demand analytics"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "Chevron Malaysia adopts DevOps for digital and operational systems.", initiatives: ["Digital product delivery", "Operational automation"] }
    ],
    SHELL_MY: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "Shell Malaysia secures SCADA and upstream/downstream critical systems.", initiatives: ["OT security for refineries", "Retail and upstream protection"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "Shell Malaysia adopts cloud for enterprise and digital operations.", initiatives: ["Cloud for digital products", "Enterprise workload migration"] },
      { category: "5G & IoT", icon: "signal", relevance: "Medium", summary: "Shell Malaysia deploys IoT for refinery, retail, and upstream monitoring.", initiatives: ["Refinery IoT sensors", "Retail site monitoring"] },
      { category: "Connectivity", icon: "globe", relevance: "Low", summary: "Shell Malaysia maintains connectivity for retail and upstream network.", initiatives: ["Shell station connectivity", "Upstream data links"] },
      { category: "Data & AI", icon: "brain", relevance: "Medium", summary: "Shell Malaysia uses AI for predictive maintenance and customer analytics.", initiatives: ["Asset predictive maintenance", "Customer behavior analytics"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "Shell Malaysia accelerates delivery with DevOps for digital products.", initiatives: ["Digital product pipelines", "Cloud-native deployment"] }
    ],
    DIALOG: [
      { category: "Cybersecurity", icon: "shield", relevance: "Medium", summary: "Dialog Group secures tank terminal and EPCC project systems.", initiatives: ["Terminal control system security", "Project data protection"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "Dialog Group adopts cloud for project and enterprise management.", initiatives: ["Cloud for project management", "Enterprise systems migration"] },
      { category: "5G & IoT", icon: "signal", relevance: "High", summary: "Dialog deploys IoT for construction site and tank terminal monitoring.", initiatives: ["Construction site IoT sensors", "Terminal level monitoring"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "Dialog enhances connectivity for EPCC sites and terminal operations.", initiatives: ["EPCC site connectivity", "Terminal network integration"] },
      { category: "Data & AI", icon: "brain", relevance: "Medium", summary: "Dialog applies AI to project analytics and terminal operations.", initiatives: ["Project analytics platform", "Terminal optimization AI"] },
      { category: "DevOps", icon: "code", relevance: "Medium", summary: "Dialog adopts DevOps for internal and project delivery systems.", initiatives: ["Project management automation", "Internal app delivery"] }
    ],
    VESTIGO: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "Vestigo Petroleum secures OT systems for Petronas upstream operations.", initiatives: ["OT security for production", "Upstream facility protection"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "Vestigo adopts cloud for upstream data and analytics workloads.", initiatives: ["Cloud for well and production data", "Analytics platform"] },
      { category: "5G & IoT", icon: "signal", relevance: "High", summary: "Vestigo deploys IoT for remote monitoring of upstream oil and gas assets.", initiatives: ["Remote well monitoring", "Production facility sensors"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "Vestigo maintains connectivity for remote upstream operations.", initiatives: ["Remote site data links", "Petronas network integration"] },
      { category: "Data & AI", icon: "brain", relevance: "Medium", summary: "Vestigo applies AI to reservoir and production optimization.", initiatives: ["Reservoir analytics", "Production optimization"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "Vestigo adopts DevOps for operational and internal software.", initiatives: ["Operational tool delivery", "Internal automation"] }
    ],
    VANTRIS: [
      { category: "Cybersecurity", icon: "shield", relevance: "Medium", summary: "Vantris Energy secures EPC project and enterprise systems post-restructure.", initiatives: ["Project data protection", "Enterprise security hardening"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "Vantris adopts cloud for EPC project management and enterprise systems.", initiatives: ["Cloud project management", "Enterprise cloud migration"] },
      { category: "5G & IoT", icon: "signal", relevance: "High", summary: "Vantris deploys IoT for construction site and EPC project monitoring.", initiatives: ["Construction site IoT", "Project site sensors"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "Vantris enhances connectivity for EPC project sites and offices.", initiatives: ["EPC site connectivity", "Office and site integration"] },
      { category: "Data & AI", icon: "brain", relevance: "Medium", summary: "Vantris applies AI to project analytics and EPC delivery optimization.", initiatives: ["Project analytics", "Delivery optimization"] },
      { category: "DevOps", icon: "code", relevance: "Medium", summary: "Vantris adopts DevOps for project and internal system delivery.", initiatives: ["Project system automation", "Internal app pipelines"] }
    ]
  };
  for (var k in t) if (COMPANIES[k]) COMPANIES[k].techTrends = t[k];

  var ict = {
    AIA: { total: "MYR 280M", pctRevenue: "3.8%", yoy: "+14%", focusAreas: ["Oracle Cloud", "AI Underwriting", "Data Platform"], source: "estimated" },
    ALLIANZ_MY: { total: "MYR 150M", pctRevenue: "3.5%", yoy: "+10%", focusAreas: ["Claims Digital", "Motor Telematics", "Cloud DR"], source: "estimated" },
    ETIQA: { total: "MYR 200M", pctRevenue: "3.2%", yoy: "+12%", focusAreas: ["Digital Takaful", "AI Claims", "Bancassurance API"], source: "estimated" },
    GREATEASTERN: { total: "MYR 170M", pctRevenue: "3.4%", yoy: "+9%", focusAreas: ["Digital Distribution", "Cloud Migration", "Analytics"], source: "estimated" },
    LIBERTY_MY: { total: "MYR 60M", pctRevenue: "4.0%", yoy: "+11%", focusAreas: ["Motor Digital", "Claims Automation", "Cloud Infra"], source: "estimated" },
    PRUDENTIAL_MY: { total: "MYR 220M", pctRevenue: "3.6%", yoy: "+13%", focusAreas: ["PRUServices", "AI Ops", "Digital Agency"], source: "estimated" },
    AMMETLIFE: { total: "MYR 80M", pctRevenue: "4.2%", yoy: "+10%", focusAreas: ["Digital Channels", "AmBank Integration", "Cloud"], source: "estimated" },
    PETRONAS: { total: "MYR 2.1B", pctRevenue: "0.6%", yoy: "+8%", focusAreas: ["AI CoE", "Predictive Analytics", "OT Security"], source: "reported" },
    PETROS: { total: "MYR 120M", pctRevenue: "1.8%", yoy: "+15%", focusAreas: ["Upstream Digital", "SCADA Security", "Cloud Analytics"], source: "estimated" },
    PETRONM: { total: "MYR 85M", pctRevenue: "0.5%", yoy: "+6%", focusAreas: ["Refinery Automation", "ERP Upgrade", "Cybersecurity"], source: "estimated" },
    BOUSTEAD_PETROL: { total: "MYR 30M", pctRevenue: "1.2%", yoy: "+5%", focusAreas: ["Distribution Tech", "Fleet Management", "POS Systems"], source: "estimated" },
    CHEVRON_MY: { total: "MYR 180M", pctRevenue: "1.5%", yoy: "+7%", focusAreas: ["Upstream Analytics", "OT Security", "Cloud ERP"], source: "estimated" },
    SHELL_MY: { total: "MYR 250M", pctRevenue: "1.0%", yoy: "+9%", focusAreas: ["Energy Transition", "Retail Digital", "Cloud Platform"], source: "estimated" },
    DIALOG: { total: "MYR 95M", pctRevenue: "2.2%", yoy: "+12%", focusAreas: ["Terminal IoT", "EPCC Digital", "Safety Systems"], source: "estimated" },
    VESTIGO: { total: "MYR 45M", pctRevenue: "2.0%", yoy: "+8%", focusAreas: ["Upstream Monitoring", "Well Analytics", "SCADA"], source: "estimated" },
    VANTRIS: { total: "MYR 15M", pctRevenue: "3.5%", yoy: "+5%", focusAreas: ["EPC Systems", "Cost Management", "Legacy Upgrade"], source: "estimated" }
  };
  for (var k in ict) if (COMPANIES[k]) COMPANIES[k].ictSpend = ict[k];

  var ins = {
    AIA: {
      topPriorities: [
        { priority: "Health and wellness digital ecosystem", techInfluence: [
          { area: "Cloud", detail: "Cloud-native AIA+ health platform scaling to millions of Malaysian policyholders" },
          { area: "Data & AI", detail: "AI health risk scoring and wellness programme personalisation based on wearable data" }
        ]},
        { priority: "AI-driven underwriting and claims automation", techInfluence: [
          { area: "Data & AI", detail: "Automated underwriting with AI risk assessment reducing policy issuance from days to minutes" },
          { area: "DevOps", detail: "ML model deployment pipeline for continuous underwriting model improvement" }
        ]},
        { priority: "Bancassurance digital integration with partners", techInfluence: [
          { area: "Connectivity", detail: "API-first bancassurance integration with Public Bank and other distribution partners" },
          { area: "Cloud", detail: "Cloud middleware for real-time policy issuance through partner banking apps" }
        ]},
        { priority: "Data unification across 30+ legacy systems", techInfluence: [
          { area: "Cloud", detail: "Oracle Exadata Cloud@Customer consolidating data from 30+ source systems" },
          { area: "Data & AI", detail: "Unified data lake enabling 360-degree customer view across all product lines" }
        ]},
        { priority: "Regulatory compliance and data governance", techInfluence: [
          { area: "Cybersecurity", detail: "PDPA and BNM data protection compliance for sensitive health and financial data" },
          { area: "DevOps", detail: "Automated compliance testing in CI/CD pipelines for policy administration systems" }
        ]}
      ],
      painPoints: [
        "30+ legacy source systems creating data fragmentation and inconsistent customer experience across channels",
        "Complex bancassurance integration with multiple bank partners each having different API standards",
        "Rising health insurance fraud requiring sophisticated AI detection capabilities not yet fully deployed",
        "Customer reluctance to share wearable health data due to privacy concerns limiting AI personalisation",
        "Regulatory uncertainty around AI-driven underwriting decisions and algorithmic fairness requirements"
      ],
      strategicInvestments: ["Oracle Exadata Cloud@Customer for data unification (30+ source systems)", "AI-enabled underwriting platform"],
      direction: "AIA Malaysia is building a digital health ecosystem around its AIA+ app, using AI to automate underwriting and claims while deepening bancassurance digital integration for broader distribution.",
      partnerships: [
        { partner: "Oracle", area: "Cloud Data Platform", impact: "High" },
        { partner: "Public Bank", area: "Bancassurance Distribution", impact: "High" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+12-15%", narrative: "One Data platform migration to Oracle Cloud and AI underwriting rollout are driving accelerated tech spend. Health ecosystem development on AIA+ will sustain 12-15% annual ICT growth." }
    },
    ALLIANZ_MY: {
      topPriorities: [
        { priority: "Motor insurance digital claims processing", techInfluence: [
          { area: "Data & AI", detail: "AI damage assessment from photo/video uploads for instant motor claims processing" },
          { area: "Cloud", detail: "Cloud-based claims workflow platform for real-time adjuster coordination" }
        ]},
        { priority: "Customer experience digitisation", techInfluence: [
          { area: "Cloud", detail: "Digital self-service portal on cloud for policy management and claims tracking" },
          { area: "Connectivity", detail: "Mobile-first customer engagement across policy lifecycle" }
        ]},
        { priority: "Operational efficiency through automation", techInfluence: [
          { area: "Data & AI", detail: "RPA and intelligent document processing for policy administration workflows" },
          { area: "DevOps", detail: "Automated testing and deployment for insurance platform updates" }
        ]},
        { priority: "Global Allianz technology platform adoption", techInfluence: [
          { area: "Cloud", detail: "Migration to Allianz Group global cloud platform (AGCS) for standardisation" },
          { area: "Cybersecurity", detail: "Global Allianz security standards implementation across Malaysia operations" }
        ]},
        { priority: "Data analytics for risk pricing", techInfluence: [
          { area: "Data & AI", detail: "Telematics and IoT data integration for usage-based motor insurance pricing" },
          { area: "5G & IoT", detail: "Connected vehicle data from OBD devices for driving behaviour analysis" }
        ]}
      ],
      painPoints: [
        "Motor claims fraud increasing with sophisticated staged accident schemes requiring advanced AI detection",
        "Global platform migration complexity adapting Allianz Technology SE standards to Malaysian regulatory requirements",
        "Agent channel resistance to digital transformation threatening relationship-based distribution model",
        "Limited telematics data availability in Malaysia compared to more mature markets constraining UBI pricing",
        "Cloud disaster recovery gaps identified in recent BNM regulatory audits requiring urgent remediation"
      ],
      strategicInvestments: ["Digital claims self-service platform", "Cloud disaster recovery infrastructure"],
      direction: "Allianz Malaysia is digitising its claims value chain end-to-end while building resilient cloud infrastructure, leveraging the global Allianz technology stack for faster deployment.",
      partnerships: [
        { partner: "Allianz Technology SE", area: "Global Tech Platform", impact: "High" },
        { partner: "Microsoft Azure", area: "Cloud Infrastructure", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+10-12%", narrative: "Global Allianz digital mandates and Malaysia motor claims digitalisation are driving 10-12% annual IT spend growth. Cloud DR and automation investments add to the baseline." }
    },
    ETIQA: {
      topPriorities: [
        { priority: "Digital takaful and micro-insurance products", techInfluence: [
          { area: "Cloud", detail: "Cloud-native takaful product engine for rapid micro-insurance product launches" },
          { area: "Connectivity", detail: "Mobile-first micro-insurance distribution through telco and e-wallet partnerships" }
        ]},
        { priority: "AI-driven claims processing", techInfluence: [
          { area: "Data & AI", detail: "AI claims adjudication and fraud detection for motor and health claims" },
          { area: "DevOps", detail: "ML model deployment pipeline for continuous claims model improvement" }
        ]},
        { priority: "Maybank MAE ecosystem integration", techInfluence: [
          { area: "Connectivity", detail: "Deep API integration with Maybank MAE super-app for embedded insurance" },
          { area: "Cloud", detail: "Shared cloud infrastructure with Maybank for seamless policy issuance" }
        ]},
        { priority: "Predictive analytics for risk management", techInfluence: [
          { area: "Data & AI", detail: "Predictive models for claims frequency, customer lifetime value, and cross-selling" },
          { area: "Cloud", detail: "Cloud-based data analytics platform for real-time risk monitoring" }
        ]},
        { priority: "Digital agent enablement and productivity", techInfluence: [
          { area: "Cloud", detail: "Agent portal and mobile tools on cloud for remote sales and servicing" },
          { area: "5G & IoT", detail: "5G-enabled video advisory for remote insurance consultations" }
        ]}
      ],
      painPoints: [
        "Maybank integration dependency creating single-channel concentration risk for distribution",
        "Takaful product complexity requiring specialised Shariah compliance in digital systems",
        "Micro-insurance low premium economics challenging profitability of digital distribution investment",
        "Legacy policy administration system limiting speed of new digital product launches",
        "Data sharing constraints between Etiqa and Maybank due to corporate governance boundaries"
      ],
      strategicInvestments: ["AI claims adjudication engine", "Digital bancassurance platform with Maybank"],
      direction: "Etiqa is riding the Maybank digital wave, integrating deeply into the MAE super-app ecosystem while building AI-native insurance products for the mass market and micro-insurance segment.",
      partnerships: [
        { partner: "Maybank", area: "MAE Ecosystem Integration", impact: "High" },
        { partner: "Verisk", area: "Claims Analytics", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+12-14%", narrative: "Maybank-Etiqa digital integration and AI claims engine development are driving 12-14% IT spend growth. Micro-insurance digital distribution requires scalable cloud-native platforms." }
    },
    GREATEASTERN: {
      topPriorities: [
        { priority: "Digital distribution channel expansion", techInfluence: [
          { area: "Cloud", detail: "Cloud-based direct-to-consumer insurance platform alongside agent channels" },
          { area: "Connectivity", detail: "Omnichannel distribution integrating digital, branch, and agent touchpoints" }
        ]},
        { priority: "Policyholder self-service digitalisation", techInfluence: [
          { area: "Cloud", detail: "Self-service portal on cloud for policy management, claims, and renewals" },
          { area: "DevOps", detail: "Rapid feature deployment for digital self-service enhancements" }
        ]},
        { priority: "Data-driven customer segmentation", techInfluence: [
          { area: "Data & AI", detail: "ML-based customer segmentation for targeted product recommendations and retention" },
          { area: "Cloud", detail: "Customer data platform on cloud for unified view across life and general insurance" }
        ]},
        { priority: "Agent digital productivity platform", techInfluence: [
          { area: "Cloud", detail: "Cloud-hosted agent toolkit with e-submission, needs analysis, and proposal generation" },
          { area: "Data & AI", detail: "AI-assisted needs analysis and product recommendation for agent advisory" }
        ]},
        { priority: "OCBC Group technology alignment", techInfluence: [
          { area: "Cybersecurity", detail: "OCBC Group security standards and shared SOC for insurance operations" },
          { area: "Cloud", detail: "Shared cloud infrastructure strategy with OCBC Group for cost efficiency" }
        ]}
      ],
      painPoints: [
        "Agent-dependent distribution model resisting digital channel cannibalisation of commissions",
        "OCBC Group technology governance creating slow decision-making for local innovation",
        "Legacy policy administration systems limiting product configurability and time-to-market",
        "Limited direct-to-consumer digital brand recognition compared to digital-first competitors",
        "Cross-selling between life and general insurance hampered by separate legacy systems"
      ],
      strategicInvestments: ["Agent digital productivity platform", "Cloud migration for policy administration"],
      direction: "Great Eastern is modernising its distribution model through agent digital enablement and self-service portals, supported by OCBC Group's technology investment strategy.",
      partnerships: [
        { partner: "OCBC Group", area: "Shared Technology Platform", impact: "High" },
        { partner: "Salesforce", area: "CRM & Distribution", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+9-11%", narrative: "Agent digital platform rollout and policy admin cloud migration are driving steady 9-11% annual IT growth. OCBC Group shared services reduce unit costs while enabling investment." }
    },
    LIBERTY_MY: {
      topPriorities: [
        { priority: "Motor claims digitalisation and fraud detection", techInfluence: [
          { area: "Data & AI", detail: "AI image analysis for motor damage assessment and fraud pattern detection" },
          { area: "Cloud", detail: "Cloud-based claims processing for real-time adjudication" }
        ]},
        { priority: "Operational cost reduction through automation", techInfluence: [
          { area: "Data & AI", detail: "RPA for policy issuance, renewals, and back-office operations" },
          { area: "DevOps", detail: "Automated testing and deployment reducing operational overhead" }
        ]},
        { priority: "Niche market digital product development", techInfluence: [
          { area: "Cloud", detail: "Cloud-native product engine for rapid niche insurance product launches" },
          { area: "Connectivity", detail: "Digital distribution through partner APIs and aggregator platforms" }
        ]},
        { priority: "Global Liberty Mutual technology adoption", techInfluence: [
          { area: "Cloud", detail: "Liberty Mutual global cloud platform migration for Malaysia operations" },
          { area: "Cybersecurity", detail: "Global security standards and incident response framework adoption" }
        ]},
        { priority: "Data analytics for underwriting excellence", techInfluence: [
          { area: "Data & AI", detail: "Predictive analytics for risk selection and pricing optimisation in niche segments" },
          { area: "5G & IoT", detail: "Telematics data integration for commercial fleet insurance pricing" }
        ]}
      ],
      painPoints: [
        "Small market share limiting technology investment budget compared to larger insurers",
        "Motor insurance market price competition from larger players with better data and pricing models",
        "Dependency on global Liberty Mutual technology roadmap not always aligned with Malaysian priorities",
        "Limited brand digital presence making online customer acquisition costly",
        "Fraud detection capabilities lagging behind sophisticated claims fraud schemes in Malaysia"
      ],
      strategicInvestments: ["AI fraud detection for motor claims", "Cloud infrastructure modernisation"],
      direction: "Liberty General is focusing on niche market differentiation through digital motor claims excellence and AI-powered fraud detection, competing on technology rather than scale.",
      partnerships: [
        { partner: "Liberty Mutual Global", area: "Group Technology", impact: "High" },
        { partner: "Shift Technology", area: "AI Fraud Detection", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+10-12%", narrative: "AI fraud detection deployment and cloud modernisation are driving 10-12% IT spend growth. Global Liberty Mutual technology sharing reduces implementation costs." }
    },
    PRUDENTIAL_MY: {
      topPriorities: [
        { priority: "Pulse digital health ecosystem expansion", techInfluence: [
          { area: "Cloud", detail: "Pulse app platform on cloud scaling health, wellness, and insurance services" },
          { area: "Data & AI", detail: "AI health risk assessment and symptom checker within Pulse ecosystem" }
        ]},
        { priority: "AI-powered financial advisory tools", techInfluence: [
          { area: "Data & AI", detail: "AI-assisted needs analysis and retirement planning tools for agents and customers" },
          { area: "Cloud", detail: "Cloud-hosted advisory platform for real-time financial modelling" }
        ]},
        { priority: "PRUServices digital agent platform", techInfluence: [
          { area: "Cloud", detail: "Agent productivity platform on cloud for e-submission and client management" },
          { area: "Connectivity", detail: "Mobile-first agent tools with offline capability for field sales" }
        ]},
        { priority: "Customer-centric data analytics", techInfluence: [
          { area: "Data & AI", detail: "Customer lifetime value modelling and next-best-action recommendations" },
          { area: "DevOps", detail: "ML model deployment and A/B testing for customer engagement optimisation" }
        ]},
        { priority: "Prudential plc global platform leverage", techInfluence: [
          { area: "Cloud", detail: "Global Prudential cloud platform adoption for faster feature deployment in Malaysia" },
          { area: "Cybersecurity", detail: "Global cybersecurity standards and shared threat intelligence" }
        ]}
      ],
      painPoints: [
        "Pulse app user engagement declining after initial download, struggling to convert users to policyholders",
        "Agent resistance to digital tools perceived as replacing human advisory relationships",
        "Global platform customisation constraints limiting local market innovation speed",
        "Health data privacy concerns from customers limiting Pulse health ecosystem data collection",
        "Competition from digital-first insurers and insurtechs offering simpler, cheaper products"
      ],
      strategicInvestments: ["Pulse digital health platform expansion", "AI-powered financial advisory tools"],
      direction: "Prudential Malaysia is building a digital health and wealth ecosystem through the Pulse app while transforming its agency force with AI-powered advisory tools, leveraging Prudential plc's global tech stack.",
      partnerships: [
        { partner: "Prudential plc", area: "Global Digital Platform", impact: "High" },
        { partner: "Babylon Health", area: "Digital Health AI", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+12-14%", narrative: "Pulse health ecosystem expansion and AI advisory tools are driving 12-14% annual ICT growth. Global Prudential platform investments in AI accelerate local deployment timelines." }
    },
    AMMETLIFE: {
      topPriorities: [
        { priority: "AmBank bancassurance digital integration", techInfluence: [
          { area: "Connectivity", detail: "API integration with AmBank digital banking for seamless embedded insurance" },
          { area: "Cloud", detail: "Shared cloud middleware for real-time policy issuance through AmBank channels" }
        ]},
        { priority: "Takaful digital product innovation", techInfluence: [
          { area: "Cloud", detail: "Cloud-native takaful product engine for rapid Shariah-compliant product development" },
          { area: "Data & AI", detail: "AI-driven takaful product recommendations based on customer profiles" }
        ]},
        { priority: "Operational streamlining through automation", techInfluence: [
          { area: "Data & AI", detail: "RPA for claims processing, policy admin, and compliance reporting" },
          { area: "DevOps", detail: "Automated deployment pipelines for insurance platform updates" }
        ]},
        { priority: "MetLife global technology platform adoption", techInfluence: [
          { area: "Cloud", detail: "MetLife global cloud platform migration for Malaysia insurance operations" },
          { area: "Cybersecurity", detail: "MetLife global security framework and incident response standards" }
        ]},
        { priority: "Customer data analytics for retention", techInfluence: [
          { area: "Data & AI", detail: "Churn prediction and retention analytics for policyholder lifecycle management" },
          { area: "Cloud", detail: "Customer data platform on cloud for unified policy and claims view" }
        ]}
      ],
      painPoints: [
        "Dual-brand complexity (AmMetLife conventional + AmFamily takaful) complicating digital platform architecture",
        "AmBank distribution dependency limiting direct-to-consumer digital capabilities",
        "MetLife global platform not fully optimised for Malaysian takaful regulatory requirements",
        "Small market share limiting investment capacity for transformative digital initiatives",
        "Legacy policy systems from pre-merger entities still not fully consolidated"
      ],
      strategicInvestments: ["Integrated bancassurance digital platform", "Automated underwriting system"],
      direction: "AmMetLife is deepening its AmBank integration through a unified digital bancassurance platform while expanding takaful products to capture Malaysia's growing Islamic insurance demand.",
      partnerships: [
        { partner: "AmBank Group", area: "Bancassurance Integration", impact: "High" },
        { partner: "MetLife Global", area: "Global Technology", impact: "High" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+10-12%", narrative: "AmBank digital integration and MetLife global platform adoption are driving 10-12% IT growth. Takaful product digitalisation requires new platform capabilities." }
    },
    PETRONAS: {
      topPriorities: [
        { priority: "Net-Zero 2050 decarbonisation strategy", techInfluence: [
          { area: "Data & AI", detail: "AI-driven carbon accounting, emissions monitoring, and decarbonisation pathway optimisation" },
          { area: "5G & IoT", detail: "IoT sensors for real-time emissions monitoring across upstream and downstream operations" }
        ]},
        { priority: "AI-driven operational excellence across operations", techInfluence: [
          { area: "Data & AI", detail: "AI CoE with BCG/Microsoft deploying predictive maintenance and production optimisation" },
          { area: "Cloud", detail: "Azure cloud platform for AI workloads and cross-asset analytics" }
        ]},
        { priority: "New energy ventures (hydrogen, CCS, renewables)", techInfluence: [
          { area: "5G & IoT", detail: "IoT monitoring for hydrogen production facilities and CCS injection sites" },
          { area: "Data & AI", detail: "AI simulation for CCS reservoir modelling and renewable energy forecasting" }
        ]},
        { priority: "OT cybersecurity for critical infrastructure", techInfluence: [
          { area: "Cybersecurity", detail: "SCADA/ICS security hardening across offshore platforms, refineries, and LNG plants" },
          { area: "5G & IoT", detail: "Secure 5G private networks for operational technology environments" }
        ]},
        { priority: "Digital twin for asset lifecycle management", techInfluence: [
          { area: "Cloud", detail: "AVEVA Predictive Analytics on cloud for digital twin of 600+ assets" },
          { area: "DevOps", detail: "Continuous integration of sensor data and model updates for digital twin accuracy" }
        ]}
      ],
      painPoints: [
        "OT/IT convergence security risk as legacy SCADA systems connect to cloud analytics platforms",
        "Massive asset portfolio scale (600+ assets) creating digital twin deployment complexity and cost",
        "Talent gap in AI, data science, and OT security with competition from tech companies for skilled workers",
        "Aging offshore platform infrastructure limiting IoT sensor deployment and connectivity",
        "Regulatory compliance complexity across 50+ operating countries with varying data sovereignty requirements"
      ],
      strategicInvestments: ["AI Centre of Excellence with BCG and Microsoft", "AVEVA Predictive Analytics for asset management"],
      direction: "Petronas is transforming from a traditional O&G company into an integrated energy company. Digital and AI are central to both optimising legacy assets and enabling new energy businesses like hydrogen and carbon capture.",
      partnerships: [
        { partner: "Microsoft", area: "AI CoE & Cloud", impact: "High" },
        { partner: "Baker Hughes", area: "AI Solutions", impact: "High" },
        { partner: "BCG", area: "AI Strategy", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+8-10%", narrative: "Net-Zero 2050 roadmap, AI CoE scaling, and new energy digital platforms are driving sustained ICT growth of 8-10%. OT cybersecurity compliance adds incremental spend as Malaysia's Cyber Security Bill 2024 takes effect." }
    },
    PETROS: {
      topPriorities: [
        { priority: "Sarawak upstream asset digitalisation", techInfluence: [
          { area: "Data & AI", detail: "Upstream analytics platform for production monitoring and reservoir optimisation" },
          { area: "5G & IoT", detail: "IoT sensors for remote well monitoring in Sarawak's offshore fields" }
        ]},
        { priority: "State energy sovereignty and revenue maximisation", techInfluence: [
          { area: "Data & AI", detail: "AI-driven production forecasting and revenue optimisation for state petroleum resources" },
          { area: "Cloud", detail: "Cloud-based production reporting and royalty calculation platform" }
        ]},
        { priority: "Local digital talent development", techInfluence: [
          { area: "Cloud", detail: "Regional Delivery Centre with cloud infrastructure for local tech capability building" },
          { area: "DevOps", detail: "Modern software development training and practices for Sarawak tech workforce" }
        ]},
        { priority: "Safety and environmental monitoring", techInfluence: [
          { area: "5G & IoT", detail: "Environmental sensors for real-time air and water quality monitoring around operations" },
          { area: "Cybersecurity", detail: "OT security for upstream monitoring systems and SCADA networks" }
        ]},
        { priority: "Cross-border energy trading digitalisation", techInfluence: [
          { area: "Connectivity", detail: "Digital energy trading platforms for cross-border gas sales with Sabah and Peninsular" },
          { area: "Data & AI", detail: "AI pricing and demand forecasting for LNG and gas trading" }
        ]}
      ],
      painPoints: [
        "Nascent organisation with limited in-house technology team and heavy reliance on external consultants",
        "Remote offshore operations in Sarawak creating connectivity challenges for IoT and real-time monitoring",
        "Limited local technology vendor ecosystem in East Malaysia constraining procurement options",
        "Regulatory and sovereignty negotiations with Petronas creating uncertainty in digital infrastructure investments",
        "Small scale operations limiting ability to justify enterprise-grade technology investments"
      ],
      strategicInvestments: ["Upstream monitoring and analytics platform", "Regional Delivery Centre in Sarawak"],
      direction: "Petros is building Sarawak's sovereign energy capability with a digital-first approach, investing in upstream analytics and local talent to maximise state petroleum revenue and reduce dependence on external operators.",
      partnerships: [
        { partner: "Petronas", area: "Technical Collaboration", impact: "High" },
        { partner: "TEGAS", area: "Digital Talent Development", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+15-18%", narrative: "Sarawak's expanding upstream role and digital sovereignty ambitions drive accelerated ICT investment. The Regional Delivery Centre and upstream analytics build-out support 15-18% annual growth from a smaller base." }
    },
    PETRONM: {
      topPriorities: [
        { priority: "Refinery operational efficiency optimisation", techInfluence: [
          { area: "Data & AI", detail: "AI-driven refinery process optimisation for yield improvement and energy reduction" },
          { area: "5G & IoT", detail: "IoT sensors for real-time refinery equipment monitoring and condition-based maintenance" }
        ]},
        { priority: "ERP system modernisation", techInfluence: [
          { area: "Cloud", detail: "SAP ERP migration to cloud for integrated refinery and retail operations" },
          { area: "DevOps", detail: "Modernised ERP deployment and update processes" }
        ]},
        { priority: "Retail station network digitalisation", techInfluence: [
          { area: "Connectivity", detail: "Connected POS and fuel management systems across 900+ retail stations" },
          { area: "5G & IoT", detail: "IoT fuel level monitoring and predictive replenishment for station network" }
        ]},
        { priority: "Safety and environmental compliance", techInfluence: [
          { area: "Cybersecurity", detail: "SCADA security for refinery control systems and safety instrumented systems" },
          { area: "5G & IoT", detail: "Environmental monitoring sensors for emissions and effluent compliance" }
        ]},
        { priority: "Supply chain and logistics optimisation", techInfluence: [
          { area: "Data & AI", detail: "AI demand forecasting and supply chain optimisation for fuel distribution" },
          { area: "Connectivity", detail: "Fleet tracking and logistics connectivity for fuel delivery operations" }
        ]}
      ],
      painPoints: [
        "Aging refinery infrastructure limiting IoT sensor deployment and digital twin implementation",
        "900+ retail station network scale creating massive connectivity and POS standardisation challenge",
        "Tight refinery margins limiting technology investment budget for digital transformation",
        "Parent company (San Miguel) technology direction not always aligned with Malaysian market needs",
        "Cybersecurity vulnerability in legacy SCADA and DCS systems with limited OT security expertise"
      ],
      strategicInvestments: ["Refinery automation and control system upgrade", "SAP ERP cloud migration"],
      direction: "Petron Malaysia is focused on refinery margin optimisation through digital twin technology and process automation, while modernising its ERP backbone for the 900+ station retail network.",
      partnerships: [
        { partner: "San Miguel Corp", area: "Parent Group Technology", impact: "High" },
        { partner: "SAP", area: "ERP Modernisation", impact: "Medium" }
      ],
      spendOutlook: { trend: "Stable", delta: "+5-7%", narrative: "Refinery automation and ERP modernisation drive steady 5-7% IT growth. Limited new business expansion keeps spend growth moderate compared to upstream peers." }
    },
    BOUSTEAD_PETROL: {
      topPriorities: [
        { priority: "Distribution network efficiency", techInfluence: [
          { area: "Data & AI", detail: "AI route optimisation for fuel distribution fleet reducing delivery costs" },
          { area: "Connectivity", detail: "Fleet GPS tracking and real-time logistics coordination" }
        ]},
        { priority: "Fleet management optimisation", techInfluence: [
          { area: "5G & IoT", detail: "IoT telemetry for fleet vehicle condition monitoring and predictive maintenance" },
          { area: "Data & AI", detail: "Driver behaviour analytics and fuel consumption optimisation" }
        ]},
        { priority: "POS and payment system upgrade", techInfluence: [
          { area: "Connectivity", detail: "Contactless and mobile payment integration across retail stations" },
          { area: "Cybersecurity", detail: "PCI-DSS compliance for payment processing security" }
        ]},
        { priority: "Operational cost control through digitalisation", techInfluence: [
          { area: "Cloud", detail: "Cloud-based operations management reducing on-premises infrastructure costs" },
          { area: "DevOps", detail: "Automated operational reporting and station performance monitoring" }
        ]},
        { priority: "Environmental compliance monitoring", techInfluence: [
          { area: "5G & IoT", detail: "Underground storage tank monitoring sensors for leak detection compliance" },
          { area: "Data & AI", detail: "Environmental compliance analytics and automated reporting" }
        ]}
      ],
      painPoints: [
        "Thin margins in fuel distribution limiting available budget for digital transformation",
        "Fragmented IT infrastructure across distribution depots and retail stations",
        "Aging fleet creating reliability issues and limiting IoT integration opportunities",
        "Limited in-house IT capability requiring heavy dependence on Boustead Group shared services",
        "Payment system PCI compliance costs consuming disproportionate share of IT budget"
      ],
      strategicInvestments: ["Fleet GPS and route optimisation platform", "Contactless payment system rollout"],
      direction: "Boustead Petroleum is digitising its downstream distribution operations, focusing on fleet optimisation and modern payment systems to maintain competitiveness in a consolidating retail fuel market.",
      partnerships: [
        { partner: "Boustead Holdings", area: "Group IT Shared Services", impact: "Medium" },
        { partner: "Petronas", area: "Supply Chain Integration", impact: "Medium" }
      ],
      spendOutlook: { trend: "Stable", delta: "+4-6%", narrative: "Distribution digitalisation and payment modernisation drive modest 4-6% IT growth. Scale constraints and margin pressure limit ability for large technology investments." }
    },
    CHEVRON_MY: {
      topPriorities: [
        { priority: "Upstream production optimisation and decline management", techInfluence: [
          { area: "Data & AI", detail: "AI reservoir modelling and production forecasting for maturing Malaysian fields" },
          { area: "5G & IoT", detail: "IoT well monitoring sensors for real-time production data from offshore platforms" }
        ]},
        { priority: "OT/SCADA cybersecurity hardening", techInfluence: [
          { area: "Cybersecurity", detail: "ICS/SCADA security framework implementation for offshore platform control systems" },
          { area: "5G & IoT", detail: "Secure OT network segmentation for connected offshore equipment" }
        ]},
        { priority: "Cloud ERP standardisation on Chevron global", techInfluence: [
          { area: "Cloud", detail: "Chevron global SAP S/4HANA Cloud migration for Malaysia operations" },
          { area: "DevOps", detail: "Standardised global deployment practices for ERP and business applications" }
        ]},
        { priority: "Environmental and safety monitoring", techInfluence: [
          { area: "5G & IoT", detail: "Environmental sensors for offshore emissions monitoring and safety compliance" },
          { area: "Data & AI", detail: "AI-based safety analytics and incident prediction for offshore operations" }
        ]},
        { priority: "Digital oilfield capabilities", techInfluence: [
          { area: "Data & AI", detail: "Integrated reservoir-to-surface digital oilfield analytics" },
          { area: "Cloud", detail: "Cloud-hosted production analytics accessible from Chevron global operations centres" }
        ]}
      ],
      painPoints: [
        "Maturing Malaysian fields with declining production limiting ROI on digital investments",
        "Global Chevron IT governance creating slow local decision-making for Malaysia-specific needs",
        "Offshore connectivity limitations in deepwater areas constraining real-time IoT data transmission",
        "PSC contract terms with Petronas limiting technology investment recovery timelines",
        "Aging platform infrastructure complicating IoT sensor retrofitting and digital twin deployment"
      ],
      strategicInvestments: ["Chevron global cloud ERP rollout to Malaysia operations", "Upstream analytics and digital oilfield"],
      direction: "Chevron Malaysia is standardising on global Chevron digital platforms, migrating to cloud ERP while investing in upstream analytics to optimise production from maturing Malaysian fields.",
      partnerships: [
        { partner: "Chevron Global", area: "Enterprise IT Platform", impact: "High" },
        { partner: "Microsoft", area: "Cloud & Analytics", impact: "Medium" }
      ],
      spendOutlook: { trend: "Stable", delta: "+6-8%", narrative: "Global ERP cloud migration and upstream analytics drive 6-8% IT growth. Malaysia operations benefit from Chevron global technology investments with limited incremental local spend." }
    },
    SHELL_MY: {
      topPriorities: [
        { priority: "Energy transition digital enablement", techInfluence: [
          { area: "Cloud", detail: "Cloud platforms for Shell Recharge EV charging network management and expansion" },
          { area: "Data & AI", detail: "AI-optimised EV charging station placement and demand forecasting" }
        ]},
        { priority: "Retail customer digital loyalty programme", techInfluence: [
          { area: "Data & AI", detail: "AI personalisation for Shell GO+ loyalty programme and targeted promotions" },
          { area: "Connectivity", detail: "Mobile app and payment integration across 1,000+ retail stations" }
        ]},
        { priority: "Supply chain and trading optimisation", techInfluence: [
          { area: "Data & AI", detail: "AI-powered energy trading and supply chain optimisation for fuel and LNG" },
          { area: "Cloud", detail: "Shell global cloud trading platform for real-time market analytics" }
        ]},
        { priority: "Operational safety and environmental monitoring", techInfluence: [
          { area: "5G & IoT", detail: "IoT sensors for refinery and terminal safety monitoring" },
          { area: "Cybersecurity", detail: "OT security for Port Dickson refinery control systems" }
        ]},
        { priority: "Shell global digital hub platform adoption", techInfluence: [
          { area: "Cloud", detail: "Shell global Azure partnership driving cloud-first strategy across Malaysia" },
          { area: "DevOps", detail: "Shell global CI/CD practices and developer platform standards" }
        ]}
      ],
      painPoints: [
        "EV charging infrastructure economics uncertain with low Malaysian EV adoption rates (~2% of new sales)",
        "Port Dickson refinery aging infrastructure limiting digital twin and IoT deployment",
        "Balancing global Shell digital mandates with Malaysian market-specific needs and regulations",
        "Retail station franchise model complicating technology standardisation across 1,000+ outlets",
        "Energy transition uncertainty creating investment planning challenges across fossil fuel and renewable portfolios"
      ],
      strategicInvestments: ["Shell Recharge EV charging network digitalisation", "AI-powered energy trading platform"],
      direction: "Shell Malaysia is pivoting toward energy transition through digital platforms for EV charging and renewable energy while optimising its core retail and trading operations through AI and data analytics.",
      partnerships: [
        { partner: "Shell Global", area: "Digital Hub Platform", impact: "High" },
        { partner: "Microsoft", area: "Cloud & AI", impact: "High" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+8-10%", narrative: "Energy transition digital platforms (Shell Recharge, renewable energy management) and AI trading optimisation drive 8-10% IT growth. Global Shell digital mandates accelerate local adoption." }
    },
    DIALOG: {
      topPriorities: [
        { priority: "Terminal operations IoT and predictive maintenance", techInfluence: [
          { area: "5G & IoT", detail: "IoT sensor network for tank farm monitoring, pump health, and predictive maintenance" },
          { area: "Data & AI", detail: "ML-based predictive maintenance reducing unplanned terminal downtime" }
        ]},
        { priority: "EPCC project digital delivery", techInfluence: [
          { area: "Cloud", detail: "Cloud-based project management and collaboration for distributed EPCC teams" },
          { area: "DevOps", detail: "Digital project delivery tools and automated reporting for EPCC execution" }
        ]},
        { priority: "Safety and environmental monitoring systems", techInfluence: [
          { area: "5G & IoT", detail: "Real-time environmental sensors for emissions, spill detection, and safety compliance" },
          { area: "Cybersecurity", detail: "OT security for terminal SCADA and safety instrumented systems" }
        ]},
        { priority: "Asset lifecycle management digitalisation", techInfluence: [
          { area: "Data & AI", detail: "AI-driven asset integrity management and inspection scheduling optimisation" },
          { area: "Cloud", detail: "Cloud-hosted asset management platform for Pengerang and other terminal facilities" }
        ]},
        { priority: "Regional operational hub development", techInfluence: [
          { area: "Connectivity", detail: "Secure connectivity between Malaysia HQ and regional terminal operations" },
          { area: "Cloud", detail: "Centralised cloud operations centre for regional terminal monitoring" }
        ]}
      ],
      painPoints: [
        "Pengerang terminal scale creating massive IoT deployment complexity across thousands of sensors",
        "OT/IT security convergence challenges as legacy terminal control systems connect to analytics platforms",
        "EPCC project technology standards varying across clients (Petronas, Shell, etc.) creating integration complexity",
        "Remote terminal locations creating connectivity challenges for real-time monitoring",
        "Skilled OT and automation engineering talent shortage in Johor and East Malaysia"
      ],
      strategicInvestments: ["Smart terminal IoT monitoring platform", "Digital EPCC project management suite"],
      direction: "DIALOG is digitalising its terminal operations with IoT-based predictive maintenance while implementing digital project delivery for its growing EPCC orderbook across Southeast Asia.",
      partnerships: [
        { partner: "Emerson", area: "Terminal Automation", impact: "High" },
        { partner: "Hexagon", area: "Safety & Environment Monitoring", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+12-14%", narrative: "Growing terminal portfolio and EPCC orderbook expansion drive 12-14% IT growth. IoT-based predictive maintenance and digital safety systems require continued investment across new sites." }
    },
    VESTIGO: {
      topPriorities: [
        { priority: "Mature field production optimisation", techInfluence: [
          { area: "Data & AI", detail: "AI-driven reservoir analytics and production optimisation for declining fields" },
          { area: "Cloud", detail: "Cloud-hosted production analytics integrated with Petronas upstream systems" }
        ]},
        { priority: "Well monitoring and intervention analytics", techInfluence: [
          { area: "5G & IoT", detail: "Downhole and surface IoT sensors for real-time well performance monitoring" },
          { area: "Data & AI", detail: "ML models for well intervention timing and cost optimisation" }
        ]},
        { priority: "OT security for offshore operations", techInfluence: [
          { area: "Cybersecurity", detail: "SCADA security and network segmentation for offshore platform control systems" },
          { area: "5G & IoT", detail: "Secure satellite and 4G/5G connectivity for offshore data transmission" }
        ]},
        { priority: "Digital oilfield standardisation", techInfluence: [
          { area: "Cloud", detail: "Petronas digital oilfield cloud platform adoption for standardised operations" },
          { area: "DevOps", detail: "Standardised digital oilfield application deployment across operated assets" }
        ]},
        { priority: "HSE compliance and environmental reporting", techInfluence: [
          { area: "5G & IoT", detail: "Environmental monitoring IoT for emissions and discharge compliance reporting" },
          { area: "Data & AI", detail: "Automated HSE incident analytics and predictive safety modelling" }
        ]}
      ],
      painPoints: [
        "Declining production from mature fields limiting digital investment ROI timelines",
        "Offshore connectivity constraints with satellite-dependent communication for remote platforms",
        "Petronas parent company technology decisions sometimes misaligned with subsidiary operational priorities",
        "Limited in-house digital capability requiring heavy reliance on Petronas shared services and external vendors",
        "Aging offshore platform infrastructure making IoT sensor retrofit expensive and complex"
      ],
      strategicInvestments: ["Digital oilfield monitoring platform", "SCADA security upgrade programme"],
      direction: "Vestigo is leveraging digital oilfield technology to maximise recovery from mature Petronas-operated fields, using well analytics and real-time monitoring to extend asset life and reduce intervention costs.",
      partnerships: [
        { partner: "Petronas", area: "Upstream Technology Sharing", impact: "High" },
        { partner: "Halliburton", area: "Well Analytics", impact: "Medium" }
      ],
      spendOutlook: { trend: "Stable", delta: "+7-9%", narrative: "Digital oilfield and SCADA security investments drive 7-9% IT growth. As a Petronas subsidiary, technology investments align with group digital roadmap timelines." }
    },
    VANTRIS: {
      topPriorities: [
        { priority: "Debt restructuring and operational recovery", techInfluence: [
          { area: "Cloud", detail: "Cloud-based financial management for restructuring process efficiency" },
          { area: "Data & AI", detail: "Financial analytics for debt restructuring optimisation" }
        ]},
        { priority: "EPC project cost management", techInfluence: [
          { area: "Cloud", detail: "Cloud-hosted project cost tracking and forecasting platform" },
          { area: "DevOps", detail: "Automated project reporting and cost variance analytics" }
        ]},
        { priority: "Legacy system rationalisation", techInfluence: [
          { area: "Cloud", detail: "Migration from fragmented on-premises systems to consolidated cloud platform" },
          { area: "Cybersecurity", detail: "Security hardening during legacy system decommissioning" }
        ]},
        { priority: "Operational transparency and governance", techInfluence: [
          { area: "Data & AI", detail: "Financial reporting analytics for creditor and stakeholder transparency" },
          { area: "DevOps", detail: "Automated governance reporting workflows" }
        ]},
        { priority: "Core team retention and capability", techInfluence: [
          { area: "Cloud", detail: "Cloud collaboration tools for distributed project teams" },
          { area: "Connectivity", detail: "Remote work and collaboration connectivity for retained project staff" }
        ]}
      ],
      painPoints: [
        "Severe financial distress limiting any discretionary technology spending",
        "Key technical talent departures during restructuring losing institutional knowledge",
        "Legacy IT infrastructure reliability issues with no budget for upgrades or maintenance",
        "Vendor relationship strain from payment delays affecting IT support and licensing renewals",
        "Project delivery capability degradation from reduced workforce and technology investment"
      ],
      strategicInvestments: ["Project cost management system", "Legacy IT consolidation"],
      direction: "Vantris is in recovery mode, focusing on operational restructuring and cost management. Technology investments are limited to essential project delivery systems and legacy IT rationalisation.",
      partnerships: [
        { partner: "Sapura Energy", area: "Operational Collaboration", impact: "Low" },
        { partner: "Oracle", area: "ERP Consolidation", impact: "Medium" }
      ],
      spendOutlook: { trend: "Stable", delta: "+3-5%", narrative: "Restructuring constrains IT spend to essential project systems. Legacy consolidation saves costs while the 3-5% growth reflects inflation rather than strategic expansion." }
    }
  };
  for (var k in ins) if (COMPANIES[k]) COMPANIES[k].industryInsights = ins[k];
})();
