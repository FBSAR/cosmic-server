import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sixDigitCodeUpdateEmail } from '../../src/controllers/authController';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

  const { email, newEmail } = req.body;
  if (!email || !newEmail) return res.status(400).json({ message: 'Email and newEmail are required' });

  try {
    const result = await sixDigitCodeUpdateEmail(email, newEmail);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: 'Failed to send verification code.' });
  }
}
