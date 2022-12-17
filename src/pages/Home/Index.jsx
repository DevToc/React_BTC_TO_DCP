import React,{useState, useEffect} from "react";
import Button from "../../components/common/Button";
import Label from "../../components/common/Label";

import { BiCopy } from "react-icons/bi";
import { IoEllipse } from "react-icons/io5";

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
              <div className="absolute right-4 top-4">
                <BiCopy color="white" size={"20px"}></BiCopy>
              
              </div>
            </div>
            <div className="description mt-[10px] flex items-start justify-start text-left">
              <div className="mt-1 mr-2">
                <IoEllipse color={"#38ae00"}></IoEllipse>
              </div>
              <p className="text-left text-[18px] leading-[27px] font-medium text-[#ffffff80]">
                {" "}
                Someone wants to transfer you, give them this ID!
              </p>
            </div>
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
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_249_124)">
                        <path
                          d="M5.1998 8C4.97902 8 4.7998 8.17922 4.7998 8.4C4.7998 8.62078 4.97902 8.8 5.1998 8.8C5.42059 8.8 5.5998 8.62078 5.5998 8.4C5.5998 8.17922 5.42059 8 5.1998 8Z"
                          fill="#353535"
                        />
                        <path
                          d="M21.6562 0H2.34375C1.05139 0 0 1.05139 0 2.34375V19.7812C0 21.0736 1.05139 22.125 2.34375 22.125H3.09375V23.5312C3.09375 23.7902 3.30359 24 3.5625 24H8.25C8.50891 24 8.71875 23.7902 8.71875 23.5312V22.125H15.2812V23.5312C15.2812 23.7902 15.4911 24 15.75 24H20.4375C20.6964 24 20.9062 23.7902 20.9062 23.5312V22.125H21.6562C22.9486 22.125 24 21.0736 24 19.7812V2.34375C24 1.05139 22.9486 0 21.6562 0ZM7.78125 23.0625H4.03125V22.125H7.78125V23.0625ZM19.9688 23.0625H16.2188V22.125H19.9688V23.0625ZM23.0625 19.7812C23.0625 20.5567 22.4317 21.1875 21.6562 21.1875H2.34375C1.5683 21.1875 0.9375 20.5567 0.9375 19.7812V2.34375C0.9375 1.5683 1.5683 0.9375 2.34375 0.9375H21.6562C22.4317 0.9375 23.0625 1.5683 23.0625 2.34375V19.7812Z"
                          fill="#353535"
                        />
                        <path
                          d="M20.337 3.2H3.66335C3.40753 3.2 3.2002 3.41066 3.2002 3.67059V18.7294C3.2002 18.9893 3.40753 19.2 3.66335 19.2H20.337C20.5929 19.2 20.8002 18.9893 20.8002 18.7294C20.8002 16.2327 20.8002 5.43051 20.8002 3.67059C20.8002 3.41066 20.5929 3.2 20.337 3.2ZM19.8739 15.4353H18.9476V14.4941H19.8739V15.4353ZM19.8739 7.90588H18.9476V6.9647H19.8739V7.90588ZM4.12651 18.2588V4.14117H19.8739V6.02353H18.4844C18.2286 6.02353 18.0212 6.23419 18.0212 6.49411V8.37647C18.0212 8.63639 18.2286 8.84706 18.4844 8.84706H19.8739V13.5529H18.4844C18.2286 13.5529 18.0212 13.7636 18.0212 14.0235V15.9059C18.0212 16.1658 18.2286 16.3765 18.4844 16.3765H19.8739V18.2588H4.12651Z"
                          fill="#353535"
                        />
                        <path
                          d="M5.1998 9.60001C4.97887 9.60001 4.7998 9.81488 4.7998 10.08V13.92C4.7998 14.1851 4.97887 14.4 5.1998 14.4C5.42074 14.4 5.5998 14.1851 5.5998 13.92V10.08C5.5998 9.81488 5.42074 9.60001 5.1998 9.60001Z"
                          fill="#353535"
                        />
                        <path
                          d="M12.0002 6.39999C9.35232 6.39999 7.2002 8.54593 7.2002 11.2C7.2002 13.8479 9.34613 16 12.0002 16C14.6481 16 16.8002 13.8541 16.8002 11.2C16.8002 8.55212 14.6543 6.39999 12.0002 6.39999ZM15.3602 11.6751H15.8094C15.7245 12.3612 15.4581 13.0094 15.0332 13.5542L14.7156 13.2366C14.5281 13.0491 14.2243 13.0491 14.0368 13.2366C13.8493 13.4241 13.8493 13.7279 14.0368 13.9154L14.3544 14.2332C13.8098 14.6579 13.1661 14.9245 12.4802 15.0094V14.56C12.4802 14.2949 12.2653 14.08 12.0002 14.08C11.7351 14.08 11.5202 14.2949 11.5202 14.56V15.0092C10.8343 14.9243 10.1908 14.6579 9.64595 14.233L9.96357 13.9154C10.1511 13.7279 10.1511 13.4241 9.96357 13.2366C9.77607 13.0491 9.47232 13.0491 9.28482 13.2366L8.96701 13.5542C8.54232 13.0096 8.2757 12.3659 8.19076 11.68H8.6402C8.90532 11.68 9.1202 11.4651 9.1202 11.2C9.1202 10.9349 8.90532 10.72 8.6402 10.72H8.19095C8.27588 10.0341 8.54232 9.39062 8.9672 8.84574L9.28482 9.16337C9.47232 9.35087 9.77607 9.35087 9.96357 9.16337C10.1511 8.97587 10.1511 8.67212 9.96357 8.48462L9.64595 8.16681C10.1906 7.74212 10.8343 7.47549 11.5202 7.39056V7.83999C11.5202 8.10512 11.7351 8.31999 12.0002 8.31999C12.2653 8.31999 12.4802 8.10512 12.4802 7.83999V7.39074C13.1661 7.47568 13.8096 7.74212 14.3544 8.16699L14.0368 8.48462C13.8493 8.67212 13.8493 8.97587 14.0368 9.16337C14.2243 9.35087 14.5281 9.35087 14.7156 9.16337L15.0334 8.84574C15.4581 9.39043 15.7247 10.0341 15.8096 10.72H15.3602C15.0951 10.72 14.8802 10.9349 14.8802 11.2C14.8802 11.4651 15.0951 11.6751 15.3602 11.6751Z"
                          fill="#353535"
                        />
                        <path
                          d="M12.4004 8.8C11.2977 8.8 10.4004 9.69727 10.4004 10.8C10.4004 11.9027 11.2977 12.8 12.4004 12.8C13.5031 12.8 14.4004 11.9027 14.4004 10.8C14.4004 9.69727 13.5031 8.8 12.4004 8.8ZM12.4004 11.8C11.849 11.8 11.4004 11.3514 11.4004 10.8C11.4004 10.2486 11.849 9.8 12.4004 9.8C12.9518 9.8 13.4004 10.2486 13.4004 10.8C13.4004 11.3514 12.9518 11.8 12.4004 11.8Z"
                          fill="#353535"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_249_124">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
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
