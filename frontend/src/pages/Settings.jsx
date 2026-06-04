import { useState } from "react";
import StatusBadge from "../components/StatusBadge";
import ActionButtons from "../components/ActionButtons";
import EditApiKeyModal from "../components/EditApiKeyModal";
import DeleteConfirmModal from "../components/DeleteConfirmModal";
import AddApiKeyModal from "../components/AddApiKeyModal";

/* Dummy Data */
const initialData = [
  {
    id: 1,
    label: "01",
    name: "ChatGPT",
    key: "sk-4f9eD3kLxXyZ8QpL",
    created: "11 Nov, 2025",
    status: "Active",
  },
  {
    id: 3,
    label: "03",
    name: "Gemini",
    key: "sk-8aK2Lp9QxYzT6WEr",
    created: "11 Nov, 2025",
    status: "Active",
  },
  {
    id: 4,
    label: "04",
    name: "ChatGPT",
    key: "sk-4f9eD3kLxXyZ8QpL",
    created: "11 Nov, 2025",
    status: "Active",
  },
  {
    id: 5,
    label: "05",
    name: "DeepSeek",
    key: "sk-8aK2Lp9QxYzT6WEr",
    created: "11 Nov, 2025",
    status: "Active",
  },
  {
    id: 6,
    label: "06",
    name: "Grok",
    key: "sk-4f9eD3kLxXyZ8QpL",
    created: "11 Nov, 2025",
    status: "Active",
  },
];

export default function Settings() {
  const [data, setData] = useState(initialData);
  const [editItem, setEditItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);
  const [openAdd, setOpenAdd] = useState(false);

  /* ADD */
  const handleAdd = ({ name, key }) => {
    const newItem = {
      id: Date.now(),
      label: String(data.length + 1).padStart(2, "0"),
      name,
      key,
      created: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      status: "Active",
    };

    setData((prev) => [...prev, newItem]);
    setOpenAdd(false);
  };

  /* EDIT */
  const handleSave = (updatedKey) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === editItem.id ? { ...item, key: updatedKey } : item
      )
    );
    setEditItem(null);
  };

  /* DELETE */
  const handleDelete = () => {
    setData((prev) => prev.filter((item) => item.id !== deleteItem.id));
    setDeleteItem(null);
  };

  return (
    <div className="space-y-6 p-10 ">
      {/* 🔹 HEADER (OUTSIDE CARD) */}
      <div>
        <h2 className="text-4xl font-bold">API Keys</h2>
        <p className="text-gray-500 text-md">
          Manage and monitor all connected API keys securely
        </p>
      </div>

      {/* 🔹 CARD */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-6 overflow-x-auto">
        {/* Top action bar */}
        <div className="mb-6 flex justify-end">
          <button
            onClick={() => setOpenAdd(true)}
            className="bg-[#8BC53F] text-white text-xl font-semibold px-6 py-2 rounded-md hover:bg-[#7bb136] transition cursor-pointer"
          >
            Add
          </button>
        </div>

        {/* Table */}
        <table className="w-full text-sm border-separate border-spacing-y-2">
          <thead>
            <tr className="text-gray-500 rounded-xl">
              <th className="py-3 text-left">Label</th>
              <th className="py-3 text-left">API Name</th>
              <th className="py-3 text-left">API Key</th>
              <th className="py-3 text-left">Created</th>
              <th className="py-3 text-left">Status</th>
              <th className="py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition">
                <td className="py-4 font-medium">{item.label}</td>
                <td className="py-4">{item.name}</td>
                <td className="py-4 font-mono text-gray-600">
                  {item.key.slice(0, 10)}••••••••••
                </td>
                <td className="py-4">{item.created}</td>
                <td className="py-4 whitespace-nowrap">
                  <StatusBadge
                    status={item.status}
                    onChange={(newStatus) =>
                      setData((prev) =>
                        prev.map((row) =>
                          row.id === item.id
                            ? { ...row, status: newStatus }
                            : row
                        )
                      )
                    }
                  />
                </td>
                <td className="py-4">
                  <ActionButtons
                    onEdit={() => setEditItem(item)}
                    onDelete={() => setDeleteItem(item)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🔹 MODALS */}
      <AddApiKeyModal
        open={openAdd}
        onClose={() => setOpenAdd(false)}
        onAdd={handleAdd}
      />

      <EditApiKeyModal
        open={!!editItem}
        data={editItem}
        onClose={() => setEditItem(null)}
        onSave={handleSave}
      />

      <DeleteConfirmModal
        open={!!deleteItem}
        onConfirm={handleDelete}
        onCancel={() => setDeleteItem(null)}
      />
    </div>
  );
}
