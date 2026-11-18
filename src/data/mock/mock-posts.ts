import { Category, Post } from "@/types";

export const mockCategories: Category[] = [
  { id: "cat-1", name: "Kebijakan & Program", slug: "kebijakan-program", count: 12 },
  { id: "cat-2", name: "Pelatihan & Bimtek", slug: "pelatihan-bimtek", count: 18 },
  { id: "cat-3", name: "Inovasi Pembelajaran", slug: "inovasi-pembelajaran", count: 8 },
  { id: "cat-4", name: "Prestasi Guru & Tendik", slug: "prestasi-guru-tendik", count: 6 },
  { id: "cat-5", name: "Kemitraan Daerah", slug: "kemitraan-daerah", count: 5 },
];

export const mockPosts: Post[] = [
  {
    id: "post-1",
    title: "BGTK Sumsel Selenggarakan Lokakarya Transformasi Kepemimpinan Pembelajaran Tahun 2026",
    slug: "lokakarya-transformasi-kepemimpinan-pembelajaran-2026",
    excerpt: "Sebanyak 150 Kepala Sekolah dan Guru Penggerak se-Sumatera Selatan mengikuti pembekalan intensif kepemimpinan pembelajaran era digital di Palembang.",
    contentHtml: `
      <p>Balai Guru dan Tenaga Kependidikan (BGTK) Provinsi Sumatera Selatan secara resmi membuka kegiatan <strong>Lokakarya Transformasi Kepemimpinan Pembelajaran Tahun 2026</strong> pada hari Selasa di Palembang. Kegiatan ini bertujuan memperkuat kapasitas manajerial kepala sekolah dan pendidik dalam mengimplementasikan Kurikulum Merdeka secara berkelanjutan.</p>
      <p>Kepala BGTK Sumatera Selatan dalam sambutan pembukaannya menegaskan bahwa kepemimpinan pembelajaran merupakan fondasi esensial untuk melahirkan ekosistem belajar yang berpihak pada murid. Guru dan pimpinan sekolah diajak mengoptimalkan platform pembelajaran digital serta kolaborasi lintas komunitas belajar sekolah (Kombel).</p>
      <h3>Fokus Penguatan 3 Aspek Utama</h3>
      <ul>
        <li>Strategi supervisi klinis berbasis coaching yang membangun refleksi pendidik.</li>
        <li>Pengelolaan data rapor pendidikan daerah untuk intervensi mutu berbasis bukti.</li>
        <li>Penyusunan program sekolah yang inklusif, ramah anak, dan bebas perundungan.</li>
      </ul>
      <p>Kegiatan yang berlangsung selama tiga hari ini menghadirkan narasumber utama dari Kemendikbudristek dan akademisi praktisi pendidikan tingkat nasional.</p>
    `,
    coverImageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    captionImage: "Suasana pembukaan Lokakarya Kepemimpinan Pembelajaran di Palembang",
    status: "PUBLISHED",
    viewCount: 1245,
    publishedAt: "2026-03-12T08:30:00Z",
    author: {
      id: "usr-2",
      name: "Tim Humas BGTK",
    },
    category: mockCategories[1],
    tags: ["Kepemimpinan", "Guru Penggerak", "Kepala Sekolah", "Sumsel"],
  },
  {
    id: "post-2",
    title: "Komitmen BGTK Sumsel Wujudkan Zona Integritas Menuju Wilayah Bebas dari Korupsi (WBK)",
    slug: "komitmen-zona-integritas-wbk-bgtk-sumsel",
    excerpt: "Seluruh aparatur BGTK Sumsel menandatangani Pakta Integritas dan Piagam Pencanangan Zona Integritas sebagai wujud transparansi dan akuntabilitas pelayanan publik.",
    contentHtml: `
      <p>Sebagai wujud dedikasi terhadap reformasi birokrasi dan peningkatan kualitas layanan prima, BGTK Provinsi Sumatera Selatan menyelenggarakan Apel Bersama dan Penandatanganan Pakta Integritas Zona Integritas (ZI) Menuju Wilayah Bebas dari Korupsi (WBK).</p>
      <p>Kegiatan ini menjadi komitmen nyata bahwa seluruh standar pelayanan publik di BGTK Sumatera Selatan bebas biaya (Rp 0), transparan, serta didukung kanal pengaduan masyarakat yang responsif dan aman.</p>
      <p>Masyarakat dapat terus memantau kinerja instansi melalui menu Akuntabilitas dan menyampaikan masukan membangun pada instrumen Survei Kepuasan Masyarakat yang tersedia di portal resmi.</p>
    `,
    coverImageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
    captionImage: "Penandatanganan Komitmen Zona Integritas oleh Seluruh ASN BGTK Sumsel",
    status: "PUBLISHED",
    viewCount: 890,
    publishedAt: "2026-03-05T09:15:00Z",
    author: {
      id: "usr-1",
      name: "Super Admin",
    },
    category: mockCategories[0],
    tags: ["Zona Integritas", "WBK", "Reformasi Birokrasi", "Pelayanan Publik"],
  },
  {
    id: "post-3",
    title: "Praktik Baik Guru Pesisir Ogan Komering Ilir Inspirasi Inovasi Literasi Digital Daerah",
    slug: "praktik-baik-guru-pesisir-oki-literasi-digital",
    excerpt: "Kisah inspiratif guru di pelosok Sumsel dalam menghadirkan pojok baca digital luring berhasil meraih apresiasi dalam gelar wicara pendidik BGTK Sumsel.",
    contentHtml: `
      <p>Keterbatasan sinyal internet bukan halangan untuk berinovasi. Melalui pemanfaatan server lokal mini dan konten edukasi terbuka, seorang guru dari wilayah perairan OKI berhasil mendongkrak minat baca dan numerasi murid sekolah dasar.</p>
      <p>Kisah inspiratif ini dibagikan dalam Seri Berbagi Praktik Baik Pendidik yang diselenggarakan oleh Pokja Peningkatan Mutu BGTK Sumatera Selatan secara hybrid.</p>
    `,
    coverImageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80",
    captionImage: "Sesi presentasi praktik baik guru inovatif Sumatera Selatan",
    status: "PUBLISHED",
    viewCount: 1560,
    publishedAt: "2026-02-28T14:00:00Z",
    author: {
      id: "usr-2",
      name: "Tim Humas BGTK",
    },
    category: mockCategories[2],
    tags: ["Inovasi", "Literasi", "Praktik Baik", "Guru Inspiratif"],
  },
  {
    id: "post-4",
    title: "Bimtek Pemanfaatan Artificial Intelligence (AI) Etis dalam Pembelajaran Abad 21",
    slug: "bimtek-pemanfaatan-ai-etis-pembelajaran-abad-21",
    excerpt: "Ratusan guru jenjang SMA/SMK mengikuti bimbingan teknis integrasi kecerdasan buatan secara etis guna memperkaya materi pembelajaran interaktif.",
    contentHtml: `
      <p>Perkembangan teknologi generatif AI membuka peluang besar sekaligus tantangan etika dalam dunia pendidikan. BGTK Sumsel menginisiasi Bimtek bertajuk 'Pemanfaatan AI Etis untuk Desain Pembelajaran Kreatif' yang diikuti guru dari 17 kabupaten/kota.</p>
      <p>Peserta dibekali pemahaman prompt engineering untuk asesmen diagnostik, pembuatan lembar kerja berbasis minat murid, serta pencegahan plagiarisme akademik sejak dini.</p>
    `,
    coverImageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    captionImage: "Pelatihan praktikum AI untuk guru di laboratorium komputer BGTK",
    status: "PUBLISHED",
    viewCount: 2100,
    publishedAt: "2026-02-20T10:00:00Z",
    author: {
      id: "usr-2",
      name: "Tim Humas BGTK",
    },
    category: mockCategories[1],
    tags: ["Teknologi", "AI Pendidikan", "Bimtek", "Kurikulum Merdeka"],
  },
  {
    id: "post-5",
    title: "Apresiasi Guru dan Tenaga Kependidikan Inspiratif Tingkat Provinsi Sumatera Selatan 2026",
    slug: "apresiasi-gtk-inspiratif-sumsel-2026",
    excerpt: "Ajang tahunan penganugerahan dedikasi pendidik dan tenaga kependidikan berprestasi resmi dibuka pendaftarannya melalui kanal layanan terpadu.",
    contentHtml: `
      <p>BGTK Provinsi Sumatera Selatan kembali menggelar Apresiasi Guru dan Tenaga Kependidikan (GTK) Inspiratif 2026 sebagai wadah penghargaan atas keteladanan, dedikasi tinggi, dan inovasi yang berdampak nyata pada satuan pendidikan.</p>
      <p>Pendaftaran karya inovasi dibuka mulai 1 Maret hingga 30 April 2026 tanpa dipungut biaya apa pun.</p>
    `,
    coverImageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    captionImage: "Malam penganugerahan GTK Inspiratif Sumatera Selatan",
    status: "PUBLISHED",
    viewCount: 3420,
    publishedAt: "2026-02-15T09:00:00Z",
    author: {
      id: "usr-1",
      name: "Super Admin",
    },
    category: mockCategories[3],
    tags: ["Apresiasi GTK", "Pendidik Inspiratif", "Penghargaan", "Sumsel"],
  },
  {
    id: "post-6",
    title: "Sinergi BGTK Sumsel dan Dinas Pendidikan Kabupaten/Kota Percepat Aktivasi Komunitas Belajar",
    slug: "sinergi-bgtk-dan-disdik-aktivasi-kombel",
    excerpt: "Rapat koordinasi teknis bersama 17 Kepala Dinas Pendidikan se-Sumsel menyepakati akselerasi pemanfaatan Kombel ramah guru di setiap gugus sekolah.",
    contentHtml: `
      <p>Kolaborasi pentahelix antara BGTK Sumsel, pemerintah daerah, dan pengawas sekolah terus diperkuat. Melalui Rakor Teknis Peningkatan Mutu, disepakati target 100% aktivasi Komunitas Belajar dalam sekolah di seluruh wilayah Sumatera Selatan.</p>
    `,
    coverImageUrl: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
    captionImage: "Rapat koordinasi teknis bersama dinas pendidikan daerah",
    status: "PUBLISHED",
    viewCount: 780,
    publishedAt: "2026-02-08T11:20:00Z",
    author: {
      id: "usr-2",
      name: "Tim Humas BGTK",
    },
    category: mockCategories[4],
    tags: ["Kemitraan", "Kombel", "Dinas Pendidikan", "Koordinasi"],
  },
];
