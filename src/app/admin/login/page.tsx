"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, Mail, ArrowRight, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@bgtk.go.id");
  const [password, setPassword] = useState("admin123");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      toast.success("Login berhasil! Selamat datang di CMS BGTK Sumsel.");
      router.push("/admin/dashboard");
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F2C59] via-[#143B66] to-[#1E507A] flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Brand Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3 mx-auto">
            <img
              src="/file-statik/logo-kemendikdasmen.avif"
              alt="Logo Kemendikdasmen"
              className="h-11 w-auto object-contain"
            />
            <img
              src="/file-statik/logo-bgtk-putih.avif"
              alt="Logo BGTK Sumatera Selatan"
              className="h-10 w-auto object-contain"
            />
          </div>
          <h1 className="text-xl font-bold text-white tracking-tight">
            Admin CMS BGTK Sumsel
          </h1>
          <p className="text-xs text-slate-200">
            Sistem Informasi Manajemen & Pengelolaan Portal Terpadu
          </p>
        </div>

        {/* Login Card */}
        <Card className="bg-card text-card-foreground border-border shadow-xl p-6 sm:p-8 rounded-2xl">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-card-foreground flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-muted-foreground" /> Alamat Email Kedinasan
              </label>
              <Input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nama@bgtk.go.id"
                className="bg-secondary text-secondary-foreground border-border"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-card-foreground flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-muted-foreground" /> Kata Sandi (Password)
              </label>
              <Input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-secondary text-secondary-foreground border-border"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-muted-foreground pt-1">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded text-primary" />
                Ingat Sesi Saya
              </label>
              <span className="text-primary hover:underline cursor-pointer">Lupa Password?</span>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs py-2.5 mt-2 shadow-xs"
            >
              {isLoading ? "Memproses Autentikasi..." : "Masuk ke Dashboard CMS →"}
            </Button>

            <p className="text-[11px] text-muted-foreground text-center pt-2">
              Akun default: <span className="font-mono text-primary font-medium">admin@bgtk.go.id</span> / <span className="font-mono text-primary font-medium">admin123</span>
            </p>
          </form>
        </Card>

        {/* Tautan Kembali ke Portal Publik */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Kembali ke Portal Web Publik
          </Link>
        </div>
      </div>
    </div>
  );
}
