import { Router } from "express";
import authRoutes from "./auth.js";
import infoRoutes from "./info.js"
import randomsRoutes from "./randoms.js"

export const router = new Router();

router.get("/status", (req, res) => {
  res.status(200).json({ status: "online" });
});

router.use("/", authRoutes);

router.use("/info", infoRoutes)

router.use("/api/randoms", randomsRoutes)
