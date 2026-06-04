import { useState } from "react";

export default function FAQForm({
  initialData = {},
  onSave,
  onCancel,
}) {
  const [question, setQuestion] = useState(initialData.question || "");
  const [answer, setAnswer] = useState(initialData.answer || "");

  return (
    <div className="border border-gray-300 rounded-xl p-6 space-y-4 bg-gray-50">
      <div>
        <label className="text-sm font-medium">Question</label>
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full mt-2 border border-gray-200 rounded-lg px-4 py-3 outline-none"
          placeholder="Type question"
        />
      </div>

      <div>
        <label className="text-sm font-medium">Answer</label>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          rows={4}
          className="w-full mt-2 border border-gray-200 rounded-lg px-4 py-3 outline-none"
          placeholder="Type answer"
        />
      </div>

      <div className="flex gap-4 text-sm">
        <button
          onClick={() => onSave({ question, answer })}
          className="text-[#8BC43D] font-semibold cursor-pointer"
        >
          Save
        </button>
        <button onClick={onCancel} className="text-gray-500 cursor-pointer">
          Cancel
        </button>
      </div>
    </div>
  );
}
