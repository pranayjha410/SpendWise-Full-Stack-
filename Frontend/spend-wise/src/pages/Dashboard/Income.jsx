import React, { useState, useEffect } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import IncomeOverview from "../../components/Income/IncomeOverview";
import AddIncomeForm from "../../components/Income/AddIncomeForm";
import IncomeList from "../../components/Income/IncomeList";

const Income = () => {
  const [incomes, setIncomes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editIncome, setEditIncome] = useState(null);

  useEffect(() => {
    fetchIncomes();
  }, []);

  const fetchIncomes = async () => {
    try {
      const { data } = await axiosInstance.get(
        API_PATHS.INCOME.GET_ALL
      );

      setIncomes(data.data || []);
    } catch (err) {
      console.error("Failed to fetch incomes:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this income?")) return;
    try {
      await axiosInstance.delete(
        API_PATHS.INCOME.DELETE(id)
      );

      fetchIncomes();
    } catch (err) {
      console.error("Failed to delete income:", err);
    }
  };

  const handleEdit = (income) => {
    setEditIncome(income);
    setShowAddForm(true);
  };

  return (
    <DashboardLayout activeMenu="Income">
      <div className="my-5 mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Income
          </h2>

          <button
            onClick={() => {
              setEditIncome(null);
              setShowAddForm(true);
            }}
            className="btn-primary"
          >
            + Add Income
          </button>
        </div>

        {/* Overview */}
        <IncomeOverview incomes={incomes} />

        {/* Income List */}
        <div className="mt-6">
          {loading ? (
            <p className="text-gray-400">Loading...</p>
          ) : incomes.length === 0 ? (
            <p className="text-gray-500">
              No income records found.
            </p>
          ) : (
            <IncomeList
              incomes={incomes}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          )}
        </div>

        {/* Download Excel */}
        <div className="mt-6">
          <a
            href={API_PATHS.INCOME.DOWNLOAD_INCOME}
            className="text-sm text-orange-500 hover:underline font-medium"
          >
            ⬇ Download as Excel
          </a>
        </div>
      </div>

      {/* Add / Edit Modal */}
      {showAddForm && (
        <AddIncomeForm
          editData={editIncome}
          onSuccess={fetchIncomes}
          onClose={() => {
            setShowAddForm(false);
            setEditIncome(null);
          }}
        />
      )}
    </DashboardLayout>
  );
};

export default Income;