import mongoose from 'mongoose';

const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    console.log(`Mongo URL not found! Unable to connect to database`);
    process.exit(1);
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const db = mongoose.connection;
    console.log(
      `Connected to database successfully.\nHOST: ${db.host}\nPORT: ${db.port}`
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export { connectDB };
