import mongoose from 'mongoose';
import { Joke } from '../models/random.model.js';
import { MONGO_URL } from './constants.js';

mongoose.connect(MONGO_URL);

const jokes = [
  {
    joke: 'Why was the movie hot dog always calm? Because it could always relish the moment!',
    category: 'Movie'
  },
  {
    joke: 'Why did the movie camera get all the attention? Because it knew how to reel in the audience!',
    category: 'Movie'
  },
  {
    joke: 'Why did the movie script always get into trouble? Because it was full of twists and turns!',
    category: 'Movie'
  },
  {
    joke: 'Why did the movie star always carry a pencil? Because they wanted to draw attention!',
    category: 'Movie'
  },
  {
    joke: 'Why did the movie director always carry a map? Because they were always searching for the perfect location!',
    category: 'Movie'
  },
  {
    joke: 'Why did the horror movie actor go to the doctor? Because they were losing their scream!',
    category: 'Movie'
  },
  {
    joke: 'Why did the movie projector get a promotion? Because it knew how to shine in the spotlight!',
    category: 'Movie'
  },
  {
    joke: 'Why did the movie villain go to the gym? Because they wanted to work on their biceps and triceps!',
    category: 'Movie'
  },
  {
    joke: 'Why did the romantic comedy get a standing ovation? Because it was a real tear-jerker!',
    category: 'Movie'
  },
  {
    joke: 'Why was the action movie always the life of the party? Because it knew how to make an entrance!',
    category: 'Movie'
  },
  {
    joke: 'Why did the movie camera get tired of filming? Because it needed to take a reel break!',
    category: 'Movie'
  },
  {
    joke: "Why did the movie script get rejected? Because it didn't have enough plot twists!",
    category: 'Movie'
  },
  {
    joke: 'Why did the movie star bring a ladder to the audition? Because they wanted to reach for the stars!',
    category: 'Movie'
  },
  {
    joke: 'Why did the comedy movie always have good timing? Because it knew how to deliver the punchline!',
    category: 'Movie'
  },
  {
    joke: 'Why was the movie director always happy? Because they loved calling the shots!',
    category: 'Movie'
  },
  {
    joke: 'Why did the movie camera get into a fight? Because it wanted to film a boxing match!',
    category: 'Movie'
  },
  {
    joke: 'Why did the horror movie win an award? Because it had the most spine-tingling performance!',
    category: 'Movie'
  },
  {
    joke: 'Why did the romantic movie bring tissues to the premiere? Because it was a real tear-jerker!',
    category: 'Movie'
  },
  {
    joke: 'Why was the movie audience always excited? Because they loved seeing the drama unfold!',
    category: 'Movie'
  },
  {
    joke: 'Why did the movie script go to therapy? Because it had too many unresolved plot lines!',
    category: 'Movie'
  },
  {
    joke: 'Why did the movie camera get stage fright? Because it was afraid of being in the limelight!',
    category: 'Movie'
  },
  {
    joke: 'Why did the comedy movie win the race? Because it knew how to take the lead in laughs!',
    category: 'Movie'
  },
  {
    joke: 'Why was the action movie always in shape? Because it knew how to stay reel fit!',
    category: 'Movie'
  },
  {
    joke: 'Why did the movie projector get promoted? Because it always knew how to shine in the dark!',
    category: 'Movie'
  },
  {
    joke: 'Why did the horror movie actor get a cold? Because they were always in the chill zone!',
    category: 'Movie'
  },
  {
    joke: 'Why did the romantic movie actor always carry flowers? Because they knew how to romance the audience!',
    category: 'Movie'
  },
  {
    joke: 'Why was the movie audience always hungry? Because they loved seeing the box office hit!',
    category: 'Movie'
  },
  {
    joke: "Why did the comedy movie always get a laugh? Because it knew how to tickle the audience's funny bone!",
    category: 'Movie'
  },
  {
    joke: 'Why did the action movie always have good rhythm? Because it knew how to keep the beat!',
    category: 'Movie'
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
