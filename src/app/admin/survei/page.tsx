"use client";

import React, { useState } from "react";
import {
  Star,
  FileSpreadsheet,
  FileText,
  Download,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  mockIkmSummary,
  mockSurveyQuestions,
  mockSurveyResponses,
  mockSurveyPeriod,
} from "@/data/mock/mock-survey";

export default function AdminSurveiPage() {
  const [period, setPeriod] = useState(mockSurveyPeriod);

  const handleExportExcel = () => {
    toast.success("Mengekspor rekapitulasi data responden SKM ke Excel (.xlsx)...");
  };

  const handleExportPdf = () => {
    toast.success("Mencetak Berita Acara & Laporan Hasil IKM Resmi (.pdf)...");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-foreground tracking-tight">
            Survei Kepuasan Masyarakat (SKM)
          </h1>
          <p className="text-xs text-muted-foreground">
            Kalkulasi otomatis Indeks Kepuasan Masyarakat berdasarkan regulasi Permenpan RB No. 14 Tahun 2017
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={handleExportExcel}
            className="text-xs font-semibold bg-secondary text-secondary-foreground border-border hover:bg-muted"
          >
            <FileSpreadsheet className="w-3.5 h-3.5 mr-1.5 text-emerald-600" /> Export Excel (.xlsx)
          </Button>
          <Button
            size="sm"
            onClick={handleExportPdf}
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold shadow-xs"
          >
            <FileText className="w-3.5 h-3.5 mr-1.5" /> Cetak Laporan PDF
          </Button>
        </div>
      </div>

      {/* KPI Highlight Skor */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-5 border-border shadow-xs bg-card text-card-foreground">
          <span className="text-xs font-semibold text-muted-foreground">Nilai Konversi IKM</span>
          <div className="text-3xl font-black text-primary mt-2">{mockIkmSummary.ikmScore}</div>
          <span className="text-[11px] text-muted-foreground">Skala 100 Permenpan RB</span>
        </Card>

        <Card className="p-5 border-border shadow-xs bg-card text-card-foreground">
          <span className="text-xs font-semibold text-muted-foreground">Mutu Pelayanan</span>
          <div className="text-2xl font-black text-emerald-600 mt-2">
            Mutu {mockIkmSummary.grade}
          </div>
          <span className="text-[11px] text-card-foreground font-semibold">{mockIkmSummary.serviceQuality}</span>
        </Card>

        <Card className="p-5 border-border shadow-xs bg-card text-card-foreground">
          <span className="text-xs font-semibold text-muted-foreground">Total Responden</span>
          <div className="text-3xl font-black text-foreground mt-2">
            {mockIkmSummary.totalRespondents}
          </div>
          <span className="text-[11px] text-muted-foreground">Pendidik & Umum</span>
        </Card>

        <Card className="p-5 border-border shadow-xs bg-card text-card-foreground">
          <span className="text-xs font-semibold text-muted-foreground">Status Periode</span>
          <div className="text-lg font-bold text-foreground mt-2">Semester I - 2026</div>
          <Badge className="bg-emerald-600 text-white text-[10px] mt-1">PERIODE AKTIF</Badge>
        </Card>
      </div>

      {/* Rincian 9 Unsur Pelayanan Table */}
      <Card className="border-border bg-card text-card-foreground shadow-xs overflow-hidden">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <h2 className="text-sm font-bold text-foreground">
            Rekapitulasi Nilai 9 Unsur Pelayanan (Bobot Masing-masing 0.111)
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-secondary text-secondary-foreground font-bold uppercase tracking-wider text-[11px] border-b border-border">
              <tr>
                <th className="py-3 px-4">Kode</th>
                <th className="py-3 px-4">Unsur Pelayanan</th>
                <th className="py-3 px-4 text-center">Bobot</th>
                <th className="py-3 px-4 text-center">Rata-rata Skor (1-4)</th>
                <th className="py-3 px-4 text-center">Nilai Tertimbang</th>
                <th className="py-3 px-4 text-center">Mutu Unsur</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {mockSurveyQuestions.map((q) => {
                const weighted = ((q.scoreAvg || 3.5) * 0.111).toFixed(3);
                return (
                  <tr key={q.code} className="hover:bg-muted/40 transition-colors">
                    <td className="py-3 px-4 font-mono font-bold text-primary">{q.code}</td>
                    <td className="py-3 px-4 font-medium text-card-foreground">{q.title}</td>
                    <td className="py-3 px-4 text-center text-muted-foreground">0.111</td>
                    <td className="py-3 px-4 text-center font-bold text-card-foreground">{q.scoreAvg}</td>
                    <td className="py-3 px-4 text-center font-mono text-muted-foreground">{weighted}</td>
                    <td className="py-3 px-4 text-center">
                      <Badge className="bg-emerald-100 text-emerald-800 text-[10px]">A (Sangat Baik)</Badge>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Tabel Sampel Data Responden Masuk */}
      <Card className="border-border bg-card text-card-foreground shadow-xs overflow-hidden">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <h2 className="text-sm font-bold text-foreground">
            Data Responden Survei Terbaru Masuk
          </h2>
          <span className="text-xs text-muted-foreground">Menampilkan 4 data sampel terkini</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-secondary text-secondary-foreground font-bold uppercase tracking-wider text-[11px] border-b border-border">
              <tr>
                <th className="py-3 px-4">Nama Responden</th>
                <th className="py-3 px-4">Profesi / Jabatan</th>
                <th className="py-3 px-4">Layanan Diterima</th>
                <th className="py-3 px-4 text-center">Rata-rata Skor</th>
                <th className="py-3 px-4">Saran & Masukan</th>
                <th className="py-3 px-4 text-center">Waktu Masuk</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {mockSurveyResponses.map((r) => (
                <tr key={r.id} className="hover:bg-muted/40 transition-colors">
                  <td className="py-3 px-4 font-bold text-card-foreground">{r.respondentName}</td>
                  <td className="py-3 px-4 text-card-foreground">{r.occupation} ({r.education})</td>
                  <td className="py-3 px-4 text-muted-foreground text-[11px]">{r.serviceReceived}</td>
                  <td className="py-3 px-4 text-center font-bold text-primary">{r.scoreAvg}</td>
                  <td className="py-3 px-4 text-muted-foreground max-w-xs truncate">{r.suggestions || "-"}</td>
                  <td className="py-3 px-4 text-center text-muted-foreground">
                    {new Date(r.createdAt).toLocaleDateString("id-ID", { day: "numeric", month: "short" })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
