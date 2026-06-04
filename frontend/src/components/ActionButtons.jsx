import { FiEdit2, FiTrash2 } from "react-icons/fi";

export default function ActionButtons({ onEdit, onDelete }) {
  return (
    <div className="flex justify-center gap-3">
      <button
        onClick={onEdit}
        className="p-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition cursor-pointer"
      >
        <FiEdit2 size={16} />
      </button>

      <button
        onClick={onDelete}
        className="p-2 rounded-md bg-orange-600 text-white hover:bg-orange-700 transition cursor-pointer"
      >
        <FiTrash2 size={16} />
      </button>
    </div>
  );
}
