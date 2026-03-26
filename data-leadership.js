(function() {
  var ld = {
    // ===== US Tech Giants =====
    AAPL: [
      { name: "Tim Cook", title: "Chief Executive Officer" },
      { name: "Craig Federighi", title: "SVP, Software Engineering" },
      { name: "John Ternus", title: "SVP, Hardware Engineering" },
      { name: "John Giannandrea", title: "SVP, Machine Learning & AI Strategy" }
    ],
    MSFT: [
      { name: "Satya Nadella", title: "Chief Executive Officer" },
      { name: "Kevin Scott", title: "Chief Technology Officer" },
      { name: "Mustafa Suleyman", title: "EVP & CEO, Microsoft AI" },
      { name: "Andrew Wilson", title: "Chief Digital Officer" }
    ],
    GOOGL: [
      { name: "Sundar Pichai", title: "Chief Executive Officer" },
      { name: "Koray Kavukcuoglu", title: "Chief Technology Officer, DeepMind" },
      { name: "Demis Hassabis", title: "CEO, Google DeepMind" },
      { name: "Phil Venables", title: "VP & CISO, Google Cloud" }
    ],
    AMZN: [
      { name: "Andy Jassy", title: "Chief Executive Officer" },
      { name: "Werner Vogels", title: "Chief Technology Officer" },
      { name: "Matt Garman", title: "CEO, AWS" },
      { name: "Peter DeSantis", title: "SVP, AI/Silicon/Quantum" }
    ],
    NVDA: [
      { name: "Jensen Huang", title: "Chief Executive Officer" },
      { name: "Michael Kagan", title: "Chief Technology Officer" },
      { name: "Bill Dally", title: "Chief Scientist" }
    ],
    META: [
      { name: "Mark Zuckerberg", title: "Chief Executive Officer" },
      { name: "Andrew Bosworth", title: "Chief Technology Officer" },
      { name: "Atish Banerjea", title: "Chief Information Officer" },
      { name: "Guy Rosen", title: "Chief Information Security Officer" }
    ],
    TSLA: [
      { name: "Elon Musk", title: "Chief Executive Officer" },
      { name: "Ashok Elluswamy", title: "VP, AI Software" },
      { name: "Vaibhav Taneja", title: "Chief Financial Officer" }
    ],

    // ===== CelcomDigi =====
    CDB: [
      { name: "Albern Murty", title: "Chief Executive Officer" },
      { name: "Kesavan Sivabalan", title: "Chief Technology Officer" },
      { name: "Kugan Thirunavakasaru", title: "Chief Innovation Officer" }
    ],

    // ===== Malaysian Banking & Finance =====
    MAYBANK: [
      { name: "Dato' Khairussaleh Ramli", title: "Group President & CEO" },
      { name: "Giorgio Migliarina", title: "Group Chief Technology & Digital Officer" }
    ],
    CIMB: [
      { name: "Dato' Abdul Rahman Ahmad", title: "Group Chief Executive Officer" },
      { name: "Ros Aziah Mohd Yusoff", title: "Group Chief Technology Officer" }
    ],
    PBBANK: [
      { name: "Tan Sri Dato' Sri Tay Ah Lek", title: "Managing Director" }
    ],
    AFFIN: [
      { name: "Dato' Wan Razly Abdullah", title: "President & Group Chief Executive Officer" }
    ],
    AMBANK: [
      { name: "Dato' Sulaiman Mohd Tahir", title: "Group Chief Executive Officer" },
      { name: "Wong Eng Teng", title: "Group Chief Fintech & Technology Officer" }
    ],
    BKRAKYAT: [
      { name: "Dato' Sri Shazalli Ramly", title: "Group Chief Executive Officer" },
      { name: "Zulkanain Kassim", title: "Chief Information Technology Officer" }
    ],
    BSN: [
      { name: "Ahmad Faisal Abdul Halim", title: "Chief Executive Officer" },
      { name: "Lee Li Foon", title: "Chief Information Officer" }
    ],
    MBSB: [
      { name: "Dato' Nor Azam M. Taib", title: "President & Chief Executive Officer" },
      { name: "Noor Azman Abdul Karim", title: "Chief Technology Officer" }
    ],
    BNM: [
      { name: "Dato' Seri Abdul Rasheed Ghaffour", title: "Governor" },
      { name: "Gim Tay", title: "Chief Information Officer" }
    ],
    PAYNET: [
      { name: "Farhan Ahmad", title: "Group Chief Executive Officer" },
      { name: "Teh Lip Guan", title: "Chief Technology Officer" }
    ],

    // ===== GLICs =====
    PNB: [
      { name: "Ahmad Zulqarnain Onn", title: "Group Chief Executive" },
      { name: "Ts. Izzat Aziz", title: "Chief Technology Officer" }
    ],
    KHAZANAH: [
      { name: "Dato' Amirul Feisal Wan Zahir", title: "Managing Director" }
    ],
    EPF: [
      { name: "Ahmad Zulqarnain Onn", title: "Chief Executive Officer" },
      { name: "Muhammad Afhzal Abdul Rahman", title: "Chief Digital Technology Officer" }
    ],
    TABUNGHAJI: [
      { name: "Mustakim Mohamad", title: "Group Managing Director & CEO" },
      { name: "Shamsul Kamal Hussein Kamal", title: "Chief Information Officer" }
    ],
    KWAP: [
      { name: "Nik Amlizan Mohamed", title: "Chief Executive Officer" },
      { name: "Maz Mirza", title: "Chief Digital Officer" }
    ],

    // ===== Insurance =====
    AIA: [
      { name: "Heng Zee Wang", title: "Chief Executive Officer" },
      { name: "Sherlly Yuan", title: "Chief Technology Officer" },
      { name: "Ernest Khaw", title: "Head of Technology & Analytics" }
    ],
    ALLIANZ_MY: [
      { name: "Sean Wang Wee Keong", title: "Chief Executive Officer" },
      { name: "Stefan Ritz", title: "Head of IT Asia & CEO, Allianz Technology Malaysia" }
    ],
    ETIQA: [
      { name: "Kamaludin Ahmad", title: "Group Chief Executive Officer" },
      { name: "Dennis Liu", title: "CTO & Chief Digital Strategy Transformation Officer" }
    ],
    GREATEASTERN: [
      { name: "Dato' Koh Yaw Hui", title: "Chief Executive Officer" }
    ],
    LIBERTY_MY: [
      { name: "Puneet Pasricha", title: "Chief Executive Officer" },
      { name: "Ganesan Vaithilingam", title: "Chief Information Officer" }
    ],
    PRUDENTIAL_MY: [
      { name: "Kelvin Ang", title: "Chief Executive Officer" },
      { name: "Chen Loong Liaw", title: "Chief Technology Officer" }
    ],
    AMMETLIFE: [
      { name: "Wan Saifulrizal Wan Ismail", title: "Chief Executive Officer" },
      { name: "Loh Tian Hu", title: "Chief Information Officer" },
      { name: "Nelson Yu", title: "Chief Technical Officer" }
    ],

    // ===== Oil, Gas & Energy =====
    PETRONAS: [
      { name: "Tengku Muhammad Taufik", title: "President & Group Chief Executive Officer" },
      { name: "Ir Mohd Yusri Mohamed Yusof", title: "SVP, Projects, Technology & HSSE" }
    ],
    PETROS: [
      { name: "Datuk Janin Girie", title: "Group Chief Executive Officer" }
    ],
    PETRONM: [
      { name: "Lubin B. Nepomuceno", title: "Chief Executive Officer" }
    ],
    BOUSTEAD_PETROL: [
      { name: "Leslie Ng Chie Shean", title: "Chief Executive Officer" }
    ],
    CHEVRON_MY: [
      { name: "Dean Gilbert", title: "Country Chairman" }
    ],
    SHELL_MY: [
      { name: "Siti Hurrairah Sulaiman", title: "Country Chair" }
    ],
    DIALOG: [
      { name: "Mustaffa Kamal Abu Bakar", title: "Chief Executive Officer" },
      { name: "Yeong Keat Yaw", title: "Head of Digital & Technology" }
    ],
    VESTIGO: [
      { name: "Khairul Azhar Abu Bakar", title: "Chief Executive Officer" }
    ],
    VANTRIS: [
      { name: "Muhammad Zamri Jusoh", title: "Group Chief Executive Officer" }
    ],

    // ===== Utilities =====
    TNB: [
      { name: "Datuk Ir. Ts. Shamsul Ahmad", title: "President & Chief Executive Officer" },
      { name: "Azlan Ahmad", title: "Chief Digital & Information Officer" }
    ],
    AIRSELANGOR: [
      { name: "Adam Saffian Ghazali", title: "Chief Executive Officer" },
      { name: "Ts. Lip Kar Lock", title: "VP, Head of Digital & Data Management" }
    ],
    GASMSIA: [
      { name: "Azli Mohamed", title: "President & Group Chief Executive Officer" }
    ],
    KUMH: [
      { name: "Dato' Dr. Wan Zawawi", title: "General Manager" }
    ],

    // ===== Telecom =====
    ALTEL: [
      { name: "Mohamad Helmi Harith", title: "Chief Executive Officer" },
      { name: "Nathan Paul", title: "Chief Operating & Technology Officer" }
    ],
    TUNEPRO: [
      { name: "How Kim Lian", title: "Group Chief Executive Officer" },
      { name: "Prasanta Roy", title: "Group Chief Technology Officer" }
    ],

    // ===== Semiconductor =====
    UNISEM: [
      { name: "John Chia", title: "Chief Executive Officer" }
    ],
    VITROX: [
      { name: "Chu Jenn Weng", title: "President & CEO" }
    ],
    SILTERRA: [
      { name: "Dato' Dr. Haji Mohd Zafer Hashim", title: "Chief Executive Officer" },
      { name: "Yeo Chin Wah", title: "Senior Director, IT" }
    ],
    INFINEON_MY: [
      { name: "Ng Kok Tiong", title: "President, Infineon Technologies Malaysia" }
    ],

    // ===== Plantation =====
    IOI: [
      { name: "Dato' Lee Yeow Chor", title: "Group Managing Director & CEO" }
    ],
    KLK: [
      { name: "Dato' Lee Hau Hian", title: "Managing Director" }
    ],
    SDG: [
      { name: "Mohamad Helmy Othman Basha", title: "Group Managing Director" }
    ],
    FGV: [
      { name: "Mohamed Hairul Abdul Hamid", title: "Chief Executive Officer" }
    ],

    // ===== Conglomerates / Construction =====
    GAMUDA: [
      { name: "Dato' Lin Yun Ling", title: "Group Managing Director" }
    ],
    SUNWAY: [
      { name: "Tan Sri Chew Chee Kin", title: "President, Sunway Group" }
    ],
    SIME: [
      { name: "Dato' Jeffri Salim Davidson", title: "Group Chief Executive Officer" },
      { name: "Barry Wiech", title: "Chief Digital & Information Officer, Sime Darby Industrial" }
    ],
    DRB: [
      { name: "Dato' Sri Syed Faisal Albar", title: "Group Managing Director" }
    ],
    NCT: [
      { name: "Dato' Ng Kee Leen", title: "Managing Director" }
    ],

    // ===== Automotive =====
    PROTON: [
      { name: "Li Chunrong", title: "Chief Executive Officer" }
    ],
    PERODUA: [
      { name: "Dato' Sri Zainal Abidin Ahmad", title: "President & Chief Executive Officer" }
    ],
    HONDA_MY: [
      { name: "Hironobu Yoshimura", title: "Managing Director & CEO, Honda Malaysia" }
    ],
    TESLA_MY: [
      { name: "Karen Teo", title: "Regional Sales & Delivery Manager" }
    ],

    // ===== Aviation & Transport =====
    MAHB: [
      { name: "Dato' Sri Iskandar Mizal Mahmood", title: "Group Chief Executive Officer" },
      { name: "VijayKumar Dayinde", title: "Chief Information Officer" }
    ],
    MAG: [
      { name: "Dato' Captain Izham Ismail", title: "Group Chief Executive Officer" },
      { name: "Clarence Lee", title: "Group Chief Digital & IT Officer" }
    ],

    // ===== Consumer / Retail =====
    GARDENIA: [
      { name: "Francis Tan", title: "Managing Director" }
    ],
    PANASONIC_MY: [
      { name: "Takashi Sugihara", title: "Managing Director" }
    ],
    SPEEDMART: [
      { name: "Lee Thiam Wah", title: "Founder & Managing Director" }
    ],

    // ===== Other =====
    ALAMFLORA: [
      { name: "Datuk Mohd Zain Hassan", title: "Chief Executive Officer" }
    ],
    SILVERVALLEY: [
      { name: "Datuk Redza Rafiq Abdul Razak", title: "Chief Executive Officer" }
    ],
    ALBUKHARY: [
      { name: "Tan Sri Syed Mokhtar Albukhary", title: "Founder & Chairman" }
    ],
    GENTING: [
      { name: "Dato' Sri Lee Choong Yan", title: "President & Chief Operating Officer" }
    ],
    CCCC_MY: [
      { name: "Wang Tongzhou", title: "Managing Director" }
    ],
    KPJ: [
      { name: "Chin Keat Chyuan", title: "President & Managing Director" }
    ],
    GHAZANAH_SABAH: [
      { name: "Tuan Haji Mohamad Damshal Awang Damit", title: "Group Chief Executive Officer" }
    ],
    TERENGGANU_INC: [
      { name: "Dato' Burhanuddin Hilmi Mohamed", title: "Group Chief Executive Officer" }
    ],

    // ===== Infra =====
    // CCCC_MY covered above

    // ===== Government Ministries =====
    KDN: [
      { name: "Dato' Seri Saifuddin Nasution Ismail", title: "Minister of Home Affairs" },
      { name: "Dato' Sri Wan Ahmad Dahlan Abdul Aziz", title: "Secretary-General" }
    ],
    MINDEF: [
      { name: "Dato' Seri Mohamed Khaled Nordin", title: "Minister of Defence" },
      { name: "Dato' Sri Muez Abd Aziz", title: "Secretary-General" }
    ],
    MOD: [
      { name: "Gobind Singh Deo", title: "Minister of Digital" },
      { name: "Ts. Fabian Bigar", title: "Secretary-General" }
    ],
    MAMPU: [
      { name: "Ts. Nik Zalbiha Nik Mat", title: "Director General, Jabatan Digital Negara" }
    ],
    MITI: [
      { name: "Tengku Datuk Seri Zafrul Abdul Aziz", title: "Minister of Investment, Trade & Industry" },
      { name: "Datuk Seri Hairil Yahri Yaacob", title: "Secretary-General" }
    ],
    MOTAC: [
      { name: "Dato' Sri Tiong King Sing", title: "Minister of Tourism, Arts & Culture" }
    ],
    MOHE: [
      { name: "Datuk Seri Dr. Zambry Abd Kadir", title: "Minister of Higher Education" }
    ],
    PDRM: [
      { name: "Tan Sri Razarudin Husain", title: "Inspector-General of Police" }
    ],
    LHDN: [
      { name: "Datuk Dr. Abu Tariq Jamaluddin", title: "Chief Executive Officer" }
    ],
    STATE_SEL_PJ: [
      { name: "Dato' Seri Amirudin Shari", title: "Menteri Besar of Selangor" }
    ],
    MOE: [
      { name: "Fadhlina Sidek", title: "Minister of Education" }
    ]
  };

  for (var k in ld) {
    if (COMPANIES[k]) COMPANIES[k].leadership = ld[k];
  }
})();
