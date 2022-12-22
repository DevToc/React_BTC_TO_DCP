import React from 'react';
 
const Input = ({title, size, value,type}) => {
  return (
    <input type={type?type:'text'} value={value} placeholder={`Enter ${title}`} className={`bg-[#47474780] text-white border-[3px] border-[#ffffff33] rounded-[45px] py-[17px] px-3 text-[23px] w-100 leading-[34px] font-normal placeholder:text-[#ffffff33] focus:border-[#009600]  focus:outline-none`}  />
  );
}

export default Input; 