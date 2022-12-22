import React,{useState, useEffect} from "react";
import Button from "../../components/common/Button";
import Label from "../../components/common/Label";

import { BiCopy } from "react-icons/bi";

import DateIcon from "../../components/common/DateIcon";
import Description from "../../components/Description/Index";

const Home = () => {

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }
  
  useEffect(() => {
    window.addEventListener('resize', setDimension);
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])

  return (
    <div className="home pl-[40px] pr-[20px] py-[54px]">
      <div className="title text-left text-[37px] leading-[56px]  font-bold text-white">
        My Account:
      </div>
      <div className="balance gap-4 flex flex-wrap ">
        <div className="amount">
          <div className="rounded-[16px]   bg-gradient-to-b p-[1px] from-[#38ae00ff]  to-[#38ae0000]">
            <div className="flex flex-col sm:flex-row text-white bg-[#474747] rounded-[16px] px-[22px] py-[15px] items-center gap-3 sm:gap-5">
              <div className="flex flex-col">
                <Label size={"small"}>Account Balance:</Label>
                <div className="count text-[39px] leading-[58px] text-white font-semibold">
                  41,222.92
                </div>
              </div>
              <div className="btn-group flex flex-col space-y-[26px]">
                <Button
                  text={"Withdraw"}
                  size={"small"}
                  type={"green"}
                ></Button>
                <Button
                  text={"Transfer"}
                  size={"small"}
                  type={"orange"}
                ></Button>
              </div>
            </div>
          </div>
        </div>
        <div className="detail">
          <div className="rounded-[16px]   bg-gradient-to-b p-[1px] from-[#38ae00ff]  to-[#38ae0000]">
            <div className="flex   text-white bg-[#474747] rounded-[16px] px-[22px] py-[15px] items-center gap-5">
              <div className="flex flex-col text-left">
                <Label size={"small"}>Wallet Name:</Label>
                <div className="count text-[18px] leading-[27px] text-white font-semibold">
                  Office Main
                </div>
                <Label size={"small"}>Country:</Label>
                <div className="count text-[18px] leading-[27px] text-white font-semibold">
                  USA
                </div>
              </div>
              <div className="flex flex-col text-left">
                <Label size={"small"}>Type:</Label>
                <div className="count text-[18px] leading-[27px] text-white font-semibold">
                  Main
                </div>
                <Label size={"small"}>Gender:</Label>
                <div className="count text-[18px] leading-[27px] text-white font-semibold">
                  Male
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="identify mt-[37px]">
        <div className="title text-[22px] leading-[33px] text-left text-white">
          Identify Wallet
        </div>
        <div className="identify-content flex flex-col mt-[10px] items-start space-y-10">
          <div className="content flex flex-col text-left">
            <Label size={"small"}>Identity</Label>
            <div className="info relative w-[200px] sm:w-[360px]">
              <input
                type="text"
                value={"82-j4-91-cc-8"}
                className="bg-[#474747] text-white w-[200px] sm:w-[360px] border-2 border-[#009600] rounded-[33px] text-base font-semibold px-[15px] py-[13px] outline-none"
              />
              <div className="absolute right-4 top-4 cursor-pointer   ">
                <BiCopy color="white" size={"20px"}></BiCopy>
              
              </div>
            </div>
           <Description>     Someone wants to transfer you, give them this ID!</Description>
          </div>
          <div className="btn-group flex gap-5 flex-wrap">
            <Button type={"green"} text={"Withdraw"} size={"medium"}></Button>
            <Button type={"orange"} text={"Transfer"} size={"medium"}></Button>
            <Button type={"red"} text={"Movement"} size={"medium"}></Button>
          </div>
        </div>
      </div>
    {screenSize.dynamicWidth>830  && <div className="last-movements mt-[50px]">
        <div className="title text-[37px] leading-[56px] font-bold text-white text-left">
          Last Movements
        </div>
        <div className="content mt-[15px]">
          <table className="text-center">
            <thead className=" text-base text-[#ffffff66]">
              <tr>
                <td>Date</td>
                <td>{ screenSize.dynamicWidth>1180? `Transaction id`:'ID'}</td>
                <td>Status</td>
                <td>Amount</td>
                <td>Total</td>
              </tr>
            </thead>
            <tbody>
              <tr className=" ">
                <td className="flex items-center space-x-3 py-2 px-4 border-l-2 rounded-l-[16px] bg-[#474747] border-[#474747]">
                  <div className="w-[55px] h-[55px] rounded-[16px] bg-[#d9d9d9] flex justify-center items-center">
                  <DateIcon></DateIcon>
                  </div>
                  <div className="date text-[20px] leading-[30px] text-white">
                    01,Nov,2022
                  </div>
                </td>
                <td className="date text-[20px] leading-[30px] text-white bg-[#474747]">
                82j491cc8
                </td>
                <td className="px-7 bg-[#474747]">
                  <button className="py-2 px-6 border-[#38ae00] rounded-[21px] border-2 text-base text-white">
                    Receive
                  </button>
                </td>
                <td className="px-7 text-[20px] leading-[30px] text-white bg-[#474747]">
                  250
                </td>
                <td className="px-7 text-[20px] leading-[30px] text-white bg-[#474747] rounded-r-[16px]">
                  43,245
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>}
    </div>
  );
};

export default Home;
