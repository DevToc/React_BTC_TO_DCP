import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiHide, BiShow } from "react-icons/bi";

import LeftTexture from "../../../components/Texture/LeftTexture/Index";
import RightTexture from "../../../components/Texture/RightTexture/Index";
import BlurCircle from "../../../components/common/BlurCircle";
import Label from "../../../components/common/Label";
import Input from "../../../components/common/Input";
import Modal from "../../../components/common/Modal";
import Description from "../../../components/Description/Index";

const Register = () => {
  
  const [isHide, setHide] = useState(true);
  const [isConfirmHide, setConfirmHide] = useState(true);
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="max-w-screen min-h-screen bg-back text-white py-2 px-4 lg:px-16  items-center relative">
      <LeftTexture />
      <RightTexture />
      <div className="filter absolute top-[-41px] left-[38px]">
        <BlurCircle />
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center  xl:space-x-14">
        <div className="lg:basis-1/2  lg:pt-28 pt-10 max-w-[678px]">
          <div className="title flex items-center justify-center lg:justify-start">
            <img
              src="/assets/images/currency.png"
              alt=""
              className="sm:w-[103px] sm:h-[110px] w-[50px] h-[52px]"
            />
            <p className=" ml-[15px] text-[34px] leading-[51px] font-normal ">
              Digital Wallet
            </p>
          </div>
          <div className="description mt-[22px] font-bold text-[40px] leading-[50px] xl:leading-[86px] xl:text-[57px] lg:text-[48px] lg:leading-[70px] min-[20px]:text-center  lg:text-left ">
            Easiest way to manage your wallet.
          </div>
          <div className="hidden lg:block text-[20px] leading-[30px] font-normal text-whiteWithOpacity max-w-xl text-left">
            Quia veritatis qui aut magnam rerum animi omnis exercitationem.
            Minus sapiente suscipit quaerat sint. Possimus omnis vel ullam
            officiis. Itaque maxime asperiores omnis qui odio sunt hic. Et ea
            tenetur pariatur dolorum est corrupti nostrum.
          </div>
        </div>
        <div className="basis-1/2 mt-[88px] max-w-[733px]">
          <div className="register px-4 lg:px-[48px]  py-[48px] bg-[#474747] rounded-[44px]">
            <div className="title text-[40px] leading-[50px] xl:leading-[86px] xl:text-[57px] lg:text-[48px] lg:leading-[70px]  font-bold w-100">
              Hello, Let's register
            </div>
            <div className="description text-[23px] leading-[34px] text-whiteWithOpacity">
              Enter your details to register your account
            </div>
            <div className="username mt-[20px] ">
              <div className="title text-left">
                <Label>Username</Label>
              </div>
              <div>
                <Input title={"usernname"}></Input>
              </div>
            </div>

            <div className="password mt-[20px] ">
              <div className="title text-left">
                <Label>Password</Label>
              </div>
              <div className="relative">
                <input
                  placeholder="Enter password"
                  type={isHide ? "password" : "text"}
                  className="placeholder:font-normal placeholder-[#ffffff43] w-100 py-[17px] text-[23px] leading-[34px] font-semibold text-white px-3 bg-[#47474780] border-[3px] border-[#ffffff43] focus:border-[#009600]  rounded-[45px] focus:outline-none"
                />
                <div
                  className="absolute right-7 top-4  z-100"
                  onClick={(e) => setHide(!isHide)}
                >
                  {isHide ? (
                    <BiHide size={45} color={"#ffffff33"} />
                  ) : (
                    <BiShow size={45} color={"#ffffff33"} />
                  )}{" "}
                </div>
              </div>
            </div>

            <div className="confirm-password mt-[20px] ">
              <div className="title text-left">
                <Label>Confirm Passowrd</Label>
              </div>
              <div className="relative">
                <input
                  placeholder="Confirm password"
                  type={isConfirmHide ? "password" : "text"}
                  className="placeholder:font-normal placeholder-[#ffffff43] w-100 py-[17px] text-[23px] leading-[34px] font-semibold text-white px-3 bg-[#47474780] border-[3px] border-[#ffffff43] focus:border-[#009600]  rounded-[45px] focus:outline-none"
                />
                <div
                  className="absolute right-7 top-4  z-100"
                  onClick={(e) => setConfirmHide(!isConfirmHide)}
                >
                  {isConfirmHide ? (
                    <BiHide size={45} color={"#ffffff33"} />
                  ) : (
                    <BiShow size={45} color={"#ffffff33"} />
                  )}{" "}
                </div>
              </div>
            </div>
            <Description>
              {" "}
              This is the wallet's encryption password, not the user's password.
            </Description>
            <div className="btn-register mt-[30px]">
              <button
                className=" shadow-[0px_0px_24px_#38AE00]  text-white bg-[#38ae00] px-[95px] py-[11px] text-[27px] leading-[40px] font-semibold rounded-[31.5px]"
                onClick={(e) => setModalShow(true)}
              >
                Register
              </button>
            </div>
            <div className="register-now  flex justify-center xl:flex-row flex-col mt-[30px] xl:mt-[57px]">
              <p className="text-[#ffffff80] text-[23px] leading-[34px]">
                Still not registered?
              </p>
              <Link
                to="/login"
                className="font-bold ml-3 text-[#ffffff] text-[23px] leading-[34px] "
              >
                Login Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title={"Successfully Registered"}
        description={"You are successfully registered to your account."}
        status={"success"}
        show={modalShow}
        setModalShow={setModalShow}
        buttonCaption={"Thanks"}
        to={"/login"}
      ></Modal>
    </div>
  );
};

export default Register;
