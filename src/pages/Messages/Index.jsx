import React, { useState } from "react";

import useScreen from "../../hooks/useScreen";
import Button from "../../components/common/Button";

const messages = [
  {
    name: "Ivan Franecki",
    content: "Est aliquam eum assssssdddddddddddddddddddddd",
  },
  {
    name: "Steven Hackett",
    content: "Et deserunt provident",
  },
  {
    name: "Nathaniel Veum",
    content: "Et deserunt providentasdfadsfsd",
  },
];

const Messages = () => {
  const [selected, setSelected] = useState(0);

  const screenSize = useScreen();

  return (
    <div className="message pl-[40px] pr-[20px] py-[54px] flex space-x-8">
      <div
        className={`message-box min-w-[300px] w-1/4 border-r-2 ${
          screenSize.dynamicWidth < 768 ? "w-100" : ""
        }`}
      >
        <div className="title flex justify-between pr-4 items-center">
          <div className="title text-[37px] leading-[56px] text-white text-left font-bold">
            Messages
          </div>
          <div className=" h-[40px] text-[20px] leading-[30px] text-[#ffffff33] py-[4px] px-[16px] border-[2.41px] border-[#ffffff33] rounded-[21px]">
            all
          </div>
        </div>
        <div className="messages mt-[27px] w-4/5">
          <ul className=" list-none space-y-4">
            {messages.map((message, index) => {
              return (
                <li
                  key={index}
                  className={`text-left py-[7px] px-[13px] ${
                    selected === index ? "bg-[#474747] rounded-[10px]" : " "
                  }`}
                  onClick={(e) => setSelected(index)}
                >
                  <p
                    className={`text-[20px] leading-[30px] text-white overflow-hidden truncate ${
                      selected === index ? "font-bold" : ""
                    }`}
                  >
                    {message.name}
                  </p>
                  <p
                    className={`text-[15px] leading-[22px] text-[#ffffff4c] overflow-hidden truncate ${
                      selected === index ? "font-bold text-white" : ""
                    }`}
                  >
                    {message.content}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {screenSize.dynamicWidth > 768 && (
        <div className="detail w-2/5 2xl:w-2/4 border-2 border-[#474747] rounded-[20px] flex flex-col ">
          <div className="title flex px-[28px] py-[23px] border-b-2 border-[#474747] items-center gap-3 justify-between flex-wrap">
            <div className="title-text text-[20px] leading-[30px] text-white">
              Steven Hackett
            </div>
            <div className="flex gap-4 flex-wrap">
              <Button
                type={"green"}
                text={"Withdraw"}
                category={"message"}
              ></Button>
              <Button
                type={"red"}
                text={"Delete"}
                size={"small"}
                category={"message"}
              ></Button>
              <Button
                type={"orange"}
                text={"Mark as Unread"}
                category={"message"}
              ></Button>
            </div>
          </div>
          <div className="flex flex-wrap content py-[15px] text-[20px] leading-[30px] text-white font-normal px-[28px] text-left">
            <p className="break-words w-100">
              {" "}
              {` A new transfer from Mendy Biton is waiting for you! the collection_key is: {'amount': 70.0, 'beneficiaries': ['package.id equal b5b99124-1444-417a-9fcf-04944861cf68'], 'beneficiaries_sha': 'd745e2f7aa1cff52b038bb33fec756942c7142a862519a1bc89a9f84704d9e10', 'transaction_id': 'ef0581ca-bb48-494d-862a-81sd84214dec'}`}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;
