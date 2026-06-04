import { useRef } from "react";

export default function OtpInput({ length = 6 }) {
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return;

    inputsRef.current[index].value = value;
    if (value && index < length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div className="flex justify-center gap-2 mb-6">
      {[...Array(length)].map((_, i) => (
        <input
          key={i}
          ref={(el) => (inputsRef.current[i] = el)}
          maxLength={1}
          inputMode="numeric"
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          className="
            w-10 h-10
            border border-[#8BC53F]
            rounded-md
            text-center text-lg
            outline-none
            focus:outline-none
            focus:border-[#8BC53F]
            focus:ring-2
            focus:ring-[#8BC53F]
          "
        />
      ))}
    </div>
  );
}
