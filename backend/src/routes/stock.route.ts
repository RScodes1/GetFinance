import { Router } from "express";
import { portfolioController } from "../controllers/stock.controller";

const stockRouter = Router();

stockRouter.get("/portfolio", portfolioController);

export default stockRouter;