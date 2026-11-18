import { SurveyPeriod, SurveyQuestion, SurveyResponseItem } from "@/types";

export const mockSurveyPeriod: SurveyPeriod = {
  id: "period-2026-1",
  title: "Survei Kepuasan Masyarakat (SKM) Semester I Tahun 2026",
  year: 2026,
  semester: 1,
  isActive: true,
  startDate: "2026-01-01",
  endDate: "2026-06-30",
};

export const mockSurveyQuestions: SurveyQuestion[] = [
  {
    id: "q-1",
    code: "U1",
    title: "Kesesuaian Persyaratan Pelayanan",
    questionText: "Bagaimana kemudahan dan kesesuaian persyaratan pelayanan dengan jenis layanan yang Anda terima di BGTK Sumatera Selatan?",
    weight: 1 / 9,
    scoreAvg: 3.65,
  },
  {
    id: "q-2",
    code: "U2",
    title: "Kemudahan Prosedur & Alur Pelayanan",
    questionText: "Bagaimana kemudahan alur dan prosedur birokrasi pelayanan yang Anda jalani?",
    weight: 1 / 9,
    scoreAvg: 3.58,
  },
  {
    id: "q-3",
    code: "U3",
    title: "Kecepatan Waktu Pelayanan",
    questionText: "Bagaimana kecepatan waktu respon penyelesaian layanan sesuai standar waktu (SLA) yang dijanjikan?",
    weight: 1 / 9,
    scoreAvg: 3.52,
  },
  {
    id: "q-4",
    code: "U4",
    title: "Biaya / Tarif Pelayanan (Bebas Pungli)",
    questionText: "Apakah seluruh proses pelayanan bebas biaya (Gratis / Rp 0) dan tidak terdapat pungutan liar?",
    weight: 1 / 9,
    scoreAvg: 3.96,
  },
  {
    id: "q-5",
    code: "U5",
    title: "Kesesuaian Produk & Spesifikasi Layanan",
    questionText: "Bagaimana kesesuaian hasil/produk layanan yang diterima dengan ketentuan standar yang telah ditetapkan?",
    weight: 1 / 9,
    scoreAvg: 3.72,
  },
  {
    id: "q-6",
    code: "U6",
    title: "Kompetensi & Kemampuan Petugas",
    questionText: "Bagaimana kecakapan, kejelasan informasi, dan kompetensi petugas saat memberikan layanan kepada Anda?",
    weight: 1 / 9,
    scoreAvg: 3.75,
  },
  {
    id: "q-7",
    code: "U7",
    title: "Perilaku & Kesopanan Petugas Pelayanan",
    questionText: "Bagaimana sikap kesopanan, keramahan, dan ketanggapan petugas dalam melayani kebutuhan Anda?",
    weight: 1 / 9,
    scoreAvg: 3.84,
  },
  {
    id: "q-8",
    code: "U8",
    title: "Penanganan Pengaduan, Saran & Masukan",
    questionText: "Bagaimana kualitas penanganan, ketanggapan tindak lanjut, dan kanal penyampaian saran/pengaduan yang disediakan?",
    weight: 1 / 9,
    scoreAvg: 3.48,
  },
  {
    id: "q-9",
    code: "U9",
    title: "Kenyamanan Sarana dan Prasarana",
    questionText: "Bagaimana kenyamanan, kebersihan ruang tunggu, fasilitas toilet, akses internet, dan sarana loket BGTK Sumsel?",
    weight: 1 / 9,
    scoreAvg: 3.69,
  },
];

// Perhitungan IKM Sesuai Permenpan RB No. 14/2017:
// Nilai Rata-rata Tertimbang = Rata-rata Skor * 25
export const mockIkmSummary = {
  totalRespondents: 348,
  rawScoreAvg: 3.687, // Skala 1 - 4
  ikmScore: 92.18, // Skala 100
  grade: "A",
  serviceQuality: "SANGAT BAIK",
  periodLabel: "Semester I - 2026 (Jan - Jun)",
  yearlyTrends: [
    { period: "2024-S1", score: 86.4, grade: "B" },
    { period: "2024-S2", score: 87.8, grade: "B" },
    { period: "2025-S1", score: 89.2, grade: "A" },
    { period: "2025-S2", score: 90.5, grade: "A" },
    { period: "2026-S1", score: 92.18, grade: "A" },
  ],
};

export const mockSurveyResponses: SurveyResponseItem[] = [
  {
    id: "resp-1",
    respondentName: "Drs. Ahmad Zarkasih, M.Si",
    gender: "L",
    ageGroup: "46-55",
    education: "S2",
    occupation: "Kepala Sekolah",
    serviceReceived: "PERMOHONAN_NARASUMBER",
    suggestions: "Pelayanan sangat cepat dan narasumber yang ditugaskan sangat menguasai materi Kurikulum Merdeka.",
    scoreAvg: 3.89,
    createdAt: "2026-03-12T10:14:00Z",
  },
  {
    id: "resp-2",
    respondentName: "Nurul Hidayati, S.Pd",
    gender: "P",
    ageGroup: "26-35",
    education: "S1",
    occupation: "Guru",
    serviceReceived: "FASILITASI_KOMPETENSI_PTK",
    suggestions: "Proses administrasi sudah digital dan bebas biaya. Mohon ditingkatkan kecepatan wifi di ruang loket.",
    scoreAvg: 3.67,
    createdAt: "2026-03-11T14:32:00Z",
  },
  {
    id: "resp-3",
    respondentName: "Anonim (Responden Dirahasiakan)",
    gender: "L",
    ageGroup: "36-45",
    education: "S1",
    occupation: "Tenaga Kependidikan",
    serviceReceived: "SIM_KEPEGAWAIAN",
    suggestions: "Respon konsultasi mutasi jabatan fungsional sangat ramah dan transparan.",
    scoreAvg: 4.0,
    createdAt: "2026-03-10T09:20:00Z",
  },
  {
    id: "resp-4",
    respondentName: "Hj. Ratna Juwita, S.Pd., M.M",
    gender: "P",
    ageGroup: ">55",
    education: "S2",
    occupation: "Pengawas Sekolah",
    serviceReceived: "INFORMASI_PUBLIK",
    suggestions: "Penyampaian data publik PPID sangat tertata rapi.",
    scoreAvg: 3.78,
    createdAt: "2026-03-08T11:45:00Z",
  },
];
