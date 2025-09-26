import express from "express";
import cors from "cors";
import "dotenv/config";
import { leaderboardRouter } from "./routes/leaderboard";

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json()); // parses JSON body automatically

// Routes
app.use("/api/leaderboard", leaderboardRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`);
});