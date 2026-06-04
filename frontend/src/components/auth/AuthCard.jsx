export default function AuthCard({ children }) {
  return (
    <div
      className="
        bg-white 
        w-full max-w-lg          
        px-16 py-10              
        rounded-2xl
        border border-gray-100
        shadow-[0_12px_35px_rgba(0,0,0,0.09)]
        transition-all duration-300
        hover:shadow-[0_18px_45px_rgba(0,0,0,0.14)]
      "
    >
      {/* 🔹 children spacing control */}
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}
