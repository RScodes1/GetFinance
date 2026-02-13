import {Stock} from "../types/portfolio";

export type PortfolioResponse = {
  sectors: Stock[];
  totalPortfolioValue: number;
};

export const fetchPortfolio = async (): Promise<PortfolioResponse> => {
   const res = await fetch("api/portfolio"); 
    
  if (!res.ok) {
    throw new Error("Failed to fetch portfolio");
  }

  return res.json();
};
