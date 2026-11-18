"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  ShieldCheck,
  HeartHandshake,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function PublicFooter() {
  return (
    <footer className="bg-[#0A1D37] text-slate-300 pt-20 pb-14 border-t-4 border-amber-500">
      <div className="max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
          {/* Kolom 1: Profil Singkat */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/file-statik/logo-bgtk-putih.avif"
                alt="Logo BGTK Sumatera Selatan"
                className="h-11 w-auto object-contain"
              />
              <div>
                <h3 className="font-bold text-white text-base leading-tight">
                  BGTK SUMATERA SELATAN
                </h3>
                <p className="text-xs text-amber-300">
                  Kemendikdasmen RI
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Balai Guru dan Tenaga Kependidikan (BGTK) Provinsi Sumatera Selatan bertekad memberikan pelayanan peningkatan mutu pendidik yang berkarakter, inovatif, transparan, dan bebas biaya.
            </p>
            <p className="text-xs text-slate-400 flex items-center gap-1.5 pt-1">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Zona Integritas Wilayah Bebas dari Korupsi (WBK)</span>
            </p>
          </div>

          {/* Kolom 2: Tautan Layanan Utama */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase border-b border-slate-700 pb-2">
              Layanan Utama
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/standar-pelayanan" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-400">›</span> Standar Pelayanan Publik
                </Link>
              </li>
              <li>
                <Link href="/pengaduan" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-400">›</span> Layanan Pengaduan & WBS
                </Link>
              </li>
              <li>
                <Link href="/pengaduan/lacak" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-400">›</span> Cek Status Tiket Aduan
                </Link>
              </li>
              <li>
                <Link href="/survei-kepuasan" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-400">›</span> Survei Kepuasan Masyarakat (SKM)
                </Link>
              </li>
              <li>
                <Link href="/survei-kepuasan/hasil" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-400">›</span> Hasil Indeks IKM Berkala
                </Link>
              </li>
              <li>
                <Link href="/akuntabilitas" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-400">›</span> Laporan Kinerja & Keuangan (LAKIP)
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Tautan Terkait Instansi */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase border-b border-slate-700 pb-2">
              Tautan Eksternal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://kemdikbud.go.id"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center justify-between"
                >
                  Kemendikbudristek <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://gurudikdas.kemdikbud.go.id"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center justify-between"
                >
                  Ditjen GTK Kemendikbud <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://sekolah.penggerak.kemdikbud.go.id/gurupenggerak/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center justify-between"
                >
                  Pendidikan Guru Penggerak <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://kurikulum.kemdikbud.go.id"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center justify-between"
                >
                  Platform Merdeka Mengajar <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://lapor.go.id"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center justify-between"
                >
                  SP4N LAPOR! <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Alamat & Kontak Resmi */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase border-b border-slate-700 pb-2">
              Kontak Kantor
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Jl. Naskah II No. 74, Sukarami, Kota Palembang, Sumatera Selatan 30152</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Telepon: (0711) 412345</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>bgtk.sumsel@kemdikbud.go.id</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Senin - Jumat: 08.00 - 16.00 WIB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Garis Pembatas Bawah, Hak Cipta & Tombol Login CMS */}
        <div className="mt-12 pt-6 border-t border-slate-800 text-xs text-slate-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© 2026 Balai Guru dan Tenaga Kependidikan (BGTK) Provinsi Sumatera Selatan. Hak Cipta Dilindungi.</p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/profil" className="hover:text-slate-200 transition-colors">Tentang Kami</Link>
            <Link href="/standar-pelayanan" className="hover:text-slate-200 transition-colors">Maklumat Pelayanan</Link>
            <Link href="/kontak" className="hover:text-slate-200 transition-colors">Lokasi</Link>
            <Button
              asChild
              size="sm"
              variant="outline"
              className="border-slate-700 hover:border-amber-400/60 text-slate-200 hover:text-white bg-slate-900/80 text-xs gap-1.5 h-8 px-3.5"
            >
              <Link href="/admin/login">
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>Login Admin CMS</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
