import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import userRoute from "./route/user.route.js";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// CORS Configuration
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000", // Allow frontend URL
    credentials: true, // Allow cookies and authorization headers
    allowedHeaders: ["Content-Type", "Authorization"], // Allow custom headers
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow common HTTP methods
  })
);

// JWT Middleware
app.use((req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    req.headers.authorization = `Bearer ${token}`;
  }
  next();
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to DB"))
  .catch((error) => console.error("Database connection error:", error));

// Routes
app.use("/api/user", userRoute);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
