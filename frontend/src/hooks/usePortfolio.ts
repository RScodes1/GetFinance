"use client";

import { useEffect, useState } from "react";
import { fetchPortfolio } from "@/services/portfolio.api";
import { SectorGroup } from "../types/portfolio";

export const usePortfolio = () => {
  const [data, setData] = useState<SectorGroup[]>([]);
  const [totalValue, setTotalValue] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const result = await fetchPortfolio();
        setData(result.sectors);
        setTotalValue(result.totalPortfolioValue);
      } catch (err) {
        console.error("Portfolio fetch failed", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return { data, totalValue, loading };
};
