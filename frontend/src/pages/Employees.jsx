import { FiMail, FiPhone } from "react-icons/fi";

const employees = [
  {
    id: "#35020",
    name: "Kathryn Murphy",
    email: "bockely@att.com",
    phone: "(201) 555-0124",
  },
  {
    id: "#35021",
    name: "Devon Lane",
    email: "csilvers@rizon.com",
    phone: "(219) 555-0114",
  },
  {
    id: "#35022",
    name: "Foysal Rahman",
    email: "qamaho@mail.com",
    phone: "(316) 555-0116",
  },
  {
    id: "#35023",
    name: "Hari Danang",
    email: "xterris@gmail.com",
    phone: "(907) 555-0101",
  },
  {
    id: "#35024",
    name: "John Miller",
    email: "johnmiller@gmail.com",
    phone: "(907) 555-0101",
  },
];

export default function Employees() {
  return (
    <div className="p-6 lg:p-10 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Employees Information</h1>
        <p className="text-gray-500 mt-1">
          A centralized directory that displays all employees’ essential contact details for quick access and efficient communication. 
        </p>
      </div>

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden md:block cursor-pointer">
        <div className="rounded-2xl bg-white shadow-xl overflow-hidden">
          <table className="w-full text-md">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-6 py-4 text-left font-bold">
                  Employee ID
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
              </tr>
            </thead>

            <tbody>
              {employees.map((emp, index) => (
                <tr
                  key={index}
                  className="border border-gray-200 last:border-none hover:bg-[#8BC53F]/5 transition"
                >
                  <td className="px-6 py-5 font-medium text-gray-700">
                    {emp.id}
                  </td>

                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#8BC53F] to-green-600 text-white flex items-center justify-center font-bold">
                      {emp.name.charAt(0)}
                    </div>
                    <span className="font-medium text-gray-800">
                      {emp.name}
                    </span>
                  </td>

                  <td className="px-6 py-5 text-gray-600">
                    <div className="flex items-center gap-2">
                      <FiMail className="text-gray-400" />
                      {emp.email}
                    </div>
                  </td>

                  <td className="px-6 py-5 text-gray-600">
                    <div className="flex items-center gap-2">
                      <FiPhone className="text-gray-400" />
                      {emp.phone}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= MOBILE CARDS ================= */}
      <div className="md:hidden space-y-4">
        {employees.map((emp, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 space-y-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-linear-to-br from-[#8BC53F] to-green-600 text-white flex items-center justify-center font-bold text-lg">
                {emp.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold">{emp.name}</p>
                <p className="text-xs text-gray-500">
                  ID: {emp.id}
                </p>
              </div>
            </div>

            <div className="text-sm text-gray-600 flex items-center gap-2">
              <FiMail className="text-gray-400" />
              {emp.email}
            </div>

            <div className="text-sm text-gray-600 flex items-center gap-2">
              <FiPhone className="text-gray-400" />
              {emp.phone}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
