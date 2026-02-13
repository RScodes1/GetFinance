import type { Request, Response } from "express";
import { getPortfolio } from "../services/portfolio.service";

export const portfolioController = async (
  req: Request,
  res: Response
) => {
  try {
    const data = await getPortfolio();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch portfolio" });
  }
};