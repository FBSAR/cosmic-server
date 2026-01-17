import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getTopFlight, addOrUpdateFlightScore } from '../../src/controllers/leaderboardController';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === 'GET') {
      // ✅ Return paginated flight leaderboard
      const page = Math.max(1, parseInt(req.query.page as string) || 1);
      const limit = Math.min(100, Math.max(1, parseInt(req.query.limit as string) || 10));
      
      const leaderboard = await getTopFlight(page, limit);
      return res.status(200).json(leaderboard);
    }

    if (req.method === 'POST') {
      // ✅ Add or update a player's flight score
      const { username, time } = req.body;
      if (!username || time === undefined) {
        return res.status(400).json({ message: 'Missing required fields' });
      }

      const result = await addOrUpdateFlightScore(username, time);
      return res.status(200).json(result);
    }

    return res.status(405).json({ message: 'Method Not Allowed' });
  } catch (error) {
    console.error('Error in /api/leaderboards/flight:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
