import React from "react";
import Link from "next/link";
import { BookOpen, Layers } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockProfileContent } from "@/data/mock/mock-organization";

export default function TugasFungsiPage() {
  return (
    <div className="py-12 max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
      {/* Header */}
      <div className="space-y-2 border-b border-border/80 pb-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
          Tugas Pokok & Fungsi (Tupoksi)
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Mandat regulasi resmi Permendikbudristek No. 11 Tahun 2022 bagi BGTK Provinsi Sumatera Selatan
        </p>
      </div>

      {/* Navigasi Sub-Menu */}
      <div className="flex flex-wrap gap-2">
        <Button asChild size="sm" variant="outline" className="border-border bg-card text-card-foreground hover:bg-muted">
          <Link href="/profil">Profil & Sejarah</Link>
        </Button>
        <Button asChild size="sm" variant="outline" className="border-border bg-card text-card-foreground hover:bg-muted">
          <Link href="/profil/visi-misi">Visi, Misi & Tujuan</Link>
        </Button>
        <Button asChild size="sm" variant="gradient" className="shadow-xs">
          <Link href="/profil/tugas-fungsi">Tugas dan Fungsi</Link>
        </Button>
        <Button asChild size="sm" variant="outline" className="border-border bg-card text-card-foreground hover:bg-muted">
          <Link href="/profil/struktur">Struktur Organisasi</Link>
        </Button>
      </div>

      <div className="space-y-8">
        {/* Tugas Pokok */}
        <Card className="p-6 border-border bg-card text-card-foreground shadow-xs">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">Tugas Pokok</h2>
              <p className="text-xs text-muted-foreground">Pasal 2 Permendikbudristek No. 11 Tahun 2022</p>
            </div>
          </div>
          <p className="text-sm text-secondary-foreground leading-relaxed bg-secondary p-4 rounded-lg border border-border font-medium">
            "Balai Guru dan Tenaga Kependidikan Provinsi Sumatera Selatan mempunyai tugas melaksanakan peningkatan mutu pendidik, tenaga kependidikan, pendidik anak usia dini, dan pamong belajar di Provinsi Sumatera Selatan."
          </p>
        </Card>

        {/* 8 Fungsi Utama */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold text-foreground">
              Fungsi Kelembagaan (8 Pilar)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockProfileContent.duties.map((duty, i) => (
              <Card key={i} className="p-4 border-border bg-card text-card-foreground hover:border-primary transition-colors shadow-xs">
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-md bg-secondary text-secondary-foreground font-bold text-xs flex items-center justify-center shrink-0 border border-border">
                    {i + 1}
                  </span>
                  <div className="text-xs sm:text-sm text-card-foreground leading-relaxed font-medium">
                    {duty}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
