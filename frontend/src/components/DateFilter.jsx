export default function DateFilter({ value, onChange }) {
  const handleChange = (val) => {
    // same value click করলে কিছু হবে না
    if (value === val) return;
    onChange(val);
  };

  return (
    <div className="bg-white rounded-md shadow-lg border p-3 w-48 space-y-2">
      <p className="text-xs text-gray-500 mb-1">Sort by date</p>

      <label className="flex items-center gap-2 text-sm cursor-pointer">
        <input
          type="checkbox"
          checked={value === "oldest"}
          onChange={() => handleChange("oldest")}
        />
        Oldest date first
      </label>

      <label className="flex items-center gap-2 text-sm cursor-pointer">
        <input
          type="checkbox"
          checked={value === "newest"}
          onChange={() => handleChange("newest")}
        />
        Newest date first
      </label>
    </div>
  );
}
