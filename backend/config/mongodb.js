import mongoose from 'mongoose';

const connectDB = async () => {
    mongoose.connection.on('connected', () => console.log("Database Connected"));
    // If URI already contains a '/', it might already have a DB name or trailing options
    // For simplicity, we'll just connect directly to the URI provided in .env
    await mongoose.connect(process.env.MONGODB_URI);
};

export default connectDB;
