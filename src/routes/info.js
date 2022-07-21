import { config } from "../config.js"
import { Router } from "express";

const router = new Router();

router.get("/", (req, res) => {
  res.json({
    args: config,
    os: process.platform,
    nodeVersion: process.node,
    memoryUsage: process.memoryUsage,
    executionPath: process.execPath,
    processId: process.pid,
    workingDirectory: process.cwd(),
  });
});

export default router;
