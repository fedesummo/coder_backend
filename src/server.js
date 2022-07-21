import { config } from "./config.js"
import express from "express";
import passport from "./passport/local.js";
import { router } from "./routes/index.routes.js";
import session from "express-session";
import MongoStore from "connect-mongo";
import { engine } from "express-handlebars";

const app = express();

const { DB_USER, DB_PASSWORD, DB_NAME, PORT } = config;

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.5xbpz.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
      ttl: 60 * 10, // 10 minutes
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);

app.set("view engine", "hbs");
app.set("views", "./src/views");

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    layoutsDir: "./src/views/layouts",
    partialsDir: "./src/views/partials",
    defaultLayout: "index",
  })
);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
