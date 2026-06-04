export default function DashboardCard({ item }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold text-gray-700">
          {item.name}
        </span>
        <span className="text-xs text-gray-500">{item.id}</span>
      </div>

      <div className="text-sm text-gray-600">
        <p><strong>Email:</strong> {item.email}</p>
        <p><strong>Contact:</strong> {item.phone}</p>
        <p><strong>Date:</strong> {item.date}</p>
        <p><strong>Assigned:</strong> {item.assignedBy}</p>
      </div>

      <div className="flex flex-wrap gap-2 pt-2">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">
          {item.progress}
        </span>

        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
          {item.bookingType}
        </span>

        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            item.bookingInfo === "Confirmed"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {item.bookingInfo}
        </span>
      </div>
    </div>
  );
}
