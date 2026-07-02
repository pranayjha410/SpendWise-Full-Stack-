const DeleteConfirmModal = ({ onConfirm, onCancel, message }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-sm mx-4 p-6">

        {/* Icon */}
        <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
          <span className="text-red-500 text-xl">🗑️</span>
        </div>

        {/* Message */}
        <h3 className="text-lg font-semibold text-gray-700 text-center mb-2">
          Are you sure?
        </h3>
        <p className="text-sm text-gray-400 text-center mb-6">
          {message || "This action cannot be undone."}
        </p>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-2 rounded-lg bg-red-500 text-sm text-white hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>

      </div>
    </div>
  );
};

export default DeleteConfirmModal;