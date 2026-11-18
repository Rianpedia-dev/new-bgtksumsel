"use client";

import React, { use, useState } from "react";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  FileText,
  ShieldCheck,
  Send,
  Save,
  MessageSquare,
  Lock,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { mockComplaints } from "@/data/mock/mock-complaints";
import { ComplaintStatus } from "@/types";

export default function DetailProsesPengaduanPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const router = useRouter();

  const originalComplaint = mockComplaints.find((c) => c.id === resolvedParams.id);
  if (!originalComplaint) {
    notFound();
  }

  const [status, setStatus] = useState<ComplaintStatus>(originalComplaint.status);
  const [adminNotes, setAdminNotes] = useState(originalComplaint.adminNotes || "");
  const [officialReply, setOfficialReply] = useState(originalComplaint.officialReply || "");

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Tiket ${originalComplaint.ticketNumber} berhasil diperbarui dengan status: ${status}`);
    router.push("/admin/pengaduan");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header & Back */}
      <div className="flex items-center justify-between pb-4 border-b border-border">
        <div className="flex items-center gap-3">
          <Button asChild variant="outline" size="sm" className="h-8 border-border bg-card text-card-foreground hover:bg-muted">
            <Link href="/admin/pengaduan">
              <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Kembali ke Antrean
            </Link>
          </Button>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold text-foreground">
                Tiket {originalComplaint.ticketNumber}
              </h1>
              <Badge variant="outline" className="text-xs border-border text-foreground">
                {originalComplaint.type}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              Masuk: {new Date(originalComplaint.createdAt).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Kolom Kiri: Detail Laporan Pelapor */}
        <div className="md:col-span-7 space-y-5">
          <Card className="p-5 border-border shadow-xs space-y-3 bg-card text-card-foreground">
            <h2 className="text-sm font-bold text-foreground border-b border-border pb-2">
              Data & Uraian Pengaduan
            </h2>

            <div className="space-y-2 text-xs">
              <div>
                <span className="text-muted-foreground block">Judul Laporan:</span>
                <span className="font-bold text-card-foreground text-sm">{originalComplaint.title}</span>
              </div>

              <div>
                <span className="text-muted-foreground block">Kronologi Kejadian:</span>
                <p className="text-secondary-foreground leading-relaxed bg-secondary p-3 rounded-lg border border-border mt-1">
                  {originalComplaint.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <div>
                  <span className="text-muted-foreground block">Tempat / Lokasi:</span>
                  <span className="font-semibold text-card-foreground">{originalComplaint.incidentLocation || "-"}</span>
                </div>
                <div>
                  <span className="text-muted-foreground block">Unit Terlapor:</span>
                  <span className="font-semibold text-card-foreground">{originalComplaint.reportedEntity || "-"}</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Identitas Pelapor */}
          <Card className="p-5 border-border shadow-xs space-y-2 bg-card text-card-foreground">
            <h3 className="text-xs font-bold text-foreground flex items-center gap-1.5 uppercase tracking-wider text-muted-foreground">
              <Lock className="w-3.5 h-3.5" /> Identitas Pelapor
            </h3>
            <div className="text-xs space-y-1 text-card-foreground">
              <p>Nama: <strong>{originalComplaint.isAnonymous ? "Anonim (Dirahasiakan)" : originalComplaint.reporterName}</strong></p>
              <p>Email: <strong>{originalComplaint.reporterEmail}</strong></p>
              <p>No. WhatsApp: <strong>{originalComplaint.reporterPhone}</strong></p>
              <p>Instansi: <strong>{originalComplaint.reporterAgency || "-"}</strong></p>
            </div>
          </Card>
        </div>

        {/* Kolom Kanan: Form Tindak Lanjut Verifikator */}
        <div className="md:col-span-5 space-y-5">
          <Card className="p-5 border-border shadow-sm bg-card text-card-foreground space-y-4">
            <h2 className="text-sm font-bold text-foreground border-b border-border pb-2">
              Formulir Tindak Lanjut Verifikator
            </h2>

            <form onSubmit={handleUpdate} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-card-foreground">Update Status Tiket *</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as ComplaintStatus)}
                  className="w-full text-xs p-2 rounded-md border border-border bg-secondary text-secondary-foreground font-semibold"
                >
                  <option value="SUBMITTED">SUBMITTED (Baru Masuk)</option>
                  <option value="VERIFIED">VERIFIED (Terverifikasi Valid)</option>
                  <option value="IN_PROGRESS">IN_PROGRESS (Sedang Ditangani Unit)</option>
                  <option value="RESOLVED">RESOLVED (Selesai Ditindaklanjuti)</option>
                  <option value="REJECTED">REJECTED (Ditolak / Bukti Tidak Cukup)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-card-foreground">Catatan Internal Verifikator (Rahasia)</label>
                <Textarea
                  rows={3}
                  value={adminNotes}
                  onChange={(e) => setAdminNotes(e.target.value)}
                  placeholder="Hanya dapat dibaca oleh tim internal BGTK..."
                  className="bg-secondary text-secondary-foreground border-border text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-card-foreground">Tanggapan Resmi (Muncul di Cek Tiket Pelapor) *</label>
                <Textarea
                  required
                  rows={4}
                  value={officialReply}
                  onChange={(e) => setOfficialReply(e.target.value)}
                  placeholder="Tuliskan jawaban resmi kepada pelapor secara santun dan solutif..."
                  className="bg-secondary text-secondary-foreground border-border text-xs leading-relaxed"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs py-2 shadow-xs"
              >
                <Save className="w-3.5 h-3.5 mr-1.5" /> Simpan Perubahan & Kirim Balasan
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
