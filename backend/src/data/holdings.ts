import type { Holding } from "../types/stock.types";

export const holdings: Holding[] = [
  { symbol: "RELIANCE.NS", quantity: 10, purchasePrice: 2500, sector: "Energy" },
  { symbol: "ONGC.NS", quantity: 20, purchasePrice: 180, sector: "Energy" },

  { symbol: "TCS.NS", quantity: 5, purchasePrice: 3500, sector: "IT" },
  { symbol: "INFY.NS", quantity: 12, purchasePrice: 1450, sector: "IT" },
  { symbol: "WIPRO.NS", quantity: 25, purchasePrice: 420, sector: "IT" },

  { symbol: "HDFCBANK.NS", quantity: 8, purchasePrice: 1400, sector: "Financials" },
  { symbol: "ICICIBANK.NS", quantity: 10, purchasePrice: 900, sector: "Financials" },
  { symbol: "KOTAKBANK.NS", quantity: 6, purchasePrice: 1750, sector: "Financials" },

  { symbol: "HINDUNILVR.NS", quantity: 7, purchasePrice: 2600, sector: "FMCG" },
  { symbol: "ITC.NS", quantity: 30, purchasePrice: 450, sector: "FMCG" },
];
