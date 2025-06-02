"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-6 px-0 flex items-center text-left hover:bg-gray-50 transition-colors duration-200"
        onClick={onToggle}
      >
        <div className="flex-shrink-0 mr-4">
          <ChevronDown 
            className={`w-5 h-5 text-gray-600 transform transition-transform duration-300 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`} 
          />
        </div>
        <span className="text-gray-800 font-medium text-sm md:text-base uppercase tracking-wide">
          {question}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-6 pl-9 text-gray-600 text-sm md:text-base leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default function Faq() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      question: "HOW LONG WILL IT TAKE TO GET MY ORDER?",
      answer: "Standard shipping typically takes 5-7 business days within the continental United States. Express shipping options are available for 2-3 day delivery. International orders may take 10-14 business days depending on customs processing and location."
    },
    {
      question: "DO YOU SHIP WORLDWIDE?",
      answer: "Yes, we offer international shipping to most countries worldwide. Shipping costs and delivery times vary by destination. Some restrictions may apply to certain regions due to customs regulations. Contact us for specific shipping information to your location."
    },
    {
      question: "ARE LAB GROWN DIAMONDS A SIMULANT OR REAL?",
      answer: "Lab grown diamonds are 100% real diamonds with the same physical, chemical, and optical properties as mined diamonds. They are not simulants like cubic zirconia or moissanite. The only difference is their origin - they are created in controlled laboratory conditions rather than formed naturally underground over millions of years."
    },
    {
      question: "WHAT LAB DIAMOND STONE SHAPES DO YOU OFFER?",
      answer: "We offer a comprehensive selection of lab diamond shapes including Round Brilliant, Princess, Cushion, Emerald, Oval, Radiant, Asscher, Marquise, Pear, and Heart shapes. Each shape is available in various carat weights and quality grades to suit your preferences and budget."
    },
    {
      question: "WHAT IS THE DIFFERENCE BETWEEN A MINED DIAMOND AND AN ETHICAL LAB GROWN DIAMOND?",
      answer: "The primary differences are origin and environmental impact. Mined diamonds are extracted from the earth through mining operations, while lab grown diamonds are created in controlled environments using advanced technology. Lab grown diamonds have a significantly smaller environmental footprint and guaranteed ethical sourcing, while maintaining identical physical and chemical properties to mined diamonds."
    },
    {
      question: "HOW DOES CULLEN JEWELLERY ENSURE A SEAMLESS PURCHASE EXPERIENCE?",
      answer: "We provide personalized consultation services, detailed product information, high-quality imagery, secure payment processing, and comprehensive customer support throughout your purchase journey. Our experienced team is available to answer questions and guide you through the selection process to ensure you find the perfect piece."
    },
    {
      question: "WHAT TYPE OF WARRANTY DO I RECEIVE?",
      answer: "All our jewelry comes with a comprehensive warranty covering manufacturing defects and craftsmanship issues. Lab grown diamonds include certification and lifetime warranty against chipping or breaking under normal wear. We also offer resize services and maintenance programs to keep your jewelry looking its best."
    },
    {
      question: "IS MOISSANITE A GOOD CHOICE FOR AN ENGAGEMENT RING?",
      answer: "Moissanite is an excellent choice for engagement rings, offering exceptional brilliance, durability (9.25 on the Mohs scale), and value. It's nearly as hard as diamond and displays more fire and sparkle. Moissanite is also an ethical and budget-friendly option that allows for larger carat sizes while maintaining stunning visual appeal."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-light mb-4 tracking-wide">FAQ</h1>
          <p className="text-emerald-100 text-xs">Your questions, answered.</p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openItems[index] || false}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}