export type Holding = {
  symbol: string;
  quantity: number;
  purchasePrice: number;
  sector: string;
};

export type StockData = {
  symbol: string;
  cmp: number;
  peRatio?: number;
  latestEarnings?: number;
  exchange?: string;
};

export type PortfolioStock = Holding & {
  investment: number;
  presentValue: number;
  gainLoss: number;
  portfolioPercent: number;
  cmp: number;
  peRatio?: number;
  latestEarnings?: number;
  exchange?: string;
};