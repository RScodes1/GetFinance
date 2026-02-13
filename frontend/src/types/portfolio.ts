export type Stock = {
  symbol: string;
  quantity: number;
  purchasePrice: number;
  sector: string;

  cmp: number;
  investment: number;
  presentValue: number;
  gainLoss: number;
  portfolioPercent: number;

  peRatio?: number | null;
  exchange?: string | null;
};

export type SectorGroup = {
  sector: string;
  totalInvestment: number;
  totalPresentValue: number;
  gainLoss: number;
  stocks: Stock[];
};
