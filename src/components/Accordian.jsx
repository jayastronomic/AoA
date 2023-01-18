import React, { useState } from "react";
import * as FaIcon from "react-icons/fa";
import me from "../images/me.jpg";

const Accordian = ({ faq, index }) => {
  const [rotate, setRotate] = useState("-rotate-90");
  const [change, setChange] = useState("");
  const [isOpen, setIsOpen] = useState("");

  const toggleShow = () => {
    if (change === "animate-grow") {
      setChange("animate-shrink");
      setRotate("-rotate-90");
      setIsOpen("");
    } else {
      setChange("animate-grow");
      setRotate("");
      setIsOpen("bg-gray-800");
    }
  };
  return (
    <div className="w-full border-b overflow-auto p-x4 ">
      <button
        onClick={() => toggleShow()}
        className={`flex justify-between w-full px-4 py-4 transition hover:bg-gray-800 ${isOpen}`}
      >
        <span className="text-white">{faq.question}</span>
        <span
          className={`transition text-white flex items-center justify-center rounded-full ${rotate} hover:bg-gray-600 h-8 w-8`}
        >
          <FaIcon.FaChevronDown />
        </span>
      </button>

      <div
        className={`transition flex justify-between  h-0 overflow-hidden ${change} w-full hidescrollbar  text-white px-4 bg-gray-900`}
      >
        <div className="pt-2 overflow-auto hidescrollbar pb-2">
          {" "}
          {faq.answer}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
