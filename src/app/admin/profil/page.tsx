"use client";

import React, { useState } from "react";
import {
  Building2,
  Users,
  Save,
  Plus,
  Pencil,
  Trash2,
  CheckCircle2,
  Upload,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { mockProfileContent, mockMembers } from "@/data/mock/mock-organization";
import { OrganizationMember } from "@/types";

export default function AdminProfilPage() {
  const [profileText, setProfileText] = useState(mockProfileContent.aboutText);
  const [vision, setVision] = useState(mockProfileContent.vision);
  const [members, setMembers] = useState<OrganizationMember[]>(mockMembers);
  const [editingMember, setEditingMember] = useState<OrganizationMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form modal state
  const [memberForm, setMemberForm] = useState({
    name: "",
    nip: "",
    position: "",
    division: "",
    hierarchyLevel: 3 as 1 | 2 | 3,
  });

  const handleSaveProfile = () => {
    toast.success("Konten profil instansi berhasil diperbarui!");
  };

  const handleOpenAdd = () => {
    setEditingMember(null);
    setMemberForm({
      name: "",
      nip: "",
      position: "",
      division: "",
      hierarchyLevel: 3,
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (m: OrganizationMember) => {
    setEditingMember(m);
    setMemberForm({
      name: m.name,
      nip: m.nip || "",
      position: m.position,
      division: m.division || "",
      hierarchyLevel: m.hierarchyLevel,
    });
    setIsModalOpen(true);
  };

  const handleSaveMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingMember) {
      setMembers(
        members.map((m) =>
          m.id === editingMember.id ? { ...m, ...memberForm } : m
        )
      );
      toast.success("Data pejabat berhasil diperbarui!");
    } else {
      const newM: OrganizationMember = {
        id: `mem-${Date.now()}`,
        name: memberForm.name,
        nip: memberForm.nip,
        position: memberForm.position,
        division: memberForm.division,
        hierarchyLevel: memberForm.hierarchyLevel,
        sortOrder: members.length + 1,
        imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      };
      setMembers([...members, newM]);
      toast.success("Pejabat baru berhasil ditambahkan!");
    }
    setIsModalOpen(false);
  };

  const handleDeleteMember = (id: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus data pejabat ini?")) {
      setMembers(members.filter((m) => m.id !== id));
      toast.success("Pejabat berhasil dihapus.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-foreground tracking-tight">
            Profil Balai & Struktur Organisasi
          </h1>
          <p className="text-xs text-muted-foreground">
            Perbarui data profil lembaga, visi-misi, tugas fungsi, dan daftar pejabat struktural
          </p>
        </div>
      </div>

      <Tabs defaultValue="pejabat" className="space-y-6">
        <TabsList className="bg-card text-card-foreground border border-border p-1">
          <TabsTrigger value="pejabat" className="text-xs font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Pejabat & Struktur ({members.length})
          </TabsTrigger>
          <TabsTrigger value="tentang" className="text-xs font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Sejarah & Tentang BGTK
          </TabsTrigger>
          <TabsTrigger value="visimisi" className="text-xs font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Visi, Misi & Sasaran
          </TabsTrigger>
        </TabsList>

        {/* TAB 1: DAFTAR PEJABAT STRUKTUR */}
        <TabsContent value="pejabat" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-foreground">
              Daftar Pejabat & Pimpinan Struktural
            </h2>
            <Button onClick={handleOpenAdd} size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs shadow-xs">
              <Plus className="w-3.5 h-3.5 mr-1" /> Tambah Pejabat Baru
            </Button>
          </div>

          <Card className="border-border bg-card text-card-foreground shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-secondary text-secondary-foreground font-bold uppercase tracking-wider text-[11px] border-b border-border">
                  <tr>
                    <th className="py-3 px-4">Pejabat</th>
                    <th className="py-3 px-4">Jabatan</th>
                    <th className="py-3 px-4">Divisi / Pokja</th>
                    <th className="py-3 px-4 text-center">Tingkat</th>
                    <th className="py-3 px-4 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {members.map((m) => (
                    <tr key={m.id} className="hover:bg-muted/40 transition-colors">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <img src={m.imageUrl} alt={m.name} className="w-9 h-9 rounded-full object-cover border border-border" />
                          <div>
                            <div className="font-bold text-card-foreground">{m.name}</div>
                            <div className="text-[11px] text-muted-foreground font-mono">NIP. {m.nip || "-"}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 font-semibold text-card-foreground">{m.position}</td>
                      <td className="py-3 px-4 text-muted-foreground">{m.division || "Pimpinan Utama"}</td>
                      <td className="py-3 px-4 text-center">
                        <Badge variant="outline" className="text-[10px] border-border text-foreground">
                          Level {m.hierarchyLevel}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-right space-x-1.5 whitespace-nowrap">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleOpenEdit(m)}
                          className="h-7 text-[11px] border-border bg-secondary text-secondary-foreground hover:bg-muted"
                        >
                          <Pencil className="w-3 h-3 mr-1" /> Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDeleteMember(m.id)}
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

        {/* TAB 2: TENTANG BGTK */}
        <TabsContent value="tentang" className="space-y-4">
          <Card className="p-6 border-border bg-card text-card-foreground shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-foreground">Deskripsi Sejarah & Profil Lembaga</h3>
            <Textarea
              rows={8}
              value={profileText}
              onChange={(e) => setProfileText(e.target.value)}
              className="bg-secondary text-secondary-foreground border-border text-xs sm:text-sm leading-relaxed"
            />
            <Button onClick={handleSaveProfile} size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs shadow-xs">
              <Save className="w-3.5 h-3.5 mr-1.5" /> Simpan Perubahan Profil
            </Button>
          </Card>
        </TabsContent>

        {/* TAB 3: VISI MISI */}
        <TabsContent value="visimisi" className="space-y-4">
          <Card className="p-6 border-border bg-card text-card-foreground shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-foreground">Visi BGTK Sumatera Selatan</h3>
            <Textarea
              rows={3}
              value={vision}
              onChange={(e) => setVision(e.target.value)}
              className="bg-secondary text-secondary-foreground border-border text-xs sm:text-sm font-medium leading-relaxed"
            />
            <Button onClick={handleSaveProfile} size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs shadow-xs">
              <Save className="w-3.5 h-3.5 mr-1.5" /> Simpan Visi
            </Button>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Modal Dialog Tambah / Edit Pejabat */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md bg-card text-card-foreground border-border">
          <DialogHeader>
            <DialogTitle className="text-base font-bold text-foreground">
              {editingMember ? "Edit Data Pejabat" : "Tambah Pejabat Baru"}
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              Isi data identitas pimpinan atau ketua kelompok kerja
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSaveMember} className="space-y-3.5 pt-2">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-card-foreground">Nama Lengkap & Gelar *</label>
              <Input
                required
                value={memberForm.name}
                onChange={(e) => setMemberForm({ ...memberForm, name: e.target.value })}
                placeholder="Contoh: Dra. Hj. Nurjanah, M.Pd"
                className="bg-secondary text-secondary-foreground border-border"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-card-foreground">NIP (Nomor Induk Pegawai)</label>
              <Input
                value={memberForm.nip}
                onChange={(e) => setMemberForm({ ...memberForm, nip: e.target.value })}
                placeholder="19680512 199403 2 001"
                className="bg-secondary text-secondary-foreground border-border"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-card-foreground">Nama Jabatan *</label>
              <Input
                required
                value={memberForm.position}
                onChange={(e) => setMemberForm({ ...memberForm, position: e.target.value })}
                placeholder="Contoh: Kepala Balai / Ketua Pokja Transformasi"
                className="bg-secondary text-secondary-foreground border-border"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-card-foreground">Bagian / Pokja</label>
              <Input
                value={memberForm.division}
                onChange={(e) => setMemberForm({ ...memberForm, division: e.target.value })}
                placeholder="Contoh: Pokja Guru Penggerak"
                className="bg-secondary text-secondary-foreground border-border"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-card-foreground">Tingkat Hierarki *</label>
              <select
                value={memberForm.hierarchyLevel}
                onChange={(e) => setMemberForm({ ...memberForm, hierarchyLevel: Number(e.target.value) as 1 | 2 | 3 })}
                className="w-full text-xs p-2 rounded-md border border-border bg-secondary text-secondary-foreground"
              >
                <option value={1}>Level 1: Pimpinan Tertinggi (Kepala Balai)</option>
                <option value={2}>Level 2: Eselon IV (Kasubbag TU)</option>
                <option value={3}>Level 3: Ketua Pokja / Fungsional</option>
              </select>
            </div>

            <div className="pt-3 flex justify-end gap-2">
              <Button type="button" variant="outline" size="sm" onClick={() => setIsModalOpen(false)} className="border-border bg-secondary text-secondary-foreground hover:bg-muted">
                Batal
              </Button>
              <Button type="submit" size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Simpan Pejabat
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
