"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { usePortfolio } from "@/hooks/usePortfolio";
import PortfolioTable from "@/components/portfolioTable";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const { data, loading } = usePortfolio();

  return (
    <main
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen p-10 bg-gray-50`}
    >
      <h1 className="text-3xl font-bold mb-6">
        Stock Portfolio Dashboard
      </h1>

      {loading ? (
        <p>Loading portfolio...</p>
      ) : (
        <PortfolioTable data={data} />
      )}
    </main>
  );
}
