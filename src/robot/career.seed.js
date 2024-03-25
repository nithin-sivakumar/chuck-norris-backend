import mongoose from 'mongoose';
import { Joke } from '../models/random.model.js';
import { MONGO_URL } from './constants.js';

mongoose.connect(MONGO_URL);

const jokes = [
  {
    joke: "Why don't scientists trust atoms? Because they make up everything!",
    category: 'Career'
  },
  {
    joke: 'Why did the scarecrow win an award? Because he was outstanding in his field!',
    category: 'Career'
  },
  {
    joke: 'Why did the bicycle fall over? Because it was two-tired!',
    category: 'Career'
  },
  {
    joke: 'Why did the golfer bring two pairs of pants? In case he got a hole in one!',
    category: 'Career'
  },
  {
    joke: "What did one wall say to the other wall? I'll meet you at the corner!",
    category: 'Career'
  },
  {
    joke: 'Why did the tomato turn red? Because it saw the salad dressing!',
    category: 'Career'
  },
  {
    joke: 'How do you make a tissue dance? You put a little boogie in it!',
    category: 'Career'
  },
  {
    joke: 'What kind of tree fits in your hand? A palm tree!',
    category: 'Career'
  },
  {
    joke: 'Why did the bicycle fall over? Because it was two-tired!',
    category: 'Career'
  },
  {
    joke: 'Why did the golfer bring two pairs of pants? In case he got a hole in one!',
    category: 'Career'
  },
  {
    joke: "What did one wall say to the other wall? I'll meet you at the corner!",
    category: 'Career'
  },
  {
    joke: 'Why did the tomato turn red? Because it saw the salad dressing!',
    category: 'Career'
  },
  {
    joke: 'How do you make a tissue dance? You put a little boogie in it!',
    category: 'Career'
  },
  {
    joke: 'What kind of tree fits in your hand? A palm tree!',
    category: 'Career'
  },
  {
    joke: 'Why did the scarecrow win an award? Because he was outstanding in his field!',
    category: 'Career'
  },
  {
    joke: 'What do you get if you cross a snowman and a vampire? Frostbite!',
    category: 'Career'
  },
  {
    joke: 'Why did the bicycle fall over? Because it was two-tired!',
    category: 'Career'
  },
  {
    joke: 'How do you catch a squirrel? Climb a tree and act like a nut!',
    category: 'Career'
  },
  {
    joke: 'What do you call a fish with no eyes? Fsh!',
    category: 'Career'
  },
  {
    joke: 'Why did the golfer bring two pairs of pants? In case he got a hole in one!',
    category: 'Career'
  },
  {
    joke: "What did one wall say to the other wall? I'll meet you at the corner!",
    category: 'Career'
  },
  {
    joke: 'Why did the tomato turn red? Because it saw the salad dressing!',
    category: 'Career'
  },
  {
    joke: 'How do you make a tissue dance? You put a little boogie in it!',
    category: 'Career'
  },
  {
    joke: 'What kind of tree fits in your hand? A palm tree!',
    category: 'Career'
  },
  {
    joke: 'Why did the scarecrow win an award? Because he was outstanding in his field!',
    category: 'Career'
  },
  {
    joke: 'What do you get if you cross a snowman and a vampire? Frostbite!',
    category: 'Career'
  },
  {
    joke: 'Why did the bicycle fall over? Because it was two-tired!',
    category: 'Career'
  },
  {
    joke: 'How do you catch a squirrel? Climb a tree and act like a nut!',
    category: 'Career'
  },
  {
    joke: 'What do you call a fish with no eyes? Fsh!',
    category: 'Career'
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
