import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`Node express server is running on ${port}`);
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
