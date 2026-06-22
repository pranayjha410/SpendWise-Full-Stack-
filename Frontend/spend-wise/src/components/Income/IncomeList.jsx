import { getCategoryIcon } from "../../utils/categoryIcons";
import { FaTrash, FaEdit } from "react-icons/fa";

const IncomeList = ({ incomes, onDelete, onEdit }) => {
  if (incomes.length === 0) {
    return (
      <p className="text-gray-400 text-sm text-center py-10">
        No income records yet. Add your first income!
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {incomes.map((income) => {
        const Icon = getCategoryIcon(income.category);
        return (
          <div
            key={income._id}
            className="flex items-center justify-between bg-white rounded-xl shadow-sm p-4"
          >
            {/* Left — icon + details */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <Icon size={14} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">{income.title}</p>
                <p className="text-xs text-gray-400">
                  {income.category} • {new Date(income.date).toLocaleDateString()}
                </p>
                {income.description && (
                  <p className="text-xs text-gray-400 mt-0.5">{income.description}</p>
                )}
              </div>
            </div>

            {/* Right — amount + actions */}
            <div className="flex items-center gap-3">
              <p className="text-sm font-semibold text-green-600">
                +₹{income.amount.toLocaleString()}
              </p>
              <button
                onClick={() => onEdit(income)}
                className="text-gray-400 hover:text-blue-500 transition"
              >
                <FaEdit size={14} />
              </button>
              <button
                onClick={() => onDelete(income._id)}
                className="text-gray-400 hover:text-red-500 transition"
              >
                <FaTrash size={14} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IncomeList;