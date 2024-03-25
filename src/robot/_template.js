import mongoose from 'mongoose';
import { Joke } from '../models/random.model.js';

mongoose.connect('mongodb://localhost:27017/chuck');

const insertJokes = async () => {
  try {
    console.log(`Inserting jokes... Please wait!`);
    const createdJokes = await Joke.insertMany(jokes);
    console.log(
      `Inserted ${createdJokes.length} of ${jokes.length} jokes successfully!`
    );
  } catch (error) {
    console.error('Error inserting jokes:', error);
  } finally {
    mongoose.connection.close();
  }
};

insertJokes();
