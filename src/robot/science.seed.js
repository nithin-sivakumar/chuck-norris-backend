import mongoose from 'mongoose';
import { Joke } from '../models/random.model.js';

mongoose.connect('mongodb://localhost:27017/chuck');

const jokes = [
  {
    joke: 'Why did the proton bring a friend to the party? Because he was positively charged!',
    category: 'Science'
  },
  {
    joke: "Why can't you trust an atom? Because they make up everything!",
    category: 'Science'
  },
  {
    joke: "Why did the biologist install a doorbell? Because they wanted to hear the cell's 'plasma' membrane!",
    category: 'Science'
  },
  {
    joke: 'Why did the biology book feel lonely? Because it had too few cells!',
    category: 'Science'
  },
  {
    joke: 'Why did the physicist put their bed in the middle of the room? Because they wanted to sleep in the center of mass!',
    category: 'Science'
  },
  {
    joke: 'Why did the chemistry student bring a ladder to class? Because they heard the course was on molecular level!',
    category: 'Science'
  },
  {
    joke: "Why did the biology teacher always wear glasses? Because they had to keep an eye on their students' DNA!",
    category: 'Science'
  },
  {
    joke: 'Why was the math book sad? Because it had too many problems!',
    category: 'Science'
  },
  {
    joke: 'Why did the computer go to the doctor? Because it had a virus!',
    category: 'Science'
  },
  {
    joke: 'Why did the biologist go to art class? Because they wanted to study cell division!',
    category: 'Science'
  },
  {
    joke: 'Why did the scientist install a greenhouse in their car? Because they wanted to drive in an eco-friendly way!',
    category: 'Science'
  },
  {
    joke: 'Why did the geologist break up with their partner? Because they thought they were taking them for granite!',
    category: 'Science'
  },
  {
    joke: 'Why did the physics student break up with their partner? Because there was no chemistry!',
    category: 'Science'
  },
  {
    joke: "Why did the chemistry book break up with the biology book? Because they couldn't find a reaction!",
    category: 'Science'
  },
  {
    joke: "Why was the biology book always so sleepy? Because it was always studying zzz's!",
    category: 'Science'
  },
  {
    joke: 'Why did the physicist go to the beach? Because they wanted to study the motion of the ocean!',
    category: 'Science'
  },
  {
    joke: 'Why did the biology student get a medal? Because they were outstanding in their field!',
    category: 'Science'
  },
  {
    joke: "Why did the chemist refuse to play hide and seek? Because they didn't want to bond with anyone!",
    category: 'Science'
  },
  {
    joke: 'Why did the biologist bring a ladder to class? Because they heard the course was on a higher level!',
    category: 'Science'
  },
  {
    joke: 'Why did the physics student throw their clock out the window? Because they wanted to see time fly!',
    category: 'Science'
  },
  {
    joke: 'Why did the biology teacher go to the beach? Because they wanted to study tideology!',
    category: 'Science'
  },
  {
    joke: 'Why was the scientist always calm? Because they knew their solutions!',
    category: 'Science'
  },
  {
    joke: 'Why did the biology book break up with the chemistry book? Because there was no reaction!',
    category: 'Science'
  },
  {
    joke: 'Why did the physicist bring a mirror to the lab? Because they wanted to observe their reflection!',
    category: 'Science'
  },
  {
    joke: 'Why did the chemistry student take a bath? Because they wanted to experiment with bubbles!',
    category: 'Science'
  },
  {
    joke: 'Why did the biologist bring a calculator to the jungle? Because they heard there would be lots of square roots!',
    category: 'Science'
  },
  {
    joke: 'Why did the physicist break up with their partner? Because they found their relationship too linear!',
    category: 'Science'
  },
  {
    joke: 'Why did the biology teacher always carry a map? Because they wanted to show their students the way to their cells!',
    category: 'Science'
  },
  {
    joke: 'Why did the physics student bring a ladder to class? Because they heard the course was on a higher level!',
    category: 'Science'
  },
  {
    joke: 'Why did the chemistry teacher go to the beach? Because they wanted to study the composition of sand!',
    category: 'Science'
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
