import React from "react";

export const Introduction = () => {
  return (
    <div className="relative flex flex-col  items-center justify-center brightstar text-lg space-y-10 text-gray-400 mt-20 h-screen w-full">
      <div className="absolute flex top-4 justify-between items-center space-x-36">
        <p className="text-sm space-x-4">
          <span>
            <span className="neonText">A</span>GE
          </span>
          <span>
            <span className="neonText">O</span>F
          </span>
          <span>
            <span className="neonText">A</span>QUARIUS
          </span>
        </p>
      </div>
      <div className=" absolute top-2 text-[0.8rem] font-serif">
        {"(Drag the screen)"}
      </div>
      <div className="absolute top-28 flex text-[0.63rem] justify-between w-full">
        <p>01/28</p>
        <p>9:00PM</p>
      </div>
    </div>
  );
};
