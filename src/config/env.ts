import { config } from "dotenv";

config();

export const env = {
  // General configuration
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 3000,

  // Database configuration
  DATABASE_URL: process.env.DATABASE_URL || "mongodb://localhost:27017/myapp", 
}