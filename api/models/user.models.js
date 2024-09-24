import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      // unique: [true, "username is unique"],
    },
    email: {
      // unique: [true, "email is Unique"],
    },
    password: {},
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);
export default User;
