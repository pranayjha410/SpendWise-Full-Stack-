import { getCategoryIcon } from "../../utils/categoryIcons";
import CustomBarChart from "../Charts/CustomBarChart";


const LastExpenseDetails = ({ last45Days }) => {
  // filter only expense
  const expenseTransactions = (last45Days?.transactions || [])
    .filter((txn) => txn.type === "expense")
    .slice(0, 5);

  const chartData = expenseTransactions.map((txn) => ({
    name: txn.category || txn.title,
    amount: txn.amount,
  }));

  return (
    <div className="bg-white rounded-xl shadow-sm p-5">

      {/* Header */}
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Last Expense Details</h3>

      {expenseTransactions.length === 0 ? (
        <p className="text-gray-400 text-sm text-center py-6">No expenses in last 45 days</p>
      ) : (
        <>
          {/* Bar Chart */}
          <CustomBarChart data={chartData} color="#ef4444" />

          {/* Transaction list */}
          <div className="flex flex-col gap-3 mt-4">
            {expenseTransactions.map((txn) => {
              const Icon = getCategoryIcon(txn.category);
              return (
                <div
                  key={txn._id}
                  className="flex items-center justify-between border-b last:border-0 pb-3 last:pb-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                      <Icon size={14} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">{txn.title}</p>
                      <p className="text-xs text-gray-400">
                        {txn.category} • {new Date(txn.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-red-500">
                    -₹{txn.amount.toLocaleString()}
                  </p>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default LastExpenseDetails;