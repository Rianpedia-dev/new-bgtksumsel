import React from "react";
import Link from "next/link";
import { Building2, Compass, Shield, Award, Users, BookOpen, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockProfileContent } from "@/data/mock/mock-organization";

export default function ProfilPage() {
  return (
    <div className="py-12 max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
      {/* Page Header */}
      <div className="space-y-2 border-b border-border/80 pb-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
          Profil Balai Guru dan Tenaga Kependidikan
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Mengenal sejarah pembentukan, kedudukan, dan peran strategis BGTK Provinsi Sumatera Selatan
        </p>
      </div>

      {/* Navigasi Sub-Menu Profil */}
      <div className="flex flex-wrap gap-2">
        <Button asChild size="sm" variant="gradient" className="shadow-xs">
          <Link href="/profil">Profil & Sejarah</Link>
        </Button>
        <Button asChild size="sm" variant="outline" className="border-border bg-card text-card-foreground hover:bg-muted">
          <Link href="/profil/visi-misi">Visi, Misi & Tujuan</Link>
        </Button>
        <Button asChild size="sm" variant="outline" className="border-border bg-card text-card-foreground hover:bg-muted">
          <Link href="/profil/tugas-fungsi">Tugas dan Fungsi</Link>
        </Button>
        <Button asChild size="sm" variant="outline" className="border-border bg-card text-card-foreground hover:bg-muted">
          <Link href="/profil/struktur">Struktur Organisasi</Link>
        </Button>
      </div>

      {/* Konten Utama Profil */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-6 text-card-foreground text-sm leading-relaxed">
          <Card className="p-6 border-border bg-card text-card-foreground shadow-xs">
            <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" /> Latar Belakang & Kedudukan
            </h2>
            <p className="mb-4">
              {mockProfileContent.aboutText}
            </p>
            <p>
              Sebagai Unit Pelaksana Teknis di lingkungan Kementerian Pendidikan Dasar dan Menengah, BGTK Provinsi Sumatera Selatan bertindak sebagai garda terdepan dalam mendorong transformasi kepemimpinan pembelajaran, penguatan literasi dan numerasi, serta fasilitasi peningkatan kompetensi berkelanjutan bagi guru, pendidik PAUD, kepala sekolah, dan pengawas sekolah.
            </p>
          </Card>

          <Card className="p-6 border-border bg-card text-card-foreground shadow-xs">
            <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" /> Landasan Hukum Pendirian
            </h2>
            <div className="bg-secondary text-secondary-foreground p-4 rounded-lg border border-border text-xs space-y-2">
              <p className="font-semibold text-foreground">
                {mockProfileContent.legalBasis}
              </p>
              <p>
                Regulasi ini menetapkan tugas, fungsi, susunan organisasi, serta tata kerja Balai Guru dan Tenaga Kependidikan sebagai UPT yang berwenang melaksanakan penjaminan dan peningkatan mutu pendidik di tingkat provinsi.
              </p>
            </div>
          </Card>

          <Card className="p-6 border-border bg-card text-card-foreground shadow-xs">
            <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
              <Compass className="w-5 h-5 text-primary" /> Wilayah Binaan & Sasaran Kerja
            </h2>
            <p className="mb-3">
              Wilayah kerja operasional BGTK Provinsi Sumatera Selatan mencakup 17 Kabupaten dan Kota:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              {[
                "Kota Palembang",
                "Kota Prabumulih",
                "Kota Pagar Alam",
                "Kota Lubuklinggau",
                "Kab. Ogan Ilir",
                "Kab. Ogan Komering Ilir",
                "Kab. OKU",
                "Kab. OKU Timur",
                "Kab. OKU Selatan",
                "Kab. Muara Enim",
                "Kab. Lahat",
                "Kab. Empat Lawang",
                "Kab. Musi Rawas",
                "Kab. Muratara",
                "Kab. Musi Banyuasin",
                "Kab. Banyuasin",
                "Kab. Penukal Abab Lematang Ilir",
              ].map((kab, i) => (
                <div key={i} className="flex items-center gap-1.5 p-2 bg-secondary text-secondary-foreground rounded border border-border">
                  <span className="text-primary font-bold">•</span> {kab}
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Sidebar Info Ringkas */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="p-5 border-border bg-card text-card-foreground shadow-md">
            <h3 className="font-bold text-base text-primary mb-3">
              Identitas Kelembagaan
            </h3>
            <div className="space-y-3 text-xs">
              <div className="p-2.5 rounded-lg bg-secondary text-secondary-foreground border border-border">
                <span className="text-muted-foreground block text-[11px]">Nama Instansi:</span>
                <span className="font-semibold text-foreground">{mockProfileContent.name}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-secondary text-secondary-foreground border border-border">
                <span className="text-muted-foreground block text-[11px]">Singkatan Resmi:</span>
                <span className="font-semibold text-foreground">{mockProfileContent.abbreviation}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-secondary text-secondary-foreground border border-border">
                <span className="text-muted-foreground block text-[11px]">Tahun Transformasi:</span>
                <span className="font-semibold text-foreground">{mockProfileContent.establishedYear}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-secondary text-secondary-foreground border border-border">
                <span className="text-muted-foreground block text-[11px]">Eselon / Tingkat Unit:</span>
                <span className="font-semibold text-foreground">UPT Eselon III.a Kemendikbudristek</span>
              </div>
            </div>
          </Card>

          <Card className="p-5 border-border bg-card text-card-foreground shadow-xs space-y-3">
            <h3 className="font-bold text-card-foreground text-sm">Halaman Terkait</h3>
            <div className="space-y-2">
              <Link href="/profil/visi-misi" className="flex items-center justify-between text-xs font-medium text-secondary-foreground hover:text-primary p-2.5 rounded bg-secondary hover:bg-muted border border-border transition-colors">
                <span>Visi, Misi & Tujuan</span> <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/profil/tugas-fungsi" className="flex items-center justify-between text-xs font-medium text-secondary-foreground hover:text-primary p-2.5 rounded bg-secondary hover:bg-muted border border-border transition-colors">
                <span>Tugas Pokok & Fungsi</span> <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/profil/struktur" className="flex items-center justify-between text-xs font-medium text-secondary-foreground hover:text-primary p-2.5 rounded bg-secondary hover:bg-muted border border-border transition-colors">
                <span>Struktur Organisasi</span> <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
