import mongoose from "mongoose";
import 'dotenv/config';

const connectDB = async (): Promise<void> => {
    try {
        const mongoURI = process.env.MONGODB_URI;
        
        if (!mongoURI) {
            throw new Error('MONGO_URI not specified')
        }

        await mongoose.connect(mongoURI);
        console.log('MongoDB successfully connected.');
    }catch(error){
        console.error('MongoDB connection error: ', error);
        process.exit(1);
    }
}

export default connectDB;