import React from "react";
import { IoEllipse } from "react-icons/io5";

const Description = (props) => {
  return (
    <div className="description  flex items-start justify-start text-left">
      <div className="mt-1 mr-2">
        <IoEllipse color={"#38ae00"}></IoEllipse>
      </div>
      <p className="text-left text-[18px] leading-[27px] font-medium text-[#ffffff80]">
       {props.children}
      </p>
    </div>
  );
};

export default Description;
