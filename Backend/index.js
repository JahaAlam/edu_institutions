// server.js
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import mapRoute from "./routes/mapRoute.js";
import userRoutes from "./routes/user.js";
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();
// Middleware
app.use(cors());
app.use(express.json());

//routes------------
app.use("/api/user", userRoutes);
app.use("/api", mapRoute);

//console.log("Mongodb Url: ", process.env.MONGO_URL);

//connectionDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.get("/", (req, res) => {
  res.send("Simple Crud is running");
});

app.listen(port, () => {
  console.log(`Simple Crud is running on port ${port}`);
});
