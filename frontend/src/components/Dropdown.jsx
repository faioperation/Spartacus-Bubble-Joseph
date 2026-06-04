import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function Dropdown({ value, options, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* ✅ ONLY CARET */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center cursor-pointer"
      >
        <ChevronDown size={22} />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 bg-white border border-gray-200 rounded-md shadow-md z-50 w-30 h-40">
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={`px-2 py-1.5 text-sm cursor-pointer hover:bg-[#8BC43D]
                ${opt.value === value ? "font-semibold" : ""}`}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
