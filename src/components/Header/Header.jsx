import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";

import HomeMenu from "./MenuItem/Home/Index";
import Messages from "./MenuItem/Messages/Index";
import Movements from "./MenuItem/Movements/Index";
import Transfer from "./MenuItem/Transfer/Index";
import Withdraw from "./MenuItem/Withdraw/Index";

const Header = (props) => {
  const [open, setOpen] = useState(true);
  const location = useLocation();
  const [activeUrl, setActiveUrl] = useState(location.pathname.slice(1));

  const navigate = useNavigate();

  const handleClick = (url) => (e) => {
    e.preventDefault();
    setActiveUrl(url);
    navigate(`/${url}`);
  };
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);
    if (screenSize.dynamicWidth < 1145) {
      setOpen(false);
    } else {
      setOpen(true);
    }
    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  return (
    <div className="flex bg-back">
      <div
        className={` ${
          !open ? "min-w-[50px]" : "min-w-[312px]"
        } flex flex-col min-h-screen pb-[25px] bg-back shadow duration-300 border-r-2 border-r-[#474747]`}
      >
        <div className="w-100">
          <Link
            to={"/home"}
            className="flex justify-center items-center space-x-4 border-b-2 border-b-[#474747] w-100 pb-[12px] pt-[25px]"
          >
            <img
              src="/assets/images/currency.png"
              alt=""
              width={"49px"}
              className="h-[50px]"
            />
            {open && (
              <p
                className={`text-[16.32px] leading-[24px] font-normal text-white`}
              >
                Dcp Wallet
              </p>
            )}
          </Link>

          <div
            className={`flex-1 py-[52px] ${!open ? " " : "pl-[52px] w-100"}`}
          >
            <ul className="pt-13 pb-4 space-y-[72px] text-[17.7px] leading-[27px] text-[#6c6c6c] font-medium">
              <li className="rounded-sm">
                <HomeMenu
                  isActive={activeUrl === "home"}
                  open={open}
                  handleClick={handleClick}
                ></HomeMenu>
              </li>
              <li className="rounded-sm">
                <Movements
                  open={open}
                  isActive={activeUrl === "movements"}
                  handleClick={handleClick}
                ></Movements>
              </li>
              <li className="rounded-sm">
                <Withdraw
                  open={open}
                  isActive={activeUrl === "withdraw"}
                  handleClick={handleClick}
                ></Withdraw>
              </li>
              <li className="rounded-sm">
                <Transfer
                  open={open}
                  isActive={activeUrl === "transfer"}
                  handleClick={handleClick}
                ></Transfer>
              </li>
              <li className="rounded-sm">
                <Messages
                  open={open}
                  isActive={activeUrl === "messages"}
                  handleClick={handleClick}
                ></Messages>
              </li>
            </ul>
          </div>
          <div className="mt-10 flex justify-center text-[#6c6c6c]">
            <Link to="/login" className="flex items-center space-x-2">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.27649 15.4545H23.1816C24.0351 15.4545 24.7271 16.1465 24.7271 17C24.7271 17.8535 24.0351 18.5455 23.1816 18.5455H5.27649L7.27466 20.5435C7.87821 21.147 7.87821 22.1256 7.27466 22.7291C6.67132 23.3327 5.69273 23.3327 5.08908 22.7291L0.453024 18.0931C0.41717 18.0573 0.383376 18.0199 0.35123 17.9807C0.3434 17.9712 0.336703 17.9609 0.329079 17.9511C0.305485 17.9211 0.282303 17.891 0.261079 17.8593C0.254897 17.85 0.249848 17.8402 0.24377 17.8308C0.222545 17.7977 0.201733 17.7642 0.182982 17.7293C0.179376 17.7223 0.176388 17.715 0.172782 17.7081C0.153309 17.6703 0.134558 17.632 0.118176 17.5924C0.116115 17.5876 0.114673 17.5824 0.112715 17.5775C0.0959212 17.5359 0.0803636 17.4937 0.0671758 17.4503C0.0654242 17.4449 0.064497 17.4392 0.0629515 17.4337C0.0504848 17.3911 0.0390485 17.3481 0.0302909 17.3041C0.0277152 17.2911 0.0265818 17.2776 0.0242121 17.2644C0.0178242 17.2279 0.0114364 17.1914 0.0078303 17.1542C0.00257576 17.1032 0 17.0517 0 17C0 16.9483 0.00257576 16.8968 0.0078303 16.8457C0.0114364 16.808 0.0180303 16.7712 0.0243152 16.7344C0.0265818 16.7216 0.0277152 16.7085 0.0302909 16.6959C0.0391515 16.6515 0.0504848 16.6081 0.0630545 16.5651C0.0646 16.5601 0.0655273 16.5547 0.0670727 16.5497C0.0803636 16.5061 0.0959212 16.4635 0.112921 16.4215C0.114776 16.417 0.116115 16.4121 0.118073 16.4076C0.134558 16.3677 0.153412 16.3292 0.173091 16.2912C0.176491 16.2845 0.179376 16.2775 0.182879 16.2708C0.201836 16.2356 0.222752 16.2018 0.244285 16.1683C0.250055 16.1593 0.255 16.1497 0.260976 16.1408C0.282303 16.109 0.305691 16.0787 0.329182 16.0486C0.336703 16.0389 0.3434 16.0287 0.351127 16.0193C0.383376 15.9802 0.41717 15.9427 0.452921 15.907L5.08898 11.2709C5.39075 10.969 5.78628 10.8182 6.18182 10.8182C6.57735 10.8182 6.97289 10.969 7.27456 11.2709C7.87811 11.8745 7.87811 12.8529 7.27456 13.4565L5.27649 15.4545Z"
                  fill="#6C6C6C"
                />
                <path
                  d="M21.3576 29.6419C17.1392 29.6419 13.2143 27.5492 10.8586 24.044C10.3826 23.3356 10.5709 22.3754 11.2792 21.8993C11.9877 21.4233 12.9478 21.6114 13.424 22.32C15.2045 24.9694 18.1703 26.5511 21.3576 26.5511C26.624 26.551 30.9087 22.2665 30.9087 17C30.9087 11.7335 26.624 7.44899 21.3576 7.44899C18.1797 7.44899 15.2187 9.0236 13.4369 11.661C12.9589 12.3683 11.9985 12.5541 11.2911 12.0764C10.5839 11.5985 10.3978 10.6379 10.8757 9.93068C13.2331 6.44125 17.1515 4.35808 21.3576 4.35808C28.3284 4.35808 33.9996 10.0292 33.9996 17C33.9996 23.9708 28.3284 29.6419 21.3576 29.6419Z"
                  fill="#6C6C6C"
                />
              </svg>{" "}
              {open && <span>Exit</span>}
            </Link>
          </div>
        </div>
      </div>
      <div className="home w-100">
        <div className="title text-[32px] lead-[48px] font-normal text-white h-[89px] border-b-2 border-b-[#474747] px-1 md:px-5 pt-[34px] text-center">
          dcp wallet name
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Header;
