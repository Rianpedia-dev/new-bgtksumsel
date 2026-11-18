"use client";

import React from "react";
import Link from "next/link";
import {
  Users,
  Newspaper,
  Inbox,
  Star,
  TrendingUp,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockPosts } from "@/data/mock/mock-posts";
import { mockComplaints } from "@/data/mock/mock-complaints";
import { mockIkmSummary } from "@/data/mock/mock-survey";
import { mockAuditLogs } from "@/data/mock/mock-users";

export default function AdminDashboardPage() {
  const pendingComplaints = mockComplaints.filter((c) => c.status !== "RESOLVED");

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-[#0F2C59] via-[#143B66] to-[#1E507A] text-white p-6 rounded-2xl shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
            Selamat Datang, Tim Administrator BGTK Sumsel
          </h1>
          <p className="text-xs text-slate-200 mt-1">
            Pantau statistik operasional, permohonan layanan, dan tindak lanjut aduan masyarakat secara real-time.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs shadow-xs">
            <Link href="/admin/posts/create">
              + Tulis Berita Baru
            </Link>
          </Button>
          <Button asChild size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-xs">
            <Link href="/" target="_blank">
              Lihat Portal Publik ↗
            </Link>
          </Button>
        </div>
      </div>

      {/* 4 KPI Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* KPI 1 */}
        <Card className="p-5 border-border shadow-xs bg-card text-card-foreground">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-muted-foreground">Kunjungan Bulan Ini</span>
            <div className="w-9 h-9 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-black text-foreground">28.450</div>
            <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold mt-1">
              <TrendingUp className="w-3.5 h-3.5" /> +14.2% dari bulan lalu
            </div>
          </div>
        </Card>

        {/* KPI 2 */}
        <Card className="p-5 border-border shadow-xs bg-card text-card-foreground">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-muted-foreground">Total Artikel & Info</span>
            <div className="w-9 h-9 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
              <Newspaper className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-black text-foreground">34</div>
            <div className="text-[11px] text-muted-foreground mt-1">
              {mockPosts.length} Berita • 4 Pengumuman
            </div>
          </div>
        </Card>

        {/* KPI 3 */}
        <Card className="p-5 border-border shadow-xs bg-card text-card-foreground">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-muted-foreground">Tiket Butuh Tindak Lanjut</span>
            <div className="w-9 h-9 rounded-lg bg-destructive/15 text-destructive flex items-center justify-center">
              <Inbox className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-black text-destructive">{pendingComplaints.length} Tiket</div>
            <div className="text-[11px] text-amber-600 font-medium mt-1">
              1 Menunggu verifikasi berkas
            </div>
          </div>
        </Card>

        {/* KPI 4 */}
        <Card className="p-5 border-border shadow-xs bg-card text-card-foreground">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-muted-foreground">Indeks Kepuasan (IKM)</span>
            <div className="w-9 h-9 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
              <Star className="w-5 h-5 fill-primary text-primary" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-black text-primary">{mockIkmSummary.ikmScore}</div>
            <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold mt-1">
              Mutu {mockIkmSummary.grade} ({mockIkmSummary.serviceQuality})
            </div>
          </div>
        </Card>
      </div>

      {/* Grid: Antrean Pengaduan & Breakdown IKM */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Antrean Pengaduan */}
        <Card className="lg:col-span-7 border-border bg-card text-card-foreground shadow-xs">
          <div className="p-5 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Inbox className="w-4 h-4 text-destructive" />
              <h2 className="font-bold text-foreground text-sm">
                Antrean Tiket Pengaduan Butuh Tindak Lanjut
              </h2>
            </div>
            <Button asChild variant="ghost" size="sm" className="text-xs text-primary">
              <Link href="/admin/pengaduan">Lihat Semua →</Link>
            </Button>
          </div>

          <div className="p-5 space-y-3">
            {pendingComplaints.slice(0, 3).map((c) => (
              <div
                key={c.id}
                className="p-3.5 rounded-xl border border-border hover:border-primary transition-colors flex items-center justify-between gap-3 bg-secondary text-secondary-foreground"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-primary">{c.ticketNumber}</span>
                    <Badge variant="outline" className="text-[10px] border-border text-foreground">{c.status}</Badge>
                  </div>
                  <h4 className="font-bold text-xs text-secondary-foreground line-clamp-1">{c.title}</h4>
                  <p className="text-[11px] text-muted-foreground">Pelapor: {c.isAnonymous ? "Anonim" : c.reporterName}</p>
                </div>

                <Button asChild size="sm" className="h-7 text-xs bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shrink-0">
                  <Link href={`/admin/pengaduan/${c.id}`}>Proses</Link>
                </Button>
              </div>
            ))}
          </div>
        </Card>

        {/* Skor Ringkasan SKM */}
        <Card className="lg:col-span-5 border-border bg-card text-card-foreground shadow-xs flex flex-col justify-between">
          <div className="p-5 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <h2 className="font-bold text-foreground text-sm">
                Indeks Kepuasan Masyarakat
              </h2>
            </div>
            <Link href="/admin/survei" className="text-xs text-primary hover:underline">
              Lihat Laporan SKM →
            </Link>
          </div>

          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-primary/10 border border-primary/20">
              <div>
                <span className="text-xs font-semibold text-muted-foreground block">Nilai Konversi IKM</span>
                <span className="text-3xl font-black text-primary">{mockIkmSummary.ikmScore}</span>
                <span className="text-xs text-muted-foreground"> / 100</span>
              </div>
              <div className="text-right">
                <Badge className="bg-emerald-600 hover:bg-emerald-600 text-white font-bold text-xs px-2.5 py-1">
                  Mutu {mockIkmSummary.grade} ({mockIkmSummary.serviceQuality})
                </Badge>
                <span className="block text-[11px] text-muted-foreground mt-1">Total {mockIkmSummary.totalRespondents} Responden</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-secondary border border-border">
                <span className="text-muted-foreground block text-[11px]">Unsur Tertinggi</span>
                <span className="font-bold text-foreground block truncate mt-0.5">U5. Kompetensi Petugas</span>
                <span className="text-emerald-600 font-bold text-xs">3.88 / 4.0</span>
              </div>
              <div className="p-3 rounded-lg bg-secondary border border-border">
                <span className="text-muted-foreground block text-[11px]">Waktu Layanan</span>
                <span className="font-bold text-foreground block truncate mt-0.5">U3. Kecepatan Waktu</span>
                <span className="text-primary font-bold text-xs">3.72 / 4.0</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Audit Log Aktivitas Terbaru */}
      <Card className="border-border bg-card text-card-foreground shadow-xs">
        <div className="p-5 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <h2 className="font-bold text-foreground text-sm">
              Log Aktivitas & Audit Trail Sistem
            </h2>
          </div>
          <Link href="/admin/pengaturan" className="text-xs text-primary hover:underline">
            Semua Log
          </Link>
        </div>

        <div className="divide-y divide-border">
          {mockAuditLogs.map((log) => (
            <div key={log.id} className="p-4 flex items-start justify-between gap-4 text-xs hover:bg-muted/30 transition-colors">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-foreground">{log.userName}</span>
                  <Badge variant="secondary" className="text-[10px] font-mono bg-secondary text-secondary-foreground border border-border">{log.action}</Badge>
                  <span className="text-muted-foreground text-[11px]">• IP: {log.ipAddress}</span>
                </div>
                <p className="text-muted-foreground">{log.details}</p>
              </div>

              <span className="text-[11px] text-muted-foreground whitespace-nowrap">
                {new Date(log.createdAt).toLocaleDateString("id-ID", { hour: "2-digit", minute: "2-digit", day: "numeric", month: "short" })}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
