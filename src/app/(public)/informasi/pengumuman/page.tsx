"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Megaphone, Download, Calendar, FileText, ArrowRight, Search } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { mockAnnouncements } from "@/data/mock/mock-announcements";

export default function PengumumanPage() {
  const [search, setSearch] = useState("");

  const filtered = mockAnnouncements.filter((ann) =>
    ann.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleDownload = (fileName: string) => {
    toast.success(`Mengunduh dokumen: ${fileName}`);
  };

  return (
    <div className="py-12 max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
      {/* Header */}
      <div className="space-y-2 border-b border-border/80 pb-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
          Pengumuman & Surat Edaran Resmi
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Daftar instruksi, edaran kedinasan, dan pengumuman seleksi dari BGTK Provinsi Sumatera Selatan
        </p>
      </div>

      {/* Search Input */}
      <div className="max-w-md relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Cari surat edaran atau nomor pengumuman..."
          className="pl-9 bg-card text-card-foreground border-border"
        />
      </div>

      {/* List Pengumuman */}
      <div className="space-y-4">
        {filtered.map((ann) => (
          <Card key={ann.id} className="p-5 border-border bg-card text-card-foreground hover:border-primary transition-colors shadow-xs">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-2 max-w-3xl">
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    Diterbitkan: {new Date(ann.createdAt).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
                  </span>
                  {ann.validUntil && (
                    <>
                      <span>•</span>
                      <span className="text-primary font-medium">Batas Waktu: {ann.validUntil}</span>
                    </>
                  )}
                </div>

                <h3 className="font-bold text-card-foreground text-base leading-snug hover:text-primary transition-colors">
                  <Link href={`/informasi/pengumuman/${ann.slug}`}>
                    {ann.title}
                  </Link>
                </h3>

                <div
                  className="text-xs text-muted-foreground line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: ann.contentHtml }}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex sm:flex-col items-center gap-2 shrink-0 w-full sm:w-auto">
                {ann.attachmentUrl && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDownload(ann.attachmentName || "Dokumen.pdf")}
                    className="w-full sm:w-auto text-xs bg-secondary text-secondary-foreground border-border hover:bg-muted"
                  >
                    <Download className="w-3.5 h-3.5 mr-1" /> Unduh ({ann.fileSize})
                  </Button>
                )}
                <Button
                  asChild
                  size="sm"
                  className="w-full sm:w-auto text-xs bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                >
                  <Link href={`/informasi/pengumuman/${ann.slug}`}>
                    Detail Info
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
