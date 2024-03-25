import mongoose from 'mongoose';
import { Joke } from '../models/random.model.js';
import { MONGO_URL } from './constants.js';

mongoose.connect(MONGO_URL);

const jokes = [
  {
    joke: 'Why did the archaeologist go bankrupt? Because his career was in ruins!',
    category: 'History'
  },
  {
    joke: 'Why did the Greek soldier bring a broom to battle? To sweep the enemy off their feet!',
    category: 'History'
  },
  {
    joke: 'Why was the history book always nervous? Because it had too many dates!',
    category: 'History'
  },
  {
    joke: 'Why was the mummy so tense? Because it was all wound up!',
    category: 'History'
  },
  {
    joke: 'Why did the Ancient Egyptian break up with their partner? Because they were in de-Nile!',
    category: 'History'
  },
  {
    joke: 'Why was the historian always calm? Because they knew how it would pan out!',
    category: 'History'
  },
  {
    joke: "Why did the British monarch wear a cloak? Because they couldn't afford a king-sized blanket!",
    category: 'History'
  },
  {
    joke: 'Why was the Roman soldier always in trouble? Because they were legion-dary!',
    category: 'History'
  },
  {
    joke: 'Why did the medieval knight get kicked out of the round table? Because he kept eating with his gauntlets on!',
    category: 'History'
  },
  {
    joke: 'Why did the Greek philosopher break up with his girlfriend? Because he felt his life was lacking Socrates!',
    category: 'History'
  },
  {
    joke: 'Why was the Stone Age a bad time to be hungry? Because you could only eat what you caught with your bare hands!',
    category: 'History'
  },
  {
    joke: 'Why did the ancient Greeks build round temples? Because triangles are too pointy!',
    category: 'History'
  },
  {
    joke: 'Why did the history teacher bring a ladder to class? Because they wanted to show the class the rise and fall of civilizations!',
    category: 'History'
  },
  {
    joke: 'Why did the ancient farmer win an award? Because they were out-standing in their field!',
    category: 'History'
  },
  {
    joke: 'Why was the ancient Chinese philosopher so good at math? Because he knew how to Ming!',
    category: 'History'
  },
  {
    joke: 'Why was the medieval banquet so crowded? Because everyone wanted a piece of the pie-chart!',
    category: 'History'
  },
  {
    joke: 'Why was the cave painter terrible at keeping secrets? Because they always left things in hieroglyphics!',
    category: 'History'
  },
  {
    joke: 'Why did the history teacher bring a shovel to class? Because they were digging up the past!',
    category: 'History'
  },
  {
    joke: 'Why did the ancient historian never get lost? Because they always knew where they stood in time!',
    category: 'History'
  },
  {
    joke: 'Why did the knight go to school? To learn how to use his knight-vision!',
    category: 'History'
  },
  {
    joke: 'Why did the Stone Age man refuse to fight with sticks and stones? Because he wanted to stick to his principles!',
    category: 'History'
  },
  {
    joke: 'Why did the ancient philosopher break up with his girlfriend? Because he felt their relationship lacked Plato-nic love!',
    category: 'History'
  },
  {
    joke: "Why did the medieval scribe get bad grades in school? Because they couldn't spell properly!",
    category: 'History'
  },
  {
    joke: 'Why was the medieval kingdom so noisy? Because everyone had their knight-life story to tell!',
    category: 'History'
  },
  {
    joke: 'Why was the ancient library always full? Because it was a classic!',
    category: 'History'
  },
  {
    joke: 'Why did the ancient historian get fired? Because they kept taking the past for granite!',
    category: 'History'
  },
  {
    joke: 'Why did the ancient philosopher never lose an argument? Because they were stoically minded!',
    category: 'History'
  },
  {
    joke: 'Why did the ancient scribe get promoted? Because they had a way with papyrus!',
    category: 'History'
  },
  {
    joke: 'Why did the ancient doctor always win at poker? Because they knew how to play their cards right!',
    category: 'History'
  },
  {
    joke: 'Why did the medieval king never lose at chess? Because he always had his subjects under his control!',
    category: 'History'
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
