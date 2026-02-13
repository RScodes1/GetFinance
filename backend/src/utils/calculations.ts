export const calculateInvestment = (price: number, qty: number) =>
  price * qty;

export const calculatePresentValue = (cmp: number, qty: number) =>
  cmp * qty;

export const calculateGainLoss = (present: number, investment: number) =>
  present - investment;

export const calculatePortfolioPercent = (
  present: number,
  total: number
) => (present / total) * 100;