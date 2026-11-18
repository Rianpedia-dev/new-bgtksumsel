import { OrganizationMember } from "@/types";

export const mockProfileContent = {
  name: "Balai Guru dan Tenaga Kependidikan Provinsi Sumatera Selatan",
  abbreviation: "BGTK Sumatera Selatan",
  establishedYear: 2022,
  legalBasis: "Permendikbudristek Nomor 11 Tahun 2022 tentang Organisasi dan Tata Kerja Balai Guru dan Tenaga Kependidikan",
  aboutText: `
    Balai Guru dan Tenaga Kependidikan (BGTK) Provinsi Sumatera Selatan merupakan Unit Pelaksana Teknis (UPT) Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi di bidang peningkatan mutu pendidik dan tenaga kependidikan yang berada di bawah dan bertanggung jawab kepada Direktur Jenderal Guru dan Tenaga Kependidikan.
    
    BGTK Provinsi Sumatera Selatan bertransformasi menjadi pusat keunggulan (*center of excellence*) dalam mendampingi pemerintah daerah, satuan pendidikan, komunitas belajar, dan para pendidik di 17 Kabupaten/Kota se-Sumatera Selatan untuk mewujudkan pembelajaran yang berpusat pada murid melalui Kurikulum Merdeka.
  `,
  vision: "Terwujudnya Pendidik dan Tenaga Kependidikan di Provinsi Sumatera Selatan yang Profesional, Berkarakter, Berdaya Saing Global, dan Memerdekakan Belajar Generasi Bangsa.",
  missions: [
    "Mengembangkan model pembelajaran transformatif, inovatif, dan berpusat pada perkembangan murid.",
    "Meningkatkan kompetensi pedagogik, profesional, kepribadian, dan sosial guru serta tenaga kependidikan secara berkelanjutan.",
    "Memfasilitasi kemitraan strategis dengan pemerintah daerah dan pemangku kepentingan untuk akselerasi ekosistem pendidikan bermutu.",
    "Menyelenggarakan tata kelola kelembagaan yang transparan, akuntabel, bebas korupsi, dan berorientasi pada pelayanan prima.",
    "Mengembangkan jejaring Komunitas Belajar (Kombel) sebagai wadah kolaborasi dan refleksi pembelajaran nyata.",
  ],
  goals: [
    "Tercapainya peningkatan standar kompetensi 100% guru sasaran di Sumatera Selatan.",
    "Terwujudnya budaya kolaborasi profesional antar-guru melalui komunitas belajar aktif.",
    "Tercapainya indeks kepuasan masyarakat terhadap layanan BGTK dengan predikat minimal 'Sangat Baik' (A).",
    "Terwujudnya unit kerja berpredikat Wilayah Bebas dari Korupsi (WBK) dan Wilayah Birokrasi Bersih dan Melayani (WBBM).",
  ],
  duties: [
    "Pelaksanaan pemetaan mutu pendidik dan tenaga kependidikan di Provinsi Sumatera Selatan.",
    "Pengembangan model peningkatan kompetensi pendidik dan tenaga kependidikan.",
    "Pelaksanaan peningkatan kompetensi pendidik dan tenaga kependidikan.",
    "Fasilitasi peningkatan kompetensi pendidik dan tenaga kependidikan.",
    "Pelaksanaan supervisi peningkatan mutu pendidik dan tenaga kependidikan.",
    "Pengelolaan data dan sistem informasi pendidik dan tenaga kependidikan.",
    "Pelaksanaan kemitraan di bidang peningkatan mutu pendidik dan tenaga kependidikan.",
    "Pelaksanaan urusan perencanaan, keuangan, kepegawaian, ketatalaksanaan, ketatausahaan, barang milik negara, dan hubungan masyarakat.",
  ],
};

export const mockMembers: OrganizationMember[] = [
  {
    id: "mem-1",
    name: "Dra. Hj. Nurjanah, M.Pd",
    nip: "19680512 199403 2 001",
    position: "Kepala Balai Guru dan Tenaga Kependidikan",
    hierarchyLevel: 1,
    sortOrder: 1,
    imageUrl: "/file-statik/kepala-bgtk.avif",
    bio: "Pendidik senior dengan pengalaman lebih dari 25 tahun dalam tata kelola penjaminan mutu pendidikan di Sumatera Selatan.",
  },
  {
    id: "mem-2",
    name: "Muhammad Fadli, S.Sos., M.Si",
    nip: "19750820 200212 1 003",
    position: "Kasubbag Tata Usaha",
    hierarchyLevel: 2,
    sortOrder: 2,
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    bio: "Memimpin koordinasi operasional tata persuratan, kepegawaian, pengelolaan BMN, dan transparansi anggaran balai.",
  },
  {
    id: "mem-3",
    name: "Dr. Hendra Wijaya, M.Pd",
    nip: "19780315 200501 1 004",
    position: "Ketua Pokja Transformasi Pembelajaran & Widyaprada Ahli Madya",
    division: "Pokja Peningkatan Mutu Pembelajaran",
    hierarchyLevel: 3,
    sortOrder: 3,
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    bio: "Fasilitator nasional Kurikulum Merdeka dan konsultan pembelajaran berbasis asesmen.",
  },
  {
    id: "mem-4",
    name: "Sri Rahayu, S.Pd., M.Ed",
    nip: "19820710 200801 2 008",
    position: "Ketua Pokja Program Guru Penggerak & Sekolah Penggerak",
    division: "Pokja Kepemimpinan Sekolah",
    hierarchyLevel: 3,
    sortOrder: 4,
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    bio: "Koordinator pelaksanaan seleksi, lokakarya, dan pendampingan individu Guru Penggerak di 17 Kabupaten/Kota.",
  },
  {
    id: "mem-5",
    name: "Budi Santoso, S.Kom., M.Kom",
    nip: "19851125 201001 1 012",
    position: "Ketua Pokja Data, Informasi & Kemitraan Strategis",
    division: "Pokja Sistem Informasi & Publikasi",
    hierarchyLevel: 3,
    sortOrder: 5,
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
    bio: "Pengembang arsitektur digital portal layanan terpadu, keamanan informasi, dan sinergi media publik.",
  },
  {
    id: "mem-6",
    name: "Eka Wahyuni, S.E., M.Ak",
    nip: "19880419 201402 2 003",
    position: "Koordinator Layanan Publik & Pengaduan (Satlak ZI-WBK)",
    division: "Subbag Tata Usaha",
    hierarchyLevel: 3,
    sortOrder: 6,
    imageUrl: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80",
    bio: "Penanggung jawab manajemen komplain, monitoring SLA respon aduan, dan survei kepuasan masyarakat (SKM).",
  },
];
