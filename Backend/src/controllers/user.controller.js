import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import {User} from "../models/user.model.js"
const registerUser = asyncHandler(async(req,res ) =>{
        const { fullName, email, username, password } = req.body;

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

        
})

export {registerUser}