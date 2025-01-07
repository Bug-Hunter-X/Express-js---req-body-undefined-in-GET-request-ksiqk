const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Trying to access req.body for a GET request
  const name = req.body.name;
  res.send(`Hello, ${name}!`);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});