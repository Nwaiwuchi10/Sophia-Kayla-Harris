// src/components/FaqSection.tsx
import React, { useState } from "react";
import "./Faq.css";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Why Investing?",
    answer:
      "The earlier you start investing, the longer your money will be able to work in your favor! Get started investing as soon as you start earning your first penny!, One of the main benefits of investing is that the money you invest has the potential to grow substantially over time. Rather than just putting your money into a savings account to save for the future, investing is can be a much smarter way to make your money work for you.",
  },
  {
    question: "Is it better to save or invest?",
    answer:
      "Investing provides the potential for (significantly) higher returns than saving. As your investments grow, they allow you to take advantage of compounding to accelerate gains. Investing offers many different access points and strategies, from individual stocks and bonds to mutual or exchange-traded funds.",
  },
  {
    question: "Can I change or cancel my order?",
    answer:
      "Yes, you can change or cancel your order within 24 hours of placing it.",
  },
  {
    question:
      "What elements are evaluated when strategically allocating assets in portfolios?",
    answer:
      "When managing portfolios, we consider various asset classes such as stocks, bonds, real estate, and alternative investments. Each asset class is evaluated based on its risk-return profile, correlation with other assets, and its role in achieving diversification. We aim to construct portfolios that balance risk and return by allocating assets strategically according to your investment objectives and risk tolerance, our approach involves monitoring and adjusting the allocation of assets over time to adapt to changes in market conditions and economic outlooks.",
  },
  {
    question:
      "Why should you trust Us, and what makes us stand out from the rest?",
    answer:
      "At Sophia Kayla Harris Wealth Management, we're dedicated to providing accessible and user-friendly investment solutions. With a team of experienced professionals, we aim to empower individuals to achieve their financial goals through innovative and transparent investment opportunities. Our platform offers a diverse range of assets and personalized services tailored to your needs, ensuring a seamless and rewarding investment experience.",
  },
];

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleIndex(index)}>
                {item.question}
                <span className="dropdown-icon">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">{item.answer}</div>
              )}
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
