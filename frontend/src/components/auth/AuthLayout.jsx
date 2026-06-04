export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center relative">
      {/* Top green bar */}
      <div className="absolute top-0 left-0 w-full h-20 bg-[#8BC53F]" />
      <div className="relative z-10 w-full flex justify-center">
        {children}
      </div>
    </div>
  );
}
