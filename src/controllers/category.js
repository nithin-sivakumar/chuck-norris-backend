import { Joke } from '../models/random.model.js';
import { ApiResponse } from '../utils/ApiResponse.js';

export async function getByCategory(req, res) {
  try {
    const all = await Joke.find({ category: req.query.c });

    if (all.length === 0) {
      return res
        .status(400)
        .send(new ApiResponse(400, null, 'Invalid category'));
    }

    const randomIndex = Math.floor(Math.random() * all.length);
    res.send(
      new ApiResponse(200, all[randomIndex], 'Fetched random joke successfully')
    );
  } catch (error) {
    console.log(error);
    res.send(new ApiResponse(500, 'Error fetching', error));
  }
}

export async function getAllCategories(req, res) {
  const categories = [
    'Animal',
    'Career',
    'Celebrity',
    'Dev',
    'Fashion',
    'Food',
    'History',
    'Money',
    'Movie',
    'Music',
    'Science',
    'Sport',
    'Travel'
  ];
  res
    .status(200)
    .send(new ApiResponse(200, categories, 'Fetched categories successfully.'));
}
