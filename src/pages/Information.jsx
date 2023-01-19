import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { FAQContainer } from "../containers/FAQS";
import { faqs } from "../data/faqs";
const Information = ({ setSignal }) => {
  const [showInfo, setShowInfo] = useState("left-full");
  const [closeAllAccordians, setCloseAllAccordians] = useState();

  return (
    <div
      className={`absolute flex flex-col h-screen bg-black bg-opacity-70  items-center pt-20 w-full ${showInfo} transition-all duration-200 max-w-[40rem]`}
    >
      <section className="overflow-auto hidescrollbar">
        <button
          onClick={() => {
            setShowInfo("left-full");
            setSignal("left-full");
            setCloseAllAccordians("");
          }}
          className="absolute top-4 right-4 hover:text-red-500 transition text-red-400"
        >
          <FaIcons.FaWindowClose size={30} className="" />
        </button>
        <button
          onClick={() => {
            setShowInfo("left-0");
            setSignal("left-0");
          }}
          className="absolute text-white text-[0.70rem] -left-12 top-28 -rotate-90 bg-blue-900 p-2 bg-opacity-50 hover:text-blue-400 transition cursor-pointer rounded-t-lg "
        >
          <span className="">I N F O</span>
        </button>
        <div className="text-gray-300 p-4 conthrax text-lg">
          <p>
            I am excited to invite you all to my all black birthday party. I
            want to create an unforgettable night for everyone. I will be
            dressed in my best all black attire and I want everyone else to do
            the same. It is a BYOB party, so you can enjoy your favorite drinks.
            I want to celebrate with all of you, so mark y'all mfn calendars and
            come dressed in all black.
          </p>
          <p className="pt-4">
            All I want for my birthday is to celebrate it with amazing people.
            Let's have a good time.
          </p>

          <p className="pt-2 pl-4"> - Ju</p>
        </div>

        <div className="px-4">
          <h3 className="text-white brightstar text-center pb-4">FAQ'S</h3>
          <FAQContainer faqs={faqs} closeAllAccordians={closeAllAccordians} />
        </div>
        <div className="h-72"></div>
      </section>
    </div>
  );
};

export default Information;
