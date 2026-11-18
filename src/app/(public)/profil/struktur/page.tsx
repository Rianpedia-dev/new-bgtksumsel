"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Users, Info, Award, Mail, Building, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { mockMembers } from "@/data/mock/mock-organization";
import { OrganizationMember } from "@/types";

export default function StrukturOrganisasiPage() {
  const [selectedMember, setSelectedMember] = useState<OrganizationMember | null>(null);

  const kepala = mockMembers.find((m) => m.hierarchyLevel === 1);
  const kasubbag = mockMembers.find((m) => m.hierarchyLevel === 2);
  const pokjaList = mockMembers.filter((m) => m.hierarchyLevel === 3);

  return (
    <div className="py-12 max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
      {/* Header */}
      <div className="space-y-2 border-b border-border/80 pb-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
          Struktur Organisasi & Profil Pejabat
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Susunan kepemimpinan dan penanggung jawab teknis Balai Guru dan Tenaga Kependidikan Provinsi Sumatera Selatan
        </p>
      </div>

      {/* Navigasi Sub-Menu */}
      <div className="flex flex-wrap gap-2">
        <Button asChild size="sm" variant="outline" className="border-border bg-card text-card-foreground hover:bg-muted">
          <Link href="/profil">Profil & Sejarah</Link>
        </Button>
        <Button asChild size="sm" variant="outline" className="border-border bg-card text-card-foreground hover:bg-muted">
          <Link href="/profil/visi-misi">Visi, Misi & Tujuan</Link>
        </Button>
        <Button asChild size="sm" variant="outline" className="border-border bg-card text-card-foreground hover:bg-muted">
          <Link href="/profil/tugas-fungsi">Tugas dan Fungsi</Link>
        </Button>
        <Button asChild size="sm" variant="gradient" className="shadow-xs">
          <Link href="/profil/struktur">Struktur Organisasi</Link>
        </Button>
      </div>

      {/* Bagan Hierarki Visual */}
      <div className="space-y-10">
        {/* Level 1: Kepala Balai */}
        {kepala && (
          <div className="flex flex-col items-center">
            <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
              Kepala Balai
            </p>
            <Card
              onClick={() => setSelectedMember(kepala)}
              className="w-full max-w-md p-5 border border-primary shadow-sm hover:shadow-md transition-all cursor-pointer bg-card text-card-foreground group"
            >
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-primary shadow-xs">
                  <img src={kepala.imageUrl} alt={kepala.name} className="w-full h-full object-cover group-hover:scale-102 transition-transform" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-card-foreground text-base leading-tight group-hover:text-primary transition-colors">
                    {kepala.name}
                  </h3>
                  <p className="text-xs text-primary font-medium">{kepala.position}</p>
                  <p className="text-xs text-muted-foreground font-mono">NIP. {kepala.nip}</p>
                </div>
              </div>
            </Card>

            {/* Garis Penghubung */}
            <div className="w-0.5 h-8 bg-primary/40 my-1"></div>
          </div>
        )}

        {/* Level 2: Kasubbag Tata Usaha */}
        {kasubbag && (
          <div className="flex flex-col items-center">
            <Card
              onClick={() => setSelectedMember(kasubbag)}
              className="w-full max-w-sm p-4 border border-border shadow-xs hover:shadow-md transition-all cursor-pointer bg-card text-card-foreground group"
            >
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border border-border shadow-xs">
                  <img src={kasubbag.imageUrl} alt={kasubbag.name} className="w-full h-full object-cover group-hover:scale-102 transition-transform" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs text-primary font-medium">{kasubbag.position}</p>
                  <h3 className="font-bold text-card-foreground text-sm leading-tight group-hover:text-primary transition-colors">
                    {kasubbag.name}
                  </h3>
                  <p className="text-[11px] text-muted-foreground font-mono">NIP. {kasubbag.nip}</p>
                </div>
              </div>
            </Card>

            {/* Garis Penghubung ke Pokja */}
            <div className="w-0.5 h-8 bg-primary/40 my-1"></div>
          </div>
        )}

        {/* Level 3: Kelompok Kerja (Pokja) & Fungsional */}
        <div>
          <div className="text-center mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Ketua Kelompok Kerja (Pokja) & Koordinator Layanan
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pokjaList.map((member) => (
              <Card
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="p-4 border border-border hover:border-primary shadow-xs hover:shadow-md transition-all cursor-pointer bg-card text-card-foreground flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-16 h-16 rounded-full overflow-hidden mx-auto border border-border shadow-xs">
                    <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover group-hover:scale-102 transition-transform" />
                  </div>
                  <div className="text-center space-y-1">
                    <p className="text-[11px] font-semibold text-primary line-clamp-1">{member.division}</p>
                    <h4 className="font-bold text-card-foreground text-xs sm:text-sm line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-[10px] text-muted-foreground line-clamp-2">{member.position}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Dialog Detail Pejabat */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-md bg-card text-card-foreground border-border">
          {selectedMember && (
            <div className="space-y-4">
              <DialogHeader>
                <DialogTitle className="text-lg font-bold text-foreground">
                  Profil Pejabat BGTK Sumsel
                </DialogTitle>
                <DialogDescription className="text-xs text-muted-foreground">
                  Informasi riwayat dan tugas jabatan
                </DialogDescription>
              </DialogHeader>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary text-secondary-foreground border border-border">
                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-border">
                  <img src={selectedMember.imageUrl} alt={selectedMember.name} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-secondary-foreground text-sm leading-tight">
                    {selectedMember.name}
                  </h3>
                  <p className="text-xs text-primary font-semibold">{selectedMember.position}</p>
                  {selectedMember.nip && (
                    <p className="text-[11px] text-muted-foreground font-mono">NIP. {selectedMember.nip}</p>
                  )}
                  {selectedMember.division && (
                    <p className="text-[11px] text-muted-foreground">{selectedMember.division}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2 text-xs text-card-foreground leading-relaxed">
                <h4 className="font-semibold text-foreground">Deskripsi Tugas & Ringkasan Peran:</h4>
                <p>{selectedMember.bio || "Bertanggung jawab dalam koordinasi peningkatan mutu pendidik dan pelayanan prima sesuai standar Kemendikbudristek."}</p>
              </div>

              <div className="pt-2 text-right">
                <Button onClick={() => setSelectedMember(null)} variant="outline" size="sm" className="border-border bg-secondary text-secondary-foreground hover:bg-muted">
                  Tutup
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
