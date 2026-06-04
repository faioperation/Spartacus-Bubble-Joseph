import { useEffect, useState } from "react";

export default function EditApiKeyModal({ open, data, onClose, onSave }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (data) setValue(data.key);
  }, [data]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-[520px] rounded-xl shadow-2xl p-10 text-center">

        <h2 className="text-2xl font-medium mb-6">API Keys</h2>

        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full border border-gray-200 rounded-md px-4 py-2 mb-10 focus:outline-none focus:ring-2 focus:ring-[#8BC53F]"
        />

        <div className="flex justify-center gap-6">
          <button onClick={onClose} className="border border-gray-200 px-6 py-1 rounded-md">
            Cancel
          </button>

          <button
            onClick={() => onSave(value)}
            className="bg-[#8BC53F] text-white px-14 py-2 rounded-md hover:bg-[#7bb136] transition"
          >
            Save
          </button>
        </div>

      </div>
    </div>
  );
}
