import express from 'express';
import { randomRouter } from './random.route.js';
import { categoryRouter } from './category.route.js';
import { searchRouter } from './search.route.js';

const router = express.Router();

router.use('/api/v1/random', randomRouter);

router.use('/api/v1/category', categoryRouter);

router.use('/api/v1/search', searchRouter);

export default router;
