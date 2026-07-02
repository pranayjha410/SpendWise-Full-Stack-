import React, { useState, useEffect } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import ExpenseOverview from "../../components/Expense/ExpenseOverview";
import ExpenseList from "../../components/Expense/ExpenseList";
import AddExpenseForm from "../../components/Expense/AddExpenseForm";
import DeleteConfirmModal from "../../components/Cards/DeleteConfirmModal";

const Expense = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editExpense, setEditExpense] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const { data } = await axiosInstance.get(API_PATHS.EXPENSE.GET_ALL);
      setExpenses(data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (expense) => {
    setEditExpense(expense);
    setShowAddForm(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      await axiosInstance.delete(API_PATHS.EXPENSE.DELETE(deleteId));
      fetchExpenses();
    } catch (err) {
      console.error("Failed to delete:", err);
    } finally {
      setDeleteId(null);
    }
  };

  return (
    <DashboardLayout activeMenu="Expense">
      <div className="my-5 mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Expense</h2>
          <button
            onClick={() => { setEditExpense(null); setShowAddForm(true); }}
            className="btn-primary"
          >
            + Add Expense
          </button>
        </div>

        {/* Overview */}
        <ExpenseOverview expenses={expenses} />

        {/* List */}
        {loading ? (
          <p className="text-gray-400">Loading...</p>
        ) : (
          <ExpenseList
            expenses={expenses}
            onDelete={(id) => setDeleteId(id)}
            onEdit={handleEdit}
          />
        )}

        {/* Download */}
        <div className="mt-6">
          <a href={API_PATHS.EXPENSE.DOWNLOAD_EXPENSE}
            className="text-sm text-orange-500 hover:underline font-medium">
            ⬇ Download as Excel
          </a>
        </div>

      </div>

      {/* Add/Edit Modal */}
      {showAddForm && (
        <AddExpenseForm
          editData={editExpense}
          onSuccess={fetchExpenses}
          onClose={() => { setShowAddForm(false); setEditExpense(null); }}
        />
      )}

      {/* Delete Modal */}
      {deleteId && (
        <DeleteConfirmModal
          message="This expense record will be permanently deleted."
          onConfirm={handleDeleteConfirm}
          onCancel={() => setDeleteId(null)}
        />
      )}

    </DashboardLayout>
  );
};

export default Expense;
