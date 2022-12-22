import React from "react";
import { Link } from "react-router-dom";

import BlurCircle from "../../components/common/BlurCircle";
import Button from "../../components/common/Button";
import Wallet from "../../components/wallet";

const Main = () => {
  return (
    <div className="main min-h-screen bg-back  px-12 py-16 flex relative justify-center">
      <div className="filter absolute top-[-454px] left-[-454px]">
        <BlurCircle />
      </div>
      <div className="content w-11/12 lg:w-2/3">
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
        <div className="wallet-content bg-[#474747] mt-[46px]  py-[60px] rounded-3xl w-100">
          <div className="wallets flex justify-start w-100  flex-wrap">
            <Wallet></Wallet>
            <Wallet></Wallet>
            <Wallet></Wallet>
            <Wallet></Wallet>
          </div>
          <div className="btn-create-wallet mt-[127px]">
            <Link to="/create">
              <Button
                type={"green"}
                text={"+ Create new wallet"}
                size={"large"}
              ></Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
