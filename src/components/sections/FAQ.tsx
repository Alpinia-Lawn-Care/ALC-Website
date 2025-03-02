import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How often should I mow my lawn?",
      answer: (
        <div className="space-y-4">
          <p className="text-sm md:text-base">Mowing frequency depends on the grass type and season:</p>
          <ul className="list-disc pl-4 md:pl-5 space-y-2 text-sm md:text-base">
            <li>Spring & Summer: Once a week (or more if growth is fast)</li>
            <li>Fall: Every 10-14 days as growth slows</li>
            <li>Winter: Rarely, if at all (for warm climates, mow as needed)</li>
          </ul>
          <div className="bg-green-50 border-l-4 border-green-500 p-3 md:p-4 my-3 md:my-4 text-sm md:text-base">
            <p className="font-semibold">✂️ Pro Tip:</p>
            <p>Never cut more than ⅓ of the grass blade height at a time to avoid stressing the lawn.</p>
          </div>
          <p className="text-green-700 text-sm md:text-base">👉 Need professional mowing? Our team keeps your lawn perfectly trimmed all season!</p>
        </div>
      )
    },
    {
      question: "When is the best time to water my lawn?",
      answer: (
        <div className="space-y-4">
          <p className="text-sm md:text-base">The best time to water is early morning (before 10 AM). Watering in the afternoon leads to evaporation, and nighttime watering increases the risk of fungal growth.</p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-3 md:p-4 my-3 md:my-4">
            <p className="font-semibold text-sm md:text-base">💧 How much water does my lawn need?</p>
            <ul className="list-disc pl-4 md:pl-5 space-y-2 mt-2 text-sm md:text-base">
              <li>Most lawns need 1 to 1.5 inches per week, spread over 2-3 deep watering sessions</li>
              <li>Use a rain gauge or place a cup on the lawn to measure</li>
            </ul>
          </div>
          <p className="text-green-700 text-sm md:text-base">👉 We offer expert irrigation solutions! Contact us to keep your lawn hydrated without overwatering.</p>
        </div>
      )
    },
    {
      question: "How do I get rid of weeds without killing my grass?",
      answer: (
        <div className="space-y-4">
          <p className="text-sm md:text-base">Weeds compete with grass for nutrients, but the right approach can eliminate them without harming your lawn:</p>
          <ul className="list-disc pl-4 md:pl-5 space-y-2 text-sm md:text-base">
            <li>✅ Use pre-emergent herbicides in early spring to prevent weeds from sprouting</li>
            <li>✅ Hand-pull weeds when they're small, ensuring you remove the root</li>
            <li>✅ Apply post-emergent herbicides for existing weeds (choose grass-safe products)</li>
            <li>✅ Maintain a thick, healthy lawn—aeration, fertilization, and proper mowing help crowd out weeds naturally</li>
          </ul>
          <p className="text-green-700 text-sm md:text-base">🚀 Tired of fighting weeds? Let us handle it for you with safe and effective weed control services!</p>
        </div>
      )
    },
    {
      question: "What's the best fertilizer for my lawn?",
      answer: (
        <div className="space-y-4">
          <p className="text-sm md:text-base">The best fertilizer depends on your soil type and the season:</p>
          <ul className="list-disc pl-4 md:pl-5 space-y-2 text-sm md:text-base">
            <li>🌱 Spring: High-nitrogen fertilizer for quick green-up</li>
            <li>☀️ Summer: Balanced formula with slow-release nitrogen</li>
            <li>🍂 Fall: Potassium-rich fertilizer to strengthen roots before winter</li>
          </ul>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 md:p-4 my-3 md:my-4">
            <p className="font-semibold text-sm md:text-base">📌 Soil testing is key!</p>
            <p className="text-sm md:text-base">A soil test helps determine exactly what nutrients your lawn needs.</p>
          </div>
          <p className="text-green-700 text-sm md:text-base">💡 Not sure what your lawn needs? We offer custom fertilization plans—contact us today!</p>
        </div>
      )
    },
    {
      question: "How do I know if my lawn needs aeration?",
      answer: (
        <div className="space-y-4">
          <p className="text-sm md:text-base">Lawn aeration relieves soil compaction, allowing water, oxygen, and nutrients to reach the roots. Signs you need aeration:</p>
          <ul className="list-disc pl-4 md:pl-5 space-y-2 text-sm md:text-base">
            <li>❌ Puddles form after rain (poor drainage)</li>
            <li>❌ Grass struggles to grow (thin, patchy areas)</li>
            <li>❌ Hard, compacted soil (difficult to poke with a screwdriver)</li>
          </ul>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-3 md:p-4 my-3 md:my-4">
            <p className="font-semibold text-sm md:text-base">⏳ Best time to aerate:</p>
            <ul className="list-disc pl-4 md:pl-5 space-y-2 mt-2 text-sm md:text-base">
              <li>Cool-season grasses: Early spring or fall</li>
              <li>Warm-season grasses: Late spring to early summer</li>
            </ul>
          </div>
          <p className="text-green-700 text-sm md:text-base">🌿 Get professional aeration—call today for a free estimate!</p>
        </div>
      )
    }
  ];

  return (
    <section id="faq" className="py-8 md:py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Frequently Asked Questions</h2>
        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 md:px-6 py-3 md:py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="text-base md:text-lg font-semibold pr-4">{faq.question}</span>
                <span className="text-xl md:text-2xl transform transition-transform duration-200 ml-2 md:ml-4 flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              <div
                className={`px-4 md:px-6 transition-all duration-200 ease-in-out ${
                  openIndex === index ? 'max-h-[2000px] py-3 md:py-4' : 'max-h-0 overflow-hidden'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 