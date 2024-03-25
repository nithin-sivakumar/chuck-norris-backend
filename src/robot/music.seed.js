import mongoose from 'mongoose';
import { Joke } from '../models/random.model.js';
import { MONGO_URL } from './constants.js';

mongoose.connect(MONGO_URL);

const jokes = [
  {
    joke: 'Why did the music teacher go to jail? Because she got caught with too many sharps!',
    category: 'Music'
  },
  {
    joke: 'Why did the music note go to the hospital? Because it was feeling a little flat!',
    category: 'Music'
  },
  {
    joke: "Why did the musician break up with their metronome? Because it couldn't keep up with the beat!",
    category: 'Music'
  },
  {
    joke: 'Why did the guitar go to school? Because it wanted to be a little more acoustic-tically inclined!',
    category: 'Music'
  },
  {
    joke: 'Why was the music note always confident? Because it knew its keys!',
    category: 'Music'
  },
  {
    joke: "Why did the musician get kicked out of the band? Because they couldn't handle the sax appeal!",
    category: 'Music'
  },
  {
    joke: 'Why was the music note always sad? Because it had the blues!',
    category: 'Music'
  },
  {
    joke: 'Why did the piano break up with the accordion? Because it found someone who was more in key!',
    category: 'Music'
  },
  {
    joke: 'Why did the music conductor get a speeding ticket? Because they were always in a rush!',
    category: 'Music'
  },
  {
    joke: 'Why did the musician go to the bank? Because they wanted to make some notes!',
    category: 'Music'
  },
  {
    joke: 'Why was the guitar always in trouble? Because it was always playing with too much distortion!',
    category: 'Music'
  },
  {
    joke: 'Why did the music note go to therapy? Because it had too many issues with commitment!',
    category: 'Music'
  },
  {
    joke: 'Why did the musician bring a ladder to the concert? Because they wanted to reach the high notes!',
    category: 'Music'
  },
  {
    joke: 'Why did the music teacher always carry a pencil? Because they liked to draw sharp!',
    category: 'Music'
  },
  {
    joke: 'Why did the musician break up with their guitar? Because they found someone who could pluck their heartstrings!',
    category: 'Music'
  },
  {
    joke: 'Why did the music note go to the hospital? Because it was feeling a little flat!',
    category: 'Music'
  },
  {
    joke: "Why did the musician get kicked out of the band? Because they couldn't handle the sax appeal!",
    category: 'Music'
  },
  {
    joke: 'Why was the music note always sad? Because it had the blues!',
    category: 'Music'
  },
  {
    joke: 'Why did the piano break up with the accordion? Because it found someone who was more in key!',
    category: 'Music'
  },
  {
    joke: 'Why did the music conductor get a speeding ticket? Because they were always in a rush!',
    category: 'Music'
  },
  {
    joke: 'Why did the musician go to the bank? Because they wanted to make some notes!',
    category: 'Music'
  },
  {
    joke: 'Why was the guitar always in trouble? Because it was always playing with too much distortion!',
    category: 'Music'
  },
  {
    joke: 'Why did the music note go to therapy? Because it had too many issues with commitment!',
    category: 'Music'
  },
  {
    joke: 'Why did the musician bring a ladder to the concert? Because they wanted to reach the high notes!',
    category: 'Music'
  },
  {
    joke: 'Why did the music teacher always carry a pencil? Because they liked to draw sharp!',
    category: 'Music'
  },
  {
    joke: 'Why did the musician break up with their guitar? Because they found someone who could pluck their heartstrings!',
    category: 'Music'
  },
  {
    joke: 'Why did the music note go to the hospital? Because it was feeling a little flat!',
    category: 'Music'
  },
  {
    joke: "Why did the musician get kicked out of the band? Because they couldn't handle the sax appeal!",
    category: 'Music'
  },
  {
    joke: 'Why was the music note always sad? Because it had the blues!',
    category: 'Music'
  },
  {
    joke: 'Why did the piano break up with the accordion? Because it found someone who was more in key!',
    category: 'Music'
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
