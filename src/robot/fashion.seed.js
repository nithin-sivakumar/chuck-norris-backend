import mongoose from 'mongoose';
import { Joke } from '../models/random.model.js';
import { MONGO_URL } from './constants.js';

mongoose.connect(MONGO_URL);

const jokes = [
  {
    joke: 'Why did the belt go to jail? For holding up a pair of pants!',
    category: 'Fashion'
  },
  {
    joke: 'Why was the math book sad? Because it had too many problems!',
    category: 'Fashion'
  },
  {
    joke: 'Why did the shirt go to school? To get smarter!',
    category: 'Fashion'
  },
  {
    joke: 'Why did the sock go to the doctor? Because it had a hole!',
    category: 'Fashion'
  },
  {
    joke: 'Why did the hat go to the party? Because it wanted to be the top of the town!',
    category: 'Fashion'
  },
  {
    joke: 'Why did the shoe go to the therapist? Because it had sole-searching issues!',
    category: 'Fashion'
  },
  {
    joke: 'Why did the scarf break up with the hat? Because it was too knit-picky!',
    category: 'Fashion'
  },
  {
    joke: 'Why did the jeans break up with the denim jacket? Because it was too over-coat-ing!',
    category: 'Fashion'
  },
  {
    joke: 'Why did the belt break up with the pants? Because it was tired of being held back!',
    category: 'Fashion'
  },
  {
    joke: 'Why did the dress break up with the shoes? Because it wanted some space!',
    category: 'Fashion'
  },
  {
    joke: 'Why did the sunglasses go to the beach? Because it was feeling shady!',
    category: 'Fashion'
  },
  {
    joke: 'Why did the sock refuse to run? Because it was afraid of getting cold feet!',
    category: 'Fashion'
  },
  {
    joke: 'Why did the hat feel insecure? Because it was always being topped!',
    category: 'Fashion'
  },
  {
    joke: 'Why did the shirt feel lonely? Because it was single-ply!',
    category: 'Fashion'
  },
  {
    joke: 'Why did the jeans feel blue? Because they had the denim blues!',
    category: 'Fashion'
  },
  {
    joke: 'Why did the scarf feel tied down? Because it had too many commitments!',
    category: 'Fashion'
  },
  {
    joke: 'Why did the belt feel out of place? Because it was always waist-ing time!',
    category: 'Fashion'
  },
  {
    joke: 'Why did the shoes feel tired? Because they were always on their toes!',
    category: 'Fashion'
  },
  {
    joke: 'Why did the shirt feel wrinkled? Because it had too many hang-ups!',
    category: 'Fashion'
  },
  {
    joke: "Why did the sock feel lost? Because it couldn't find its mate!",
    category: 'Fashion'
  },
  {
    joke: 'Why did the sunglasses feel shady? Because they were polarized!',
    category: 'Fashion'
  },
  {
    joke: 'Why did the hat feel stuffed? Because it was always getting a head!',
    category: 'Fashion'
  },
  {
    joke: 'Why did the pants feel hemmed in? Because they were always cut off!',
    category: 'Fashion'
  },
  {
    joke: 'Why did the dress feel blue? Because it was feeling gown!',
    category: 'Fashion'
  },
  {
    joke: 'Why did the belt feel tight? Because it was buckled down!',
    category: 'Fashion'
  },
  {
    joke: 'Why did the socks feel inferior? Because they always got cold feet!',
    category: 'Fashion'
  },
  {
    joke: 'Why did the shoes feel unpolished? Because they needed to step up!',
    category: 'Fashion'
  },
  {
    joke: 'Why did the hat feel crushed? Because it was always under pressure!',
    category: 'Fashion'
  },
  {
    joke: 'Why did the scarf feel wrapped up? Because it was always tangled!',
    category: 'Fashion'
  },
  {
    joke: 'Why did the jeans feel blue? Because they were always worn out!',
    category: 'Fashion'
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
