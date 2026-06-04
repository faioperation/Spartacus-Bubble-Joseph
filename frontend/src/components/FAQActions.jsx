export default function FAQActions({ onEdit, onDelete }) {
  return (
    <div className="flex gap-4 mt-3 text-md">
      <button
        onClick={onEdit}
        className="text-[#8BC43D] font-medium border border-gray-300 rounded-md p-1 cursor-pointer"
      >
        Edit
      </button>
      <button
        onClick={onDelete}
        className="text-red-400 font-medium border border-gray-300 rounded-md p-1 cursor-pointer"
      >
        Delete
      </button>
    </div>
  );
}
