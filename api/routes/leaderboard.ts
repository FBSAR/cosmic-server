import { Router } from "express";
import { addOrUpdateSurvivalScore, getTopSurvival, addOrUpdateFlightScore, getTopFlight } from "../controllers/leaderboardController";

export const leaderboardRouter = Router();

// Survival
leaderboardRouter.post("/survival", async (req, res) => {
  const { username, points, wave, time } = req.body;
  const entry = await addOrUpdateSurvivalScore(username, points, wave, time);
  res.status(201).json(entry);
});

leaderboardRouter.get("/survival", async (req, res) => {
  const top = await getTopSurvival();
  res.json(top);
});

// Flight
leaderboardRouter.post("/flight", async (req, res) => {
  const { username, time } = req.body;
  const entry = await addOrUpdateFlightScore(username, time);
  res.status(201).json(entry);
});

leaderboardRouter.get("/flight", async (req, res) => {
  const top = await getTopFlight();
  res.json(top);
});
