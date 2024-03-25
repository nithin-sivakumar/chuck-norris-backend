import { Joke } from '../models/random.model.js';
import { ApiResponse } from '../utils/ApiResponse.js';

export async function getBySearch(req, res) {
  try {
    const keyword = req.query.q;

    const all = await Joke.find({
      $or: [
        { joke: { $regex: keyword, $options: 'i' } },
        { category: { $regex: keyword, $options: 'i' } }
      ]
    });

    if (!all || all.length === 0) {
      return res
        .status(400)
        .send(new ApiResponse(400, null, 'No matching jokes found'));
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
