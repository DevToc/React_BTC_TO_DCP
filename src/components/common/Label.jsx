import React from 'react';
 
const Label = (props) => {
  return (
    <label htmlFor="" className={`text-[#ffffff33] ${props.size==="small"?"text-[16px] leading-[24px]": "text-[23px] leading-[34px] mb-[7px]"} font-medium `}>
        {props.children}
    </label>
  );
}
 
export default Label;