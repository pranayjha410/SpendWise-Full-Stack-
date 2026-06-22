import CustomBarChart from "../Charts/CustomBarChart";

const IncomeOverview = ({ incomes }) => {
  // prepare last 6 for chart
  const chartData = incomes.slice(0, 6).map((inc) => ({
    name:  inc.title,
    amount: inc.amount,
  }));

  const total = incomes.reduce((sum, inc) => sum + inc.amount, 0);

  return (
    <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Income Overview</h3>
          <p className="text-sm text-gray-400">
            Total: <span className="text-green-600 font-semibold">₹{total.toLocaleString()}</span>
          </p>
        </div>
      </div>
      {incomes.length === 0 ? (
        <p className="text-gray-400 text-sm text-center py-6">No income data yet</p>
      ) : (
        <CustomBarChart data={chartData} color="#22c55e" />
      )}
    </div>
  );
};

export default IncomeOverview;
