"use client";

import React from "react";
import Link from "next/link";
import { Star, Award, TrendingUp, Download, FileText, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { mockIkmSummary, mockSurveyQuestions } from "@/data/mock/mock-survey";

export default function HasilSurveiIkmPage() {
  const handleDownloadReport = (title: string) => {
    toast.success(`Mengunduh laporan: ${title}`);
  };

  return (
    <div className="py-12 max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
      {/* Header */}
      <div className="space-y-2 border-b border-border/80 pb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
              Indeks Kepuasan Masyarakat (IKM)
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Laporan berkala hasil evaluasi mutu pelayanan BGTK Provinsi Sumatera Selatan
            </p>
          </div>
          <Button asChild size="sm" variant="gradientVariant" className="font-bold text-xs shadow-md">
            <Link href="/survei-kepuasan">
              Isi Kuisioner Survei →
            </Link>
          </Button>
        </div>
      </div>

      {/* KPI Card Skor IKM Utama */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <Card className="md:col-span-6 bg-gradient-to-br from-[#0F2C59] via-[#143B66] to-[#1E507A] text-white p-6 sm:p-8 rounded-2xl shadow-lg border-0 flex flex-col justify-between">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-wider text-amber-300 font-semibold">
              Periode Evaluasi: {mockIkmSummary.periodLabel}
            </p>
            <h2 className="text-sm font-semibold text-slate-200">
              Nilai Konversi Indeks Kepuasan Masyarakat (IKM)
            </h2>
            <div className="flex items-baseline gap-3 pt-2">
              <span className="text-5xl sm:text-6xl font-black text-amber-300">
                {mockIkmSummary.ikmScore}
              </span>
              <span className="text-sm text-slate-200">/ 100</span>
            </div>
          </div>

          <div className="pt-6 border-t border-white/20 grid grid-cols-2 gap-4">
            <div>
              <span className="text-xs text-slate-300 block">Mutu Pelayanan:</span>
              <span className="text-base font-bold text-emerald-300 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Mutu {mockIkmSummary.grade} ({mockIkmSummary.serviceQuality})
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-300 block">Jumlah Responden:</span>
              <span className="text-base font-bold text-white">{mockIkmSummary.totalRespondents} Responden</span>
            </div>
          </div>
        </Card>

        {/* Tren Nilai IKM Tahunan */}
        <Card className="md:col-span-6 p-6 border-border bg-card text-card-foreground shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-card-foreground text-sm mb-1 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-primary" /> Tren Nilai IKM (2024 - 2026)
            </h3>
            <p className="text-xs text-muted-foreground mb-4">
              Peningkatan berkelanjutan mutu pelayanan publik BGTK Sumsel
            </p>

            <div className="space-y-2.5">
              {mockIkmSummary.yearlyTrends.map((trend) => (
                <div key={trend.period} className="flex items-center justify-between text-xs p-2 rounded-lg bg-secondary text-secondary-foreground border border-border">
                  <span className="font-semibold text-secondary-foreground w-16">{trend.period}</span>
                  <div className="flex-1 mx-3 bg-muted h-3 rounded-full overflow-hidden">
                    <div
                      className="bg-primary h-full rounded-full"
                      style={{ width: `${trend.score}%` }}
                    />
                  </div>
                  <span className="font-bold text-card-foreground w-12 text-right">{trend.score}</span>
                  <span className="text-[11px] font-semibold text-primary ml-2">
                    {trend.grade}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 text-xs text-muted-foreground italic">
            *Dihitung berdasarkan rumus Permenpan RB No. 14 Tahun 2017
          </div>
        </Card>
      </div>

      {/* Rincian Skor per 9 Unsur Pelayanan */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-foreground">
            Rincian Skor Per 9 Unsur Pelayanan (Skala Likert 1.0 - 4.0)
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockSurveyQuestions.map((q, idx) => (
            <Card key={q.code} className="p-4 border-border bg-card text-card-foreground shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold text-primary uppercase">
                  {q.code}
                </span>
                <span className="text-xs font-bold text-primary flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-primary text-primary" />
                  {q.scoreAvg} / 4.0
                </span>
              </div>
              <h4 className="text-xs font-bold text-card-foreground line-clamp-1">{q.title}</h4>
              <p className="text-[11px] text-muted-foreground line-clamp-2 mt-1 leading-relaxed">
                {q.questionText}
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* Arsip Dokumen Laporan SKM */}
      <Card className="p-6 border-border bg-card text-card-foreground shadow-xs">
        <h3 className="font-bold text-foreground text-base mb-4 flex items-center gap-2">
          <FileText className="w-4 h-4 text-primary" /> Unduhan Dokumen Laporan Resmi SKM
        </h3>

        <div className="space-y-3">
          {[
            {
              title: "Laporan Hasil Survei Kepuasan Masyarakat Semester II Tahun 2025",
              period: "Semester II - 2025",
              size: "2.8 MB",
              ikm: 90.5,
            },
            {
              title: "Laporan Hasil Survei Kepuasan Masyarakat Semester I Tahun 2025",
              period: "Semester I - 2025",
              size: "2.4 MB",
              ikm: 89.2,
            },
            {
              title: "Laporan Tahunan Evaluasi Pelayanan Publik & SKM BGTK Sumsel 2024",
              period: "Tahunan 2024",
              size: "4.1 MB",
              ikm: 87.8,
            },
          ].map((doc, i) => (
            <div
              key={i}
              className="p-3.5 rounded-lg border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-secondary text-secondary-foreground"
            >
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-secondary-foreground">{doc.title}</h4>
                <div className="flex items-center gap-2 text-[11px] text-muted-foreground mt-0.5">
                  <span>Periode: {doc.period}</span>
                  <span>•</span>
                  <span className="font-semibold text-primary">Skor IKM: {doc.ikm}</span>
                  <span>•</span>
                  <span>PDF ({doc.size})</span>
                </div>
              </div>

              <Button
                size="sm"
                variant="outline"
                onClick={() => handleDownloadReport(doc.title)}
                className="text-xs font-semibold bg-card border-border hover:bg-muted text-card-foreground"
              >
                <Download className="w-3.5 h-3.5 mr-1" /> Unduh Dokumen
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
