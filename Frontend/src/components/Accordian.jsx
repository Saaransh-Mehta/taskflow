import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-6">
      <div className="flex justify-between items-center cursor-pointer" onClick={onClick}>
        <h3 className="text-base font-medium text-gray-900">{question}</h3>
        <button
          className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ease-in-out ${isOpen ? "bg-indigo-500" : "bg-white border border-gray-200"}`}
        >
          {isOpen ? (
            <Minus className="w-5 h-5 text-white transition-opacity duration-300" />
          ) : (
            <Plus className="w-5 h-5 text-indigo-500 transition-opacity duration-300" />
          )}
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="mt-3 text-gray-600 text-sm leading-relaxed transition-transform duration-300 ease-in-out transform origin-top">
          {answer}
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    {
      question: "What pricing plans do you offer for your SaaS product?",
      answer:
        "We offer flexible pricing plans tailored to meet the needs of different businesses. Our pricing includes monthly and annual subscription options. You can find detailed information about each plan on our Pricing page.",
    },
    {
      question: "Does your SaaS product integrate with other tools we use?",
      answer:
        "Yes, our SaaS product integrates with a wide range of popular business tools and platforms. We offer native integrations with major CRMs, marketing automation tools, and productivity suites. We also provide an API for custom integrations.",
    },
    {
      question: "Can I upgrade or downgrade my plan at any time?",
      answer:
        "You can upgrade or downgrade your subscription plan at any time. Changes to your plan will be reflected in your next billing cycle. When upgrading, you'll get immediate access to the additional features.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial with full access to all features. No credit card is required to start your trial. You can upgrade to a paid plan at any time during or after your trial period.",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg">
      {faqItems.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={index === openIndex}
          onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
