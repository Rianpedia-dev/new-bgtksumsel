"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Clock, ArrowRight, Tag, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { mockPosts, mockCategories } from "@/data/mock/mock-posts";

export default function BeritaIndexPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const filteredPosts = useMemo(() => {
    return mockPosts.filter((post) => {
      const matchSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchCategory =
        selectedCategory === "ALL" || post.category.slug === selectedCategory;
      return matchSearch && matchCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="py-12 max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
      {/* Header */}
      <div className="space-y-2 border-b border-border/80 pb-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
          Berita & Warta Pendidikan
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Informasi terdepan program peningkatan mutu guru dan tenaga kependidikan di Sumatera Selatan
        </p>
      </div>

      {/* Filter Kategori & Search Input */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari berita atau kegiatan..."
            className="pl-9 bg-card text-card-foreground border-border"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <Button
            size="sm"
            variant={selectedCategory === "ALL" ? "gradient" : "outline"}
            onClick={() => setSelectedCategory("ALL")}
            className="text-xs"
          >
            Semua
          </Button>
          {mockCategories.map((cat) => (
            <Button
              key={cat.id}
              size="sm"
              variant={selectedCategory === cat.slug ? "gradient" : "outline"}
              onClick={() => setSelectedCategory(cat.slug)}
              className="text-xs"
            >
              {cat.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Grid Berita */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden flex flex-col group border-border bg-card text-card-foreground hover:shadow-md transition-all">
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={post.coverImageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                />
              </div>

              <CardContent className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                    <span className="font-semibold text-primary uppercase tracking-wider">
                      {post.category.name}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {new Date(post.publishedAt).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h3 className="font-bold text-card-foreground text-base leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                    <Link href={`/informasi/berita/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-border flex items-center justify-between">
                  <span className="text-[11px] text-muted-foreground">Oleh: {post.author.name}</span>
                  <Link
                    href={`/informasi/berita/${post.slug}`}
                    className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                  >
                    Baca →
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-card text-card-foreground rounded-xl border border-dashed border-border p-8">
          <p className="text-muted-foreground text-sm">Tidak ditemukan artikel yang sesuai dengan pencarian Anda.</p>
          <Button
            variant="link"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("ALL");
            }}
            className="text-xs text-primary mt-2"
          >
            Reset Filter
          </Button>
        </div>
      )}
    </div>
  );
}
