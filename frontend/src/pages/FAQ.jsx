import { useState } from "react";
import FAQForm from "../components/FAQForm";
import FAQActions from "../components/FAQActions";
import DeleteConfirm from "../components/DeleteConfirm";

const INITIAL_FAQS = [
  {
    id: 1,
    question: "What is Spartacus?",
    answer:
      "Spartacus is an AI-framework developed by Aquiline Drones Corporation (AD) together with Illumina Labs LLC, intended to act as a modular deep-learning cognitive agent for unmanned aerial systems, cloud operations, IoT and more.",
  },
  {
    id: 2,
    question: "Can I contact Spartacus Bubble Soccer directly?",
    answer: "Yes, you can contact Spartacus Bubble Soccer (UK) directly.",
  },
  {
    id: 3,
    question: "How does the dual-agent system work?",
    answer:
      "The concept of a dual-agent architecture was introduced to achieve complete operational automation for Spartacus Bubble Soccer and similar business workflows.",
  },
  {
    id: 4,
    question: "Will I get confirmation of my booking?",
    answer:
      "When you make a booking with Spartacus Bubble Soccer, you will receive a confirmation once the system (or staff) processes your request.",
  },
];

export default function FAQ() {
  const [faqs, setFaqs] = useState(INITIAL_FAQS);
  const [editingId, setEditingId] = useState(null);
  const [adding, setAdding] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleAdd = (data) => {
    setFaqs((prev) => [...prev, { id: Date.now(), ...data }]);
    setAdding(false);
    // POST /faqs
  };

  const handleUpdate = (id, data) => {
    setFaqs((prev) =>
      prev.map((f) => (f.id === id ? { ...f, ...data } : f))
    );
    setEditingId(null);
    // PUT /faqs/:id
  };

  const handleDelete = () => {
    setFaqs((prev) => prev.filter((f) => f.id !== deleteId));
    setDeleteId(null);
    // DELETE /faqs/:id
  };

  return (
    <div className=" max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="mb-6 pb-6">
  <h1 className="pt-5 text-3xl font-semibold">
    Frequently Asked Questions
  </h1>
  <p className="text-gray-500 mt-1">
    Find answers to the most common questions about our platform.
  </p>
</div>



      {/* ADD */}
      <div className="flex justify-end mb-8">
        <button
          onClick={() => setAdding(true)}
          className="bg-[#8BC43D] text-white px-4 py-2 rounded-md text-md cursor-pointer hover:shadow-2xl"
        >
          + Add FAQ
        </button>
      </div>

      {adding && (
        <FAQForm
          onSave={handleAdd}
          onCancel={() => setAdding(false)}
        />
      )}

      {/* LIST */}
      <div className="space-y-8">
        {faqs.map((faq) => (
          <div key={faq.id}>
            {editingId === faq.id ? (
              <FAQForm
                initialData={faq}
                onSave={(data) => handleUpdate(faq.id, data)}
                onCancel={() => setEditingId(null)}
              />
            ) : (
              <>
                <h3 className="font-semibold text-xl">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-md mt-2">
                  {faq.answer}
                </p>

                <FAQActions
                  onEdit={() => setEditingId(faq.id)}
                  onDelete={() => setDeleteId(faq.id)}
                />
              </>
            )}
          </div>
        ))}
      </div>

      <DeleteConfirm
        open={!!deleteId}
        onConfirm={handleDelete}
        onCancel={() => setDeleteId(null)}
      />
    </div>
  );
}
