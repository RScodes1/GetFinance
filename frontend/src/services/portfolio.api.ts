
import { toast } from "react-toastify";
import { SectorGroup } from "../types/portfolio";

export type PortfolioResponse = {
  sectors: SectorGroup[];
  totalPortfolioValue: number;
};


export const fetchPortfolio = async (): Promise<PortfolioResponse> => {
   const res = await fetch("api/portfolio"); 
    
  if (!res.ok) {
   toast.error("Failed to fetch portfolio");
  }

  return res.json();
};
