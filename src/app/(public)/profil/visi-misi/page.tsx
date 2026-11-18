import React from "react";
import Link from "next/link";
import { Compass, Target, CheckCircle2, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockProfileContent } from "@/data/mock/mock-organization";

export default function VisiMisiPage() {
  return (
    <div className="py-12 max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
      {/* Header */}
      <div className="space-y-2 border-b border-border/80 pb-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
          Visi, Misi & Tujuan Strategis
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Arah haluan dan komitmen bersama BGTK Provinsi Sumatera Selatan dalam mewujudkan layanan bermutu
        </p>
      </div>

      {/* Navigasi Sub-Menu */}
      <div className="flex flex-wrap gap-2">
        <Button asChild size="sm" variant="outline" className="border-border bg-card text-card-foreground hover:bg-muted">
          <Link href="/profil">Profil & Sejarah</Link>
        </Button>
        <Button asChild size="sm" variant="gradient" className="shadow-xs">
          <Link href="/profil/visi-misi">Visi, Misi & Tujuan</Link>
        </Button>
        <Button asChild size="sm" variant="outline" className="border-border bg-card text-card-foreground hover:bg-muted">
          <Link href="/profil/tugas-fungsi">Tugas dan Fungsi</Link>
        </Button>
        <Button asChild size="sm" variant="outline" className="border-border bg-card text-card-foreground hover:bg-muted">
          <Link href="/profil/struktur">Struktur Organisasi</Link>
        </Button>
      </div>

      <div className="space-y-8">
        {/* Visi */}
        <Card className="bg-gradient-to-r from-[#0F2C59] via-[#143B66] to-[#1E507A] text-white p-8 rounded-2xl shadow-lg border-0">
          <div className="max-w-4xl space-y-4">
            <p className="text-xs uppercase tracking-widest text-amber-300 font-semibold flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" /> Visi BGTK Sumatera Selatan
            </p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-relaxed text-amber-200">
              "{mockProfileContent.vision}"
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Visi ini menempatkan guru dan tenaga kependidikan sebagai pilar sentral perubahan yang berdaya kreasi dan berintegritas tinggi dalam ekosistem belajar abad ke-21.
            </p>
          </div>
        </Card>

        {/* Misi & Tujuan */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Misi */}
          <Card className="p-6 border-border bg-card text-card-foreground shadow-xs space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-border">
              <Target className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-bold text-foreground">Misi Instansi</h2>
            </div>
            <div className="space-y-3.5">
              {mockProfileContent.missions.map((misi, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-card-foreground leading-relaxed p-2.5 rounded-lg bg-secondary text-secondary-foreground border border-border">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                    {i + 1}
                  </span>
                  <span>{misi}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Tujuan Strategis */}
          <Card className="p-6 border-border bg-card text-card-foreground shadow-xs space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-border">
              <Award className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-bold text-foreground">Tujuan Strategis</h2>
            </div>
            <div className="space-y-3.5">
              {mockProfileContent.goals.map((goal, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-card-foreground leading-relaxed p-2.5 rounded-lg bg-secondary text-secondary-foreground border border-border">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{goal}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
