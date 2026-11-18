"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  Newspaper,
  StarHalf,
  Inbox,
  FileCheck,
  FileText,
  Image as ImageIcon,
  Settings,
  LogOut,
  ExternalLink,
  ShieldAlert,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const adminNavItems = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Profil Instansi",
    href: "/admin/profil",
    icon: Building2,
  },
  {
    title: "Berita & Pengumuman",
    href: "/admin/posts",
    icon: Newspaper,
  },
  {
    title: "Survei SKM",
    href: "/admin/survei",
    icon: StarHalf,
  },
  {
    title: "Pengaduan",
    href: "/admin/pengaduan",
    icon: Inbox,
    badge: "2",
    badgeColor: "bg-destructive text-destructive-foreground",
  },
  {
    title: "Standar Layanan",
    href: "/admin/standar-layanan",
    icon: FileCheck,
  },
  {
    title: "Akuntabilitas",
    href: "/admin/akuntabilitas",
    icon: FileText,
  },
  {
    title: "Pustaka Media",
    href: "/admin/media",
    icon: ImageIcon,
  },
  {
    title: "Pengaturan Sistem",
    href: "/admin/pengaturan",
    icon: Settings,
  },
];

export function AdminSidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <aside className="w-64 bg-sidebar text-sidebar-foreground flex flex-col h-screen sticky top-0 border-r border-sidebar-border shrink-0">
      {/* Brand Header */}
      <div className="p-4 border-b border-sidebar-border flex items-center gap-2.5">
        <img
          src="/file-statik/logo-kemendikdasmen.avif"
          alt="Logo Kemendikdasmen"
          className="h-8 w-auto object-contain"
        />
        <div className="flex flex-col">
          <span className="text-sidebar-foreground font-bold text-xs tracking-tight leading-tight">
            CMS BGTK SUMSEL
          </span>
          <span className="text-[10px] text-muted-foreground font-medium">
            Panel Administrator
          </span>
        </div>
      </div>

      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        <div className="px-3 pb-2 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
          Menu Utama
        </div>

        {adminNavItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${
                active
                  ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                  : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Icon className={`w-4 h-4 ${active ? "text-primary-foreground" : "text-muted-foreground"}`} />
                <span>{item.title}</span>
              </div>

              {item.badge && (
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                    item.badgeColor || (active ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted text-muted-foreground")
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Bottom Bar: Quick Public Link & Logout */}
      <div className="p-3 border-t border-sidebar-border space-y-1 bg-sidebar">
        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-between px-3 py-2 rounded-md text-xs text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
        >
          <span className="flex items-center gap-2">
            <ExternalLink className="w-3.5 h-3.5 text-primary" /> Buka Web Publik
          </span>
        </Link>
        <Link
          href="/admin/login"
          className="flex items-center gap-2 px-3 py-2 rounded-md text-xs text-destructive hover:bg-destructive/10 transition-colors"
        >
          <LogOut className="w-3.5 h-3.5" /> Keluar (Logout)
        </Link>
      </div>
    </aside>
  );
}
