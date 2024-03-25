import express from 'express';
import { getBySearch } from '../controllers/search.js';
const searchRouter = express.Router();

searchRouter.route('/').get(getBySearch);

export { searchRouter };
