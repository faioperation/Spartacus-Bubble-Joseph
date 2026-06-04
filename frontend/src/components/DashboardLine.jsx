function InfoRow({ label, value }) {
  return (
    <div className="flex gap-3 text-sm sm:text-base">
      <span className="w-36 font-semibold text-gray-600">
        {label} :
      </span>
      <span className="text-gray-800 break-all">
        {value}
      </span>
    </div>
  );
}

export default function DashboardLine({ item }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 space-y-2 hover:bg-gray-50 transition">
      <InfoRow label="Interaction ID" value={item.id} />
      <InfoRow label="Name" value={item.name} />
      <InfoRow label="Email" value={item.email} />
      <InfoRow label="Contact" value={item.phone} />
      <InfoRow label="Date" value={item.date} />
      <InfoRow label="Assigned By" value={item.assignedBy} />
      <InfoRow label="Progress" value={item.progress} />
      <InfoRow label="Booking Type" value={item.bookingType} />
      <InfoRow label="Booking Info" value={item.bookingInfo} />
    </div>
  );
}
