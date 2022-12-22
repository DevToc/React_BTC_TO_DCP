import React, { useState } from "react";

import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Label from "../../components/common/Label";
import Modal from "../../components/common/Modal";
import Select from "../../components/common/Select";
import Description from "../../components/Description/Index";

const Create = () => {
  const [modalShow, setModalShow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setModalShow(true);
  };

  return (
    <div className="create min-h-screen bg-back px-1 sm:px-5 py-16 flex flex-col relative justify-center items-center">
      <div className="content w-11/12 2xl:w-2/3">
        <div className="">
          <div className="btn-group flex justify-center sm:justify-between scale-100 flex-wrap gap-3">
            <div className="flex gap-3 flex-wrap justify-center sm:justify-start">
              <Button type={"green"} text={"Contact Us"}></Button>
              <Button type={"green"} text={"Distributor"}></Button>
              <Button type={"green"} text={"Messages"}></Button>
            </div>
            <div>
              <Button type={"red"} text={"Exit"}></Button>
            </div>
          </div>
        </div>
        <div className="wallet-content bg-[#474747] mt-[46px]  px-[12px] md:px-[70px] py-[23px] rounded-3xl w-100">
          <div className="title min-w-0:text-center sm:text-left text-[37px] leading-[56px] font-bold text-white">
            New Wallet Opening:
          </div>
          <div>
            <form action="" className="w-100">
              <div className="items flex flex-col lg:flex-row justify-between gap-10">
                <div className="item flex basis-1/2 flex-col items-start">
                  <Label>Wallet Name *</Label>
                  <Input title={"wallet name"}></Input>
                </div>
                <div className="item flex flex-col basis-1/2 items-start">
                  <Label>Type</Label>
                  <Select></Select>
                </div>
              </div>
              <div className="items flex flex-col lg:flex-row  justify-between mt-[23px] gap-10">
                <div className="item flex flex-col basis-1/2  items-start">
                  <Label>Country</Label>
                  <Input title={"country"}></Input>
                </div>
                <div className="item flex flex-col basis-1/2  items-start">
                  <Label>Gender</Label>
                  <Select></Select>
                </div>
              </div>

              <div className="items flex flex-col lg:flex-row  justify-between mt-[32px] lg:items-end gap-10">
                <div className="item flex flex-col items-start basis-1/2   ">
                  <Label>Free Value</Label>
                  <div className="w-100 gap-3 px-[16px] xl:px-[54px] py-[25px] bg-[#44444480] border-[#ffffff33] rounded-[45px] border-[3px] flex flex-col">
                    <Input title={"free value name"} size={"442px"}></Input>
                    <Input title={"free value"} size={"442px"}></Input>
                  </div>
                </div>
                <div className="item flex flex-col items-start basis-1/2  ">
                  <Label>Encrypted Password: *</Label>
                  <Input title={"wallet name"}></Input>
                  <Description>
                    This is the wallet's encryption password, not the user's
                    password.
                  </Description>
                </div>
              </div>
              <div className="btn-save mt-[81px]">
                <Button
                  type={"red"}
                  text={"Cancel"}
                  size={"small"}
                  back={"cancel"}
                ></Button>
                <Button
                  type={"green"}
                  text={"Save"}
                  size={"small"}
                  handleClick={handleClick}
                ></Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Modal
        title={"New Wallet Created!"}
        setModalShow={setModalShow}
        description={"You successfully created new wallet."}
        buttonCaption={"Thanks"}
        status={"success"}
        show={modalShow}
        to={"/home"}
      ></Modal>
    </div>
  );
};

export default Create;
