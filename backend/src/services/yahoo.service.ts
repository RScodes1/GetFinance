import { fetchYahooQuote } from "../providers/yahoo.provider";

export const getYahooQuoteSafe = async (symbol: string) => {
  const quote = await fetchYahooQuote(symbol);

  // graceful fallback
  if (!quote || !quote.cmp) {
    return {
      symbol,
      cmp: 0,
      peRatio: undefined,
      exchange: undefined,
    };
  }

  return quote;
};