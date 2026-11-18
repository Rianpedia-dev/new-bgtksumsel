"use client";

import React, { useState, useMemo } from "react";
import {
  FileText,
  Download,
  Eye,
  Search,
  Filter,
  ShieldCheck,
  Calendar,
  Building,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { mockAccountabilityDocs } from "@/data/mock/mock-accountability";
import { AccountabilityCategory, AccountabilityDocument } from "@/types";

export default function AkuntabilitasPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [selectedYear, setSelectedYear] = useState<string>("ALL");
  const [previewDoc, setPreviewDoc] = useState<AccountabilityDocument | null>(null);

  const filteredDocs = useMemo(() => {
    return mockAccountabilityDocs.filter((doc) => {
      const matchSearch =
        doc.title.toLowerCase().includes(search.toLowerCase()) ||
        (doc.description && doc.description.toLowerCase().includes(search.toLowerCase()));
      const matchCat = selectedCategory === "ALL" || doc.category === selectedCategory;
      const matchYear = selectedYear === "ALL" || doc.year.toString() === selectedYear;
      return matchSearch && matchCat && matchYear;
    });
  }, [search, selectedCategory, selectedYear]);

  const handleDownload = (doc: AccountabilityDocument) => {
    toast.success(`Mengunduh dokumen: ${doc.fileName}`);
  };

  const getCategoryBadge = (cat: AccountabilityCategory) => {
    switch (cat) {
      case "PERJANJIAN_KINERJA":
        return <span className="text-[11px] font-medium text-primary">Perjanjian Kinerja (PK)</span>;
      case "LAPORAN_KINERJA_LAKIP":
        return <span className="text-[11px] font-medium text-foreground">LAKIP / LKjIP</span>;
      case "LAPORAN_KEUANGAN":
        return <span className="text-[11px] font-medium text-muted-foreground">Keuangan (DIPA/CALK)</span>;
      case "ZONA_INTEGRITAS_RB":
        return <span className="text-[11px] font-medium text-primary">Zona Integritas (WBK)</span>;
    }
  };

  return (
    <div className="py-12 max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
      {/* Header */}
      <div className="space-y-2 border-b border-border/80 pb-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
          Akuntabilitas & Transparansi Kinerja
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Repositori resmi dokumen Perjanjian Kinerja, LAKIP, Laporan Keuangan, dan Reformasi Birokrasi BGTK Sumsel
        </p>
      </div>

      {/* Filter Kategori & Tahun */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 bg-card text-card-foreground p-4 rounded-xl border border-border shadow-xs">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari nama dokumen, LAKIP, DIPA..."
            className="pl-9 bg-secondary text-secondary-foreground border-border"
          />
        </div>

        {/* Filter Kategori */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2">
          <Select value={selectedCategory} onValueChange={(val) => { if (val) setSelectedCategory(val); }}>
            <SelectTrigger className="w-full sm:w-56 text-xs bg-secondary text-secondary-foreground border-border">
              <SelectValue placeholder="Semua Kategori" />
            </SelectTrigger>
            <SelectContent className="bg-card text-card-foreground border-border">
              <SelectItem value="ALL">Semua Kategori</SelectItem>
              <SelectItem value="PERJANJIAN_KINERJA">Perjanjian Kinerja (PK)</SelectItem>
              <SelectItem value="LAPORAN_KINERJA_LAKIP">Laporan Kinerja (LAKIP)</SelectItem>
              <SelectItem value="LAPORAN_KEUANGAN">Laporan Keuangan & DIPA</SelectItem>
              <SelectItem value="ZONA_INTEGRITAS_RB">Zona Integritas (WBK)</SelectItem>
            </SelectContent>
          </Select>

          {/* Filter Tahun */}
          <Select value={selectedYear} onValueChange={(val) => { if (val) setSelectedYear(val); }}>
            <SelectTrigger className="w-full sm:w-36 text-xs bg-secondary text-secondary-foreground border-border">
              <SelectValue placeholder="Tahun" />
            </SelectTrigger>
            <SelectContent className="bg-card text-card-foreground border-border">
              <SelectItem value="ALL">Semua Tahun</SelectItem>
              <SelectItem value="2026">2026</SelectItem>
              <SelectItem value="2025">2025</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Tabel Dokumen */}
      <Card className="border-border bg-card text-card-foreground shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-secondary text-secondary-foreground font-bold uppercase tracking-wider text-[11px] border-b border-border">
              <tr>
                <th className="py-3.5 px-4">Judul Dokumen</th>
                <th className="py-3.5 px-4">Kategori</th>
                <th className="py-3.5 px-4 text-center">Tahun</th>
                <th className="py-3.5 px-4 text-center">Ukuran</th>
                <th className="py-3.5 px-4 text-center">Unduhan</th>
                <th className="py-3.5 px-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredDocs.map((doc) => (
                <tr key={doc.id} className="hover:bg-muted/50 transition-colors">
                  <td className="py-3.5 px-4 max-w-md">
                    <div className="font-bold text-card-foreground leading-snug">{doc.title}</div>
                    {doc.description && (
                      <p className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5">{doc.description}</p>
                    )}
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    {getCategoryBadge(doc.category)}
                  </td>
                  <td className="py-3.5 px-4 text-center font-semibold text-card-foreground">
                    {doc.year}
                  </td>
                  <td className="py-3.5 px-4 text-center text-muted-foreground font-mono">
                    {doc.fileSize}
                  </td>
                  <td className="py-3.5 px-4 text-center text-muted-foreground">
                    {doc.downloadCount} kali
                  </td>
                  <td className="py-3.5 px-4 text-right whitespace-nowrap space-x-1.5">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setPreviewDoc(doc)}
                      className="h-7 text-[11px] px-2.5 border-border bg-secondary text-secondary-foreground hover:bg-muted"
                    >
                      <Eye className="w-3 h-3 mr-1" /> Pratinjau
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => handleDownload(doc)}
                      className="h-7 text-[11px] px-2.5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                    >
                      <Download className="w-3 h-3 mr-1" /> Unduh
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Modal Dialog Pratinjau Dokumen */}
      <Dialog open={!!previewDoc} onOpenChange={() => setPreviewDoc(null)}>
        <DialogContent className="max-w-xl bg-card text-card-foreground border-border">
          {previewDoc && (
            <div className="space-y-4">
              <DialogHeader>
                <DialogTitle className="text-base font-bold text-foreground leading-snug">
                  {previewDoc.title}
                </DialogTitle>
                <DialogDescription className="text-xs text-muted-foreground">
                  Tahun Anggaran {previewDoc.year} • Berkas PDF ({previewDoc.fileSize})
                </DialogDescription>
              </DialogHeader>

              {/* PDF Preview Frame Simulator */}
              <div className="h-64 rounded-xl bg-[#0F2C59] text-white flex flex-col items-center justify-center p-6 text-center space-y-3">
                <FileText className="w-12 h-12 text-amber-400" />
                <div className="text-xs space-y-1">
                  <p className="font-bold text-white">{previewDoc.fileName}</p>
                  <p className="text-slate-300">Pratinjau Dokumen PDF Resmi BGTK Sumatera Selatan</p>
                </div>
                <p className="text-xs text-slate-300 pt-1">
                  Total Unduhan: {previewDoc.downloadCount} kali
                </p>
              </div>

              {previewDoc.description && (
                <div className="p-3 bg-secondary text-secondary-foreground rounded-lg text-xs border border-border">
                  <span className="font-semibold block text-foreground mb-0.5">Ringkasan Dokumen:</span>
                  {previewDoc.description}
                </div>
              )}

              <div className="pt-2 flex justify-between">
                <Button variant="outline" size="sm" onClick={() => setPreviewDoc(null)} className="border-border bg-secondary text-secondary-foreground hover:bg-muted">
                  Tutup
                </Button>
                <Button
                  size="sm"
                  onClick={() => {
                    handleDownload(previewDoc);
                    setPreviewDoc(null);
                  }}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  <Download className="w-3.5 h-3.5 mr-1" /> Unduh Berkas Lengkap
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
