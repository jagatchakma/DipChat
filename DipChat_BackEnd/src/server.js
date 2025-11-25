// const express = require("express");
import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

import authRoutes from "./routes/auth.router.js"
import messageRoutes from "./routes/messages.router.js"
import { connectDB } from "./lib/db.js";

// middleware
app.use(express.json()); // req.body

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.get("/", (req, res) => {
  res.send("server working is ok");
});

app.listen(port, () => {
  console.log(`server working wall, the port is: ${port}`);
  connectDB();
});
