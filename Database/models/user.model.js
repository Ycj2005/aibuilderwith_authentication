import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
      ],
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    purpose: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const usermodel =
  mongoose.models.usermodel || mongoose.model("usermodel", UserSchema);
export default usermodel;
