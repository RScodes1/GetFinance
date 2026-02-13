import {Stock} from "../types/portfolio";

export type PortfolioResponse = {
  sectors: Stock[];
  totalPortfolioValue: number;
};

export const fetchPortfolio = async (): Promise<PortfolioResponse> => {
  const res = await fetch("http://localhost:4500/api/portfolio", {
    cache: "no-store",
  });
    
  if (!res.ok) {
    throw new Error("Failed to fetch portfolio");
  }

  return res.json();
};
