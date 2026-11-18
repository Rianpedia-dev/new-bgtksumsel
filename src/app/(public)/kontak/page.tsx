"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Building,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { mockSiteSettings } from "@/data/mock/mock-users";

export default function KontakPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Pesan Anda telah berhasil dikirimkan ke Tim Layanan BGTK Sumsel!");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="py-12 max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
      {/* Header */}
      <div className="space-y-2 border-b border-border/80 pb-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
          Kontak & Lokasi Kantor
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Kanal komunikasi resmi dan alamat kantor Balai Guru dan Tenaga Kependidikan Provinsi Sumatera Selatan
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Kolom Kiri: Informasi Kontak & Peta */}
        <div className="lg:col-span-6 space-y-6">
          <Card className="p-6 border-border bg-card text-card-foreground shadow-xs space-y-4">
            <h2 className="text-base font-bold text-foreground flex items-center gap-2">
              <Building className="w-5 h-5 text-primary" /> Informasi Kantor Resmi
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-card-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-foreground block mb-0.5">Alamat Fisik:</span>
                  <p className="leading-relaxed">{mockSiteSettings.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <span className="font-bold text-foreground block mb-0.5">Telepon & Fax:</span>
                  <p>{mockSiteSettings.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <span className="font-bold text-foreground block mb-0.5">WhatsApp Layanan Terpadu:</span>
                  <p>{mockSiteSettings.whatsapp}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <span className="font-bold text-foreground block mb-0.5">Email Kepegawaian & Publik:</span>
                  <p>{mockSiteSettings.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <span className="font-bold text-foreground block mb-0.5">Jam Layanan Loket Tatap Muka:</span>
                  <p>{mockSiteSettings.workingHours}</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Embed Google Maps */}
          <Card className="overflow-hidden border-border bg-card shadow-xs">
            <div className="h-64 w-full bg-muted">
              <iframe
                title="Peta Lokasi BGTK Sumsel"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127504.42171408169!2d104.675000!3d-2.950000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b7593c0000001%3A0x1!2sPalembang%2C+South+Sumatra!5e0!3m2!1sen!2sid!4v1600000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
          </Card>
        </div>

        {/* Kolom Kanan: Form Hubungi Kami */}
        <div className="lg:col-span-6">
          <Card className="p-6 border-border bg-card text-card-foreground shadow-xs">
            <h2 className="text-base font-bold text-foreground mb-1">
              Kirim Pesan / Pertanyaan Langsung
            </h2>
            <p className="text-xs text-muted-foreground mb-6">
              Sampaikan aspirasi umum atau permohonan informasi kepada tim pengelola portal
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-card-foreground">Nama Lengkap *</label>
                <Input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Nama Anda"
                  className="bg-secondary text-secondary-foreground border-border"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-card-foreground">Email *</label>
                  <Input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="email@domain.com"
                    className="bg-secondary text-secondary-foreground border-border"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-card-foreground">No. WhatsApp</label>
                  <Input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="0812xxxxxxx"
                    className="bg-secondary text-secondary-foreground border-border"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-card-foreground">Isi Pesan *</label>
                <Textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tuliskan pertanyaan atau permohonan informasi Anda secara jelas..."
                  className="bg-secondary text-secondary-foreground border-border"
                />
              </div>

              <Button
                type="submit"
                variant="gradientVariant"
                className="w-full font-semibold text-sm py-3 shadow-md"
              >
                <Send className="w-3.5 h-3.5 mr-1.5" /> Kirim Pesan
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
