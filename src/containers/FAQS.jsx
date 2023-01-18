import React from "react";
import Accordian from "../components/Accordian";

export const FAQContainer = ({ faqs, closeAllAccordians }) => {
  return (
    <div className=" h-full max-h-full overflow-auto">
      {faqs.map((faq, i) => (
        <Accordian
          faq={faq}
          index={i}
          key={i}
          closeAllAccordians={closeAllAccordians}
        />
      ))}
    </div>
  );
};
