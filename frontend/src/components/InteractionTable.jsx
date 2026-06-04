export default function InteractionTable({
  data,
  onView,
  category,
  onCategoryChange,
  type,
  onTypeChange,
}) {
  return (
    <table className="w-full text-md">
      <thead className="bg-gray-50 text-gray-600 border border-gray-200">
        <tr>
          {/* CATEGORY FILTER */}
          <th className="p-6 text-left">
            <div className="flex items-center gap-2">
              <span>Category</span>
              <select
                value={category}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="text-xs px-1 py-1 rounded-md border border-gray-300 outline-none cursor-pointer"
              >
                <option value="all">All</option>
                <option value="Phone">Phone</option>
                <option value="Mail">Mail</option>
              </select>
            </div>
          </th>

          <th className="p-6 text-left">ID</th>

          {/* TYPE FILTER */}
          <th className="p-6 text-left">
            <div className="flex items-center gap-2">
              <span>Type</span>
              <select
                value={type}
                onChange={(e) => onTypeChange(e.target.value)}
                className="text-xs px-1 py-1 rounded-md border border-gray-300 outline-none cursor-pointer">
                <option value="all">All</option>
                <option value="Incoming Call">Incoming Call</option>
                <option value="Outgoing Call">Outgoing Call</option>
                <option value="Missed Call">Missed Call</option>
                <option value="Email Sent">Email Sent</option>
                <option value="Email Received">Email Received</option>
              </select>
            </div>
          </th>

          <th className="p-6 text-right">Details</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item, index) => (
          <tr
            key={item.id}
            className={`border border-gray-200 hover:bg-gray-50 transition ${
              index === data.length - 1 ? "border-b-0" : ""
            }`}
          >
            <td className="p-6">
              <span
                className={`px-3 py-1 rounded-full text-md font-                  semibold text-white
                  ${item.category === "Phone" ? "bg-[#8BC43D]" : "bg-red-500"}`}
              >
                {item.category}
              </span>
            </td>

            <td className="p-6">{item.ref}</td>
            <td className="p-6">{item.type}</td>

            <td className="p-6 text-right">
              <button
                onClick={() => onView(item)}
                className="px-4 py-2 rounded-full bg-[#8BC43D] text-white text-md font-semibold hover:opacity-90 cursor-pointer hover:shadow-2xl"
              >
                View
              </button>
            </td>
          </tr>
        ))}

        {data.length === 0 && (
          <tr>
            <td colSpan="4" className="p-10 text-center text-gray-              400">
              No interactions found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
