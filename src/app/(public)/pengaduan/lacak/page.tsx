"use client";

import React, { useState } from "react";
import {
  Search,
  CheckCircle2,
  Clock,
  ShieldCheck,
  FileText,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { mockComplaints } from "@/data/mock/mock-complaints";
import { Complaint, ComplaintStatus } from "@/types";

export default function LacakPengaduanPage() {
  const [ticketInput, setTicketInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [searchedComplaint, setSearchedComplaint] = useState<Complaint | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);

    const found = mockComplaints.find(
      (c) => c.ticketNumber.toLowerCase() === ticketInput.trim().toLowerCase()
    );

    if (found) {
      setSearchedComplaint(found);
      toast.success(`Tiket ${found.ticketNumber} ditemukan.`);
    } else {
      setSearchedComplaint(null);
      toast.error("Nomor tiket tidak ditemukan dalam sistem.");
    }
  };

  const handleQuickLookup = (ticketNo: string) => {
    setTicketInput(ticketNo);
    const found = mockComplaints.find((c) => c.ticketNumber === ticketNo);
    if (found) {
      setSearchedComplaint(found);
      setHasSearched(true);
      toast.info(`Memuat tiket demo: ${ticketNo}`);
    }
  };

  const getStatusBadge = (status: ComplaintStatus) => {
    switch (status) {
      case "SUBMITTED":
        return <Badge className="bg-muted text-foreground text-xs border border-border">Baru Diterima</Badge>;
      case "VERIFIED":
        return <Badge className="bg-primary text-primary-foreground text-xs">Terverifikasi</Badge>;
      case "IN_PROGRESS":
        return <Badge className="bg-amber-500 text-slate-950 font-bold text-xs">Sedang Diproses</Badge>;
      case "RESOLVED":
        return <Badge className="bg-emerald-600 text-white text-xs">Selesai Ditindaklanjuti</Badge>;
      case "REJECTED":
        return <Badge variant="destructive" className="text-xs">Ditolak</Badge>;
    }
  };

  // Helper untuk stepper visual
  const getStepActive = (status: ComplaintStatus, stepIndex: number) => {
    const order: Record<ComplaintStatus, number> = {
      SUBMITTED: 1,
      VERIFIED: 2,
      IN_PROGRESS: 3,
      RESOLVED: 4,
      REJECTED: 4,
    };
    return order[status] >= stepIndex;
  };

  return (
    <div className="py-12 max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
      {/* Header */}
      <div className="space-y-2 border-b border-border/80 pb-6 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
          Pelacakan Status Pengaduan Publik
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Masukkan nomor tiket aduan Anda untuk mengetahui tahapan investigasi dan tanggapan resmi dari BGTK Sumsel
        </p>
      </div>

      {/* Form Input Pencarian Tiket */}
      <Card className="p-6 border-border bg-card text-card-foreground shadow-xs">
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-card-foreground">Nomor Tiket Pengaduan *</label>
              <Input
                required
                value={ticketInput}
                onChange={(e) => setTicketInput(e.target.value)}
                placeholder="Contoh: BGTK-2026-001"
                className="bg-secondary text-secondary-foreground border-border font-mono uppercase"
              />
              <p className="text-[11px] text-muted-foreground">
                Nomor simulasi:{" "}
                <button
                  type="button"
                  onClick={() => handleQuickLookup("BGTK-2026-001")}
                  className="underline font-mono text-primary hover:text-primary/80"
                >
                  BGTK-2026-001
                </button>
                {" atau "}
                <button
                  type="button"
                  onClick={() => handleQuickLookup("BGTK-2026-002")}
                  className="underline font-mono text-primary hover:text-primary/80"
                >
                  BGTK-2026-002
                </button>
              </p>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-card-foreground">No. WhatsApp / HP Terdaftar (Opsional)</label>
              <Input
                value={phoneInput}
                onChange={(e) => setPhoneInput(e.target.value)}
                placeholder="081234567890"
                className="bg-secondary text-secondary-foreground border-border"
              />
            </div>
          </div>

          <Button
            type="submit"
            variant="gradientVariant"
            className="w-full sm:w-auto font-semibold text-xs px-6 shadow-md"
          >
            <Search className="w-3.5 h-3.5 mr-1.5" /> Cari Data Tiket
          </Button>
        </form>
      </Card>

      {/* Hasil Pelacakan Tiket */}
      {hasSearched && (
        <>
          {searchedComplaint ? (
            <div className="space-y-6">
              {/* Card Informasi Tiket */}
              <Card className="p-6 border-border shadow-md bg-card text-card-foreground space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-border">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-muted-foreground">
                        {searchedComplaint.ticketNumber}
                      </span>
                      {getStatusBadge(searchedComplaint.status)}
                    </div>
                    <h2 className="text-lg font-bold text-card-foreground mt-1">
                      {searchedComplaint.title}
                    </h2>
                  </div>

                  <span className="text-xs text-muted-foreground">
                    Masuk: {new Date(searchedComplaint.createdAt).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
                  </span>
                </div>

                {/* Stepper Timeline Visual */}
                <div className="py-2">
                  <div className="grid grid-cols-4 gap-2 text-center">
                    {[
                      { step: 1, label: "Terkirim" },
                      { step: 2, label: "Verifikasi" },
                      { step: 3, label: "Diproses" },
                      { step: 4, label: searchedComplaint.status === "REJECTED" ? "Ditolak" : "Selesai" },
                    ].map((st) => {
                      const isActive = getStepActive(searchedComplaint.status, st.step);
                      return (
                        <div key={st.step} className="space-y-2">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto text-xs font-bold transition-colors ${
                              isActive
                                ? "bg-primary text-primary-foreground shadow"
                                : "bg-secondary text-muted-foreground border border-border"
                            }`}
                          >
                            {st.step}
                          </div>
                          <span
                            className={`text-xs block font-semibold ${
                              isActive ? "text-card-foreground" : "text-muted-foreground"
                            }`}
                          >
                            {st.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Kronologi & Data Laporan */}
                <div className="p-4 rounded-xl bg-secondary text-secondary-foreground border border-border space-y-2 text-xs">
                  <div className="font-semibold text-secondary-foreground">Uraian Masalah:</div>
                  <p className="leading-relaxed">{searchedComplaint.description}</p>
                  <div className="pt-2 text-muted-foreground flex flex-wrap gap-4 border-t border-border mt-2">
                    <span>Pelapor: {searchedComplaint.isAnonymous ? "Anonim (Dirahasiakan)" : searchedComplaint.reporterName}</span>
                    <span>Instansi: {searchedComplaint.reporterAgency || "-"}</span>
                    <span>Unit: {searchedComplaint.reportedEntity || "-"}</span>
                  </div>
                </div>

                {/* Tanggapan Resmi BGTK */}
                {searchedComplaint.officialReply ? (
                  <div className="p-5 rounded-xl bg-secondary text-secondary-foreground border border-border space-y-2">
                    <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wide">
                      <ShieldCheck className="w-4 h-4 text-primary" /> Tanggapan Resmi BGTK Sumatera Selatan:
                    </div>
                    <p className="text-xs sm:text-sm text-secondary-foreground leading-relaxed font-medium">
                      "{searchedComplaint.officialReply}"
                    </p>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-secondary text-secondary-foreground border border-border text-xs flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary shrink-0" />
                    Laporan sedang dalam penanganan tim teknis BGTK. Tanggapan resmi akan segera diperbarui.
                  </div>
                )}

                {/* Riwayat Log Aktivitas Tiket */}
                <div className="space-y-3 pt-2">
                  <h3 className="font-bold text-card-foreground text-xs uppercase tracking-wide">
                    Riwayat Progres Tiket:
                  </h3>
                  <div className="space-y-2">
                    {searchedComplaint.logs.map((log) => (
                      <div key={log.id} className="p-3 rounded-lg border border-border bg-secondary text-secondary-foreground flex items-start gap-3 text-xs">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <div className="flex-1 space-y-0.5">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-secondary-foreground">{log.status}</span>
                            <span className="text-[11px] text-muted-foreground">
                              {new Date(log.createdAt).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                            </span>
                          </div>
                          <p className="text-muted-foreground">{log.comment}</p>
                          <span className="text-[10px] text-muted-foreground block">Petugas: {log.changedByName || "Sistem"}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ) : (
            <Card className="p-8 text-center border-dashed border-border bg-card text-card-foreground">
              <AlertCircle className="w-8 h-8 text-amber-500 mx-auto mb-2" />
              <h3 className="font-bold text-card-foreground text-sm">Tiket Tidak Ditemukan</h3>
              <p className="text-xs text-muted-foreground mt-1 max-w-sm mx-auto">
                Pastikan format nomor tiket Anda sudah benar (contoh: <code>BGTK-2026-001</code>).
              </p>
            </Card>
          )}
        </>
      )}
    </div>
  );
}
