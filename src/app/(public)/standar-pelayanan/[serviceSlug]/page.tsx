"use client";

import React, { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Clock,
  ShieldCheck,
  Download,
  CheckCircle2,
  FileText,
  HelpCircle,
  Send,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { mockServices } from "@/data/mock/mock-services";

export default function DetailStandarLayananPage({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}) {
  const resolvedParams = use(params);
  const service = mockServices.find((s) => s.slug === resolvedParams.serviceSlug);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalForm, setModalForm] = useState({ name: "", agency: "", notes: "" });

  if (!service) {
    notFound();
  }

  const handleDownload = () => {
    toast.success(`Mengunduh format formulir: ${service.formTemplateName || "Formulir.docx"}`);
  };

  const handleOnlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(false);
    toast.success("Permohonan online simulasi Anda berhasil dikirim ke loket digital!");
  };

  return (
    <div className="py-12 max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
      {/* Back Button */}
      <Link
        href="/standar-pelayanan"
        className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline font-medium"
      >
        <ArrowLeft className="w-3.5 h-3.5" /> Kembali ke Daftar Standar Layanan
      </Link>

      {/* Header Info Layanan */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="font-semibold text-primary uppercase tracking-wider">{service.type}</span>
          <span>•</span>
          <span className="text-emerald-600 font-medium">Biaya: {service.fee}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-primary" /> Waktu: {service.completionTime}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight">
          {service.title}
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {service.shortDesc}
        </p>
      </div>

      {/* Tombol Aksi Cepat */}
      <div className="flex flex-wrap gap-3 p-4 rounded-xl bg-card text-card-foreground border border-border">
        {service.formTemplateUrl && (
          <Button
            size="sm"
            variant="outline"
            onClick={handleDownload}
            className="text-xs font-semibold bg-secondary text-secondary-foreground border-border hover:bg-muted"
          >
            <Download className="w-3.5 h-3.5 mr-1.5" /> Unduh Format Permohonan ({service.formTemplateName})
          </Button>
        )}
        <Button
          size="sm"
          onClick={() => setIsModalOpen(true)}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs shadow-xs"
        >
          <Send className="w-3.5 h-3.5 mr-1.5" /> Ajukan Permohonan Online
        </Button>
      </div>

      {/* Grid Informasi Standar */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8 space-y-6">
          {/* Persyaratan */}
          <Card className="p-6 border-border bg-card text-card-foreground shadow-xs space-y-3">
            <h2 className="text-base font-bold text-foreground flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" /> Persyaratan Administratif
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-card-foreground">
              {service.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-2.5 p-2 rounded-lg bg-secondary text-secondary-foreground border border-border">
                  <span className="text-primary font-bold">•</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Alur & Prosedur (Stepper) */}
          <Card className="p-6 border-border bg-card text-card-foreground shadow-xs space-y-4">
            <h2 className="text-base font-bold text-foreground flex items-center gap-2">
              <FileText className="w-4 h-4 text-primary" /> Alur & Prosedur Pelayanan
            </h2>
            <div className="space-y-3">
              {service.procedureSteps.map((step) => (
                <div key={step.step} className="p-3.5 rounded-lg border border-border bg-secondary text-secondary-foreground flex items-start gap-3 text-xs">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center shrink-0 text-xs">
                    {step.step}
                  </span>
                  <div>
                    <h4 className="font-bold text-secondary-foreground text-xs sm:text-sm">{step.title}</h4>
                    <p className="text-muted-foreground mt-0.5 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Produk Layanan & Penanganan Aduan */}
          <Card className="p-6 border-border bg-card text-card-foreground shadow-xs space-y-3">
            <h2 className="text-base font-bold text-foreground">Produk Layanan yang Diterima:</h2>
            <p className="text-xs sm:text-sm text-secondary-foreground bg-secondary p-3.5 rounded-lg border border-border font-medium">
              ✓ {service.productOutput}
            </p>
          </Card>
        </div>

        {/* Sidebar Ringkasan */}
        <div className="md:col-span-4 space-y-6">
          <Card className="p-5 border-border bg-card text-card-foreground shadow-xs space-y-4">
            <h3 className="font-bold text-foreground text-sm border-b border-border pb-2">
              Kanal Layanan Terkait
            </h3>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-lg bg-secondary text-secondary-foreground border border-border">
                <span className="text-muted-foreground block text-[11px]">Kategori Layanan</span>
                <span className="font-semibold text-secondary-foreground">{service.type}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-secondary text-secondary-foreground border border-border">
                <span className="text-muted-foreground block text-[11px]">Tarif Retribusi</span>
                <span className="font-semibold text-emerald-600">{service.fee} (Sesuai Regulasi)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-secondary text-secondary-foreground border border-border">
                <span className="text-muted-foreground block text-[11px]">SLA / Waktu Penyelesaian</span>
                <span className="font-semibold text-secondary-foreground">{service.completionTime}</span>
              </div>
            </div>

            <div className="pt-2">
              <Button asChild variant="outline" size="sm" className="w-full text-xs border-border bg-secondary text-secondary-foreground hover:bg-muted">
                <Link href="/pengaduan">Ada Keluhan Pelayanan? Adukan Di Sini</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Modal Dialog Form Permohonan Online */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md bg-card text-card-foreground border-border">
          <DialogHeader>
            <DialogTitle className="text-base font-bold text-foreground">
              Formulir Permohonan Layanan
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              {service.title}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleOnlineSubmit} className="space-y-3 pt-2">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-card-foreground">Nama Pemohon / Instansi *</label>
              <Input
                required
                value={modalForm.name}
                onChange={(e) => setModalForm({ ...modalForm, name: e.target.value })}
                placeholder="Contoh: SMAN 1 Palembang / Ahmad Fauzi"
                className="bg-secondary text-secondary-foreground border-border"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-card-foreground">Kabupaten / Kota *</label>
              <Input
                required
                value={modalForm.agency}
                onChange={(e) => setModalForm({ ...modalForm, agency: e.target.value })}
                placeholder="Contoh: Kota Palembang"
                className="bg-secondary text-secondary-foreground border-border"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-card-foreground">Catatan / Kebutuhan Tambahan</label>
              <Textarea
                rows={3}
                value={modalForm.notes}
                onChange={(e) => setModalForm({ ...modalForm, notes: e.target.value })}
                placeholder="Tuliskan tanggal pelaksanaan atau materi yang diminta..."
                className="bg-secondary text-secondary-foreground border-border"
              />
            </div>
            <div className="pt-2 flex justify-end gap-2">
              <Button type="button" variant="outline" size="sm" onClick={() => setIsModalOpen(false)} className="border-border bg-secondary text-secondary-foreground hover:bg-muted">
                Batal
              </Button>
              <Button type="submit" size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Kirim Permohonan
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
