import { Router } from "express";
import passport from "../passport/local.js";

const router = new Router();

router.post(
  "/signup",
  passport.authenticate("signup", {
    failureRedirect: "/error",
    successRedirect: "/login",
  })
);

router.post(
  "/login",
  passport.authenticate("login", {
    failureRedirect: "/error",
    successRedirect: "/home",
  })
);

router.get("/login", (req, res) => {
  if (req.user) {
    res.redirect("/home")
  }
  res.render("login")
});

router.get("/signup", (req, res) => res.render("signup"));

router.get("/error", (req, res) => {
  res.render("error");
});

router.get("/home", (req, res) => {
  if (!req.user) {
    res.redirect("/login");
  } else {
    const { email } = req.user;
    res.render("main", { email });
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy(
    (err) => res.redirect("/login")
  )
})

export default router;
