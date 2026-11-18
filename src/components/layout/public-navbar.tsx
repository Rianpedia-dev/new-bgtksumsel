"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DropdownNavigation } from "@/components/ui/dropdown-navigation";
import { BGTK_NAV_ITEMS } from "@/data/navigation";

export function PublicNavbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm">
      {/* Main Navbar */}
      <nav className="bg-[#0F2C59] text-white border-b border-blue-900/40">
        <div className="max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20 sm:h-22 lg:h-24">
            {/* Logo Brand */}
            <Link href="/" className="flex items-center gap-3.5 group">
              <img
                src="/file-statik/logo-kemendikdasmen.avif"
                alt="Logo Tut Wuri Handayani"
                className="h-12 sm:h-14 w-auto object-contain"
              />
              <div className="flex flex-col border-l border-white/20 pl-3.5">
                <span className="text-base sm:text-lg lg:text-xl font-extrabold tracking-tight text-white leading-tight">
                  BGTK SUMATERA SELATAN
                </span>
                <span className="text-xs sm:text-sm text-slate-300 hidden md:block">
                  Balai Guru dan Tenaga Kependidikan
                </span>
              </div>
            </Link>

            {/* Desktop Animated Navigation Menu */}
            <div className="hidden xl:flex items-center">
              <DropdownNavigation navItems={BGTK_NAV_ITEMS} />
            </div>

            {/* Quick Action Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-3">
              <Button
                asChild
                variant="gradientVariant"
                className="hidden sm:inline-flex text-sm"
              >
                <Link href="/pengaduan">Layanan & Aduan</Link>
              </Button>

              {/* Mobile Drawer Trigger */}
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger
                  className="xl:hidden p-2 rounded-md text-white hover:bg-blue-800 transition-colors cursor-pointer"
                  aria-label="Buka Menu"
                >
                  <Menu className="w-6 h-6" />
                </SheetTrigger>
                <SheetContent side="right" className="bg-[#0F2C59] text-white border-blue-900 w-80 p-0 overflow-y-auto">
                  <SheetHeader className="p-5 border-b border-blue-800/60 text-left">
                    <SheetTitle className="text-white text-base font-bold flex items-center gap-2.5">
                      <img
                        src="/file-statik/logo-kemendikdasmen.avif"
                        alt="Kemendikdasmen"
                        className="h-7 w-auto object-contain"
                      />
                      <span>BGTK Sumatera Selatan</span>
                    </SheetTitle>
                    <p className="text-xs text-amber-300">Portal Resmi Layanan & Informasi</p>
                  </SheetHeader>

                  <div className="p-4 space-y-1">
                    <Link
                      href="/"
                      onClick={() => setMobileOpen(false)}
                      className={`block px-3 py-2 rounded-md text-sm font-medium ${
                        isActive("/") ? "bg-blue-800 text-amber-300" : "hover:bg-blue-800/50"
                      }`}
                    >
                      Beranda
                    </Link>

                    <div className="pt-2 pb-1">
                      <span className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Profil
                      </span>
                      <div className="mt-1 pl-3 space-y-1">
                        <Link href="/profil" onClick={() => setMobileOpen(false)} className="block px-3 py-1.5 text-xs text-slate-200 hover:text-white">Profil & Sejarah</Link>
                        <Link href="/profil/visi-misi" onClick={() => setMobileOpen(false)} className="block px-3 py-1.5 text-xs text-slate-200 hover:text-white">Visi, Misi & Tujuan</Link>
                        <Link href="/profil/tugas-fungsi" onClick={() => setMobileOpen(false)} className="block px-3 py-1.5 text-xs text-slate-200 hover:text-white">Tugas dan Fungsi</Link>
                        <Link href="/profil/struktur" onClick={() => setMobileOpen(false)} className="block px-3 py-1.5 text-xs text-slate-200 hover:text-white">Struktur Organisasi</Link>
                      </div>
                    </div>

                    <div className="pt-2 pb-1">
                      <span className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Berita & Informasi
                      </span>
                      <div className="mt-1 pl-3 space-y-1">
                        <Link href="/informasi/berita" onClick={() => setMobileOpen(false)} className="block px-3 py-1.5 text-xs text-slate-200 hover:text-white">Berita</Link>
                        <Link href="/informasi/pengumuman" onClick={() => setMobileOpen(false)} className="block px-3 py-1.5 text-xs text-slate-200 hover:text-white">Pengumuman</Link>
                        <Link href="/informasi/agenda" onClick={() => setMobileOpen(false)} className="block px-3 py-1.5 text-xs text-slate-200 hover:text-white">Agenda Kegiatan</Link>
                      </div>
                    </div>

                    <div className="pt-2 pb-1">
                      <span className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Survei SKM
                      </span>
                      <div className="mt-1 pl-3 space-y-1">
                        <Link href="/survei-kepuasan" onClick={() => setMobileOpen(false)} className="block px-3 py-1.5 text-xs text-slate-200 hover:text-white">Isi Survei Kepuasan</Link>
                        <Link href="/survei-kepuasan/hasil" onClick={() => setMobileOpen(false)} className="block px-3 py-1.5 text-xs text-slate-200 hover:text-white">Hasil Survei & IKM</Link>
                      </div>
                    </div>

                    <div className="pt-2 pb-1">
                      <span className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Pengaduan
                      </span>
                      <div className="mt-1 pl-3 space-y-1">
                        <Link href="/pengaduan" onClick={() => setMobileOpen(false)} className="block px-3 py-1.5 text-xs text-slate-200 hover:text-white">Formulir Pengaduan</Link>
                        <Link href="/pengaduan/lacak" onClick={() => setMobileOpen(false)} className="block px-3 py-1.5 text-xs text-slate-200 hover:text-white">Lacak Status Tiket</Link>
                      </div>
                    </div>

                    <Link
                      href="/standar-pelayanan"
                      onClick={() => setMobileOpen(false)}
                      className={`block px-3 py-2 rounded-md text-sm font-medium ${
                        isActive("/standar-pelayanan") ? "bg-blue-800 text-amber-300" : "hover:bg-blue-800/50"
                      }`}
                    >
                      Standar Pelayanan
                    </Link>

                    <Link
                      href="/akuntabilitas"
                      onClick={() => setMobileOpen(false)}
                      className={`block px-3 py-2 rounded-md text-sm font-medium ${
                        isActive("/akuntabilitas") ? "bg-blue-800 text-amber-300" : "hover:bg-blue-800/50"
                      }`}
                    >
                      Akuntabilitas
                    </Link>

                    <Link
                      href="/kontak"
                      onClick={() => setMobileOpen(false)}
                      className={`block px-3 py-2 rounded-md text-sm font-medium ${
                        isActive("/kontak") ? "bg-blue-800 text-amber-300" : "hover:bg-blue-800/50"
                      }`}
                    >
                      Kontak
                    </Link>

                    <div className="pt-4 border-t border-blue-800/60">
                      <Link
                        href="/admin/login"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2 px-3 py-2 text-xs text-amber-300 hover:underline"
                      >
                        <Lock className="w-3.5 h-3.5" /> Akses Admin CMS
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
