import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import { Expense } from "../models/expense.model.js";
import ExcelJS from "exceljs";

//Add Income
const addExpense = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  const { icon, title, amount, category, description, date } = req.body;

  if (!title || !amount || isNaN(amount)) {
    throw new ApiError(400, "Valid title and amount required");
  }

  const newExpense = await Expense.create({
    user: userId,
    icon,
    title,
    amount,
    category,
    description,
    date: date ? new Date(date) : Date.now(),
  });

return res.status(201).json(new ApiResponse(200, newExpense, "Expense added"));
});

//get all income
const getAllExpense = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const expense = await Expense.find({ user: userId }).sort({ date: -1 });
 
  return res.status(200).json(new ApiResponse(200, expense, "All Expense"));
});

//get one income
const getExpense = asyncHandler(async (req, res) => {
  const expense = await Expense.findOne({
    _id: req.params.id, // Condition 1: this specific income record
    user: req.user._id, // Condition 2: must belong to logged-in user
  });
  if (!expense) {
    throw new ApiError(404, "Income not Found");
  }
  return res.status(200).json(new ApiResponse(200, expense, "expense fetched"));
});

//update income(single)
const updateExpense = asyncHandler(async (req, res) => {
  //get that income
  const expense = await Expense.findOne({
    _id: req.params.id, // Condition 1: this specific income record
    user: req.user._id, // Condition 2: must belong to logged-in user
  });
  if (!expense) {
    throw new ApiError(404, "expense not Found");
  }

  const updatedExpense = await Expense.findByIdAndUpdate(
    req.params.id,
    { $set: req.body }, // only updates fields sent in request
    { new: true } // returns updated document
  );

  return res
    .status(200)
    .json(new ApiResponse(200, updatedExpense, "expense updated"));
});

//delete income
const deleteExpense = asyncHandler(async (req, res) => {
  const expense = await Expense.findOneAndDelete({
    _id: req.params.id,
    user: req.user._id, // ownership check & delete in one query, not using Id
  });

  if (!expense) {
    throw new ApiError(404, "expense not found");
  }

  return res.status(200).json(new ApiResponse(200, expense, "expense deleted"));
});

//download to exvel
const downloadExpenseExcel = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const expense = await Expense.find({ user: userId }).sort({ date: -1 }); //1. fetch all income

  // 2- create worksheet in workbook
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Incomes");

  //3 worsheet visulzation
  worksheet.columns = [
    { header: "Title", key: "title", width: 20 },
    { header: "Amount", key: "amount", width: 15 },
    { header: "Category", key: "category", width: 20 },
    { header: "Date", key: "date", width: 20 },
  ];

  //4 add row

  expense.forEach((item) => {
    worksheet.addRow({
      title: item.title,
      amount: item.amount,
      category: item.category,
      date: item.date.toLocaleDateString("en-IN"),
    });
  });

  //5 style to woorbook
  worksheet.getRow(1).eachCell((cell) => {
    cell.font = { bold: true };
    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF4CAF50" }, // green header
    };
    cell.font = { bold: true, color: { argb: "FFFFFFFF" } }; // white text
  });

  // 6. send file as download
  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  );
  res.setHeader("Content-Disposition", "attachment; filename=incomes.xlsx");

  await workbook.xlsx.write(res);
  res.end();
});

export {
  addExpense,
  getAllExpense,
  getExpense,
  updateExpense,
  deleteExpense,
  downloadExpenseExcel,
};
