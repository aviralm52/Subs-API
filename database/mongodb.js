import mongoose from "mongoose";

import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
  throw new Error("DB_URI is not defined");
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);

    console.log(`Connected to database in ${NODE_ENV} node`);
  } catch (err) {
    console.log("Error connecting to database ", DB_URI, err);

    process.exit(1);
  }
};

export default connectToDatabase;
