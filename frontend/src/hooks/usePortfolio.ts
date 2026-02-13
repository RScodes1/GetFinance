"use client";

import { useEffect, useState } from "react";
import { fetchPortfolio } from "@/services/portfolio.api";
import { Stock } from "@/types/portfolio";


export const usePortfolio = () => {
  const [data, setData] = useState<Stock[]>([]);
  const [totalValue, setTotalValue] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  const load = async (isInitial = false) => {
     if (isInitial) setLoading(true);

    try {
      const result = await fetchPortfolio();
 
      setData(result.sectors);               // ✅ array
      setTotalValue(result.totalPortfolioValue); // ✅ number
    } catch (err) {
      console.error("Portfolio fetch failed", err);
    } finally {
        if (isInitial) setLoading(false);
    }
  };

    useEffect(() => {
      load(true);
      const interval = setInterval(load, 15000);
      return () => clearInterval(interval);
    }, []);

  return { data, totalValue, loading };
};
