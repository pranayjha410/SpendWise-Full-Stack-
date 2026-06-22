import React, { useState, useEffect } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { FaArrowUp, FaArrowDown, FaWallet } from "react-icons/fa";
import SummaryCard from "../../components/Dashboard/SummaryCard ";
import TransactionItem from "../../components/Dashboard/TransactionItem ";
import { useNavigate } from "react-router-dom";
import FinanceOverview from "../../components/Dashboard/FinanceOverview";
import LastExpenseDetails from "../../components/Dashboard/LastExpenseDetails";
import LastIncomeDetails from "../../components/Dashboard/LastIncomeDetails";
const Home = () => {
  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const { data } = await axiosInstance.get(API_PATHS.DASHBOARD.GET); // it returns object-> using {}
      setDashboardData(data.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <DashboardLayout activeMenu="Dashboard">
        <p className="text-gray-400">Loading dashboard...</p>
      </DashboardLayout>
    );
  }
  const { totalIncome, totalExpense, netSavings, recentTransaction } =
    dashboardData;

  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className="my-5 mx-auto">
        {/* summary car */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <SummaryCard
            title="Total Balance"
            amount={netSavings}
            icon={<FaWallet />}
            color="bg-blue-100 text-blue-600"
          />

          <SummaryCard
            title="Total Income"
            amount={totalIncome}
            icon={<FaArrowUp />}
            color="bg-green-100 text-green-600"
          />

          <SummaryCard
            title="Total Expense"
            amount={totalExpense}
            icon={<FaArrowDown />}
            color="bg-red-100 text-red-600"
          />
        </div>

        {/* Recent Transactions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          {" "}
          <FinanceOverview
            totalIncome={totalIncome}
            totalExpense={totalExpense}
            netSavings={netSavings}
            last45Days={dashboardData.last45Days}   
          />
          <div className="bg-white rounded-xl shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-700">
                Recent Transactions
              </h3>
              <button
                onClick={() => navigate("/income")}
                className="text-sm text-orange-500 font-medium hover:underline"
              >
                See All →
              </button>
            </div>

            {recentTransaction.length === 0 ? (
              <p className="text-gray-400 text-sm">No transactions yet</p>
            ) : (
              <div className="flex flex-col gap-3">
                {recentTransaction.map((txn) => (
                  <TransactionItem key={txn._id} txn={txn} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
  <LastIncomeDetails last45Days={dashboardData.last45Days} />
  <LastExpenseDetails last45Days={dashboardData.last45Days} />
</div>
    </DashboardLayout>
  );
};

export default Home;
