import React from "react";

import "./Button.scss";

const colors = {
  red: "#ff0707",
  green: "#38ae00",
  orange:'#FF6107'

};

const sizes  = {
  "big":"w-[217px] py-[14px] text-[23px] leading-[34px] font-semibold rounded-[31.5px] ",
  "small":"w-[145px] py-[5px] text-[17px] leading-[26px] font-semibold rounded-[31.5px] ",
  "large":" w-[200px] sm:w-[367px] py-[14px] text-[23px] leading-[34px] font-semibold rounded-[31.5px] ",
  "medium":"w-[146px] py-[7px] text-[17px] leading-[26px] font-semibold rounded-[31.5px]"
}

const Button = ({ type, text,size, back, handleClick, category }) => {

  if (category!=='message')
  return (
    <button
      onClick = {handleClick}
      className={`${type} text-white bg-[${colors[type]}] ${back} ${sizes[size?size:"big"]} text-center `}
    >
      {text}
    </button>
  )
  else 
    return (
      <button
      onClick = {handleClick}
      className={`${type} text-white bg-[${colors[type]}] py-[7px] px-[20px] text-[17px] leading-[28px] text-center rounded-[25px]`}
    >
      {text}
    </button>
    )
};

export default Button;
