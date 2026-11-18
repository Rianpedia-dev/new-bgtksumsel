"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Inbox,
  Search,
  Filter,
  ShieldAlert,
  Clock,
  ArrowRight,
  Eye,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { mockComplaints } from "@/data/mock/mock-complaints";
import { Complaint, ComplaintStatus } from "@/types";

export default function AdminPengaduanPage() {
  const [complaints, setComplaints] = useState<Complaint[]>(mockComplaints);
  const [statusFilter, setStatusFilter] = useState<string>("ALL");
  const [search, setSearch] = useState("");

  const filtered = complaints.filter((c) => {
    let matchStatus = true;
    if (statusFilter === "PENDING") {
      matchStatus = c.status !== "RESOLVED";
    } else if (statusFilter === "RESOLVED") {
      matchStatus = c.status === "RESOLVED";
    }
    const matchSearch =
      c.ticketNumber.toLowerCase().includes(search.toLowerCase()) ||
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.reporterName.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  const getStatusBadge = (status: ComplaintStatus) => {
    switch (status) {
      case "SUBMITTED":
        return <Badge className="bg-muted text-foreground text-[10px] border border-border">Baru Masuk</Badge>;
      case "VERIFIED":
        return <Badge className="bg-primary text-primary-foreground text-[10px]">Diverifikasi</Badge>;
      case "IN_PROGRESS":
        return <Badge className="bg-amber-500 text-slate-950 font-bold text-[10px]">Diproses</Badge>;
      case "RESOLVED":
        return <Badge className="bg-emerald-600 text-white text-[10px]">Selesai</Badge>;
      case "REJECTED":
        return <Badge variant="destructive" className="text-[10px]">Ditolak</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-foreground tracking-tight">
            Manajemen Pengaduan & WBS
          </h1>
          <p className="text-xs text-muted-foreground">
            Verifikasi laporan masyarakat, koordinasi tindak lanjut, dan kirim tanggapan resmi
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-card text-card-foreground p-4 rounded-xl border border-border shadow-xs">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari nomor tiket, nama pelapor, judul..."
            className="pl-9 bg-secondary text-secondary-foreground border-border text-xs"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {[
            { id: "ALL", label: "Semua Tiket", count: complaints.length },
            { id: "PENDING", label: "Perlu Tindak Lanjut", count: complaints.filter(c => c.status !== "RESOLVED").length },
            { id: "RESOLVED", label: "Selesai", count: complaints.filter(c => c.status === "RESOLVED").length },
          ].map((tab) => (
            <Button
              key={tab.id}
              size="sm"
              variant={statusFilter === tab.id ? "default" : "outline"}
              onClick={() => setStatusFilter(tab.id)}
              className={`text-xs h-8 ${statusFilter === tab.id ? "bg-primary text-primary-foreground font-semibold shadow-xs" : "border-border bg-secondary text-secondary-foreground hover:bg-muted"}`}
            >
              {tab.label} ({tab.count})
            </Button>
          ))}
        </div>
      </div>

      {/* Tabel Tiket Pengaduan */}
      <Card className="border-border bg-card text-card-foreground shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-secondary text-secondary-foreground font-bold uppercase tracking-wider text-[11px] border-b border-border">
              <tr>
                <th className="py-3 px-4">No. Tiket</th>
                <th className="py-3 px-4">Judul Aduan & Kronologi</th>
                <th className="py-3 px-4">Jenis Laporan</th>
                <th className="py-3 px-4">Pelapor</th>
                <th className="py-3 px-4 text-center">Status</th>
                <th className="py-3 px-4 text-center">Tanggal Masuk</th>
                <th className="py-3 px-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filtered.map((c) => (
                <tr key={c.id} className="hover:bg-muted/40 transition-colors">
                  <td className="py-3.5 px-4 font-mono font-bold text-primary whitespace-nowrap">
                    {c.ticketNumber}
                  </td>
                  <td className="py-3.5 px-4 max-w-sm">
                    <div className="font-bold text-card-foreground leading-snug line-clamp-1">{c.title}</div>
                    <p className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5">{c.description}</p>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    {c.type === "INTERNAL_WHISTLEBLOW" ? (
                      <Badge className="bg-destructive/15 text-destructive text-[10px] border border-destructive/30">
                        <ShieldAlert className="w-3 h-3 mr-1 inline" /> Whistleblowing
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="text-[10px] bg-secondary text-secondary-foreground border border-border">Pelayanan Publik</Badge>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-card-foreground whitespace-nowrap">
                    {c.isAnonymous ? (
                      <span className="italic text-muted-foreground">Anonim (Dirahasiakan)</span>
                    ) : (
                      <div>
                        <div className="font-semibold text-card-foreground">{c.reporterName}</div>
                        <div className="text-[10px] text-muted-foreground">{c.reporterAgency || c.reporterPhone}</div>
                      </div>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-center whitespace-nowrap">
                    {getStatusBadge(c.status)}
                  </td>
                  <td className="py-3.5 px-4 text-center text-muted-foreground whitespace-nowrap">
                    {new Date(c.createdAt).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}
                  </td>
                  <td className="py-3.5 px-4 text-right whitespace-nowrap">
                    <Button asChild size="sm" className="h-7 text-xs bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-xs">
                      <Link href={`/admin/pengaduan/${c.id}`}>
                        Buka & Tindak Lanjut →
                      </Link>
                    </Button>
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
