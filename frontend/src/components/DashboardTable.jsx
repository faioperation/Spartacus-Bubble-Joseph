import InteractionRow from "./DashboardRow";
import Dropdown from "./Dropdown";
import DateFilter from "./DateFilter";
import { FiChevronDown } from "react-icons/fi";

export default function DashboardTable({
  data,
  dateSort,
  setDateSort,
  progress,
  setProgress,
  bookingType,
  setBookingType,
  bookingInfo,
  setBookingInfo,
}) {
  return (
    <>
      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden md:block cursor-pointer">
        <div className="rounded-2xl bg-white shadow-xl overflow-hidden">
          <table className="w-full text-md">
            <thead className=" bg-gray-50 border-b last-border-hidden text-gray-600">
              <tr>
                <th className="px-6 py-4 text-left font-bold">
                  Interaction ID
                </th>
                <th className="px-6 py-4 text-left font-bold">
                  Name
                </th>
                <th className="px-6 py-4 text-left font-bold">
                  Email
                </th>
                <th className="px-6 py-4 text-left font-bold">
                  Contact
                </th>

                {/* DATE CHECKER */}
                <th className="px-6 py-4 text-left font-bold relative">
                  <details className="relative group">
                    <summary
                      className="
                        list-none cursor-pointer select-none
                        flex items-center gap-1
                      "
                    >
                      <span>Date</span>
                      <FiChevronDown className="transition group-open:rotate-180" />
                    </summary>

                    <div className="absolute z-20 mt-2">
                      <DateFilter
                        value={dateSort}
                        onChange={setDateSort}
                      />
                    </div>
                  </details>
                </th>

                <th className="px-6 py-4 text-left font-bold">
                  Assigned By
                </th>

                {/* PROGRESS */}
                <th className="px-6 py-4 text-left font-bold">
                  <div className="flex items-center gap-2">
                    <span>Progress</span>
                    <Dropdown
                      value={progress}
                      onChange={setProgress}
                      options={[
                        { label: "All", value: "All" },
                        { label: "Confirmed", value: "Confirmed" },
                        { label: "Need Staff", value: "Need Staff" },
                        {
                          label: "Need Human Attention",
                          value: "Need Human Attention",
                        },
                      ]}
                    />
                  </div>
                </th>

                {/* BOOKING TYPE */}
                <th className="px-6 py-4 text-left font-bold">
                  <div className="flex items-center gap-2">
                    <span>Booking Type</span>
                    <Dropdown
                      value={bookingType}
                      onChange={setBookingType}
                      options={[
                        { label: "All", value: "All" },
                        { label: "New", value: "New" },
                        { label: "Existing", value: "Existing" },
                        { label: "Urgent", value: "Urgent" },
                      ]}
                    />
                  </div>
                </th>

                {/* BOOKING INFO */}
                <th className="px-6 py-4 text-left font-bold">
                  <div className="flex items-center gap-2">
                    <span>Booking Info</span>
                    <Dropdown
                      value={bookingInfo}
                      onChange={setBookingInfo}
                      options={[
                        { label: "All", value: "All" },
                        { label: "Confirmed", value: "Confirmed" },
                        { label: "Decline", value: "Decline" },
                      ]}
                    />
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <InteractionRow key={index} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= MOBILE FILTERS ================= */}
      <div className="md:hidden bg-white rounded-xl shadow-sm p-4 space-y-4">

        {/* Progress */}
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">
            Progress
          </p>
          <Dropdown
            value={progress}
            onChange={setProgress}
            options={[
              { label: "All", value: "All" },
              { label: "Confirmed", value: "Confirmed" },
              { label: "Need Staff", value: "Need Staff" },
              { label: "Need Human Attention", value: "Need Human Attention" },
            ]}
          />
        </div>

        {/* Booking Type */}
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">
            Booking Type
          </p>
          <Dropdown
            value={bookingType}
            onChange={setBookingType}
            options={[
              { label: "All", value: "All" },
              { label: "New", value: "New" },
              { label: "Existing", value: "Existing" },
              { label: "Urgent", value: "Urgent" },
            ]}
          />
        </div>

        {/* Booking Info */}
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">
            Booking Info
          </p>
          <Dropdown
            value={bookingInfo}
            onChange={setBookingInfo}
            options={[
              { label: "All", value: "All" },
              { label: "Confirmed", value: "Confirmed" },
              { label: "Decline", value: "Decline" },
            ]}
          />
        </div>

        {/* Date Sort */}
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">
            Sort by Date
          </p>
          <Dropdown
            value={dateSort}
            onChange={setDateSort}
            options={[
              { label: "Oldest first", value: "oldest" },
              { label: "Newest first", value: "newest" },
            ]}
          />
        </div>

      </div>
    </>
  );
}
