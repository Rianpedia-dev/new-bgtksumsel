import {
  Building2,
  Compass,
  FileText,
  Users,
  Newspaper,
  Megaphone,
  Calendar,
  FileCheck,
  UserCheck,
  Star,
  Award,
  MessageSquare,
  ShieldCheck,
  Target,
  BarChart3,
  Coins,
  Shield,
  Phone,
  Home,
} from "lucide-react";
import { NavItem } from "@/components/ui/dropdown-navigation";

export const BGTK_NAV_ITEMS: NavItem[] = [
  {
    id: 1,
    label: "Beranda",
    link: "/",
  },
  {
    id: 2,
    label: "Profil",
    link: "/profil",
    subMenus: [
      {
        title: "Kelembagaan",
        items: [
          {
            label: "Profil & Sejarah",
            description: "Sejarah dan peran strategis BGTK Sumsel",
            icon: Building2,
            href: "/profil",
          },
          {
            label: "Visi, Misi & Tujuan",
            description: "Arah haluan dan komitmen mutu",
            icon: Compass,
            href: "/profil/visi-misi",
          },
        ],
      },
      {
        title: "Tata Kelola",
        items: [
          {
            label: "Tugas & Fungsi",
            description: "Tupoksi regulasi kementerian",
            icon: FileText,
            href: "/profil/tugas-fungsi",
          },
          {
            label: "Struktur Organisasi",
            description: "Pimpinan dan penanggung jawab pokja",
            icon: Users,
            href: "/profil/struktur",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Informasi",
    link: "/informasi/berita",
    subMenus: [
      {
        title: "Warta & Publikasi",
        items: [
          {
            label: "Berita Terkini",
            description: "Kabar program dan kebijakan pendidikan",
            icon: Newspaper,
            href: "/informasi/berita",
          },
          {
            label: "Pengumuman Resmi",
            description: "Surat edaran kedinasan dan seleksi",
            icon: Megaphone,
            href: "/informasi/pengumuman",
          },
        ],
      },
      {
        title: "Agenda",
        items: [
          {
            label: "Kalender Kegiatan",
            description: "Jadwal bimtek, pelatihan & webinar",
            icon: Calendar,
            href: "/informasi/agenda",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    label: "Layanan",
    link: "/standar-pelayanan",
    subMenus: [
      {
        title: "Standar Layanan",
        items: [
          {
            label: "Standar Pelayanan Publik",
            description: "Maklumat kepastian SOP dan syarat",
            icon: FileCheck,
            href: "/standar-pelayanan",
          },
          {
            label: "Permohonan Narasumber",
            description: "Fasilitasi Widyaprada untuk daerah",
            icon: UserCheck,
            href: "/standar-pelayanan/standar-pelayanan-permohonan-narasumber",
          },
        ],
      },
      {
        title: "Aduan & Evaluasi",
        items: [
          {
            label: "Layanan Pengaduan & WBS",
            description: "Kanal aduan dan whistleblowing",
            icon: MessageSquare,
            href: "/pengaduan",
          },
          {
            label: "Lacak Status Tiket",
            description: "Pantau progres penanganan aduan",
            icon: ShieldCheck,
            href: "/pengaduan/lacak",
          },
          {
            label: "Survei Kepuasan (SKM)",
            description: "Evaluasi 9 unsur kepuasan publik",
            icon: Star,
            href: "/survei-kepuasan",
          },
          {
            label: "Hasil Indeks IKM",
            description: "Laporan transparansi mutu berkala",
            icon: Award,
            href: "/survei-kepuasan/hasil",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    label: "Akuntabilitas",
    link: "/akuntabilitas",
    align: "right",
    subMenus: [
      {
        title: "Kinerja & Keuangan",
        items: [
          {
            label: "Pusat Dokumen Kinerja",
            description: "Repositori berkas akuntabilitas terpadu",
            icon: FileText,
            href: "/akuntabilitas",
          },
          {
            label: "Perjanjian Kinerja (PK)",
            description: "Target dan komitmen kerja tahunan",
            icon: Target,
            href: "/akuntabilitas#perjanjian-kinerja",
          },
          {
            label: "Laporan Kinerja (LAKIP)",
            description: "Laporan akuntabilitas instansi pemerintah",
            icon: BarChart3,
            href: "/akuntabilitas#laporan-kinerja",
          },
          {
            label: "Laporan Keuangan",
            description: "Transparansi DIPA dan realisasi dana",
            icon: Coins,
            href: "/akuntabilitas#laporan-keuangan",
          },
        ],
      },
      {
        title: "Reformasi Birokrasi",
        items: [
          {
            label: "Zona Integritas WBK",
            description: "Komitmen Wilayah Bebas dari Korupsi",
            icon: Shield,
            href: "/akuntabilitas#zona-integritas",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    label: "Kontak",
    link: "/kontak",
  },
];
