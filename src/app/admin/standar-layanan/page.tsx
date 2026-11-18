"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FileCheck, Pencil, Clock, Download, ExternalLink, Save } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { mockServices } from "@/data/mock/mock-services";
import { ServiceStandardItem } from "@/types";

export default function AdminStandarLayananPage() {
  const [services, setServices] = useState<ServiceStandardItem[]>(mockServices);
  const [selectedService, setSelectedService] = useState<ServiceStandardItem | null>(null);

  const [editForm, setEditForm] = useState({
    title: "",
    completionTime: "",
    fee: "",
    productOutput: "",
  });

  const handleOpenEdit = (s: ServiceStandardItem) => {
    setSelectedService(s);
    setEditForm({
      title: s.title,
      completionTime: s.completionTime,
      fee: s.fee,
      productOutput: s.productOutput,
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedService) {
      setServices(
        services.map((item) =>
          item.id === selectedService.id ? { ...item, ...editForm } : item
        )
      );
      toast.success(`Standar layanan "${editForm.title}" berhasil diperbarui!`);
      setSelectedService(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-foreground tracking-tight">
            Standar Pelayanan & SOP
          </h1>
          <p className="text-xs text-muted-foreground">
            Kelola rincian 6 Standar Pelayanan Publik, waktu penyelesaian (SLA), dan dokumen formulir persyaratan
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((srv, idx) => (
          <Card key={srv.id} className="p-5 border-border shadow-xs flex flex-col justify-between bg-card text-card-foreground">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-[10px] font-mono text-primary bg-primary/15 border-border">
                  {srv.type}
                </Badge>
                <Badge className="bg-emerald-600 text-white text-[10px]">AKTIF</Badge>
              </div>

              <div>
                <span className="text-[10px] font-bold text-muted-foreground block mb-1">
                  STANDAR #{idx + 1}
                </span>
                <h3 className="font-bold text-card-foreground text-sm leading-snug">
                  {srv.title}
                </h3>
              </div>

              <div className="space-y-1.5 text-xs text-muted-foreground pt-1">
                <p>Waktu (SLA): <strong className="text-card-foreground">{srv.completionTime}</strong></p>
                <p>Tarif Biaya: <strong className="text-emerald-600">{srv.fee}</strong></p>
                <p className="line-clamp-1">Produk: {srv.productOutput}</p>
              </div>
            </div>

            <div className="pt-4 mt-3 border-t border-border flex items-center justify-between">
              <Link
                href={`/standar-pelayanan/${srv.slug}`}
                target="_blank"
                className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
              >
                Lihat Web <ExternalLink className="w-3 h-3" />
              </Link>

              <Button
                size="sm"
                variant="outline"
                onClick={() => handleOpenEdit(srv)}
                className="h-7 text-xs font-semibold border-border bg-secondary text-secondary-foreground hover:bg-muted"
              >
                <Pencil className="w-3 h-3 mr-1" /> Edit SOP
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Modal Edit Standar Layanan */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-md bg-card text-card-foreground border-border">
          <DialogHeader>
            <DialogTitle className="text-base font-bold text-foreground">
              Edit Standar Pelayanan
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              Perbarui batas waktu respon dan rincian dokumen
            </DialogDescription>
          </DialogHeader>

          {selectedService && (
            <form onSubmit={handleSave} className="space-y-3.5 pt-2">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-card-foreground">Nama Standar Layanan *</label>
                <Input
                  required
                  value={editForm.title}
                  onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                  className="bg-secondary text-secondary-foreground border-border text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-card-foreground">Jangka Waktu Penyelesaian (SLA) *</label>
                <Input
                  required
                  value={editForm.completionTime}
                  onChange={(e) => setEditForm({ ...editForm, completionTime: e.target.value })}
                  placeholder="Contoh: Paling lambat 3 hari kerja"
                  className="bg-secondary text-secondary-foreground border-border text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-card-foreground">Tarif / Biaya *</label>
                <Input
                  required
                  value={editForm.fee}
                  onChange={(e) => setEditForm({ ...editForm, fee: e.target.value })}
                  className="bg-secondary text-secondary-foreground border-border text-xs font-bold text-emerald-600"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-card-foreground">Produk Layanan yang Diterima *</label>
                <Input
                  required
                  value={editForm.productOutput}
                  onChange={(e) => setEditForm({ ...editForm, productOutput: e.target.value })}
                  className="bg-secondary text-secondary-foreground border-border text-xs"
                />
              </div>

              <div className="pt-3 flex justify-end gap-2">
                <Button type="button" variant="outline" size="sm" onClick={() => setSelectedService(null)} className="border-border bg-secondary text-secondary-foreground hover:bg-muted">
                  Batal
                </Button>
                <Button type="submit" size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  Simpan SOP
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
