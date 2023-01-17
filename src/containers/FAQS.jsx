import React from "react";
import Accordian from "../components/Accordian";

export const FAQContainer = ({ faqs }) => {
  return (
    <div className=" h-full max-h-full overflow-auto">
      {faqs.map((faq, i) => (
        <Accordian faq={faq} index={i} key={i} />
      ))}
    </div>
  );
};
