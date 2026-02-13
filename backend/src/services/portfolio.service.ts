import { getYahooQuoteSafe } from "./yahoo.service";
import { getCache, setCache } from "../cache/memoryCache";
import {
  calculateInvestment,
  calculatePresentValue,
  calculateGainLoss,
  calculatePortfolioPercent,
} from "../utils/calculations";
import { holdings } from "../data/holdings";
import { env } from "../config/env";

const CACHE_KEY = env.CACHE_KEY;
const TTL = env.CACHE_TTL;

export const getPortfolio = async () => {
  const cached = getCache(CACHE_KEY);
  if (cached) return cached;

  const quotes = await Promise.all(
    holdings.map((h) => getYahooQuoteSafe(h.symbol))
  );

  const merged = holdings.map((holding, i) => {
    const quote = quotes[i];
    const cmp = quote?.cmp ?? 0;

    const investment = calculateInvestment(
      holding.purchasePrice,
      holding.quantity
    );

    const presentValue = calculatePresentValue(
      cmp,
      holding.quantity
    );

    const gainLoss = calculateGainLoss(
      presentValue,
      investment
    );

    return {
      ...holding,
      cmp,
      investment,
      presentValue,
      gainLoss,
      peRatio: quote?.peRatio ?? null,
      exchange: quote?.exchange ?? null,
    };
  });

  const totalPortfolio = merged.reduce(
    (sum, s) => sum + s.presentValue,
    0
  );

  const stocksWithPercent = merged.map((stock) => ({
    ...stock,
    portfolioPercent: calculatePortfolioPercent(
      stock.presentValue,
      totalPortfolio
    ),
  }));

  const grouped = stocksWithPercent.reduce((acc, stock) => {
    if (!acc[stock.sector]) {
      acc[stock.sector] = {
        sector: stock.sector,
        totalInvestment: 0,
        totalPresentValue: 0,
        gainLoss: 0,
        stocks: [],
      };
    }

    acc[stock.sector].stocks.push(stock);
    acc[stock.sector].totalInvestment += stock.investment;
    acc[stock.sector].totalPresentValue += stock.presentValue;
    acc[stock.sector].gainLoss += stock.gainLoss;

    return acc;
  }, {} as Record<string, any>);

  const response = {
    totalPortfolioValue: totalPortfolio,
    sectors: Object.values(grouped),
  };

  setCache(CACHE_KEY, response, TTL);

  return response;
};
