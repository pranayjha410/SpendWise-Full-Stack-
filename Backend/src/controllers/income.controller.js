import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import { Income } from "../models/income.model.js";

//Add Income
const addIncome = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  const { icon, title, amount, category, description, date } = req.body;

  if (!title || !amount || isNaN(amount)) {
    throw new ApiError(400, "Valid title and amount required");
  }

  const newIncome = await Income.create({
    user: userId,
    icon,
    title,
    amount,
    category,
    description,
    date: date ? new Date(date) : Date.now()
  });

  return res.status(201).json(
    new ApiResponse(200, newIncome, "Income added")
  );
});

//get all income
const getAllIncomes = asyncHandler(async (req, res) => {
      const userId = req.user._id;

})

//get one income
const getIncome = asyncHandler(async (req, res) => {})

//update income(single)
const updateIncome = asyncHandler(async (req, res) => {})


//delete income
const deleteIncome = asyncHandler(async (req, res) => {})

//download to exvel 
const downloadIncomeExcel = asyncHandler(async (req, res) => {})

export {addIncome,getAllIncomes,getIncome,updateIncome,deleteIncome,downloadIncomeExcel};