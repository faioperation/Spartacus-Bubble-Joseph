export default function SubmitButton({
  text,
  onClick,
  type = "submit",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="
        w-full bg-[#8BC53F] hover:bg-[#7bb136]
        text-white py-2 rounded-md
        font-medium transition cursor-pointer
        flex items-center justify-center gap-2
      "
    >
      {text}
    </button>
  );
}
