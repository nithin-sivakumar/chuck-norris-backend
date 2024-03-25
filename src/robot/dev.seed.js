import mongoose from 'mongoose';
import { Joke } from '../models/random.model.js';

mongoose.connect('mongodb://localhost:27017/chuck');

const jokes = [
  {
    joke: 'Why do programmers always mix up Christmas and Halloween? Because Oct 31 equals Dec 25!',
    category: 'Dev'
  },
  {
    joke: 'Why do programmers prefer dark mode? Light attracts bugs!',
    category: 'Dev'
  },
  {
    joke: 'Why did the developer go broke? Because he used up all his cache!',
    category: 'Dev'
  },
  {
    joke: "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings!",
    category: 'Dev'
  },
  {
    joke: "Why did the programmer quit his job? Because he didn't get arrays!",
    category: 'Dev'
  },
  {
    joke: "Why don't programmers like nature? It has too many bugs!",
    category: 'Dev'
  },
  {
    joke: 'Why did the developer go to therapy? Because he had too many issues!',
    category: 'Dev'
  },
  {
    joke: "Why do Python programmers prefer Linux? Because they don't like to Windows!",
    category: 'Dev'
  },
  {
    joke: "Why do Java developers wear glasses? Because they can't C#!",
    category: 'Dev'
  },
  {
    joke: 'Why do programmers hate nature? It has too many bugs!',
    category: 'Dev'
  },
  {
    joke: "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings!",
    category: 'Dev'
  },
  {
    joke: 'Why did the developer go broke? Because he used up all his cache!',
    category: 'Dev'
  },
  {
    joke: 'Why do programmers prefer dark mode? Light attracts bugs!',
    category: 'Dev'
  },
  {
    joke: "Why do Java developers wear glasses? Because they can't C#!",
    category: 'Dev'
  },
  {
    joke: "Why did the programmer quit his job? Because he didn't get arrays!",
    category: 'Dev'
  },
  {
    joke: 'Why did the developer go to therapy? Because he had too many issues!',
    category: 'Dev'
  },
  {
    joke: "Why do Python programmers prefer Linux? Because they don't like to Windows!",
    category: 'Dev'
  },
  {
    joke: "Why don't programmers like nature? It has too many bugs!",
    category: 'Dev'
  },
  {
    joke: "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings!",
    category: 'Dev'
  },
  {
    joke: 'Why did the developer go broke? Because he used up all his cache!',
    category: 'Dev'
  },
  {
    joke: 'Why do programmers prefer dark mode? Light attracts bugs!',
    category: 'Dev'
  },
  {
    joke: "Why did the programmer quit his job? Because he didn't get arrays!",
    category: 'Dev'
  },
  {
    joke: "Why do Python programmers prefer Linux? Because they don't like to Windows!",
    category: 'Dev'
  },
  {
    joke: "Why do Java developers wear glasses? Because they can't C#!",
    category: 'Dev'
  },
  {
    joke: 'Why do programmers hate nature? It has too many bugs!',
    category: 'Dev'
  },
  {
    joke: "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings!",
    category: 'Dev'
  },
  {
    joke: 'Why did the developer go to therapy? Because he had too many issues!',
    category: 'Dev'
  },
  {
    joke: "Why do Python programmers prefer Linux? Because they don't like to Windows!",
    category: 'Dev'
  },
  {
    joke: 'Why did the developer go broke? Because he used up all his cache!',
    category: 'Dev'
  },
  {
    joke: 'Why do programmers prefer dark mode? Light attracts bugs!',
    category: 'Dev'
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
