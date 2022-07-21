import passport from "passport";
import { Strategy } from "passport-local";
import { UsersCollecion } from "../daos/users.js";
import bcrypt from "bcrypt";

const LocalStrategy = Strategy;

passport.use(
  "signup",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      const dbUser = await UsersCollecion.getOneDocument({ email });
      if (dbUser) {
        return done(null, false);
      }
      const encryptedPassword = await bcrypt.hash(password, +process.env.SALT_ROUNDS);
      const newUser = await UsersCollecion.saveDocument({
        email,
        password: encryptedPassword,
      });
      done(null, newUser);
    }
  )
);

passport.use(
  "login",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      const dbUser = await UsersCollecion.getOneDocument({ email });
      if (!dbUser) {
        return done(null, false);
      }
      const match = await bcrypt.compare(password, dbUser.password);
      if (!match) {
        return done(null, false);
      }
      return done(null, dbUser);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await UsersCollecion.getDocumentById(id);
  done(null, user);
});

export default passport;
