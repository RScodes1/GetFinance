import YahooFinance from "yahoo-finance2";

const yahooFinance = new YahooFinance({
  suppressNotices: ["yahooSurvey"],
});

export const fetchYahooQuote = async (symbol: string) => {
  try {
    const quote = await yahooFinance.quote(symbol);

    return {
      symbol,
      cmp: quote?.regularMarketPrice ?? 0,
      peRatio: quote?.trailingPE ?? null,
      exchange: quote?.fullExchangeName ?? null,
    };
  } catch (error) {
    console.error("Yahoo fetch failed:", symbol, error);

    return {
      symbol,
      cmp: 0,
      peRatio: null,
      exchange: null,
    };
  }
};
