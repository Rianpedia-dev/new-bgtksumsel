# PRODUCT REQUIREMENT DOCUMENT (PRD) & SPESIFIKASI TEKNIK SISTEM
# SISTEM INFORMASI & PORTAL RESMI BGTK PROVINSI SUMATERA SELATAN

---

- **Nama Dokumen**: Product Requirement Document (PRD) & Technical Architecture Specification
- **Nama Proyek**: Portal Web Terpadu & Sistem Informasi Manajemen BGTK Sumatera Selatan
- **Instansi**: Balai Guru dan Tenaga Kependidikan (BGTK) Provinsi Sumatera Selatan
- **Versi Dokumen**: v2.0.0 (Enterprise Edition)
- **Status Dokumen**: Approved / Ready for Implementation
- **Arsitektur Dasar**: Fullstack Monorepo / Next.js 15+ App Router, TypeScript, Prisma ORM, shadcn/ui, Tailwind CSS

---

## DAFTAR ISI

1. [INFORMASI PROYEK & RINGKASAN EKSEKUTIF](#1-informasi-proyek--ringkasan-eksekutif)
2. [TARGET PENGGUNA & USER PERSONA](#2-target-pengguna--user-persona)
3. [TECH STACK & DEPENDENSI TERBARU (LATEST)](#3-tech-stack--dependensi-terbaru-latest)
4. [SPESIFIKASI FITUR DETAIL - WEBSITE PUBLIK (8 MENU UTAMA)](#4-spesifikasi-fitur-detail---website-publik-8-menu-utama)
5. [SPESIFIKASI FITUR DETAIL - ADMIN CMS (9 MODUL UTAMA)](#5-spesifikasi-fitur-detail---admin-cms-9-modul-utama)
6. [SKEMA DATABASE LENGKAP (PRISMA SCHEMA DEFINITION)](#6-skema-database-lengkap-prisma-schema-definition)
7. [STRUKTUR FOLDER & ARSITEKTUR PROJEK PROFESIONAL](#7-struktur-folder--arsitektur-projek-profesional)
8. [SPESIFIKASI SERVER ACTIONS, API & DATA FLOW](#8-spesifikasi-server-actions-api--data-flow)
9. [KEAMANAN, VALIDASI, LOGGING & ATURAN BISNIS](#9-keamanan-validasi-logging--aturan-bisnis)
10. [DESAIN SISTEM UI/UX & PANDUAN SHADCN/UI](#10-desain-sistem-uiux--panduan-shadcnui)
11. [ROADMAP IMPLEMENTASI & TAHAPAN DEVELOPMENT](#11-roadmap-implementasi--tahapan-development)
12. [DEVOPS, DEPLOYMENT, ENVIRONMENT & MAINTENANCE](#12-devops-deployment-environment--maintenance)

---

## 1. INFORMASI PROYEK & RINGKASAN EKSEKUTIF

### 1.1 Latar Belakang
Balai Guru dan Tenaga Kependidikan (BGTK) Provinsi Sumatera Selatan merupakan Unit Pelaksana Teknis (UPT) di bidang peningkatan mutu pendidik dan tenaga kependidikan. Untuk mewujudkan keterbukaan informasi publik, akuntabilitas kinerja instansi, serta memberikan layanan digital yang prima bagi para guru, tenaga kependidikan, dan pemangku kepentingan, diperlukan transformasi portal website resmi yang terintegrasi, aman, berkinerja tinggi, dan mudah dirawat.

### 1.2 Tujuan Sistem
1. **Transparansi & Akuntabilitas**: Mempublikasikan laporan kinerja (LAKIP), laporan keuangan, serta capaian Reformasi Birokrasi (RB) dan Zona Integritas (ZI Menuju WBK/WBBM) secara terstruktur.
2. **Kanal Layanan Terintegrasi**: Memfasilitasi 6 Standar Pelayanan Publik secara digital dengan mekanisme permohonan dan pelacakan status.
3. **Peningkatan Mutu Melalui Umpan Balik**: Menyediakan instrumen digital Survei Kepuasan Masyarakat (SKM) sesuai regulasi Permenpan RB No. 14 Tahun 2017 lengkap dengan analitik otomatis.
4. **Kanal Pengaduan Responsif**: Menyediakan sistem tiket pengaduan publik dan internal (Whistleblowing) dengan privasi terjamin, nomor tiket unik, dan pelacakan real-time.
5. **Modernitas & Kemudahan Perawatan**: Dibangun dengan standar rekayasa perangkat lunak modern (Next.js 15 App Router, TypeScript, Prisma ORM, shadcn/ui) untuk memastikan skalabilitas, keandalan SEO, performa Lighthouse 95+, dan arsitektur kode yang bersih.

---

## 2. TARGET PENGGUNA & USER PERSONA

| Persona | Peran & Kebutuhan Utama | Akses Sistem |
| :--- | :--- | :--- |
| **Guru & Pendidik (PTK)** | Mencari agenda pelatihan, pengumuman seleksi, standar layanan permohonan fasilitasi kompetensi, dan mengisi survei kepuasan. | Portal Publik (Tanpa Login) |
| **Masyarakat Umum / Publik** | Mengakses profil BGTK, berita terbaru, mengajukan pengaduan pelayanan, dan memantau transparansi anggaran. | Portal Publik (Tanpa Login) |
| **Pelapor Pengaduan** | Mengajukan laporan/aduan, mendapatkan nomor tiket pelacak, mengunggah bukti, dan memantau tindak lanjut. | Portal Publik + Token Pelacak |
| **Operator / Admin Konten** | Mengelola publikasi berita, agenda, pengumuman, foto kegiatan, dan dokumen publik. | Admin CMS (Role: `EDITOR`) |
| **Verifikator Layanan & Pengaduan** | Menindaklanjuti permohonan layanan, memverifikasi tiket pengaduan, memberikan balasan resmi. | Admin CMS (Role: `VERIFIER`) |
| **Super Admin** | Mengatur seluruh konten, master data, konfigurasi web, manajemen hak akses, dan audit trail sistem. | Admin CMS (Role: `SUPER_ADMIN`) |
| **Pimpinan / Auditor** | Meninjau laporan analitik SKM, rekapitulasi pengaduan masuk, dan log akuntabilitas. | Admin CMS (Role: `AUDITOR` / Read-Only) |

---

## 3. TECH STACK & DEPENDENSI TERBARU (LATEST)

Sistem dirancang menggunakan ekosistem TypeScript modern end-to-end yang menjamin type safety, keamanan tinggi, serta arsitektur yang mudah diuji dan dikembangkan.

### 3.1 Core Technologies
- **Bahasa Pemrograman**: **TypeScript 5.x** (Strict Mode diaktifkan, Zero `any` policy).
- **Frontend Framework**: **Next.js 15+** (App Router, React 19, Server Components, Streaming SSR, Parallel & Intercepting Routes, Server Actions).
- **Styling Engine**: **Tailwind CSS v4 / v3.4+** dengan CSS Variables untuk Dynamic Theming (Light/Dark mode opsional).
- **UI Component Library**: **shadcn/ui** (Komponen headless berbasis Radix UI Primitives, Lucide React Icons, CVA - Class Variance Authority, Tailwind Merge).
- **Database ORM**: **Prisma ORM 6.x** (Mendukung migrasi terstruktur, type-safe query client, connection pooling).
- **Database Engine**:
  - **PostgreSQL 16+** (Sangat direkomendasikan untuk produksi enterprise: performa tinggi, native JSONB, Full-Text Search).
  - **MySQL 8.0+** (Didukung penuh secara langsung oleh skema Prisma tanpa perubahan model bisnis).
- **Authentication & RBAC**: **Auth.js v5 (NextAuth.js v5)** / Session berbasis Secure HTTP-Only Cookies, JWT, dan password hashing menggunakan Argon2 / Bcrypt.
- **Form Management & Validasi**: **React Hook Form + Zod 3.x** (Single Source of Truth schema validasi untuk Client & Server).
- **Rich Text Editor**: **TipTap 2.x** (Modern WYSIWYG editor untuk CMS dengan upload gambar, tabel, dan formatting lengkap).
- **Manajemen Media & File**: Local File Storage (dengan validasi MIME type ketat) atau S3-Compatible Storage (MinIO on-premise / Cloudflare R2 / AWS S3).
- **Data Visualization**: **Recharts / shadcn Chart Components** (Visualisasi statistik IKM dan grafik pengaduan).
- **Export Engine**: **ExcelJS** (Laporan Excel/CSV) dan **@react-pdf/renderer** (Cetak Bukti Registrasi & Laporan Kinerja).

---

## 4. SPESIFIKASI FITUR DETAIL - WEBSITE PUBLIK (8 MENU UTAMA)

Portal publik didesain responsif, mobile-first, cepat, serta ramah mesin pencari (SEO & OpenGraph teroptimasi penuh).

```
========================================================================================
                                 STRUKTUR NAVIGASI PUBLIK
========================================================================================
[1. Beranda]
   ├── Hero Banner Slider
   ├── Layanan Unggulan (Akses Cepat)
   ├── Berita & Pengumuman Terkini
   ├── Kalender Agenda Mendatang
   ├── Counter Statistik & IKM
   └── Sambutan Kepala Balai

[2. Profil]
   ├── Profil BGTK (Sejarah, Landasan Hukum, Profil Wilayah Kerja)
   ├── Visi, Misi & Tujuan
   ├── Tugas dan Fungsi (Tupoksi berdasarkan Permendikbudristek)
   └── Struktur Organisasi (Bagan Hierarki Interaktif & Profil Pejabat)

[3. Berita & Informasi]
   ├── Berita (Artikel Berita, Liputan Kegiatan, Filter Kategori & Pencarian)
   ├── Pengumuman (Surat Edaran, Info Resmi, Unduhan Lampiran)
   └── Agenda Kegiatan (Kalender Jadwal Kegiatan, Workshop, Bimtek)

[4. Survei Kepuasan Masyarakat (SKM)]
   ├── Form Pengisian Survei (9 Unsur Pelayanan Permenpan RB No. 14/2017)
   └── Hasil Survei & Laporan Tindak Lanjut (Grafik Indeks IKM & Unduh Dokumen Laporan)

[5. Pengaduan]
   ├── Formulir Pengaduan (Internal / Whistleblowing & Eksternal / Pelayanan Publik)
   └── Pelacakan Status Pengaduan (Cek Progres Penanganan Berdasarkan Nomor Tiket)

[6. Standar Pelayanan]
   ├── Standar Pelayanan Pengaduan
   ├── Standar Pelayanan Sistem Informasi Kepegawaian
   ├── Standar Pelayanan Sarana dan Prasarana
   ├── Permohonan Narasumber (Formulir Online & Syarat)
   ├── Permohonan Informasi Publik (PPID BGTK)
   └── Fasilitasi Peningkatan Kompetensi Guru & Tenaga Kependidikan

[7. Akuntabilitas]
   ├── Perjanjian Kinerja (PK)
   ├── Laporan Kinerja (LAKIP / LKjIP)
   ├── Laporan Keuangan (DIPA, Neraca, CALK)
   └── Reformasi Birokrasi & Zona Integritas (WBK/WBBM)

[8. Kontak]
   ├── Alamat & Peta Interaktif (Google Maps)
   ├── Kanal Kontak Resmi (Telepon, Email, WhatsApp Pelayanan)
   └── Form Pesan Langsung / Aspirasi Masyarakat
========================================================================================
```

### 4.1 Menu 1: Beranda
- **Hero Banner Carousel**: Menampilkan sorotan berita penting, video profil, dan banner program prioritas BGTK Sumsel.
- **Layanan Unggulan (Quick Access)**: 6 kartu jalan pintas langsung ke permohonan narasumber, pengaduan, survei, informasi publik, dan agenda.
- **Berita & Pengumuman Terbaru**: Grid 3 artikel terkini dengan badge tanggal, kategori, dan thumbnail gambar WebP.
- **Widget Agenda Kegiatan**: Menampilkan jadwal kegiatan Bimtek/Workshop yang sedang dan akan berlangsung.
- **Counter Statistik Transparan**: Total guru terfasilitasi, total layanan terselesaikan, skor Indeks Kepuasan Masyarakat (IKM), dan jumlah kegiatan tahun berjalan.
- **Sambutan Kepala Balai**: Foto pimpinan, kutipan visi peningkatan kompetensi guru di Sumatera Selatan, dan tautan ke profil pimpinan.
- **Footer Komprehensif**: Peta lokasi ringkas, kontak resmi, tautan media sosial, hak cipta, dan link ke Kemendikbudristek.

### 4.2 Menu 2: Profil
- **Profil BGTK**: Latar belakang pendirian, sejarah organisasi, landasan hukum operasional, serta peran strategis di Sumatera Selatan.
- **Visi, Misi & Tujuan**: Disajikan dengan kartu visual modern dan infografis yang mudah dibaca.
- **Tugas dan Fungsi**: Rincian tupoksi resmi unit kerja BGTK sesuai regulasi kementerian yang berlaku.
- **Struktur Organisasi**: 
  - Bagan hierarki interaktif (Kepala Balai, Kasubbag Tata Usaha, Kelompok Kerja / Fungsional).
  - Modal/Card profil masing-masing pejabat struktural lengkap dengan nama, gelar, NIP, riwayat singkat, dan foto resmi.

### 4.3 Menu 3: Berita & Informasi
- **Berita**:
  - Filter kategori dinamis (misal: Kebijakan, Pelatihan Guru, Inovasi Pendidikan, Kunjungan Kerja).
  - Pencarian artikel real-time dengan debounce.
  - Halaman baca berita: Rich content TipTap, tanggal rilis, nama penulis/editor, estimasi waktu baca (read time), galeri foto pendukung, tombol share media sosial (WhatsApp, Facebook, X, Salin Tautan), serta artikel terkait.
- **Pengumuman**:
  - Tabel dan list pengumuman resmi dengan penanda status (Penting / Terbuka / Berakhir).
  - Dukungan lampiran dokumen (PDF/DOCX) dengan tombol pratinjau langsung dan unduhan.
- **Agenda Kegiatan**:
  - Tampilan Kalender (Calendar View) dan Tampilan Daftar (List View).
  - Filter berdasarkan bulan dan tahun kegiatan.
  - Detail agenda: Waktu pelaksanaan, tempat/lokasi (offline/online via Zoom), target peserta, kontak narahubung (PIC), dan status kegiatan (Mendatang, Berlangsung, Selesai).

### 4.4 Menu 4: Survei Kepuasan Masyarakat (SKM)
- **Formulir Pengisian Survei**:
  - Mengadopsi 9 unsur pelayanan Permenpan RB No. 14 Tahun 2017:
    1. Persyaratan Pelayanan
    2. Prosedur Pelayanan
    3. Waktu Pelayanan
    4. Biaya / Tarif (Penegasan Gratis/Rp 0)
    5. Produk Spesifikasi Jenis Pelayanan
    6. Kompetensi Pelaksana
    7. Perilaku Pelaksana
    8. Penanganan Pengaduan, Saran & Masukan
    9. Kualitas Sarana dan Prasarana
  - Data responden: Nama (opsional/anonim), jenis kelamin, kelompok usia, pendidikan terakhir, pekerjaan/kategori pemohon (Guru, Kepala Sekolah, Pengawas, Umum).
  - Skala Likert 4 tingkat (Sangat Buruk, Kurang Baik, Baik, Sangat Baik).
  - Sistem anti-spam (Honeypot field + Rate limiting IP).
- **Hasil Survei & Laporan Tindak Lanjut**:
  - Dashboard publik menampilkan nilai Konversi IKM (0 - 100) dan predikat mutu (Sangat Baik / Baik / dsb).
  - Visualisasi grafik tren nilai IKM per triwulan/semester.
  - Arsip dokumen Laporan Hasil SKM berkala yang dapat diunduh langsung dalam format PDF.

### 4.5 Menu 5: Pengaduan (Whistleblowing & Layanan)
- **Formulir Pengaduan**:
  - Pilihan Jenis: **Pengaduan Eksternal** (kualitas pelayanan publik, sarpras) atau **Pengaduan Internal** (Whistleblowing System / pelanggaran etik ASN).
  - Opsi Anonim / Rahasia (identitas pelapor dienkripsi dan hanya dapat diakses oleh Verifikator Utama).
  - Input: Nama Pelapor, Email/No. WhatsApp aktif (untuk notifikasi progres), Instansi/Asal Sekolah, Judul Laporan, Deskripsi Kronologi, Tempat & Tanggal Kejadian, Unit yang Dilaporkan.
  - Upload Bukti Pendukung: Multi-upload gambar (JPG/PNG) atau dokumen (PDF) maksimal 5 MB per berkas.
  - Output: Generate **Nomor Tiket Unik** otomatis (format: `BGTK-YYYYMMDD-XXXX`) dan tombol cetak bukti pengaduan.
- **Cek Status Pengaduan (Tracking Tiket)**:
  - Form pencarian cepat menggunakan Nomor Tiket dan Nomor WhatsApp pelapor.
  - Tampilan Stepper / Timeline Progres:
    1. Terkirim (Diterima sistem)
    2. Verifikasi Berkas (Sedang diteliti tim verifikator)
    3. Sedang Diproses (Koordinasi unit terkait)
    4. Tindak Lanjut Selesai (Diberikan tanggapan resmi dan solusi)
    5. Ditolak (Dengan alasan jelas jika bukan wewenang BGTK atau bukti tidak valid).
  - Riwayat tanggapan interaktif antara verifikator dan pelapor.

### 4.6 Menu 6: Standar Pelayanan
Halaman rincian standar pelayanan mencakup 6 layanan utama:
1. **Standar Pelayanan Pengaduan**
2. **Standar Pelayanan Sistem Informasi Kepegawaian**
3. **Standar Pelayanan Sarana dan Prasarana**
4. **Permohonan Narasumber**
5. **Permohonan Informasi Publik (PPID)**
6. **Fasilitasi Peningkatan Kompetensi Pendidik dan Tenaga Kependidikan**

Setiap sub-halaman layanan memuat komponen standar:
- **Informasi Regulasi & Dasar Hukum**
- **Persyaratan Administratif**
- **Alur & Prosedur (Bagan Visual & Stepper)**
- **Waktu Penyelesaian (SLA)**
- **Biaya / Tarif (Transparansi Rp 0 / Gratis)**
- **Produk Layanan yang Diterima Pemohon**
- **Formulir Terkait**: Tombol unduh formulir permohonan resmi (.DOCX/.PDF) atau tombol "Ajukan Permohonan Online" yang terhubung ke alur formulir digital.

### 4.7 Menu 7: Akuntabilitas
Pusat unduhan dan transparansi kinerja pemerintahan:
- **Perjanjian Kinerja (PK)**: Dokumen komitmen tahunan kepala balai dan jajaran.
- **Laporan Kinerja (LAKIP/LKjIP)**: Evaluasi capaian target tahunan institusi.
- **Laporan Keuangan**: Neraca, DIPA, Laporan Realisasi Anggaran (LRA), dan Catatan atas Laporan Keuangan (CALK).
- **Reformasi Birokrasi (RB) & Zona Integritas (ZI)**: Lembar kerja, inovasi pelayanan, dan piagam pencapaian WBK/WBBM.
- **Fitur Halaman**: Filter berdasarkan tahun anggaran (misal: 2024, 2025, 2026), pencarian judul dokumen, ukuran berkas, preview dokumen PDF inline di browser, serta tombol unduh dengan penghitung unduhan (download counter).

### 4.8 Menu 8: Kontak
- **Peta Lokasi Interaktif**: Integrasi peta Google Maps gedung kantor BGTK Sumsel lengkap dengan koordinat presisi.
- **Informasi Kontak Detail**: Alamat fisik lengkap, nomor telepon resmi, email kepegawaian/umum, jam kerja operasional loket layanan.
- **Formulir Hubungi Kami**: Pengunjung dapat mengirim pertanyaan umum atau aspirasi langsung yang masuk ke inbox dashboard admin.

---

## 5. SPESIFIKASI FITUR DETAIL - ADMIN CMS (9 MODUL UTAMA)

Dashboard Admin dirancang aman, intuitif, berkecepatan tinggi, dan dilindungi oleh otentikasi ketat serta Role-Based Access Control (RBAC).

```
========================================================================================
                              STRUKTUR DASHBOARD ADMIN CMS
========================================================================================
1. Dashboard
   ├── KPI Metric Cards (Pengunjung Hari Ini, Total Berita, Tiket Terbuka, Rata-rata IKM)
   ├── Grafik Tren Kunjungan & Tren Indeks Kepuasan
   ├── Antrean Tiket Pengaduan Butuh Tindak Lanjut
   └── Log Aktivitas Admin Terbaru

2. Manajemen Profil
   ├── Form Editor Profil Lembaga & Landasan Hukum
   ├── Editor Visi, Misi & Sasaran Strategis
   ├── Editor Tugas & Fungsi
   └── Manajemen Pejabat & Struktur Organisasi (CRUD Nama, Jabatan, Foto, Urutan)

3. Manajemen Berita & Informasi
   ├── Berita (CRUD, TipTap Rich Editor, Image Cover, Tag, Kategori, Status Draft/Publish)
   ├── Pengumuman (CRUD, Tanggal Berlaku, Lampiran File PDF)
   └── Agenda (CRUD, Tanggal Mulai & Selesai, Lokasi, Narasumber, Status Agenda)

4. Manajemen Survei Kepuasan Masyarakat (SKM)
   ├── Konfigurasi Periode Survei & Pertanyaan
   ├── Rekapitulasi Data Responden
   ├── Kalkulasi Otomatis Nilai IKM & Mutu Pelayanan (Sesuai Permenpan RB)
   └── Export Laporan SKM (Excel & PDF Resmi)

5. Manajemen Pengaduan
   ├── Daftar Tiket Masuk (Filter: Baru, Verifikasi, Diproses, Selesai, Ditolak)
   ├── Detail Tiket, Bukti Lampiran & Riwayat Kronologi
   ├── Penugasan Tim Verifikator & Pencatatan Solusi Internal
   └── Pengiriman Tanggapan Resmi ke Pelapor (Update Status Real-time)

6. Manajemen Standar Pelayanan
   ├── Pengaturan Konten 6 Standar Pelayanan (Persyaratan, Waktu, Prosedur)
   ├── Manajemen Dokumen SOP & Unduhan Template Formulir
   └── Rekapitulasi Permohonan Layanan Masuk (Jika menggunakan form online)

7. Manajemen Akuntabilitas
   ├── Manajemen Dokumen Kinerja (PK, LAKIP, Laporan Keuangan, ZI/WBK)
   ├── Kategori Tahun Anggaran & Versi Dokumen
   └── Statistik Jumlah Unduhan Dokumen

8. Manajemen Media dan Dokumen
   ├── File Explorer / Asset Manager (Upload Gambar, Banner, Dokumen PDF)
   ├── Automatic Image Optimizer (Konversi otomatis ke WebP/AVIF & Thumbnail)
   └── Salin URL CDN / Media Picker terintegrasi ke Editor

9. Manajemen Admin dan Pengaturan
   ├── Manajemen Pengguna (CRUD Akun, Assign Role: Super Admin, Editor, Verifikator, Auditor)
   ├── Profil Akun & Ganti Password Aman (Argon2 / Multi-Factor Auth)
   ├── Pengaturan Umum Situs (Nama Instansi, Logo, Favicon, Kontak, Link Medsos, SEO Meta)
   └── Audit Trail / Activity Log (Pencatatan IP, aksi CREATE, UPDATE, DELETE)
========================================================================================
```

---

## 6. SKEMA DATABASE LENGKAP (PRISMA SCHEMA DEFINITION)

Skema database berikut dirancang bersih, memiliki relasi konsisten, indeks performa untuk kolom pencarian/foreign key, serta mendukung **PostgreSQL** dan **MySQL** (cukup menyesuaikan `provider` di `datasource db`).

```prisma
// ============================================================================
// PRISMA SCHEMA: BGTK SUMATERA SELATAN
// File: prisma/schema.prisma
// Supported DB: PostgreSQL (Recommended) / MySQL
// ============================================================================

generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["fullTextSearchPostgres"]
}

datasource db {
  provider = "postgresql" // Ganti menjadi "mysql" jika menggunakan MySQL Server
  url      = env("DATABASE_URL")
}

// ----------------------------------------------------------------------------
// ENUMS
// ----------------------------------------------------------------------------

enum UserRole {
  SUPER_ADMIN
  EDITOR
  VERIFIER
  AUDITOR
}

enum PublishStatus {
  DRAFT
  PUBLISHED
  ARCHIVED
}

enum ComplaintType {
  EXTERNAL_SERVICE    // Pengaduan Terkait Pelayanan Publik & Sarpras
  INTERNAL_WHISTLEBLOW // Whistleblowing System (Pelanggaran Kode Etik / Disiplin ASN)
}

enum ComplaintStatus {
  SUBMITTED           // Baru masuk
  VERIFIED            // Terverifikasi valid
  IN_PROGRESS         // Sedang diproses / tindak lanjut unit terkait
  RESOLVED            // Selesai ditindaklanjuti
  REJECTED            // Ditolak (tidak relevan / bukti kurang)
}

enum EventStatus {
  UPCOMING
  ONGOING
  COMPLETED
  CANCELLED
}

enum AccountabilityCategory {
  PERJANJIAN_KINERJA
  LAPORAN_KINERJA_LAKIP
  LAPORAN_KEUANGAN
  ZONA_INTEGRITAS_RB
}

enum ServiceType {
  PENGADUAN
  SIM_KEPEGAWAIAN
  SARPRAS
  PERMOHONAN_NARASUMBER
  INFORMASI_PUBLIK
  FASILITASI_KOMPETENSI_PTK
}

// ----------------------------------------------------------------------------
// 1. MANAJEMEN AUTENTIKASI, PENGGUNA & AUDIT LOG
// ----------------------------------------------------------------------------

model User {
  id            String      @id @default(uuid())
  name          String
  email         String      @unique
  passwordHash  String
  avatarUrl     String?
  role          UserRole    @default(EDITOR)
  isActive      Boolean     @default(true)
  lastLoginAt   DateTime?
  createdAt     DateTime    @default(now())
  updatedAt     DateTime    @updatedAt

  // Relasi
  posts         Post[]
  announcements Announcement[]
  events        Event[]
  auditLogs     AuditLog[]
  complaintLogs ComplaintLog[]

  @@index([email])
  @@index([role])
}

model AuditLog {
  id          String   @id @default(uuid())
  userId      String?
  user        User?    @relation(fields: [userId], references: [id], onDelete: SetNull)
  action      String   // CREATE, UPDATE, DELETE, LOGIN, EXPORT
  entity      String   // POST, COMPLAINT, SURVEY, etc.
  entityId    String?
  details     Json?    // Menyimpan snapshot perubahan (old vs new values)
  ipAddress   String?
  userAgent   String?
  createdAt   DateTime @default(now())

  @@index([userId])
  @@index([entity, entityId])
  @@index([createdAt])
}

model SystemSetting {
  id          String   @id @default(uuid())
  key         String   @unique
  value       String   @db.Text
  description String?
  updatedAt   DateTime @updatedAt
}

// ----------------------------------------------------------------------------
// 2. MANAJEMEN PROFIL & STRUKTUR ORGANISASI
// ----------------------------------------------------------------------------

model ProfileContent {
  id              String   @id @default(uuid())
  slug            String   @unique // 'sejarah', 'visi-misi', 'tugas-fungsi'
  title           String
  contentHtml     String   @db.Text
  featuredImage   String?
  updatedAt       DateTime @updatedAt
}

model OrganizationMember {
  id          String   @id @default(uuid())
  name        String
  nip         String?
  position    String   // Jabatan (misal: Kepala Balai, Kasubbag Tata Usaha)
  division    String?  // Bagian / Pokja
  hierarchyLevel Int   @default(1) // 1: Pimpinan Tertinggi, 2: Eselon IV/Subbag, 3: Pokja
  sortOrder   Int      @default(0)
  imageUrl    String?
  bio         String?  @db.Text
  isActive    Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@index([hierarchyLevel, sortOrder])
}

// ----------------------------------------------------------------------------
// 3. BERITA, PENGUMUMAN & AGENDA
// ----------------------------------------------------------------------------

model Category {
  id          String   @id @default(uuid())
  name        String   @unique
  slug        String   @unique
  description String?
  posts       Post[]
  createdAt   DateTime @default(now())
}

model Tag {
  id        String    @id @default(uuid())
  name      String    @unique
  slug      String    @unique
  posts     PostTag[]
  createdAt DateTime  @default(now())
}

model Post {
  id            String        @id @default(uuid())
  title         String
  slug          String        @unique
  excerpt       String?       @db.Text
  contentHtml   String        @db.Text
  coverImageUrl String?
  captionImage  String?
  status        PublishStatus @default(DRAFT)
  viewCount     Int           @default(0)
  publishedAt   DateTime?
  
  authorId      String
  author        User          @relation(fields: [authorId], references: [id], onDelete: Restrict)

  categoryId    String
  category      Category      @relation(fields: [categoryId], references: [id], onDelete: Restrict)

  tags          PostTag[]
  createdAt     DateTime      @default(now())
  updatedAt     DateTime      @updatedAt

  @@index([slug])
  @@index([status, publishedAt])
  @@index([categoryId])
}

model PostTag {
  postId String
  tagId  String
  post   Post @relation(fields: [postId], references: [id], onDelete: Cascade)
  tag    Tag  @relation(fields: [tagId], references: [id], onDelete: Cascade)

  @@id([postId, tagId])
  @@index([tagId])
}

model Announcement {
  id            String        @id @default(uuid())
  title         String
  slug          String        @unique
  contentHtml   String        @db.Text
  attachmentUrl String?       // File PDF Dokumen Surat Edaran
  attachmentName String?
  isPinned      Boolean       @default(false)
  status        PublishStatus @default(PUBLISHED)
  validUntil    DateTime?
  
  authorId      String
  author        User          @relation(fields: [authorId], references: [id], onDelete: Restrict)

  createdAt     DateTime      @default(now())
  updatedAt     DateTime      @updatedAt

  @@index([status, isPinned])
  @@index([slug])
}

model Event {
  id            String      @id @default(uuid())
  title         String
  slug          String      @unique
  description   String      @db.Text
  coverImageUrl String?
  location      String      // Alamat Fisik atau URL Virtual Meeting (Zoom)
  isOnline      Boolean     @default(false)
  startDate     DateTime
  endDate       DateTime
  organizer     String      @default("BGTK Sumatera Selatan")
  speaker       String?     // Narasumber
  registrationUrl String?   // Tautan pendaftaran jika ada
  status        EventStatus @default(UPCOMING)

  authorId      String
  author        User        @relation(fields: [authorId], references: [id], onDelete: Restrict)

  createdAt     DateTime    @default(now())
  updatedAt     DateTime    @updatedAt

  @@index([status, startDate])
  @@index([slug])
}

// ----------------------------------------------------------------------------
// 4. SURVEI KEPUASAN MASYARAKAT (SKM - PERMENPAN RB NO. 14/2017)
// ----------------------------------------------------------------------------

model SurveyPeriod {
  id          String           @id @default(uuid())
  title       String           // misal: "Survei Kepuasan Semester 1 Tahun 2026"
  year        Int
  semester    Int              @default(1) // 1 atau 2
  isActive    Boolean          @default(true)
  startDate   DateTime
  endDate     DateTime
  responses   SurveyResponse[]
  createdAt   DateTime         @default(now())
  updatedAt   DateTime         @updatedAt

  @@index([year, semester])
}

model SurveyQuestion {
  id            String         @id @default(uuid())
  code          String         @unique // U1 s/d U9 (Unsur 1 s.d. 9)
  title         String         // Label unsur (misal: "Kesesuaian Persyaratan Pelayanan")
  questionText  String         @db.Text
  weight        Float          @default(1.0)
  sortOrder     Int            @default(1)
  answers       SurveyAnswer[]
}

model SurveyResponse {
  id             String         @id @default(uuid())
  periodId       String
  period         SurveyPeriod   @relation(fields: [periodId], references: [id], onDelete: Cascade)
  
  // Data Demografi Responden
  respondentName String?        // Boleh anonim
  gender         String         // L / P
  ageGroup       String         // <25, 26-35, 36-45, 46-55, >55
  education      String         // SMA, D3, S1, S2, S3
  occupation     String         // Guru, Kepala Sekolah, Pengawas, Tenaga Kependidikan, Umum
  serviceReceived ServiceType   // Layanan yang diterima
  
  suggestions    String?        @db.Text // Kritik & Saran
  ipHash         String?        // Enkripsi IP untuk mencegah spam berulang
  createdAt      DateTime       @default(now())

  answers        SurveyAnswer[]

  @@index([periodId])
  @@index([createdAt])
}

model SurveyAnswer {
  id          String         @id @default(uuid())
  responseId  String
  response    SurveyResponse @relation(fields: [responseId], references: [id], onDelete: Cascade)
  
  questionId  String
  question    SurveyQuestion @relation(fields: [questionId], references: [id], onDelete: Cascade)

  score       Int            // Nilai 1 s/d 4 (Skala Likert)

  @@index([responseId])
  @@index([questionId])
}

model SurveyReportFile {
  id          String   @id @default(uuid())
  title       String
  year        Int
  semester    Int
  ikmScore    Float    // Nilai IKM (0 - 100)
  grade       String   // A (Sangat Baik), B (Baik), C (Kurang Baik), D (Buruk)
  fileUrl     String   // File PDF Laporan Resmi
  fileSize    Int
  createdAt   DateTime @default(now())

  @@index([year, semester])
}

// ----------------------------------------------------------------------------
// 5. SISTEM PENGADUAN (WHISTLEBLOWING & LAYANAN PUBLIK)
// ----------------------------------------------------------------------------

model Complaint {
  id              String              @id @default(uuid())
  ticketNumber    String              @unique // Format: BGTK-YYYYMMDD-XXXX
  type            ComplaintType       @default(EXTERNAL_SERVICE)
  isAnonymous     Boolean             @default(false)
  
  // Identitas Pelapor (Terenkripsi jika anonim)
  reporterName    String
  reporterEmail   String
  reporterPhone   String              // Digunakan untuk verifikasi cek tiket
  reporterAgency  String?             // Sekolah / Instansi asal
  
  // Konten Aduan
  title           String
  description     String              @db.Text
  incidentDate    DateTime?
  incidentLocation String?
  reportedEntity  String?             // Oknum / Unit yang diadukan
  
  status          ComplaintStatus     @default(SUBMITTED)
  adminNotes      String?             @db.Text // Catatan rahasia verifikator
  officialReply   String?             @db.Text // Tanggapan resmi yang ditampilkan ke pelapor

  attachments     ComplaintAttachment[]
  logs            ComplaintLog[]

  createdAt       DateTime            @default(now())
  updatedAt       DateTime            @updatedAt

  @@index([ticketNumber])
  @@index([status])
  @@index([type])
  @@index([createdAt])
}

model ComplaintAttachment {
  id          String    @id @default(uuid())
  complaintId String
  complaint   Complaint @relation(fields: [complaintId], references: [id], onDelete: Cascade)
  fileUrl     String
  fileName    String
  fileSize    Int
  mimeType    String
  createdAt   DateTime  @default(now())

  @@index([complaintId])
}

model ComplaintLog {
  id          String          @id @default(uuid())
  complaintId String
  complaint   Complaint       @relation(fields: [complaintId], references: [id], onDelete: Cascade)
  status      ComplaintStatus
  comment     String?         @db.Text
  changedById String?
  changedBy   User?           @relation(fields: [changedById], references: [id], onDelete: SetNull)
  createdAt   DateTime        @default(now())

  @@index([complaintId])
}

// ----------------------------------------------------------------------------
// 6. STANDAR PELAYANAN & PERMOHONAN LAYANAN
// ----------------------------------------------------------------------------

model ServiceStandardItem {
  id              String      @id @default(uuid())
  type            ServiceType @unique
  title           String
  legalBasis      String      @db.Text // Dasar Hukum
  requirements    String      @db.Text // Persyaratan
  procedureHtml   String      @db.Text // Prosedur / Alur
  completionTime  String      // Jangka Waktu Penyelesaian (e.g., "3 Hari Kerja")
  fee             String      @default("Gratis / Rp 0")
  productOutput   String      // Produk Pelayanan
  complaintHandling String    @db.Text // Penanganan Pengaduan
  formTemplateUrl String?     // File unduhan form persyaratan (.docx/.pdf)
  isActive        Boolean     @default(true)
  updatedAt       DateTime    @updatedAt
}

// ----------------------------------------------------------------------------
// 7. AKUNTABILITAS (LAKIP, PK, KEUANGAN, ZI/WBK)
// ----------------------------------------------------------------------------

model AccountabilityDocument {
  id            String                 @id @default(uuid())
  title         String
  category      AccountabilityCategory
  year          Int
  description   String?                @db.Text
  fileUrl       String
  fileName      String
  fileSize      Int                    // Bytes
  downloadCount Int                    @default(0)
  createdAt     DateTime               @default(now())
  updatedAt     DateTime               @updatedAt

  @@index([category, year])
}

// ----------------------------------------------------------------------------
// 8. KONTAK, PESAN & MEDIA ASSETS
// ----------------------------------------------------------------------------

model ContactMessage {
  id          String   @id @default(uuid())
  senderName  String
  senderEmail String
  senderPhone String?
  subject     String
  message     String   @db.Text
  isRead      Boolean  @default(false)
  ipAddress   String?
  createdAt   DateTime @default(now())

  @@index([isRead, createdAt])
}

model MediaAsset {
  id          String   @id @default(uuid())
  fileName    String
  originalName String
  mimeType    String
  fileSize    Int
  url         String
  altText     String?
  folder      String   @default("uploads")
  createdAt   DateTime @default(now())

  @@index([folder])
}
```

---

## 7. STRUKTUR FOLDER & ARSITEKTUR PROJEK PROFESIONAL

Struktur folder mengadopsi standar **Enterprise Modular Clean Architecture** pada Next.js 15 App Router. Setiap fitur dikelompokkan dengan jelas sehingga mudah dirawat, mudah diperluas, dan memisahkan urusan UI, Server Actions, Database Service, serta Tipe Data.

```
new-bgtk/
├── .env.example                          # Template konfigurasi environment variable
├── .gitignore                            # Berkas yang diabaikan git
├── components.json                       # Konfigurasi instalasi shadcn/ui
├── next.config.ts                        # Konfigurasi Next.js (optimasi gambar, headers)
├── package.json                          # Metadata dependensi & scripts
├── postcss.config.mjs                    # Konfigurasi PostCSS Tailwind
├── tailwind.config.ts                    # Konfigurasi Theme, Colors, Animations Tailwind
├── tsconfig.json                         # Konfigurasi ketat TypeScript (Path Aliases @/*)
│
├── prisma/                               # DIRECTORY ORM PRISMA
│   ├── schema.prisma                     # Definisi skema database & relasi lengkap
│   ├── seed.ts                           # Script inisialisasi Super Admin & master data
│   └── migrations/                       # Riwayat migrasi DDL database
│
├── public/                               # STATIC ASSETS
│   ├── favicon.ico
│   ├── fonts/                            # Custom fonts (Plus Jakarta Sans / Inter)
│   ├── icons/                            # Logo resmi BGTK, Tut Wuri Handayani
│   └── images/                           # Placeholder & ilustrasi UI default
│
└── src/                                  # SOURCE CODE UTAMA
    │
    ├── app/                              # NEXT.JS 15 APP ROUTER
    │   ├── layout.tsx                    # Root Layout (Font provider, Toaster, Meta)
    │   ├── globals.css                   # Global CSS & Tailwind design tokens
    │   ├── not-found.tsx                 # Halaman kustom 404
    │   ├── error.tsx                     # Global error boundary
    │   │
    │   ├── (public)/                     # ROUTE GROUP: PORTAL PUBLIK (No Auth)
    │   │   ├── layout.tsx                # Layout Publik: Navbar Header & Footer
    │   │   ├── page.tsx                  # 1. Beranda (Home Page)
    │   │   │
    │   │   ├── profil/                   # 2. Profil
    │   │   │   ├── page.tsx              # Profil Umum & Sejarah
    │   │   │   ├── visi-misi/page.tsx    # Visi, Misi & Tujuan
    │   │   │   ├── tugas-fungsi/page.tsx # Tugas & Fungsi BGTK
    │   │   │   └── struktur/page.tsx     # Struktur Organisasi Interaktif
    │   │   │
    │   │   ├── informasi/                # 3. Berita & Informasi
    │   │   │   ├── berita/
    │   │   │   │   ├── page.tsx          # List Berita + Search + Kategori
    │   │   │   │   └── [slug]/page.tsx   # Detail Berita
    │   │   │   ├── pengumuman/
    │   │   │   │   ├── page.tsx          # List Pengumuman
    │   │   │   │   └── [slug]/page.tsx   # Detail Pengumuman
    │   │   │   └── agenda/
    │   │   │       └── page.tsx          # Kalender & Daftar Agenda Kegiatan
    │   │   │
    │   │   ├── survei-kepuasan/          # 4. Survei Kepuasan Masyarakat (SKM)
    │   │   │   ├── page.tsx              # Form Survei 9 Unsur Pelayanan
    │   │   │   └── hasil/page.tsx        # Dashboard Nilai IKM & Laporan
    │   │   │
    │   │   ├── pengaduan/                # 5. Pengaduan
    │   │   │   ├── page.tsx              # Formulir Pengaduan (Internal & Eksternal)
    │   │   │   ├── sukses/page.tsx       # Konfirmasi Tiket & Tombol Cetak
    │   │   │   └── lacak/page.tsx        # Cek Progres Status Tiket Pengaduan
    │   │   │
    │   │   ├── standar-pelayanan/        # 6. Standar Pelayanan
    │   │   │   ├── page.tsx              # Ringkasan 6 Standar Pelayanan
    │   │   │   └── [serviceSlug]/page.tsx # Rincian Standar Layanan Spesifik
    │   │   │
    │   │   ├── akuntabilitas/            # 7. Akuntabilitas
    │   │   │   ├── page.tsx              # Pusat Arsip Transparansi
    │   │   │   ├── perjanjian-kinerja/page.tsx
    │   │   │   ├── laporan-kinerja/page.tsx
    │   │   │   ├── laporan-keuangan/page.tsx
    │   │   │   └── zona-integritas/page.tsx
    │   │   │
    │   │   └── kontak/                   # 8. Kontak
    │   │       └── page.tsx              # Peta, Informasi Kontak & Form Pesan
    │   │
    │   ├── admin/                        # ROUTE GROUP: ADMIN CMS (Auth Protected)
    │   │   ├── layout.tsx                # Admin CMS Shell: Sidebar, Topbar, Auth Guard
    │   │   ├── login/page.tsx            # Halaman Login Admin
    │   │   ├── dashboard/page.tsx        # 1. Modul Dashboard KPI & Analitik
    │   │   ├── profil/page.tsx           # 2. Modul Manajemen Profil & Pejabat
    │   │   ├── posts/                    # 3. Modul Manajemen Berita, Info & Agenda
    │   │   │   ├── page.tsx              # Data Table Berita
    │   │   │   ├── create/page.tsx       # Editor Tambah Berita (TipTap)
    │   │   │   ├── [id]/edit/page.tsx    # Editor Edit Berita
    │   │   │   ├── pengumuman/page.tsx   # CRUD Pengumuman
    │   │   │   └── agenda/page.tsx       # CRUD Agenda Kegiatan
    │   │   ├── survei/page.tsx           # 4. Modul Rekapitulasi SKM & Export
    │   │   ├── pengaduan/                # 5. Modul Tiket Pengaduan
    │   │   │   ├── page.tsx              # Antrean Tiket Masuk
    │   │   │   └── [id]/page.tsx         # Detail Tiket, Tanggapan & SLA
    │   │   ├── standar-layanan/page.tsx  # 6. Modul Standar Pelayanan & SOP
    │   │   ├── akuntabilitas/page.tsx    # 7. Modul Upload Dokumen LAKIP/Keuangan
    │   │   ├── media/page.tsx            # 8. Modul File Explorer & Asset Manager
    │   │   └── pengaturan/               # 9. Modul Admin & Konfigurasi
    │   │       ├── users/page.tsx        # Manajemen Pengguna & Hak Akses
    │   │       ├── audit-logs/page.tsx   # Log Aktivitas & Jejak Digital
    │   │       └── website/page.tsx      # Konfigurasi Profil Instansi & SEO
    │   │
    │   └── api/                          # ROUTE HANDLERS (Binary & Webhook)
    │       ├── auth/[...nextauth]/route.ts # NextAuth Route Handler
    │       ├── export/
    │       │   ├── survey-excel/route.ts # Endpoint streaming export Excel SKM
    │       │   └── complaint-pdf/route.ts # Endpoint cetak tanda terima PDF
    │       └── upload/route.ts           # Upload media endpoint (MIME & size check)
    │
    ├── actions/                          # NEXT.JS SERVER ACTIONS (Mutations)
    │   ├── auth.actions.ts               # Login, Logout, Change Password
    │   ├── post.actions.ts               # Create, Update, Delete Berita
    │   ├── event.actions.ts              # CRUD Agenda
    │   ├── announcement.actions.ts       # CRUD Pengumuman
    │   ├── survey.actions.ts             # Submit Jawaban SKM, Hitung IKM
    │   ├── complaint.actions.ts          # Submit Aduan, Update Status, Tambah Respon
    │   ├── service.actions.ts            # Update SOP Standar Pelayanan
    │   ├── accountability.actions.ts     # Upload & Hapus Dokumen Kinerja
    │   ├── user.actions.ts               # CRUD Pengguna & Role Management
    │   └── setting.actions.ts            # Simpan Konfigurasi Situs
    │
    ├── components/                       # REUSABLE UI COMPONENTS
    │   ├── ui/                           # SHADCN/UI PRIMITIVES (DO NOT EDIT MANUALLY)
    │   │   ├── button.tsx
    │   │   ├── input.tsx
    │   │   ├── textarea.tsx
    │   │   ├── card.tsx
    │   │   ├── dialog.tsx
    │   │   ├── dropdown-menu.tsx
    │   │   ├── table.tsx
    │   │   ├── badge.tsx
    │   │   ├── tabs.tsx
    │   │   ├── select.tsx
    │   │   ├── calendar.tsx
    │   │   ├── toast.tsx
    │   │   └── chart.tsx
    │   │
    │   ├── layout/                       # LAYOUT SHELL COMPONENTS
    │   │   ├── public-navbar.tsx         # Navbar Publik 8 Menu + Mega Menu
    │   │   ├── public-footer.tsx         # Footer Resmi BGTK
    │   │   ├── mobile-nav.tsx            # Navigasi Mobile Drawer
    │   │   ├── admin-sidebar.tsx         # Sidebar CMS dengan Role Filtering
    │   │   ├── admin-topbar.tsx          # Topbar CMS (Profil, Notif, Logout)
    │   │   └── breadcrumbs.tsx           # Navigasi rekam jejak
    │   │
    │   ├── modules/                      # FEATURE-SPECIFIC COMPONENTS
    │   │   ├── home/                     # HeroSlider, QuickAccess, StatsCounter
    │   │   ├── posts/                    # PostCard, PostFilter, TipTapEditor
    │   │   ├── survey/                   # SurveyStepper, StarRating, IkmChart
    │   │   ├── complaint/                # ComplaintForm, TicketTrackerTimeline
    │   │   ├── accountability/           # DocumentTable, PdfPreviewModal
    │   │   └── media/                    # MediaGrid, FileUploaderDropzone
    │   │
    │   └── common/                       # SHARED UTILITY COMPONENTS
    │       ├── data-table.tsx            # TanStack Table dengan Pagination & Sort
    │       ├── confirmation-modal.tsx    # Modal konfirmasi aksi destruktif
    │       ├── search-input.tsx          # Search bar dengan debounce 300ms
    │       └── empty-state.tsx           # Tampilan data kosong elegan
    │
    ├── lib/                              # CORE LIBRARIES & CLIENT INSTANCES
    │   ├── prisma.ts                     # Prisma Client Singleton Instance
    │   ├── auth.ts                       # Konfigurasi NextAuth v5 & Session
    │   ├── storage.ts                    # Abstraksi Upload (Local Disk / S3)
    │   ├── utils.ts                      # cn() helper & formatter fungsi umum
    │   └── constants.ts                  # Menu item konstan, daftar opsi, limit
    │
    ├── services/                         # BUSINESS LOGIC & DATABASE QUERIES
    │   ├── post.service.ts
    │   ├── survey.service.ts             # Logika kalkulasi matematis IKM
    │   ├── complaint.service.ts          # Penomoran tiket unik & enkripsi
    │   ├── document.service.ts
    │   └── audit.service.ts              # Logger otomatis perubahan data
    │
    ├── schemas/                          # ZOD VALIDATION SCHEMAS
    │   ├── auth.schema.ts
    │   ├── post.schema.ts
    │   ├── survey.schema.ts
    │   ├── complaint.schema.ts
    │   └── document.schema.ts
    │
    ├── hooks/                            # CUSTOM REACT HOOKS
    │   ├── use-debounce.ts
    │   ├── use-media-query.ts
    │   └── use-table-filters.ts
    │
    └── types/                            # TYPESCRIPT INTERFACES & DTOs
        ├── index.ts
        ├── auth.types.ts
        ├── survey.types.ts
        └── complaint.types.ts
```

---

## 8. SPESIFIKASI SERVER ACTIONS, API & DATA FLOW

Sistem memanfaatkan pola arsitektur modern Next.js 15:
1. **Server Components (RSC)**: Membaca data langsung dari database melalui Service Layer tanpa overhead HTTP roundtrip, mendukung streaming SSR dengan Suspense skeleton.
2. **Server Actions (`"use server"`)**: Menangani seluruh mutasi data (CREATE, UPDATE, DELETE) dengan verifikasi sesi dan validasi skema Zod ganda.
3. **Route Handlers**: Digunakan secara khusus untuk streaming binary (Download Excel, Streaming PDF, dan integrasi webhook).

### 8.1 Alur Pengisian & Penghitungan Survei Kepuasan (SKM)

```mermaid
sequenceDiagram
    autonumber
    actor Responden as Pengguna / Responden
    participant Client as Frontend Form (RSC & Hook Form)
    participant Action as survey.actions.ts (Server Action)
    participant Service as survey.service.ts
    participant DB as Database (Prisma)

    Responden->>Client: Mengisi 9 Unsur Pertanyaan & Demografi
    Client->>Client: Validasi Zod di Sisi Klien
    Client->>Action: submitSurveyResponse(payload)
    Action->>Action: Validasi Anti-Spam (Honeypot & Rate Limit)
    Action->>Action: Validasi Zod di Sisi Server
    Action->>Service: calculateAndSave(payload)
    Service->>DB: Prisma Transaction (Create SurveyResponse & 9 SurveyAnswers)
    DB-->>Service: Sukses Disimpan
    Service-->>Action: Response Berhasil
    Action-->>Client: RevalidatePath('/survei-kepuasan/hasil')
    Client-->>Responden: Tampilkan Ucapan Terima Kasih & Skor IKM
```

### 8.2 Rumus Perhitungan Indeks Kepuasan Masyarakat (IKM)
Sesuai Permenpan RB No. 14 Tahun 2017:
- **Bobot per Unsur**: 1 / 9 = 0.111
- **Nilai Rata-rata Tertimbang (NRR Tertimbang)**: $\sum (\text{NRR Tiap Unsur} \times 0.111)$
- **Nilai Konversi IKM**: $\text{NRR Tertimbang} \times 25$
- **Tabel Mutu Pelayanan**:
  - $88.31 - 100.00$ : **A (Sangat Baik)**
  - $76.61 - 88.30$  : **B (Baik)**
  - $65.00 - 76.60$  : **C (Kurang Baik)**
  - $25.00 - 64.99$  : **D (Buruk)**

### 8.3 Alur Pengaduan & Pelacakan Tiket

```mermaid
sequenceDiagram
    autonumber
    actor Pelapor as Masyarakat / ASN
    participant Portal as Form Pengaduan Publik
    participant Action as complaint.actions.ts
    participant DB as Database
    actor Verifikator as Tim Verifikator (CMS)

    Pelapor->>Portal: Input Aduan + Upload Bukti
    Portal->>Action: submitComplaint(data, files)
    Action->>Action: Generate No. Tiket Unik (BGTK-YYYYMMDD-XXXX)
    Action->>DB: Simpan Data Aduan (Status: SUBMITTED)
    Action-->>Pelapor: Nomor Tiket & Tautan Lacak
    
    Verifikator->>DB: Membuka Antrean Tiket di CMS
    Verifikator->>Action: updateComplaintStatus(ticketId, VERIFIED/IN_PROGRESS)
    Action->>DB: Update Status & Simpan ComplaintLog
    
    Pelapor->>Portal: Cek Progres di /pengaduan/lacak
    Portal->>DB: Fetch Timeline Tiket
    DB-->>Portal: Menampilkan Stepper Progres Real-Time
```

---

## 9. KEAMANAN, VALIDASI, LOGGING & ATURAN BISNIS

### 9.1 Protokol Keamanan Tingkat Tinggi
1. **Otentikasi & Sesi**:
   - NextAuth v5 berbasis Session Cookies dengan flag `HttpOnly`, `SameSite=Lax`, dan `Secure` (pada HTTPS).
   - Password di-hash menggunakan algoritma **Argon2id** (atau Bcrypt dengan minimum salt round 12).
2. **Proteksi Injeksi & Serangan Web**:
   - Query parameterized otomatis oleh Prisma ORM (mencegah SQL Injection).
   - Sanitasi HTML pada konten TipTap menggunakan library **DOMPurify** / **sanitize-html** untuk mencegah Cross-Site Scripting (XSS).
   - Proteksi Cross-Site Request Forgery (CSRF) bawaan Next.js Server Actions.
3. **Validasi File Upload**:
   - Verifikasi ganda: Pengecekan ekstensi file dan **Magic Bytes (MIME Type)** sebenarnya di server.
   - Pembatasan ukuran berkas: Maksimal 2 MB untuk foto (JPG, PNG, WebP) dan maksimal 10 MB untuk dokumen (PDF).
   - Pengacakan nama berkas menggunakan UUIDv4 untuk mencegah penimpaan file (directory traversal attack).
4. **Rate Limiting**:
   - Pembatasan request submission pada formulir publik (Pengaduan, Survei, Kontak) maksimal 5 request per 10 menit per IP Address.

### 9.2 Aturan Bisnis Penting
- **Pemberian Tiket Pengaduan**: Nomor tiket bersifat acak terstruktur dan tidak dapat ditebak secara berurutan (*non-sequential ID enumeration*).
- **Kerahasiaan Pengaduan Internal**: Pengaduan dengan tipe `INTERNAL_WHISTLEBLOW` hanya dapat dibuka oleh role `SUPER_ADMIN` dan tidak dapat diakses oleh editor biasa.
- **Kategori Standar Pelayanan**: Biaya seluruh standar pelayanan wajib tercantum "Rp 0 / Gratis" tanpa ada pungutan liar dalam bentuk apa pun.
- **Audit Logging Otomatis**: Setiap aksi perubahan data penting (create, update, delete) pada CMS wajib dicatat ke tabel `AuditLog` beserta identitas admin, timestamp, dan IP address.

---

## 10. DESAIN SISTEM UI/UX & PANDUAN SHADCN/UI

### 10.1 Skema Warna Identitas Instansi
Sistem menggunakan palet warna resmi instansi pendidikan yang elegan, berwibawa, dan ramah pengguna:

| Nama Warna | Kode Hex | Peruntukan UI |
| :--- | :--- | :--- |
| **BGTK Navy Primary** | `#0F2C59` | Navbar utama, judul heading, tombol primer, header tabel |
| **BGTK Blue Accent** | `#1E40AF` | Hover state, tautan aktif, indikator progres, tab aktif |
| **Kemendikbud Gold** | `#F59E0B` | Badge pengumuman penting, ikon highlight, bintang rating |
| **Neutral Slate Dark** | `#1E293B` | Teks paragraf utama, label form |
| **Neutral Surface** | `#F8FAFC` | Latar belakang halaman publik, area kartu sekunder |
| **Success Emerald** | `#10B981` | Status Tiket Selesai, predikat IKM Sangat Baik |
| **Warning Amber** | `#F97316` | Status Tiket Diproses, badge butuh perhatian |
| **Destructive Red** | `#EF4444` | Hapus data, status ditolak, error validation |

### 10.2 Tipografi & Komponen
- **Font Utama**: **Plus Jakarta Sans** (Modern, tegas, dan mudah dibaca pada layar perangkat mobile).
- **Prinsip Responsif**:
  - Breakpoint standar Tailwind: `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`.
  - Pada layar mobile (`< 768px`), tabel admin bertransformasi menjadi *stacked card view* agar mudah dioperasikan dari ponsel.
- **Aksesibilitas (WCAG 2.1 AA)**:
  - Kontras rasio teks minimal 4.5:1.
  - Komponen shadcn/ui mendukung navigasi keyboard penuh (Tab, Enter, Escape) dan label ARIA untuk pembaca layar (screen reader).

---

## 11. ROADMAP IMPLEMENTASI & TAHAPAN DEVELOPMENT

Rencana implementasi dibagi menjadi 5 fase berurutan untuk menjamin kualitas kode dan stabilitas sistem:

```
[FASE 1: Fondasi & Basis Data] ➔ [FASE 2: CMS Admin & Core Auth] ➔ [FASE 3: Portal Publik 8 Menu]
                                                                            │
[FASE 5: Pengujian, Optimasi & Rilis] 🠤 [FASE 4: Sistem Interaktif (SKM & Pengaduan)]
```

### Tahap 1: Persiapan Lingkungan & Database (Minggu 1)
- Inisialisasi projek Next.js 15, TypeScript, Tailwind CSS, dan shadcn/ui.
- Setup Prisma ORM, konfigurasi database (PostgreSQL / MySQL), dan eksekusi migrasi perdana.
- Pembuatan script `prisma/seed.ts` untuk akun Super Admin default dan master pertanyaan SKM 9 unsur.

### Tahap 2: Otentikasi & Shell Admin CMS (Minggu 2)
- Konfigurasi NextAuth v5 dengan proteksi middleware session.
- Pembuatan layout Admin CMS: Sidebar, Topbar, Breadcrumbs, dan profil akun.
- Implementasi Modul Dashboard, Manajemen Profil Pejabat, dan Manajemen Pengguna.

### Tahap 3: Implementasi Portal Publik 8 Menu Utama (Minggu 3 - 4)
- Penyusunan layout publik: Header Navbar interaktif, Mega Menu, dan Footer.
- Halaman Beranda (Hero Banner, Sambutan, Quick Access Layanan, Widget Counter).
- Halaman Profil (Sejarah, Visi-Misi, Tugas-Fungsi, Struktur Organisasi).
- Halaman Berita, Pengumuman & Agenda Kegiatan lengkap dengan detail dan filter.
- Halaman 6 Standar Pelayanan Publik dan Halaman Arsip Akuntabilitas Kinerja.
- Halaman Kontak dan formulir kirim pesan.

### Tahap 4: Sistem Interaktif (Survei SKM & Pengaduan Tiket) (Minggu 5)
- Pembuatan formulir interaktif Survei Kepuasan Masyarakat (Permenpan RB No. 14/2017) dan visualisasi IKM.
- Pembuatan modul pengaduan masyarakat (tiket unik, enkripsi pelapor, upload bukti).
- Pembuatan antarmuka CMS untuk tindak lanjut aduan dan ekspor laporan Excel/PDF.

### Tahap 5: Pengujian, Keamanan, SEO & Deployment (Minggu 6)
- Pengujian fungsional menyeluruh (Unit Test & E2E Testing).
- Audit performa Lighthouse (Target skor: Performance 95+, Accessibility 100, Best Practices 100, SEO 100).
- Konfigurasi Docker, Nginx Reverse Proxy, SSL Let's Encrypt, dan backup rutin database.
- Serah terima sistem dan penyusunan Manual Book Panduan Pengguna.

---

## 12. DEVOPS, DEPLOYMENT, ENVIRONMENT & MAINTENANCE

### 12.1 Konfigurasi Environment Variable (`.env.example`)

```bash
# -----------------------------------------------------------------------------
# KONFIGURASI DATABASE
# -----------------------------------------------------------------------------
# Untuk PostgreSQL:
DATABASE_URL="postgresql://postgres:password123@localhost:5432/bgtk_sumsel?schema=public"

# Atau jika menggunakan MySQL:
# DATABASE_URL="mysql://root:password123@localhost:3306/bgtk_sumsel"

# -----------------------------------------------------------------------------
# NEXTAUTH (AUTENTIKASI & KEAMANAN)
# -----------------------------------------------------------------------------
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="ganti-dengan-string-acak-panjang-minimal-64-karakter"

# -----------------------------------------------------------------------------
# KONFIGURASI STORAGE / UPLOAD FILE
# -----------------------------------------------------------------------------
STORAGE_DRIVER="local" # 'local' atau 's3'
LOCAL_UPLOAD_PATH="./public/uploads"

# Jika menggunakan S3 / MinIO (Opsional):
S3_ENDPOINT=""
S3_BUCKET_NAME=""
S3_ACCESS_KEY=""
S3_SECRET_KEY=""
S3_REGION="auto"

# -----------------------------------------------------------------------------
# PENGATURAN UMUM SITUS
# -----------------------------------------------------------------------------
NEXT_PUBLIC_SITE_NAME="BGTK Provinsi Sumatera Selatan"
NEXT_PUBLIC_SITE_URL="https://bgtk-sumsel.kemdikbud.go.id"
```

### 12.2 Deployment Berbasis Docker (Containerization)

File `Dockerfile` multi-stage build yang sangat efisien untuk produksi:

```dockerfile
# 1. Base Stage
FROM node:20-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json* ./

# 2. Dependencies Stage
FROM base AS deps
RUN npm ci

# 3. Builder Stage
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npx prisma generate
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# 4. Runner Stage (Production Ready)
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder /app/prisma ./prisma

USER nextjs
EXPOSE 3000
ENV PORT=3000
CMD ["node", "server.js"]
```

### 12.3 Strategi Backup & Maintenance Rutin
1. **Automated Database Backup**: Skrip cronjob harian mengeksekusi `pg_dump` (atau `mysqldump`), mengompresi file ke `.tar.gz`, dan menyimpannya ke off-site storage dengan retensi 30 hari.
2. **Revalidasi Caching Pintar (ISR)**: Menggunakan fungsi `revalidatePath()` pada Server Action setiap kali admin menerbitkan berita, memperbarui profil, atau mengunggah dokumen baru, sehingga pengguna publik langsung mendapatkan konten terkini tanpa membebani database server.
3. **Pemberitahuan Error**: Integrasi sistem log terpusat untuk memantau error 500 secara instan sebelum dilaporkan oleh pengguna.

---

*Dokumen ini merupakan spesifikasi acuan resmi pengembangan Sistem Informasi & Portal BGTK Sumatera Selatan. Seluruh proses koding, penamaan entitas basis data, serta struktur arsitektur kode wajib merujuk secara konsisten pada panduan di atas.*
