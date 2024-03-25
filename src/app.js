import express from 'express';
const app = express();
import indexRouter from './routes/index.route.js';
import cors from 'cors';
import { corsOptions } from './config/cors.config.js';

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);

app.get('/', (req, res) => {
  res.send(`Hello world`);
});

export default app;
