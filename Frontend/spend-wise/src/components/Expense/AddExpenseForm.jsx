import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";

const CATEGORIES = [
  "Food", "Groceries", "Rent", "Travel", "Shopping",
  "Entertainment", "Bills", "Health", "Education", "General"
];

const AddExpenseForm = ({ onSuccess, onClose, editData }) => {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "General",
    date: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (editData) {
      setForm({
        title:       editData.title || "",
        amount:      editData.amount || "",
        category:    editData.category || "General",
        date:        editData.date ? new Date(editData.date).toISOString().split("T")[0] : "",
        description: editData.description || "",
      });
    }
  }, [editData]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.title.trim()) { setError("Title is required"); return; }
    if (!form.amount || isNaN(form.amount)) { setError("Valid amount required"); return; }

    setLoading(true);
    try {
      if (editData) {
        await axiosInstance.put(API_PATHS.EXPENSE.UPDATE(editData._id), {
          ...form, amount: Number(form.amount),
        });
      } else {
        await axiosInstance.post(API_PATHS.EXPENSE.ADD, {
          ...form, amount: Number(form.amount),
        });
      }
      onSuccess();
      onClose();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to save expense");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md mx-4 p-6">

        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-700">
            {editData ? "Update Expense" : "Add Expense"}
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl">✕</button>
        </div>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-sm text-gray-600">Title</label>
            <input name="title" value={form.title} onChange={handleChange}
              placeholder="e.g. Grocery Shopping" className="input-field" />
          </div>

          <div>
            <label className="text-sm text-gray-600">Amount (₹)</label>
            <input name="amount" type="number" value={form.amount} onChange={handleChange}
              placeholder="e.g. 500" className="input-field" />
          </div>

          <div>
            <label className="text-sm text-gray-600">Category</label>
            <select name="category" value={form.category} onChange={handleChange} className="input-field">
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-600">Date</label>
            <input name="date" type="date" value={form.date} onChange={handleChange} className="input-field" />
          </div>

          <div>
            <label className="text-sm text-gray-600">Description (optional)</label>
            <textarea name="description" value={form.description} onChange={handleChange}
              placeholder="Any notes..." className="input-field resize-none h-20" />
          </div>

          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? "Saving..." : editData ? "Update Expense" : "Add Expense"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddExpenseForm;