import React, { useState } from "react";

import Label from "../../components/common/Label";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import Modal from "../../components/common/Modal";
import useScreen from "../../hooks/useScreen";
import Description from "../../components/Description/Index";

const Withdraw = () => {
  const [modalShow, setModalShow] = useState(false);
  const screenSize = useScreen();
  const handleClick = () => {
    setModalShow(true);
  };
  return (
    <div className="movements pl-[40px] pr-[20px] py-[54px]">
      <div className="flex  flex-col items-start">
        <div className="title text-left text-[37px] leading-[56px]  font-bold text-white">
          Withdrawal
        </div>
        <div className="description text-[22px] leading-[33px] font-normal text-[#6c6c6c] text-left">
          Input all details for simple, fast and secure withdraw.
        </div>
      </div>
      <div className="collection-key flex flex-col items-start mt-[20px] w-5/5 2xl:w-4/5">
        <Label>Collection Key *</Label>
        <textarea
          name=""
          value={`{'amount': 70.0, 'beneficiaries': ['package.id equal b5b99124-1444-417a-9fcf-04944861cf68'], 'beneficiaries_sha': ' d745e2f7aa1cff52b038bb33fec756942c7142a862519a1bc89a9f84704d9e10', 'transaction_id': 'ef0581ca-bb48-494d-862a-81sd84214dec'}`}
          id=""
          rows={screenSize.dynamicWidth < 935 ? 8 : 5}
          className="bg-[#474747] w-100  outline-none py-4 px-6 border-2 border-[#009600] rounded-[45px] text-white text-[23px] leading-[34px] font-medium"
        ></textarea>
      </div>
      <div className="password flex md:flex-row flex-col  mt-[29px] max-w-[1125px] gap-5 w-5/5 2xl:w-4/5">
        <div className="collection-password flex flex-col items-start basis-1/2">
          <Label>Collection Password</Label>
          <Input title={"wallet name"}></Input>
        </div>
        <div className="collection-password flex flex-col items-start basis-1/2">
          <Label>Encrypted Password *:</Label>
          <Input title={"wallet name"}></Input>
          <Description>
            This is the wallet's encryption password, not the user's password.
          </Description>
          <div className="withdraw mt-[66px] flex justify-center md:justify-end items-end w-100">
            <Button
              type={"green"}
              text={"Withdraw"}
              handleClick={handleClick}
            ></Button>
          </div>
        </div>
      </div>
      <Modal
        title={"Withdrawal Successful."}
        setModalShow={setModalShow}
        show={modalShow}
        description={"The withdrawal was successfully reported."}
        buttonCaption={"Thanks"}
        status={"success"}
      ></Modal>
    </div>
  );
};

export default Withdraw;
