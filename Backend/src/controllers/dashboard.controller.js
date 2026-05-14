import { Income } from "../models/income.model";
import { Expense } from "../models/expense.model";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiResponse } from "../utils/ApiResponse";


const getDashboardData = asyncHandler(async(req,res)=>{
    const userId = req.user._id     

    //total income & expense
    const totalIncome = await Income.aggregate([
        {$match: {user:userId}},
        {$group: {_id:null, total:{$sum:"$amount"}}},           //null ---> meand only one group, not multip
    ]);

    const totalExpense = await Expense.aggregate([
    { $match: { user: userId } },
    { $group: { _id: null, total: { $sum: "$amount" } } },
  ]);

    //get date for 45 days
    const last45Days =  new Date();
    last45Days.setDate(last45Days.getDate()-45);

    //last 45 income transcation
})
