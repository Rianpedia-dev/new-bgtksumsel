"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Download, FileText, Megaphone } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { mockAnnouncements } from "@/data/mock/mock-announcements";

export default function DetailPengumumanPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const ann = mockAnnouncements.find((a) => a.slug === resolvedParams.slug);

  if (!ann) {
    notFound();
  }

  const handleDownload = () => {
    toast.success(`Mengunduh dokumen: ${ann.attachmentName}`);
  };

  return (
    <div className="py-12 max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
      {/* Back Button */}
      <Link
        href="/informasi/pengumuman"
        className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline font-medium"
      >
        <ArrowLeft className="w-3.5 h-3.5" /> Kembali ke Daftar Pengumuman
      </Link>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          {ann.isPinned && (
            <Badge className="bg-primary text-primary-foreground font-bold text-xs">PENTING</Badge>
          )}
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            Diterbitkan: {new Date(ann.createdAt).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
          </span>
          {ann.validUntil && (
            <span className="text-xs text-primary bg-primary/15 px-2 py-0.5 rounded font-medium">
              Berlaku hingga: {ann.validUntil}
            </span>
          )}
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight">
          {ann.title}
        </h1>
      </div>

      {/* Konten Pengumuman */}
      <Card className="p-6 border-border bg-card text-card-foreground shadow-xs">
        <div
          className="prose prose-slate max-w-none text-card-foreground text-sm sm:text-base leading-relaxed space-y-4"
          dangerouslySetInnerHTML={{ __html: ann.contentHtml }}
        />

        {/* Lampiran File PDF */}
        {ann.attachmentUrl && (
          <div className="mt-8 p-4 rounded-xl bg-secondary text-secondary-foreground border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-secondary-foreground text-xs sm:text-sm">{ann.attachmentName}</h4>
                <p className="text-[11px] text-muted-foreground">Dokumen Resmi Lampiran ({ann.fileSize})</p>
              </div>
            </div>

            <Button
              size="sm"
              onClick={handleDownload}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs shadow-xs"
            >
              <Download className="w-3.5 h-3.5 mr-1.5" /> Unduh Lampiran PDF
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}
