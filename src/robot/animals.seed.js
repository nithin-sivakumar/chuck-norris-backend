import mongoose from 'mongoose';
import { Joke } from '../models/random.model.js';
import { MONGO_URL } from './constants.js';

mongoose.connect(MONGO_URL);

const jokes = [
  {
    joke: "Why don't skeletons fight each other? They don't have the guts!",
    category: 'Animal'
  },
  {
    joke: 'Why did the cow go to outer space? To see the moooon!',
    category: 'Animal'
  },
  {
    joke: 'What do you call a bear with no teeth? A gummy bear!',
    category: 'Animal'
  },
  {
    joke: 'What do you call a fish with no eyes? Fsh!',
    category: 'Animal'
  },
  {
    joke: 'Why did the chicken join a band? Because it had the drumsticks!',
    category: 'Animal'
  },
  {
    joke: 'Why did the horse cross the road? To visit his neigh-bor!',
    category: 'Animal'
  },
  {
    joke: 'What did the duck say when it bought lipstick? Put it on my bill!',
    category: 'Animal'
  },
  {
    joke: 'What do you get if you cross a cat with a dark horse? Kitty Perry!',
    category: 'Animal'
  },
  {
    joke: 'Why don’t eggs tell jokes? Because they might crack up!',
    category: 'Animal'
  },
  {
    joke: "What did the porcupine say to the cactus? 'Is that you mommy?'",
    category: 'Animal'
  },
  {
    joke: 'Why did the crab never share? Because he was shellfish!',
    category: 'Animal'
  },
  {
    joke: "Why did the snail paint an 'S' on his car? So people would say, 'Look at that S-car-go!'",
    category: 'Animal'
  },
  {
    joke: 'What do you call a fly without wings? A walk!',
    category: 'Animal'
  },
  {
    joke: 'What do you call a dog magician? A labracadabrador!',
    category: 'Animal'
  },
  {
    joke: 'What do you call a bear in the rain? A drizzly bear!',
    category: 'Animal'
  },
  {
    joke: 'What do you call a pig that does karate? A pork chop!',
    category: 'Animal'
  },
  {
    joke: 'Why did the cow go to space? To see the moooon!',
    category: 'Animal'
  },
  {
    joke: 'Why did the cat sit on the computer? To keep an eye on the mouse!',
    category: 'Animal'
  },
  {
    joke: 'Why did the antelope like to play cards? Because he was a cheetah!',
    category: 'Animal'
  },
  {
    joke: 'Why did the chicken go to the seance? To talk to the other side!',
    category: 'Animal'
  },
  {
    joke: 'Why did the bear break up with his girlfriend? Because she was unbearable!',
    category: 'Animal'
  },
  {
    joke: 'Why did the lion spit out the clown? Because he tasted funny!',
    category: 'Animal'
  },
  {
    joke: "Why do elephants never use computers? They're afraid of the mouse!",
    category: 'Animal'
  },
  {
    joke: 'What do you get if you cross a cow and a duck? Milk and quackers!',
    category: 'Animal'
  },
  {
    joke: "What did the cat say when it was confused? 'I'm purr-plexed!'",
    category: 'Animal'
  },
  {
    joke: 'Why did the horse sit on the jukebox? Because he wanted to listen to his favorite mane!',
    category: 'Animal'
  },
  {
    joke: 'Why did the chicken go to the seance? To talk to the other side!',
    category: 'Animal'
  },
  {
    joke: 'Why did the chicken join a band? Because it had the drumsticks!',
    category: 'Animal'
  },
  {
    joke: "What's a mouse's least favorite record? 'Cats'!",
    category: 'Animal'
  },
  {
    joke: 'Why did the cow become an astronaut? It wanted to go to the mooooon!',
    category: 'Animal'
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
