(function() {
  var t = {
    AAPL: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "Apple secures devices, Apple Pay, and user privacy across its ecosystem.", initiatives: ["Secure Enclave hardware encryption", "App Store privacy labels"] },
      { category: "Cloud", icon: "cloud", relevance: "High", summary: "iCloud powers sync, backup, and services across Apple devices globally.", initiatives: ["iCloud+ private relay", "Apple ID cloud identity"] },
      { category: "5G & IoT", icon: "signal", relevance: "High", summary: "Apple ships 5G iPhones and HomeKit smart home IoT ecosystem.", initiatives: ["5G modem integration", "HomeKit secure accessories"] },
      { category: "Connectivity", icon: "globe", relevance: "High", summary: "Apple connects billions of devices via ecosystem and services.", initiatives: ["Continuity cross-device sync", "Find My network"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "Apple uses on-device AI for Siri, photos, and Core ML apps.", initiatives: ["Siri natural language", "Neural Engine on-device ML"] },
      { category: "DevOps", icon: "code", relevance: "Medium", summary: "Apple runs App Store, Xcode, and developer tooling at scale.", initiatives: ["TestFlight beta distribution", "Swift Playgrounds"] }
    ],
    MSFT: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "Microsoft Defender and Azure protect enterprise and cloud workloads.", initiatives: ["Microsoft 365 Defender", "Zero Trust security model"] },
      { category: "Cloud", icon: "cloud", relevance: "High", summary: "Azure is a leading enterprise cloud platform for compute and services.", initiatives: ["Azure hybrid cloud", "Azure Arc multi-cloud"] },
      { category: "5G & IoT", icon: "signal", relevance: "High", summary: "Azure IoT Hub connects and manages millions of IoT devices.", initiatives: ["Azure IoT Edge", "Private 5G with Azure"] },
      { category: "Connectivity", icon: "globe", relevance: "High", summary: "Microsoft operates global data centers and network infrastructure.", initiatives: ["Azure ExpressRoute", "Microsoft 365 global delivery"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "Azure AI and Copilot drive enterprise AI and productivity.", initiatives: ["Azure OpenAI Service", "Microsoft Copilot suite"] },
      { category: "DevOps", icon: "code", relevance: "High", summary: "Azure DevOps and GitHub power enterprise CI/CD and collaboration.", initiatives: ["GitHub Actions CI/CD", "Azure DevOps pipelines"] }
    ],
    GOOGL: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "Google protects billions of users with Chrome and enterprise security.", initiatives: ["BeyondCorp zero trust", "Chrome Safe Browsing"] },
      { category: "Cloud", icon: "cloud", relevance: "High", summary: "Google Cloud Platform offers compute, data, and AI services.", initiatives: ["GCP multi-region deployment", "Anthos hybrid cloud"] },
      { category: "5G & IoT", icon: "signal", relevance: "High", summary: "Google powers Android and IoT with edge and cloud connectivity.", initiatives: ["Android Things IoT", "Google Nest smart home"] },
      { category: "Connectivity", icon: "globe", relevance: "High", summary: "Google runs global infrastructure for Search, YouTube, and ads.", initiatives: ["Google Cloud CDN", "Submarine cable investments"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "Gemini and Google AI drive search, ads, and enterprise AI.", initiatives: ["Gemini AI models", "Vertex AI platform"] },
      { category: "DevOps", icon: "code", relevance: "High", summary: "Google Cloud and Firebase enable developer and DevOps workflows.", initiatives: ["Cloud Build CI/CD", "Firebase app hosting"] }
    ],
    AMZN: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "AWS and Amazon protect retail and cloud customer data at scale.", initiatives: ["AWS Shield DDoS protection", "Amazon GuardDuty"] },
      { category: "Cloud", icon: "cloud", relevance: "High", summary: "AWS is the largest cloud provider for compute, storage, and services.", initiatives: ["AWS Lambda serverless", "Amazon EC2 global regions"] },
      { category: "5G & IoT", icon: "signal", relevance: "High", summary: "AWS IoT Core connects devices for retail, logistics, and smart home.", initiatives: ["AWS IoT Greengrass", "Alexa smart devices"] },
      { category: "Connectivity", icon: "globe", relevance: "High", summary: "Amazon operates global fulfillment and cloud network infrastructure.", initiatives: ["Amazon CloudFront CDN", "AWS Direct Connect"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "Amazon uses AI for recommendations, Alexa, and AWS AI services.", initiatives: ["Amazon SageMaker ML", "Personalization algorithms"] },
      { category: "DevOps", icon: "code", relevance: "High", summary: "AWS CodePipeline and tools power Amazon and customer DevOps.", initiatives: ["AWS CodeBuild", "Amazon CodeWhisperer"] }
    ],
    NVDA: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "NVIDIA secures GPU infrastructure for AI and data center workloads.", initiatives: ["NVIDIA Confidential Computing", "GPU firmware security"] },
      { category: "Cloud", icon: "cloud", relevance: "High", summary: "NVIDIA GPUs power AI training and inference in cloud data centers.", initiatives: ["NVIDIA DGX Cloud", "CUDA on cloud instances"] },
      { category: "5G & IoT", icon: "signal", relevance: "High", summary: "NVIDIA Jetson enables edge AI for 5G and IoT applications.", initiatives: ["Jetson edge AI platform", "5G vRAN acceleration"] },
      { category: "Connectivity", icon: "globe", relevance: "High", summary: "NVIDIA InfiniBand and networking connect AI clusters globally.", initiatives: ["NVIDIA Mellanox networking", "NVLink GPU interconnect"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "NVIDIA drives AI with GPUs, CUDA, and enterprise AI software.", initiatives: ["NVIDIA AI Enterprise", "CUDA and cuDNN libraries"] },
      { category: "DevOps", icon: "code", relevance: "Medium", summary: "NVIDIA provides ML tools and containers for AI development.", initiatives: ["NVIDIA NGC catalog", "Triton Inference Server"] }
    ],
    META: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "Meta protects billions of users and ad data across its platforms.", initiatives: ["End-to-end encryption", "Meta security operations"] },
      { category: "Cloud", icon: "cloud", relevance: "High", summary: "Meta runs massive cloud infrastructure for Facebook, Instagram, WhatsApp.", initiatives: ["Meta data center scale", "Open Compute Project"] },
      { category: "5G & IoT", icon: "signal", relevance: "High", summary: "Meta builds VR/AR hardware and connected devices for metaverse.", initiatives: ["Quest VR headsets", "Ray-Ban Meta smart glasses"] },
      { category: "Connectivity", icon: "globe", relevance: "High", summary: "Meta connects billions via social apps and global infrastructure.", initiatives: ["Meta connectivity initiatives", "WhatsApp global reach"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "Meta uses AI for feeds, ads, content moderation, and Llama models.", initiatives: ["Llama open-source LLMs", "AI ad targeting"] },
      { category: "DevOps", icon: "code", relevance: "High", summary: "Meta engineers deploy at scale with internal DevOps and infra.", initiatives: ["Buck build system", "Meta internal tooling"] }
    ],
    CDB: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "CelcomDigi secures network, customer data, and critical telco infra.", initiatives: ["Network security operations", "Customer data protection"] },
      { category: "Cloud", icon: "cloud", relevance: "High", summary: "CelcomDigi uses cloud for BSS, OSS, and digital services.", initiatives: ["Cloud-native core network", "Digital service platforms"] },
      { category: "5G & IoT", icon: "signal", relevance: "High", summary: "CelcomDigi leads Malaysia 5G rollout and IoT connectivity.", initiatives: ["5G network deployment", "IoT and enterprise solutions"] },
      { category: "Connectivity", icon: "globe", relevance: "High", summary: "CelcomDigi provides nationwide mobile and fixed connectivity.", initiatives: ["Merged Celcom-Digi network", "Rural connectivity expansion"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "CelcomDigi uses AI for network optimization and customer analytics.", initiatives: ["Network AI optimization", "Customer experience analytics"] },
      { category: "DevOps", icon: "code", relevance: "High", summary: "CelcomDigi adopts DevOps for agile network and app delivery.", initiatives: ["Telco DevOps pipelines", "Digital service automation"] }
    ],
    TSLA: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "Tesla secures vehicles, fleet data, and energy systems from threats.", initiatives: ["Vehicle cybersecurity", "OTA update security"] },
      { category: "Cloud", icon: "cloud", relevance: "High", summary: "Tesla uses cloud for fleet telemetry, FSD, and energy management.", initiatives: ["Fleet data analytics", "Energy cloud platform"] },
      { category: "5G & IoT", icon: "signal", relevance: "High", summary: "Tesla vehicles are connected IoT nodes with cellular connectivity.", initiatives: ["Connected vehicle platform", "Tesla app connectivity"] },
      { category: "Connectivity", icon: "globe", relevance: "High", summary: "Tesla operates Supercharger network and global vehicle connectivity.", initiatives: ["Supercharger network expansion", "Vehicle connectivity"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "Tesla trains FSD and Autopilot on massive real-world driving data.", initiatives: ["Full Self-Driving neural nets", "Dojo training supercomputer"] },
      { category: "DevOps", icon: "code", relevance: "Medium", summary: "Tesla deploys OTA updates and software to millions of vehicles.", initiatives: ["OTA update pipeline", "Vehicle software releases"] }
    ],
    AFFIN: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "Affin Bank protects customer accounts and banking systems.", initiatives: ["Digital banking security", "Fraud detection systems"] },
      { category: "Cloud", icon: "cloud", relevance: "High", summary: "Affin Bank adopts cloud for core banking and digital services.", initiatives: ["Cloud-based core banking", "Digital channel hosting"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "Affin uses IoT mainly for branch and ATM monitoring.", initiatives: ["Branch sensor monitoring", "ATM connectivity"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "Affin connects branches and digital channels across Malaysia.", initiatives: ["Branch network connectivity", "Mobile banking reach"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "Affin uses AI for credit scoring and customer analytics.", initiatives: ["Credit risk analytics", "Customer segmentation"] },
      { category: "DevOps", icon: "code", relevance: "Medium", summary: "Affin adopts DevOps for faster digital banking releases.", initiatives: ["Agile development", "Digital release pipelines"] }
    ],
    CIMB: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "CIMB secures ASEAN banking operations and digital channels.", initiatives: ["Regional security operations", "CIMB Clicks protection"] },
      { category: "Cloud", icon: "cloud", relevance: "High", summary: "CIMB uses cloud for digital banking across ASEAN markets.", initiatives: ["Cloud digital banking", "ASEAN platform hosting"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "CIMB uses IoT for branch and ATM network monitoring.", initiatives: ["Branch IoT sensors", "ATM network monitoring"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "CIMB connects branches and digital services across ASEAN.", initiatives: ["ASEAN network connectivity", "Cross-border payments"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "CIMB uses AI for risk, fraud, and customer personalization.", initiatives: ["AI fraud detection", "Personalized banking"] },
      { category: "DevOps", icon: "code", relevance: "Medium", summary: "CIMB runs DevOps for digital and mobile banking delivery.", initiatives: ["Digital banking DevOps", "Mobile app releases"] }
    ],
    MAYBANK: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "Maybank protects Malaysia's largest bank and regional operations. DDoS mitigation critical for BNM zero-downtime compliance.", initiatives: ["Enterprise security framework", "Maybank2u protection", "DDoS mitigation & traffic scrubbing"] },
      { category: "Cloud", icon: "cloud", relevance: "High", summary: "MYR 1B Azure migration underway. Active-active multi-AZ architecture needed to resolve recurring MAE/Maybank2u outages.", initiatives: ["Azure active-active failover architecture", "Cloud digital platform", "Regional cloud deployment"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "Maybank uses IoT for branch and facility management.", initiatives: ["Smart branch IoT", "Facility monitoring"] },
      { category: "Connectivity", icon: "globe", relevance: "High", summary: "Zero-downtime mandate from BNM makes redundant, resilient connectivity critical. Recurring app outages linked to network and infrastructure failures.", initiatives: ["Redundant multi-path SD-WAN for core banking", "Always-on API connectivity for MAE super-app", "ASEAN branch network resilience"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "Maybank uses AI for risk, AML, and customer insights.", initiatives: ["AI risk management", "Customer analytics platform"] },
      { category: "DevOps", icon: "code", relevance: "High", summary: "Zero-downtime deployments essential — faulty releases have contributed to MAE outages. Blue-green and canary release practices needed.", initiatives: ["Zero-downtime deployment pipelines", "Automated rollback & canary releases", "SRE and observability platform"] }
    ],
    PBBANK: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "Public Bank secures retail and commercial banking systems.", initiatives: ["PB engage security", "Core banking protection"] },
      { category: "Cloud", icon: "cloud", relevance: "High", summary: "Public Bank uses cloud for digital and core banking services.", initiatives: ["Cloud core banking", "Digital service hosting"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "Public Bank uses IoT for branch and ATM monitoring.", initiatives: ["Branch IoT", "ATM network monitoring"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "Public Bank connects branches and digital channels in Malaysia.", initiatives: ["Branch network", "Mobile banking connectivity"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "Public Bank uses AI for credit risk and customer analytics.", initiatives: ["Credit scoring AI", "Customer analytics"] },
      { category: "DevOps", icon: "code", relevance: "Medium", summary: "Public Bank adopts DevOps for digital banking releases.", initiatives: ["Digital release pipeline", "Agile development"] }
    ],
    BKRAKYAT: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "Bank Rakyat secures cooperative banking and member data.", initiatives: ["Cooperative banking security", "Member data protection"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "Bank Rakyat adopts cloud for digital cooperative services.", initiatives: ["Cloud digital banking", "Cooperative platform hosting"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "Bank Rakyat uses IoT for branch and facility monitoring.", initiatives: ["Branch monitoring", "Facility IoT"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "Bank Rakyat connects branches and members across Malaysia.", initiatives: ["Branch connectivity", "Member digital access"] },
      { category: "Data & AI", icon: "brain", relevance: "Medium", summary: "Bank Rakyat uses data analytics for cooperative operations.", initiatives: ["Member analytics", "Operational analytics"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "Bank Rakyat adopts DevOps for digital service delivery.", initiatives: ["Digital delivery", "System updates"] }
    ],
    BSN: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "BSN secures government savings bank and citizen accounts.", initiatives: ["Savings account security", "Government data protection"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "BSN adopts cloud for digital savings and banking services.", initiatives: ["Cloud digital banking", "Savings platform hosting"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "BSN uses IoT for branch and ATM monitoring.", initiatives: ["Branch IoT", "ATM monitoring"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "BSN connects branches and digital channels nationwide.", initiatives: ["Nationwide branch network", "Digital channel reach"] },
      { category: "Data & AI", icon: "brain", relevance: "Medium", summary: "BSN uses analytics for savings and customer insights.", initiatives: ["Savings analytics", "Customer insights"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "BSN adopts DevOps for digital banking updates.", initiatives: ["Digital updates", "System releases"] }
    ],
    MBSB: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "MBSB secures development finance and housing loan systems.", initiatives: ["Loan system security", "Customer data protection"] },
      { category: "Cloud", icon: "cloud", relevance: "High", summary: "MBSB uses cloud for housing finance and digital services.", initiatives: ["Cloud loan platform", "Digital mortgage services"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "MBSB uses IoT for branch and property monitoring.", initiatives: ["Branch monitoring", "Property IoT"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "MBSB connects branches and digital channels for housing finance.", initiatives: ["Branch connectivity", "Digital mortgage access"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "MBSB uses AI for credit assessment and housing finance risk.", initiatives: ["Mortgage risk AI", "Credit assessment"] },
      { category: "DevOps", icon: "code", relevance: "Medium", summary: "MBSB adopts DevOps for digital finance delivery.", initiatives: ["Digital delivery pipeline", "Agile releases"] }
    ],
    BNM: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "BNM secures financial system, payments, and regulatory data.", initiatives: ["Financial sector cybersecurity", "Payment system security"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "BNM uses cloud for regulatory and supervisory systems.", initiatives: ["Regulatory cloud systems", "Supervisory platform"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "BNM has limited direct 5G/IoT use as central bank.", initiatives: ["Infrastructure monitoring", "Building systems"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "BNM connects with banks and financial institutions.", initiatives: ["Interbank connectivity", "Regulatory reporting links"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "BNM uses AI for supervision, risk, and economic analysis.", initiatives: ["Supervisory analytics", "Economic forecasting"] },
      { category: "DevOps", icon: "code", relevance: "Medium", summary: "BNM adopts DevOps for regulatory system delivery.", initiatives: ["Regulatory system DevOps", "Payment system updates"] }
    ],
    PNB: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "PNB secures asset management and unit trust systems.", initiatives: ["Investment data security", "Unit trust protection"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "PNB uses cloud for portfolio and digital asset management.", initiatives: ["Cloud portfolio systems", "Digital platform hosting"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "PNB has limited 5G/IoT use in asset management.", initiatives: ["Office monitoring", "Facility systems"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "PNB connects with markets and unit holders digitally.", initiatives: ["Market data connectivity", "Unit holder digital access"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "PNB uses AI for investment analysis and portfolio optimization.", initiatives: ["Investment analytics AI", "Portfolio optimization"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "PNB adopts DevOps for digital platform delivery.", initiatives: ["Platform updates", "Digital delivery"] }
    ],
    KHAZANAH: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "Khazanah secures sovereign wealth fund and strategic investments.", initiatives: ["Investment data security", "Strategic asset protection"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "Khazanah uses cloud for investment and portfolio management.", initiatives: ["Cloud investment systems", "Portfolio platform"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "Khazanah has limited direct 5G/IoT in sovereign investing.", initiatives: ["Office infrastructure", "Facility monitoring"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "Khazanah connects with global markets and portfolio companies.", initiatives: ["Global market connectivity", "Portfolio company links"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "Khazanah uses AI for investment and strategic analysis.", initiatives: ["Investment AI analytics", "Strategic forecasting"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "Khazanah adopts DevOps for internal platform delivery.", initiatives: ["Internal platform updates", "System delivery"] }
    ],
    TABUNGHAJI: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "Tabung Haji secures pilgrimage fund and depositor data.", initiatives: ["Depositor data protection", "Fund security"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "Tabung Haji uses cloud for digital pilgrimage services.", initiatives: ["Cloud digital services", "Pilgrimage platform hosting"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "Tabung Haji has limited 5G/IoT use in fund operations.", initiatives: ["Branch monitoring", "Facility systems"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "Tabung Haji connects branches and depositors nationwide.", initiatives: ["Branch connectivity", "Depositor digital access"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "Tabung Haji uses AI for fund management and analytics.", initiatives: ["Fund analytics AI", "Depositor insights"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "Tabung Haji adopts DevOps for digital service delivery.", initiatives: ["Digital service updates", "Platform delivery"] }
    ]
  };
  for (var k in t) if (COMPANIES[k]) COMPANIES[k].techTrends = t[k];

  var ict = {
    AAPL: { total: "USD 31.4B", pctRevenue: "8.1%", yoy: "+5%", focusAreas: ["Apple Intelligence", "Silicon R&D", "Services Platform"], source: "reported" },
    MSFT: { total: "USD 80B", pctRevenue: "29.7%", yoy: "+53%", focusAreas: ["Azure AI", "Data Centers", "Copilot"], source: "reported" },
    GOOGL: { total: "USD 75B", pctRevenue: "19.3%", yoy: "+43%", focusAreas: ["AI Infrastructure", "Cloud TPUs", "Gemini"], source: "reported" },
    AMZN: { total: "USD 100B", pctRevenue: "15.7%", yoy: "+30%", focusAreas: ["AWS Expansion", "AI/ML", "Logistics Tech"], source: "reported" },
    NVDA: { total: "USD 12.2B", pctRevenue: "9.5%", yoy: "+45%", focusAreas: ["GPU R&D", "AI Platforms", "Data Center"], source: "reported" },
    META: { total: "USD 65B", pctRevenue: "38.2%", yoy: "+64%", focusAreas: ["AI Infrastructure", "Reality Labs", "Data Centers"], source: "reported" },
    CDB: { total: "MYR 1.6B", pctRevenue: "12.1%", yoy: "+34%", focusAreas: ["5G Network", "IT Integration", "Digital Platforms"], source: "reported" },
    TSLA: { total: "USD 11.3B", pctRevenue: "11.6%", yoy: "+3%", focusAreas: ["Autonomous Driving", "AI Training", "Megafactories"], source: "reported" },
    AFFIN: { total: "MYR 280M", pctRevenue: "7.2%", yoy: "+8%", focusAreas: ["Digital Banking", "Core Banking", "Cybersecurity"], source: "estimated" },
    CIMB: { total: "MYR 1.8B", pctRevenue: "7.5%", yoy: "+12%", focusAreas: ["GenAI Chatbot", "Digital SME", "Cloud Migration"], source: "estimated" },
    MAYBANK: { total: "MYR 2.1B", pctRevenue: "6.8%", yoy: "+15%", focusAreas: ["Microsoft Azure", "MAE Platform", "AI Analytics"], source: "estimated" },
    PBBANK: { total: "MYR 1.2B", pctRevenue: "5.8%", yoy: "+10%", focusAreas: ["Mobile Banking", "Process Automation", "Data Analytics"], source: "estimated" },
    BKRAKYAT: { total: "MYR 180M", pctRevenue: "5.5%", yoy: "+7%", focusAreas: ["Core Banking", "Mobile Services", "Cybersecurity"], source: "estimated" },
    BSN: { total: "MYR 120M", pctRevenue: "6.0%", yoy: "+9%", focusAreas: ["Digital Services", "Cloud Infra", "Financial Inclusion"], source: "estimated" },
    MBSB: { total: "MYR 150M", pctRevenue: "6.5%", yoy: "+11%", focusAreas: ["Digital Mortgage", "Core Systems", "Data Platform"], source: "estimated" },
    BNM: { total: "MYR 450M", pctRevenue: "N/A", yoy: "+10%", focusAreas: ["RENTAS/SSPN", "Cybersecurity", "Regulatory Tech"], source: "estimated" },
    PNB: { total: "MYR 350M", pctRevenue: "N/A", yoy: "+12%", focusAreas: ["Investment Analytics", "Digital Platforms", "Cybersecurity"], source: "estimated" },
    KHAZANAH: { total: "MYR 200M", pctRevenue: "N/A", yoy: "+15%", focusAreas: ["Portfolio Analytics", "Cloud Infra", "AI/ML Models"], source: "estimated" },
    TABUNGHAJI: { total: "MYR 180M", pctRevenue: "N/A", yoy: "+8%", focusAreas: ["Hajj Systems", "Fund Analytics", "Digital Services"], source: "estimated" }
  };
  for (var k in ict) if (COMPANIES[k]) COMPANIES[k].ictSpend = ict[k];

  var ins = {
    AAPL: {
      topPriorities: [
        { priority: "Apple Intelligence AI rollout across all products", techInfluence: [
          { area: "Data & AI", detail: "On-device and cloud AI inference requires new ML frameworks and model deployment pipelines" },
          { area: "Cloud", detail: "Private Cloud Compute architecture for server-side AI processing at scale" }
        ]},
        { priority: "Services ecosystem expansion to 1B+ paid subscribers", techInfluence: [
          { area: "Cloud", detail: "iCloud+, Apple TV+, and App Store services require scalable multi-region cloud infrastructure" },
          { area: "Connectivity", detail: "eSIM and satellite connectivity (Globalstar) deepen services reach beyond traditional networks" }
        ]},
        { priority: "In-house 5G modem development to replace Qualcomm", techInfluence: [
          { area: "5G & IoT", detail: "Custom 5G modem integration into Apple silicon for iPhone and future IoT devices" },
          { area: "DevOps", detail: "Modem firmware CI/CD pipelines and field testing automation across global carrier networks" }
        ]},
        { priority: "Privacy and security as competitive differentiator", techInfluence: [
          { area: "Cybersecurity", detail: "End-to-end encryption expansion, passkeys, and on-device processing to minimize data exposure" },
          { area: "Data & AI", detail: "Differential privacy and federated learning to deliver AI without compromising user data" }
        ]},
        { priority: "Spatial computing and Vision Pro ecosystem growth", techInfluence: [
          { area: "Connectivity", detail: "Ultra-low latency streaming and Wi-Fi 6E/7 for immersive spatial computing experiences" },
          { area: "DevOps", detail: "visionOS developer tools and spatial app CI/CD require new testing infrastructure" }
        ]}
      ],
      painPoints: [
        "Regulatory antitrust pressure (EU DMA, US DOJ) forcing App Store and ecosystem openness that complicates security controls",
        "China revenue dependency (~17%) amid US-China tech decoupling and local AI competitor pressure from Huawei/Xiaomi",
        "Apple Intelligence availability limited to newer devices, fragmenting the AI experience across 2B+ active devices",
        "5G modem development delays pushing full Qualcomm replacement to 2027, maintaining costly licensing dependency",
        "Services growth deceleration as subscriber acquisition costs rise in saturated markets"
      ],
      strategicInvestments: ["USD 500B US investment over 4 years (announced Feb 2025)", "New Houston server manufacturing facility for Apple Intelligence"],
      direction: "Apple is pivoting to an AI-first strategy with Apple Intelligence while deepening its services flywheel. The shift to in-house silicon and 5G modems will vertically integrate the full stack.",
      partnerships: [
        { partner: "OpenAI", area: "Siri AI Integration", impact: "High" },
        { partner: "TSMC", area: "Advanced Chip Fabrication", impact: "High" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+40-50%", narrative: "Apple Intelligence rollout requires massive data center build-out and in-house server manufacturing, driving a ~50% capex surge in FY2025 with sustained multi-year growth in AI infrastructure." }
    },
    MSFT: {
      topPriorities: [
        { priority: "Copilot AI integration across all Microsoft 365 products", techInfluence: [
          { area: "Data & AI", detail: "Enterprise-wide GPT-4 deployment in Word, Excel, Teams, and Power Platform requires massive AI inference capacity" },
          { area: "Cloud", detail: "Azure OpenAI Service scaling to support millions of Copilot enterprise users globally" }
        ]},
        { priority: "Azure cloud market share expansion vs AWS", techInfluence: [
          { area: "Cloud", detail: "Sovereign cloud regions, hybrid Azure Arc, and multi-cloud interoperability to capture government and regulated workloads" },
          { area: "DevOps", detail: "GitHub Copilot and Azure DevOps platform expansion to lock in developer ecosystem" }
        ]},
        { priority: "Enterprise security leadership with Zero Trust", techInfluence: [
          { area: "Cybersecurity", detail: "Microsoft Sentinel, Defender XDR, and Entra ID powering end-to-end Zero Trust architecture" },
          { area: "Data & AI", detail: "Security Copilot using AI to automate threat hunting and incident response" }
        ]},
        { priority: "Sovereign AI and data residency for regulated markets", techInfluence: [
          { area: "Cloud", detail: "Sovereign cloud deployments in Malaysia, Indonesia, Thailand with in-country data residency" },
          { area: "Cybersecurity", detail: "Compliance with local data protection laws (PDPA) requires enhanced encryption and access controls" }
        ]},
        { priority: "LinkedIn and gaming ecosystem monetisation via AI", techInfluence: [
          { area: "Data & AI", detail: "AI-driven recruitment matching, content recommendations, and gaming NPC intelligence" },
          { area: "Connectivity", detail: "Xbox Cloud Gaming requires edge compute and low-latency global network infrastructure" }
        ]}
      ],
      painPoints: [
        "Massive capital intensity with USD 80B FY2025 capex creating pressure to demonstrate ROI on AI infrastructure",
        "Cybersecurity trust deficit after Storm-0558 and Midnight Blizzard breaches forcing Secure Future Initiative overhaul",
        "OpenAI dependency risk as the partnership faces governance instability and potential competitive divergence",
        "Enterprise Copilot adoption slower than expected with customers questioning per-seat pricing vs. productivity gains",
        "Regulatory scrutiny in EU and US over bundling practices and Activision acquisition integration"
      ],
      strategicInvestments: ["USD 80B in AI data centers in FY2025", "OpenAI partnership with multi-billion dollar commitment"],
      direction: "Microsoft is betting its future on AI-powered enterprise productivity through Copilot and Azure AI. Cloud and AI revenue now drive majority of growth, with the OpenAI partnership as a key differentiator.",
      partnerships: [
        { partner: "OpenAI", area: "GPT/AI Models", impact: "High" },
        { partner: "NVIDIA", area: "GPU Infrastructure", impact: "High" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+50-55%", narrative: "Azure AI demand is driving an unprecedented 53% capex increase to USD 80B in FY2025. Enterprise Copilot adoption and sovereign cloud deployments across Asia will sustain double-digit IT spend growth." }
    },
    GOOGL: {
      topPriorities: [
        { priority: "Gemini AI model leadership across Search, Cloud, and devices", techInfluence: [
          { area: "Data & AI", detail: "Gemini Ultra/Pro/Nano models deployed across Search, Workspace, and Android requiring multi-modal AI infrastructure" },
          { area: "Cloud", detail: "Google Cloud AI Platform and Vertex AI scaling to serve enterprise Gemini API demand" }
        ]},
        { priority: "Google Cloud Platform growth to profitability", techInfluence: [
          { area: "Cloud", detail: "GCP expanding data center footprint and sovereign cloud offerings to compete for enterprise workloads" },
          { area: "Cybersecurity", detail: "Mandiant and Chronicle SIEM integration making GCP the security-first cloud platform" }
        ]},
        { priority: "YouTube and advertising AI optimisation", techInfluence: [
          { area: "Data & AI", detail: "AI-generated ad creative, Smart Bidding, and Performance Max automating ad operations at scale" },
          { area: "Connectivity", detail: "YouTube requires CDN and edge network optimization for 4K/8K streaming globally" }
        ]},
        { priority: "Custom TPU silicon leadership for cost-efficient AI", techInfluence: [
          { area: "Data & AI", detail: "Trillium TPU v6 reducing AI training/inference costs to compete with NVIDIA GPU pricing" },
          { area: "DevOps", detail: "JAX and TensorFlow framework optimisation for TPU requires specialised MLOps tooling" }
        ]},
        { priority: "Android and Pixel on-device AI ecosystem", techInfluence: [
          { area: "5G & IoT", detail: "Pixel devices as AI-first smartphones with on-device Gemini Nano processing over 5G networks" },
          { area: "Cybersecurity", detail: "Titan security chip and on-device AI processing to protect user data without cloud exposure" }
        ]}
      ],
      painPoints: [
        "US DOJ antitrust ruling finding Google a monopoly in Search threatens core advertising revenue model",
        "Enterprise cloud market share gap vs AWS and Azure despite strong AI positioning with Gemini",
        "High AI infrastructure capital intensity (USD 75B capex) with uncertain timeline to profitability for Gemini API services",
        "Creator and advertiser concerns about AI-generated content cannibalising organic Search traffic and YouTube views",
        "Regulatory fragmentation across EU (DSA/DMA), US, and APAC creating complex compliance requirements"
      ],
      strategicInvestments: ["USD 75B capex in 2025 for AI infrastructure", "Custom TPU chip development (Trillium)"],
      direction: "Alphabet is reorganising around AI with Gemini at the core, transforming Search, Cloud, and Ads simultaneously. GCP is now profitable and growing faster than AWS, making cloud a second growth engine beyond advertising.",
      partnerships: [
        { partner: "NVIDIA", area: "GPU Clusters", impact: "High" },
        { partner: "Samsung", area: "Gemini on Galaxy devices", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+43%", narrative: "Gemini model training and GCP expansion are driving a 43% capex surge to USD 75B in 2025. Custom TPU development and sovereign AI cloud deployments will maintain elevated spend through 2027." }
    },
    AMZN: {
      topPriorities: [
        { priority: "AWS AI services and custom chip leadership", techInfluence: [
          { area: "Cloud", detail: "Trainium and Graviton custom chips reduce AWS customer costs and differentiate from Azure/GCP" },
          { area: "Data & AI", detail: "Amazon Bedrock GenAI platform enabling enterprise AI app development on AWS" }
        ]},
        { priority: "Logistics and fulfilment automation at scale", techInfluence: [
          { area: "Data & AI", detail: "AI-powered demand forecasting, warehouse robotics, and autonomous last-mile delivery" },
          { area: "5G & IoT", detail: "Warehouse IoT sensors and autonomous delivery robots requiring private 5G network connectivity" }
        ]},
        { priority: "Project Kuiper satellite broadband constellation", techInfluence: [
          { area: "Connectivity", detail: "3,236-satellite LEO constellation to provide global broadband rivalling Starlink" },
          { area: "5G & IoT", detail: "Satellite-to-cellular connectivity for rural IoT and enterprise backhaul" }
        ]},
        { priority: "Advertising and streaming AI personalisation", techInfluence: [
          { area: "Data & AI", detail: "AI-driven ad targeting on Prime Video and retail media network optimisation" },
          { area: "Cloud", detail: "Real-time ML inference for billions of daily ad decisions across Amazon properties" }
        ]},
        { priority: "Healthcare and pharmacy digital platform expansion", techInfluence: [
          { area: "Cloud", detail: "Amazon HealthLake and One Medical platform leveraging AWS for health data management" },
          { area: "Cybersecurity", detail: "HIPAA-compliant health data security and patient privacy controls" }
        ]}
      ],
      painPoints: [
        "AWS growth deceleration as hyperscaler market matures and customers optimise cloud spend",
        "Massive capex cycle (USD 100B+) creating investor pressure for faster AI revenue monetisation",
        "Regulatory antitrust scrutiny from FTC on marketplace practices and potential AWS spin-off discussions",
        "Labour relations challenges with warehouse automation displacing workers while new tech roles go unfilled",
        "Project Kuiper satellite launch timeline delays vs Starlink's established market position"
      ],
      strategicInvestments: ["USD 100B+ capex in 2025 primarily for AWS", "Project Kuiper satellite broadband constellation"],
      direction: "Amazon is doubling down on AWS as the AI cloud platform of choice with custom silicon and Bedrock, while simultaneously automating its logistics network with robotics and AI to structurally reduce costs.",
      partnerships: [
        { partner: "Anthropic", area: "Claude AI on AWS", impact: "High" },
        { partner: "NVIDIA", area: "GPU Cloud Instances", impact: "High" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+30%", narrative: "AWS AI demand and Project Kuiper satellite constellation are driving capex above USD 100B in 2025, a 30% increase. Enterprise GenAI adoption on Bedrock will sustain elevated infrastructure investment." }
    },
    NVDA: {
      topPriorities: [
        { priority: "Data center GPU dominance with Blackwell architecture", techInfluence: [
          { area: "Cloud", detail: "Blackwell B200/GB200 GPUs are the backbone of every major cloud provider's AI infrastructure" },
          { area: "Data & AI", detail: "GPU compute defines AI model training speed and inference cost for global AI workloads" }
        ]},
        { priority: "AI software ecosystem expansion (CUDA, NIM, Omniverse)", techInfluence: [
          { area: "DevOps", detail: "CUDA toolkit and NIM microservices create sticky developer ecosystem and MLOps workflows" },
          { area: "Data & AI", detail: "Omniverse digital twin platform for industrial AI simulation and robotics development" }
        ]},
        { priority: "Automotive and robotics AI platforms", techInfluence: [
          { area: "5G & IoT", detail: "DRIVE autonomous vehicle platform and Isaac robotics require real-time 5G edge connectivity" },
          { area: "Data & AI", detail: "Autonomous driving and robotics AI training on NVIDIA DGX infrastructure" }
        ]},
        { priority: "Networking and interconnect leadership (Mellanox/InfiniBand)", techInfluence: [
          { area: "Connectivity", detail: "InfiniBand and Spectrum-X networking critical for GPU cluster performance at scale" },
          { area: "Cloud", detail: "Data center networking determines AI training efficiency across multi-GPU clusters" }
        ]},
        { priority: "Sovereign AI partnerships with governments globally", techInfluence: [
          { area: "Cloud", detail: "Sovereign AI cloud deployments with NVIDIA DGX Cloud across 20+ countries" },
          { area: "Cybersecurity", detail: "Sovereign AI requires in-country data processing with national security-grade protections" }
        ]}
      ],
      painPoints: [
        "US export controls restricting GPU sales to China, Middle East, reducing total addressable market by 15-20%",
        "Customer concentration risk with hyperscalers (Microsoft, Google, Meta, Amazon) representing majority of revenue",
        "Supply chain constraints on CoWoS advanced packaging limiting Blackwell GPU production ramp",
        "Emerging custom AI chip competition from Google TPU, Amazon Trainium, Microsoft Maia threatening long-term margins",
        "Geopolitical risk from Taiwan semiconductor dependency through TSMC fabrication"
      ],
      strategicInvestments: ["USD 12.2B R&D in FY2025 for next-gen GPU architectures", "Sovereign AI partnerships with governments globally"],
      direction: "NVIDIA has become the essential infrastructure provider for the AI era. The transition from GPU hardware sales to a full-stack AI platform (hardware + software + services) deepens customer lock-in and expands TAM.",
      partnerships: [
        { partner: "Microsoft", area: "Azure AI Infrastructure", impact: "High" },
        { partner: "Oracle", area: "OCI GPU Cloud", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+45%", narrative: "Blackwell GPU ramp and sovereign AI demand are driving R&D spend up 45%. As NVIDIA expands into AI software, networking (Mellanox), and robotics, total tech investment will continue compounding." }
    },
    META: {
      topPriorities: [
        { priority: "Open-source Llama AI model leadership", techInfluence: [
          { area: "Data & AI", detail: "Llama 3/4 model training at scale driving demand for massive GPU clusters and training infrastructure" },
          { area: "Cloud", detail: "Meta's AI Research SuperCluster and distributed training infrastructure rival cloud providers" }
        ]},
        { priority: "AI-driven advertising revenue optimisation", techInfluence: [
          { area: "Data & AI", detail: "Advantage+ AI ad system automating creative, targeting, and bidding across 3.3B daily active users" },
          { area: "DevOps", detail: "Continuous ML model deployment and A/B testing infrastructure for ad ranking algorithms" }
        ]},
        { priority: "Reality Labs and metaverse long-term bet", techInfluence: [
          { area: "5G & IoT", detail: "Quest VR headsets and Ray-Ban Meta smart glasses require 5G/Wi-Fi connectivity for AR experiences" },
          { area: "Connectivity", detail: "Metaverse social experiences demand ultra-low latency networking and edge compute" }
        ]},
        { priority: "AI agents and business messaging monetisation", techInfluence: [
          { area: "Data & AI", detail: "AI chatbots for WhatsApp Business, Messenger, and Instagram driving commerce automation" },
          { area: "Cloud", detail: "Billions of daily AI agent interactions require scalable inference infrastructure" }
        ]},
        { priority: "Subsea cable and network infrastructure investments", techInfluence: [
          { area: "Connectivity", detail: "40,000 km subsea cable network connecting data centers globally for AI training" },
          { area: "Cybersecurity", detail: "Subsea cable security and DDoS protection for Meta's global network backbone" }
        ]}
      ],
      painPoints: [
        "Reality Labs losses exceeding USD 16B annually with uncertain metaverse ROI timeline",
        "Regulatory challenges from EU DSA/DMA requiring algorithmic transparency and data portability",
        "Apple ATT privacy changes continuing to impact advertising signal quality and measurement",
        "AI-generated misinformation and content moderation challenges at 3.3B user scale",
        "Capital intensity reaching USD 65B creating investor concern about sustainable returns on AI spend"
      ],
      strategicInvestments: ["USD 60-65B capex in 2025 for AI infrastructure", "1GW+ data center campus expansions"],
      direction: "Meta is making the largest AI infrastructure bet relative to revenue among all tech giants, banking on AI to transform advertising efficiency and create new revenue streams through AI agents and smart glasses.",
      partnerships: [
        { partner: "Qualcomm", area: "On-device AI for Ray-Ban Meta", impact: "Medium" },
        { partner: "EssilorLuxottica", area: "Smart Glasses Hardware", impact: "High" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+60-65%", narrative: "Meta's AI infrastructure spend is surging 64% to USD 65B in 2025, the highest % of revenue among big tech. Llama model training, 1GW data centers, and Reality Labs R&D will keep spend on steep upward trajectory." }
    },
    CDB: {
      topPriorities: [
        { priority: "5G network monetisation as Malaysia's largest telco", techInfluence: [
          { area: "5G & IoT", detail: "5G enterprise services including network slicing, private 5G, and massive IoT for manufacturing" },
          { area: "Connectivity", detail: "Nationwide 4G/5G dual-layer network optimisation to support 20M+ mobile subscribers" }
        ]},
        { priority: "Post-merger IT/billing integration completion", techInfluence: [
          { area: "Cloud", detail: "Unified cloud-native CRM and billing stack replacing legacy Celcom and Digi systems" },
          { area: "DevOps", detail: "Microservices migration and CI/CD pipeline unification for post-merger IT consolidation" }
        ]},
        { priority: "Enterprise and B2B digital services growth", techInfluence: [
          { area: "Cloud", detail: "Managed cloud, SD-WAN, and UCaaS services for Malaysian enterprise market" },
          { area: "Cybersecurity", detail: "Managed security services (SOC-as-a-service) as enterprise B2B revenue stream" }
        ]},
        { priority: "Data monetisation and AI-powered customer experience", techInfluence: [
          { area: "Data & AI", detail: "AI churn prediction, personalised offers, and network experience optimisation using subscriber data" },
          { area: "DevOps", detail: "Real-time data pipeline automation for 20M+ subscriber analytics" }
        ]},
        { priority: "Fixed broadband expansion to capture converged market", techInfluence: [
          { area: "Connectivity", detail: "Fibre and 5G FWA broadband competing with TM Unifi for home internet market" },
          { area: "5G & IoT", detail: "5G Fixed Wireless Access as cost-effective last-mile broadband alternative" }
        ]}
      ],
      painPoints: [
        "Post-merger IT integration delays with legacy Celcom/Digi billing systems still not fully unified",
        "5G monetisation challenges with limited enterprise use cases and consumer willingness to pay premium",
        "ARPU pressure from aggressive MVNOs and unlimited prepaid plans eroding blended revenue per user",
        "DNB 5G wholesale model creating dependency on a single wholesale provider for 5G coverage",
        "Talent shortage in 5G engineering, cloud architecture, and cybersecurity in Malaysia's competitive tech labour market"
      ],
      strategicInvestments: ["MYR 1.6B capex in FY2025 at 12.1% intensity", "New unified billing and CRM platform"],
      direction: "CelcomDigi is in the final phase of its post-merger integration, targeting MYR 700-800M in annual synergies by 2027. The focus is shifting from integration to growth, with 5G enterprise services and digital platforms as the next revenue frontier.",
      partnerships: [
        { partner: "Ericsson", area: "5G Network Modernisation", impact: "High" },
        { partner: "Huawei", area: "Network Equipment", impact: "High" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+10-15%", narrative: "Post-merger integration capex peaked in FY2025, but 5G enterprise services and new digital platform investments will sustain elevated tech spend. The unified CRM/billing platform unlocks further enterprise growth requiring continued IT investment." }
    },
    TSLA: {
      topPriorities: [
        { priority: "Full Self-Driving (FSD) autonomous capability", techInfluence: [
          { area: "Data & AI", detail: "Neural network training on billions of miles of driving data requiring massive GPU compute" },
          { area: "Cloud", detail: "Dojo supercomputer and cloud infrastructure for FSD model training and OTA deployment" }
        ]},
        { priority: "Optimus humanoid robot commercialisation", techInfluence: [
          { area: "Data & AI", detail: "Humanoid AI requiring real-time perception, manipulation, and navigation neural networks" },
          { area: "5G & IoT", detail: "Factory robots need low-latency 5G connectivity for real-time coordination and control" }
        ]},
        { priority: "Next-gen affordable EV platform", techInfluence: [
          { area: "DevOps", detail: "Software-defined vehicle requiring continuous OTA update pipeline and testing automation" },
          { area: "Connectivity", detail: "Always-connected vehicles with built-in cellular, Wi-Fi, and V2X communication" }
        ]},
        { priority: "Energy storage and solar grid integration", techInfluence: [
          { area: "5G & IoT", detail: "Megapack grid storage systems requiring IoT monitoring and remote management" },
          { area: "Data & AI", detail: "AI-optimised energy trading and grid balancing for Autobidder platform" }
        ]},
        { priority: "Robotaxi fleet network launch", techInfluence: [
          { area: "Connectivity", detail: "Autonomous robotaxi fleet management requiring real-time cellular connectivity and dispatch systems" },
          { area: "Cybersecurity", detail: "Autonomous vehicle cybersecurity to prevent remote hijacking and ensure passenger safety" }
        ]}
      ],
      painPoints: [
        "FSD regulatory approval uncertainty across jurisdictions delaying autonomous ride-hail network launch",
        "EV demand growth deceleration amid rising interest rates and consumer range anxiety",
        "Brand and demand impact from CEO political activities and executive distraction",
        "Chinese EV competition from BYD intensifying in Europe and Southeast Asia on price and features",
        "Manufacturing ramp challenges for Cybertruck and next-gen affordable platform"
      ],
      strategicInvestments: ["USD 11.3B capex in FY2024 for Megafactories and AI training", "Dojo supercomputer for FSD neural net training"],
      direction: "Tesla is transforming from a car manufacturer into an AI and robotics company. FSD and Optimus represent the long-term value thesis, while the affordable EV platform addresses near-term volume growth.",
      partnerships: [
        { partner: "NVIDIA", area: "AI Training GPUs", impact: "High" },
        { partner: "Samsung SDI", area: "Battery Cells", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+15-20%", narrative: "FSD compute requirements and Optimus robot development are driving AI infrastructure spend higher. New Megafactory construction in Mexico and India will add further capex pressure through 2027." }
    },
    AFFIN: {
      topPriorities: [
        { priority: "AFFIN 2030 digital banking transformation", techInfluence: [
          { area: "Cloud", detail: "Core banking migration to cloud-native architecture under AFFIN 2030 roadmap" },
          { area: "DevOps", detail: "Agile development and CI/CD adoption to accelerate digital product delivery" }
        ]},
        { priority: "SME lending digitalisation", techInfluence: [
          { area: "Data & AI", detail: "AI credit scoring and automated loan origination for faster SME loan approvals" },
          { area: "Cloud", detail: "Cloud-based lending platform (Mambu) for scalable SME product delivery" }
        ]},
        { priority: "Cost efficiency through process automation", techInfluence: [
          { area: "Data & AI", detail: "RPA and intelligent document processing to automate back-office operations" },
          { area: "DevOps", detail: "Process automation pipelines reducing manual intervention in banking workflows" }
        ]},
        { priority: "Cybersecurity posture strengthening under BNM guidelines", techInfluence: [
          { area: "Cybersecurity", detail: "BNM RMiT compliance requiring enhanced SOC capabilities and threat monitoring" },
          { area: "Cloud", detail: "Cloud security controls and data loss prevention for banking data" }
        ]},
        { priority: "Digital payments and open banking readiness", techInfluence: [
          { area: "Connectivity", detail: "API gateway infrastructure for open banking and DuitNow integration" },
          { area: "5G & IoT", detail: "Contactless and IoT payment terminals across merchant network" }
        ]}
      ],
      painPoints: [
        "Small market share (~3%) limiting technology investment scale vs larger peers like Maybank and CIMB",
        "Legacy core banking system creating integration bottlenecks for new digital products",
        "Cybersecurity talent shortage competing with larger banks offering better compensation packages",
        "Low digital adoption rate among existing customer base requiring expensive re-engagement campaigns",
        "BNM regulatory compliance costs (RMiT, PDPA) consuming disproportionate share of IT budget"
      ],
      strategicInvestments: ["Core banking platform modernisation", "AI-powered credit scoring rollout"],
      direction: "Affin Bank is executing its AFFIN 2030 plan focused on becoming a digitally-led bank, with emphasis on SME digital lending and operational efficiency through cloud migration and process automation.",
      partnerships: [
        { partner: "Silverlake Axis", area: "Core Banking System", impact: "High" },
        { partner: "Mambu", area: "Cloud Lending Platform", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+8-10%", narrative: "AFFIN 2030 digital transformation requires sustained core banking modernisation and cloud migration investment. SME digital lending and AI credit scoring will drive incremental tech spend of 8-10% annually." }
    },
    CIMB: {
      topPriorities: [
        { priority: "Forward30 regional AI-first banking strategy", techInfluence: [
          { area: "Data & AI", detail: "GenAI deployment across customer service (EVA chatbot), credit assessment, and operations" },
          { area: "Cloud", detail: "Cloud-native platform underpinning Forward30 digital banking vision across ASEAN" }
        ]},
        { priority: "ASEAN digital banking expansion via OctoBiz", techInfluence: [
          { area: "Cloud", detail: "Multi-country cloud platform for OctoBiz SME digital banking across 5 ASEAN markets" },
          { area: "Connectivity", detail: "Cross-border API connectivity and payment integration for ASEAN SME trade" }
        ]},
        { priority: "Cybersecurity resilience for regional operations", techInfluence: [
          { area: "Cybersecurity", detail: "Centralised regional SOC with AI-powered threat detection across ASEAN operations" },
          { area: "Cloud", detail: "Cloud-based SIEM and Zero Trust architecture for multi-country banking operations" }
        ]},
        { priority: "Data-driven hyper-personalisation", techInfluence: [
          { area: "Data & AI", detail: "Real-time customer analytics for personalised product recommendations across 20M+ customers" },
          { area: "DevOps", detail: "ML model deployment pipelines and feature stores for real-time personalisation" }
        ]},
        { priority: "Green and sustainable finance platform", techInfluence: [
          { area: "Data & AI", detail: "ESG scoring and carbon footprint analytics for sustainable lending decisions" },
          { area: "Cloud", detail: "ESG data platform on cloud for regulatory reporting and sustainability tracking" }
        ]}
      ],
      painPoints: [
        "Multi-country regulatory complexity across 5 ASEAN markets with different data localisation requirements",
        "Legacy system diversity from historical acquisitions (Niaga, Thai) creating integration overhead",
        "GenAI adoption risk management - balancing innovation speed with responsible AI governance",
        "Cybersecurity threat surface expanding with regional digital banking across multiple regulatory jurisdictions",
        "Talent war for AI/ML engineers against better-funded tech companies and Singapore-based fintechs"
      ],
      strategicInvestments: ["EVA chatbot and GenAI platform across operations", "OctoBiz digital SME platform expansion across ASEAN"],
      direction: "CIMB is pursuing AI-first digital banking under its Forward30 vision, targeting operational efficiency through GenAI while scaling digital SME services across ASEAN with the OctoBiz platform.",
      partnerships: [
        { partner: "Pand.ai", area: "GenAI Chatbot (EVA)", impact: "High" },
        { partner: "AWS", area: "Cloud Infrastructure", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+12-15%", narrative: "Forward30 GenAI rollout and OctoBiz ASEAN expansion will require growing cloud and AI platform investments. The 191% increase in digital SME approvals validates the ROI, supporting continued 12-15% annual ICT spend growth." }
    },
    MAYBANK: {
      topPriorities: [
        { priority: "Zero-downtime mandate \u2014 BNM requires 99.99%+ uptime but MAE/Maybank2u suffers recurring outages during peak usage (salary days, festive periods)", techInfluence: [
          { area: "Connectivity", detail: "Root cause: backend-to-backend network bottlenecks between microservices during peak traffic. Telco advantage: only a telco can provide redundant multi-path SD-WAN, dedicated links, and network SLAs with guaranteed uptime \u2014 this is the foundational layer other vendors cannot solve" },
          { area: "Cloud", detail: "Root cause: insufficient auto-scaling and single-AZ architecture that cannot handle peak load spikes. Telco play: bundle managed private/hybrid cloud with connectivity to offer an integrated resilience stack, avoiding multi-vendor finger-pointing during outages" },
          { area: "Cybersecurity", detail: "Root cause: DDoS attacks can overwhelm the app and trigger compliance breaches under BNM rules. Telco play: DDoS mitigation and traffic scrubbing at the network edge, bundled with managed SOC \u2014 attack-driven outages are stopped before they reach the application" },
          { area: "DevOps", detail: "Root cause: faulty code releases going live without canary testing have caused MAE production outages. Telco play: partner with DevOps specialists to complete the zero-downtime stack \u2014 blue-green deployments, automated rollback, and SRE observability layered on top of the telco connectivity + cloud foundation" }
        ]},
        { priority: "M25+ cloud-first digital banking roadmap", techInfluence: [
          { area: "Cloud", detail: "MYR 1B Microsoft Azure partnership migrating core banking workloads to cloud-native architecture" },
          { area: "DevOps", detail: "Cloud-native development practices and Azure DevOps adoption for faster feature delivery" }
        ]},
        { priority: "MAE super-app ecosystem expansion to 10M users", techInfluence: [
          { area: "Data & AI", detail: "AI-personalised financial services, investment recommendations, and spending insights for 8.7M MAE users" },
          { area: "Connectivity", detail: "Super-app platform requiring always-on connectivity and API integrations with 100+ partners" }
        ]},
        { priority: "AI-powered risk management and fraud detection", techInfluence: [
          { area: "Data & AI", detail: "Real-time ML fraud detection processing millions of daily transactions across ASEAN" },
          { area: "Cybersecurity", detail: "AI-enhanced threat intelligence and automated incident response for banking operations" }
        ]},
        { priority: "Regional ASEAN digital banking harmonisation", techInfluence: [
          { area: "Cloud", detail: "Multi-region Azure deployment for consistent digital banking across 10 ASEAN markets" },
          { area: "Cybersecurity", detail: "Unified security posture management across diverse regulatory jurisdictions" }
        ]}
      ],
      painPoints: [
        "Recurring MAE and Maybank2u outages — app crashes during peak usage (salary days, festive periods) damaging customer trust and risking BNM regulatory penalties under the zero-downtime directive",
        "MYR 1B Azure migration complexity with hundreds of legacy applications requiring cloud refactoring while maintaining 99.99% uptime during transition",
        "Fraud and scam losses rising despite AI detection, with sophisticated social engineering attacks evolving faster than defenses",
        "Super-app competition from Grab, Touch 'n Go, and bank-backed rivals fragmenting digital wallet market",
        "ASEAN data localisation requirements creating cloud architecture complexity across 10 operating markets"
      ],
      strategicInvestments: ["MYR 1B five-year Microsoft Azure partnership (announced Aug 2025)", "AI-driven personalisation engine for 8.7M MAE users"],
      direction: "Maybank is making the largest cloud commitment among ASEAN banks with its MYR 1B Microsoft partnership, signalling a decisive shift to cloud-native banking. The MAE super-app strategy aims to create a financial ecosystem beyond traditional banking.",
      partnerships: [
        { partner: "Microsoft", area: "Azure Cloud & Copilot", impact: "High" },
        { partner: "Visa", area: "Digital Payments", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+15-18%", narrative: "The landmark MYR 1B Microsoft Azure deal signals a step-change in Maybank's tech spend trajectory. Cloud migration, AI personalisation, and MAE super-app development will drive 15-18% annual ICT growth through 2030." }
    },
    PBBANK: {
      topPriorities: [
        { priority: "Digital channel migration to reduce branch dependency", techInfluence: [
          { area: "Cloud", detail: "Mobile banking platform modernisation on cloud to handle growing digital transaction volumes" },
          { area: "Connectivity", detail: "Enhanced mobile and internet banking connectivity for seamless customer experience" }
        ]},
        { priority: "Process automation for cost leadership", techInfluence: [
          { area: "Data & AI", detail: "RPA and intelligent automation for loan processing, compliance checks, and operations" },
          { area: "DevOps", detail: "Automation pipeline orchestration for back-office process digitalisation" }
        ]},
        { priority: "Data analytics for cross-selling optimisation", techInfluence: [
          { area: "Data & AI", detail: "Customer analytics for targeted cross-sell of insurance, unit trusts, and credit products" },
          { area: "Cloud", detail: "Data warehouse and analytics platform on cloud for unified customer view" }
        ]},
        { priority: "Regulatory compliance technology (RegTech)", techInfluence: [
          { area: "Cybersecurity", detail: "Anti-money laundering AI and transaction monitoring for BNM compliance" },
          { area: "Data & AI", detail: "Automated regulatory reporting and compliance analytics" }
        ]},
        { priority: "ATM and branch network digitalisation", techInfluence: [
          { area: "5G & IoT", detail: "Smart ATMs and IoT-connected branch infrastructure for operational monitoring" },
          { area: "Connectivity", detail: "Branch network connectivity upgrade for video banking and self-service terminals" }
        ]}
      ],
      painPoints: [
        "Conservative technology culture slowing digital innovation pace vs more aggressive peers",
        "High branch network dependency with older customer demographics resistant to digital migration",
        "Limited cloud adoption maturity compared to Maybank and CIMB's multi-cloud strategies",
        "IT workforce ageing with insufficient pipeline of younger digital-native technology talent",
        "Legacy core banking system constraining speed of new digital product launches"
      ],
      strategicInvestments: ["Mobile banking platform overhaul", "Robotic Process Automation (RPA) at scale"],
      direction: "Public Bank is taking a measured, ROI-focused approach to digitalisation, prioritising process automation and mobile channel expansion over flashy AI bets. The emphasis is on sustaining industry-best cost efficiency.",
      partnerships: [
        { partner: "Infosys", area: "Banking Platform", impact: "Medium" },
        { partner: "UiPath", area: "RPA Automation", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+8-10%", narrative: "Public Bank's conservative digital strategy keeps spend growth modest but steady. Mobile platform refresh and RPA scaling will drive 8-10% annual ICT growth, below peers but aligned with its cost-discipline DNA." }
    },
    BKRAKYAT: {
      topPriorities: [
        { priority: "Islamic digital banking capabilities", techInfluence: [
          { area: "Cloud", detail: "Cloud-based Islamic banking product engine for Shariah-compliant digital products" },
          { area: "Data & AI", detail: "AI-assisted Shariah compliance checking and Islamic product structuring" }
        ]},
        { priority: "Member financial inclusion via mobile", techInfluence: [
          { area: "Connectivity", detail: "Mobile banking app for cooperative members in rural and underserved areas" },
          { area: "5G & IoT", detail: "4G/5G mobile connectivity enabling banking access for rural cooperative members" }
        ]},
        { priority: "Core system modernisation", techInfluence: [
          { area: "Cloud", detail: "Core banking system migration from on-premises to cloud-hosted infrastructure" },
          { area: "DevOps", detail: "Modern development practices for faster feature deployment on new core platform" }
        ]},
        { priority: "Cooperative member data analytics", techInfluence: [
          { area: "Data & AI", detail: "Member behaviour analytics for personalised cooperative savings and financing products" },
          { area: "Cloud", detail: "Data analytics platform on cloud for 4M+ cooperative member insights" }
        ]},
        { priority: "Cybersecurity for cooperative banking", techInfluence: [
          { area: "Cybersecurity", detail: "BNM RMiT compliance and fraud detection for growing digital transaction volumes" },
          { area: "Data & AI", detail: "AI-based fraud monitoring for mobile banking and online transactions" }
        ]}
      ],
      painPoints: [
        "Legacy cooperative governance structure slowing technology decision-making and procurement",
        "Core banking system age creating reliability and integration challenges for digital services",
        "Limited IT budget relative to commercial banks constraining pace of digital transformation",
        "Digital literacy gap among cooperative member base limiting mobile banking adoption",
        "Cybersecurity vulnerability from rapid digital channel expansion without proportionate security investment"
      ],
      strategicInvestments: ["Core banking upgrade programme", "Mobile i-Rakyat platform enhancement"],
      direction: "Bank Rakyat is modernising its core systems to support digital Islamic cooperative banking, with emphasis on mobile access for underserved member segments and Shariah-compliant digital products.",
      partnerships: [
        { partner: "TCS", area: "Core Banking Upgrade", impact: "High" },
        { partner: "Backbase", area: "Digital Banking UX", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+7-9%", narrative: "Core banking modernisation is a multi-year commitment driving sustained IT spend. Islamic digital banking and financial inclusion mandates ensure continued technology investment growth of 7-9% annually." }
    },
    BSN: {
      topPriorities: [
        { priority: "Financial inclusion through digital channels", techInfluence: [
          { area: "Cloud", detail: "Cloud-based digital banking platform to reach underserved B40 population segments" },
          { area: "Connectivity", detail: "Mobile-first banking for communities with limited branch access" }
        ]},
        { priority: "MySSP government savings programme digitalisation", techInfluence: [
          { area: "Cloud", detail: "Government savings platform migration to cloud for scalability during peak enrollment" },
          { area: "Data & AI", detail: "Analytics on savings patterns to design targeted financial inclusion products" }
        ]},
        { priority: "Operational efficiency via cloud migration", techInfluence: [
          { area: "Cloud", detail: "Infrastructure-as-a-service reducing on-premises data center costs" },
          { area: "DevOps", detail: "Cloud-native deployment practices for faster government product launches" }
        ]},
        { priority: "Digital payment and disbursement systems", techInfluence: [
          { area: "Connectivity", detail: "DuitNow and government disbursement platform integration" },
          { area: "5G & IoT", detail: "Agent banking with IoT-enabled POS devices for rural financial access" }
        ]},
        { priority: "Cybersecurity for government financial data", techInfluence: [
          { area: "Cybersecurity", detail: "Enhanced security controls for sensitive government savings and disbursement data" },
          { area: "Cloud", detail: "Cloud security and data residency compliance for government workloads" }
        ]}
      ],
      painPoints: [
        "Government mandate constraints limiting commercial flexibility in technology vendor selection",
        "Ageing infrastructure with many systems past end-of-life creating security and reliability risks",
        "Limited IT budget competing with larger commercial bank investments in digital platforms",
        "Low digital literacy among target B40 customer segments requiring extensive adoption support",
        "Government procurement processes delaying technology implementation timelines"
      ],
      strategicInvestments: ["Government savings platform upgrade", "Cloud-first infrastructure roadmap"],
      direction: "BSN is transforming from a traditional savings bank into a digital-first financial inclusion platform, leveraging government mandates and social savings programmes to drive digital adoption among underserved Malaysians.",
      partnerships: [
        { partner: "Microsoft", area: "Cloud Infrastructure", impact: "Medium" },
        { partner: "FIS", area: "Payment Systems", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+9-11%", narrative: "Government financial inclusion mandates and MySSP digitalisation create a structural demand floor for IT spend. Cloud migration and mobile platform investments will sustain 9-11% annual growth." }
    },
    MBSB: {
      topPriorities: [
        { priority: "Islamic banking digital product innovation", techInfluence: [
          { area: "Cloud", detail: "Cloud-native Islamic product engine for rapid Shariah-compliant product development" },
          { area: "Data & AI", detail: "AI-driven Shariah product structuring and compliance automation" }
        ]},
        { priority: "Mortgage and housing loan digitalisation", techInfluence: [
          { area: "Data & AI", detail: "AI credit assessment and automated property valuation for housing loans" },
          { area: "Cloud", detail: "Digital mortgage origination platform on cloud for end-to-end processing" }
        ]},
        { priority: "Enterprise data analytics capability", techInfluence: [
          { area: "Data & AI", detail: "Centralised data hub for customer analytics, risk modelling, and regulatory reporting" },
          { area: "Cloud", detail: "Cloud-based data warehouse and business intelligence platform" }
        ]},
        { priority: "Operational cost reduction through automation", techInfluence: [
          { area: "DevOps", detail: "Process automation and workflow digitisation for loan operations" },
          { area: "Data & AI", detail: "Intelligent document processing for mortgage documentation review" }
        ]},
        { priority: "Cybersecurity and regulatory compliance", techInfluence: [
          { area: "Cybersecurity", detail: "BNM RMiT compliance and Islamic banking data protection requirements" },
          { area: "Cloud", detail: "Cloud security controls for Shariah-sensitive financial data" }
        ]}
      ],
      painPoints: [
        "Housing loan concentration risk with limited product diversification in digital channels",
        "Core banking system limitations constraining digital product innovation speed",
        "Data silos across business units preventing unified customer view for cross-selling",
        "Limited technology talent pool compared to larger banking groups",
        "Competition from digital banks and fintechs in the Islamic financing space"
      ],
      strategicInvestments: ["Digital mortgage origination platform", "Enterprise data analytics hub"],
      direction: "MBSB is focusing on becoming the leading Islamic development finance institution through digital mortgage products and SME lending, while pursuing inorganic growth through potential sector consolidation.",
      partnerships: [
        { partner: "Oracle", area: "Core Banking Cloud", impact: "High" },
        { partner: "Newgen", area: "Digital Mortgage Platform", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+10-12%", narrative: "Digital mortgage origination and Islamic fintech product development require sustained platform investment. Core banking cloud migration and data analytics will drive 10-12% annual ICT spend growth." }
    },
    BNM: {
      topPriorities: [
        { priority: "Financial system cyber resilience (Cyber Security Bill 2024)", techInfluence: [
          { area: "Cybersecurity", detail: "National financial sector SOC and cyber resilience framework enforcement across all banks" },
          { area: "Data & AI", detail: "AI-powered threat intelligence sharing across Malaysia's financial ecosystem" }
        ]},
        { priority: "Real-time payments infrastructure (RPP/DuitNow)", techInfluence: [
          { area: "Connectivity", detail: "Real-time payment network backbone requiring 99.999% uptime and cross-border connectivity" },
          { area: "Cloud", detail: "Scalable payment infrastructure on cloud to handle 6B+ annual DuitNow transactions" }
        ]},
        { priority: "Digital currency and fintech regulation", techInfluence: [
          { area: "Data & AI", detail: "CBDC feasibility analytics and RegTech for fintech supervision" },
          { area: "Cybersecurity", detail: "Digital currency security protocols and cryptographic infrastructure" }
        ]},
        { priority: "Open banking and API economy governance", techInfluence: [
          { area: "DevOps", detail: "API standards and developer portal infrastructure for open banking ecosystem" },
          { area: "Connectivity", detail: "Interoperable API gateway infrastructure connecting banks, fintechs, and telcos" }
        ]},
        { priority: "Supervisory technology (SupTech) modernisation", techInfluence: [
          { area: "Data & AI", detail: "AI-driven supervisory analytics for real-time banking system monitoring" },
          { area: "Cloud", detail: "Cloud-based regulatory data platform for industry-wide financial oversight" }
        ]}
      ],
      painPoints: [
        "Rising sophisticated cyber threats targeting Malaysia's financial infrastructure (Lazarus, APT groups)",
        "Fintech regulatory sandbox participants outpacing BNM's supervisory technology capabilities",
        "Data standardisation challenges across 50+ financial institutions for effective SupTech deployment",
        "CBDC development complexity balancing financial inclusion with monetary policy effectiveness",
        "Cross-border payment fraud increasing as DuitNow connects with regional payment networks"
      ],
      strategicInvestments: ["RENTAS payment system modernisation", "Regulatory sandbox for AI in finance"],
      direction: "Bank Negara is evolving from a traditional regulator to an active architect of Malaysia's digital financial ecosystem, using regulatory technology and real-time payments infrastructure to drive financial inclusion and system resilience.",
      partnerships: [
        { partner: "BIS", area: "Cross-border CBDC (Project Nexus)", impact: "High" },
        { partner: "PayNet", area: "National Payment Infrastructure", impact: "High" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+10-12%", narrative: "Cyber Security Bill 2024 enforcement, RENTAS modernisation, and digital currency exploration require growing technology investment. Regulatory tech spend will increase 10-12% annually as BNM expands its digital oversight mandate." }
    },
    PNB: {
      topPriorities: [
        { priority: "Investment portfolio AI analytics and optimisation", techInfluence: [
          { area: "Data & AI", detail: "AI/ML-driven portfolio optimisation, risk analytics, and alternative data integration for 14M unit holders" },
          { area: "Cloud", detail: "Cloud-based investment management platform for real-time portfolio analytics" }
        ]},
        { priority: "Amanah Saham digital platform for 14M+ unit holders", techInfluence: [
          { area: "Cloud", detail: "Scalable cloud infrastructure to handle peak-season unit trust transactions for millions of users" },
          { area: "Connectivity", detail: "Mobile-first digital investment platform requiring always-on connectivity" }
        ]},
        { priority: "ESG integration into investment decisions", techInfluence: [
          { area: "Data & AI", detail: "ESG scoring models and climate risk analytics for sustainable investment portfolio" },
          { area: "Cloud", detail: "ESG data aggregation platform on cloud for cross-asset class sustainability tracking" }
        ]},
        { priority: "Operational efficiency in fund administration", techInfluence: [
          { area: "DevOps", detail: "Automated fund administration workflows and NAV calculation pipelines" },
          { area: "Data & AI", detail: "RPA for fund accounting, reconciliation, and regulatory reporting" }
        ]},
        { priority: "Cybersecurity for national wealth management data", techInfluence: [
          { area: "Cybersecurity", detail: "Protection of 14M investor records and AUM data from state-sponsored threats" },
          { area: "Cloud", detail: "Cloud security controls for sovereign wealth data with strict residency requirements" }
        ]}
      ],
      painPoints: [
        "Legacy fund administration systems limiting speed of digital product launches for unit holders",
        "14M unit holder base creating massive scaling challenges for digital platform during peak seasons",
        "ESG data quality and standardisation challenges across diverse investment portfolio",
        "Cybersecurity risk from managing sovereign wealth data attractive to nation-state threat actors",
        "Digital literacy gap among older unit holders limiting adoption of self-service investment platforms"
      ],
      strategicInvestments: ["Digital investment management platform", "AI-driven portfolio analytics system"],
      direction: "PNB is modernising its investment management infrastructure to support AI-driven portfolio optimisation while expanding digital access for Malaysia's largest unit trust holder base of 14 million investors.",
      partnerships: [
        { partner: "Bloomberg", area: "Investment Analytics", impact: "High" },
        { partner: "Microsoft", area: "Azure Cloud", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+12-14%", narrative: "AI portfolio analytics, ESG data integration, and digital platform expansion for 14M unit holders are driving PNB's tech modernisation. Investment management technology will grow 12-14% annually." }
    },
    KHAZANAH: {
      topPriorities: [
        { priority: "Technology sector portfolio growth (40+ tech investments)", techInfluence: [
          { area: "Data & AI", detail: "AI-driven investment screening and portfolio analytics for technology sector allocation" },
          { area: "Cloud", detail: "Cloud-based deal management and portfolio monitoring platform" }
        ]},
        { priority: "Sovereign AI and digital economy catalysation", techInfluence: [
          { area: "Data & AI", detail: "Sovereign AI infrastructure investment to build Malaysia's AI compute capacity" },
          { area: "5G & IoT", detail: "Digital infrastructure investments including data centers and 5G enabling platforms" }
        ]},
        { priority: "Portfolio company digital transformation", techInfluence: [
          { area: "Cloud", detail: "Mandating cloud-first strategies across portfolio companies (IHH, Axiata, etc.)" },
          { area: "DevOps", detail: "Digital maturity standards and tech governance across portfolio companies" }
        ]},
        { priority: "Semiconductor and chip ecosystem development", techInfluence: [
          { area: "5G & IoT", detail: "Investments in semiconductor companies (SilTerra, others) supporting IoT and 5G chip supply" },
          { area: "Data & AI", detail: "AI chip ecosystem development through partnerships with NVIDIA and global foundries" }
        ]},
        { priority: "Venture capital and startup ecosystem investment", techInfluence: [
          { area: "Cloud", detail: "Startup investments in cloud-native companies (Dana Impak fund)" },
          { area: "Cybersecurity", detail: "Cybersecurity startup investments to build domestic cyber capability" }
        ]}
      ],
      painPoints: [
        "Portfolio company underperformance in legacy sectors (MAS, Proton historically) consuming management attention",
        "Balancing commercial returns with national development mandate creating investment decision tension",
        "Sovereign AI ambitions require massive infrastructure investment with uncertain domestic demand scale",
        "Semiconductor investment risk given global chip cycle volatility and geopolitical disruptions",
        "Limited domestic tech talent pipeline constraining portfolio company digital transformation speed"
      ],
      strategicInvestments: ["Dana Impak technology venture fund", "AI/ML-driven investment analytics platform"],
      direction: "Khazanah is positioning itself as a catalyst for Malaysia's digital economy, combining direct tech investments with AI-driven investment analytics. The focus is on building national champions in semiconductor, AI, and digital infrastructure.",
      partnerships: [
        { partner: "NVIDIA", area: "Sovereign AI Infrastructure", impact: "High" },
        { partner: "McKinsey", area: "Portfolio Transformation", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+15-18%", narrative: "Sovereign AI ambitions and technology portfolio expansion are driving accelerated internal digitalisation. AI-driven investment analytics and portfolio company digital transformation support 15-18% annual ICT growth." }
    },
    TABUNGHAJI: {
      topPriorities: [
        { priority: "Hajj pilgrimage management digitalisation", techInfluence: [
          { area: "Cloud", detail: "Cloud-based Hajj management platform for real-time pilgrim tracking and logistics" },
          { area: "5G & IoT", detail: "IoT wearables and 5G connectivity for pilgrim safety monitoring during Hajj" }
        ]},
        { priority: "Depositor digital services modernisation", techInfluence: [
          { area: "Cloud", detail: "Digital savings and investment platform on cloud for 9M+ depositors" },
          { area: "Connectivity", detail: "Mobile app enhancements for depositor self-service transactions" }
        ]},
        { priority: "Investment portfolio system upgrade", techInfluence: [
          { area: "Data & AI", detail: "AI analytics for investment portfolio management and risk monitoring" },
          { area: "Cloud", detail: "Cloud-hosted investment management system for multi-asset portfolio tracking" }
        ]},
        { priority: "Shariah compliance technology automation", techInfluence: [
          { area: "Data & AI", detail: "Automated Shariah screening and compliance monitoring for investment portfolio" },
          { area: "DevOps", detail: "Automated compliance reporting workflows and audit trail systems" }
        ]},
        { priority: "Operational efficiency and cost management", techInfluence: [
          { area: "DevOps", detail: "Process automation for depositor account management and Hajj registration" },
          { area: "Cybersecurity", detail: "Data protection for sensitive depositor and pilgrimage personal data" }
        ]}
      ],
      painPoints: [
        "Historical financial governance issues creating cautious approach to large technology investments",
        "9M+ depositor base with diverse digital literacy levels complicating platform design",
        "Hajj operations complexity with annual large-scale logistics requiring robust real-time systems",
        "Investment portfolio recovery from past losses constraining technology budget allocation",
        "Limited internal technology talent for managing complex digital transformation programmes"
      ],
      strategicInvestments: ["Hajj digital management platform", "Depositor self-service mobile platform"],
      direction: "Tabung Haji is digitising the end-to-end Hajj pilgrimage experience while modernising depositor services to meet expectations of a younger, digitally-native depositor base.",
      partnerships: [
        { partner: "SAP", area: "Enterprise ERP", impact: "High" },
        { partner: "Deloitte", area: "Digital Transformation", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+8-10%", narrative: "Hajj digital platform development and depositor self-service modernisation create steady tech spend demand. ESG reporting requirements for investments add incremental data platform needs, driving 8-10% annual growth." }
    }
  };
  for (var k in ins) if (COMPANIES[k]) COMPANIES[k].industryInsights = ins[k];
})();
