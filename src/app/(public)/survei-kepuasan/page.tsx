"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Star, CheckCircle, ArrowRight, ArrowLeft, ShieldCheck, HelpCircle } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { mockSurveyQuestions, mockSurveyPeriod } from "@/data/mock/mock-survey";

export default function FormSurveiPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    respondentName: "",
    gender: "L",
    occupation: "Guru",
    serviceReceived: "PERMOHONAN_NARASUMBER",
    suggestions: "",
  });

  // Jawaban 9 Unsur (Default nilai 4 / Sangat Baik)
  const [answers, setAnswers] = useState<Record<string, number>>({
    U1: 4,
    U2: 4,
    U3: 4,
    U4: 4,
    U5: 4,
    U6: 4,
    U7: 4,
    U8: 4,
    U9: 4,
  });

  const handleScoreChange = (code: string, score: number) => {
    setAnswers((prev) => ({ ...prev, [code]: score }));
  };

  const calculateSimulatedIkm = () => {
    const total = Object.values(answers).reduce((acc, curr) => acc + curr, 0);
    const avg = total / 9;
    return (avg * 25).toFixed(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast.success("Terima kasih! Survei kepuasan Anda berhasil dikirim ke database BGTK Sumsel.");
  };

  if (isSubmitted) {
    return (
      <div className="py-16 max-w-xl mx-auto px-4 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground">Survei Berhasil Dikirim!</h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Kontribusi Anda sangat berharga dalam mewujudkan reformasi birokrasi dan peningkatan mutu layanan BGTK Sumatera Selatan.
          </p>
        </div>

        <Card className="p-6 border-border bg-card text-card-foreground shadow-xs text-left space-y-3">
          <div className="flex justify-between items-center text-xs border-b border-border pb-2">
            <span className="text-muted-foreground">Periode Survei</span>
            <span className="font-semibold text-foreground">{mockSurveyPeriod.title}</span>
          </div>
          <div className="flex justify-between items-center text-xs border-b border-border pb-2">
            <span className="text-muted-foreground">Layanan Dinilai</span>
            <span className="font-semibold text-foreground">{formData.serviceReceived}</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-muted-foreground">Simulasi Nilai IKM Responden</span>
            <span className="font-bold text-primary text-sm">{calculateSimulatedIkm()} / 100</span>
          </div>
        </Card>

        <div className="flex justify-center gap-3 pt-4">
          <Button asChild variant="outline" size="sm" className="border-border bg-card text-card-foreground hover:bg-muted">
            <Link href="/">Kembali ke Beranda</Link>
          </Button>
          <Button asChild size="sm" variant="gradientVariant" className="font-semibold shadow-md">
            <Link href="/survei-kepuasan/hasil">Lihat Rekap Hasil IKM</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
      {/* Header */}
      <div className="space-y-2 border-b border-border/80 pb-6 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
          Survei Kepuasan Masyarakat (SKM)
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Instrumen evaluasi 9 unsur pelayanan publik berdasarkan regulasi <strong>Permenpan RB No. 14 Tahun 2017</strong>
        </p>
      </div>

      {/* Stepper Indikator Minimalis */}
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-between">
          {[
            { step: 1, label: "Data Diri" },
            { step: 2, label: "Penilaian" },
            { step: 3, label: "Saran & Kirim" },
          ].map((item, idx) => (
            <React.Fragment key={item.step}>
              <div className="flex items-center gap-2">
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                    currentStep === item.step
                      ? "bg-primary text-primary-foreground"
                      : currentStep > item.step
                      ? "bg-primary/20 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {item.step}
                </span>
                <span
                  className={`text-xs ${
                    currentStep === item.step
                      ? "font-semibold text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </span>
              </div>
              {idx < 2 && (
                <div
                  className={`flex-1 h-0.5 mx-3 ${
                    currentStep > item.step ? "bg-primary" : "bg-border"
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* LANGKAH 1: PROFIL RESPONDEN */}
        {currentStep === 1 && (
          <Card className="p-6 border-border bg-card text-card-foreground shadow-xs space-y-5">
            <div className="border-b border-border pb-3">
              <h2 className="text-base font-bold text-foreground">
                Data Diri & Demografi Responden
              </h2>
              <p className="text-xs text-muted-foreground">
                Informasi nama dapat dikosongkan jika Anda ingin mengisi secara anonim.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-semibold text-card-foreground">Nama Lengkap (Opsional / Boleh Anonim)</label>
                <Input
                  value={formData.respondentName}
                  onChange={(e) => setFormData({ ...formData, respondentName: e.target.value })}
                  placeholder="Contoh: Dra. Nur Hayati (atau kosongkan)"
                  className="bg-secondary text-secondary-foreground border-border"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-card-foreground">Jenis Kelamin *</label>
                <Select
                  value={formData.gender}
                  onValueChange={(val) => { if (val) setFormData({ ...formData, gender: val }); }}
                >
                  <SelectTrigger className="bg-secondary text-secondary-foreground border-border"><SelectValue /></SelectTrigger>
                  <SelectContent className="bg-card text-card-foreground border-border">
                    <SelectItem value="L">Laki-Laki</SelectItem>
                    <SelectItem value="P">Perempuan</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-card-foreground">Profesi / Jabatan *</label>
                <Select
                  value={formData.occupation}
                  onValueChange={(val) => { if (val) setFormData({ ...formData, occupation: val }); }}
                >
                  <SelectTrigger className="bg-secondary text-secondary-foreground border-border"><SelectValue /></SelectTrigger>
                  <SelectContent className="bg-card text-card-foreground border-border">
                    <SelectItem value="Guru">Guru / Pendidik</SelectItem>
                    <SelectItem value="Kepala Sekolah">Kepala Sekolah</SelectItem>
                    <SelectItem value="Pengawas Sekolah">Pengawas Sekolah</SelectItem>
                    <SelectItem value="Tenaga Kependidikan">Tenaga Administrasi / Tendik</SelectItem>
                    <SelectItem value="Umum">Masyarakat Umum / Akademisi</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-semibold text-card-foreground">Jenis Layanan yang Diterima *</label>
                <Select
                  value={formData.serviceReceived}
                  onValueChange={(val) => { if (val) setFormData({ ...formData, serviceReceived: val as any }); }}
                >
                  <SelectTrigger className="bg-secondary text-secondary-foreground border-border"><SelectValue /></SelectTrigger>
                  <SelectContent className="bg-card text-card-foreground border-border">
                    <SelectItem value="PERMOHONAN_NARASUMBER">Permohonan Narasumber / Widyaprada</SelectItem>
                    <SelectItem value="FASILITASI_KOMPETENSI_PTK">Fasilitasi Bimtek & Peningkatan Kompetensi</SelectItem>
                    <SelectItem value="SIM_KEPEGAWAIAN">Layanan SIM Kepegawaian & Angka Kredit</SelectItem>
                    <SelectItem value="SARPRAS">Pemanfaatan Sarana & Prasarana</SelectItem>
                    <SelectItem value="INFORMASI_PUBLIK">Permohonan Informasi Publik (PPID)</SelectItem>
                    <SelectItem value="PENGADUAN">Layanan Pengaduan & Aspirasi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <Button
                type="button"
                variant="gradientVariant"
                size="sm"
                onClick={() => setCurrentStep(2)}
                className="font-semibold text-xs shadow-md"
              >
                Lanjut ke Penilaian (9 Unsur) <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>
          </Card>
        )}

        {/* LANGKAH 2: 9 UNSUR PERMENPAN RB */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <div className="bg-card p-3.5 rounded-xl border border-border flex items-center justify-between text-xs text-muted-foreground">
              <span>Pilih nilai skala: <strong>1 (Kurang)</strong> hingga <strong>4 (Sangat Baik)</strong></span>
              <span className="font-medium text-foreground">9 Pertanyaan Evaluasi</span>
            </div>

            {mockSurveyQuestions.map((q) => (
              <Card key={q.code} className="p-5 border-border bg-card text-card-foreground shadow-xs space-y-3">
                <div>
                  <p className="text-[11px] font-semibold text-primary uppercase tracking-wide">
                    {q.title}
                  </p>
                  <h3 className="text-sm font-medium text-card-foreground mt-0.5 leading-snug">
                    {q.questionText}
                  </h3>
                </div>

                {/* Rating 4 Tingkat Minimalis */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                  {[
                    { val: 1, label: "Kurang" },
                    { val: 2, label: "Cukup" },
                    { val: 3, label: "Baik" },
                    { val: 4, label: "Sangat Baik" },
                  ].map((opt) => (
                    <button
                      type="button"
                      key={opt.val}
                      onClick={() => handleScoreChange(q.code, opt.val)}
                      className={`py-2 px-3 rounded-lg border text-xs text-center transition-all ${
                        answers[q.code] === opt.val
                          ? "bg-primary text-primary-foreground border-primary shadow-xs font-semibold"
                          : "bg-secondary text-secondary-foreground border-border hover:border-primary/60"
                      }`}
                    >
                      <span className="block font-bold text-sm leading-tight">{opt.val}</span>
                      <span className="text-[10px] opacity-80">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </Card>
            ))}

            <div className="pt-4 flex justify-between">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setCurrentStep(1)}
                className="text-xs border-border bg-card text-card-foreground hover:bg-muted"
              >
                <ArrowLeft className="w-3.5 h-3.5 mr-1.5" /> Kembali ke Data Diri
              </Button>
              <Button
                type="button"
                size="sm"
                variant="gradientVariant"
                onClick={() => setCurrentStep(3)}
                className="font-semibold text-xs shadow-md"
              >
                Lanjut ke Saran & Kirim <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>
          </div>
        )}

        {/* LANGKAH 3: KRITIK, SARAN & SUBMIT */}
        {currentStep === 3 && (
          <Card className="p-6 border-border bg-card text-card-foreground shadow-xs space-y-6">
            <div className="border-b border-border pb-3">
              <h2 className="text-base font-bold text-foreground">
                Kritik, Saran & Masukan Peningkatan Layanan
              </h2>
              <p className="text-xs text-muted-foreground">
                Tuliskan saran konstruktif Anda untuk kemajuan BGTK Sumatera Selatan
              </p>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-card-foreground">Kritik & Saran Perbaikan</label>
              <Textarea
                rows={5}
                value={formData.suggestions}
                onChange={(e) => setFormData({ ...formData, suggestions: e.target.value })}
                placeholder="Tuliskan masukan Anda terkait kecepatan respon, sikap petugas, fasilitas ruang loket, atau materi pelatihan..."
                className="bg-secondary text-secondary-foreground border-border"
              />
            </div>

            <div className="p-4 rounded-xl bg-secondary text-secondary-foreground border border-border flex items-start gap-3 text-xs">
              <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground">Pernyataan Integritas Data</p>
                <p className="text-muted-foreground leading-relaxed mt-0.5">
                  Dengan mengirimkan survei ini, data jawaban Anda disimpan secara terenkripsi dan dijadikan rujukan resmi penyusunan Laporan Indeks Kepuasan Masyarakat (IKM) BGTK Sumsel.
                </p>
              </div>
            </div>

            <div className="pt-2 flex justify-between">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setCurrentStep(2)}
                className="text-xs border-border bg-secondary text-secondary-foreground hover:bg-muted"
              >
                <ArrowLeft className="w-3.5 h-3.5 mr-1.5" /> Kembali ke Penilaian
              </Button>
              <Button
                type="submit"
                size="sm"
                variant="gradientVariant"
                className="font-bold text-xs px-6 shadow-lg"
              >
                Kirim Survei Sekarang ✨
              </Button>
            </div>
          </Card>
        )}
      </form>
    </div>
  );
}
