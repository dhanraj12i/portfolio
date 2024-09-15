import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/shared/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HoverCard } from "@/components/ui/hover-card";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dhanraj Patil",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <HoverCard>
          <TooltipProvider delayDuration={100}>
            <ThemeProvider attribute="class" defaultTheme="light">
              <Header />
              {children}
              <SpeedInsights />
              <Toaster />
              <Footer />
            </ThemeProvider>
          </TooltipProvider>
        </HoverCard>
        <Script src="https://platform.linkedin.com/badges/js/profile.js" />
      </body>
    </html>
  );
}
