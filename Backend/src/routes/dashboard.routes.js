import { verifyJWT } from "../middlewares/authMiddlewares.js";
import {getDashboardData} from "../controllers/dashboard.controller.js"
import { Router } from "express";

const router = Router();

router.get("/", verifyJWT,getDashboardData);


export default router