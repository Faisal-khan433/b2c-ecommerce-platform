import express from "express";
import mongoose from "mongoose";

const router = express.Router();

router.get("/", (req, res) => {
   const isDatabaseConnected = mongoose.connection.readyState === 1;

  if (!isDatabaseConnected) {
    return res.status(503).json({
      status: "unhealthy",
      service: "backend",
      database: "disconnected",
    });
  }

  res.status(200).json({
    status: "ok",
    service: "backend",
    database: "connected",
  });
});


export default router;