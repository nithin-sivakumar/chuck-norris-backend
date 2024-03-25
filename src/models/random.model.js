import mongoose from 'mongoose';

const jokeSchema = new mongoose.Schema({
  joke: {
    type: String,
    required: [true, 'Field missing! Joke is required']
  },
  category: {
    type: String,
    required: [true, 'Field missing! Category is required']
  }
});

export const Joke = mongoose.model('joke', jokeSchema);
