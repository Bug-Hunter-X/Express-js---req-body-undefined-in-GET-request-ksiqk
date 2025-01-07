const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Accessing req.query for GET request parameters
  const name = req.query.name;
  res.send(`Hello, ${name || 'World'}!`);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});