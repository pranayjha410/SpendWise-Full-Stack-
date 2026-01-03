import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },

    amount: {
      type: Number,
      required: [true, "Amount is required"],
      min: [0, "Amount must be positive"],
    },

    type: {
      type: String,
      enum: ["income", "expense"],
      required: [true, "Type is required"],
    },

    category: {
      type: String,
      required: [true, "Category is required"],
    },

    date: {
      type: Date,
      default: Date.now,
    },

    notes: {
      type: String,
      trim: true,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;
