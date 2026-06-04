export default function DeleteConfirmModal({ open, onConfirm, onCancel }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-[520px] rounded-xl shadow-2xl p-12 text-center">

        <h2 className="text-xl font-medium mb-10">
          Do you want to delete?
        </h2>

        <div className="flex justify-center gap-10">
          <button
            onClick={onConfirm}
            className="border border-gray-300 px-6 py-1 rounded-md hover:bg-gray-100 transition"
          >
            Yes
          </button>

          <button
            onClick={onCancel}
            className="border border-gray-300 px-6 py-1 rounded-md hover:bg-gray-100 transition"
          >
            No
          </button>
        </div>

      </div>
    </div>
  );
}
