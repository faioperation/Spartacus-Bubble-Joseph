export default function StatusBadge({ status, onChange }) {
  return (
    <div
      className="
        inline-flex items-center gap-1
        bg-gray-100 rounded-full p-1
        text-xs font-semibold
        w-fit 
      "
    >
      {/* Active */}
      <button
        onClick={() => onChange("Active")}
        className={`
          px-3 py-1 rounded-full transition cursor-pointer
          ${
            status === "Active"
              ? "bg-green-500 text-white shadow"
              : "text-gray-500 hover:bg-gray-200"
          }
        `}
      >
        Active
      </button>

      {/* Inactive */}
      <button
        onClick={() => onChange("Inactive")}
        className={`
          px-3 py-1 rounded-full transition cursor-pointer
          ${
            status === "Inactive"
              ? "bg-gray-600 text-white shadow"
              : "text-gray-500 hover:bg-gray-200"
          }
        `}
      >
        Inactive
      </button>
    </div>
  );
}
