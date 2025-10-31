import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getAllPlayers, getPlayerByEmail } from '../../src/controllers/playersController';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === 'GET') {
      // ✅ Optional query param: /api/players?email=example@email.com
      const { email } = req.query;

      if (email && typeof email === 'string') {
        const player = await getPlayerByEmail(email);
        if (!player) {
          return res.status(404).json({ message: 'Player not found' });
        }
        return res.status(200).json(player);
      }

      // ✅ Return all players if no email is provided
      const players = await getAllPlayers();
      return res.status(200).json(players);
    }

    return res.status(405).json({ message: 'Method Not Allowed' });

  } catch (error) {
    console.error('Error in /api/players:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
