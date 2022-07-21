import { config } from "../config.js";
import mongoose from "mongoose";

const { DB_USER, DB_PASSWORD, DB_NAME } = config;

mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.5xbpz.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
);

mongoose.connection.on("open", () =>
  console.log("Succesfully connected to database")
);

mongoose.connection.on("error", (err) =>
  console.log("Error on database connection", err)
);

export default mongoose;
