import CustomBarChart from "../Charts/CustomBarChart";


const ExpenseOverview = ({ expenses }) => {
  const chartData = expenses.slice(0, 6).map((exp) => ({
    name: exp.title,
    amount: exp.amount,
  }));

  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Expense Overview</h3>
          <p className="text-sm text-gray-400">
            Total: <span className="text-red-500 font-semibold">₹{total.toLocaleString()}</span>
          </p>
        </div>
      </div>
      {expenses.length === 0 ? (
        <p className="text-gray-400 text-sm text-center py-6">No expense data yet</p>
      ) : (
        <CustomBarChart data={chartData} color="#ef4444" />
      )}
    </div>
  );
};

export default ExpenseOverview;