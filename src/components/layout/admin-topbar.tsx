"use client";

import React from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AdminTopbar() {
  return (
    <header className="h-16 bg-card text-card-foreground border-b border-border px-6 flex items-center justify-end sticky top-0 z-40 shadow-xs">
      {/* Admin Profile & Name */}
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2.5 outline-none hover:bg-muted p-1.5 rounded-lg transition-colors cursor-pointer">
          <Avatar className="w-8 h-8 border border-border">
            <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <div className="text-left hidden md:block">
            <div className="text-xs font-bold text-foreground leading-tight">Admin Utama</div>
            <div className="text-[10px] text-muted-foreground">SUPER_ADMIN</div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-52 bg-card text-card-foreground border-border">
          <DropdownMenuLabel>Akun CMS Aktif</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-border" />
          <DropdownMenuItem>
            <Link href="/admin/pengaturan" className="w-full">Pengaturan Akun</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/admin/pengaturan" className="w-full">Audit Trail Sistem</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-border" />
          <DropdownMenuItem>
            <Link href="/admin/login" className="w-full text-destructive font-medium">
              Keluar (Logout)
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
