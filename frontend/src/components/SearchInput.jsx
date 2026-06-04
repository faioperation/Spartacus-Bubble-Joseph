import { FiSearch } from "react-icons/fi";

export default function SearchInput({ value, onChange, placeholder }) {
  return (
    <div className="relative w-full md:max-w-xl">
      <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || "Search"}
        className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#8BC53F]/40 transition"
      />
    </div>
  );
}
