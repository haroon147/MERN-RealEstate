import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      unique: true,
      type: String,
      require: true,
    },
    email: {},
    password: {},
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);
export default User;
