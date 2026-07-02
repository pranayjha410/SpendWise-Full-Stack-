import { getCategoryIcon } from "../../utils/categoryIcons.js";
import { FaTrash, FaEdit } from "react-icons/fa";

const ExpenseList = ({ expenses, onDelete, onEdit }) => {
  if (expenses.length === 0) {
    return (
      <p className="text-gray-400 text-sm text-center py-10">
        No expense records yet. Add your first expense!
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {expenses.map((expense) => {
        const Icon = getCategoryIcon(expense.category);
        return (
          <div key={expense._id}
            className="flex items-center justify-between bg-white rounded-xl shadow-sm p-4">

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                <Icon size={14} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">{expense.title}</p>
                <p className="text-xs text-gray-400">
                  {expense.category} • {new Date(expense.date).toLocaleDateString()}
                </p>
                {expense.description && (
                  <p className="text-xs text-gray-400 mt-0.5">{expense.description}</p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <p className="text-sm font-semibold text-red-500">
                -₹{expense.amount.toLocaleString()}
              </p>
              <button onClick={() => onEdit(expense)}
                className="text-gray-400 hover:text-blue-500 transition">
                <FaEdit size={14} />
              </button>
              <button onClick={() => onDelete(expense._id)}
                className="text-gray-400 hover:text-red-500 transition">
                <FaTrash size={14} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExpenseList;