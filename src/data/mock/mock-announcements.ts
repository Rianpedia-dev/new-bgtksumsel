import { Announcement } from "@/types";

export const mockAnnouncements: Announcement[] = [
  {
    id: "ann-1",
    title: "Surat Edaran Pelaksanaan Pemutakhiran Data Mandiri Pendidik dan Tenaga Kependidikan Tahun 2026",
    slug: "se-pemutakhiran-data-mandiri-ptk-2026",
    contentHtml: `
      <p>Yth. Kepala Dinas Pendidikan Kabupaten/Kota dan Seluruh Pendidik/Tenaga Kependidikan di Provinsi Sumatera Selatan.</p>
      <p>Diberitahukan bahwa proses pemutakhiran data mandiri kepegawaian dan keprofesian pendidik untuk semester genap tahun ajaran 2025/2026 wajib diselesaikan paling lambat tanggal 31 Maret 2026 melalui sistem informasi kepegawaian resmi.</p>
      <p>Lampiran surat resmi dan petunjuk teknis dapat diunduh pada tautan di bawah ini.</p>
    `,
    attachmentUrl: "/documents/SE_Pemutakhiran_Data_2026.pdf",
    attachmentName: "SE_BGTK_Pemutakhiran_Data_2026.pdf",
    fileSize: "1.4 MB",
    isPinned: true,
    status: "PUBLISHED",
    validUntil: "2026-03-31",
    createdAt: "2026-03-01T08:00:00Z",
  },
  {
    id: "ann-2",
    title: "Pengumuman Jadwal Pelaksanaan Wawancara Calon Pengajar Praktik Guru Penggerak Angkatan 13",
    slug: "jadwal-wawancara-calon-pengajar-praktik-angkatan-13",
    contentHtml: `
      <p>Berdasarkan hasil seleksi tahap 1 calon Pengajar Praktik (CPP) Program Pendidikan Guru Penggerak Angkatan 13 wilayah sasaran Sumatera Selatan, berikut kami sampaikan jadwal sesi wawancara daring.</p>
      <p>Peserta diharapkan hadir di ruang pertemuan virtual 15 menit sebelum jadwal masing-masing.</p>
    `,
    attachmentUrl: "/documents/Jadwal_Wawancara_CPP_Angkatan13.pdf",
    attachmentName: "Jadwal_Wawancara_CPP_Angkatan13.pdf",
    fileSize: "850 KB",
    isPinned: true,
    status: "PUBLISHED",
    validUntil: "2026-04-10",
    createdAt: "2026-02-25T10:30:00Z",
  },
  {
    id: "ann-3",
    title: "Penetapan Jam Kerja Layanan Loket Terpadu BGTK Sumsel Selama Bulan Suci Ramadhan 1447 H",
    slug: "jam-layanan-loket-ramadhan-1447h",
    contentHtml: `
      <p>Dalam rangka menyambut Bulan Suci Ramadhan 1447 H, jam operasional loket pelayanan langsung dan konsultasi tatap muka BGTK Provinsi Sumatera Selatan disesuaikan sebagai berikut:</p>
      <ul>
        <li>Senin - Kamis : Pukul 08.00 s.d. 15.00 WIB (Istirahat 12.00 - 12.30 WIB)</li>
        <li>Jumat : Pukul 08.00 s.d. 15.30 WIB (Istirahat 11.30 - 13.00 WIB)</li>
      </ul>
      <p>Layanan online pengaduan dan permohonan narasumber tetap beroperasi 24 jam melalui portal web resmi.</p>
    `,
    attachmentUrl: "/documents/Surat_Penyesuaian_Jam_Layanan.pdf",
    attachmentName: "Surat_Penyesuaian_Jam_Layanan.pdf",
    fileSize: "520 KB",
    isPinned: false,
    status: "PUBLISHED",
    validUntil: "2026-04-05",
    createdAt: "2026-02-18T07:45:00Z",
  },
  {
    id: "ann-4",
    title: "Pengumuman Pemenang Fasilitasi Bantuan Karya Inovasi Guru Tingkat SD/SMP 2026",
    slug: "pemenang-fasilitasi-bantuan-karya-inovasi-2026",
    contentHtml: `
      <p>Selamat kepada 30 satuan pendidikan dan guru penerima fasilitasi hibah karya inovasi pembelajaran BGTK Sumsel tahun 2026. Daftar lengkap nama penerima terlampir.</p>
    `,
    attachmentUrl: "/documents/SK_Penerima_Fasilitasi_Inovasi.pdf",
    attachmentName: "SK_Penerima_Fasilitasi_Inovasi.pdf",
    fileSize: "2.1 MB",
    isPinned: false,
    status: "PUBLISHED",
    validUntil: "2026-05-30",
    createdAt: "2026-02-10T11:00:00Z",
  },
];
