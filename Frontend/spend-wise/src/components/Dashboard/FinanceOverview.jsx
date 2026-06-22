import React, {useState} from 'react'
import CustomPieChart from '../Charts/CustomPieChart';
import ChartLegend from '../Charts/ChartLegend';
import CustomLineChart from '../Charts/CustomLineChart';
const COLORS = {
  income: "#22c55e",  // green
  expense: "#ef4444", // red
  balance: "#3b82f6", // blue
};
const prepareLineData = (transactions) => {
  const map = {};

  transactions.forEach((txn) => {
    const date = new Date(txn.date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
    });

    if (!map[date]) {
      map[date] = { date, income: 0, expense: 0 };
    }

    if (txn.type === "income") {
      map[date].income += txn.amount;
    } else {
      map[date].expense += txn.amount;
    }
  });

  // sort by date
  return Object.values(map).sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
};
const FinanceOverview = ({ totalIncome, totalExpense, netSavings, last45Days }) => {
    const [activeChart, setActiveChart] = useState("pie"); 
    const pieData  = [
    { name: "Balance", value: netSavings, color: COLORS.balance },
    { name: "Income", value: totalIncome, color: COLORS.income },
    { name: "Expense", value: totalExpense, color: COLORS.expense },
  ];

   const lineData = prepareLineData(last45Days?.transactions || []);

  const total = totalIncome + totalExpense;

  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
      {/* Header + Toggle */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Financial Overview</h3>

        {/* Toggle buttons */}
        <div className="flex items-center bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveChart("pie")}
            className={`px-3 py-1 rounded-md text-sm font-medium transition
              ${activeChart === "pie"
                ? "bg-white shadow text-orange-500"
                : "text-gray-500 hover:text-gray-700"
              }`}
          >
            Pie
          </button>
          <button
            onClick={() => setActiveChart("line")}
            className={`px-3 py-1 rounded-md text-sm font-medium transition
              ${activeChart === "line"
                ? "bg-white shadow text-orange-500"
                : "text-gray-500 hover:text-gray-700"
              }`}
          >
            Growth
          </button>
        </div>
      </div>

     {total === 0 ? (
        <p className="text-gray-400 text-sm text-center py-10">No data to show yet</p>
      ) : (
        <>
          {activeChart === "pie" ? (
            <>
              <CustomPieChart data={pieData} />
              <ChartLegend data={pieData} />
            </>
          ) : (
            <CustomLineChart data={lineData} />
          )}
        </>
      )}
    </div>
  );
};

export default FinanceOverview;
