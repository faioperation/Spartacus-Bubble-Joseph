import { useState } from "react";

export default function AddApiKeyModal({ open, onClose, onAdd }) {
  const [apiName, setApiName] = useState("");
  const [apiKey, setApiKey] = useState("");

  if (!open) return null;

  const handleAdd = () => {
    if (!apiName.trim() || !apiKey.trim()) return;

    onAdd({
      name: apiName,
      key: apiKey,
    });

    setApiName("");
    setApiKey("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-[520px] rounded-xl shadow-2xl p-10 text-center">

        <h2 className="text-2xl font-medium mb-6">API Keys</h2>

        {/* API NAME */}
        <input
          value={apiName}
          onChange={(e) => setApiName(e.target.value)}
          placeholder="Enter API name (e.g. ChatGPT, Gemini)"
          className="w-full border border-gray-200 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[#8BC53F]"
        />

        {/* API KEY */}
        <input
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Enter API key"
          className="w-full border border-gray-200 rounded-md px-4 py-2 mb-10 focus:outline-none focus:ring-2 focus:ring-[#8BC53F]"
        />

        <div className="flex justify-center gap-6">
          <button
            onClick={onClose}
            className="border border-gray-200 cursor-pointer px-6 py-1 rounded-md hover:bg-gray-100 transition"
          >
            Cancel
          </button>

          <button
            onClick={handleAdd}
            className="bg-[#8BC53F] cursor-pointer text-white px-14 py-2 rounded-md hover:bg-[#7bb136] transition"
          >
            Save
          </button>
        </div>

      </div>
    </div>
  );
}
