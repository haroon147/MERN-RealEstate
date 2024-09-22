import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
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

app.listen(3000, () => {
  console.log("Server is running at:3000");
});
