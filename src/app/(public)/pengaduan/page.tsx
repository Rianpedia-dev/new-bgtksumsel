"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldAlert,
  Send,
  Upload,
  CheckCircle2,
  Copy,
  Lock,
  HelpCircle,
  FileText,
  AlertTriangle,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PengaduanPage() {
  const [complaintType, setComplaintType] = useState<"EXTERNAL_SERVICE" | "INTERNAL_WHISTLEBLOW">("EXTERNAL_SERVICE");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    reporterName: "",
    reporterEmail: "",
    reporterPhone: "",
    reporterAgency: "",
    title: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.description) {
      toast.error("Mohon lengkapi judul dan rincian kronologi pengaduan Anda.");
      return;
    }

    // Generate random ticket format: BGTK-202611-XXXX
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const newTicket = `BGTK-202611-${randomCode}`;
    setSubmittedTicket(newTicket);
    toast.success(`Pengaduan berhasil didaftarkan dengan Nomor Tiket: ${newTicket}`);
  };

  const handleCopyTicket = () => {
    if (submittedTicket) {
      navigator.clipboard.writeText(submittedTicket);
      toast.success("Nomor tiket berhasil disalin ke clipboard!");
    }
  };

  if (submittedTicket) {
    return (
      <div className="py-16 max-w-xl mx-auto px-4 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <Badge className="bg-emerald-600 text-white">Laporan Berhasil Diterima</Badge>
          <h1 className="text-2xl font-bold text-foreground">
            Pengaduan Anda Telah Terdaftar
          </h1>
          <p className="text-xs text-muted-foreground max-w-md mx-auto">
            Simpan nomor tiket berikut untuk memantau status verifikasi dan tindak lanjut petugas di kanal pelacakan tiket resmi BGTK Sumsel.
          </p>
        </div>

        <Card className="p-6 bg-secondary text-secondary-foreground border-2 border-dashed border-primary text-center space-y-3">
          <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
            Nomor Tiket Pengaduan Anda:
          </span>
          <div className="text-3xl font-extrabold text-primary font-mono tracking-wider">
            {submittedTicket}
          </div>
          <Button
            size="sm"
            variant="outline"
            onClick={handleCopyTicket}
            className="text-xs font-semibold border-border bg-card text-card-foreground hover:bg-muted"
          >
            <Copy className="w-3.5 h-3.5 mr-1" /> Salin Nomor Tiket
          </Button>
        </Card>

        <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4">
          <Button asChild variant="outline" size="sm" className="border-border bg-card text-card-foreground hover:bg-muted">
            <Link href="/">Kembali ke Beranda</Link>
          </Button>
          <Button asChild size="sm" variant="gradientVariant" className="font-semibold shadow-md">
            <Link href={`/pengaduan/lacak`}>Lacak Status Aduan Sekarang →</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
      {/* Header */}
      <div className="space-y-2 border-b border-border/80 pb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
              Kanal Layanan Pengaduan Terpadu
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Sampaikan keluhan standar pelayanan atau laporan pelanggaran etik secara transparan, aman, dan terlindungi
            </p>
          </div>
          <Button asChild variant="outline" size="sm" className="text-xs font-semibold shrink-0 border-border bg-card text-card-foreground hover:bg-muted">
            <Link href="/pengaduan/lacak">
              🔍 Cek Status Tiket Anda
            </Link>
          </Button>
        </div>
      </div>

      {/* Pilihan Jenis Pengaduan */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          onClick={() => setComplaintType("EXTERNAL_SERVICE")}
          className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
            complaintType === "EXTERNAL_SERVICE"
              ? "border-primary bg-primary/15 shadow-xs"
              : "border-border bg-card text-card-foreground hover:border-primary/50"
          }`}
        >
          <div className="flex items-center gap-2 font-bold text-sm text-card-foreground mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-primary" />
            Pengaduan Pelayanan Publik
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Terkait kualitas layanan narasumber, sarpras, keterlambatan sertifikat, atau kendala SIM kepegawaian.
          </p>
        </div>

        <div
          onClick={() => setComplaintType("INTERNAL_WHISTLEBLOW")}
          className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
            complaintType === "INTERNAL_WHISTLEBLOW"
              ? "border-destructive bg-destructive/15 shadow-xs"
              : "border-border bg-card text-card-foreground hover:border-destructive/50"
          }`}
        >
          <div className="flex items-center gap-2 font-bold text-sm text-card-foreground mb-1">
            <ShieldAlert className="w-4 h-4 text-destructive" />
            Whistleblowing System (WBS)
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Laporan dugaan pungutan liar (pungli), gratifikasi, atau pelanggaran disiplin ASN secara rahasia.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Toggle Anonim */}
        <div className="p-4 rounded-xl bg-card text-card-foreground border border-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-secondary text-secondary-foreground border border-border flex items-center justify-center">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-foreground">Laporkan Secara Anonim (Rahasia)</h4>
              <p className="text-[11px] text-muted-foreground">
                Nama Anda akan disamarkan dalam laporan dan hanya nomor kontak yang digunakan untuk verifikasi.
              </p>
            </div>
          </div>
          <input
            type="checkbox"
            checked={isAnonymous}
            onChange={(e) => setIsAnonymous(e.target.checked)}
            className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer"
          />
        </div>

        {/* Data Identitas */}
        <Card className="p-6 border-border bg-card text-card-foreground shadow-xs space-y-4">
          <h3 className="text-sm font-bold text-foreground pb-2 border-b border-border">
            1. Identitas Pelapor
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {!isAnonymous && (
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-semibold text-card-foreground">Nama Lengkap *</label>
                <Input
                  required
                  value={formData.reporterName}
                  onChange={(e) => setFormData({ ...formData, reporterName: e.target.value })}
                  placeholder="Masukkan nama lengkap Anda"
                  className="bg-secondary text-secondary-foreground border-border"
                />
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-card-foreground">Email Aktif *</label>
              <Input
                required
                type="email"
                value={formData.reporterEmail}
                onChange={(e) => setFormData({ ...formData, reporterEmail: e.target.value })}
                placeholder="email.aktif@domain.com"
                className="bg-secondary text-secondary-foreground border-border"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-card-foreground">No. WhatsApp / Telepon *</label>
              <Input
                required
                type="tel"
                value={formData.reporterPhone}
                onChange={(e) => setFormData({ ...formData, reporterPhone: e.target.value })}
                placeholder="081234567890"
                className="bg-secondary text-secondary-foreground border-border"
              />
            </div>

            <div className="space-y-1.5 sm:col-span-2">
              <label className="text-xs font-semibold text-card-foreground">Sekolah / Instansi Asal (Opsional)</label>
              <Input
                value={formData.reporterAgency}
                onChange={(e) => setFormData({ ...formData, reporterAgency: e.target.value })}
                placeholder="Contoh: SMAN 1 Palembang / Dinas Pendidikan Banyuasin"
                className="bg-secondary text-secondary-foreground border-border"
              />
            </div>
          </div>
        </Card>

        {/* Isi Laporan */}
        <Card className="p-6 border-border bg-card text-card-foreground shadow-xs space-y-4">
          <h3 className="text-sm font-bold text-foreground pb-2 border-b border-border">
            2. Rincian Pengaduan
          </h3>

          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-card-foreground">Judul Pengaduan *</label>
              <Input
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Ringkasan singkat persoalan yang diadukan"
                className="bg-secondary text-secondary-foreground border-border"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-card-foreground">Kronologi & Uraian Lengkap *</label>
              <Textarea
                required
                rows={5}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Uraikan apa yang terjadi secara jelas, pihak/unit terkait, waktu/lokasi kejadian, serta harapan penyelesaian..."
                className="bg-secondary text-secondary-foreground border-border"
              />
            </div>

            {/* Upload File Dropzone Dummy */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-card-foreground">Lampiran Bukti Pendukung (Foto / Dokumen PDF)</label>
              <div className="border-2 border-dashed border-border rounded-xl p-6 text-center bg-secondary text-secondary-foreground hover:bg-muted transition-colors cursor-pointer">
                <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-xs text-secondary-foreground font-semibold">Tarik dan letakkan berkas bukti di sini, atau klik untuk memilih</p>
                <p className="text-[11px] text-muted-foreground mt-1">Format: JPG, PNG, PDF (Maks. 5 MB)</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Submit Button */}
        <div className="flex items-center justify-between pt-2">
          <p className="text-xs text-muted-foreground">
            * Seluruh data aduan dilindungi undang-undang pelayanan publik dan bebas biaya.
          </p>
          <Button
            type="submit"
            size="lg"
            variant="gradientVariant"
            className="font-bold text-sm px-8 shadow-lg"
          >
            <Send className="w-3.5 h-3.5 mr-1.5" /> Kirim Pengaduan Sekarang
          </Button>
        </div>
      </form>
    </div>
  );
}
