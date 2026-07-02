import { Router } from "express";
import {addExpense,getAllExpense,getExpense,updateExpense,deleteExpense,downloadExpenseExcel} from "../controllers/expense.controller.js"
import { verifyJWT } from "../middlewares/authMiddlewares.js";


const router = Router();

router.post("/add",verifyJWT,addExpense);
router.get("/get",verifyJWT,getAllExpense);
router.get("/downloadexcel",verifyJWT,downloadExpenseExcel);

router.get("/get/:id",verifyJWT,getExpense);
router.put("/update/:id",verifyJWT,updateExpense);

router.delete("/delete/:id",verifyJWT,deleteExpense);


export default router