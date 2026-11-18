"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Upload, Sparkles, Image as ImageIcon } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { mockCategories } from "@/data/mock/mock-posts";

export default function CreatePostPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [categoryId, setCategoryId] = useState("cat-1");
  const [excerpt, setExcerpt] = useState("");
  const [contentHtml, setContentHtml] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState("https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80");
  const [status, setStatus] = useState<"DRAFT" | "PUBLISHED">("PUBLISHED");

  const handleTitleChange = (val: string) => {
    setTitle(val);
    const generatedSlug = val
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    setSlug(generatedSlug);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !contentHtml) {
      toast.error("Mohon lengkapi judul dan konten artikel berita.");
      return;
    }

    toast.success("Artikel berita berhasil disimpan dan diterbitkan!");
    router.push("/admin/posts");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-border">
        <div className="flex items-center gap-3">
          <Button asChild variant="outline" size="sm" className="h-8 border-border bg-card text-card-foreground hover:bg-muted">
            <Link href="/admin/posts">
              <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Kembali
            </Link>
          </Button>
          <div>
            <h1 className="text-lg font-bold text-foreground">
              Tulis & Publikasikan Berita Baru
            </h1>
            <p className="text-xs text-muted-foreground">
              Buat rilis berita terkini untuk portal publik BGTK Sumsel
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setStatus("DRAFT")}
            className="text-xs font-semibold border-border bg-card text-card-foreground hover:bg-muted"
          >
            Simpan Draft
          </Button>
          <Button
            onClick={handleSave}
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs shadow-xs"
          >
            <Save className="w-3.5 h-3.5 mr-1.5" /> Terbitkan Berita
          </Button>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        <Card className="p-6 border-border shadow-xs space-y-4 bg-card text-card-foreground">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-card-foreground">Judul Berita *</label>
            <Input
              required
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="Contoh: BGTK Sumsel Selenggarakan Bimtek Peningkatan Mutu 2026"
              className="bg-secondary text-secondary-foreground border-border font-semibold text-sm"
            />
            {slug && (
              <p className="text-[11px] text-muted-foreground font-mono">
                URL Preview: /informasi/berita/<span className="text-primary font-semibold">{slug}</span>
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-card-foreground">Kategori Berita *</label>
              <select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="w-full text-xs p-2.5 rounded-md border border-border bg-secondary text-secondary-foreground font-medium"
              >
                {mockCategories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-card-foreground">Gambar Sampul (URL)</label>
              <Input
                value={coverImageUrl}
                onChange={(e) => setCoverImageUrl(e.target.value)}
                placeholder="https://..."
                className="bg-secondary text-secondary-foreground border-border text-xs font-mono"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-card-foreground">Ringkasan Singkat (Excerpt)</label>
            <Textarea
              rows={2}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Satu atau dua kalimat ringkas untuk kartu pratinjau berita..."
              className="bg-secondary text-secondary-foreground border-border text-xs"
            />
          </div>

          {/* Konten Editor WYSIWYG Simulator */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-card-foreground">Isi Konten Berita (Rich Text / HTML) *</label>
              <span className="text-[11px] text-muted-foreground">Didukung formatting tag HTML</span>
            </div>

            {/* Toolbar Simulator */}
            <div className="flex flex-wrap items-center gap-1 p-2 bg-secondary text-secondary-foreground rounded-t-lg border border-border text-xs">
              <button type="button" className="px-2 py-1 bg-card rounded border border-border hover:bg-muted font-bold">B</button>
              <button type="button" className="px-2 py-1 bg-card rounded border border-border hover:bg-muted italic">I</button>
              <button type="button" className="px-2 py-1 bg-card rounded border border-border hover:bg-muted underline">U</button>
              <span className="text-muted-foreground mx-1">|</span>
              <button type="button" className="px-2 py-1 bg-card rounded border border-border hover:bg-muted">H2</button>
              <button type="button" className="px-2 py-1 bg-card rounded border border-border hover:bg-muted">H3</button>
              <button type="button" className="px-2 py-1 bg-card rounded border border-border hover:bg-muted">• List</button>
              <button type="button" className="px-2 py-1 bg-card rounded border border-border hover:bg-muted">🔗 Link</button>
              <button type="button" className="px-2 py-1 bg-card rounded border border-border hover:bg-muted">📷 Image</button>
            </div>

            <Textarea
              required
              rows={12}
              value={contentHtml}
              onChange={(e) => setContentHtml(e.target.value)}
              placeholder="Tuliskan isi berita lengkap di sini (paragraf, kutipan wawancara, poin kegiatan)..."
              className="bg-secondary text-secondary-foreground border-border rounded-t-none border-t-0 font-sans text-xs sm:text-sm leading-relaxed"
            />
          </div>
        </Card>
      </form>
    </div>
  );
}
