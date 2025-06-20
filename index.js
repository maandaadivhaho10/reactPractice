export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { data } = req.body;

  if (typeof data !== 'string') {
    return res.status(400).json({ error: 'Invalid data format. Must be a string.' });
  }

  const sorted = data.split('').sort().join(''); // join to make string from array
  return res.status(200).json({ word: sorted });
}
