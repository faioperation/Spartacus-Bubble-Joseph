export default function DeleteConfirm({ open, onConfirm, onCancel }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-10 w-80">
        <h3 className="font-semibold text-lg mb-2">
          Delete FAQ?
        </h3>
        <p className="text-sm text-gray-500 mb-6">
          This action cannot be undone.
        </p>

        <div className="flex justify-end gap-4 text-sm ">
          <button 
            onClick={onCancel} 
            className="text-gray-500 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="text-red-600 font-semibold cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
