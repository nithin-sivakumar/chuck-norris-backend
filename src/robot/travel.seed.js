import mongoose from 'mongoose';
import { Joke } from '../models/random.model.js';

mongoose.connect('mongodb://localhost:27017/chuck');

const jokes = [
  {
    joke: 'Why did the plane go to school? It wanted to be a little jet!',
    category: 'Travel'
  },
  {
    joke: "Why did the passport blush? Because it saw someone's picture!",
    category: 'Travel'
  },
  {
    joke: "Why don't airplanes ever get lost? Because they always follow their flight plan!",
    category: 'Travel'
  },
  {
    joke: 'Why did the bicycle fall over? Because it was two-tired!',
    category: 'Travel'
  },
  {
    joke: 'Why was the math book sad? Because it had too many problems!',
    category: 'Travel'
  },
  {
    joke: 'Why did the train go to the doctor? Because it had locomotive!',
    category: 'Travel'
  },
  {
    joke: "Why don't ships ever get lost? Because they always stay afloat!",
    category: 'Travel'
  },
  {
    joke: 'Why did the car get a ticket? Because it parked in a no-parking zone!',
    category: 'Travel'
  },
  {
    joke: 'Why did the airplane break up with its girlfriend? It had too many hang-ups!',
    category: 'Travel'
  },
  {
    joke: "Why don't bicycles ever stand up by themselves? Because they're always two-tired!",
    category: 'Travel'
  },
  {
    joke: 'Why was the bicycle always falling over? Because it was two-tired!',
    category: 'Travel'
  },
  {
    joke: "Why don't airplanes ever get lost? Because they always follow their flight plan!",
    category: 'Travel'
  },
  {
    joke: 'Why did the bicycle fall over? Because it was two-tired!',
    category: 'Travel'
  },
  {
    joke: 'Why was the math book sad? Because it had too many problems!',
    category: 'Travel'
  },
  {
    joke: 'Why did the train go to the doctor? Because it had locomotive!',
    category: 'Travel'
  },
  {
    joke: "Why don't ships ever get lost? Because they always stay afloat!",
    category: 'Travel'
  },
  {
    joke: 'Why did the car get a ticket? Because it parked in a no-parking zone!',
    category: 'Travel'
  },
  {
    joke: 'Why did the airplane break up with its girlfriend? It had too many hang-ups!',
    category: 'Travel'
  },
  {
    joke: "Why don't bicycles ever stand up by themselves? Because they're always two-tired!",
    category: 'Travel'
  },
  {
    joke: 'Why was the bicycle always falling over? Because it was two-tired!',
    category: 'Travel'
  },
  {
    joke: "Why don't airplanes ever get lost? Because they always follow their flight plan!",
    category: 'Travel'
  },
  {
    joke: 'Why did the bicycle fall over? Because it was two-tired!',
    category: 'Travel'
  },
  {
    joke: 'Why was the math book sad? Because it had too many problems!',
    category: 'Travel'
  },
  {
    joke: 'Why did the train go to the doctor? Because it had locomotive!',
    category: 'Travel'
  },
  {
    joke: "Why don't ships ever get lost? Because they always stay afloat!",
    category: 'Travel'
  },
  {
    joke: 'Why did the car get a ticket? Because it parked in a no-parking zone!',
    category: 'Travel'
  },
  {
    joke: 'Why did the airplane break up with its girlfriend? It had too many hang-ups!',
    category: 'Travel'
  },
  {
    joke: "Why don't bicycles ever stand up by themselves? Because they're always two-tired!",
    category: 'Travel'
  },
  {
    joke: 'Why was the bicycle always falling over? Because it was two-tired!',
    category: 'Travel'
  }
];

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
