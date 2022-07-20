import { Router } from "express";
import authRoutes from "./auth.js";

export const router = new Router();

router.get("/status", (req, res) => {
  res.status(200).json({ status: "online" });
});

router.use("/", authRoutes);
