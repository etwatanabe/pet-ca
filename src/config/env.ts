import { config } from "dotenv";

config();

export const env = {
  // General configuration
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 8000,

  // Database configuration
  MONGODB_URL: process.env.MONGODB_URL || "mongodb://localhost:27017",
  MONGODB_USERNAME: process.env.MONGODB_USERNAME || "root",
  MONGODB_PASSWORD: process.env.MONGODB_PASSWORD || "password",
};
