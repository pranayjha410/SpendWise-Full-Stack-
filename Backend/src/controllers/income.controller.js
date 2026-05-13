import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import { Income } from "../models/income.model.js";
import ExcelJS from "exceljs";

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
    date: date ? new Date(date) : Date.now(),
  });

  return res.status(201).json(new ApiResponse(200, newIncome, "Income added"));
});

//get all income
const getAllIncomes = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const income = await Income.find({ user: userId }).sort({ date: -1 });
  // if(!income){
  //   throw new ApiError(500,"Server Error")
  // }    find never return null

  return res.status(200).json(new ApiResponse(200, income, "All Income"));
});

//get one income
const getIncome = asyncHandler(async (req, res) => {
  const income = await Income.findOne({
    _id: req.params.id, // Condition 1: this specific income record
    user: req.user._id, // Condition 2: must belong to logged-in user
  });
  if (!income) {
    throw new ApiError(404, "Income not Found");
  }
  return res.status(200).json(new ApiResponse(200, income, "Income fetched"));
});

//update income(single)
const updateIncome = asyncHandler(async (req, res) => {
  //get that income
  const income = await Income.findOne({
    _id: req.params.id, // Condition 1: this specific income record
    user: req.user._id, // Condition 2: must belong to logged-in user
  });
  if (!income) {
    throw new ApiError(404, "Income not Found");
  }

  const updatedIncome = await Income.findByIdAndUpdate(
    req.params.id,
    { $set: req.body }, // only updates fields sent in request
    { new: true } // returns updated document
  );

  return res
    .status(200)
    .json(new ApiResponse(200, updatedIncome, "Income updated"));
});

//delete income
const deleteIncome = asyncHandler(async (req, res) => {
  const income = await Income.findOneAndDelete({
    _id: req.params.id,
    user: req.user._id, // ownership check & delete in one query, not using Id
  });

  if (!income) {
    throw new ApiError(404, "Income not found");
  }

  return res.status(200).json(new ApiResponse(200, income, "Income deleted"));
});

//download to exvel
const downloadIncomeExcel = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const incomes = await Income.find({ user: userId }).sort({ date: -1 }); //1. fetch all income

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

  incomes.forEach((item) => {
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
  addIncome,
  getAllIncomes,
  getIncome,
  updateIncome,
  deleteIncome,
  downloadIncomeExcel,
};
