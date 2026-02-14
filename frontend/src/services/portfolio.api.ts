import {Stock} from "../types/portfolio";
import { toast } from "react-toastify";

export type PortfolioResponse = {
  sectors: Stock[];
  totalPortfolioValue: number;
};

export const fetchPortfolio = async (): Promise<PortfolioResponse> => {
   const res = await fetch("api/portfolio"); 
    
  if (!res.ok) {
   toast.error("Failed to fetch portfolio");
  }

  return res.json();
};
