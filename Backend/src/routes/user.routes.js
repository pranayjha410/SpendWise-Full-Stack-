import {Router} from "express";
import { registerUser } from "../controllers/user.controller.js";
import { loginUser } from "../controllers/user.controller.js";
import { logoutUser } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/authMiddlewares.js";
import { upload } from "../middlewares/uploadMiddlewares.js";
    
const router = Router();   

router.post("/register", upload.single("profilePic"), registerUser);
router.post("/login",loginUser);

router.post("/logout",verifyJWT,logoutUser)

router.post("/upload-image", upload.single("profilePic"), (req,res)=>{
    if(!req.file){
            return res.status(400).json({message: "NO file uploaded"})
    }
    const imageUrl =  `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
    res.status(200).json({imageUrl})
});


export default router