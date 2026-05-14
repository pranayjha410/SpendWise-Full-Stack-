import { Income } from "../models/income.model.js";
import { Expense } from "../models/expense.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const getDashboardData = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  // Total income
  const totalIncome = await Income.aggregate([
    { $match: { user: userId } },
    {
      $group: {
        _id: null,
        total: { $sum: "$amount" },
      },
    },
  ]);

  // Total expense
  const totalExpense = await Expense.aggregate([
    { $match: { user: userId } },
    {
      $group: {
        _id: null,
        total: { $sum: "$amount" },
      },
    },
  ]);

  // Date for last 45 days
  const last45DaysDate = new Date();
  last45DaysDate.setDate(last45DaysDate.getDate() - 45);

  // Last 45 days income transactions
  const last45DaysIncomeTransaction = await Income.find({
    user: userId,
    date: { $gte: last45DaysDate },
  }).sort({ date: -1 });

  // Last 45 days total income
  const last45DaysIncomeTotal =
    last45DaysIncomeTransaction.reduce(
      (sum, item) => sum + item.amount,
      0
    );

  // Last 45 days expense transactions
  const last45DaysExpenseTransaction = await Expense.find({
    user: userId,
    date: { $gte: last45DaysDate },
  }).sort({ date: -1 });

  // Last 45 days total expense
  const last45DaysExpenseTotal =
    last45DaysExpenseTransaction.reduce(
      (sum, item) => sum + item.amount,
      0
    );

  // Combined recent transactions
  const recentTransaction = [
    ...(await Income.find({ user: userId })
      .sort({ date: -1 })
      .limit(5)).map((item) => ({
      ...item.toObject(),
      type: "income",
    })),

    ...(await Expense.find({ user: userId })
      .sort({ date: -1 })
      .limit(5)).map((item) => ({
      ...item.toObject(),
      type: "expense",
    })),
  ]
    .sort((a, b) => b.date - a.date)
    .slice(0, 5);

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        // Overall summary
        totalIncome: totalIncome[0]?.total || 0,

        totalExpense: totalExpense[0]?.total || 0,

        netSavings:
          (totalIncome[0]?.total || 0) -
          (totalExpense[0]?.total || 0),

        // Last 45 days data
        last45Days: {
          incomeTotal: last45DaysIncomeTotal,

          expenseTotal: last45DaysExpenseTotal,

          transactions: [
            ...last45DaysIncomeTransaction.map((item) => ({
              ...item.toObject(),
              type: "income",
            })),

            ...last45DaysExpenseTransaction.map((item) => ({
              ...item.toObject(),
              type: "expense",
            })),
          ].sort((a, b) => b.date - a.date),
        },

        // Recent transactions
        recentTransaction,
      },
      "Dashboard data fetched successfully"
    )
  );
});

export { getDashboardData };