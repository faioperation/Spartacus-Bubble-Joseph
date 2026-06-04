import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const mockFetchInteraction = (id) =>
  Promise.resolve({
    id,
    channel: "Phone",
    agent: "Smith",
    datetime: "Tue, Nov 12, 2025 · 4:25 PM",
    duration: "1 min 20 sec",
    callType: "Inbound",
    status: "Confirmed",
    interactionType: "Weekly",
    conversation: [
      { from: "Agent", text: "Hello, how can I help you?" },
      { from: "Customer", text: "Hello, I need some information." },
      { from: "Agent", text: "Sure, let me check." },
    ],
  });

export default function PhoneInteractionDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [interaction, setInteraction] = useState(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    mockFetchInteraction(id).then((data) => {
      setInteraction(data);
      setStatus(data.status);
      setLoading(false);
    });
  }, [id]);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  if (loading || !interaction) {
    return (
      <div className="p-10 text-center text-gray-500">
        Loading interaction...
      </div>
    );
  }

  return (
    <div className="p-4 min-h-screen">
      <div className="w-full bg-white rounded-xl shadow-lg min-h-[calc(100vh-96px)] grid grid-cols-1 lg:grid-cols-3 overflow-hidden">
        {/* LEFT */}
        <div className="lg:col-span-2 p-10 overflow-y-auto">
          {/* Back */}
          <button
            onClick={() => navigate("/interactions")}
            className="mb-8 text-md text-white hover:text-blacktransition border border-gray-300 rounded-lg px-3 py-1 bg-[#8BC43D] cursor-pointer"
          >
            ← Back
          </button>

          {/* Header */}
          <h2 className="text-3xl font-semibold mb-2">
            📞 {interaction.channel} Call
          </h2>

          <div className="flex flex-wrap gap-6 text-sm text-gray-500 mb-8">
            <span>👤 {interaction.agent}</span>
            <span>📅 {interaction.datetime}</span>
            <span>⏱ {interaction.duration}</span>
          </div>

          {/* Call Type */}
          <div className="mb-8">
            <p className="text-sm text-gray-500">Call Type</p>
            <p className="font-medium">{interaction.callType}</p>
          </div>

          {/* Conversation */}
          <div className="mb-10">
            <p className="text-sm font-medium mb-3">Call details</p>
            <div className="space-y-3 text-sm text-gray-700">
              {interaction.conversation.map((msg, i) => (
                <p key={i}>
                  <b>{msg.from}:</b> {msg.text}
                </p>
              ))}
            </div>
          </div>

          {/* Call Records */}
          <div>
            <p className="text-sm font-medium mb-3">Call records</p>
            <div className="flex items-center gap-4">
              <button className="w-9 h-9 rounded-full border">⏪</button>
              <button className="w-11 h-11 rounded-full bg-[#8BC43D] text-white shadow-md">
                ▶
              </button>
              <button className="w-9 h-9 rounded-full border">⏩</button>
            </div>
            <div className="mt-4 h-2 bg-gray-200 rounded-full">
              <div className="h-full w-1/4 bg-[#8BC43D]" />
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="border border-gray-100 bg-gray-50 p-8 flex flex-col justify-between">
          <div className="space-y-6">
            {/* 🔥 STATUS TOGGLE (API READY) */}
            <div className="flex gap-2 bg-white rounded-full p-1 shadow-inner">
              {["Confirmed", "Declined"].map((s) => (
                <button
                  key={s}
                  onClick={() => handleStatusChange(s)}
                  className={`flex-1 py-2 rounded-full text-sm font-semibold transition cursor-pointer
                    ${
                      status === s
                        ? s === "Confirmed"
                          ? "bg-[#8BC43D] text-white shadow"
                          : "bg-red-500 text-white shadow"
                        : "text-gray-500 hover:bg-gray-100"
                    }`}
                >
                  {s === "Confirmed" ? "Confirmed" : "Declined"}
                </button>
              ))}
            </div>

            {/* Info */}
            <div className="rounded-2xl bg-linear-to-br from-[#8BC43D] to-[#6fa82f] text-white p-6 space-y-2">
              <p>
                <b>Interaction ID:</b> {interaction.id}
              </p>
              <p>
                <b>Interaction type:</b> {interaction.interactionType}
              </p>
            </div>
          </div>

          <p className="text-xs text-gray-400">Last updated just now</p>
        </div>
      </div>
    </div>
  );
}
