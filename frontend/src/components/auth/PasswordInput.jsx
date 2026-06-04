import { useState } from "react";
import { Icon } from "@iconify/react";

export default function PasswordInput({ label }) {
  const [show, setShow] = useState(false);

  return (
    <div className="mb-4 text-left">
      <label className="block text-sm text-gray-800 mb-3">
        {label}
      </label>

      <div className="relative">
        <input
          type={show ? "text" : "password"}
          placeholder="Enter your password"
          className="w-full border border-[#8BC53F] outline-none rounded-md px-4 py-2 pr-12 focus:ring-2 focus:ring-[#8BC53F]"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8BC53F] cursor-pointer"
        >
          <Icon
            icon={!show ? "mdi:eye-off" : "mdi:eye"}
            width={22}
          />
        </button>
      </div>
    </div>
  );
}
