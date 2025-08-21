import mongoose from "mongoose";
import { logger } from "./logger";

export const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error("Missing MONGO_URI environment variable");
    }
    await mongoose.connect(mongoUri);
    logger.info("connected to the mongoDB");
  } catch (error) {
    logger.error("MONGODB connection error", error);
    process.exit(1);
  }
};
