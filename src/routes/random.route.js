import express from 'express';
import { getRandomJoke } from '../controllers/random.js';
const randomRouter = express.Router();

randomRouter.route('/').get(getRandomJoke);

export { randomRouter };
