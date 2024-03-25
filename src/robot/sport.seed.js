import mongoose from 'mongoose';
import { Joke } from '../models/random.model.js';
import { MONGO_URL } from './constants.js';

mongoose.connect(MONGO_URL);

const jokes = [
  {
    joke: "Why don't basketball players ever get lost? Because they always know where the net is!",
    category: 'Sport'
  },
  {
    joke: 'Why was the math book sad? Because it had too many problems!',
    category: 'Sport'
  },
  {
    joke: 'Why did the golfer bring two pairs of pants? In case he got a hole in one!',
    category: 'Sport'
  },
  {
    joke: "Why don't football players ever go on vacation? Because they're always on the ball!",
    category: 'Sport'
  },
  {
    joke: 'Why did the baseball player go to jail? Because he stole second base!',
    category: 'Sport'
  },
  {
    joke: "Why don't soccer players ever listen to music? Because they hate being scored on!",
    category: 'Sport'
  },
  {
    joke: 'Why did the tennis player go to jail? Because they got caught serving!',
    category: 'Sport'
  },
  {
    joke: 'Why was the basketball court always wet? Because the players kept dribbling!',
    category: 'Sport'
  },
  {
    joke: 'Why did the soccer player bring string to the game? So they could tie the score!',
    category: 'Sport'
  },
  {
    joke: "Why don't golfers ever get lost? Because they always know where the hole is!",
    category: 'Sport'
  },
  {
    joke: 'Why did the football team go to the bank? To get their quarterback!',
    category: 'Sport'
  },
  {
    joke: 'Why was the basketball team always in trouble? Because they were always dribbling!',
    category: 'Sport'
  },
  {
    joke: "Why don't basketball players ever need a map? Because they always know how to find the hoop!",
    category: 'Sport'
  },
  {
    joke: 'Why was the baseball team always so good at math? Because they knew how to count their runs!',
    category: 'Sport'
  },
  {
    joke: 'Why did the soccer player bring string to the game? So they could tie the score!',
    category: 'Sport'
  },
  {
    joke: "Why don't tennis players ever get lost? Because they always know which court to go to!",
    category: 'Sport'
  },
  {
    joke: 'Why did the baseball player go to jail? Because he stole second base!',
    category: 'Sport'
  },
  {
    joke: "Why don't football players ever go on vacation? Because they're always on the ball!",
    category: 'Sport'
  },
  {
    joke: 'Why did the basketball player go to jail? Because they were charged with traveling!',
    category: 'Sport'
  },
  {
    joke: 'Why did the soccer player go to the bank? To get their goalie!',
    category: 'Sport'
  },
  {
    joke: 'Why did the tennis player go to the bank? To get their racket!',
    category: 'Sport'
  },
  {
    joke: 'Why was the basketball court always wet? Because the players kept dribbling!',
    category: 'Sport'
  },
  {
    joke: 'Why did the golfer bring two pairs of pants? In case he got a hole in one!',
    category: 'Sport'
  },
  {
    joke: "Why don't soccer players ever listen to music? Because they hate being scored on!",
    category: 'Sport'
  },
  {
    joke: 'Why did the baseball player go to jail? Because he stole second base!',
    category: 'Sport'
  },
  {
    joke: "Why don't football players ever go on vacation? Because they're always on the ball!",
    category: 'Sport'
  },
  {
    joke: 'Why did the basketball player go to jail? Because they were charged with traveling!',
    category: 'Sport'
  },
  {
    joke: 'Why did the soccer player go to the bank? To get their goalie!',
    category: 'Sport'
  },
  {
    joke: 'Why did the tennis player go to the bank? To get their racket!',
    category: 'Sport'
  },
  {
    joke: 'Why was the basketball court always wet? Because the players kept dribbling!',
    category: 'Sport'
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
