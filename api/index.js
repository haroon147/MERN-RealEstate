import express, { Router } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("we are Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// mongoose
//   .connect(
//     "mongodb+srv://147haroon:honey147@mern-realestate.y01tr.mongodb.net/MERN-RealEstate?retryWrites=true&w=majority&appName=MERN-RealEstate"
//   )
//   .then(() => {
//     console.log("connected too DB");
//   });
const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running at:3000");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res) => {
  const statusCode = err.statusCode || 500;
  const messageError = "it is server Error";
});
