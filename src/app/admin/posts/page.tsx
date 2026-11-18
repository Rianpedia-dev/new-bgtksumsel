"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Newspaper,
  Plus,
  Search,
  Pencil,
  Trash2,
  Eye,
  Megaphone,
  Calendar,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { mockPosts } from "@/data/mock/mock-posts";
import { mockAnnouncements } from "@/data/mock/mock-announcements";
import { mockEvents } from "@/data/mock/mock-events";
import { Post } from "@/types";

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<Post[]>(mockPosts);
  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleDeletePost = (id: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus artikel berita ini?")) {
      setPosts(posts.filter((p) => p.id !== id));
      toast.success("Berita berhasil dihapus.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-foreground tracking-tight">
            Manajemen Berita & Publikasi
          </h1>
          <p className="text-xs text-muted-foreground">
            Publikasikan artikel warta kegiatan, surat edaran resmi, dan jadwal bimtek
          </p>
        </div>

        <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs shadow-xs">
          <Link href="/admin/posts/create">
            <Plus className="w-3.5 h-3.5 mr-1" /> Tulis Berita Baru
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="berita" className="space-y-4">
        <TabsList className="bg-card text-card-foreground border border-border p-1">
          <TabsTrigger value="berita" className="text-xs font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Berita ({posts.length})
          </TabsTrigger>
          <TabsTrigger value="pengumuman" className="text-xs font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Pengumuman ({mockAnnouncements.length})
          </TabsTrigger>
          <TabsTrigger value="agenda" className="text-xs font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Agenda Kegiatan ({mockEvents.length})
          </TabsTrigger>
        </TabsList>

        {/* TAB 1: BERITA */}
        <TabsContent value="berita" className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div className="relative w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari berita..."
                className="pl-9 bg-secondary text-secondary-foreground border-border text-xs"
              />
            </div>
          </div>

          <Card className="border-border bg-card text-card-foreground shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-secondary text-secondary-foreground font-bold uppercase tracking-wider text-[11px] border-b border-border">
                  <tr>
                    <th className="py-3 px-4">Artikel Berita</th>
                    <th className="py-3 px-4">Kategori</th>
                    <th className="py-3 px-4">Penulis</th>
                    <th className="py-3 px-4 text-center">Status</th>
                    <th className="py-3 px-4 text-center">Dibaca</th>
                    <th className="py-3 px-4 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredPosts.map((p) => (
                    <tr key={p.id} className="hover:bg-muted/40 transition-colors">
                      <td className="py-3.5 px-4 max-w-md">
                        <div className="font-bold text-card-foreground leading-snug line-clamp-1">{p.title}</div>
                        <span className="text-[11px] text-muted-foreground">
                          {new Date(p.publishedAt).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <Badge variant="secondary" className="text-[10px] bg-secondary text-secondary-foreground border border-border">{p.category.name}</Badge>
                      </td>
                      <td className="py-3.5 px-4 text-muted-foreground">{p.author.name}</td>
                      <td className="py-3.5 px-4 text-center">
                        <Badge className="bg-emerald-600 text-white text-[10px]">PUBLISHED</Badge>
                      </td>
                      <td className="py-3.5 px-4 text-center font-mono text-muted-foreground">
                        {p.viewCount}
                      </td>
                      <td className="py-3.5 px-4 text-right space-x-1.5 whitespace-nowrap">
                        <Button asChild size="sm" variant="outline" className="h-7 text-[11px] border-border bg-secondary text-secondary-foreground hover:bg-muted">
                          <Link href={`/informasi/berita/${p.slug}`} target="_blank">
                            <Eye className="w-3 h-3 mr-1" /> Pratinjau
                          </Link>
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDeletePost(p.id)}
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
        </TabsContent>

        {/* TAB 2: PENGUMUMAN */}
        <TabsContent value="pengumuman" className="space-y-4">
          <Card className="border-border bg-card text-card-foreground shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-secondary text-secondary-foreground font-bold uppercase tracking-wider text-[11px] border-b border-border">
                  <tr>
                    <th className="py-3 px-4">Judul Pengumuman</th>
                    <th className="py-3 px-4 text-center">Lampiran</th>
                    <th className="py-3 px-4 text-center">Status</th>
                    <th className="py-3 px-4 text-center">Batas Waktu</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {mockAnnouncements.map((ann) => (
                    <tr key={ann.id} className="hover:bg-muted/40 transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-card-foreground">{ann.title}</td>
                      <td className="py-3.5 px-4 text-center font-mono text-muted-foreground">{ann.fileSize || "-"}</td>
                      <td className="py-3.5 px-4 text-center">
                        <Badge className="bg-emerald-600 text-white text-[10px]">{ann.status}</Badge>
                      </td>
                      <td className="py-3.5 px-4 text-center text-muted-foreground">{ann.validUntil || "Tetap"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>

        {/* TAB 3: AGENDA */}
        <TabsContent value="agenda" className="space-y-4">
          <Card className="border-border bg-card text-card-foreground shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-secondary text-secondary-foreground font-bold uppercase tracking-wider text-[11px] border-b border-border">
                  <tr>
                    <th className="py-3 px-4">Nama Agenda Kegiatan</th>
                    <th className="py-3 px-4">Lokasi Pelaksanaan</th>
                    <th className="py-3 px-4">Tanggal Pelaksanaan</th>
                    <th className="py-3 px-4 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {mockEvents.map((evt) => (
                    <tr key={evt.id} className="hover:bg-muted/40 transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-card-foreground">{evt.title}</td>
                      <td className="py-3.5 px-4 text-muted-foreground">{evt.location}</td>
                      <td className="py-3.5 px-4 text-muted-foreground">
                        {new Date(evt.startDate).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <Badge variant="outline" className="text-[10px] border-border text-foreground">{evt.status}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
