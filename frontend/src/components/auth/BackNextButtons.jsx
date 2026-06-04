import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

export default function BackNextButtons({
  backTo = "/login",
  nextTo,
  backLabel = "Back",
  nextLabel = "Next",
}) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center mt-4">
      {/* Back */}
      <button
        type="button"
        onClick={() => navigate(backTo)}
        className="flex items-center gap-1 text-sm text-[#8BC53F] font-medium hover:underline cursor-pointer"
      >
        <Icon icon="mdi:arrow-left" width={18} />
        {backLabel}
      </button>

      {/* Next */}
      {nextTo && (
        <button
          type="button"
          onClick={() => navigate(nextTo)}
          className="flex items-center gap-1 text-sm text-[#8BC53F] font-medium hover:underline cursor-pointer"
        >
          {nextLabel}
          <Icon icon="mdi:arrow-right" width={18} />
        </button>
      )}
    </div>
  );
}
