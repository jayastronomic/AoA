import React, { useState } from "react";
// import Chevron from "../icons/Chevron";

const Accordian = ({ faq, index }) => {
  const [rotate, setRotate] = useState("-rotate-90");
  const [change, setChange] = useState("");

  const toggleShow = () => {
    if (change === "animate-grow") {
      setChange("animate-shrink");
      setRotate("-rotate-90");
    } else {
      setChange("animate-grow");
      setRotate("");
    }
  };
  return (
    <div className="w-full border-b overflow-auto p-x4 hover:bg-gray-900">
      <button
        onClick={() => toggleShow()}
        className="flex justify-between w-full px-4 py-4 transition hover:bg-gray-800"
      >
        <span className="text-white">{faq.question}</span>
        <span
          className={`transition flex items-center justify-center rounded-full ${rotate} hover:bg-gray-200 h-8 w-8`}
        >
          {/* <Chevron /> */}
        </span>
      </button>

      <div
        className={`transition flex justify-between  h-0 overflow-hidden ${change} w-full hidescrollbar  text-white px-4`}
      >
        <div className="pt-2"> {faq.answer}</div>
      </div>
    </div>
  );
};

export default Accordian;
