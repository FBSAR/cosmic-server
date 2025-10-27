import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const ec2Url = 'http://54.174.124.249:3000/api/players';

    const headersObj = req.headers as Record<string, string | string[] | undefined>;
    const outboundHeaders: Record<string, string> = {};
    for (const [key, value] of Object.entries(headersObj)) {
      if (key.toLowerCase() === 'host' || value === undefined) continue;
      outboundHeaders[key] = Array.isArray(value) ? value.join(',') : String(value);
    }

    const response = await fetch(ec2Url, {
      method: req.method,
      headers: outboundHeaders,
      body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined,
    });

    const data = await response.text();
    res.status(response.status).send(data);
  } catch (err) {
    console.error('Proxy error:', err);
    res.status(500).json({ error: 'Failed to fetch from EC2 API' });
  }
}
