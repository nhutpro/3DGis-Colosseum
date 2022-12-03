import mongoose from 'mongoose';
const connectDatabase = () => {
  try {
    mongoose.connect(process.env.MONGODB_URL, () => {
      console.log('Connect Database Successfully');
    });
  } catch (err) {
    console.log('Connect Database Fail');
  }
};

export default connectDatabase;
