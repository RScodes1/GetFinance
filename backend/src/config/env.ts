import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT || 5000,
  CACHE_TTL: Number(process.env.CACHE_TTL) || 15000,
  CACHE_KEY: String(process.env.CACHE_KEY)
};