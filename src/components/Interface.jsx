import React from "react";
import { Introduction } from "./Introduction";
import * as FaIcon from "react-icons/fa";

const Interface = () => {
  return (
    <div className="absolute flex flex-col items-center justify-center inset-0 text-white p-4">
      <header className="absolute top-4 flex left-4 right-0 justify-between pr-4">
        <div className="magz text-sm opacity-70">
          powered by{" "}
          <span className="neonText flicker opacity-100">jayastronomic</span>
        </div>
        <a href="https://www.instagram.com/skeletinboy/">
          <FaIcon.FaInstagram className="text-3xl text-gray-300 hover:text-gray-500" />
        </a>
      </header>
      <Introduction />
    </div>
  );
};

export default Interface;
