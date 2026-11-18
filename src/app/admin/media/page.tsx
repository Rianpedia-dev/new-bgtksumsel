"use client";

import React, { useState } from "react";
import {
  Image as ImageIcon,
  Upload,
  Copy,
  Trash2,
  ExternalLink,
  Folder,
  FileText,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const initialMedia = [
  {
    id: "med-1",
    name: "cover-lokakarya-2026.jpg",
    url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    size: "1.2 MB",
    dimension: "1200 x 800",
    uploadedAt: "2026-03-12",
  },
  {
    id: "med-2",
    name: "zona-integritas-wbk.jpg",
    url: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
    size: "850 KB",
    dimension: "1200 x 800",
    uploadedAt: "2026-03-05",
  },
  {
    id: "med-3",
    name: "praktik-baik-guru.jpg",
    url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80",
    size: "920 KB",
    dimension: "1200 x 800",
    uploadedAt: "2026-02-28",
  },
  {
    id: "med-4",
    name: "bimtek-ai-pendidikan.jpg",
    url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    size: "1.4 MB",
    dimension: "1200 x 800",
    uploadedAt: "2026-02-20",
  },
  {
    id: "med-5",
    name: "kepala-balai-official.jpg",
    url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    size: "450 KB",
    dimension: "600 x 600",
    uploadedAt: "2026-01-15",
  },
];

export default function AdminMediaPage() {
  const [mediaList, setMediaList] = useState(initialMedia);

  const handleCopyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    toast.success("URL media berhasil disalin ke clipboard!");
  };

  const handleUploadSimulate = () => {
    toast.success("Unggah media berhasil diproses dan dikompresi ke WebP.");
  };

  const handleDelete = (id: string) => {
    if (confirm("Hapus file media ini?")) {
      setMediaList(mediaList.filter((m) => m.id !== id));
      toast.success("File media berhasil dihapus.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-foreground tracking-tight">
            Manajemen Media dan Dokumen
          </h1>
          <p className="text-xs text-muted-foreground">
            Penyimpanan aset grafis, foto berita, banner, dan berkas lampiran
          </p>
        </div>

        <Button
          onClick={handleUploadSimulate}
          size="sm"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs shadow-xs"
        >
          <Upload className="w-3.5 h-3.5 mr-1" /> Unggah Berkas Baru
        </Button>
      </div>

      {/* Upload Dropzone Area */}
      <div
        onClick={handleUploadSimulate}
        className="p-8 rounded-2xl border-2 border-dashed border-border bg-card text-card-foreground hover:bg-muted/40 transition-colors text-center cursor-pointer shadow-xs"
      >
        <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-2" />
        <h3 className="font-bold text-sm text-foreground">
          Tarik & Letakkan Gambar atau Berkas di Sini
        </h3>
        <p className="text-xs text-muted-foreground mt-1">
          Otomatis dikompresi ke format WebP/AVIF untuk performa cepat (Maks. 5 MB)
        </p>
      </div>

      {/* Grid Media Items */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {mediaList.map((m) => (
          <Card key={m.id} className="overflow-hidden border-border bg-card text-card-foreground shadow-xs group flex flex-col justify-between">
            <div className="relative h-32 bg-muted overflow-hidden">
              <img src={m.url} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            </div>

            <div className="p-3 space-y-1">
              <p className="text-xs font-bold text-card-foreground truncate" title={m.name}>
                {m.name}
              </p>
              <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                <span>{m.size}</span>
                <span>{m.dimension}</span>
              </div>
            </div>

            <div className="p-2 border-t border-border flex items-center justify-between bg-secondary text-secondary-foreground">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleCopyUrl(m.url)}
                className="h-6 text-[10px] px-2 text-primary hover:bg-muted"
              >
                <Copy className="w-3 h-3 mr-1" /> Salin URL
              </Button>
              <button
                onClick={() => handleDelete(m.id)}
                className="text-muted-foreground hover:text-destructive p-1 rounded transition-colors"
                title="Hapus"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
