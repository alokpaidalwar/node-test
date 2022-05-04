import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import stopwatch from './routes/stopwatch.router.js';
import { DBURL, PORT } from './config.js';

const app = express();

mongoose
  .connect(`${DBURL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('db connected'));
app.set('trust proxy', true);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(stopwatch);

app.listen(PORT, () => {
  console.log(`Ready on port ${PORT}`);
});

export default app;
