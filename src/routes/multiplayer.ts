import { Router } from "express";
import { sixDigitSessionId } from "../controllers/multiplayerController";

export const multiplayerRouter = Router();

multiplayerRouter.get("/six-digit-code-session-id", async (req, res) => {
  const entry = await sixDigitSessionId(6);
  res.status(201).json(entry);
});
