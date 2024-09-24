import User from "../models/user.models.js";
import bcrypt from "bcrypt";
import { errorHandler } from "../utils/error.js";
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashPassword });
  try {
    await newUser.save();
    res.status(201).json("user added sucessfully");
  } catch (error) {
    next(error);
  }
};
