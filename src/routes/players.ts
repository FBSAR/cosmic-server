import { Router } from "express";
import { getAllPlayers, deletePlayer } from "../controllers/playersController";

export const playerRouter = Router();

playerRouter.get("/", async (req, res) => {
  const entry = await getAllPlayers();
  res.status(201).json(entry);
});
playerRouter.delete("/", async (req, res) => {
  const { email } = req.body;
  const entry = await deletePlayer(email);
  res.status(201).json(entry);
});