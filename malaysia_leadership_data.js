/**
 * Malaysian Companies & Government Entities - Key Leadership (2025-2026)
 * Research compiled March 2026
 * Format: KEY: [ { name, title }, ... ]
 */

const MALAYSIA_LEADERSHIP = {
  UNISEM: [
    { name: "John Chia", title: "Chief Executive Officer" },
    { name: "Kevin Khoo Chung Shin", title: "Senior Vice President, Group Chief Operating Officer" },
  ],

  VITROX: [
    { name: "Dato' Chu Jenn Weng", title: "President & Group Chief Executive Officer" },
  ],

  SILTERRA: [
    { name: "Dr. Albert Pang Shu Koon", title: "Chief Executive Officer" },
    { name: "Yeo Chin Wah", title: "Senior Director, Information Technology and (Acting) Human Resources" },
  ],

  INFINEON_MY: [
    { name: "Kok Tiong Ng", title: "Senior Vice President and Managing Director" },
  ],

  // PLANTATION
  IOI: [
    { name: "Dato' Lee Yeow Chor", title: "Group Managing Director and Chief Executive Officer" },
    { name: "Tan Kean Hua", title: "Deputy Group Chief Executive Officer" },
  ],

  KLK: [
    { name: "Tan Sri Dato' Seri Lee Oi Hian", title: "Executive Chairman and Chief Executive Officer" },
    { name: "Lee Jia Zhang", title: "Chief Operating Officer" },
  ],

  SDG: [
    { name: "Mohd Haris Mohd Arshad", title: "Managing Director" },
    { name: "Renaka Ramachandran", title: "Chief Executive Officer, Land and Renewable Energy" },
    { name: "Shahrizal Suhainy", title: "Chief Financial Officer" },
  ],

  FGV: [
    { name: "Mohamed Hairul bin Abdul Hamid", title: "Chief Executive Officer" },
  ],

  // CONSTRUCTION / CONGLOMERATES
  GAMUDA: [
    { name: "Datuk Lin Yun Ling", title: "Group Managing Director and Chief Executive Officer" },
  ],

  SUNWAY: [
    { name: "Datuk Mohd Anuar bin Taib", title: "President" },
    { name: "Evan Cheah Yean Shin", title: "Deputy President (Digital and Strategic Investments)" },
  ],

  SIME: [
    { name: "Dato' Jeffri Salim Davidson", title: "Group Chief Executive Officer" },
    { name: "Barry Wiech", title: "Chief Digital and Information Officer, Sime Darby Industrial" },
  ],

  DRB: [
    { name: "Datuk Sri Syed Faisal Albar Syed A.R. Albar", title: "Group Managing Director" },
  ],

  NCT: [
    { name: "Dato' Sri Yap Ngan Choy", title: "Executive Chairman and Group Managing Director" },
  ],

  // AUTOMOTIVE
  PROTON: [
    { name: "Dr Li Chunrong", title: "Chief Executive Officer" },
    { name: "Datuk Abdul Rashid Musa", title: "Deputy Chief Executive Officer" },
  ],

  PERODUA: [
    { name: "Datuk Seri Zainal Abidin Ahmad", title: "President and Chief Executive Officer" },
  ],

  HONDA_MY: [
    { name: "Narushi Yazaki", title: "Managing Director and Chief Executive Officer" },
  ],

  TESLA_MY: [
    { name: "Karen Teo", title: "Regional Sales and Delivery Manager" },
  ],

  // AVIATION
  MAHB: [
    { name: "Datuk Mohd Shukrie Mohd Salleh", title: "Group Chief Executive Officer" },
    { name: "Datuk Mohd Izani Ghani", title: "Managing Director" },
    { name: "VijayKumar Dayinde", title: "Chief Information Officer" },
    { name: "Bryan John Thompson", title: "Chief Airports Officer" },
  ],

  MAG: [
    { name: "Captain Nasaruddin A. Bakar", title: "President and Group Chief Executive Officer" },
    { name: "Clarence Lee", title: "Group Chief Digital & IT Officer" },
    { name: "Bryan Foong Chee Yeong", title: "Chief Executive Officer, Airline Business" },
  ],

  // CONSUMER / RETAIL
  GARDENIA: [
    { name: "Koh Chin Huat", title: "Chief Executive Officer" },
  ],

  PANASONIC_MY: [
    { name: "Takashi Sugihara", title: "Managing Director, Panasonic Manufacturing Malaysia Berhad" },
    { name: "Keisuke Nishida", title: "Managing Director, Panasonic Malaysia Sdn Bhd" },
  ],

  SPEEDMART: [
    { name: "Lee Thiam Wah", title: "Chief Executive Officer and Executive Director" },
  ],

  // OTHER
  ALAMFLORA: [
    { name: "Shariman Yusuf bin Mohamed Zain", title: "Chief Executive Officer" },
  ],

  SILVERVALLEY: [
    { name: "Datuk Redza Rafiq Abdul Razak", title: "Chief Executive Officer, Perak State Development Corporation (PKNPk) - SVTP Developer" },
  ],

  ALBUKHARY: [
    { name: "Tan Sri Syed Mokhtar Albukhary", title: "Founder and Chairman" },
  ],

  GENTING: [
    { name: "Dato' Tan Kong Han", title: "Chief Executive Officer, Genting Berhad" },
    { name: "Tan Sri Lim Kok Thay", title: "Executive Chairman, Genting Berhad" },
    { name: "Dato' Sri Lee Choong Yan", title: "President and Executive Director, Genting Malaysia (until April 2026)" },
  ],

  CCCC_MY: [
    { name: "Ni Qingjiu", title: "President, China Communications Construction Company (M) Sdn Bhd" },
  ],

  KPJ: [
    { name: "Chin Keat Chyuan", title: "President and Managing Director" },
  ],

  GHAZANAH_SABAH: [
    { name: "Mohamad Damshal Awang Damit", title: "Group Chief Executive Officer" },
    { name: "Anifah Aman", title: "Chairman" },
  ],

  TERENGGANU_INC: [
    { name: "Dato' Burhanuddin Hilmi bin Mohamed", title: "President and Group Chief Executive Officer" },
  ],

  KUMH: [
    { name: "Dato' Dr. Wan Zawawi bin Wan Ismail", title: "General Manager, Kelantan Utilities" },
  ],

  // GOVERNMENT
  KDN: [
    { name: "Saifuddin Nasution Ismail", title: "Minister of Home Affairs" },
    { name: "Datuk Awang Alik bin Jeman", title: "Secretary-General" },
  ],

  MINDEF: [
    { name: "Dato' Seri Mohamed Khaled bin Nordin", title: "Minister of Defence" },
    { name: "Datuk Lokman Hakim bin Ali", title: "Secretary-General" },
  ],

  MOD: [
    { name: "Gobind Singh Deo", title: "Minister of Digital" },
    { name: "Datuk Fabian Bigar", title: "Secretary-General" },
  ],

  MAMPU: [
    { name: "Ts. Nik Zalbiha binti Nik Mat", title: "Director General, Jabatan Digital Negara (JDN)" },
  ],

  MITI: [
    { name: "Datuk Seri Johari Abdul Ghani", title: "Minister of Investment, Trade and Industry" },
    { name: "Datuk Hairil Yahri Yaacob", title: "Secretary-General" },
  ],

  MOTAC: [
    { name: "Dato Sri Tiong King Sing", title: "Minister of Tourism, Arts and Culture" },
    { name: "Dato' Shaharuddin bin Abu Sohot", title: "Secretary-General" },
  ],

  MOHE: [
    { name: "Dato' Seri Diraja Dr. Zambry Abd Kadir", title: "Minister of Higher Education" },
    { name: "Datuk Dr. Anesee Ibrahim", title: "Secretary-General" },
  ],

  PDRM: [
    { name: "Datuk Seri Mohd Khalid Ismail", title: "Inspector-General of Police" },
  ],

  LHDN: [
    { name: "Datuk Dr. Abu Tariq Jamaluddin", title: "Chief Executive Officer / Director General" },
  ],

  STATE_SEL_PJ: [
    { name: "Amirudin Shari", title: "Menteri Besar of Selangor" },
    { name: "Mohd Sakeri Abdul Kadir", title: "President, Putrajaya Corporation" },
  ],

  MOE: [
    { name: "Fadhlina Sidek", title: "Minister of Education" },
    { name: "Dato' Ts. Dr. Hj. Aminuddin bin Hassim", title: "Secretary-General" },
    { name: "Dr. Mohd Azam bin Ahmad", title: "Director-General of Education" },
  ],
};

// Usage: MALAYSIA_LEADERSHIP.UNISEM, MALAYSIA_LEADERSHIP.KDN, etc.
if (typeof module !== "undefined" && module.exports) {
  module.exports = MALAYSIA_LEADERSHIP;
}
