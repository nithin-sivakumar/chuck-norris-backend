import { config } from 'dotenv';
config();
import http from 'http';
import app from './app.js';
import { connectDB } from './db/db.connect.js';

const server = http.createServer(app);
const PORT = process.env.PORT || 5001;

connectDB()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
