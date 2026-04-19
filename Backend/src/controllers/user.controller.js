import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import  { ApiResponse } from "../utils/ApiResponse.js"


const generateToken = async(userId) =>{

  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    return accessToken;

  } catch (error) {
    throw new ApiError (500, "something Went Wrong ");
  }
}


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

const loginUser = asyncHandler(async(req,res) =>{
      const {email,password} = req.body;

      if(!email ||   !password){
        throw new ApiError(400,"email & Password Required")
      }

      const user = await User.findOne({email})
      if(!user){
        throw new ApiError(404,"User not Exit ")
      }

     const isValidPassword = await user.isPasswordCorrect(password)
     if(!isValidPassword){
      throw new ApiError(401, " Password is Invalid")
     }

       const accessToken = await ngenerateToken(user._id);

       const loggedIn = await User.findById(user._id).select("-password")

       //send to cookie 
     const options = {
      //only sever can modify 
      httpOnly:ture,
      secure: ture
     }
     return res
     .status(200)
     .cookie("acessToken",accessToken,options)
     .json(
        new ApiResponse( 200, {
        user: loggedIn, accessToken
      }, "user Logged in Successfully"        
    )
     )
})

const logoutUser = asyncHandler(async(req,res) =>{
    const options = {
      //only sever can modify 
      httpOnly:ture,
      secure: ture
     }
    return  res.status(200).clearCookie("accessToken",options).json(new ApiResponse(200,{},"user LogOut"))
})

export { registerUser,loginUser,logoutUser };
