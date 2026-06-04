import { useState } from "react";
import StatCard from "../components/StatCard";
import LineChartCard from "../components/LineChartCard";
import Dropdown from "../components/Dropdown";

export default function Home() {
  const stats = {
    users: 246,
    interactions: 175,
  };

  const interactionData = {
    monthly: [
      { name: "Jan", value: 5 },
      { name: "Feb", value: 12 },
      { name: "Mar", value: 20 },
      { name: "Apr", value: 45 },
      { name: "May", value: 50 },
      { name: "Jun", value: 55 },
      { name: "Jul", value: 100 },
      { name: "Aug", value: 85 },
      { name: "Sep", value: 70 },
      { name: "Oct", value: 60 },
      { name: "Nov", value: 70 },
      { name: "Dec", value: 130 },
    ],
    weekly: [
      { name: "Sat", value: 22 },
      { name: "Sun", value: 76 },
      { name: "Tue", value: 33 },
      { name: "Mon", value: 46 },
      { name: "Wed", value: 57 },
      { name: "Thu", value: 19 },
      { name: "Fri", value: 64 },
    ],
    yearly: [
      { name: "2020", value: 244 },
      { name: "2021", value: 560 },
      { name: "2022", value: 270 },
      { name: "2023", value: 470 },
      { name: "2024", value: 670 },
      { name: "2025", value: 250 },
      { name: "2026", value: 470 },
    ],
  };

  const bookingData = {
    weekly: [
      { name: "Sat", value: 49 },
      { name: "Sun", value: 7 },
      { name: "Mon", value: 55 },
      { name: "Tue", value: 35 },
      { name: "Wed", value: 78 },
      { name: "Thu", value: 50 },
      { name: "Fri", value: 100 },
    ],
    monthly: [
      { name: "Jan", value: 33 },
      { name: "Feb", value: 12 },
      { name: "Mar", value: 20 },
      { name: "Apr", value: 55 },
      { name: "May", value: 39 },
      { name: "Jun", value: 55 },
      { name: "Jul", value: 90 },
      { name: "Aug", value: 65 },
      { name: "Sep", value: 66 },
      { name: "Oct", value: 40 },
      { name: "Nov", value: 20 },
      { name: "Dec", value: 120 },
    ],
    yearly: [
      { name: "2020", value: 145 },
      { name: "2021", value: 453 },
      { name: "2022", value: 270 },
      { name: "2023", value: 564 },
      { name: "2024", value: 284 },
      { name: "2025", value: 350 },
      { name: "2026", value: 70 },
    ],
  };

  const [interactionFilter, setInteractionFilter] = useState("monthly");
  const [bookingFilter, setBookingFilter] = useState("weekly");

  return (
    <div className="px-4 sm:px-8 lg:px-16 pt-6 sm:pt-8 lg:pt-10 pb-10 lg:pb-14 space-y-10 ">

      {/* ================= MOBILE ONLY GLOBAL STATS ================= */}
      <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10 lg:hidden">
        <StatCard value={stats.users} label="Total Users" color="#3B82F6" />
        <StatCard
          value={stats.interactions}
          label="Total Interaction"
          color="#EF4444"
        />
      </div>

      {/* ================= CHART SECTIONS ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

        {/* -------- Interaction -------- */}
        <div className="flex flex-col">

          {/* DESKTOP STAT (FIRST) */}
          <div className="hidden lg:flex justify-center mb-8 order-1">
            <StatCard
              value={stats.users}
              label="Total Users"
              color="#3B82F6"
            />
          </div>

          {/* TITLE (SECOND) */}
          <div className="flex justify-center items-center gap-2 mb-4 pt-7 order-2">
            <h2 className="font-bold text-lg sm:text-xl">
              Interaction Progress
            </h2>
            <Dropdown
              value={interactionFilter}
              onChange={setInteractionFilter}
              options={[
                { label: "Weekly", value: "weekly" },
                { label: "Monthly", value: "monthly" },
                { label: "Yearly", value: "yearly" },
              ]}
            />
          </div>

          {/* CHART (THIRD) */}
          <div className="order-3">
            <LineChartCard
              title="Monthly Interaction Progress"
              data={interactionData[interactionFilter]}
              dataKey="value"
              stroke="#8B5CF6"
              total={764}
            />
          </div>
        </div>

        {/* -------- Booking -------- */}
        <div className="flex flex-col">

          {/* DESKTOP STAT (FIRST) */}
          <div className="hidden lg:flex justify-center mb-8 order-1">
            <StatCard
              value={stats.interactions}
              label="Total Interaction"
              color="#EF4444"
            />
          </div>

          {/* TITLE (SECOND) */}
          <div className="flex justify-center items-center gap-2 mb-4 pt-7 order-2">
            <h2 className="font-bold text-lg sm:text-xl">
              Booking Progress
            </h2>
            <Dropdown
              value={bookingFilter}
              onChange={setBookingFilter}
              options={[
                { label: "Weekly", value: "weekly" },
                { label: "Monthly", value: "monthly" },
                { label: "Yearly", value: "yearly" },
              ]}
            />
          </div>

          {/* CHART (THIRD) */}
          <div className="order-3">
            <LineChartCard
              title="Weekly Booking Progress"
              data={bookingData[bookingFilter]}
              dataKey="value"
              stroke="#EF4444"
              total={479}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
