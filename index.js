import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import routes from './src/routes/crmRoutes';

const app = express();
const port = 3000;

// setup mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => {
  res.send(`Node express server is running on ${port}`);
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
