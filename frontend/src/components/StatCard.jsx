export default function StatCard({ value, label, color }) {
  return (
    <div
      className="border rounded-xl flex flex-col items-center justify-center text-center w-full sm:w-90 lg:w-110 h-40 sm:h-45"
      style={{ borderColor: color }}
    >
      <h2 className="text-4xl sm:text-5xl font-semibold mb-3 sm:mb-8">
        {value}
      </h2>

      <span
        className="px-8 sm:px-8 py-3 sm:py-3 rounded-md
          text-sm sm:text-lg font-bold"
        style={{
          backgroundColor: `${color}22`,
          color: color,
        }}
      >
        {label}
      </span>
    </div>
  );
}
