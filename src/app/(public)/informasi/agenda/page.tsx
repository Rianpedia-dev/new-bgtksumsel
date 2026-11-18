"use client";

import React, { useState } from "react";
import {
  Calendar as CalendarIcon,
  MapPin,
  Clock,
  User,
  ExternalLink,
  List,
  Grid,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { mockEvents } from "@/data/mock/mock-events";
import { EventStatus } from "@/types";

export default function AgendaPage() {
  const [statusFilter, setStatusFilter] = useState<string>("ALL");

  const filteredEvents = mockEvents.filter((evt) => {
    if (statusFilter === "ALL") return true;
    return evt.status === statusFilter;
  });

  const getStatusBadge = (status: EventStatus) => {
    switch (status) {
      case "UPCOMING":
        return <Badge variant="outline" className="border-primary/40 text-primary text-[10px] font-medium">Akan Datang</Badge>;
      case "ONGOING":
        return <Badge className="bg-primary text-primary-foreground text-[10px] font-medium">Sedang Berlangsung</Badge>;
      case "COMPLETED":
        return <Badge variant="secondary" className="bg-muted text-muted-foreground text-[10px] font-medium">Selesai</Badge>;
      case "CANCELLED":
        return <Badge variant="destructive" className="text-[10px] font-medium">Dibatalkan</Badge>;
    }
  };

  return (
    <div className="py-12 max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
      {/* Header */}
      <div className="space-y-2 border-b border-border/80 pb-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
          Kalender & Agenda Kegiatan
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Jadwal bimbingan teknis, lokakarya, webinar, dan uji kompetensi bagi pendidik di Sumatera Selatan
        </p>
      </div>

      {/* Filter Status Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {["ALL", "UPCOMING", "ONGOING", "COMPLETED"].map((st) => (
            <Button
              key={st}
              size="sm"
              variant={statusFilter === st ? "gradient" : "outline"}
              onClick={() => setStatusFilter(st)}
              className="text-xs"
            >
              {st === "ALL" && "Semua Kegiatan"}
              {st === "UPCOMING" && "Akan Datang"}
              {st === "ONGOING" && "Sedang Berlangsung"}
              {st === "COMPLETED" && "Selesai"}
            </Button>
          ))}
        </div>
      </div>

      {/* Grid List Agenda */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((evt) => (
          <Card key={evt.id} className="overflow-hidden flex flex-col justify-between border-border bg-card text-card-foreground hover:shadow-lg transition-all">
            <div>
              {evt.coverImageUrl && (
                <div className="h-44 overflow-hidden bg-muted">
                  <img src={evt.coverImageUrl} alt={evt.title} className="w-full h-full object-cover" />
                </div>
              )}
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <CalendarIcon className="w-3.5 h-3.5 text-primary" />
                    <span>
                      {new Date(evt.startDate).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  {getStatusBadge(evt.status)}
                </div>

                <h3 className="font-bold text-card-foreground text-base leading-snug line-clamp-2">
                  {evt.title}
                </h3>

                <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                  {evt.description}
                </p>

                <div className="pt-2 space-y-1.5 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span className="line-clamp-1">{evt.location}</span>
                  </div>
                  {evt.speaker && (
                    <div className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="line-clamp-1">Narasumber: {evt.speaker}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </div>

            <div className="p-5 pt-0">
              {evt.registrationUrl && evt.status === "UPCOMING" ? (
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs shadow-xs">
                  <a href={evt.registrationUrl} target="_blank" rel="noreferrer">
                    Daftar Sekarang <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                  </a>
                </Button>
              ) : (
                <div className="text-center text-xs text-muted-foreground italic py-2 border-t border-border">
                  Penyelenggara: {evt.organizer}
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
