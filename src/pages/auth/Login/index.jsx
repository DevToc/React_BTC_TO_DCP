import React, { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

import BlurCircle from "../../../components/common/BlurCircle";
import Input from "../../../components/common/Input";
import Label from "../../../components/common/Label";
import LeftTexture from "../../../components/Texture/LeftTexture/Index";
import RightTexture from "../../../components/Texture/RightTexture/Index";

const Login = () => {

  const [isHide, setHide] = useState(true);

  const navigate = useNavigate();
  
  const handleLogin = () => {
    navigate("/main");
  };

  return (
    <div className=" w-screen min-h-screen bg-back text-white py-2 px-4 sm:px-16  items-center relative">
      <LeftTexture />
      <RightTexture />
      <div className="filter absolute top-[-41px] left-[38px]">
        <BlurCircle />
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-24">
        <div className="lg:basis-1/2  lg:pt-32 pt-14 max-w-[678px]">
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
        <div className="lg:basis-1/2 mt-[77px] max-w-[733px]">
          <div className="login px-4 lg:px-[48px]  py-[48px] bg-[#474747] rounded-[44px]">
            <div className="title text-[40px] leading-[50px] xl:leading-[86px] xl:text-[57px] lg:text-[48px] lg:leading-[70px]  font-bold w-100">
              Hi, Welcome Back!
            </div>
            <div className="description text-[23px] leading-[34px] text-whiteWithOpacity">
              Enter your details to log into your account
            </div>
            <div className="username mt-[30px] xl:mt-[41px] ">
              <div className="title text-[23px] leading-[34px] text-whiteWithOpacity text-left">
                <Label>Username</Label>
              </div>
              <div>
                <Input title={"usernname"}></Input>
              </div>
            </div>

            <div className="password mt-[20px] ">
              <div className="title text-[23px] leading-[34px] text-whiteWithOpacity text-left">
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
            <div className="btn-login mt-[36px] xl:mt-[77px]">
              <button
                className=" shadow-[0px_0px_24px_#38AE00] text-white bg-[#38ae00] px-[72px] py-[11px] text-[27px] leading-[40px] font-semibold rounded-[31.5px]"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
            <div className="register-now  flex justify-center xl:flex-row flex-col mt-[36px] xl:mt-[77px]">
              <p className="text-[#ffffff80] text-[23px] leading-[34px]">
                Still not registered?
              </p>
              <Link
                to="/register"
                className="font-bold ml-3 text-[#ffffff] text-[23px] leading-[34px] "
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
