import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import  { ApiResponse } from "../utils/ApiResponse.js"



const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, username, password, profilePic } = req.body;

  // validation
  if (!fullName || !email || !username || !password) {
    throw new ApiError(400, "All fields are required");
  }

  // check existing user
  const existingUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existingUser) {
    throw new ApiError(409, "User already exists");
  }

  const user = await User.create({
    fullName,
    email,
    username: username.toLowerCase(),
    password,
    profilePic,
  });

  //without password, unliike above
    const createdUser = await User.findById(user._id).select("-password")

    if(!createdUser){
        throw new ApiError(500,"Something Went Wrong")
    }

    return res.status(201).json(
      new ApiResponse(200,createdUser, "Registered Successfully")
    )

});

export { registerUser };
