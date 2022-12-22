import React from "react";

import Input from "../../components/common/Input";
import Label from "../../components/common/Label";
import Button from "../../components/common/Button";
import Plus from "../../components/Plus/Index";
import Description from "../../components/Description/Index";

const Transfer = () => {
  return (
    <div className="transfer pr-[20px] pl-[40px] py-[52px] ">
      <div className="flex  flex-col items-start">
        <div className="title text-left text-[37px] leading-[56px]  font-bold text-white">
          Transfer
        </div>
        <Label>{'Input all details for simple, fast and secure transfer.'}</Label>
      </div>
      <div className="sum mt-[13px] flex flex-col items-start w-4/5 md:w-2/5">
        <Label>Sum</Label>
        <input
          type="text"
          value={300}
          className="bg-[#474747] border-[#ffffff33] outline-none w-100 border-2 focus:border-[#009600] py-[16px] px-6 text-white text-2xl rounded-[45px]"
        />
      </div>
      <div className="benefit w-2/2 xl:w-1/2 rounded-[20px] border-2 border-[#474747] px-[30px] py-[20px] mt-[29px]">
        <div className="title text-[32px] leading-[48px] text-white text-left font-bold">
          Beneficiaries:
        </div>
        <div className="wallet flex flex-col mt-[10px] items-start">
          <Label>Wallet ID</Label>
          <Input title={"wallet id"}></Input>
        </div>
        <div className="password flex flex-col mt-[30px] items-start">
          <Label>Password</Label>
          <Input title={"password"} type={'password'}></Input>
        </div>
        <div className="flex justify-between items-center mt-[17px]">
          <Description>At least one is required.</Description>
        <Plus/>
        </div>
      </div>
      <div className="encrypted mt-[40px] flex flex-col w-2/2 xl:w-2/5 items-start">
        <Label>Encrypted Password:</Label>
        <Input title={'wallet name'}></Input>
        <Description>This is the wallet's encryption password, not the user's password.</Description>
      </div>
      <div className="btn-transfer mt-[20px] flex justify-center xl:justify-start">
          <Button type={'green'} text='Make the Transfer' size={'large'}></Button>
      </div>
    </div>
  );
};

export default Transfer;
