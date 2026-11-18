"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  FileText,
  HelpCircle,
  Megaphone,
  MessageSquare,
  ShieldCheck,
  Star,
  Users,
  Award,
  BookOpen,
  MapPin,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { mockPosts } from "@/data/mock/mock-posts";
import { mockAnnouncements } from "@/data/mock/mock-announcements";
import { mockEvents } from "@/data/mock/mock-events";
import { mockIkmSummary } from "@/data/mock/mock-survey";
import { mockProfileContent } from "@/data/mock/mock-organization";

export default function HomePage() {
  const latestPosts = mockPosts.slice(0, 3);
  const latestAnnouncements = mockAnnouncements.slice(0, 4);
  const upcomingEvents = mockEvents.filter((e) => e.status !== "COMPLETED").slice(0, 3);

  return (
    <div className="space-y-16 pb-16">
      {/* 1. HERO BANNER SECTION */}
      <section className="relative bg-gradient-to-br from-[#0A1D37] via-[#0F2C59] to-[#1E3A8A] text-white pt-16 pb-28 sm:pt-20 sm:pb-36 px-4 sm:px-8 lg:px-12 overflow-hidden">
        {/* Dekorasi Aksen Latar Belakang */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

        <div className="max-w-[1600px] 2xl:max-w-[1720px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Teks Sambutan & Call to Action */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
                Transformasi Mutu Pendidik & Tenaga Kependidikan di{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
                  Bumi Sriwijaya
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed mx-auto lg:mx-0">
                Mendampingi 12.450+ pendidik di 17 Kabupaten/Kota se-Sumatera Selatan mewujudkan layanan pendidikan berkualitas dan berkarakter.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Button
                  asChild
                  variant="gradient"
                  size="xl"
                  className="shadow-lg"
                >
                  <Link href="/standar-pelayanan">
                    Lihat Standar Layanan <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-slate-400/40 text-slate-100 hover:bg-white/10 h-12 px-6 text-base"
                >
                  <Link href="/pengaduan">
                    Layanan Pengaduan & WBS
                  </Link>
                </Button>
              </div>
            </div>

            {/* Banner Sorotan Komitmen Layanan */}
            <div className="lg:col-span-5 space-y-5">
              <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-2 shadow-xl">
                <img
                  src="/file-statik/slogan-ramah.avif"
                  alt="Slogan RAMAH BGTK Sumatera Selatan"
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>

              <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white p-6 sm:p-7 shadow-xl space-y-3.5">
                <div className="border-b border-white/15 pb-3">
                  <p className="text-xs uppercase tracking-wider text-amber-300 font-semibold">
                    Maklumat Komitmen Pelayanan
                  </p>
                  <h3 className="text-lg font-bold text-white mt-0.5 leading-snug">
                    Pelayanan Profesional, Transparan & Bebas Pungutan
                  </h3>
                </div>

                <p className="text-sm text-slate-200 leading-relaxed">
                  BGTK Sumatera Selatan berkomitmen penuh memfasilitasi peningkatan mutu pendidik di 17 Kabupaten/Kota dengan standar pelayanan prima berlandaskan integritas dan kepastian waktu.
                </p>

                <div className="pt-1">
                  <Button asChild variant="gradientVariant" className="w-full text-sm shadow-sm h-11">
                    <Link href="/standar-pelayanan">
                      Pelajari Standar Pelayanan Lengkap <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LAYANAN UNGGULAN (QUICK ACCESS CARDS) */}
      <section className="max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 -mt-24 sm:-mt-28 relative z-20">
        <div className="bg-card text-card-foreground rounded-3xl shadow-2xl border border-border/80 p-8 sm:p-10 lg:p-12">
          <div className="text-center sm:text-left mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Layanan Utama & Akses Cepat
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-1">
              Pilih kanal layanan digital terpadu BGTK Provinsi Sumatera Selatan
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Permohonan Narasumber */}
            <Link
              href="/standar-pelayanan/standar-pelayanan-permohonan-narasumber"
              className="group p-6 sm:p-7 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-xs">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-card-foreground text-base sm:text-lg mb-1.5 group-hover:text-primary transition-colors">
                Permohonan Narasumber
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Pengajuan Widyaprada dan fasilitator mutu untuk kegiatan dinas pendidikan daerah.
              </p>
            </Link>

            {/* Card 2: Pengaduan Publik */}
            <Link
              href="/pengaduan"
              className="group p-6 sm:p-7 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-xs">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-card-foreground text-base sm:text-lg mb-1.5 group-hover:text-primary transition-colors">
                Layanan Pengaduan & WBS
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sampaikan laporan pelayanan dan whistleblowing secara aman dan terenkripsi.
              </p>
            </Link>

            {/* Card 3: Lacak Status Tiket */}
            <Link
              href="/pengaduan/lacak"
              className="group p-6 sm:p-7 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-card-foreground text-base sm:text-lg mb-1.5 group-hover:text-primary transition-colors">
                Lacak Status Tiket
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Pantau proses tindak lanjut laporan pengaduan Anda dengan nomor tiket resmi.
              </p>
            </Link>

            {/* Card 4: Survei Kepuasan Masyarakat */}
            <Link
              href="/survei-kepuasan"
              className="group p-6 sm:p-7 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-xs">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-card-foreground text-base sm:text-lg mb-1.5 group-hover:text-primary transition-colors">
                Survei Kepuasan (SKM)
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Evaluasi 9 unsur layanan berbasis Permenpan RB No. 14/2017 secara transparan.
              </p>
            </Link>

            {/* Card 5: Kalender Agenda & Bimtek */}
            <Link
              href="/informasi/agenda"
              className="group p-6 sm:p-7 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-xs">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-card-foreground text-base sm:text-lg mb-1.5 group-hover:text-primary transition-colors">
                Kalender Agenda Kegiatan
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Jadwal bimtek, lokakarya, dan pelatihan peningkatan kompetensi pendidik terkini.
              </p>
            </Link>

            {/* Card 6: Akuntabilitas & LAKIP */}
            <Link
              href="/akuntabilitas"
              className="group p-6 sm:p-7 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-xs">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-card-foreground text-base sm:text-lg mb-1.5 group-hover:text-primary transition-colors">
                Akuntabilitas & Kinerja
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Pusat unduhan resmi dokumen Perjanjian Kinerja, LAKIP, Renstra, dan DIPA instansi.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. BERITA & PENGUMUMAN TERBARU */}
      <section className="max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Kolom Kiri: 3 Berita Utama */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  Berita Terkini
                </h2>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Kabar seputar program dan kebijakan pendidikan di Sumatera Selatan
                </p>
              </div>
              <Button asChild variant="outline" size="sm" className="text-xs sm:text-sm font-semibold border-border bg-card hover:bg-muted text-card-foreground">
                <Link href="/informasi/berita">
                  Semua Berita <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {latestPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden flex flex-col group border-border/80 bg-card text-card-foreground hover:shadow-lg transition-all rounded-2xl">
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-muted">
                    <img
                      src={post.coverImageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-5 flex-1 flex flex-col justify-between space-y-3.5">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="font-semibold text-primary uppercase tracking-wider text-[11px]">
                          {post.category.name}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {new Date(post.publishedAt).toLocaleDateString("id-ID", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <h3 className="font-bold text-card-foreground text-base leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                        <Link href={`/informasi/berita/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <Link
                      href={`/informasi/berita/${post.slug}`}
                      className="text-xs sm:text-sm font-semibold text-primary hover:underline flex items-center gap-1 pt-2"
                    >
                      Baca Selengkapnya <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Pengumuman Resmi & Agenda Mendatang */}
          <div className="lg:col-span-4 space-y-6">
            {/* Widget Pengumuman */}
            <Card className="border-border/80 bg-card text-card-foreground shadow-sm rounded-2xl">
              <div className="p-5 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Megaphone className="w-4 h-4 text-primary" />
                  <h3 className="font-bold text-card-foreground text-base">Pengumuman Resmi</h3>
                </div>
                <Link href="/informasi/pengumuman" className="text-xs sm:text-sm text-primary font-medium hover:underline">
                  Lihat Semua
                </Link>
              </div>
              <div className="p-5 space-y-4">
                {latestAnnouncements.map((ann) => (
                  <div key={ann.id} className="pb-3.5 border-b border-border/60 last:border-0 last:pb-0">
                    <div className="text-xs text-muted-foreground mb-1">
                      {new Date(ann.createdAt).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}
                    </div>
                    <Link
                      href={`/informasi/pengumuman/${ann.slug}`}
                      className="text-sm font-medium text-card-foreground hover:text-primary line-clamp-2 leading-snug transition-colors"
                    >
                      {ann.title}
                    </Link>
                  </div>
                ))}
              </div>
            </Card>

            {/* Widget Agenda Terdekat */}
            <Card className="border-border/80 bg-card text-card-foreground shadow-sm rounded-2xl">
              <div className="p-5 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <h3 className="font-bold text-card-foreground text-base">Agenda Terdekat</h3>
                </div>
                <Link href="/informasi/agenda" className="text-xs sm:text-sm text-primary font-medium hover:underline">
                  Kalender
                </Link>
              </div>
              <div className="p-5 space-y-3.5">
                {upcomingEvents.map((evt) => (
                  <div key={evt.id} className="p-3 rounded-xl bg-secondary text-secondary-foreground border border-border shadow-xs space-y-1.5">
                    <span className="text-xs font-bold text-primary bg-primary/15 px-2.5 py-0.5 rounded-md">
                      {new Date(evt.startDate).toLocaleDateString("id-ID", { day: "numeric", month: "short" })}
                    </span>
                    <h4 className="text-sm font-semibold text-secondary-foreground line-clamp-1">{evt.title}</h4>
                    <p className="text-xs text-muted-foreground line-clamp-1 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-muted-foreground" /> {evt.location}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. STATISTIK KINERJA & INDEKS KEPUASAN MASYARAKAT */}
      <section className="bg-gradient-to-r from-[#0E2F54] via-[#154677] to-[#1F5F99] text-white py-18 sm:py-20 px-4 sm:px-8 lg:px-12 shadow-inner">
        <div className="max-w-[1600px] 2xl:max-w-[1720px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Kinerja & Transparansi Layanan
            </h2>
            <p className="text-sm sm:text-base text-slate-200">
              Data capaian fasilitasi peningkatan kompetensi dan indeks kepuasan publik
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="p-8 sm:p-10 rounded-2xl bg-card/15 backdrop-blur-md border border-white/20 space-y-2">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-amber-300">12.450+</div>
              <div className="text-sm sm:text-base text-slate-200 font-semibold">Guru & Tendik Terfasilitasi</div>
            </div>
            <div className="p-8 sm:p-10 rounded-2xl bg-card/15 backdrop-blur-md border border-white/20 space-y-2">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-amber-300">{mockIkmSummary.ikmScore}</div>
              <div className="text-sm sm:text-base text-slate-200 font-semibold">Indeks Kepuasan (Mutu A)</div>
            </div>
            <div className="p-8 sm:p-10 rounded-2xl bg-card/15 backdrop-blur-md border border-white/20 space-y-2">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-amber-300">84</div>
              <div className="text-sm sm:text-base text-slate-200 font-semibold">Kegiatan Bimtek Terlaksana</div>
            </div>
            <div className="p-8 sm:p-10 rounded-2xl bg-card/15 backdrop-blur-md border border-white/20 space-y-2">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-amber-300">98.5%</div>
              <div className="text-sm sm:text-base text-slate-200 font-semibold">Penyelesaian Pengaduan</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SAMBUTAN KEPALA BALAI */}
      <section className="max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12">
        <Card className="border-border bg-card text-card-foreground overflow-hidden shadow-xl rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-center p-8 sm:p-12 lg:p-16">
            <div className="md:col-span-4 text-center">
              <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-2xl overflow-hidden mx-auto shadow-xl border-4 border-primary">
                <img
                  src="/file-statik/kepala-bgtk.avif"
                  alt="Dra. Hj. Nurjanah, M.Pd"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-5">
                <h3 className="font-extrabold text-card-foreground text-lg sm:text-xl">Dra. Hj. Nurjanah, M.Pd</h3>
                <p className="text-sm text-primary font-bold mt-0.5">Kepala BGTK Sumatera Selatan</p>
                <p className="text-xs text-muted-foreground mt-0.5">NIP. 19680512 199403 2 001</p>
              </div>
            </div>

            <div className="md:col-span-8 space-y-4 text-card-foreground text-base sm:text-lg leading-relaxed">
              <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-primary">
                Sambutan Kepala Balai
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground leading-snug">
                "Mewujudkan Pendidik Sumsel yang Berkarakter dan Memerdekakan Belajar"
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Selamat datang di Portal Resmi BGTK Provinsi Sumatera Selatan. Kami berkomitmen menyelenggarakan pelayanan publik yang berintegritas, transparan, dan bebas biaya (Rp 0), guna mendampingi transformasi dan peningkatan kompetensi seluruh pendidik di Bumi Sriwijaya.
              </p>
              <div className="pt-2">
                <Button asChild variant="outline" size="sm" className="font-semibold text-sm border-border bg-secondary hover:bg-muted text-secondary-foreground h-10 px-5">
                  <Link href="/profil">
                    Baca Profil Lengkap Balai <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
