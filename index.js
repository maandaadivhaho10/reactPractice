const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/webhook', (req, res) => {
  const { data } = req.body;

  if (typeof data !== 'string') {
    return res.status(400).json({ error: 'Invalid data format. Must be a string.' });
  }

  const sorted = data.split('').sort();
  res.json({ word: sorted });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
