export default function TextInput({ label, ...props }) {
  return (
    <div className="mb-4 text-left pt-4">
      <label className="block text-sm text-gray-700 mb-3">
        {label}
      </label>
      <input
        {...props}
        placeholder="Enter your email"
        className="w-full border border-[#8BC53F] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8BC53F]"
      />
    </div>
  );
}
