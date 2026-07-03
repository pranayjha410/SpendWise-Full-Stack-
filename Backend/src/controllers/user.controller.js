import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import  { ApiResponse } from "../utils/ApiResponse.js"
// import { uploadOnCloudinary } from "../utils/cloudinary.js";


// const generateToken = async(userId) =>{

//   try {
//     const user = await User.findById(userId);
//     const accessToken = user.generateAccessToken();
//     return accessToken;

//   } catch (error) {
//     throw new ApiError (500, "something Went Wrong ");
//   }
// }

const generateToken = (user) => {
  return user.generateAccessToken();
};

const getProfileImageUrl = (req) => {
  return `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
};


const registerUser = asyncHandler(async (req, res) => {

  const { fullName, email, password, profilePic  } = req.body;

  if (!fullName || !email  || !password) {
    throw new ApiError(400, "All fields are required");
  }

  const existingUser = await User.findOne({
    $or: [ { email }],
  });

  if (existingUser) {
    throw new ApiError(409, "User already exists");
  }

  let profilePicUrl = "";

  if (req.file) {
    profilePicUrl = getProfileImageUrl(req);
  }

  const user = await User.create({
    fullName,
    email,
  
    password,
     profilePic: profilePicUrl || profilePic || "",
  });

  const createdUser = await User.findById(user._id).select("-password");

  return res.status(201).json(
    new ApiResponse(200, createdUser, "Registered Successfully")
  );
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "Email & Password required");
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new ApiError(404, "User does not exist");
  }

  const isValidPassword = await user.isPasswordCorrect(password);
  if (!isValidPassword) {
    throw new ApiError(401, "Invalid password");
  }

  const accessToken = generateToken(user); // no extra DB call

  user.password = undefined; // no extra DB call
  
  const options = { httpOnly: true, secure: true };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .json(new ApiResponse(200, { user, accessToken }, "Logged in successfully"));
});

const logoutUser = asyncHandler(async(req,res) =>{
    const options = {
      //only sever can modify 
      httpOnly:true,
      secure: true
     }
    return  res.status(200).clearCookie("accessToken",options).json(new ApiResponse(200,{},"user LogOut"))
})


const getCurrentUser = asyncHandler(async (req, res) => {
  // req.user already set by verifyJWT middleware
  return res.status(200).json(
    new ApiResponse(200, req.user, "User fetched successfully")
  );
});

export { registerUser,loginUser,logoutUser, getCurrentUser  };
