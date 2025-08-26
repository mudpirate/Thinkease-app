"use client";

import { usePathname } from "next/navigation";
import { Providers } from "@/components/provider";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { SessionProvider } from "@/lib/context/session-context";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/"; // ✅ true only on home

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar isHome={isHome} /> {/* pass prop to Navbar */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
