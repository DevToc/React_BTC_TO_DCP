import React from "react";

const Plus = () => {
  return (
    <div className="rounded-[33px] w-[66px] h-[66px]  bg-gradient-to-b p-[1px] from-[#38ae00ff]  to-[#38ae0000]">
      <div className="flex  cursor-pointer text-white bg-[#474747] w-[64px] h-[64px] rounded-[32px] px-[22px] py-[15px] items-center space-x-[76px]">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 3L16 29"
            stroke="white"
            stroke-width="5"
            stroke-linecap="round"
          />
          <path
            d="M29 16L3 16"
            stroke="white"
            stroke-width="5"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Plus;
