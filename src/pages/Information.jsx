import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { FAQContainer } from "../containers/FAQS";
import { faqs } from "../data/faqs";
const Information = () => {
  const [showInfo, setShowInfo] = useState("left-full");
  return (
    <div
      className={`fixed flex flex-col h-screen bg-black bg-opacity-70  items-center pt-20 w-full ${showInfo} transition-all duration-200`}
    >
      <button
        onClick={() => setShowInfo("left-full")}
        className="absolute top-4 right-4 hover:text-red-500 transition text-red-400"
      >
        <FaIcons.FaWindowClose size={30} className="" />
      </button>
      <button
        onClick={() => setShowInfo("left-0")}
        className="absolute text-white text-[0.45rem] -left-12 top-28 -rotate-90 bg-blue-900 p-2 bg-opacity-50 hover:text-blue-400 transition cursor-pointer rounded-t-lg "
      >
        <span className="">I N F O</span>
      </button>
      <div className="text-gray-300 p-4">
        <p>
          I am excited to invite you all to my all black birthday party. I want
          to create an unforgettable night for everyone. I will be dressed in my
          best all black attire and I want everyone else to do the same. It is a
          BYOB party, so you can enjoy your favorite drinks. I want to celebrate
          with all of you, so mark y'all mfn calendars and come dressed in your
          best all black attire.
        </p>
        <p className="pt-4">
          All I want for my birthday is to celebrate people.
        </p>

        <p className="pt-2 pl-4"> - Ju</p>
      </div>

      <div className="px-4">
        <h3 className="text-white brightstar text-center pb-4">FAQ</h3>
        <FAQContainer faqs={faqs} />
      </div>
    </div>
  );
};

export default Information;
