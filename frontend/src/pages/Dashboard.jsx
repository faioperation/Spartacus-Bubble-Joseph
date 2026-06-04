import { useState } from "react";
import SearchInput from "../components/SearchInput";
import InteractionTable from "../components/DashboardTable";
import InteractionLine from "../components/DashboardLine";

/* ===============================
   Dummy data (API ready)
   =============================== */
const data = [
  {
    id: "#35096",
    name: "Kathryn Murphy",
    email: "bockely@att.com",
    phone: "(201) 555-0124",
    date: "2025-10-20",
    assignedBy: "Staff",
    progress: "Confirmed",
    bookingType: "New",
    bookingInfo: "Confirmed",
  },
  {
    id: "#35025",
    name: "Devon Lane",
    email: "csilvers@rizon.com",
    phone: "(219) 555-0114",
    date: "2025-10-18",
    assignedBy: "Store Manager",
    progress: "Need Staff",
    bookingType: "Existing",
    bookingInfo: "Decline",
  },
  {
    id: "#35078",
    name: "Siddiq Mia",
    email: "qamaho@mail.com",
    phone: "(316) 555-9463",
    date: "2025-10-19",
    assignedBy: "Admin",
    progress: "Confirmed",
    bookingType: "Urgent",
    bookingInfo: "Confirmed",
  },
  {
    id: "#35037",
    name: "Ashikur Rahman",
    email: "maria@mail.com",
    phone: "(316) 555-0197",
    date: "2025-10-11",
    assignedBy: "Staff",
    progress: "Need Human Attention",
    bookingType: "Existing",
    bookingInfo: "Confirmed",
  },
  {
    id: "#35044",
    name: "Foysal Rahman",
    email: "demon@mail.com",
    phone: "(316) 555-0125",
    date: "2025-10-17",
    assignedBy: "Store Manager",
    progress: "Confirmed",
    bookingType: "New",
    bookingInfo: "Decline",
  },
  {
    id: "#35032",
    name: "Kishor Vai",
    email: "kristin@mail.com",
    phone: "(316) 555-0116",
    date: "2025-10-10",
    assignedBy: "Admin",
    progress: "Need Human Attention",
    bookingType: "Urgent",
    bookingInfo: "Decline",
  },
];

export default function Interactions() {
  /* Search */
  const [search, setSearch] = useState("");

  /* Filters */
  const [progress, setProgress] = useState("All");
  const [bookingType, setBookingType] = useState("All");
  const [bookingInfo, setBookingInfo] = useState("All");
  const [dateSort, setDateSort] = useState("oldest");

  /* FILTER + SORT PIPELINE */
  const filteredData = data
    // Search
    .filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase())
    )
    // Progress
    .filter((item) =>
      progress === "All" ? true : item.progress === progress
    )
    // Booking Type
    .filter((item) =>
      bookingType === "All" ? true : item.bookingType === bookingType
    )
    // Booking Info
    .filter((item) =>
      bookingInfo === "All" ? true : item.bookingInfo === bookingInfo
    )
    // Date sort
    .sort((a, b) =>
      dateSort === "oldest"
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date)
    );

  return (
    <div className="p-4 sm:p-6 lg:p-10 space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Dashboards
        </h1>
        <p className="text-gray-500 mt-1">
          A centralized list that displays all dashboards records
          with relevant details for quick tracking, monitoring,
          and efficient management.
        </p>
      </div>

      {/* 🔍 Search */}
      <SearchInput
        value={search}
        onChange={setSearch}
        placeholder="Search interaction..."
      />

      <div className="hidden lg:block">
        <InteractionTable
          data={filteredData}
          progress={progress}
          setProgress={setProgress}
          bookingType={bookingType}
          setBookingType={setBookingType}
          bookingInfo={bookingInfo}
          setBookingInfo={setBookingInfo}
          dateSort={dateSort}
          setDateSort={setDateSort}
        />
      </div>

      <div className="lg:hidden space-y-4">
        {filteredData.map((item, index) => (
          <InteractionLine key={index} item={item} />
        ))}
      </div>

    </div>
  );
}
