import { Router } from "express";
import { getAllPlayers } from "../controllers/playersController";

export const playerRouter = Router();

playerRouter.get("/", async (req, res) => {
  const entry = await getAllPlayers();
  res.status(201).json(entry);
});