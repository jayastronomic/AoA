import React from "react";
import { Introduction } from "./Introduction";

const Interface = () => {
  return (
    <div className="absolute flex flex-col items-center justify-center inset-0 text-white p-4">
      <header className="absolute top-4 flex left-4 right-0s">
        <div className="magz text-sm opacity-70">
          powered by{" "}
          <span className="neonText flicker opacity-100">jayastronomic</span>
        </div>
      </header>
      <Introduction />
    </div>
  );
};

export default Interface;
