import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();

mongoose
  // .connect(process.env.MONGO_URL)
  .connect("mongodb://127.0.0.1:27017/mern_auth")
  .then(() => {
    console.log("Database Connected SucessFully! 🥳");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use("*", cors());
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`🚀Server started on port: ${PORT}`);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    error: message,
    statusCode,
  });
});
