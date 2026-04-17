const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.json({ status: 'Server chal raha hai! ✅' });
});

app.listen(3000, () => console.log('Server port 3000 pe hai'));
module.exports = app;