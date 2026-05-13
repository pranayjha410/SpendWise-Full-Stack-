import { Router } from "express";
import {addIncome,getAllIncomes,getIncome,updateIncome,deleteIncome,downloadIncomeExcel} from "../controllers/income.controller.js"
import { verifyJWT } from "../middlewares/authMiddlewares.js";


const router = Router();

router.post("/add",verifyJWT,addIncome);
router.get("/get",verifyJWT,getAllIncomes);
router.get("/downloadexcel",verifyJWT,downloadIncomeExcel);

router.get("/get/:id",verifyJWT,getIncome);
router.put("/get/:id",verifyJWT,updateIncome);

router.delete("/get/:id",verifyJWT,deleteIncome);


export default router