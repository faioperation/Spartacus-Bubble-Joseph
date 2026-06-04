export default function DashboardRow({ item }) {
  return (
    <tr className="hover:bg-[#8BC53F]/5 transition border border-gray-200 last:border-b-0">
      <td className="px-6 py-6 font-medium">{item.id}</td>
      <td className="px-6 py-6">{item.name}</td>
      <td className="px-6 py-6 text-gray-600">{item.email}</td>
      <td className="px-6 py-6">{item.phone}</td>
      <td className="px-6 py-6">{item.date}</td>
      <td className="px-6 py-6">{item.assignedBy}</td>

      <td className="px-6 py-6">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">
          {item.progress}
        </span>
      </td>

      <td className="px-6 py-4">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
          {item.bookingType}
        </span>
      </td>

      <td className="px-6 py-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            item.bookingInfo === "Confirmed"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {item.bookingInfo}
        </span>
      </td>
    </tr>
  );
}
