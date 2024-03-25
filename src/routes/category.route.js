import express from 'express';
import { getAllCategories, getByCategory } from '../controllers/category.js';
const categoryRouter = express.Router();

categoryRouter.route('/').get(getByCategory);

categoryRouter.route('/all').get(getAllCategories);

export { categoryRouter };
