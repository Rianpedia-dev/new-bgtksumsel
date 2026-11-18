"use client";

import React, { useState } from "react";
import {
  FileText,
  Plus,
  Trash2,
  Download,
  Upload,
  Search,
  Filter,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { mockAccountabilityDocs } from "@/data/mock/mock-accountability";
import { AccountabilityCategory, AccountabilityDocument } from "@/types";

export default function AdminAkuntabilitasPage() {
  const [docs, setDocs] = useState<AccountabilityDocument[]>(mockAccountabilityDocs);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // New doc form
  const [form, setForm] = useState({
    title: "",
    category: "LAPORAN_KINERJA_LAKIP" as AccountabilityCategory,
    year: 2026,
    description: "",
  });

  const filtered = docs.filter((d) =>
    d.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    const newDoc: AccountabilityDocument = {
      id: `doc-${Date.now()}`,
      title: form.title,
      category: form.category,
      year: form.year,
      description: form.description,
      fileUrl: "/documents/sample.pdf",
      fileName: `${form.title.replace(/\s+/g, "_")}.pdf`,
      fileSize: "3.2 MB",
      downloadCount: 0,
      createdAt: new Date().toISOString(),
    };

    setDocs([newDoc, ...docs]);
    toast.success("Dokumen akuntabilitas berhasil diunggah!");
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus dokumen ini?")) {
      setDocs(docs.filter((d) => d.id !== id));
      toast.success("Dokumen berhasil dihapus.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-foreground tracking-tight">
            Akuntabilitas Kinerja & Dokumen Publik
          </h1>
          <p className="text-xs text-muted-foreground">
            Kelola repositori dokumen Perjanjian Kinerja (PK), LAKIP, Laporan Keuangan, dan Zona Integritas
          </p>
        </div>

        <Button
          onClick={() => setIsModalOpen(true)}
          size="sm"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs shadow-xs"
        >
          <Plus className="w-3.5 h-3.5 mr-1" /> Unggah Dokumen Baru
        </Button>
      </div>

      <div className="flex items-center justify-between gap-4 bg-card text-card-foreground p-4 rounded-xl border border-border shadow-xs">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari judul dokumen LAKIP, DIPA..."
            className="pl-9 bg-secondary text-secondary-foreground border-border text-xs"
          />
        </div>
      </div>

      <Card className="border-border bg-card text-card-foreground shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-secondary text-secondary-foreground font-bold uppercase tracking-wider text-[11px] border-b border-border">
              <tr>
                <th className="py-3 px-4">Judul Dokumen</th>
                <th className="py-3 px-4">Kategori</th>
                <th className="py-3 px-4 text-center">Tahun</th>
                <th className="py-3 px-4 text-center">Ukuran File</th>
                <th className="py-3 px-4 text-center">Jumlah Unduh</th>
                <th className="py-3 px-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filtered.map((d) => (
                <tr key={d.id} className="hover:bg-muted/40 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-card-foreground max-w-md">
                    <div>{d.title}</div>
                    <span className="text-[10px] text-muted-foreground font-mono">{d.fileName}</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <Badge variant="outline" className="text-[10px] font-mono border-border text-foreground">{d.category}</Badge>
                  </td>
                  <td className="py-3.5 px-4 text-center font-bold text-card-foreground">{d.year}</td>
                  <td className="py-3.5 px-4 text-center text-muted-foreground font-mono">{d.fileSize}</td>
                  <td className="py-3.5 px-4 text-center text-muted-foreground">{d.downloadCount} kali</td>
                  <td className="py-3.5 px-4 text-right whitespace-nowrap">
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDelete(d.id)}
                      className="h-7 text-[11px]"
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Modal Upload Dokumen */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md bg-card text-card-foreground border-border">
          <DialogHeader>
            <DialogTitle className="text-base font-bold text-foreground">
              Unggah Dokumen Akuntabilitas
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              Format dokumen: PDF resmi bertanda tangan elektronik
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleCreate} className="space-y-3.5 pt-2">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-card-foreground">Judul Dokumen *</label>
              <Input
                required
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="Contoh: Perjanjian Kinerja Tahun 2026"
                className="bg-secondary text-secondary-foreground border-border text-xs"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-card-foreground">Kategori Dokumen *</label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value as any })}
                  className="w-full text-xs p-2 rounded-md border border-border bg-secondary text-secondary-foreground"
                >
                  <option value="PERJANJIAN_KINERJA">Perjanjian Kinerja (PK)</option>
                  <option value="LAPORAN_KINERJA_LAKIP">LAKIP / LKjIP</option>
                  <option value="LAPORAN_KEUANGAN">Laporan Keuangan & DIPA</option>
                  <option value="ZONA_INTEGRITAS_RB">Zona Integritas (WBK)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-card-foreground">Tahun Anggaran *</label>
                <Input
                  required
                  type="number"
                  value={form.year}
                  onChange={(e) => setForm({ ...form, year: Number(e.target.value) })}
                  className="bg-secondary text-secondary-foreground border-border text-xs"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-card-foreground">Pilih File PDF *</label>
              <div className="border border-dashed border-border rounded-lg p-4 text-center bg-secondary text-secondary-foreground cursor-pointer hover:bg-muted">
                <Upload className="w-6 h-6 text-muted-foreground mx-auto mb-1" />
                <span className="text-xs text-muted-foreground">Pilih file PDF dari komputer</span>
              </div>
            </div>

            <div className="pt-3 flex justify-end gap-2">
              <Button type="button" variant="outline" size="sm" onClick={() => setIsModalOpen(false)} className="border-border bg-secondary text-secondary-foreground hover:bg-muted">
                Batal
              </Button>
              <Button type="submit" size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Unggah Dokumen
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
