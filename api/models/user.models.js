import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
<<<<<<< HEAD
      type: String,
      unique: true,
      // unique: [true, "username is unique"],
    },
    email: {
      // unique: [true, "email is Unique"],
    },
=======
      unique: true,
      type: String,
      require: true,
    },
    email: {},
>>>>>>> 9e287e69b9573269edd8086907f4de78203c096d
    password: {},
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);
export default User;
