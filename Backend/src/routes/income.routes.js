import { Router } from "express";
import {addIncome,getAllIncomes,getIncome,updateIncome,deleteIncome,downloadIncomeExcel} from "../controllers/income.controller.js"
import { verifyJWT } from "../middlewares/authMiddlewares.js";


const router = Router();

router.post("/add",verifyJWT,addIncome);
router.get("/get",verifyJWT,getAllIncomes);
router.get("/getone",verifyJWT,getIncome);
router.get("/downloadexcel",verifyJWT,downloadIncomeExcel);
router.put("/update",verifyJWT,updateIncome);

router.delete("/:id",verifyJWT,deleteIncome);


export default router