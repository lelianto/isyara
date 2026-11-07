import type { Register } from './index';

export type RegionalLanguageCode = 'id' | 'jv' | 'sun' | 'ban' | 'bbc' | 'min' | 'bug' | 'ace' | 'bjn';
export type AksaraScript = 'JAVANESE' | 'SUNDANESE' | 'BALINESE';
export type TransliterateDirection = 'LATIN_TO_AKSARA' | 'AKSARA_TO_LATIN';

export interface RegionalDialect {
  name: string;
  region: string;
  description: string;
}

export interface RegionalLanguage {
  code: RegionalLanguageCode;
  isoCode: string;
  name: string;
  nativeName: string;
  description: string;
  region: string;
  speakers: string;
  preservationStatus: string;
  entriesCount: string;
  defaultScript?: AksaraScript;
  dialects: RegionalDialect[];
}

export interface BhasantaraGlossaryItem {
  idTerm: string;
  targetLang: RegionalLanguageCode;
  casual: string;
  formal: string;
  meaning: string;
  partOfSpeech: 'phrase' | 'pronoun' | 'verb' | 'noun';
}

export interface BhasantaraParallelItem {
  sourceLang: RegionalLanguageCode;
  targetLang: RegionalLanguageCode;
  idText: string;
  targetText: string;
  context: string;
  domain: string;
}

export interface CulturalLiteracyItem {
  term: string;
  languageCode: RegionalLanguageCode;
  analysis: string;
  etymology: string;
  culturalInsight: string;
  registerLevel: string;
  usageExamples: string[];
}

export interface AksaraItem {
  glyph: string;
  latin: string;
}

export const regionalLanguages: RegionalLanguage[] = [
  {
    code: 'jv',
    isoCode: 'jav',
    name: 'Jawa',
    nativeName: 'Basa Jawa',
    description: 'Bahasa daerah terbesar di Indonesia, dituturkan di Jawa Tengah, Jawa Timur, dan DIY.',
    region: 'Jawa Tengah, DIY, Jawa Timur',
    speakers: '84+ Juta Penutur',
    preservationStatus: 'Preservasi & Digitalisasi Aktif',
    entriesCount: '12,450 Frasa',
    defaultScript: 'JAVANESE',
    dialects: [
      { name: 'Jawa Ngoko', region: 'Jawa Tengah & Timur', description: 'Ragam santai untuk teman sebaya.' },
      { name: 'Jawa Krama Alus', region: 'Surakarta & Yogyakarta', description: 'Ragam paling halus untuk orang yang dihormati.' },
      { name: 'Jawa Suroboyoan', region: 'Surabaya & Pesisir Jawa Timur', description: 'Dialek pesisiran yang ekspresif.' },
    ],
  },
  {
    code: 'sun',
    isoCode: 'sun',
    name: 'Sunda',
    nativeName: 'Basa Sunda',
    description: 'Bahasa daerah populer dari wilayah Pasundan Jawa Barat dan Banten.',
    region: 'Jawa Barat & Banten',
    speakers: '42+ Juta Penutur',
    preservationStatus: 'Dokumentasi Lengkap',
    entriesCount: '8,920 Frasa',
    defaultScript: 'SUNDANESE',
    dialects: [
      { name: 'Sunda Priangan', region: 'Bandung, Cimahi, Garut, Tasikmalaya', description: 'Dialek Sunda standar.' },
      { name: 'Sunda Banten', region: 'Banten Barat & Pesisir', description: 'Dialek khas Sunda pesisir Banten.' },
    ],
  },
  {
    code: 'ban',
    isoCode: 'ban',
    name: 'Bali',
    nativeName: 'Basa Bali',
    description: 'Bahasa di Pulau Dewata Bali dengan tingkatan tutur yang khas.',
    region: 'Provinsi Bali',
    speakers: '3.3+ Juta Penutur',
    preservationStatus: 'Preservasi & Aksara',
    entriesCount: '5,600 Frasa',
    defaultScript: 'BALINESE',
    dialects: [
      { name: 'Bali Halus', region: 'Denpasar & Gianyar', description: 'Tingkat tutur halus dalam Bahasa Bali.' },
    ],
  },
  {
    code: 'bbc',
    isoCode: 'bbc',
    name: 'Batak Toba',
    nativeName: 'Hata Batak Toba',
    description: 'Bahasa suku Batak di kawasan Danau Toba, Sumatera Utara.',
    region: 'Sumatera Utara',
    speakers: '2.5+ Juta Penutur',
    preservationStatus: 'Dokumentasi Aktif',
    entriesCount: '3,800 Frasa',
    dialects: [
      { name: 'Batak Toba Samosir', region: 'Pulau Samosir', description: 'Dialek inti Batak Toba.' },
    ],
  },
  {
    code: 'min',
    isoCode: 'min',
    name: 'Minangkabau',
    nativeName: 'Baso Minangkabau',
    description: 'Bahasa daerah Sumatera Barat dan sekitarnya.',
    region: 'Sumatera Barat',
    speakers: '5.5+ Juta Penutur',
    preservationStatus: 'Dokumentasi Aktif',
    entriesCount: '4,900 Frasa',
    dialects: [],
  },
  {
    code: 'bug',
    isoCode: 'bug',
    name: 'Bugis',
    nativeName: 'Basa Ugi',
    description: 'Bahasa khas suku Bugis Sulawesi Selatan dengan aksara Lontara.',
    region: 'Sulawesi Selatan',
    speakers: '5+ Juta Penutur',
    preservationStatus: 'Riset Kebudayaan',
    entriesCount: '4,150 Frasa',
    dialects: [
      { name: 'Bugis Bone', region: 'Kabupaten Bone', description: 'Dialek Bugis klasik.' },
    ],
  },
  {
    code: 'ace',
    isoCode: 'ace',
    name: 'Aceh',
    nativeName: 'Bahsa Acèh',
    description: 'Bahasa yang kaya akan sejarah di kawasan Serambi Mekkah Aceh.',
    region: 'Provinsi Aceh',
    speakers: '3.5+ Juta Penutur',
    preservationStatus: 'Dokumentasi Aktif',
    entriesCount: '3,200 Frasa',
    dialects: [],
  },
  {
    code: 'bjn',
    isoCode: 'bjn',
    name: 'Banjar',
    nativeName: 'Basa Banjar',
    description: 'Bahasa pergaulan utama di Kalimantan Selatan dan pesisir Kalimantan.',
    region: 'Kalimantan Selatan & Pesisir',
    speakers: '4.5+ Juta Penutur',
    preservationStatus: 'Dokumentasi Aktif',
    entriesCount: '3,600 Frasa',
    dialects: [],
  },
  {
    code: 'id',
    isoCode: 'id',
    name: 'Indonesia',
    nativeName: 'Bahasa Indonesia',
    description: 'Bahasa nasional Republik Indonesia, lingua franca seluruh Nusantara.',
    region: 'Seluruh Kepulauan Nusantara',
    speakers: '270+ Juta Penutur',
    preservationStatus: 'Bahasa Nasional',
    entriesCount: 'Korpus Utama',
    dialects: [],
  },
];

export const bhasantaraGlossary: BhasantaraGlossaryItem[] = [
  // INDONESIA ↔ JAWA
  { idTerm: 'selamat pagi', targetLang: 'jv', casual: 'Sugeng enjang', formal: 'Sugeng enjang', meaning: 'Sapaan pagi hari', partOfSpeech: 'phrase' },
  { idTerm: 'selamat siang', targetLang: 'jv', casual: 'Sugeng siang', formal: 'Sugeng siang', meaning: 'Sapaan siang hari', partOfSpeech: 'phrase' },
  { idTerm: 'selamat malam', targetLang: 'jv', casual: 'Sugeng dalu', formal: 'Sugeng dalu', meaning: 'Sapaan malam hari', partOfSpeech: 'phrase' },
  { idTerm: 'terima kasih', targetLang: 'jv', casual: 'Suwun', formal: 'Matur nuwun', meaning: 'Ungkapan rasa terima kasih', partOfSpeech: 'phrase' },
  { idTerm: 'terima kasih banyak', targetLang: 'jv', casual: 'Matur nuwun', formal: 'Matur nuwun sanget', meaning: 'Ungkapan terima kasih yang sangat', partOfSpeech: 'phrase' },
  { idTerm: 'apa kabar', targetLang: 'jv', casual: 'Piye kabare?', formal: 'Pripun kabaripun?', meaning: 'Menanyakan kabar', partOfSpeech: 'phrase' },
  { idTerm: 'bagaimana kabarnya', targetLang: 'jv', casual: 'Piye kabare?', formal: 'Pripun kabaripun?', meaning: 'Menanyakan kabar lawan bicara', partOfSpeech: 'phrase' },
  { idTerm: 'saya', targetLang: 'jv', casual: 'aku', formal: 'kula', meaning: 'Kata ganti orang pertama', partOfSpeech: 'pronoun' },
  { idTerm: 'kamu', targetLang: 'jv', casual: 'kowe', formal: 'panjenengan', meaning: 'Kata ganti orang kedua (sampeyan untuk madya)', partOfSpeech: 'pronoun' },
  { idTerm: 'makan', targetLang: 'jv', casual: 'mangan', formal: 'nedha', meaning: 'Makan (nedha untuk diri sendiri / dhahar untuk menghormati)', partOfSpeech: 'verb' },
  { idTerm: 'rumah', targetLang: 'jv', casual: 'omah', formal: 'griya', meaning: 'Rumah tempat tinggal (dalem untuk menghormati)', partOfSpeech: 'noun' },
  { idTerm: 'air', targetLang: 'jv', casual: 'banyu', formal: 'toya', meaning: 'Air minum / bersih', partOfSpeech: 'noun' },
  { idTerm: 'pergi', targetLang: 'jv', casual: 'lunga', formal: 'kesah', meaning: 'Pergi / berangkat (tindak untuk orang yang dihormati)', partOfSpeech: 'verb' },
  { idTerm: 'tidur', targetLang: 'jv', casual: 'turu', formal: 'tilem', meaning: 'Tidur / istirahat (sare untuk orang yang dihormati)', partOfSpeech: 'verb' },
  { idTerm: 'maaf', targetLang: 'jv', casual: 'Sepurane', formal: 'Nyuwun pangapunten', meaning: 'Mohon maaf', partOfSpeech: 'phrase' },
  { idTerm: 'mohon maaf', targetLang: 'jv', casual: 'Sepurane', formal: 'Nyuwun pangapunten', meaning: 'Meminta maaf dengan hormat', partOfSpeech: 'phrase' },
  { idTerm: 'selamat datang', targetLang: 'jv', casual: 'Sugeng rawuh', formal: 'Sugeng rawuh', meaning: 'Menyambut kedatangan', partOfSpeech: 'phrase' },

  // INDONESIA ↔ SUNDA
  { idTerm: 'selamat pagi', targetLang: 'sun', casual: 'Wilujeng enjing', formal: 'Wilujeng enjing', meaning: 'Sapaan pagi hari', partOfSpeech: 'phrase' },
  { idTerm: 'selamat siang', targetLang: 'sun', casual: 'Wilujeng siang', formal: 'Wilujeng siang', meaning: 'Sapaan siang hari', partOfSpeech: 'phrase' },
  { idTerm: 'selamat malam', targetLang: 'sun', casual: 'Wilujeng wengi', formal: 'Wilujeng wengi', meaning: 'Sapaan malam hari', partOfSpeech: 'phrase' },
  { idTerm: 'terima kasih', targetLang: 'sun', casual: 'Nuhun', formal: 'Hatur nuhun', meaning: 'Ungkapan terima kasih', partOfSpeech: 'phrase' },
  { idTerm: 'terima kasih banyak', targetLang: 'sun', casual: 'Nuhun pisan', formal: 'Hatur nuhun pisan', meaning: 'Terima kasih yang sangat', partOfSpeech: 'phrase' },
  { idTerm: 'apa kabar', targetLang: 'sun', casual: 'Kumaha kabarna?', formal: 'Kumaha damang?', meaning: 'Menanyakan kabar', partOfSpeech: 'phrase' },
  { idTerm: 'permisi', targetLang: 'sun', casual: 'Punten', formal: 'Sampurasun', meaning: 'Salam pembuka khas Sunda', partOfSpeech: 'phrase' },
  { idTerm: 'saya', targetLang: 'sun', casual: 'kuring', formal: 'abdi', meaning: 'Kata ganti orang pertama', partOfSpeech: 'pronoun' },
  { idTerm: 'kamu', targetLang: 'sun', casual: 'maneh', formal: 'anjeun', meaning: 'Kata ganti orang kedua', partOfSpeech: 'pronoun' },
  { idTerm: 'makan', targetLang: 'sun', casual: 'dahar', formal: 'neda', meaning: 'Makan (neda untuk diri sendiri, tuang untuk orang lain)', partOfSpeech: 'verb' },
  { idTerm: 'rumah', targetLang: 'sun', casual: 'imah', formal: 'bumi', meaning: 'Rumah tempat tinggal', partOfSpeech: 'noun' },
  { idTerm: 'air', targetLang: 'sun', casual: 'cai', formal: 'cai', meaning: 'Air', partOfSpeech: 'noun' },
  { idTerm: 'pergi', targetLang: 'sun', casual: 'indit', formal: 'mios', meaning: 'Pergi / berangkat (angkat untuk orang lain)', partOfSpeech: 'verb' },
  { idTerm: 'tidur', targetLang: 'sun', casual: 'sare', formal: 'mondok', meaning: 'Tidur / istirahat', partOfSpeech: 'verb' },
  { idTerm: 'maaf', targetLang: 'sun', casual: 'Hampura', formal: 'Hapunten', meaning: 'Mohon maaf', partOfSpeech: 'phrase' },
  { idTerm: 'selamat datang', targetLang: 'sun', casual: 'Wilujeng sumping', formal: 'Wilujeng sumping', meaning: 'Menyambut kedatangan', partOfSpeech: 'phrase' },

  // INDONESIA ↔ BALI
  { idTerm: 'selamat datang', targetLang: 'ban', casual: 'Rahajeng rauh', formal: 'Rahajeng rauh', meaning: 'Menyambut kedatangan', partOfSpeech: 'phrase' },
  { idTerm: 'salam sejahtera', targetLang: 'ban', casual: 'Om Swastyastu', formal: 'Om Swastyastu', meaning: 'Salam kehormatan & doa keselamatan Bali', partOfSpeech: 'phrase' },
  { idTerm: 'terima kasih', targetLang: 'ban', casual: 'Suksma', formal: 'Matur suksma', meaning: 'Ungkapan terima kasih', partOfSpeech: 'phrase' },
  { idTerm: 'terima kasih banyak', targetLang: 'ban', casual: 'Matur suksma', formal: 'Matur suksma ping banget', meaning: 'Terima kasih banyak (halus)', partOfSpeech: 'phrase' },
  { idTerm: 'apa kabar', targetLang: 'ban', casual: 'Kenken kabare?', formal: 'Punapi gatra?', meaning: 'Menanyakan kabar', partOfSpeech: 'phrase' },
  { idTerm: 'selamat pagi', targetLang: 'ban', casual: 'Rahajeng semeng', formal: 'Rahajeng semeng', meaning: 'Sapaan pagi hari', partOfSpeech: 'phrase' },
  { idTerm: 'selamat malam', targetLang: 'ban', casual: 'Rahajeng wengi', formal: 'Rahajeng wengi', meaning: 'Sapaan malam hari', partOfSpeech: 'phrase' },
  { idTerm: 'saya', targetLang: 'ban', casual: 'tiang', formal: 'titiang', meaning: 'Kata ganti orang pertama', partOfSpeech: 'pronoun' },
  { idTerm: 'kamu', targetLang: 'ban', casual: 'cai', formal: 'ragane', meaning: 'Kata ganti orang kedua', partOfSpeech: 'pronoun' },
  { idTerm: 'makan', targetLang: 'ban', casual: 'madaar', formal: 'ngajeng', meaning: 'Makan', partOfSpeech: 'verb' },
  { idTerm: 'rumah', targetLang: 'ban', casual: 'umah', formal: 'jero', meaning: 'Rumah', partOfSpeech: 'noun' },
  { idTerm: 'air', targetLang: 'ban', casual: 'yeh', formal: 'toya', meaning: 'Air', partOfSpeech: 'noun' },
  { idTerm: 'maaf', targetLang: 'ban', casual: 'Ampura', formal: 'Nunas ampura', meaning: 'Mohon maaf', partOfSpeech: 'phrase' },

  // INDONESIA ↔ BATAK TOBA
  { idTerm: 'selamat datang', targetLang: 'bbc', casual: 'Horas', formal: 'Horas tondi madingin', meaning: 'Salam hangat / Selamat datang khas Batak', partOfSpeech: 'phrase' },
  { idTerm: 'terima kasih', targetLang: 'bbc', casual: 'Mauliate', formal: 'Mauliate godang', meaning: 'Ungkapan terima kasih', partOfSpeech: 'phrase' },
  { idTerm: 'terima kasih banyak', targetLang: 'bbc', casual: 'Mauliate godang', formal: 'Mauliate godang', meaning: 'Terima kasih banyak', partOfSpeech: 'phrase' },
  { idTerm: 'apa kabar', targetLang: 'bbc', casual: 'Bohado kabarmu?', formal: 'Naeng do hamu?', meaning: 'Menanyakan kabar', partOfSpeech: 'phrase' },
  { idTerm: 'saya', targetLang: 'bbc', casual: 'au', formal: 'iba', meaning: 'Kata ganti orang pertama', partOfSpeech: 'pronoun' },
  { idTerm: 'makan', targetLang: 'bbc', casual: 'mangan', formal: 'marsipanganon', meaning: 'Makan', partOfSpeech: 'verb' },
  { idTerm: 'rumah', targetLang: 'bbc', casual: 'jabu', formal: 'bagas', meaning: 'Rumah', partOfSpeech: 'noun' },
  { idTerm: 'air', targetLang: 'bbc', casual: 'aek', formal: 'mual', meaning: 'Air', partOfSpeech: 'noun' },
  { idTerm: 'maaf', targetLang: 'bbc', casual: 'Sori ma', formal: 'Paboa ma', meaning: 'Mohon maaf', partOfSpeech: 'phrase' },

  // INDONESIA ↔ MINANGKABAU
  { idTerm: 'selamat datang', targetLang: 'min', casual: 'Salam tibo', formal: 'Salamaik datang', meaning: 'Menyambut kedatangan', partOfSpeech: 'phrase' },
  { idTerm: 'selamat pagi', targetLang: 'min', casual: 'Salamaik pagi', formal: 'Salamaik pagi', meaning: 'Sapaan pagi hari', partOfSpeech: 'phrase' },
  { idTerm: 'terima kasih', targetLang: 'min', casual: 'Tarimo kasih', formal: 'Tarimo kasih banyak', meaning: 'Ungkapan terima kasih', partOfSpeech: 'phrase' },
  { idTerm: 'apa kabar', targetLang: 'min', casual: 'Baa kaba?', formal: 'Baa kaba sanak?', meaning: 'Menanyakan kabar', partOfSpeech: 'phrase' },
  { idTerm: 'saya', targetLang: 'min', casual: 'awak', formal: 'ambo', meaning: 'Kata ganti orang pertama', partOfSpeech: 'pronoun' },
  { idTerm: 'makan', targetLang: 'min', casual: 'makan', formal: 'nyantok', meaning: 'Makan', partOfSpeech: 'verb' },
  { idTerm: 'rumah', targetLang: 'min', casual: 'rumah', formal: 'rumah gadang', meaning: 'Rumah tradisional Minang', partOfSpeech: 'noun' },
  { idTerm: 'air', targetLang: 'min', casual: 'aia', formal: 'aia', meaning: 'Air', partOfSpeech: 'noun' },
  { idTerm: 'maaf', targetLang: 'min', casual: 'Maaf', formal: 'Minta maaf', meaning: 'Meminta maaf', partOfSpeech: 'phrase' },

  // INDONESIA ↔ BUGIS
  { idTerm: 'terima kasih', targetLang: 'bug', casual: 'Kurru sumange', formal: 'Kurru sumange', meaning: 'Ungkapan terima kasih (semangat hidup)', partOfSpeech: 'phrase' },
  { idTerm: 'apa kabar', targetLang: 'bug', casual: 'Aga kareba?', formal: 'Aga karebatta?', meaning: 'Menanyakan kabar', partOfSpeech: 'phrase' },
  { idTerm: 'selamat datang', targetLang: 'bug', casual: 'Tabe', formal: 'Salama engkae mai', meaning: 'Salam hormat / Selamat datang', partOfSpeech: 'phrase' },
  { idTerm: 'saya', targetLang: 'bug', casual: "iya'", formal: 'idi', meaning: 'Kata ganti orang pertama', partOfSpeech: 'pronoun' },
  { idTerm: 'makan', targetLang: 'bug', casual: 'manre', formal: 'manre', meaning: 'Makan', partOfSpeech: 'verb' },
  { idTerm: 'rumah', targetLang: 'bug', casual: 'bola', formal: 'saoraja', meaning: 'Rumah', partOfSpeech: 'noun' },
  { idTerm: 'air', targetLang: 'bug', casual: 'wae', formal: 'wae', meaning: 'Air', partOfSpeech: 'noun' },
  { idTerm: 'maaf', targetLang: 'bug', casual: 'Tabe', formal: 'Addampengengnga', meaning: 'Meminta maaf / permisi', partOfSpeech: 'phrase' },

  // INDONESIA ↔ ACEH
  { idTerm: 'terima kasih', targetLang: 'ace', casual: 'Terimong geunaseh', formal: 'Teurimong geunaseh that', meaning: 'Ungkapan terima kasih', partOfSpeech: 'phrase' },
  { idTerm: 'apa kabar', targetLang: 'ace', casual: 'Peue haba?', formal: 'Peue haba droeneuh?', meaning: 'Menanyakan kabar', partOfSpeech: 'phrase' },
  { idTerm: 'selamat pagi', targetLang: 'ace', casual: 'Saleum beungoh', formal: "Assalamu'alaikum", meaning: 'Sapaan pagi', partOfSpeech: 'phrase' },
  { idTerm: 'saya', targetLang: 'ace', casual: 'kee', formal: 'lôn', meaning: 'Kata ganti orang pertama', partOfSpeech: 'pronoun' },
  { idTerm: 'makan', targetLang: 'ace', casual: 'pajoh', formal: 'pajoh bu', meaning: 'Makan', partOfSpeech: 'verb' },
  { idTerm: 'rumah', targetLang: 'ace', casual: 'rumoh', formal: 'rumoh', meaning: 'Rumah', partOfSpeech: 'noun' },
  { idTerm: 'air', targetLang: 'ace', casual: 'ie', formal: 'ie', meaning: 'Air', partOfSpeech: 'noun' },
  { idTerm: 'maaf', targetLang: 'ace', casual: 'Meuah', formal: 'Lakee meuah', meaning: 'Meminta maaf', partOfSpeech: 'phrase' },

  // INDONESIA ↔ BANJAR
  { idTerm: 'terima kasih', targetLang: 'bjn', casual: 'Makasih', formal: 'Tarima kasih', meaning: 'Ungkapan terima kasih', partOfSpeech: 'phrase' },
  { idTerm: 'apa kabar', targetLang: 'bjn', casual: 'Kayapa habar?', formal: 'Apa kabar pian?', meaning: 'Menanyakan kabar', partOfSpeech: 'phrase' },
  { idTerm: 'saya', targetLang: 'bjn', casual: 'unda', formal: 'ulun', meaning: 'Kata ganti orang pertama', partOfSpeech: 'pronoun' },
  { idTerm: 'kamu', targetLang: 'bjn', casual: 'ikam', formal: 'pian', meaning: 'Kata ganti orang kedua', partOfSpeech: 'pronoun' },
  { idTerm: 'makan', targetLang: 'bjn', casual: 'makan', formal: 'makan', meaning: 'Makan', partOfSpeech: 'verb' },
  { idTerm: 'rumah', targetLang: 'bjn', casual: 'rumah', formal: 'wadah', meaning: 'Rumah', partOfSpeech: 'noun' },
  { idTerm: 'air', targetLang: 'bjn', casual: 'banyu', formal: 'banyu', meaning: 'Air', partOfSpeech: 'noun' },
  { idTerm: 'tidak apa-apa', targetLang: 'bjn', casual: 'Kada papa', formal: 'Kada papa pang', meaning: 'Ungkapan tidak masalah', partOfSpeech: 'phrase' },
];

export const bhasantaraParallel: BhasantaraParallelItem[] = [
  // INDONESIA ↔ JAWA
  { sourceLang: 'id', targetLang: 'jv', idText: 'Selamat pagi, semoga harimu menyenangkan.', targetText: 'Sugeng enjang, mugi dinten panjenengan nyenengaken.', context: 'Sapaan pagi yang ramah', domain: 'daily' },
  { sourceLang: 'id', targetLang: 'jv', idText: 'Saya ingin pergi ke pasar.', targetText: 'Kula badhe tindak dhateng peken.', context: 'Aktivitas sehari-hari', domain: 'daily' },
  { sourceLang: 'id', targetLang: 'jv', idText: 'Terima kasih atas kebaikan Anda.', targetText: 'Matur nuwun sanget dhumateng kesaenan panjenengan.', context: 'Ungkapan terima kasih formal', domain: 'social' },
  { sourceLang: 'id', targetLang: 'jv', idText: 'Maaf, saya tidak bisa hadir.', targetText: 'Nyuwun pangapunten, kula mboten saged rawuh.', context: 'Mohon maaf berhalangan', domain: 'formal' },
  { sourceLang: 'id', targetLang: 'jv', idText: 'Anak-anak sedang bermain di halaman.', targetText: 'Lare-lare nembe dolanan wonten ing latar.', context: 'Aktivitas anak-anak', domain: 'daily' },
  { sourceLang: 'id', targetLang: 'jv', idText: 'Indonesia negara yang indah.', targetText: 'Indonesia negari ingkang endah.', context: 'Mendeskripsikan Indonesia', domain: 'nation' },
  { sourceLang: 'id', targetLang: 'jv', idText: 'Bagaimana kabar keluargamu?', targetText: 'Pripun kabaripun kulawarga panjenengan?', context: 'Menanyakan kabar keluarga', domain: 'social' },
  { sourceLang: 'id', targetLang: 'jv', idText: 'Saya sangat senang bertemu dengan Anda.', targetText: 'Kula remen sanget saged kepanggih kaliyan panjenengan.', context: 'Ungkapan senang bertemu', domain: 'social' },
  { sourceLang: 'jv', targetLang: 'id', idText: 'Selamat datang di tanah Jawa, saudara.', targetText: 'Sugeng rawuh wonten ing tanah Jawa, sedulur.', context: 'Menyambut tamu', domain: 'culture' },
  { sourceLang: 'jv', targetLang: 'id', idText: 'Saya sedang makan nasi goreng.', targetText: 'Aku lagi mangan sego goreng.', context: 'Aktivitas makan', domain: 'daily' },
  { sourceLang: 'jv', targetLang: 'id', idText: 'Semoga kamu selalu diberi kesehatan.', targetText: 'Muga-muga sampeyan tansah diparingi kesarasan.', context: 'Doa kesehatan', domain: 'social' },

  // INDONESIA ↔ SUNDA
  { sourceLang: 'id', targetLang: 'sun', idText: 'Selamat pagi, semoga harimu menyenangkan.', targetText: 'Wilujeng enjing, mugi dinten anjeun pikaresepeun.', context: 'Sapaan pagi', domain: 'daily' },
  { sourceLang: 'id', targetLang: 'sun', idText: 'Saya ingin pergi ke pasar.', targetText: 'Abdi hoyong angkat ka pasar.', context: 'Aktivitas sehari-hari', domain: 'daily' },
  { sourceLang: 'id', targetLang: 'sun', idText: 'Terima kasih atas kebaikan Anda.', targetText: 'Hatur nuhun kana kasaean anjeun.', context: 'Ungkapan terima kasih', domain: 'social' },
  { sourceLang: 'id', targetLang: 'sun', idText: 'Maaf, saya tidak bisa hadir.', targetText: 'Hapunten, abdi teu tiasa hadir.', context: 'Mohon maaf berhalangan', domain: 'formal' },
  { sourceLang: 'id', targetLang: 'sun', idText: 'Anak-anak sedang bermain di halaman.', targetText: 'Barudak keur ulin di buruan.', context: 'Aktivitas anak-anak', domain: 'daily' },
  { sourceLang: 'id', targetLang: 'sun', idText: 'Apa kabar? Sudah lama kita tidak bertemu.', targetText: 'Kumaha damang? Parantos lami urang teu tepang.', context: 'Menanyakan kabar lama tak bertemu', domain: 'social' },
  { sourceLang: 'sun', targetLang: 'id', idText: 'Jangan lupa asal-usulmu.', targetText: 'Ulah poho kana purwadaksi.', context: 'Nasihat leluhur Sunda', domain: 'folklore' },

  // INDONESIA ↔ BATAK TOBA
  { sourceLang: 'id', targetLang: 'bbc', idText: 'Selamat datang di tanah Batak.', targetText: 'Horas, mangalehon salam tu tano Batak.', context: 'Menyambut di tanah Batak', domain: 'culture' },
  { sourceLang: 'id', targetLang: 'bbc', idText: 'Terima kasih banyak atas kasih sayangmu.', targetText: 'Mauliate godang di holong ni rohamu.', context: 'Terima kasih atas kasih sayang', domain: 'social' },
  { sourceLang: 'id', targetLang: 'bbc', idText: 'Bagaimana kabarmu hari ini?', targetText: 'Naeng do hamu sadari on?', context: 'Menanyakan kabar hari ini', domain: 'daily' },
  { sourceLang: 'bbc', targetLang: 'id', idText: 'Salam hangat untuk kita semua.', targetText: 'Horas ma di hita sasude.', context: 'Salam persaudaraan Batak', domain: 'culture' },

  // INDONESIA ↔ BALI
  { sourceLang: 'id', targetLang: 'ban', idText: 'Selamat datang di Pulau Dewata.', targetText: 'Rahajeng rauh ring Pulau Dewata.', context: 'Menyambut di Bali', domain: 'culture' },
  { sourceLang: 'id', targetLang: 'ban', idText: 'Terima kasih sudah datang.', targetText: 'Matur suksma sampun rauh.', context: 'Terima kasih datang', domain: 'social' },
  { sourceLang: 'id', targetLang: 'ban', idText: 'Semoga semua sejahtera.', targetText: 'Dumogi sami manggih karahayuan.', context: 'Doa sejahtera', domain: 'culture' },
  { sourceLang: 'ban', targetLang: 'id', idText: 'Salam sejahtera, semoga semua menemukan keselamatan.', targetText: 'Om Swastyastu, mugi sami ngemanggihan karahayuan.', context: 'Salam Hindu Bali', domain: 'culture' },

  // INDONESIA ↔ MINANGKABAU
  { sourceLang: 'id', targetLang: 'min', idText: 'Sebelumnya saya ucapkan terima kasih.', targetText: 'Sabalunnyo ambo ucapkan tarimo kasih.', context: 'Pembuka pidato', domain: 'formal' },
  { sourceLang: 'id', targetLang: 'min', idText: 'Semua baik-baik saja?', targetText: 'Lai elok-elok se kasadonyo?', context: 'Menanyakan kondisi keluarga', domain: 'daily' },
  { sourceLang: 'id', targetLang: 'min', idText: 'Apa kabar, ibu?', targetText: 'Baa kaba, amak?', context: 'Menanyakan kabar ibu', domain: 'daily' },

  // INDONESIA ↔ BUGIS
  { sourceLang: 'id', targetLang: 'bug', idText: 'Harga diri dan empati adalah warisan leluhur.', targetText: 'Siri na pacce iyya rupa pusaka ri toriolota.', context: 'Falsafah Bugis Siri na Pacce', domain: 'culture' },
  { sourceLang: 'id', targetLang: 'bug', idText: 'Apa kabarmu, kawan?', targetText: 'Aga karebamu, kawa?', context: 'Menanyakan kabar teman', domain: 'daily' },

  // INDONESIA ↔ ACEH
  { sourceLang: 'id', targetLang: 'ace', idText: 'Apa kabar hari ini?', targetText: 'Peue haba uroë nyoë?', context: 'Menanyakan kabar hari ini', domain: 'daily' },
  { sourceLang: 'id', targetLang: 'ace', idText: 'Terima kasih atas kerja kerasmu.', targetText: 'Terimong geunaseh ateuh buët droëneuh.', context: 'Terima kasih atas kerja keras', domain: 'social' },

  // INDONESIA ↔ BANJAR
  { sourceLang: 'id', targetLang: 'bjn', idText: 'Apa kabar kalian semua?', targetText: 'Apa habar bubuhan pian?', context: 'Menanyakan kabar kelompok', domain: 'daily' },
  { sourceLang: 'id', targetLang: 'bjn', idText: 'Terima kasih sudah datang ke Kalimantan.', targetText: 'Tarima kasih sudah datang ka Banua.', context: 'Menyambut tamu', domain: 'culture' },

  // JAWA ↔ SUNDA (Antar-daerah)
  { sourceLang: 'jv', targetLang: 'sun', idText: 'Sugeng rawuh wonten ing tanah Jawa.', targetText: 'Wilujeng sumping di tanah Jawa.', context: 'Menyambut tamu lintas daerah (Jawa ↔ Sunda)', domain: 'culture' },
  { sourceLang: 'jv', targetLang: 'sun', idText: 'Bhinneka Tunggal Ika minangka semboyan bangsa.', targetText: 'Bhinneka Tunggal Ika janten semboyan bangsa.', context: 'Semboyan nasional (Jawa ↔ Sunda)', domain: 'nation' },
  { sourceLang: 'sun', targetLang: 'jv', idText: 'Hatur nuhun kana kasaean anjeun.', targetText: 'Matur nuwun marang kabecikan sampeyan.', context: 'Terima kasih atas kebaikan (Sunda ↔ Jawa)', domain: 'social' },
];

export const culturalLiteracyCorpus: CulturalLiteracyItem[] = [
  {
    term: 'matur nuwun',
    languageCode: 'jv',
    analysis: 'Ungkapan rasa terima kasih dalam Bahasa Jawa Krama yang bermakna menyampaikan rasa hormat dan penghargaan tulus kepada lawan bicara.',
    etymology: 'Berasal dari kata "matur" (menyampaikan dengan hormat dari bawah ke atas) dan "nuwun" (memohon atau menerima dengan penuh takzim di atas kepala).',
    culturalInsight: 'Dalam budaya Jawa, mengucapkan "Matur nuwun" sering disertai gestur membungkukkan badan sedikit atau menangkupkan tangan sebagai wujud lembah manah (kerendahan hati).',
    registerLevel: 'Krama / Halus (Formal & Sopan). Bentuk santainya adalah "Suwun".',
    usageExamples: [
      'Matur nuwun sanget dhumateng kesaenan panjenengan.',
      'Matur nuwun sampun kersa rawuh.',
    ],
  },
  {
    term: 'sampurasun',
    languageCode: 'sun',
    analysis: 'Salam penghormatan tradisional masyarakat Sunda yang diucapkan saat bertemu atau memulai pembicaraan, dan dijawab dengan "Rampes".',
    etymology: 'Berasal dari frasa Sunda Kuno "Sampura ning ingsun" yang berarti "Maafkanlah diri saya" atau "Semoga kesempurnaan menyertai Anda".',
    culturalInsight: 'Mencerminkan falsafah Sunda "Silih Asih, Silih Asah, Silih Asuh"—memulai perjumpaan dengan membersihkan hati dan saling memaafkan.',
    registerLevel: 'Lemes / Luhur (Sangat Sopan & Kultural).',
    usageExamples: [
      'Sampurasun, nepangkeun wastana abdi Lelianto.',
      'Sampurasun dulur-dulur sadayana.',
    ],
  },
  {
    term: 'hatur nuhun',
    languageCode: 'sun',
    analysis: 'Ungkapan terima kasih dalam Bahasa Sunda halus untuk menghargai pemberian atau bantuan orang lain.',
    etymology: 'Dari kata "hatur" (menghaturkan/menyampaikan dengan hormat) dan "nuhun" (menerima di atas kepala/menjunjung).',
    culturalInsight: 'Menunjukkan tata krama undak-usuk basa Sunda yang menempatkan lawan bicara pada posisi terhormat.',
    registerLevel: 'Lemes / Halus (baku & sopan). Bentuk akrabnya adalah "Nuhun".',
    usageExamples: ['Hatur nuhun kana kasaean anjeun.', 'Hatur nuhun pisan, Kang.'],
  },
  {
    term: 'om swastyastu',
    languageCode: 'ban',
    analysis: 'Salam pembuka dan doa keselamatan masyarakat Bali yang bermakna "Semoga berada dalam keadaan selamat atas karunia Hyang Widhi".',
    etymology: 'Berasal dari bahasa Sanskerta: "Om" (aksara suci), "Swasti" (selamat/bahagia/sejahtera), dan "Astu" (semoga terjadilah demikian).',
    culturalInsight: 'Diucapkan sambil melakukan gestur "Panganjali" (menangkupkan kedua telapak tangan di depan dada) yang selaras dengan filosofi Tri Hita Karana.',
    registerLevel: 'Bali Alus Singgih / Universal Hormat.',
    usageExamples: ['Om Swastyastu, mugi sami ngemanggihan karahayuan.'],
  },
  {
    term: 'horas',
    languageCode: 'bbc',
    analysis: 'Salam khas masyarakat Batak yang mengungkapkan rasa syukur, sukacita, kesehatan, dan harapan keselamatan bersama.',
    etymology: 'Berakar dari konsep "Horas tondi madingin, pir tondi matogu" (semoga jiwa/roh tetap sejuk, kuat, dan teguh).',
    culturalInsight: 'Tidak sekadar sapaan "Halo" atau "Selamat datang", melainkan doa berkat yang mengikat kekerabatan Dalihan Na Tolu.',
    registerLevel: 'Universal (Santai maupun Adat Resmi).',
    usageExamples: ['Horas ma di hita sasude!', 'Horas, selamat datang di Danau Toba.'],
  },
  {
    term: 'siri na pacce',
    languageCode: 'bug',
    analysis: 'Falsafah hidup utama masyarakat Bugis-Makassar yang memadukan martabat/harga diri (Siri\') dan solidaritas empati kemanusiaan (Pacce/Pesse).',
    etymology: '"Siri\'" berarti rasa malu/kehormatan diri, sedangkan "Pacce" berarti rasa pedih di hati melihat penderitaan sesama.',
    culturalInsight: 'Menjaga keseimbangan antara keteguhan menjaga kehormatan dan kepekaan menolong sesama manusia.',
    registerLevel: 'Falsafah Adat & Budaya Tinggi.',
    usageExamples: ['Siri na pacce iyya rupa pusaka ri toriolota.'],
  },
];

/**
 * Local deterministic language detector (adapted from Bhasantara detectLanguageWithAI).
 */
export function detectRegionalLanguageLocal(text: string): { code: RegionalLanguageCode; name: string } {
  const clean = text.trim().toLowerCase().replace(/[?.!,]+$/g, '');
  if (!clean) return { code: 'id', name: 'Indonesia' };

  const tokens = clean.split(/\s+/);
  const markers: Record<RegionalLanguageCode, string[]> = {
    jv: ['sugeng', 'enjang', 'enjing', 'dalu', 'matur', 'nuwun', 'suwun', 'piye', 'kabare', 'pripun', 'kabaripun', 'kula', 'panjenengan', 'sampeyan', 'mangan', 'nedha', 'dhahar', 'omah', 'griya', 'banyu', 'toya', 'nyuwun', 'pangapunten', 'mboten'],
    sun: ['wilujeng', 'sumping', 'wengi', 'hatur', 'nuhun', 'kumaha', 'damang', 'sampurasun', 'abdi', 'kuring', 'anjeun', 'maneh', 'tuang', 'imah', 'cai', 'hapunten', 'hampura', 'barudak', 'purwadaksi'],
    ban: ['rahajeng', 'rauh', 'semeng', 'suksma', 'swastyastu', 'swastiastu', 'punapi', 'gatra', 'titiang', 'ngajeng', 'yeh', 'ampura', 'dumogi', 'karahayuan'],
    bbc: ['horas', 'mauliate', 'godang', 'naeng', 'hamu', 'bohado', 'jabu', 'aek', 'paboa', 'holong', 'sasude'],
    min: ['salamaik', 'tarimo', 'baa', 'kaba', 'ambo', 'gadang', 'aia', 'sabalunnyo', 'kasadonyo', 'amak'],
    bug: ['kurru', 'sumange', 'aga', 'kareba', 'karebamu', 'tabe', 'manre', 'wae', 'siri', 'pacce', 'toriolota'],
    ace: ['terimong', 'teurimong', 'geunaseh', 'peue', 'haba', 'lôn', 'lon', 'pajoh', 'rumoh', 'uroë'],
    bjn: ['pian', 'ulun', 'unda', 'ikam', 'kada', 'papa', 'bubuhan', 'banua', 'kayapa', 'habar'],
    id: ['selamat', 'terima', 'kasih', 'apa', 'kabar', 'saya', 'kamu', 'makan', 'rumah', 'air', 'maaf', 'pergi', 'tidur'],
  };

  let bestCode: RegionalLanguageCode = 'id';
  let bestScore = 0;

  for (const [code, list] of Object.entries(markers) as [RegionalLanguageCode, string[]][]) {
    let score = 0;
    for (const t of tokens) {
      if (list.includes(t)) score += 2;
    }
    if (score > bestScore) {
      bestScore = score;
      bestCode = code;
    }
  }

  const meta = regionalLanguages.find(l => l.code === bestCode) || regionalLanguages[regionalLanguages.length - 1];
  return { code: bestCode, name: meta.name };
}

export function analyzeCulturalLiteracy(
  query: string,
  targetLang: RegionalLanguageCode
): CulturalLiteracyItem {
  const norm = query.trim().toLowerCase().replace(/[?.!,]+$/g, '');
  const hit = culturalLiteracyCorpus.find(
    c => norm.includes(c.term) || c.term.includes(norm)
  );
  if (hit) return hit;

  const langMeta = regionalLanguages.find(l => l.code === targetLang) || regionalLanguages[0];
  const glossaryHit = bhasantaraGlossary.find(
    g =>
      g.targetLang === targetLang &&
      (g.idTerm.toLowerCase() === norm ||
        g.casual.toLowerCase().replace(/[?.!,]+$/g, '') === norm ||
        g.formal.toLowerCase().replace(/[?.!,]+$/g, '') === norm)
  );

  if (glossaryHit) {
    return {
      term: `${glossaryHit.formal} (${glossaryHit.idTerm})`,
      languageCode: targetLang,
      analysis: `"${glossaryHit.formal}" (ragam halus) dan "${glossaryHit.casual}" (ragam sehari-hari) adalah padanan dalam ${langMeta.nativeName} untuk "${glossaryHit.idTerm}" (${glossaryHit.meaning}).`,
      etymology: `Termasuk kategori kelas kata ${glossaryHit.partOfSpeech} dalam korpus leksikon ${langMeta.name} (${langMeta.region}).`,
      culturalInsight: `Pemilihan antara bentuk sehari-hari ("${glossaryHit.casual}") dan bentuk halus ("${glossaryHit.formal}") mencerminkan tata krama sosial dan penghormatan terhadap lawan bicara.`,
      registerLevel: `Sehari-hari: ${glossaryHit.casual} · Halus: ${glossaryHit.formal}`,
      usageExamples: [
        `${glossaryHit.formal} (${glossaryHit.idTerm} — ragam halus)`,
        `${glossaryHit.casual} (${glossaryHit.idTerm} — ragam akrab)`,
      ],
    };
  }

  return {
    term: query.trim() || langMeta.nativeName,
    languageCode: targetLang,
    analysis: `Istilah atau ungkapan "${query.trim()}" dianalisis dalam konteks ${langMeta.name} (${langMeta.nativeName}) yang dituturkan di wilayah ${langMeta.region}.`,
    etymology: `Bagian dari tradisi lisan dan tulisan ${langMeta.nativeName} (${langMeta.speakers}).`,
    culturalInsight: `${langMeta.description} Gunakan ragam halus ketika berbicara kepada orang yang lebih tua atau dihormati.`,
    registerLevel: 'Mendukung ragam Sehari-hari (Ngoko/Loma) & Halus (Krama/Lemes)',
    usageExamples: bhasantaraParallel
      .filter(p => p.targetLang === targetLang)
      .slice(0, 2)
      .map(p => `${p.targetText} — "${p.idText}"`),
  };
}

export const quickSignWords = [
  'MAKAN',
  'SAYA',
  'RUMAH',
  'AIR',
  'TERIMA KASIH',
  'SELAMAT PAGI',
  'APA KABAR',
  'MAAF',
  'SELAMAT DATANG',
];

export function suggestWords(spelledText: string): string[] {
  const clean = spelledText.trim().toUpperCase();
  if (!clean) return quickSignWords.slice(0, 6);
  const lastToken = clean.split(/\s+/).pop() || clean;
  const allTerms = Array.from(new Set(bhasantaraGlossary.map(g => g.idTerm.toUpperCase())));
  const matches = allTerms.filter(t => t.startsWith(lastToken) || t.startsWith(clean));
  return matches.length ? matches.slice(0, 6) : quickSignWords.slice(0, 5);
}

export interface SpelledTranslationResult {
  indonesianText: string;
  translatedText: string;
  detectedSourceLang: { code: RegionalLanguageCode; name: string };
  languageName: string;
  nativeName: string;
  registerLabel: string;
  aksaraText: string;
  aksaraLabel: string;
  matchedMeaning?: string;
  sourceMethod: 'parallel' | 'glossary' | 'letter' | 'passthrough';
}

export function translateSpelledText(
  rawText: string,
  targetLang: RegionalLanguageCode,
  register: Register,
  fallbackConceptId?: string | null,
  selectedScript?: AksaraScript
): SpelledTranslationResult {
  const langMeta = regionalLanguages.find(l => l.code === targetLang) || regionalLanguages[0];
  const scriptToUse: AksaraScript = selectedScript || langMeta.defaultScript || 'JAVANESE';
  const scriptNames: Record<AksaraScript, string> = {
    JAVANESE: 'Aksara Jawa (Hanacaraka)',
    SUNDANESE: 'Aksara Sunda (Ngangalagena)',
    BALINESE: 'Aksara Bali (Carakan)',
  };
  const registerLabel =
    targetLang === 'jv'
      ? register === 'krama' ? 'Krama (Halus)' : 'Ngoko (Sehari-hari)'
      : targetLang === 'sun'
      ? register === 'krama' ? 'Lemes (Halus)' : 'Loma (Sehari-hari)'
      : register === 'krama' ? 'Halus / Formal' : 'Sehari-hari';

  const clean = rawText.trim().replace(/\s+/g, ' ');
  const norm = clean.toLowerCase().replace(/[?.!,]+$/g, '');
  const detectedSourceLang = detectRegionalLanguageLocal(clean);

  // If no spelled text yet, fall back to active single letter or concept
  if (!norm) {
    const letter = fallbackConceptId?.startsWith('LETTER_') ? fallbackConceptId.slice(7) : '';
    const aksara = letter ? transliterateToAksara(letter, scriptToUse) : '—';
    return {
      indonesianText: letter || '—',
      translatedText: letter || '—',
      detectedSourceLang,
      languageName: langMeta.name,
      nativeName: langMeta.nativeName,
      registerLabel,
      aksaraText: aksara,
      aksaraLabel: scriptNames[scriptToUse],
      sourceMethod: 'letter',
    };
  }

  // Check if user entered a regional term directly (reverse lookup: Daerah -> Indonesia -> Target Daerah)
  const reverseGlossaryHit = bhasantaraGlossary.find(
    g =>
      g.casual.toLowerCase().replace(/[?.!,]+$/g, '') === norm ||
      g.formal.toLowerCase().replace(/[?.!,]+$/g, '') === norm
  );
  const effectiveIndonesian = reverseGlossaryHit ? reverseGlossaryHit.idTerm : clean;
  const effectiveNorm = effectiveIndonesian.toLowerCase().replace(/[?.!,]+$/g, '');

  if (targetLang === 'id') {
    return {
      indonesianText: effectiveIndonesian,
      translatedText: effectiveIndonesian,
      detectedSourceLang,
      languageName: langMeta.name,
      nativeName: langMeta.nativeName,
      registerLabel: 'Standar',
      aksaraText: transliterateToAksara(effectiveIndonesian, scriptToUse),
      aksaraLabel: scriptNames[scriptToUse],
      matchedMeaning: reverseGlossaryHit?.meaning,
      sourceMethod: reverseGlossaryHit ? 'glossary' : 'passthrough',
    };
  }

  // 1. Check parallel sentence match
  const parallelHit = bhasantaraParallel.find(
    p =>
      p.targetLang === targetLang &&
      (p.idText.toLowerCase().replace(/[?.!,]+$/g, '') === effectiveNorm ||
        p.targetText.toLowerCase().replace(/[?.!,]+$/g, '') === norm)
  );
  if (parallelHit) {
    return {
      indonesianText: parallelHit.idText,
      translatedText: parallelHit.targetText,
      detectedSourceLang,
      languageName: langMeta.name,
      nativeName: langMeta.nativeName,
      registerLabel,
      aksaraText: transliterateToAksara(parallelHit.targetText, scriptToUse),
      aksaraLabel: scriptNames[scriptToUse],
      matchedMeaning: parallelHit.context,
      sourceMethod: 'parallel',
    };
  }

  // 2. Check exact phrase glossary match
  const exactGlossary = bhasantaraGlossary.find(
    g => g.targetLang === targetLang && g.idTerm.toLowerCase() === effectiveNorm
  );
  if (exactGlossary) {
    const translated = register === 'krama' ? exactGlossary.formal : exactGlossary.casual;
    return {
      indonesianText: reverseGlossaryHit ? reverseGlossaryHit.idTerm : clean,
      translatedText: translated,
      detectedSourceLang,
      languageName: langMeta.name,
      nativeName: langMeta.nativeName,
      registerLabel,
      aksaraText: transliterateToAksara(translated, scriptToUse),
      aksaraLabel: scriptNames[scriptToUse],
      matchedMeaning: exactGlossary.meaning,
      sourceMethod: 'glossary',
    };
  }

  // 3. Multi-word phrase & word-by-word glossary replacement (e.g., "SAYA MAKAN")
  const langEntries = bhasantaraGlossary
    .filter(g => g.targetLang === targetLang)
    .sort((a, b) => b.idTerm.length - a.idTerm.length);

  let working = effectiveNorm;
  let matchedCount = 0;
  const meanings: string[] = [];

  for (const entry of langEntries) {
    const pattern = new RegExp(`\\b${entry.idTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
    if (pattern.test(working)) {
      const replacement = register === 'krama' ? entry.formal : entry.casual;
      working = working.replace(pattern, replacement);
      matchedCount++;
      if (meanings.length < 2) meanings.push(`${entry.idTerm}: ${entry.meaning}`);
    }
  }

  const finalTranslated = matchedCount > 0 ? working : clean;
  return {
    indonesianText: reverseGlossaryHit ? reverseGlossaryHit.idTerm : clean,
    translatedText: finalTranslated,
    detectedSourceLang,
    languageName: langMeta.name,
    nativeName: langMeta.nativeName,
    registerLabel,
    aksaraText: transliterateToAksara(finalTranslated, scriptToUse),
    aksaraLabel: scriptNames[scriptToUse],
    matchedMeaning: meanings.length ? meanings.join(' · ') : undefined,
    sourceMethod: matchedCount > 0 ? 'glossary' : 'passthrough',
  };
}

/**
 * Deterministic Javanese Script Transliteration Engine (adapted from Bhasantara src/lib/9router.ts).
 */
export function latinToJavaneseScriptLocal(text: string): string {
  if (!text) return '';
  const wordOverrides: Record<string, string> = {
    angkara: 'ꦲꦁꦏꦫ',
    bhasantara: 'ꦨꦱꦤ꧀ꦠꦫ',
    isyara: 'ꦲꦶꦱꦾꦫ',
    sugeng: 'ꦱꦸꦒꦼꦁ',
    enjang: 'ꦲꦺꦚ꧀ꦗꦁ',
    enjing: 'ꦲꦺꦚ꧀ꦗꦶꦁ',
    matur: 'ꦩꦠꦸꦂ',
    nuwun: 'ꦤꦸꦮꦸꦤ꧀',
    suwun: 'ꦱꦸꦮꦸꦤ꧀',
    mangga: 'ꦩꦁꦒ',
    sinten: 'ꦱꦶꦤ꧀ꦠꦼꦤ꧀',
    menika: 'ꦩꦼꦤꦶꦏ',
    piye: 'ꦥꦶꦪꦺ',
    kabare: 'ꦏꦧꦫꦺ',
    indonesia: 'ꦲꦶꦤ꧀ꦢꦺꦴꦤꦺꦱꦶꦪ',
    jawa: 'ꦗꦮ',
    mangan: 'ꦩꦔꦤ꧀',
    nedha: 'ꦤꦼꦝ',
    banyu: 'ꦧꦚꦸ',
    toya: 'ꦠꦺꦴꦪ',
    omah: 'ꦲꦺꦴꦩꦃ',
    griya: 'ꦒꦿꦶꦪ',
    aku: 'ꦲꦏꦸ',
    kula: 'ꦏꦸꦭ',
  };

  const words = text.trim().split(/\s+/);
  if (words.length > 1) {
    return words.map(w => latinToJavaneseScriptLocal(w)).join(' ');
  }

  const textLower = text.toLowerCase().replace(/[?.!,]+$/g, '').trim();
  if (wordOverrides[textLower]) return wordOverrides[textLower];

  const charMap: Record<string, string> = {
    ha: 'ꦲ', na: 'ꦤ', ca: 'ꦕ', ra: 'ꦫ', ka: 'ꦏ',
    da: 'ꦢ', ta: 'ꦠ', sa: 'ꦱ', wa: 'ꦮ', la: 'ꦭ',
    pa: 'ꦥ', dha: 'ꦝ', ja: 'ꦗ', ya: 'ꦪ', nya: 'ꦚ',
    ma: 'ꦩ', ga: 'ꦒ', ba: 'ꦧ', tha: 'ꦛ', nga: 'ꦔ',
    hi: 'ꦲꦶ', ni: 'ꦤꦶ', ci: 'ꦕꦶ', ri: 'ꦫꦶ', ki: 'ꦏꦶ',
    di: 'ꦢꦶ', ti: 'ꦠꦶ', si: 'ꦱꦶ', wi: 'ꦮꦶ', li: 'ꦭꦶ',
    pi: 'ꦥꦶ', ji: 'ꦗꦶ', yi: 'ꦪꦶ', mi: 'ꦩꦶ', gi: 'ꦒꦶ', bi: 'ꦧꦶ',
    hu: 'ꦲꦸ', nu: 'ꦤꦸ', cu: 'ꦕꦸ', ru: 'ꦫꦸ', ku: 'ꦏꦸ',
    du: 'ꦢꦸ', tu: 'ꦠꦸ', su: 'ꦱꦸ', wu: 'ꦮꦸ', lu: 'ꦭꦸ',
    pu: 'ꦥꦸ', ju: 'ꦗꦸ', yu: 'ꦪꦸ', mu: 'ꦩꦸ', gu: 'ꦒꦸ', bu: 'ꦧꦸ',
    he: 'ꦲꦺ', ne: 'ꦤꦺ', ce: 'ꦕꦺ', re: 'ꦫꦺ', ke: 'ꦏꦺ',
    de: 'ꦢꦺ', te: 'ꦠꦺ', se: 'ꦱꦺ', we: 'ꦮꦺ', le: 'ꦭꦺ',
    pe: 'ꦥꦺ', je: 'ꦗꦺ', ye: 'ꦪꦺ', me: 'ꦩꦺ', ge: 'ꦒꦺ', be: 'ꦧꦺ',
    ho: 'ꦲꦺꦴ', no: 'ꦤꦺꦴ', co: 'ꦕꦺꦴ', ro: 'ꦫꦺꦴ', ko: 'ꦏꦺꦴ',
    do: 'ꦢꦺꦴ', to: 'ꦠꦺꦴ', so: 'ꦱꦺꦴ', wo: 'ꦮꦺꦴ', lo: 'ꦭꦺꦴ',
    po: 'ꦥꦺꦴ', jo: 'ꦗꦺꦴ', yo: 'ꦪꦺꦴ', mo: 'ꦩꦺꦴ', go: 'ꦒꦺꦴ', bo: 'ꦧꦺꦴ',
    a: 'ꦲ', i: 'ꦲꦶ', u: 'ꦲꦸ', e: 'ꦲꦺ', o: 'ꦲꦺꦴ',
    ng: 'ꦁ', r: 'ꦂ', h: 'ꦃ',
    k: 'ꦏ꧀', g: 'ꦒ꧀', t: 'ꦠ꧀', d: 'ꦢ꧀', n: 'ꦤ꧀',
    p: 'ꦥ꧀', b: 'ꦧ꧀', m: 'ꦩ꧀', y: 'ꦪ꧀',
    l: 'ꦭ꧀', w: 'ꦮ꧀', s: 'ꦱ꧀', c: 'ꦕ꧀', j: 'ꦗ꧀', f: 'ꦥ꦳꧀', v: 'ꦥ꦳꧀', z: 'ꦗ꦳꧀',
  };

  let result = '';
  let i = 0;
  while (i < textLower.length) {
    const remaining = textLower.slice(i);
    let matched = false;
    for (const len of [3, 2, 1]) {
      const sub = remaining.slice(0, len);
      if (charMap[sub]) {
        result += charMap[sub];
        i += len;
        matched = true;
        break;
      }
    }
    if (!matched) {
      result += textLower[i];
      i++;
    }
  }
  return result;
}

/**
 * Deterministic Sundanese Script Transliteration Engine (adapted from Bhasantara src/lib/9router.ts).
 */
export function latinToSundaneseScriptLocal(text: string): string {
  if (!text) return '';
  const wordOverrides: Record<string, string> = {
    sampurasun: 'ᮞᮙ᮪ᮕᮥᮛᮞᮥᮔ᮪',
    wilujeng: 'ᮝᮤᮜᮥᮏᮨᮀ',
    enjing: 'ᮆᮔ᮪ᮏᮤᮀ',
    hatur: 'ᮠᮒᮥᮁ',
    nuhun: 'ᮔᮥᮠᮥᮔ᮪',
    sunda: 'ᮞᮥᮔ᮪ᮓ',
    bhasantara: 'ᮘᮞᮔ᮪ᮒᮛ',
    isyara: 'ᮄᮞᮡᮛ',
  };

  const words = text.trim().split(/\s+/);
  if (words.length > 1) {
    return words.map(w => latinToSundaneseScriptLocal(w)).join(' ');
  }

  const textLower = text.toLowerCase().replace(/[?.!,]+$/g, '').trim();
  if (wordOverrides[textLower]) return wordOverrides[textLower];

  const charMap: Record<string, string> = {
    ha: 'ᮠ', na: 'ᮔ', ca: 'ᮎ', ra: 'ᮛ', ka: 'ᮊ',
    da: 'ᮓ', ta: 'ᮒ', sa: 'ᮞ', wa: 'ᮝ', la: 'ᮜ',
    pa: 'ᮕ', ja: 'ᮏ', ya: 'ᮚ', nya: 'ᮑ',
    ma: 'ᮙ', ga: 'ᮌ', ba: 'ᮘ', nga: 'ᮍ', fa: 'ᮖ', za: 'ᮐ',
    a: 'ᮃ', i: 'ᮄ', u: 'ᮅ', e: 'ᮆ', o: 'ᮇ',
    ng: 'ᮀ', r: 'ᮁ', h: 'ᮂ',
    k: 'ᮊ᮪', g: 'ᮌ᮪', t: 'ᮒ᮪', d: 'ᮓ᮪', n: 'ᮔ᮪',
    p: 'ᮕ᮪', b: 'ᮘ᮪', m: 'ᮙ᮪', y: 'ᮚ᮪',
    l: 'ᮜ᮪', w: 'ᮝ᮪', s: 'ᮞ᮪', c: 'ᮎ᮪', j: 'ᮏ᮪', f: 'ᮖ᮪', z: 'ᮐ᮪',
  };

  let result = '';
  let i = 0;
  while (i < textLower.length) {
    const remaining = textLower.slice(i);
    let matched = false;
    for (const len of [3, 2, 1]) {
      const sub = remaining.slice(0, len);
      if (charMap[sub]) {
        result += charMap[sub];
        i += len;
        matched = true;
        break;
      }
    }
    if (!matched) {
      result += textLower[i];
      i++;
    }
  }
  return result;
}

/**
 * Deterministic Balinese Script Transliteration Engine (adapted from Bhasantara src/lib/9router.ts).
 */
export function latinToBalineseScriptLocal(text: string): string {
  if (!text) return '';
  const wordOverrides: Record<string, string> = {
    angkara: 'ᬳᬁᬓᬭ',
    om: 'ᬒᬁ',
    swastiastu: 'ᬲ᭄ᬯᬲ᭄ᬢᬶᬅᬲ᭄ᬢᬸ',
    suksma: 'ᬲᬸᬓ᭄ᬱ᭄ᬫ',
    matur: 'ᬫᬢᬸᬂ',
    bali: 'ᬩᬮᬶ',
    bhasantara: 'ᬪᬲᬦ᭄ᬢᬭ',
    rahajeng: 'ᬭᬳᬚᬾᬂ',
    semeng: 'ᬲᬾᬫᬾᬂ',
  };

  const words = text.trim().split(/\s+/);
  if (words.length > 1) {
    return words.map(w => latinToBalineseScriptLocal(w)).join(' ');
  }

  const textLower = text.toLowerCase().replace(/[?.!,]+$/g, '').trim();
  if (wordOverrides[textLower]) return wordOverrides[textLower];

  const charMap: Record<string, string> = {
    ha: 'ᬳ', na: 'ᬦ', ca: 'ᬘ', ra: 'ᬭ', ka: 'ᬓ',
    da: 'ᬤ', ta: 'ᬢ', sa: 'ᬲ', wa: 'ᬯ', la: 'ᬮ',
    pa: 'ᬧ', dha: 'ᬟ', ja: 'ᬚ', ya: 'ᬬ', nya: 'ᬜ',
    ma: 'ᬫ', ga: 'ᬕ', ba: 'ᬩ', tha: 'ᬞ', nga: 'ᬗ',
    a: 'ᬳ', i: 'ᬳᬶ', u: 'ᬳᬸ', e: 'ᬳᬾ', o: 'ᬳᭀ',
    ng: 'ᬁ', r: 'ᬂ', h: 'ᬄ',
    k: 'ᬓ᭄', g: 'ᬕ᭄', t: 'ᬢ᭄', d: 'ᬤ᭄', n: 'ᬦ᭄',
    p: 'ᬧ᭄', b: 'ᬩ᭄', m: 'ᬫ᭄', y: 'ᬬ᭄',
    l: 'ᬮ᭄', w: 'ᬯ᭄', s: 'ᬲ᭄', c: 'ᬘ᭄', j: 'ᬚ᭄',
  };

  let result = '';
  let i = 0;
  while (i < textLower.length) {
    const remaining = textLower.slice(i);
    let matched = false;
    for (const len of [3, 2, 1]) {
      const sub = remaining.slice(0, len);
      if (charMap[sub]) {
        result += charMap[sub];
        i += len;
        matched = true;
        break;
      }
    }
    if (!matched) {
      result += textLower[i];
      i++;
    }
  }
  return result;
}

/**
 * Reverse Aksara Nusantara (Jawa / Sunda / Bali) to Latin local engine.
 */
export function aksaraToLatinLocal(text: string): string {
  if (!text) return '';
  const phraseOverrides: Record<string, string> = {
    'ꦲꦁꦏꦫ': 'angkara',
    'ꦨꦱꦤ꧀ꦠꦫ': 'bhasantara',
    'ꦩꦠꦸꦂ ꦤꦸꦮꦸꦤ꧀': 'matur nuwun',
    'ꦩꦠꦸꦂ': 'matur',
    'ꦤꦸꦮꦸꦤ꧀': 'nuwun',
    'ꦱꦸꦒꦼꦁ': 'sugeng',
    'ᮞᮙ᮪ᮕᮥᮛᮞᮥᮔ᮪': 'sampurasun',
    'ᮠᮒᮥᮁ ᮔᮥᮠᮥᮔ᮪': 'hatur nuhun',
    'ᬫᬢᬸᬂ ᬲᬸᬓ᭄ᬱ᭄ᬫ': 'matur suksma',
    'ᬩᬮᬶ': 'bali',
  };
  const trimmed = text.trim();
  if (phraseOverrides[trimmed]) return phraseOverrides[trimmed];

  const glyphMap: Record<string, string> = {
    // Jawa
    'ꦲ': 'ha', 'ꦤ': 'na', 'ꦕ': 'ca', 'ꦫ': 'ra', 'ꦏ': 'ka',
    'ꦢ': 'da', 'ꦠ': 'ta', 'ꦱ': 'sa', 'ꦮ': 'wa', 'ꦭ': 'la',
    'ꦥ': 'pa', 'ꦝ': 'dha', 'ꦗ': 'ja', 'ꦪ': 'ya', 'ꦚ': 'nya',
    'ꦩ': 'ma', 'ꦒ': 'ga', 'ꦧ': 'ba', 'ꦛ': 'tha', 'ꦔ': 'nga',
    'ꦟ': 'na', 'ꦑ': 'ka', 'ꦡ': 'ta', 'ꦯ': 'sa', 'ꦦ': 'pa', 'ꦓ': 'ga', 'ꦨ': 'ba',
    'ꦄ': 'a', 'ꦆ': 'i', 'ꦈ': 'u', 'ꦌ': 'e', 'ꦎ': 'o',
    'ꦁ': 'ng', 'ꦂ': 'r', 'ꦃ': 'h',
    // Sunda
    'ᮊ': 'ka', 'ᮌ': 'ga', 'ᮍ': 'nga', 'ᮎ': 'ca', 'ᮏ': 'ja',
    'ᮑ': 'nya', 'ᮒ': 'ta', 'ᮓ': 'da', 'ᮔ': 'na', 'ᮕ': 'pa',
    'ᮘ': 'ba', 'ᮙ': 'ma', 'ᮚ': 'ya', 'ᮛ': 'ra', 'ᮜ': 'la',
    'ᮝ': 'wa', 'ᮞ': 'sa', 'ᮠ': 'ha', 'ᮖ': 'fa', 'ᮐ': 'za',
    'ᮃ': 'a', 'ᮄ': 'i', 'ᮅ': 'u', 'ᮆ': 'e', 'ᮇ': 'o',
    'ᮀ': 'ng', 'ᮁ': 'r', 'ᮂ': 'h',
    // Bali
    'ᬳ': 'ha', 'ᬦ': 'na', 'ᬘ': 'ca', 'ᬭ': 'ra', 'ᬓ': 'ka',
    'ᬤ': 'da', 'ᬢ': 'ta', 'ᬲ': 'sa', 'ᬯ': 'wa', 'ᬮ': 'la',
    'ᬧ': 'pa', 'ᬟ': 'dha', 'ᬚ': 'ja', 'ᬬ': 'ya', 'ᬜ': 'nya',
    'ᬫ': 'ma', 'ᬕ': 'ga', 'ᬩ': 'ba', 'ᬞ': 'tha', 'ᬗ': 'nga',
    'ᬅ': 'a', 'ᬇ': 'i', 'ᬉ': 'u', 'ᬋ': 'e', 'ᬍ': 'o',
    'ᬁ': 'ng', 'ᬂ': 'r', 'ᬄ': 'h',
  };

  const vowelMod: Record<string, string> = {
    'ꦶ': 'i', 'ꦸ': 'u', 'ꦺ': 'e', 'ꦼ': 'e',
    'ᮤ': 'i', 'ᮥ': 'u', 'ᮨ': 'e', 'ᮦ': 'e', 'ᮧ': 'o',
    'ᬶ': 'i', 'ᬸ': 'u', 'ᬾ': 'e', 'ᭀ': 'o',
  };
  const virama = new Set(['꧀', '᮪', '᭄']);

  let out = '';
  const chars = Array.from(trimmed);
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    if (ch === ' ') {
      out += ' ';
      continue;
    }
    if (glyphMap[ch]) {
      let syllable = glyphMap[ch];
      const next = chars[i + 1];
      if (next && virama.has(next)) {
        syllable = syllable.replace(/a$/, '');
        i++;
      } else if (next && vowelMod[next]) {
        syllable = syllable.replace(/a$/, vowelMod[next]);
        i++;
      }
      out += syllable;
    } else if (!virama.has(ch) && !vowelMod[ch] && ch !== 'ꦴ') {
      out += ch;
    }
  }
  return out;
}

export function transliterateToAksara(
  text: string,
  script: AksaraScript,
  direction: TransliterateDirection = 'LATIN_TO_AKSARA'
): string {
  if (direction === 'AKSARA_TO_LATIN') return aksaraToLatinLocal(text);
  if (script === 'SUNDANESE') return latinToSundaneseScriptLocal(text);
  if (script === 'BALINESE') return latinToBalineseScriptLocal(text);
  return latinToJavaneseScriptLocal(text);
}

/**
 * Interactive Aksara Alphabet Guide data from Bhasantara AksaraAlphabetGuide.tsx.
 */
export const aksaraGuideData: Record<AksaraScript, Record<string, AksaraItem[]>> = {
  JAVANESE: {
    Nglegena: [
      { glyph: 'ꦲ', latin: 'ha' }, { glyph: 'ꦤ', latin: 'na' }, { glyph: 'ꦕ', latin: 'ca' }, { glyph: 'ꦫ', latin: 'ra' }, { glyph: 'ꦏ', latin: 'ka' },
      { glyph: 'ꦢ', latin: 'da' }, { glyph: 'ꦠ', latin: 'ta' }, { glyph: 'ꦱ', latin: 'sa' }, { glyph: 'ꦮ', latin: 'wa' }, { glyph: 'ꦭ', latin: 'la' },
      { glyph: 'ꦥ', latin: 'pa' }, { glyph: 'ꦝ', latin: 'dha' }, { glyph: 'ꦗ', latin: 'ja' }, { glyph: 'ꦪ', latin: 'ya' }, { glyph: 'ꦚ', latin: 'nya' },
      { glyph: 'ꦩ', latin: 'ma' }, { glyph: 'ꦒ', latin: 'ga' }, { glyph: 'ꦧ', latin: 'ba' }, { glyph: 'ꦛ', latin: 'tha' }, { glyph: 'ꦔ', latin: 'nga' },
    ],
    Sandhangan: [
      { glyph: 'ꦶ', latin: 'Wulu (i)' }, { glyph: 'ꦸ', latin: 'Suku (u)' }, { glyph: 'ꦺ', latin: 'Taling (é)' },
      { glyph: 'ꦺꦴ', latin: 'Taling-Tarung (o)' }, { glyph: 'ꦼ', latin: 'Pepet (ê)' }, { glyph: 'ꦁ', latin: 'Cecak (ng)' },
      { glyph: 'ꦂ', latin: 'Layar (r)' }, { glyph: 'ꦃ', latin: 'Wignyan (h)' }, { glyph: '꧀', latin: 'Pangkon' },
    ],
    Murda: [
      { glyph: 'ꦟ', latin: 'Na' }, { glyph: 'ꦑ', latin: 'Ka' }, { glyph: 'ꦡ', latin: 'Ta' },
      { glyph: 'ꦯ', latin: 'Sa' }, { glyph: 'ꦦ', latin: 'Pa' }, { glyph: 'ꦓ', latin: 'Ga' }, { glyph: 'ꦨ', latin: 'Ba' },
    ],
    Swara: [
      { glyph: 'ꦄ', latin: 'A' }, { glyph: 'ꦆ', latin: 'I' }, { glyph: 'ꦈ', latin: 'U' },
      { glyph: 'ꦌ', latin: 'E' }, { glyph: 'ꦎ', latin: 'O' },
    ],
  },
  SUNDANESE: {
    Ngangalagena: [
      { glyph: 'ᮊ', latin: 'ka' }, { glyph: 'ᮌ', latin: 'ga' }, { glyph: 'ᮍ', latin: 'nga' }, { glyph: 'ᮎ', latin: 'ca' }, { glyph: 'ᮏ', latin: 'ja' },
      { glyph: 'ᮑ', latin: 'nya' }, { glyph: 'ᮒ', latin: 'ta' }, { glyph: 'ᮓ', latin: 'da' }, { glyph: 'ᮔ', latin: 'na' }, { glyph: 'ᮕ', latin: 'pa' },
      { glyph: 'ᮘ', latin: 'ba' }, { glyph: 'ᮙ', latin: 'ma' }, { glyph: 'ᮚ', latin: 'ya' }, { glyph: 'ᮛ', latin: 'ra' }, { glyph: 'ᮜ', latin: 'la' },
      { glyph: 'ᮝ', latin: 'wa' }, { glyph: 'ᮞ', latin: 'sa' }, { glyph: 'ᮠ', latin: 'ha' }, { glyph: 'ᮖ', latin: 'fa' }, { glyph: 'ᮐ', latin: 'za' },
    ],
    Rarangken: [
      { glyph: 'ᮤ', latin: 'Panghulu (i)' }, { glyph: 'ᮥ', latin: 'Panyuku (u)' }, { glyph: '᮪', latin: 'Pamaeh' },
    ],
    Swara: [
      { glyph: 'ᮃ', latin: 'A' }, { glyph: 'ᮄ', latin: 'I' }, { glyph: 'ᮅ', latin: 'U' },
      { glyph: 'ᮆ', latin: 'E' }, { glyph: 'ᮇ', latin: 'O' },
    ],
  },
  BALINESE: {
    Wianjana: [
      { glyph: 'ᬳ', latin: 'ha' }, { glyph: 'ᬦ', latin: 'na' }, { glyph: 'ᬘ', latin: 'ca' }, { glyph: 'ᬭ', latin: 'ra' }, { glyph: 'ᬓ', latin: 'ka' },
      { glyph: 'ᬤ', latin: 'da' }, { glyph: 'ᬢ', latin: 'ta' }, { glyph: 'ᬲ', latin: 'sa' }, { glyph: 'ᬯ', latin: 'wa' }, { glyph: 'ᬮ', latin: 'la' },
      { glyph: 'ᬧ', latin: 'pa' }, { glyph: 'ᬟ', latin: 'dha' }, { glyph: 'ᬚ', latin: 'ja' }, { glyph: 'ᬬ', latin: 'ya' }, { glyph: 'ᬜ', latin: 'nya' },
      { glyph: 'ᬫ', latin: 'ma' }, { glyph: 'ᬕ', latin: 'ga' }, { glyph: 'ᬩ', latin: 'ba' }, { glyph: 'ᬞ', latin: 'tha' }, { glyph: 'ᬗ', latin: 'nga' },
    ],
    Pangangge: [
      { glyph: 'ᬶ', latin: 'Ulu (i)' }, { glyph: 'ᬸ', latin: 'Suku (u)' }, { glyph: 'ᬾ', latin: 'Taling (e)' },
      { glyph: 'ᭀ', latin: 'Tedung (o)' }, { glyph: 'ᬁ', latin: 'Cecek (ng)' }, { glyph: 'ᬂ', latin: 'Surang (r)' },
      { glyph: 'ᬄ', latin: 'Bisah (h)' }, { glyph: '᭄', latin: 'Adeg-adeg' },
    ],
    Swara: [
      { glyph: 'ᬅ', latin: 'A' }, { glyph: 'ᬇ', latin: 'I' }, { glyph: 'ᬉ', latin: 'U' },
      { glyph: 'ᬋ', latin: 'E' }, { glyph: 'ᬍ', latin: 'O' },
    ],
  },
};

export function speakText(text: string, lang = 'id-ID'): void {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window && text && text !== '—') {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    window.speechSynthesis.speak(utterance);
  }
}
