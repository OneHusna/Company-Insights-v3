(function() {
  var t = {
    PERODUA: [
      { category: "Cybersecurity", icon: "shield", relevance: "Medium", summary: "Perodua needs connected car security for factory and vehicle systems.", initiatives: ["Secure connected vehicle platform", "Factory OT security hardening"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "Perodua uses cloud ERP and supply chain systems for manufacturing ops.", initiatives: ["ERP migration to cloud", "Supply chain visibility platform"] },
      { category: "5G & IoT", icon: "signal", relevance: "High", summary: "Perodua deploys factory IoT and connected car tech for production.", initiatives: ["Smart factory sensor network", "Connected vehicle telematics"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "Perodua relies on connectivity for dealer networks and fleet management.", initiatives: ["Dealer portal connectivity", "Fleet management systems"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "Perodua uses AI for manufacturing quality and demand forecasting.", initiatives: ["Predictive maintenance AI", "Production optimization analytics"] },
      { category: "DevOps", icon: "code", relevance: "Medium", summary: "Perodua adopts DevOps for vehicle software and in-car systems.", initiatives: ["OTA update pipeline", "Vehicle software CI/CD"] }
    ],
    HONDA_MY: [
      { category: "Cybersecurity", icon: "shield", relevance: "Medium", summary: "Honda Malaysia secures connected vehicles and factory systems.", initiatives: ["Connected car security framework", "Plant network segmentation"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "Honda Malaysia uses cloud ERP for Melaka plant and distribution.", initiatives: ["SAP cloud migration", "Dealer management cloud"] },
      { category: "5G & IoT", icon: "signal", relevance: "High", summary: "Honda Malaysia deploys factory IoT for CKD production and quality.", initiatives: ["Assembly line IoT sensors", "e:HEV battery monitoring"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "Honda Malaysia connects dealers and service centers nationwide.", initiatives: ["Dealer connectivity upgrade", "Service center network"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "Honda Malaysia uses AI for manufacturing and demand prediction.", initiatives: ["Quality defect prediction AI", "Sales forecasting model"] },
      { category: "DevOps", icon: "code", relevance: "Medium", summary: "Honda Malaysia adopts DevOps for Honda Connect and vehicle software.", initiatives: ["Honda Connect OTA pipeline", "Infotainment software delivery"] }
    ],
    TESLA_MY: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "Tesla Malaysia secures EV fleet, Supercharger network, and member data.", initiatives: ["Supercharger network security", "Tesla app data protection"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "Tesla Malaysia uses cloud for sales, service, and charging operations.", initiatives: ["Direct sales cloud platform", "Charging network management"] },
      { category: "5G & IoT", icon: "signal", relevance: "High", summary: "Tesla Malaysia relies on IoT for vehicle telemetry and charging infra.", initiatives: ["Vehicle telemetry and diagnostics", "Smart charging station IoT"] },
      { category: "Connectivity", icon: "globe", relevance: "High", summary: "Tesla Malaysia needs connectivity for OTA updates and navigation.", initiatives: ["OTA update delivery network", "Real-time navigation services"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "Tesla Malaysia leverages Autopilot and fleet analytics for EVs.", initiatives: ["Fleet analytics dashboard", "Charging demand prediction"] },
      { category: "DevOps", icon: "code", relevance: "Medium", summary: "Tesla Malaysia deploys OTA software updates for Model 3 and Y.", initiatives: ["OTA release pipeline", "Vehicle firmware CI/CD"] }
    ],
    MAHB: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "MAHB secures critical airport infrastructure across 39 airports.", initiatives: ["Airport SCADA security", "Passenger data protection"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "MAHB uses cloud for retail, parking, and passenger services.", initiatives: ["Retail POS cloud migration", "Passenger service platform"] },
      { category: "5G & IoT", icon: "signal", relevance: "High", summary: "MAHB deploys smart airport IoT for baggage and operations.", initiatives: ["Baggage tracking IoT", "Smart parking sensors"] },
      { category: "Connectivity", icon: "globe", relevance: "High", summary: "MAHB provides passenger WiFi and connectivity at KLIA and hubs.", initiatives: ["Passenger WiFi expansion", "Airport-wide connectivity"] },
      { category: "Data & AI", icon: "brain", relevance: "Medium", summary: "MAHB uses analytics for passenger flow and retail optimization.", initiatives: ["Passenger flow analytics", "Retail demand forecasting"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "MAHB has limited DevOps needs for airport operations systems.", initiatives: ["Legacy system modernization", "Service desk automation"] }
    ],
    MAG: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "MAG secures Malaysia Airlines systems and passenger data.", initiatives: ["Reservation system security", "Crew and ops data protection"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "MAG uses cloud for reservations, cargo, and fleet management.", initiatives: ["Reservation cloud migration", "Cargo management platform"] },
      { category: "5G & IoT", icon: "signal", relevance: "Medium", summary: "MAG deploys IoT for fleet and ground operations tracking.", initiatives: ["Aircraft maintenance IoT", "Ground equipment tracking"] },
      { category: "Connectivity", icon: "globe", relevance: "High", summary: "MAG relies on connectivity for 50+ destinations and e-ticketing.", initiatives: ["Inflight connectivity upgrade", "E-ticketing network expansion"] },
      { category: "Data & AI", icon: "brain", relevance: "Medium", summary: "MAG uses analytics for revenue management and operations.", initiatives: ["Revenue management AI", "Maintenance prediction model"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "MAG has limited DevOps for legacy airline systems.", initiatives: ["Legacy app modernization", "Release automation"] }
    ],
    GARDENIA: [
      { category: "Cybersecurity", icon: "shield", relevance: "Low", summary: "Gardenia has basic security needs for bread production and distribution.", initiatives: ["IT security baseline", "Plant access control"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "Gardenia uses cloud for supply chain and distribution to 50K outlets.", initiatives: ["Supply chain cloud platform", "Distribution route optimization"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "Gardenia has limited IoT needs for bread manufacturing.", initiatives: ["Production line sensors", "Fleet GPS tracking"] },
      { category: "Connectivity", icon: "globe", relevance: "Low", summary: "Gardenia connects distribution and retail partners nationwide.", initiatives: ["Retail portal connectivity", "Distribution network links"] },
      { category: "Data & AI", icon: "brain", relevance: "Medium", summary: "Gardenia uses demand forecasting for 2M loaves daily production.", initiatives: ["Demand forecasting model", "Inventory optimization AI"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "Gardenia has minimal DevOps needs for F&B operations.", initiatives: ["ERP update process", "Basic automation"] }
    ],
    PANASONIC_MY: [
      { category: "Cybersecurity", icon: "shield", relevance: "Medium", summary: "Panasonic Malaysia secures factory and export supply chain systems.", initiatives: ["Factory network security", "Export data protection"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "Panasonic Malaysia uses cloud for manufacturing and export ops.", initiatives: ["Manufacturing cloud platform", "Supply chain visibility"] },
      { category: "5G & IoT", icon: "signal", relevance: "High", summary: "Panasonic Malaysia deploys factory IoT across 12 production lines.", initiatives: ["Smart factory IoT network", "AC production line sensors"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "Panasonic Malaysia connects plants and export partners globally.", initiatives: ["Plant connectivity upgrade", "Export partner portal"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "Panasonic Malaysia uses AI for manufacturing and quality control.", initiatives: ["Defect detection AI", "Production yield optimization"] },
      { category: "DevOps", icon: "code", relevance: "Medium", summary: "Panasonic Malaysia adopts DevOps for automation and software.", initiatives: ["Automation pipeline", "Production software CI/CD"] }
    ],
    ALAMFLORA: [
      { category: "Cybersecurity", icon: "shield", relevance: "Low", summary: "Alam Flora has basic security for waste management operations.", initiatives: ["IT security baseline", "Fleet data protection"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "Alam Flora uses cloud for fleet and collection management.", initiatives: ["Fleet management cloud", "Collection scheduling platform"] },
      { category: "5G & IoT", icon: "signal", relevance: "Medium", summary: "Alam Flora deploys IoT for fleet tracking and smart bins.", initiatives: ["Fleet GPS and IoT tracking", "Smart bin fill-level sensors"] },
      { category: "Connectivity", icon: "globe", relevance: "Low", summary: "Alam Flora connects 800+ vehicles across 3 states.", initiatives: ["Vehicle connectivity upgrade", "Dispatch center links"] },
      { category: "Data & AI", icon: "brain", relevance: "Low", summary: "Alam Flora uses basic analytics for route optimization.", initiatives: ["Route optimization model", "Collection demand forecasting"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "Alam Flora has minimal DevOps for waste management systems.", initiatives: ["System update process", "Basic automation"] }
    ],
    SILVERVALLEY: [
      { category: "Cybersecurity", icon: "shield", relevance: "Low", summary: "Silver Valley has basic security for diversified business units.", initiatives: ["IT security baseline", "Data protection policy"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "Silver Valley adopts cloud for operations across 5 business units.", initiatives: ["Cloud ERP adoption", "Business unit platforms"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "Silver Valley has limited IoT needs for niche operations.", initiatives: ["Basic sensor deployment", "Asset tracking pilot"] },
      { category: "Connectivity", icon: "globe", relevance: "Low", summary: "Silver Valley connects regional offices and clients.", initiatives: ["Office connectivity", "Client portal access"] },
      { category: "Data & AI", icon: "brain", relevance: "Medium", summary: "Silver Valley explores analytics for 60% digital adoption.", initiatives: ["Business analytics pilot", "Client insights dashboard"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "Silver Valley has minimal DevOps for smaller scale ops.", initiatives: ["Process automation", "Basic CI/CD"] }
    ],
    KDN: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "KDN secures national security systems including immigration and NRD.", initiatives: ["Immigration system security", "MyDigital ID protection"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "KDN adopts cloud for immigration and citizen services.", initiatives: ["Immigration cloud migration", "NRD service platform"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "KDN has limited IoT needs for home affairs operations.", initiatives: ["Border monitoring sensors", "Facility IoT pilot"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "KDN connects national immigration and NRD services.", initiatives: ["National service connectivity", "MyDigital ID network"] },
      { category: "Data & AI", icon: "brain", relevance: "Medium", summary: "KDN uses analytics for immigration and citizen services.", initiatives: ["Immigration analytics", "Service demand forecasting"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "KDN has limited DevOps for legacy government systems.", initiatives: ["Legacy system updates", "Service delivery automation"] }
    ],
    MINDEF: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "MINDEF secures defence systems and classified infrastructure.", initiatives: ["Defence network security", "Cyber defence capability"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "MINDEF adopts cloud for defence administration and logistics.", initiatives: ["Defence cloud platform", "Logistics system migration"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "MINDEF has limited IoT for defence operations.", initiatives: ["Base monitoring sensors", "Equipment tracking pilot"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "MINDEF connects Armed Forces and defence installations.", initiatives: ["Defence network upgrade", "Base connectivity expansion"] },
      { category: "Data & AI", icon: "brain", relevance: "Medium", summary: "MINDEF uses analytics for defence planning and logistics.", initiatives: ["Defence analytics platform", "Logistics optimization"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "MINDEF has limited DevOps for defence systems.", initiatives: ["System modernization", "Release automation"] }
    ],
    MOD: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "MOD drives national cybersecurity policy and Digital Nasional.", initiatives: ["National cybersecurity framework", "5G infrastructure security"] },
      { category: "Cloud", icon: "cloud", relevance: "High", summary: "MOD promotes cloud adoption for digital economy and gov services.", initiatives: ["Gov cloud adoption", "Digital economy cloud"] },
      { category: "5G & IoT", icon: "signal", relevance: "High", summary: "MOD leads 5G rollout and IoT for smart nation initiatives.", initiatives: ["5G nationwide rollout", "Smart city IoT pilots"] },
      { category: "Connectivity", icon: "globe", relevance: "High", summary: "MOD drives connectivity for MyDigital and national broadband.", initiatives: ["National broadband expansion", "Rural connectivity program"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "MOD promotes AI and data for digital transformation.", initiatives: ["National AI framework", "Gov data analytics"] },
      { category: "DevOps", icon: "code", relevance: "High", summary: "MOD promotes GovTech and agile delivery for digital services.", initiatives: ["GovTech DevOps adoption", "Digital service delivery"] }
    ],
    MAMPU: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "MAMPU secures government systems and GovCloud infrastructure.", initiatives: ["GovCloud security framework", "Agency security standards"] },
      { category: "Cloud", icon: "cloud", relevance: "High", summary: "MAMPU operates GovCloud for shared government infrastructure.", initiatives: ["GovCloud expansion", "Shared services migration"] },
      { category: "5G & IoT", icon: "signal", relevance: "Medium", summary: "MAMPU supports IoT for smart government initiatives.", initiatives: ["Smart gov IoT pilots", "Sensor data integration"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "MAMPU connects federal agencies via MyGov platform.", initiatives: ["MyGov connectivity", "Inter-agency network"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "MAMPU drives AI and analytics for e-government services.", initiatives: ["Gov AI framework", "Service analytics platform"] },
      { category: "DevOps", icon: "code", relevance: "High", summary: "MAMPU promotes DevOps for MyGov and e-gov platforms.", initiatives: ["MyGov CI/CD pipeline", "E-gov platform delivery"] }
    ],
    MITI: [
      { category: "Cybersecurity", icon: "shield", relevance: "Medium", summary: "MITI secures trade and investment data systems.", initiatives: ["Trade data protection", "MIDA system security"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "MITI uses cloud for trade promotion and NIMP 2030 tracking.", initiatives: ["Trade platform cloud", "NIMP dashboard migration"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "MITI has limited IoT needs for trade and industry.", initiatives: ["Industrial IoT pilots", "Smart manufacturing support"] },
      { category: "Connectivity", icon: "globe", relevance: "High", summary: "MITI drives digital trade and FDI connectivity.", initiatives: ["Digital trade platform", "FDI portal connectivity"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "MITI uses trade analytics for NIMP 2030 and FDI attraction.", initiatives: ["Trade analytics platform", "FDI prediction model"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "MITI has limited DevOps for ministry systems.", initiatives: ["E-services updates", "Portal automation"] }
    ],
    MOTAC: [
      { category: "Cybersecurity", icon: "shield", relevance: "Low", summary: "MOTAC has basic security for tourism and culture systems.", initiatives: ["Tourism portal security", "Data protection baseline"] },
      { category: "Cloud", icon: "cloud", relevance: "Low", summary: "MOTAC uses cloud for Visit Malaysia and tourism promotion.", initiatives: ["Tourism platform cloud", "Visit Malaysia 2026 portal"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "MOTAC has limited IoT for tourism and culture.", initiatives: ["Tourism IoT pilots", "Heritage site sensors"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "MOTAC drives digital tourism and Visit Malaysia connectivity.", initiatives: ["Digital tourism platform", "Tourism partner connectivity"] },
      { category: "Data & AI", icon: "brain", relevance: "Medium", summary: "MOTAC uses tourism analytics for Visit Malaysia 2026.", initiatives: ["Tourism analytics dashboard", "Visitor prediction model"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "MOTAC has minimal DevOps for tourism systems.", initiatives: ["Portal updates", "Campaign automation"] }
    ],
    MOHE: [
      { category: "Cybersecurity", icon: "shield", relevance: "Medium", summary: "MOHE secures 20 public universities and student data systems.", initiatives: ["University network security", "Student data protection"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "MOHE adopts cloud for e-learning and university management.", initiatives: ["E-learning cloud platform", "University ERP migration"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "MOHE has limited IoT for higher education operations.", initiatives: ["Campus IoT pilots", "Smart classroom sensors"] },
      { category: "Connectivity", icon: "globe", relevance: "High", summary: "MOHE drives connectivity for education access nationwide.", initiatives: ["Campus connectivity expansion", "Rural university access"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "MOHE uses analytics for TVET and education outcomes.", initiatives: ["Education analytics platform", "Employability tracking"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "MOHE has limited DevOps for education systems.", initiatives: ["E-learning updates", "Portal automation"] }
    ],
    PDRM: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "PDRM combats cyber crime and secures law enforcement systems.", initiatives: ["Cyber crime unit capability", "Police data protection"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "PDRM uses cloud for crime records and e-policing services.", initiatives: ["Crime records cloud", "E-policing platform"] },
      { category: "5G & IoT", icon: "signal", relevance: "Medium", summary: "PDRM deploys body cameras and surveillance IoT.", initiatives: ["Body camera deployment", "Surveillance IoT network"] },
      { category: "Connectivity", icon: "globe", relevance: "Medium", summary: "PDRM connects 130K personnel and stations nationwide.", initiatives: ["Police network upgrade", "Mobile connectivity"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "PDRM uses crime analytics and facial recognition for investigations.", initiatives: ["Crime analytics platform", "Facial recognition system"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "PDRM has limited DevOps for legacy policing systems.", initiatives: ["System modernization", "Release automation"] }
    ],
    EPF: [
      { category: "Cybersecurity", icon: "shield", relevance: "High", summary: "EPF protects 17M members' retirement data and MYR 1.1T AUM.", initiatives: ["Member data protection", "Investment system security"] },
      { category: "Cloud", icon: "cloud", relevance: "Medium", summary: "EPF uses cloud for member services and investment operations.", initiatives: ["Member portal cloud", "Investment platform migration"] },
      { category: "5G & IoT", icon: "signal", relevance: "Low", summary: "EPF has minimal IoT needs for retirement savings operations.", initiatives: ["Branch IoT pilots", "Asset monitoring"] },
      { category: "Connectivity", icon: "globe", relevance: "Low", summary: "EPF connects members and branches for contribution services.", initiatives: ["Member portal connectivity", "Branch network"] },
      { category: "Data & AI", icon: "brain", relevance: "High", summary: "EPF uses AI for investment decisions and member analytics.", initiatives: ["Investment AI platform", "Member analytics dashboard"] },
      { category: "DevOps", icon: "code", relevance: "Low", summary: "EPF has limited DevOps for statutory fund systems.", initiatives: ["Member portal updates", "Release automation"] }
    ]
  };
  for (var k in t) if (COMPANIES[k]) COMPANIES[k].techTrends = t[k];

  var ict = {
    PERODUA: { total: "MYR 180M", pctRevenue: "1.2%", yoy: "+14%", focusAreas: ["Factory IoT", "Connected Car", "ERP Cloud"], source: "estimated" },
    HONDA_MY: { total: "MYR 150M", pctRevenue: "1.0%", yoy: "+10%", focusAreas: ["CKD Automation", "Dealer Digital", "e:HEV Tech"], source: "estimated" },
    TESLA_MY: { total: "MYR 50M", pctRevenue: "5.0%", yoy: "+25%", focusAreas: ["Supercharger Network", "FSD Software", "Service Platform"], source: "estimated" },
    MAHB: { total: "MYR 350M", pctRevenue: "5.5%", yoy: "+18%", focusAreas: ["Smart Airport", "Passenger Systems", "Cybersecurity"], source: "estimated" },
    MAG: { total: "MYR 450M", pctRevenue: "3.2%", yoy: "+12%", focusAreas: ["Revenue Management", "Digital Booking", "Fleet Analytics"], source: "estimated" },
    GARDENIA: { total: "MYR 25M", pctRevenue: "1.5%", yoy: "+8%", focusAreas: ["Supply Chain", "ERP Systems", "Route Planning"], source: "estimated" },
    PANASONIC_MY: { total: "MYR 80M", pctRevenue: "2.8%", yoy: "+10%", focusAreas: ["Factory Automation", "IoT Products", "Quality AI"], source: "estimated" },
    ALAMFLORA: { total: "MYR 35M", pctRevenue: "2.5%", yoy: "+12%", focusAreas: ["Fleet GPS", "Smart Bins", "Route Optimisation"], source: "estimated" },
    SILVERVALLEY: { total: "MYR 15M", pctRevenue: "2.0%", yoy: "+8%", focusAreas: ["Client Systems", "Cloud Infra", "Analytics"], source: "estimated" },
    KDN: { total: "MYR 380M", pctRevenue: "N/A", yoy: "+10%", focusAreas: ["Immigration Digital", "Border Security", "PDRM Systems"], source: "estimated" },
    MINDEF: { total: "MYR 420M", pctRevenue: "N/A", yoy: "+8%", focusAreas: ["Defence Comms", "Cyber Defence", "C4I Systems"], source: "estimated" },
    MOD: { total: "MYR 550M", pctRevenue: "N/A", yoy: "+22%", focusAreas: ["5G Policy", "Gov Cloud", "AI Governance"], source: "estimated" },
    MAMPU: { total: "MYR 320M", pctRevenue: "N/A", yoy: "+15%", focusAreas: ["MyGov Platform", "Shared Services", "E-Government"], source: "estimated" },
    MITI: { total: "MYR 150M", pctRevenue: "N/A", yoy: "+10%", focusAreas: ["Trade Portal", "Investment Analytics", "Digital FDI"], source: "estimated" },
    MOTAC: { total: "MYR 120M", pctRevenue: "N/A", yoy: "+12%", focusAreas: ["Tourism Digital", "Visa Systems", "Cultural Tech"], source: "estimated" },
    MOHE: { total: "MYR 280M", pctRevenue: "N/A", yoy: "+14%", focusAreas: ["EdTech Platform", "University Systems", "Research Cloud"], source: "estimated" },
    PDRM: { total: "MYR 480M", pctRevenue: "N/A", yoy: "+16%", focusAreas: ["Crime Analytics", "Body Cameras", "Cyber Crime Unit"], source: "estimated" },
    EPF: { total: "MYR 500M", pctRevenue: "N/A", yoy: "+12%", focusAreas: ["i-Akaun Digital", "Investment AI", "Member Analytics"], source: "estimated" }
  };
  for (var k in ict) if (COMPANIES[k]) COMPANIES[k].ictSpend = ict[k];

  var ins = {
    PERODUA: {
      topPriorities: [
        { priority: "Affordable EV and hybrid vehicle development", techInfluence: [
          { area: "Data & AI", detail: "AI battery management and energy optimisation for affordable hybrid/EV lineup" },
          { area: "5G & IoT", detail: "Connected vehicle telemetry for fleet monitoring and diagnostics" }
        ]},
        { priority: "Smart factory automation at Rawang plant", techInfluence: [
          { area: "5G & IoT", detail: "Private 5G and IoT sensors for robotic assembly line monitoring" },
          { area: "Data & AI", detail: "AI quality inspection and production scheduling" }
        ]},
        { priority: "Connected car features for mass market", techInfluence: [
          { area: "Connectivity", detail: "Built-in 4G connectivity for infotainment and basic telematics" },
          { area: "Data & AI", detail: "AI voice assistant and navigation localisation for Malaysian market" }
        ]},
        { priority: "After-sales service digitalisation", techInfluence: [
          { area: "Cloud", detail: "Cloud dealer management and service booking platform" },
          { area: "DevOps", detail: "Automated service workflow and warranty claims processing" }
        ]},
        { priority: "Supply chain and vendor management optimisation", techInfluence: [
          { area: "Data & AI", detail: "AI demand forecasting for parts and raw material procurement" },
          { area: "Cloud", detail: "Cloud-based vendor management portal for supplier coordination" }
        ]}
      ],
      painPoints: ["Daihatsu/Toyota technology dependency limiting independent digital strategy decisions", "Mass market price sensitivity constraining per-vehicle technology cost budgets", "Dealer network uneven digital readiness with many small rural dealers", "EV/hybrid transition technology uncertainty for affordable market segment", "Limited connected car ecosystem in Malaysia reducing consumer perceived value of vehicle connectivity"],
      strategicInvestments: ["Daihatsu-Toyota DNGA platform localisation", "Rawang plant Industry 4.0 upgrade"],
      direction: "Perodua is transitioning from pure ICE vehicles to hybrid and eventually EV through its Daihatsu-Toyota technology partnership, while automating manufacturing to maintain its cost leadership position in ASEAN.",
      partnerships: [
        { partner: "Daihatsu/Toyota", area: "DNGA Platform & Hybrid Tech", impact: "High" },
        { partner: "Denso", area: "Factory Automation", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+12-15%", narrative: "Hybrid/EV transition and Factory 4.0 upgrade are driving 12-15% tech spend growth. Connected car features in new models require incremental software and connectivity platform investment." }
    },
    HONDA_MY: {
      topPriorities: [
        { priority: "e:HEV hybrid lineup expansion in Malaysia", techInfluence: [
          { area: "Data & AI", detail: "Battery management AI and hybrid drivetrain optimisation" },
          { area: "5G & IoT", detail: "Connected vehicle IoT for hybrid system monitoring and diagnostics" }
        ]},
        { priority: "CKD manufacturing quality and automation", techInfluence: [
          { area: "5G & IoT", detail: "Factory IoT for Melaka plant automation and quality monitoring" },
          { area: "Data & AI", detail: "AI vision inspection for CKD assembly quality control" }
        ]},
        { priority: "Digital dealer experience transformation", techInfluence: [
          { area: "Cloud", detail: "Honda CONNECT cloud platform for dealer management and CRM" },
          { area: "Connectivity", detail: "Digital showroom with online configurator and virtual viewing" }
        ]},
        { priority: "Customer digital engagement via Honda CONNECT", techInfluence: [
          { area: "Connectivity", detail: "4G connected car services and mobile app ecosystem" },
          { area: "Cloud", detail: "Cloud backend for Honda CONNECT user services and data" }
        ]},
        { priority: "After-sales parts and service optimisation", techInfluence: [
          { area: "Data & AI", detail: "AI-driven parts demand forecasting and service scheduling" },
          { area: "DevOps", detail: "Automated service campaign deployment and recall management" }
        ]}
      ],
      painPoints: ["Honda Global technology platform not always optimised for Malaysian market requirements", "Chinese EV competition (BYD, Chery) pressuring Honda's market position on price and features", "Melaka factory scale constraints limiting advanced automation investment justification", "Limited EV model availability vs. competitors already offering full BEV lineup in Malaysia", "Dealer independence model limiting standardisation of digital customer experience"],
      strategicInvestments: ["Melaka plant automation for e:HEV models", "Honda CONNECT digital services platform"],
      direction: "Honda Malaysia is accelerating its electrification strategy with e:HEV hybrid models while digitising the dealer experience through Honda CONNECT, maintaining premium positioning against rising Chinese EV competition.",
      partnerships: [
        { partner: "Honda Global", area: "e:HEV Technology Transfer", impact: "High" },
        { partner: "Sony Honda Mobility", area: "Future EV Platform", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+10-12%", narrative: "e:HEV production line setup and Honda CONNECT platform deployment drive 10-12% IT growth. Dealer digital transformation adds incremental spend across 100+ outlets." }
    },
    TESLA_MY: {
      topPriorities: [
        { priority: "Supercharger network expansion across Malaysia", techInfluence: [
          { area: "5G & IoT", detail: "IoT-monitored charging stations with remote diagnostics and load management" },
          { area: "Connectivity", detail: "Cellular connectivity for charger status reporting and payment processing" }
        ]},
        { priority: "FSD capability preparation for Malaysian roads", techInfluence: [
          { area: "Data & AI", detail: "Neural network training and validation for Malaysian driving conditions" },
          { area: "Cloud", detail: "Cloud fleet learning from Malaysian Tesla vehicles for FSD model improvement" }
        ]},
        { priority: "Service centre digital operations", techInfluence: [
          { area: "Cloud", detail: "Cloud-based service scheduling and parts inventory management" },
          { area: "Data & AI", detail: "AI predictive maintenance alerts for Tesla owners based on vehicle telemetry" }
        ]},
        { priority: "Over-the-air vehicle software updates", techInfluence: [
          { area: "Connectivity", detail: "Reliable 4G/5G connectivity for large OTA software downloads to vehicles" },
          { area: "DevOps", detail: "Continuous deployment pipeline for vehicle software updates across fleet" }
        ]},
        { priority: "Customer digital experience and direct sales", techInfluence: [
          { area: "Cloud", detail: "Cloud e-commerce platform for direct online vehicle ordering" },
          { area: "Cybersecurity", detail: "Vehicle data privacy and cybersecurity for connected car systems" }
        ]}
      ],
      painPoints: ["Very small Malaysia operations team limiting local technology infrastructure capacity", "Supercharger network still sparse vs. Petronas/Shell fuel station coverage creating range anxiety", "FSD regulatory approval uncertain in Malaysia with no autonomous vehicle legislation framework", "After-sales service centre limited to few locations creating customer inconvenience", "Malaysian road condition and driving behaviour data scarcity for FSD training and validation"],
      strategicInvestments: ["Supercharger V4 network build-out", "Over-the-air update infrastructure"],
      direction: "Tesla Malaysia is building out physical and digital infrastructure to support growing Model Y and Model 3 sales, with Supercharger network density and service centre capability as key competitive differentiators.",
      partnerships: [
        { partner: "Tesla Global", area: "Technology Platform", impact: "High" },
        { partner: "TNB", area: "Charging Infrastructure", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+20-25%", narrative: "Supercharger network expansion and service infrastructure build-out drive 20-25% growth from a small base. FSD software localisation for Malaysian roads represents significant future tech investment." }
    },
    MAHB: {
      topPriorities: [
        { priority: "Smart airport transformation under RM2B capital plan", techInfluence: [
          { area: "5G & IoT", detail: "Airport IoT for passenger flow, baggage handling, and facility monitoring" },
          { area: "Data & AI", detail: "AI operations optimisation for flight scheduling and resource allocation" }
        ]},
        { priority: "Passenger experience digitalisation", techInfluence: [
          { area: "Connectivity", detail: "Airport-wide Wi-Fi 6 and 5G coverage for seamless passenger connectivity" },
          { area: "Cloud", detail: "Cloud-based passenger services platform for check-in, wayfinding, and retail" }
        ]},
        { priority: "Aviation security and cybersecurity", techInfluence: [
          { area: "Cybersecurity", detail: "Critical aviation infrastructure protection under ICAO and national cyber standards" },
          { area: "5G & IoT", detail: "IoT surveillance and biometric security systems across 39 airports" }
        ]},
        { priority: "Biometric passenger processing", techInfluence: [
          { area: "Data & AI", detail: "Facial recognition AI for contactless immigration and boarding" },
          { area: "Cybersecurity", detail: "Biometric data protection and privacy compliance" }
        ]},
        { priority: "Revenue diversification through digital services", techInfluence: [
          { area: "Cloud", detail: "Digital retail and advertising platform for airport commercial revenue" },
          { area: "Data & AI", detail: "AI passenger analytics for retail tenanting and commercial space optimisation" }
        ]}
      ],
      painPoints: ["39-airport portfolio creating massive scale challenge for technology standardisation", "Aging KLIA infrastructure limiting IoT deployment without expensive terminal renovation", "Biometric privacy concerns and regulatory uncertainty slowing automated immigration adoption", "Aviation cybersecurity threats from state-sponsored actors targeting critical infrastructure", "Airport revenue dependency on passenger volumes creating budget volatility for IT investment"],
      strategicInvestments: ["KLIA aerotrain and terminal digitalisation", "Biometric passenger processing system"],
      direction: "MAHB is transforming Malaysia's 39 airports into smart airports with biometric processing, IoT-based operations, and digital passenger services, supported by a RM2B capital investment plan.",
      partnerships: [
        { partner: "SITA", area: "Airport Technology Platform", impact: "High" },
        { partner: "NEC", area: "Biometric Processing", impact: "High" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+16-20%", narrative: "RM2B smart airport plan and biometric processing deployment drive 16-20% IT growth. Post-pandemic passenger volume recovery to 110M+ supports business case for digital investment." }
    },
    MAG: {
      topPriorities: [
        { priority: "Revenue management and yield optimisation", techInfluence: [
          { area: "Data & AI", detail: "AI revenue management for dynamic pricing across 70+ routes" },
          { area: "Cloud", detail: "Cloud-hosted revenue optimisation platform processing real-time market data" }
        ]},
        { priority: "Digital booking and customer experience", techInfluence: [
          { area: "Cloud", detail: "Cloud-native booking engine for malaysiaairlines.com and mobile app" },
          { area: "Connectivity", detail: "In-flight connectivity (IFC) for premium customer experience" }
        ]},
        { priority: "Fleet modernisation and operational efficiency", techInfluence: [
          { area: "5G & IoT", detail: "Connected aircraft IoT for engine health monitoring and fuel optimisation" },
          { area: "Data & AI", detail: "AI flight operations optimisation for fuel savings and on-time performance" }
        ]},
        { priority: "Cargo digitalisation", techInfluence: [
          { area: "Cloud", detail: "Cloud cargo management platform for MASkargo digital transformation" },
          { area: "Connectivity", detail: "Real-time cargo tracking connectivity for supply chain visibility" }
        ]},
        { priority: "Loyalty programme and ancillary revenue", techInfluence: [
          { area: "Data & AI", detail: "AI personalisation for Enrich loyalty programme and ancillary offers" },
          { area: "Cloud", detail: "Cloud CRM for 6M+ Enrich members" }
        ]}
      ],
      painPoints: ["Financial recovery still ongoing limiting discretionary technology investment budget", "Legacy PSS (Passenger Service System) constraining digital innovation speed", "In-flight connectivity infrastructure costly with uncertain passenger willingness to pay", "Competition from AirAsia and Singapore Airlines with more advanced digital platforms", "Cargo digitalisation lagging behind industry leaders like Cathay and Emirates"],
      strategicInvestments: ["Revenue management AI system upgrade", "Malaysia Airlines digital booking platform overhaul"],
      direction: "Malaysia Aviation Group is completing its turnaround through digital revenue management and customer experience transformation, aiming to restore Malaysia Airlines to profitability through yield optimisation and operational efficiency.",
      partnerships: [
        { partner: "Amadeus", area: "Revenue Management & PSS", impact: "High" },
        { partner: "Sabre", area: "Distribution Technology", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+10-14%", narrative: "Revenue management AI and digital booking transformation drive 10-14% IT growth. Fleet modernisation with A330neo adds connected aircraft capabilities requiring digital investment." }
    },
    GARDENIA: {
      topPriorities: [
        { priority: "Supply chain and distribution optimisation", techInfluence: [
          { area: "Data & AI", detail: "AI demand forecasting for optimal production planning and freshness" },
          { area: "Connectivity", detail: "GPS fleet tracking for delivery route monitoring and efficiency" }
        ]},
        { priority: "Production quality automation", techInfluence: [
          { area: "5G & IoT", detail: "IoT production line sensors for quality monitoring and temperature control" },
          { area: "Data & AI", detail: "AI vision inspection for product quality consistency" }
        ]},
        { priority: "Route-to-market efficiency", techInfluence: [
          { area: "Data & AI", detail: "AI route optimisation for daily bread delivery across thousands of retail points" },
          { area: "Cloud", detail: "Cloud distribution management for real-time delivery tracking" }
        ]},
        { priority: "Inventory management and waste reduction", techInfluence: [
          { area: "Data & AI", detail: "ML demand prediction to reduce overproduction and bread waste" },
          { area: "Cloud", detail: "Cloud inventory platform connecting production with retail stock levels" }
        ]},
        { priority: "Food safety and traceability", techInfluence: [
          { area: "5G & IoT", detail: "IoT temperature monitoring for cold chain compliance" },
          { area: "Cybersecurity", detail: "Food safety data integrity and production record protection" }
        ]}
      ],
      painPoints: ["Thin FMCG margins limiting technology investment capacity for non-essential digitalisation", "Daily perishable delivery model creating zero-tolerance for distribution technology failures", "Thousands of small retail delivery points with no digital ordering capability", "Production facility automation constrained by continuous operation requirements limiting upgrade windows", "Limited in-house IT capability for a manufacturing-focused organisation"],
      strategicInvestments: ["Production line automation upgrade", "Distribution route optimisation system"],
      direction: "Gardenia is incrementally digitising its production and distribution operations to maintain freshness guarantees and market leadership in Malaysia's packaged bread segment.",
      partnerships: [
        { partner: "QAF Group", area: "Parent Group Operations", impact: "Medium" },
        { partner: "SAP", area: "ERP & Supply Chain", impact: "Medium" }
      ],
      spendOutlook: { trend: "Stable", delta: "+6-8%", narrative: "Production automation and route optimisation drive steady 6-8% IT growth. FMCG margins limit transformative digital investment, keeping spend focused on operational efficiency." }
    },
    PANASONIC_MY: {
      topPriorities: [
        { priority: "Factory IoT and smart manufacturing", techInfluence: [
          { area: "5G & IoT", detail: "IoT sensor network across Shah Alam plant for equipment monitoring and OEE" },
          { area: "Data & AI", detail: "AI predictive maintenance and production quality analytics" }
        ]},
        { priority: "Product innovation with connected appliances", techInfluence: [
          { area: "5G & IoT", detail: "Wi-Fi/IoT enabled home appliances for Panasonic smart home ecosystem" },
          { area: "Connectivity", detail: "Connected appliance platform for remote control and energy monitoring" }
        ]},
        { priority: "Quality control AI deployment", techInfluence: [
          { area: "Data & AI", detail: "Computer vision AI for automated defect detection on production lines" },
          { area: "DevOps", detail: "ML model deployment pipeline for quality inspection system updates" }
        ]},
        { priority: "Energy management and sustainability", techInfluence: [
          { area: "5G & IoT", detail: "IoT energy monitoring for factory carbon footprint reduction" },
          { area: "Data & AI", detail: "AI energy optimisation for manufacturing processes" }
        ]},
        { priority: "Supply chain and inventory management", techInfluence: [
          { area: "Cloud", detail: "Cloud ERP for production planning and parts inventory management" },
          { area: "Data & AI", detail: "AI demand forecasting for consumer electronics market planning" }
        ]}
      ],
      painPoints: ["Global Panasonic platform mandates sometimes misaligned with Malaysian manufacturing needs", "Consumer electronics margin pressure limiting per-unit technology investment in connected products", "Smart home market adoption slow in Malaysia due to price sensitivity and limited IoT ecosystem", "Factory automation retrofit complexity in existing Shah Alam facility", "Competition from Chinese manufacturers (Xiaomi, Midea) with lower-cost connected appliances"],
      strategicInvestments: ["Shah Alam plant IoT sensor network", "Connected home appliance platform"],
      direction: "Panasonic Malaysia is transforming its manufacturing base with Industry 4.0 IoT while developing connected home appliances, leveraging the global Panasonic technology stack for faster local deployment.",
      partnerships: [
        { partner: "Panasonic Global", area: "Group Technology Platform", impact: "High" },
        { partner: "Siemens", area: "Factory Automation", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+10-12%", narrative: "Factory IoT deployment and connected appliance development drive 10-12% IT growth. Global Panasonic digital mandates accelerate local smart manufacturing investment." }
    },
    ALAMFLORA: {
      topPriorities: [
        { priority: "Fleet management and route optimisation", techInfluence: [
          { area: "Data & AI", detail: "AI route optimisation for waste collection across concession areas" },
          { area: "5G & IoT", detail: "GPS and IoT fleet telemetry for vehicle tracking and maintenance" }
        ]},
        { priority: "Smart waste bin IoT monitoring", techInfluence: [
          { area: "5G & IoT", detail: "Fill-level sensors and LPWAN connectivity for smart bin monitoring" },
          { area: "Data & AI", detail: "AI analytics for demand-driven collection scheduling based on fill levels" }
        ]},
        { priority: "Environmental compliance and reporting", techInfluence: [
          { area: "Data & AI", detail: "Environmental compliance analytics and automated regulatory reporting" },
          { area: "Cloud", detail: "Cloud-based environmental data platform for waste management reporting" }
        ]},
        { priority: "Workforce digital enablement", techInfluence: [
          { area: "Connectivity", detail: "Mobile apps for field workers covering route assignments and reporting" },
          { area: "Cloud", detail: "Cloud-based workforce management and scheduling platform" }
        ]},
        { priority: "Citizen engagement and service quality", techInfluence: [
          { area: "Cloud", detail: "Cloud-hosted complaint management and service quality tracking" },
          { area: "Connectivity", detail: "Digital channels for citizen waste management service requests" }
        ]}
      ],
      painPoints: ["Government concession model with fixed-price contracts limiting technology investment returns", "Smart bin IoT connectivity challenges in low-coverage suburban and rural areas", "Low-tech workforce requiring extensive training for digital tool adoption", "Limited technology vendor interest in waste management sector reducing procurement options", "Budget constraints from concession pricing pressure limiting discretionary IT spending"],
      strategicInvestments: ["GPS fleet tracking and route AI platform", "Smart bin fill-level sensors pilot"],
      direction: "Alam Flora is piloting smart waste management technology with IoT bin sensors and AI route optimisation, aiming to improve collection efficiency and reduce costs across its concession areas.",
      partnerships: [
        { partner: "DRB-HICOM", area: "Parent Group Technology", impact: "Medium" },
        { partner: "Ecube Labs", area: "Smart Bin Technology", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+12-14%", narrative: "Smart bin IoT pilot scaling and fleet AI optimisation drive 12-14% IT growth from a small base. Government waste management digitalisation mandates support continued investment." }
    },
    SILVERVALLEY: {
      topPriorities: [
        { priority: "Client service digital platforms", techInfluence: [
          { area: "Cloud", detail: "Cloud CRM for client relationship management and service delivery" },
          { area: "Connectivity", detail: "Digital client portal for service requests and communication" }
        ]},
        { priority: "Operational efficiency and cost management", techInfluence: [
          { area: "Cloud", detail: "Cloud-based operations management reducing IT infrastructure costs" },
          { area: "Data & AI", detail: "Basic analytics for operational efficiency and resource planning" }
        ]},
        { priority: "Data analytics for business insights", techInfluence: [
          { area: "Data & AI", detail: "Business intelligence dashboards for management decision support" },
          { area: "Cloud", detail: "Cloud BI platform for cross-business unit reporting" }
        ]},
        { priority: "Financial management and reporting", techInfluence: [
          { area: "Cloud", detail: "Cloud accounting and financial management system" },
          { area: "DevOps", detail: "Automated financial reporting workflows" }
        ]},
        { priority: "Basic cybersecurity posture", techInfluence: [
          { area: "Cybersecurity", detail: "Foundational security controls and data protection compliance" },
          { area: "Cloud", detail: "Cloud security for business application protection" }
        ]}
      ],
      painPoints: ["Small scale operations with very limited IT budget", "Minimal in-house technology expertise", "Low digital maturity requiring foundational infrastructure before transformation", "Multiple business lines creating fragmented technology needs", "Limited vendor interest in small enterprise digital transformation projects"],
      strategicInvestments: ["Cloud-based client management platform", "Business intelligence dashboard"],
      direction: "Silver Valley is selectively digitising client-facing and operational processes, taking a pragmatic approach to technology investment aligned with its diversified business model.",
      partnerships: [
        { partner: "Salesforce", area: "Client Management CRM", impact: "Medium" },
        { partner: "AWS", area: "Cloud Infrastructure", impact: "Low" }
      ],
      spendOutlook: { trend: "Stable", delta: "+6-8%", narrative: "Cloud CRM and business intelligence investments drive steady 6-8% IT growth. Limited scale constrains transformative digital investment, keeping spend focused on operational tools." }
    },
    KDN: {
      topPriorities: [
        { priority: "Immigration system digitalisation (MyIMMs)", techInfluence: [
          { area: "Cloud", detail: "Cloud-scalable immigration processing for millions of annual applications" },
          { area: "Data & AI", detail: "AI document verification and visa risk assessment automation" }
        ]},
        { priority: "National security surveillance and intelligence", techInfluence: [
          { area: "Data & AI", detail: "AI surveillance analytics and pattern recognition for security intelligence" },
          { area: "Cybersecurity", detail: "Classified data protection and secure intelligence systems" }
        ]},
        { priority: "Border control biometric systems", techInfluence: [
          { area: "Data & AI", detail: "Facial recognition and biometric matching AI for border control checkpoints" },
          { area: "5G & IoT", detail: "IoT biometric terminals at 100+ border checkpoints and airports" }
        ]},
        { priority: "Cyber crime investigation capability", techInfluence: [
          { area: "Cybersecurity", detail: "Digital forensics and cyber crime investigation tools and platforms" },
          { area: "Data & AI", detail: "AI-powered cyber threat analysis and criminal network detection" }
        ]},
        { priority: "Citizen services digitalisation", techInfluence: [
          { area: "Cloud", detail: "Cloud government services for passport, identity card applications" },
          { area: "Connectivity", detail: "Online and mobile channels for citizen document applications" }
        ]}
      ],
      painPoints: ["Critical national security data requiring extreme cybersecurity measures and air-gapped systems", "Immigration system peak-load challenges during holiday seasons and worker permit deadlines", "Biometric database privacy concerns from civil society and regulatory oversight gaps", "Government procurement complexity slowing technology deployment timelines", "Integration challenges between immigration, police, and border agencies' legacy systems"],
      strategicInvestments: ["MyIMMs immigration digital platform upgrade", "Integrated border management system"],
      direction: "KDN is digitising Malaysia's immigration, border security, and national registration systems to enhance national security while improving citizen service delivery at immigration counters.",
      partnerships: [
        { partner: "IRIS Corporation", area: "Biometric & Immigration", impact: "High" },
        { partner: "NEC", area: "Facial Recognition", impact: "High" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+10-12%", narrative: "Immigration digitalisation and biometric border security drive 10-12% annual growth. Cyber Security Bill 2024 mandates additional security infrastructure investment for critical government systems." }
    },
    MINDEF: {
      topPriorities: [
        { priority: "Defence modernisation and C4I systems", techInfluence: [
          { area: "Cybersecurity", detail: "Military-grade encrypted communications and command networks" },
          { area: "Data & AI", detail: "AI-enhanced intelligence analysis and threat assessment" }
        ]},
        { priority: "Cyber defence capability development", techInfluence: [
          { area: "Cybersecurity", detail: "Dedicated military cyber defence operations centre and red team capability" },
          { area: "Data & AI", detail: "AI-powered cyber threat detection and attribution" }
        ]},
        { priority: "Defence procurement digitalisation", techInfluence: [
          { area: "Cloud", detail: "Secure cloud platform for defence procurement and logistics management" },
          { area: "DevOps", detail: "Automated defence procurement workflows and vendor management" }
        ]},
        { priority: "Military communications modernisation", techInfluence: [
          { area: "Connectivity", detail: "Secure tactical communications network upgrade for armed forces" },
          { area: "5G & IoT", detail: "Military IoT for battlefield awareness and equipment tracking" }
        ]},
        { priority: "Training simulation and digital readiness", techInfluence: [
          { area: "Data & AI", detail: "AI simulation and war-gaming platforms for military training" },
          { area: "Cloud", detail: "Cloud-based training management and readiness tracking" }
        ]}
      ],
      painPoints: ["Classified information handling requirements creating extreme technology deployment constraints", "Defence budget allocation competing between equipment procurement and digital modernisation", "Military technology vendor lock-in with long procurement cycles and limited competition", "Cyber defence talent competing with private sector offering 2-3x military compensation", "Legacy military communication systems with long upgrade cycles limiting digital interoperability"],
      strategicInvestments: ["Integrated C4I command system upgrade", "Cyber defence operations centre"],
      direction: "MINDEF is modernising Malaysia's defence capabilities with digital C4I systems and dedicated cyber defence operations, driven by rising regional security tensions and evolving threat landscapes.",
      partnerships: [
        { partner: "Thales", area: "Defence Communications", impact: "High" },
        { partner: "BAE Systems", area: "C4I Systems", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+8-10%", narrative: "C4I modernisation and cyber defence centre build-out drive 8-10% annual IT growth. Regional security dynamics ensure sustained defence technology investment allocation in federal budgets." }
    },
    MOD: {
      topPriorities: [
        { priority: "National 5G rollout governance and policy", techInfluence: [
          { area: "5G & IoT", detail: "5G spectrum policy and nationwide deployment framework governing DNB and telcos" },
          { area: "Connectivity", detail: "National broadband connectivity targets under JENDELA initiative" }
        ]},
        { priority: "Malaysia AI governance framework", techInfluence: [
          { area: "Data & AI", detail: "National AI policy and ethical AI governance framework for public and private sector" },
          { area: "Cloud", detail: "Sovereign AI Cloud infrastructure policy (RM2B MCMC allocation)" }
        ]},
        { priority: "Cybersecurity national strategy implementation", techInfluence: [
          { area: "Cybersecurity", detail: "Cyber Security Bill 2024 implementation and national CERT capabilities" },
          { area: "Data & AI", detail: "AI-powered national cyber threat monitoring and response" }
        ]},
        { priority: "Digital economy and startup ecosystem", techInfluence: [
          { area: "Cloud", detail: "Cloud infrastructure policy to attract hyperscaler investment in Malaysia" },
          { area: "DevOps", detail: "Developer ecosystem and digital talent pipeline programmes" }
        ]},
        { priority: "Data governance and digital identity", techInfluence: [
          { area: "Cybersecurity", detail: "National digital identity framework and data protection enforcement" },
          { area: "Connectivity", detail: "Digital infrastructure standards for public sector connectivity" }
        ]}
      ],
      painPoints: ["Policy coordination complexity across multiple ministries and agencies for digital agenda", "DNB 5G single wholesale model creating industry controversy and investment uncertainty", "AI governance framework development lagging behind rapid private sector AI adoption", "Cybersecurity Bill 2024 enforcement requiring capability build-up across government agencies", "Budget constraints limiting sovereign AI Cloud ambitions relative to Singapore and Thailand"],
      strategicInvestments: ["National AI Office (RM10M allocation Budget 2025)", "Sovereign AI Cloud infrastructure (RM2B via MCMC)"],
      direction: "Ministry of Digital is the architect of Malaysia's digital future, driving 5G policy, AI governance, and cybersecurity strategy under the MyDIGITAL blueprint to position Malaysia as ASEAN's digital hub.",
      partnerships: [
        { partner: "NVIDIA", area: "Sovereign AI Infrastructure", impact: "High" },
        { partner: "Google", area: "Cloud & AI Development", impact: "High" },
        { partner: "AWS", area: "Data Centre Investment", impact: "High" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+20-25%", narrative: "Sovereign AI Cloud (RM2B), National AI Office, and Cyber Security Bill implementation drive 20-25% annual growth. Malaysia's digital hub ambitions ensure MOD receives growing budget allocations through 2030." }
    },
    MAMPU: {
      topPriorities: [
        { priority: "MyGov one-stop digital government platform", techInfluence: [
          { area: "Cloud", detail: "Cloud-native MyGov platform serving 33M citizens across 700+ government services" },
          { area: "DevOps", detail: "Agile development and continuous deployment for MyGov feature updates" }
        ]},
        { priority: "Government shared services modernisation", techInfluence: [
          { area: "Cloud", detail: "MyGovCloud infrastructure for whole-of-government cloud migration" },
          { area: "Data & AI", detail: "Government data analytics platform for policy insights and service optimisation" }
        ]},
        { priority: "Public sector cloud-first migration", techInfluence: [
          { area: "Cloud", detail: "Cloud-first policy mandate for all government agencies moving workloads to MyGovCloud" },
          { area: "Cybersecurity", detail: "Government cloud security standards and data classification framework" }
        ]},
        { priority: "Digital public service delivery", techInfluence: [
          { area: "Connectivity", detail: "Government service access via mobile and web for all citizens" },
          { area: "Data & AI", detail: "AI chatbots and virtual assistants for government service enquiries" }
        ]},
        { priority: "Government data sharing and interoperability", techInfluence: [
          { area: "Data & AI", detail: "Government data exchange platform for cross-agency data sharing" },
          { area: "Cybersecurity", detail: "Secure API gateway for government system interoperability" }
        ]}
      ],
      painPoints: ["700+ government services creating massive integration and standardisation challenge", "Agency resistance to cloud migration due to data sovereignty and security concerns", "Legacy government IT systems with decades of technical debt requiring costly modernisation", "Civil service digital skills gap limiting adoption of new government digital platforms", "Budget cycle constraints with annual appropriations limiting multi-year technology programmes"],
      strategicInvestments: ["MyGov mobile app (RM20M Budget 2026 allocation)", "Government cloud infrastructure (MyGovCloud)"],
      direction: "MAMPU is modernising Malaysia's public service delivery through the MyGov platform and government cloud, aiming to provide seamless digital government services to 33 million citizens.",
      partnerships: [
        { partner: "Microsoft", area: "Government Cloud", impact: "High" },
        { partner: "MDEC", area: "Digital Government Coordination", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+14-16%", narrative: "MyGov platform expansion and government cloud migration drive 14-16% annual growth. Budget 2026 digital allocations confirm sustained government commitment to e-government investment." }
    },
    MITI: {
      topPriorities: [
        { priority: "Digital trade facilitation and single window", techInfluence: [
          { area: "Cloud", detail: "Cloud-based National Single Window for trade document processing" },
          { area: "Connectivity", detail: "Cross-border digital trade connectivity with ASEAN and global partners" }
        ]},
        { priority: "FDI investment analytics and tracking", techInfluence: [
          { area: "Data & AI", detail: "AI investment analytics for semiconductor, EV, and digital economy FDI tracking" },
          { area: "Cloud", detail: "Cloud investment tracking platform for MIDA and investment agencies" }
        ]},
        { priority: "NIMP 2030 digital industry development", techInfluence: [
          { area: "Data & AI", detail: "AI-driven industry mapping and competitiveness analytics for NIMP 2030 sectors" },
          { area: "5G & IoT", detail: "5G and IoT infrastructure requirements for Industry 4.0 manufacturing sectors" }
        ]},
        { priority: "Export promotion digitalisation", techInfluence: [
          { area: "Cloud", detail: "Digital export promotion platform and market intelligence for Malaysian exporters" },
          { area: "Connectivity", detail: "Trade data connectivity with global trade intelligence databases" }
        ]},
        { priority: "SME digitalisation support", techInfluence: [
          { area: "Cloud", detail: "Cloud adoption support programmes for manufacturing SME digitalisation" },
          { area: "DevOps", detail: "SME digital readiness assessment and technology adoption tools" }
        ]}
      ],
      painPoints: ["Trade facilitation digitisation requiring coordination across customs, port, and regulatory agencies", "FDI decision-making data fragmented across multiple agencies (MIDA, InvestKL, state IDAs)", "NIMP 2030 digital industry targets requiring policy coordination across 20+ government agencies", "SME digital adoption rates still low despite government incentive programmes", "Global trade disruption (US-China tensions) creating policy uncertainty for digital trade planning"],
      strategicInvestments: ["National Investment Portal digital platform", "Trade analytics and monitoring system"],
      direction: "MITI is digitising Malaysia's trade and investment ecosystem under NIMP 2030, using analytics to attract high-tech FDI and streamline trade facilitation for the semiconductor and digital economy sectors.",
      partnerships: [
        { partner: "MIDA", area: "Investment Promotion Digital", impact: "High" },
        { partner: "World Bank", area: "Trade Facilitation Technology", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+10-12%", narrative: "NIMP 2030 digital industry strategy and trade analytics platforms drive 10-12% annual growth. Semiconductor FDI influx creates demand for investment tracking and regulatory technology." }
    },
    MOTAC: {
      topPriorities: [
        { priority: "Tourism Malaysia digital marketing transformation", techInfluence: [
          { area: "Data & AI", detail: "AI-driven tourism marketing analytics and campaign optimisation for 35.6M visitor target" },
          { area: "Cloud", detail: "Cloud digital marketing platform for Tourism Malaysia global campaigns" }
        ]},
        { priority: "E-visa and arrival digitalisation", techInfluence: [
          { area: "Cloud", detail: "Cloud-scalable e-visa processing for high-volume tourist countries" },
          { area: "Cybersecurity", detail: "Visa data security and fraud prevention for digital immigration" }
        ]},
        { priority: "Cultural heritage digital preservation", techInfluence: [
          { area: "Cloud", detail: "Cloud-based digital archives for Malaysian cultural heritage" },
          { area: "Data & AI", detail: "AI cataloguing and virtual reality for cultural heritage experiences" }
        ]},
        { priority: "Tourism industry data and analytics", techInfluence: [
          { area: "Data & AI", detail: "Tourism statistics analytics and visitor behaviour insights platform" },
          { area: "Connectivity", detail: "Connected tourism data from hotels, attractions, and transport operators" }
        ]},
        { priority: "Tourist experience digitalisation", techInfluence: [
          { area: "Connectivity", detail: "Tourist-facing digital services including Wi-Fi, apps, and wayfinding" },
          { area: "5G & IoT", detail: "IoT smart tourism at key attractions for visitor management" }
        ]}
      ],
      painPoints: ["Tourism industry fragmentation with thousands of small operators resisting digitalisation", "E-visa integration challenges with immigration department legacy systems", "Tourism data gaps with limited real-time visitor tracking and spending analytics", "Budget constraints for large-scale digital marketing transformation", "Cultural heritage digitalisation requiring specialised expertise not readily available in government"],
      strategicInvestments: ["Tourism digital marketing and analytics platform", "E-visa processing system enhancement"],
      direction: "MOTAC is digitising Malaysia's tourism ecosystem to achieve 35.6M tourist targets, using digital marketing analytics and streamlined visa processing to enhance visitor experience and marketing ROI.",
      partnerships: [
        { partner: "Google", area: "Tourism Digital Marketing", impact: "High" },
        { partner: "Immigration Dept", area: "E-Visa Integration", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+12-14%", narrative: "Tourism digital marketing platform and e-visa modernisation drive 12-14% annual growth. Record tourist targets create urgency for digital visitor management and marketing investment." }
    },
    MOHE: {
      topPriorities: [
        { priority: "University digital learning infrastructure", techInfluence: [
          { area: "Cloud", detail: "Cloud-based learning management systems across 20 public universities" },
          { area: "Connectivity", detail: "Campus broadband and Wi-Fi upgrades for online and hybrid learning" }
        ]},
        { priority: "Research collaboration and cloud platforms", techInfluence: [
          { area: "Cloud", detail: "University research cloud for computational research and data sharing" },
          { area: "Data & AI", detail: "AI research infrastructure for university research groups" }
        ]},
        { priority: "Graduate employability through digital skills", techInfluence: [
          { area: "Data & AI", detail: "AI-assisted career matching and digital skills gap analysis for graduates" },
          { area: "DevOps", detail: "Developer bootcamps and coding education programmes" }
        ]},
        { priority: "University administration modernisation", techInfluence: [
          { area: "Cloud", detail: "Cloud-based university ERP for student management and administration" },
          { area: "Data & AI", detail: "AI analytics for student performance prediction and intervention" }
        ]},
        { priority: "Open education resources and access equity", techInfluence: [
          { area: "Cloud", detail: "Cloud platform for open educational resources accessible across all universities" },
          { area: "Connectivity", detail: "Broadband connectivity support for students in underserved areas" }
        ]}
      ],
      painPoints: ["20 public universities with varying IT maturity creating inconsistent digital learning quality", "Academic resistance to online learning compared to traditional face-to-face teaching", "Insufficient campus broadband capacity for bandwidth-intensive learning applications", "Research cloud infrastructure lagging behind Singapore and regional university competitors", "Tight budgets per university limiting technology investment to basics"],
      strategicInvestments: ["National higher education digital learning platform", "University research cloud infrastructure"],
      direction: "MOHE is building digital learning infrastructure across Malaysia's 20 public universities to improve education quality and graduate employability, with emphasis on AI and digital skills for Industry 4.0.",
      partnerships: [
        { partner: "Microsoft", area: "Education Cloud & Teams", impact: "High" },
        { partner: "Coursera", area: "Digital Skills Platform", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+13-16%", narrative: "University digital learning platforms and research cloud infrastructure drive 13-16% annual growth. Graduate digital skills mandate ensures MOHE receives growing technology allocations." }
    },
    PDRM: {
      topPriorities: [
        { priority: "Cyber crime investigation capability", techInfluence: [
          { area: "Cybersecurity", detail: "Digital forensics labs and cyber crime investigation tools for rising online fraud" },
          { area: "Data & AI", detail: "AI-powered fraud detection and criminal network analysis" }
        ]},
        { priority: "Body camera and surveillance network", techInfluence: [
          { area: "5G & IoT", detail: "Body-worn cameras with 4G/5G upload for 130,000+ police personnel" },
          { area: "Cloud", detail: "Cloud video evidence management for body camera and CCTV footage" }
        ]},
        { priority: "Crime analytics and predictive policing", techInfluence: [
          { area: "Data & AI", detail: "AI crime pattern analysis and predictive hotspot mapping" },
          { area: "Cloud", detail: "Cloud crime analytics platform integrating multiple data sources" }
        ]},
        { priority: "Communications modernisation", techInfluence: [
          { area: "Connectivity", detail: "Police radio and communications system digital upgrade" },
          { area: "5G & IoT", detail: "Mobile data terminals in patrol vehicles for real-time information access" }
        ]},
        { priority: "Digital evidence management", techInfluence: [
          { area: "Cloud", detail: "Cloud-based digital evidence chain-of-custody and management system" },
          { area: "Cybersecurity", detail: "Secure evidence handling and tamper-proof digital forensic processes" }
        ]}
      ],
      painPoints: ["130,000+ personnel scale creating massive body camera deployment and data management challenge", "Digital forensics capability lagging behind sophistication of cyber criminals and online fraud", "Police communication legacy systems with interoperability gaps between states and units", "Body camera video data storage costs growing exponentially with deployment scale", "Privacy and civil liberties concerns about surveillance technology expansion"],
      strategicInvestments: ["National body camera deployment programme", "Integrated crime analytics platform"],
      direction: "PDRM is modernising law enforcement with digital evidence management, crime analytics, and cyber crime investigation capabilities to address evolving threats from online fraud and organised digital crime.",
      partnerships: [
        { partner: "Motorola Solutions", area: "Body Cameras & Comms", impact: "High" },
        { partner: "Palantir", area: "Crime Analytics Platform", impact: "Medium" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+14-18%", narrative: "Body camera programme and crime analytics platform drive 14-18% annual growth. Rising cyber crime and online fraud create sustained demand for digital investigation and surveillance technology." }
    },
    EPF: {
      topPriorities: [
        { priority: "i-Akaun digital member services expansion", techInfluence: [
          { area: "Cloud", detail: "Cloud-native i-Akaun platform for 15M members with real-time account access" },
          { area: "Connectivity", detail: "Mobile-first digital services for member contributions, withdrawals, and portfolio views" }
        ]},
        { priority: "Investment portfolio AI and analytics", techInfluence: [
          { area: "Data & AI", detail: "AI portfolio optimisation and risk analytics for RM1T+ AUM" },
          { area: "Cloud", detail: "Cloud-based investment management platform for multi-asset analytics" }
        ]},
        { priority: "Member retirement adequacy analytics", techInfluence: [
          { area: "Data & AI", detail: "AI retirement adequacy modelling and personalised savings recommendations for 15M members" },
          { area: "Cloud", detail: "Cloud analytics for population-level retirement readiness analysis" }
        ]},
        { priority: "Fraud detection and member data security", techInfluence: [
          { area: "Cybersecurity", detail: "Protection of 15M member financial records from cyber threats and fraud" },
          { area: "Data & AI", detail: "AI-based fraud detection for withdrawal and contribution anomalies" }
        ]},
        { priority: "Flexible withdrawal policy digital infrastructure", techInfluence: [
          { area: "Cloud", detail: "Scalable cloud infrastructure handling policy-driven demand surges (e.g., Account 3 launches)" },
          { area: "DevOps", detail: "Rapid deployment pipeline for new withdrawal programme feature releases" }
        ]}
      ],
      painPoints: ["15M member base creating extreme scaling challenges during new withdrawal programme launches", "i-Akaun system capacity limitations exposed during Account 3 withdrawal surge", "Investment management technology complexity for RM1T+ multi-asset class portfolio", "Cybersecurity risk from managing Malaysia's largest pool of individual financial data", "Government policy changes requiring rapid IT system modifications with short implementation timelines"],
      strategicInvestments: ["i-Akaun 2.0 next-generation digital platform", "AI-driven investment management system"],
      direction: "EPF is transforming from a traditional provident fund into a digitally-enabled retirement savings institution, using AI for investment management and expanding digital self-service for 15 million members.",
      partnerships: [
        { partner: "Infosys", area: "Digital Platform Development", impact: "High" },
        { partner: "BlackRock Aladdin", area: "Investment Analytics", impact: "High" }
      ],
      spendOutlook: { trend: "Increasing", delta: "+12-14%", narrative: "i-Akaun 2.0 platform and AI investment management drive 12-14% annual growth. Flexible withdrawal policy changes require agile digital infrastructure, adding incremental tech spend." }
    }
  };
  for (var k in ins) if (COMPANIES[k]) COMPANIES[k].industryInsights = ins[k];
})();
