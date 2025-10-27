import type { VercelRequest, VercelResponse } from '@vercel/node';
import { signUp } from '../../src/controllers/authController';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ message: 'Method Not Allowed' });

  const { username, email } = req.body;

  if (!username || !email)
    return res.status(400).json({ message: 'Username and email are required' });

  try {
    const result = await signUp(username, email);
    res.status(200).json(result);
  } catch (err) {
    console.error('Error during sign-up:', err);
    res.status(500).json({ message: 'Failed to sign up user' });
  }
}
