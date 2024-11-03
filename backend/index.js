import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./route/user.route.js";
dotenv.config();
const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
const PORT = process.env.PORT || 5001;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to DB"))
  .catch((error) => console.log(error));

app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
