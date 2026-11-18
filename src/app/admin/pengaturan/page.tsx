"use client";

import React, { useState } from "react";
import {
  Users,
  Shield,
  Clock,
  Globe,
  Save,
  Plus,
  Trash2,
  CheckCircle2,
  Key,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { mockUsers, mockAuditLogs, mockSiteSettings } from "@/data/mock/mock-users";
import { User, UserRole } from "@/types";

export default function AdminPengaturanPage() {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [settings, setSettings] = useState(mockSiteSettings);

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Pengaturan umum website berhasil disimpan!");
  };

  const getRoleBadge = (role: UserRole) => {
    switch (role) {
      case "SUPER_ADMIN":
        return <Badge className="bg-destructive text-destructive-foreground text-[10px]">SUPER_ADMIN</Badge>;
      case "EDITOR":
        return <Badge className="bg-primary text-primary-foreground text-[10px]">EDITOR</Badge>;
      case "VERIFIER":
        return <Badge className="bg-amber-600 text-white text-[10px]">VERIFIER</Badge>;
      case "AUDITOR":
        return <Badge variant="secondary" className="text-[10px] bg-secondary text-secondary-foreground border border-border">AUDITOR</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-foreground tracking-tight">
            Pengaturan Sistem & Manajemen Akun
          </h1>
          <p className="text-xs text-muted-foreground">
            Kelola hak akses pengguna (RBAC), audit trail aktivitas, dan konfigurasi identitas situs
          </p>
        </div>
      </div>

      <Tabs defaultValue="users" className="space-y-6">
        <TabsList className="bg-card text-card-foreground border border-border p-1">
          <TabsTrigger value="users" className="text-xs font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Hak Akses Pengguna ({users.length})
          </TabsTrigger>
          <TabsTrigger value="audit" className="text-xs font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Audit Trail & Log Aktivitas
          </TabsTrigger>
          <TabsTrigger value="website" className="text-xs font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Identitas Situs & Kontak
          </TabsTrigger>
        </TabsList>

        {/* TAB 1: USERS RBAC */}
        <TabsContent value="users" className="space-y-4">
          <Card className="border-border bg-card text-card-foreground shadow-xs overflow-hidden">
            <div className="p-4 border-b border-border flex items-center justify-between">
              <h2 className="text-sm font-bold text-foreground">
                Daftar Pengguna Administrator & Peran
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-secondary text-secondary-foreground font-bold uppercase tracking-wider text-[11px] border-b border-border">
                  <tr>
                    <th className="py-3 px-4">Nama Akun</th>
                    <th className="py-3 px-4">Email</th>
                    <th className="py-3 px-4 text-center">Hak Akses (Role)</th>
                    <th className="py-3 px-4 text-center">Status</th>
                    <th className="py-3 px-4 text-center">Login Terakhir</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {users.map((u) => (
                    <tr key={u.id} className="hover:bg-muted/40 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-card-foreground">{u.name}</td>
                      <td className="py-3.5 px-4 text-muted-foreground">{u.email}</td>
                      <td className="py-3.5 px-4 text-center">{getRoleBadge(u.role)}</td>
                      <td className="py-3.5 px-4 text-center">
                        <Badge className="bg-emerald-600 text-white text-[10px]">AKTIF</Badge>
                      </td>
                      <td className="py-3.5 px-4 text-center text-muted-foreground">
                        {u.lastLoginAt ? new Date(u.lastLoginAt).toLocaleDateString("id-ID", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }) : "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>

        {/* TAB 2: AUDIT LOGS */}
        <TabsContent value="audit" className="space-y-4">
          <Card className="border-border bg-card text-card-foreground shadow-xs overflow-hidden">
            <div className="p-4 border-b border-border flex items-center justify-between">
              <h2 className="text-sm font-bold text-foreground">
                Catatan Jejak Digital & Audit Trail
              </h2>
              <span className="text-xs text-muted-foreground">Pencatatan real-time perubahan data</span>
            </div>
            <div className="divide-y divide-border">
              {mockAuditLogs.map((log) => (
                <div key={log.id} className="p-4 flex items-start justify-between gap-4 text-xs hover:bg-muted/30 transition-colors">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-card-foreground">{log.userName}</span>
                      <Badge variant="outline" className="text-[10px] font-mono border-border text-foreground">{log.action}</Badge>
                      <span className="text-muted-foreground font-mono text-[11px]">• IP: {log.ipAddress}</span>
                    </div>
                    <p className="text-muted-foreground">{log.details}</p>
                  </div>
                  <span className="text-[11px] text-muted-foreground whitespace-nowrap">
                    {new Date(log.createdAt).toLocaleDateString("id-ID", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* TAB 3: WEBSITE SETTINGS */}
        <TabsContent value="website" className="space-y-4">
          <Card className="p-6 border-border shadow-xs bg-card text-card-foreground">
            <form onSubmit={handleSaveSettings} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-card-foreground">Nama Resmi Instansi</label>
                <Input
                  value={settings.siteName}
                  onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                  className="bg-secondary text-secondary-foreground border-border text-xs font-semibold"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-card-foreground">Tagline Instansi</label>
                <Input
                  value={settings.tagline}
                  onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
                  className="bg-secondary text-secondary-foreground border-border text-xs"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-card-foreground">Telepon Resmi</label>
                  <Input
                    value={settings.phone}
                    onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                    className="bg-secondary text-secondary-foreground border-border text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-card-foreground">WhatsApp Layanan</label>
                  <Input
                    value={settings.whatsapp}
                    onChange={(e) => setSettings({ ...settings, whatsapp: e.target.value })}
                    className="bg-secondary text-secondary-foreground border-border text-xs"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-card-foreground">Alamat Fisik Kantor</label>
                <Textarea
                  rows={2}
                  value={settings.address}
                  onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                  className="bg-secondary text-secondary-foreground border-border text-xs leading-relaxed"
                />
              </div>

              <div className="pt-2">
                <Button type="submit" size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs shadow-xs">
                  <Save className="w-3.5 h-3.5 mr-1.5" /> Simpan Pengaturan Situs
                </Button>
              </div>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
