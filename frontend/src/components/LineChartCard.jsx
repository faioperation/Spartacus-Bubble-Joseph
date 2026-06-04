import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function LineChartCard({
  title,
  data,
  dataKey,
  stroke,
  total,
}) {
  return (
    <div className="bg-[#FBF6EF] rounded-xl p-4 sm:p-6 w-full">
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h3 className="font-semibold text-sm sm:text-base">
          {title}
        </h3>
      </div>

      {/* responsive height */}
      <div className="h-50 sm:h-60 lg:h-70">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey={dataKey}
              stroke={stroke}
              strokeWidth={2}
              dot
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-end mt-3">
        <span
          className="px-3 sm:px-4 py-1 rounded-full text-white text-xs sm:text-sm"
          style={{ backgroundColor: stroke }}
        >
          Total: {total}
        </span>
      </div>
    </div>
  );
}
