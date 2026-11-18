"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Eye, Share2, Tag, ArrowLeft, Copy, Check, Phone } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { mockPosts } from "@/data/mock/mock-posts";

export default function DetailBeritaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const post = mockPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = mockPosts.filter((p) => p.id !== post.id).slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Tautan artikel berhasil disalin ke clipboard!");
  };

  const handleShareWa = () => {
    const text = encodeURIComponent(`${post.title}\n\nBaca selengkapnya: ${window.location.href}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  return (
    <article className="py-12 max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
      {/* Tombol Kembali & Breadcrumb */}
      <div className="space-y-3">
        <Link
          href="/informasi/berita"
          className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Kembali ke Indeks Berita
        </Link>
        <div className="flex items-center gap-2">
          <Badge className="bg-primary text-primary-foreground text-xs">{post.category.name}</Badge>
          <span className="text-xs text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {new Date(post.publishedAt).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          <span className="text-xs text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Eye className="w-3.5 h-3.5" /> {post.viewCount} kali dibaca
          </span>
        </div>
      </div>

      {/* Judul Artikel */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground leading-tight">
        {post.title}
      </h1>

      {/* Info Penulis & Tombol Share */}
      <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-y border-border">
        <div className="text-xs text-muted-foreground">
          Penulis / Redaksi: <span className="font-semibold text-foreground">{post.author.name}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground font-medium">Bagikan:</span>
          <Button
            size="sm"
            variant="outline"
            onClick={handleShareWa}
            className="h-8 text-xs bg-secondary text-secondary-foreground border-border hover:bg-muted"
          >
            WhatsApp
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={handleCopyLink}
            className="h-8 text-xs border-border bg-secondary text-secondary-foreground hover:bg-muted"
          >
            <Copy className="w-3.5 h-3.5 mr-1" /> Salin Tautan
          </Button>
        </div>
      </div>

      {/* Cover Image & Caption */}
      <div className="space-y-2">
        <div className="rounded-2xl overflow-hidden shadow-md max-h-[460px] bg-muted">
          <img src={post.coverImageUrl} alt={post.title} className="w-full h-full object-cover" />
        </div>
        {post.captionImage && (
          <p className="text-center text-xs text-muted-foreground italic">
            Foto: {post.captionImage}
          </p>
        )}
      </div>

      {/* Isi Berita (HTML Content) */}
      <div
        className="prose prose-slate max-w-none text-card-foreground text-sm sm:text-base leading-relaxed space-y-4"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      {/* Tags */}
      <div className="pt-6 border-t border-border flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1">
          <Tag className="w-3.5 h-3.5" /> Kata Kunci:
        </span>
        {post.tags.map((tag, i) => (
          <Badge key={i} variant="secondary" className="text-xs bg-secondary text-secondary-foreground border border-border">
            #{tag}
          </Badge>
        ))}
      </div>

      {/* Rekomendasi Berita Terkait */}
      <div className="pt-10 space-y-4">
        <h3 className="font-bold text-foreground text-lg">Berita Terkait Lainnya</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {relatedPosts.map((related) => (
            <Card key={related.id} className="p-3 border-border bg-card text-card-foreground hover:shadow-md transition-shadow">
              <div className="h-28 rounded-lg overflow-hidden mb-2 bg-muted">
                <img src={related.coverImageUrl} alt={related.title} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold text-xs line-clamp-2 text-card-foreground hover:text-primary leading-snug transition-colors">
                <Link href={`/informasi/berita/${related.slug}`}>
                  {related.title}
                </Link>
              </h4>
            </Card>
          ))}
        </div>
      </div>
    </article>
  );
}
