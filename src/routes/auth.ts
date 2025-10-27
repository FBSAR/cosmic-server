import { Router } from "express";
import { sixDigitCodeLogin, signUp, sixDigitCodeSignUp } from "../controllers/authController";

export const authRouter = Router();

authRouter.post("/six-digit-code-login", async (req, res) => {
  const { email } = req.body;
  const entry = await sixDigitCodeLogin(email);
  res.status(201).json(entry);
});
authRouter.post("/six-digit-code-sign-up", async (req, res) => {
  const { email, username } = req.body;
  const entry = await sixDigitCodeSignUp(email, username);
  res.status(201).json(entry);
});
authRouter.post("/sign-up", async (req, res) => {
  const { email, username } = req.body;
  const entry = await signUp(username, email);
  res.status(201).json(entry);
});
