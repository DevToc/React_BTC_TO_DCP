import React from "react";

import Button from "../common/Button";

const Wallet = () => {
  return (
    <div className="rounded-[20px] w-[201px] h-[201px] m-4 bg-gradient-to-b p-[1px] from-[#38ae00ff]  to-[#38ae0000]">
      <div className="flex flex-col justify-between h-full text-white bg-[#474747] rounded-[20px] px-[28px] py-[30px] items-center">
        <div className="title text-[26px] leading-[39px] text-white font-semibold">
          Wallet 1
        </div>
        <div className="id mt-[2px] text-[19px] leading-[28px] text-[#ffffff55] font-normal">
          ID: 54251
        </div>
        <div className="btn-open mt-[35px] mx-auto">
          <Button text={"open"} type={"green"} size={"small"}></Button>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
