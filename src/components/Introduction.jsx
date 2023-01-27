import React from "react";

export const Introduction = () => {
  return (
    <div className="absolute top-0 flex flex-col  items-center justify-center brightstar text-lg space-y-10 text-gray-400 mt-10 w-full">
      <div className="absolute flex items-center justify-center space-y-4 bg-black top-4">
        <p className="text-xs space-x-4">
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
        {/* <div className="absolute top-2 text-[0.6rem] font-serif">
          {"(Drag the screen)"}
        </div> */}
      </div>
      <div className="absolute top-24 flex text-[0.63rem] justify-between w-full px-6">
        <p>01/28</p>
        <p>9:00PM</p>
      </div>
      <div className="absolute top-1 neonText text-[.5rem]">
        ALL BLACK PARTY
      </div>
    </div>
  );
};
