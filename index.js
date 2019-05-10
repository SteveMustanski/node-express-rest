import express from 'express';

import routes from './src/routes/crmRoutes';

const app = express();
const port = 3000;

routes(app);

app.get('/', (req, res) => {
  res.send(`Node express server is running on ${port}`);
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
