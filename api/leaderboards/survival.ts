import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getTopSurvival, addOrUpdateSurvivalScore } from '../../src/controllers/leaderboardController';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === 'GET') {
      // ✅ Return paginated survival leaderboard
      const page = Math.max(1, parseInt(req.query.page as string) || 1);
      const limit = Math.min(100, Math.max(1, parseInt(req.query.limit as string) || 10));
      
      const leaderboard = await getTopSurvival(page, limit);
      return res.status(200).json(leaderboard);
    }

    if (req.method === 'POST') {
      // ✅ Add or update a player's survival score
      const { username, points, wave, time } = req.body;
      if (!username || points === undefined || wave === undefined || time === undefined) {
        return res.status(400).json({ message: 'Missing required fields' });
      }

      const result = await addOrUpdateSurvivalScore(username, points, wave, time);
      return res.status(200).json(result);
    }

    return res.status(405).json({ message: 'Method Not Allowed' });
  } catch (error) {
    console.error('Error in /api/leaderboards/survival:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
