import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import address from "../images/address.png";
const Address = ({ setSignal, zIndex, setZindex }) => {
  const [showInfo, setShowInfo] = useState("left-full");

  return (
    <div
      className={`absolute flex flex-col h-screen bg-black bg-opacity-70  items-center pt-20 w-full ${showInfo} transition-all duration-200 max-w-[40rem] ${zIndex.address}`}
    >
      <section className="overflow-auto hidescrollbar">
        <button
          onClick={() => {
            setShowInfo("left-full");
            setSignal("left-full");
            setZindex({ address: "", info: "" });
          }}
          className="absolute top-4 right-4 hover:text-red-500 transition text-red-400"
        >
          <FaIcons.FaWindowClose size={30} className="" />
        </button>
        <button
          onClick={() => {
            setShowInfo("left-0");
            setSignal("left-0");
            setZindex({ address: "z-10", info: "" });
          }}
          className="absolute text-white text-[0.70rem] -left-14 top-56 -rotate-90 bg-red-400 p-2 bg-opacity-50 hover:text-red-200 transition cursor-pointer rounded-t-lg"
        >
          <span className="font-semibold">ADDRESS</span>
        </button>
        <div className="text-gray-300 p-4 conthrax flex flex-col items-center">
          <h1 className="text-2xl">Address:</h1>
          <p className="text-2xl pt-4">819 W. 60th St.</p>
          <div className="flex items-center h-72 w-72 mt-10 overflow-hidden rounded-2xl">
            <img
              className="rounded-3xl scale-125"
              src={address}
              alt="address"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Address;
