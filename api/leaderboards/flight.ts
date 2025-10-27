import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getTopFlight, addOrUpdateFlightScore } from '../../src/controllers/leaderboardController';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === 'GET') {
      // ✅ Return top 10 flight leaderboard
      const leaderboard = await getTopFlight(10);
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
