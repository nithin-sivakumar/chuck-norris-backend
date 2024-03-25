import { Joke } from '../models/random.model.js';
import { ApiResponse } from '../utils/ApiResponse.js';

export async function getRandomJoke(req, res) {
  try {
    const all = await Joke.find();

    if (all.length === 0) {
      return res
        .status(404)
        .send(new ApiResponse(404, null, 'No jokes found in our database'));
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
