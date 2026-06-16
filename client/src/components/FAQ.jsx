import "../styles/FAQ.css";
import { useState } from "react";

const faqs = [
  {
    question: "What is SkillSwap?",
    answer:
      "SkillSwap is a platform where users can teach skills they know and learn skills they want.",
  },
  {
    question: "Is SkillSwap free?",
    answer:
      "Yes! Users can connect and exchange skills without paying platform fees.",
  },
  {
    question: "How do skill swaps work?",
    answer:
      "You teach someone your skill and they teach you theirs in return.",
  },
  {
    question: "Can I become a mentor?",
    answer:
      "Absolutely! Create your profile and add the skills you can teach.",
  },
];

function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div className="faq-card" key={index}>
            <div
              className="faq-question"
              onClick={() =>
                setActive(active === index ? null : index)
              }
            >
              <span>{faq.question}</span>

              <span>{active === index ? "-" : "+"}</span>
            </div>

            {active === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;