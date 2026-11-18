import React, { Suspense } from "react";
import { PublicNavbar } from "@/components/layout/public-navbar";
import { PublicFooter } from "@/components/layout/public-footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Suspense fallback={<div className="h-20 bg-[#0F2C59] w-full" />}>
        <PublicNavbar />
      </Suspense>
      <main className="flex-1 w-full">{children}</main>
      <PublicFooter />
    </div>
  );
}
