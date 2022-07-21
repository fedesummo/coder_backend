import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import "dotenv/config";

const { argv } = yargs(hideBin(process.argv)).alias({ p: "PORT" });

export const config = {
  // Environment
  PORT: argv.PORT || 8080,

  // MongoDB
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,

  //Bcrypt
  SALT_ROUNDS: +process.env.SALT_ROUNDS || 10,
};
