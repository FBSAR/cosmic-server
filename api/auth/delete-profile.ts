import type { VercelRequest, VercelResponse } from '@vercel/node';
import { deleteProfile } from '../../src/controllers/authController';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

  const { email } = req.body;
  if (!email) return res.status(400).json({ message: 'Email is required' });

  try {
    const result = await deleteProfile(email);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete profile.' });
  }
}
