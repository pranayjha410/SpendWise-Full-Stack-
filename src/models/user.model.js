import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'username is required'],
      lowercase: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'email is required'],
      lowercase: true,
      trim: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: [true, 'fullname is required'],
      trim: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
    },
    password: {
      type: String,
      required: [true, 'password is required'],
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next){
    if(!this.isModified("password")) return next();
    this.password = bcrypt.hash(this.password,10)
    next()
})

// model
export const User = mongoose.model('User', userSchema);
