import React from "react";
import Link from "next/link";
import {
  FileCheck,
  ShieldCheck,
  Clock,
  ArrowRight,
  Download,
  Users,
  Database,
  Building,
  HelpCircle,
  Award,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockServices } from "@/data/mock/mock-services";

export default function StandarPelayananIndexPage() {
  const getIcon = (type: string) => {
    switch (type) {
      case "PENGADUAN":
        return <HelpCircle className="w-5 h-5 text-destructive" />;
      case "SIM_KEPEGAWAIAN":
        return <Database className="w-5 h-5 text-primary" />;
      case "SARPRAS":
        return <Building className="w-5 h-5 text-primary" />;
      case "PERMOHONAN_NARASUMBER":
        return <Users className="w-5 h-5 text-primary" />;
      case "INFORMASI_PUBLIK":
        return <FileCheck className="w-5 h-5 text-primary" />;
      case "FASILITASI_KOMPETENSI_PTK":
        return <Award className="w-5 h-5 text-primary" />;
      default:
        return <FileCheck className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <div className="py-12 max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
      {/* Header */}
      <div className="space-y-2 border-b border-border/80 pb-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
          Standar Pelayanan Publik BGTK Sumsel
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Kepastian persyaratan, prosedur, jangka waktu, dan keterbukaan informasi seluruh layanan instansi
        </p>
      </div>

      {/* Maklumat Pelayanan Publik */}
      <Card className="p-6 bg-gradient-to-r from-[#0F2C59] via-[#143B66] to-[#1E507A] text-white border-0 shadow-md rounded-2xl">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs uppercase tracking-widest text-amber-300 font-semibold flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            Maklumat Pelayanan Resmi
          </p>
          <h2 className="text-lg sm:text-xl font-bold leading-relaxed text-amber-200">
            "Dengan ini kami menyatakan sanggup menyelenggarakan pelayanan sesuai standar pelayanan yang telah ditetapkan, serta siap menerima sanksi sesuai peraturan perundang-undangan bila tidak menepati janji."
          </h2>
          <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-200">
            <span>• Seluruh Layanan Bebas Pungutan (Rp 0)</span>
            <span>• Transparan & Akuntabel</span>
            <span>• Berorientasi Kepuasan Masyarakat</span>
          </div>
        </div>
      </Card>

      {/* Daftar 6 Standar Pelayanan */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-foreground">
          Standar Pelayanan BGTK
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockServices.map((srv) => (
            <Card key={srv.id} className="p-5 border-border bg-card text-card-foreground hover:border-primary transition-all flex flex-col justify-between shadow-xs hover:shadow-md group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-secondary text-secondary-foreground border border-border flex items-center justify-center">
                    {getIcon(srv.type)}
                  </div>
                  <span className="text-xs text-emerald-600 font-medium bg-emerald-500/10 px-2 py-0.5 rounded">
                    Biaya: {srv.fee}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-card-foreground text-sm leading-snug group-hover:text-primary transition-colors">
                    <Link href={`/standar-pelayanan/${srv.slug}`}>
                      {srv.title}
                    </Link>
                  </h3>
                </div>

                <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                  {srv.shortDesc}
                </p>

                <div className="pt-2 border-t border-border text-[11px] text-card-foreground space-y-1">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>Waktu: <strong>{srv.completionTime}</strong></span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-3 border-t border-border flex items-center justify-between">
                <Link
                  href={`/standar-pelayanan/${srv.slug}`}
                  className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                >
                  Lihat Rincian SOP & Syarat <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
