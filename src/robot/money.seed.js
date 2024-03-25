import mongoose from 'mongoose';
import { Joke } from '../models/random.model.js';

mongoose.connect('mongodb://localhost:27017/chuck');

const jokes = [
  {
    joke: "Why was the penny sad? Because it didn't have any cents!",
    category: 'Money'
  },
  {
    joke: 'Why did the banker switch careers? Because he lost interest!',
    category: 'Money'
  },
  {
    joke: 'Why did the coin go to school? Because it wanted to get some change!',
    category: 'Money'
  },
  {
    joke: 'Why was the wallet always empty? Because it was flat broke!',
    category: 'Money'
  },
  {
    joke: 'Why did the dollar go to therapy? Because it had too many issues!',
    category: 'Money'
  },
  {
    joke: 'Why did the money go to art school? Because it wanted to be a little sketchy!',
    category: 'Money'
  },
  {
    joke: 'Why did the piggy bank go to the doctor? Because it had a lot of change!',
    category: 'Money'
  },
  {
    joke: 'Why did the coin go to the gym? Because it wanted to get ripped!',
    category: 'Money'
  },
  {
    joke: 'Why did the dollar feel lonely? Because it was singular!',
    category: 'Money'
  },
  {
    joke: 'Why did the coin turn red? Because it saw the nickel and dime!',
    category: 'Money'
  },
  {
    joke: 'Why was the banker always calm? Because he knew how to take interest!',
    category: 'Money'
  },
  {
    joke: 'Why did the coin go to school? Because it wanted to learn how to make cents!',
    category: 'Money'
  },
  {
    joke: "Why did the wallet break up with the purse? Because it couldn't handle the change!",
    category: 'Money'
  },
  {
    joke: 'Why did the dollar go to the party? Because it was the life of the coin!',
    category: 'Money'
  },
  {
    joke: 'Why did the coin go to college? Because it wanted to get a little change!',
    category: 'Money'
  },
  {
    joke: 'Why did the dollar feel lonely? Because it was always in the bank!',
    category: 'Money'
  },
  {
    joke: 'Why did the money go to the therapist? Because it had too many issues!',
    category: 'Money'
  },
  {
    joke: 'Why did the coin go to the beach? Because it wanted to get some sand dollars!',
    category: 'Money'
  },
  {
    joke: 'Why was the wallet so successful? Because it knew how to handle its cash flow!',
    category: 'Money'
  },
  {
    joke: 'Why did the dollar feel happy? Because it was making cents!',
    category: 'Money'
  },
  {
    joke: 'Why did the coin break up with the piggy bank? Because it wanted more change!',
    category: 'Money'
  },
  {
    joke: 'Why did the penny go to school? Because it wanted to be a little cent-sible!',
    category: 'Money'
  },
  {
    joke: 'Why did the dollar go to the psychologist? Because it had too many bills to handle!',
    category: 'Money'
  },
  {
    joke: 'Why did the coin become a musician? Because it wanted to make some cents!',
    category: 'Money'
  },
  {
    joke: 'Why did the wallet go on a diet? Because it was getting too heavy!',
    category: 'Money'
  },
  {
    joke: 'Why did the dollar feel sad? Because it was feeling a little short!',
    category: 'Money'
  },
  {
    joke: 'Why did the coin go to the doctor? Because it felt a little under the weather!',
    category: 'Money'
  },
  {
    joke: 'Why did the wallet get promoted? Because it had a lot of bills to manage!',
    category: 'Money'
  },
  {
    joke: 'Why did the dollar go to school? Because it wanted to be a little smarter with its cents!',
    category: 'Money'
  },
  {
    joke: 'Why did the coin go to the party? Because it heard there was going to be a change in music!',
    category: 'Money'
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
