import React from "react";
import { Introduction } from "./Introduction";
import * as FaIcon from "react-icons/fa";
import Information from "../pages/Information";
import Address from "../pages/Address";
import { useState } from "react";

const Interface = ({ setSignal }) => {
  const [zIndex, setZindex] = useState({ address: "", info: "" });
  return (
    <div className="flex flex-col items-center justify-center inset-0 text-white p-4 border h-screen">
      <a
        className="absolute right-2 top-2"
        href="https://www.instagram.com/skeletinboy/"
      >
        <FaIcon.FaInstagram className="text-3xl text-gray-300 hover:text-gray-500" />
      </a>
      <Introduction />
      <footer className="absolute left-4 top-4">
        <div className="magz text-sm opacity-70">
          powered by{" "}
          <span className="neonText flicker opacity-100">jayastronomic</span>
        </div>
      </footer>
      <Information
        setSignal={setSignal}
        setZindex={setZindex}
        zIndex={zIndex}
      />
      <Address setSignal={setSignal} setZindex={setZindex} zIndex={zIndex} />
    </div>
  );
};

export default Interface;
