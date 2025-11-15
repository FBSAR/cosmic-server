import express from "express";
import cors from "cors";
import "dotenv/config";
import { leaderboardRouter } from "./routes/leaderboard";
import { playerRouter } from "./routes/players";
import { authRouter } from "./routes/auth";
import { multiplayerRouter } from "./routes/multiplayer";

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json()); // parses JSON body automatically

// Routes
app.use("/api/leaderboard", leaderboardRouter);
app.use("/api/players", playerRouter);
app.use("/api/auth", authRouter);
app.use("/api/multiplayer", multiplayerRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`);
});