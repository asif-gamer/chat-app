import DateTimeCard from "@/components/DateTimeCard";
import PrivacySupportCard from "@/components/PrivacySupportCard";
import UserChatCard from "@/components/UserChatCard";
import UserDetailCard from "@/components/UserDetailCard";
import UserMessageCard from "@/components/UserMessageCard";
import UserPhoVidCard from "@/components/UserPhoVidCard";
import { Button } from "@/components/ui/button";
import { SendIcon } from "lucide-react";
import { useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

const UserChatData = [
  {
    name: "Kathryn Murphy",
    username: "Haha terrifying 😂",
    photo: "/src/assets/murphy.png",
  },
  {
    name: "Esther Howard",
    username: "Haha terrifying 😂",
    photo: "/src/assets/howard.png",
  },
  {
    name: "Jerome Bell",
    username: "Haha terrifying 😂",
    photo: "/src/assets/bell.png",
  },
  {
    name: "Devon Lane",
    username: "Haha terrifying 😂",
    photo: "/src/assets/lane.png",
  },
  {
    name: "Cameron Williamson",
    username: "Haha terrifying 😂",
    photo: "/src/assets/william.png",
  },
  {
    name: "Devon Lane",
    username: "Haha terrifying 😂",
    photo: "/src/assets/lane.png",
  },
];
const UserPicData1 = {
  src1: "/src/assets/pic1.jpg",
  src2: "/src/assets/pic2.jpg",
};

const UserPicData2 = {
  src1: "/src/assets/pic3.jpg",
  src2: "/src/assets/pic4.jpg",
  src3: "/src/assets/pic5.jpg",
};

const PrivacySupportCardData = [
  {
    title: "Mute Notification",
    symbol: "/src/assets/mutemessage.svg",
  },
  {
    title: "Block User",
    symbol: "/src/assets/blockuser.svg",
  },
  {
    title: "Report",
    symbol: "/src/assets/report.svg",
  },
];

export const data = [
  {
    name: "Kathryn Murphy",
    username: "Rachelle Mayfield",
    photo: "/src/assets/murphy.png",
  },
  {
    name: "Esther Howard",
    username: "Rachelle Mayfield",
    photo: "/src/assets/howard.png",
  },
  {
    name: "Jerome Bell",
    username: "Rachelle Mayfield",
    photo: "/src/assets/bell.png",
  },
];

export const data2 = [
  {
    name: "Devon Lane",
    username: "Rachelle Mayfield",
    photo: "/src/assets/lane.png",
  },
  {
    name: "Cameron Williamson",
    username: "Rachelle Mayfield",
    photo: "/src/assets/william.png",
  },
];

const Chat7 = () => {
  const [hover, setHover] = useState(false);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [emoji, setEmoji] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [open, setOpen] = useState(false);
  const [imageFile, setImageFile] = useState([]);

  const reachandle = (data: string) => {
    const debounce = setTimeout(() => {
      data === "hover"
        ? setHover(true)
        : data === "hover1"
        ? setHover1(true)
        : data === "hover2"
        ? setHover2(true)
        : setHover1(false);
    }, 1500);
    return () => clearTimeout(debounce);
  };
  const [more, setMore] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const [reply, setReply] = useState(false);
  const [chatdel, setChatdel] = useState(false);
  const [isDel, setIsDel] = useState(false);
  const handleClickDel = () => {
    setChatdel(!chatdel);
  };
  const [message, setMessage] = useState("");
  const [msgData, setMsgData] = useState("");

  const handleMsg = () => {
    setMsgData(message);
    setReply(false);
  };

  const [emojii, setEmojii] = useState(false);

  const [emojiValue, setEmojiValue] = useState("");

  const handleReaction = (data: any) => {
    console.log(data);
    setEmojiValue(data);
    setMessage(data.emoji);
  };

  const recorderControls = useAudioRecorder();
  const addAudioElement = (blob: any) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };

  console.log(imageFile);

  return (
    <>
      {chatdel ? (
        <div className=" flex flex-col w-[616px] h-[468px] rounded-2xl mt-[100px] bg-[#171717]">
          <div className=" flex items-center justify-between  px-[40px] z-50 bg-[#232628] rounded-t-2xl h-[64px]  shadow-btm-border">
            <div className="flex items-center gap-4">
              <img
                src="/src/assets/arrow.svg"
                alt="arrow"
                className="w-[7.5px] h-[12px]"
              />
              <p className="text-[16px] text-white font-normal">
                Remove message
              </p>
            </div>

            <img
              src="/src/assets/cross.svg"
              alt="cross"
              className="w-[14px] h-[14px] font-semibold justify-end cursor-pointer"
              onClick={() => setChatdel(false)}
            />
          </div>

          <div className="flex flex-col gap-6 justify-between   items-center px-[30px] h-[40px] py-12 -mt-12">
            <div className="flex items-center mx-auto w-full min-h-[80px] bg-[#212426] justify-between px-5 rounded-[8px] mt-6">
              <div className="flex flex-col">
                <p className="text-[18px] font-medium text-white">
                  Remove for everyone
                </p>
                <p className="text-[14px] font-thin text-white">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>

              <img
                src="/src/assets/SelectCircle.svg"
                alt="group"
                className=" items-center  "
              />
            </div>
            <div className="flex items-center mx-auto w-full min-h-[80px] justify-between px-5 bg-[#212426] rounded-[8px] -mt-2">
              <div className="flex flex-col">
                <p className="text-[18px] font-medium text-white">
                  Remove for me
                </p>
                <p className="text-[14px] font-thin text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
                </p>
              </div>

              <div className="bg-[#2B2E30] h-[20px] w-[20px] rounded-full" />
            </div>
            <div className="flex justify-between gap-4 mt-28">
              <Button
                onClick={handleClickDel}
                className="w-[276px] h-[44px] bg-[#2B2E30] rounded-[8px] text-white"
              >
                Close
              </Button>

              <Button
                onClick={() => {
                  setIsDel(true);
                  setChatdel(false);
                }}
                className="w-[276px] h-[44px] bg-[#2E9BFA] rounded-[8px] text-white"
              >
                Done
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[1440px] mt-16  px-10">
          <div className="flex justify-between ">
            <div className="flex flex-col w-[280px]">
              <div className="flex items-center justify-between  z-50">
                <div className="flex space-x-[125px]">
                  <div className="flex gap-[16px]">
                    <span className="text-white text-[14px]">Messages</span>
                    <span className="text-[#7D8185] text-[14px]">Requests</span>
                  </div>
                  <img
                    src="/src/assets/share.svg"
                    alt="logo"
                    className="h-[24px] w-[24px]"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center h-[36px] py-12 -mt-2">
                <div className="flex flex-row h-[36px] border-[1px]  border-[#7D8185] border-l-2 border-t-2 w-full bg-[#100d0f] space-x-5 items-center py-2.5 px-6  rounded-[18px]">
                  <img
                    className="h-[20px] w-[20px] text-[#7D8185]"
                    src="/src/assets/search-icon.svg"
                  />
                  <input
                    className="outline-none bg-transparent w-full text-typo-secondary"
                    placeholder="Search Messages"
                  />
                </div>
              </div>
              <div className=" flex flex-col gap-[10px] -mt-5">
                <UserChatCard
                  profilePic="/src/assets/chat1.png"
                  name="Kathryn Murphy"
                  chat="Haha terrifying 😂"
                  flag={true}
                />
                {UserChatData.map((data) => (
                  <UserChatCard
                    profilePic={data.photo}
                    name={data.name}
                    chat={data.username}
                    flag={false}
                  />
                ))}
              </div>
            </div>
            <div className=" flex flex-col justify-between w-[616px] h-[600px] rounded-2xl bg-[#171717]">
              <div className="flex flex-col gap-5 ">
                <div className=" flex items-center justify-between  px-[40px]  bg-[#232628] rounded-t-2xl h-[55px]  shadow-btm-border">
                  <div className="flex items-center justify-center gap-[12px]">
                    <p className="text-[16px] text-white items-center justify-center font-normal">
                      Jerome Bell
                    </p>
                    <p className="text-[12px] text-[#B5B9BD] items-center justify-center font-light">
                      Last Seen 10:50 am
                    </p>
                  </div>

                  <div className="flex items-center gap-[32px]">
                    <img
                      src="/src/assets/record.svg"
                      alt="logo"
                      className="h-[24px] w-[24px]"
                    />
                    <img
                      src="/src/assets/phone.svg"
                      alt="logo"
                      className="h-[24px] w-[24px]"
                    />
                    <img
                      src="/src/assets/threedot.svg"
                      alt="logo"
                      className="h-[24px] w-[24px]"
                    />
                  </div>
                </div>

                {/* user msg gray */}
                {}

                {msgData === "" ? (
                  <>
                    <div className="flex flex-col bg-[#212426] w-[568px] mx-auto -mb-4 gap-[4px] rounded-[12px] p-3 ">
                      <div className="flex justify-between">
                        <div className="flex items-center space-x-4">
                          <img
                            src="/src/assets/user1.png"
                            alt="logo"
                            className="h-[32px] w-[32px] rounded-full"
                          />
                          <p className="text-[16px] text-[#FAFBFC]">
                            Jerome Bell
                          </p>
                          <p className="text-[14px] text-[#7D8185]">10:50 am</p>
                        </div>
                        <div className="flex items-center space-x-2 ">
                          <div className="relative">
                            <img
                              src="/src/assets/smallemoji.svg"
                              key={56}
                              alt="emoji"
                              className="h-[24px] w-[24px] cursor-pointer"
                              onMouseEnter={() => reachandle("hover")}
                              onMouseLeave={() => setHover(false)}
                              onClick={() => setEmoji(!emoji)}
                            />
                            <div
                              className={`z-40 absolute left-1/2 text-sm transform -translate-x-1/2 mt-1 w-[50px] h-[22px] bg-[#2B2E30] font-normal rounded-[4px] px-[8px] py-[2px] text-white text-center ${
                                hover ? "block" : "hidden"
                              }`}
                            >
                              React
                            </div>
                            <div
                              className={` absolute flex items-center justify-between left-1/2 text-sm transform -translate-x-1/2 -mt-16 w-[166px] h-[36px] bg-[#2B2E30] font-normal rounded-[38px] px-[8px] py-[2px] text-white text-center ${
                                emoji ? "block" : "hidden"
                              }`}
                            >
                              <img
                                src="/src/assets/thumbicon.png"
                                onClick={() => setConfirm(true)}
                                className="cursor-pointer w-[24px] h-[24px] rounded-full"
                              />

                              <div className="cursor-pointer">❤️</div>
                              <div className="cursor-pointer">😁</div>
                              <div className="cursor-pointer">😮</div>
                              <div className="cursor-pointer">🙏</div>
                              <img
                                src="/src/assets/moreemoji.svg"
                                className="cursor-pointer"
                              />
                            </div>
                          </div>
                          <div className="relative">
                            <img
                              src="/src/assets/smallshare.svg"
                              key={1}
                              alt="emoji"
                              className="h-[24px] w-[24px] cursor-pointer"
                              onClick={() => setReply(!reply)}
                              onMouseEnter={() => reachandle("hover1")}
                              onMouseLeave={() => setHover1(false)}
                            />
                            <div
                              className={`z-40 absolute left-1/2 text-sm transform -translate-x-1/2 mt-1 w-[50px] h-[22px] bg-[#2B2E30] font-normal rounded-[4px] px-[8px] py-[2px] text-white text-center ${
                                hover1 ? "block" : "hidden"
                              }`}
                            >
                              Reply
                            </div>
                          </div>
                          <div className="relative">
                            <img
                              src="/src/assets/smallthreedot.svg"
                              key={1}
                              alt="emoji"
                              className="h-[24px] w-[24px] cursor-pointer"
                              onClick={() => setMore(!more)}
                              onMouseEnter={() => reachandle("hover2")}
                              onMouseLeave={() => setHover2(false)}
                            />
                            <div
                              className={`z-40 absolute left-1/2 text-sm transform -translate-x-1/2 mt-1 w-[50px] h-[22px] bg-[#2B2E30] font-normal rounded-[4px] px-[8px] py-[2px] text-white text-center ${
                                hover2 ? "block" : "hidden"
                              }`}
                            >
                              More
                            </div>
                            <div
                              className={`absolute z-50 flex flex-col py-4 px-4 rounded-[12px] justify-between right-0.5  top-7  w-[193px] h-[136px] bg-[#1A1C1F] ${
                                more ? "block" : "hidden"
                              }`}
                            >
                              <div className="flex items-center gap-2  cursor-pointer">
                                <img
                                  src="/src/assets/copy.svg"
                                  alt="logo"
                                  className="h-[24px] w-[24px]"
                                />
                                <p className="text-[14px] text-white">
                                  Copy message
                                </p>
                              </div>
                              <div className="flex items-center gap-2 bg-[#2B2E30] -ml-1 px-2 w-[170px] h-[40px] cursor-pointer rounded-[8px] ">
                                <img
                                  src="/src/assets/reportr.svg"
                                  alt="logo"
                                  className="h-[24px] w-[24px]"
                                />
                                <p className="text-[14px] text-white">
                                  Report message
                                </p>
                              </div>
                              <div
                                onClick={handleClickDel}
                                className="flex items-center gap-2 cursor-pointer"
                              >
                                <img
                                  src="/src/assets/deleter.svg"
                                  alt="logo"
                                  className="h-[24px] w-[24px]"
                                />
                                <p className="text-[14px] text-white">
                                  Remove message
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <p className="ml-[47px] text-[14px] text-[#FAFBFC] tracking-tight">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore
                        </p>
                        <img
                          src={`/src/assets/${
                            confirm ? "thumbicon.png" : "doubletick.svg"
                          }`}
                          alt="logo"
                          className={`ml-[47px] h-[14px] w-[19px] ${
                            confirm
                              ? "bg-[#212426] cursor-pointer w-4 h-8 rounded-full"
                              : ""
                          }`}
                          onClick={() => setOpen(!open && confirm)}
                        />
                        <div
                          className={`absolute ml-11 px-3 -mt-[70px] flex items-center justify-between w-[281px] h-[56px] rounded-[10px] bg-[#2B2E30] ${
                            open ? "block" : "hidden"
                          } ${confirm ? "block" : "hidden"}`}
                        >
                          <img
                            src="/src/assets/user1.png"
                            className="h-[40px] w-[40px] rounded-full"
                          />
                          <span className="text-white text-base font-semibold">
                            You
                          </span>
                          <img
                            src="/src/assets/thumbicon.png"
                            className="bg-[#2B2E30] w-[24px] h-[24px] rounded-full"
                          />
                          <Button
                            onClick={() => setConfirm(false)}
                            className={`bg-[#2E9BFA] cursor-pointer h-[32px] w-[135px] rounded-[8px]  text-center  text-white ${
                              confirm ? "block" : "hidden"
                            }`}
                          >
                            Remove reaction
                          </Button>
                        </div>
                      </div>
                    </div>
                    <UserMessageCard
                      profile="/src/assets/user1.png"
                      name="Jane Cooper"
                      date="10:50 am"
                      message="The process often involves figuring out what is required, brainstorming possible ideas, creating mock prototypes and then generating the product."
                      flag={false}
                      key={2}
                      isDel={isDel}
                    />

                    <UserMessageCard
                      profile="/src/assets/user1.png"
                      name="Jane Cooper"
                      date="10:50 am"
                      message="The process often involves figuring out what is required, brainstorming "
                      flag={false}
                      key={2}
                    />
                    <DateTimeCard month="May" date="12" year="2021" />
                    <UserMessageCard
                      profile="/src/assets/user1.png"
                      name="Jane Cooper"
                      date="10:50 am"
                      message="The process often involves figuring out what is required, brainstorming "
                      flag={false}
                      key={2}
                    />
                  </>
                ) : (
                  <div className="relative flex flex-col gap-5">
                    <div className="z-20 flex flex-col p-3 mx-auto -mb-5 w-[568px] h-[66px] bg-[#0B0C0D] rounded-md">
                      <p className="text-[#FAFBFC] text-[14px] font-normal">
                        Eleanor Pena
                      </p>
                      <p className="text-[#FAFBFC] text-[12px] font-thin">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod ...
                      </p>
                    </div>
                    <div className=" absolute  mt-9 left-4">
                      <img
                        src="/src/assets/connected.svg"
                        alt="l"
                        className=""
                      />
                    </div>
                    <UserMessageCard
                      profile="/src/assets/user1.png"
                      name="Jane Cooper"
                      date="10:50 am"
                      message={msgData}
                      flag={false}
                      key={2}
                      isDel={isDel}
                    />

                    <div className="flex flex-col bg-[#212426] w-[568px] mx-auto -mb-4 gap-[4px] rounded-[12px] p-3 ">
                      <div className="flex justify-between">
                        <div className="flex items-center space-x-4">
                          <img
                            src="/src/assets/user1.png"
                            alt="logo"
                            className="h-[32px] w-[32px] rounded-full"
                          />
                          <p className="text-[16px] text-[#FAFBFC]">
                            Jerome Bell
                          </p>
                          <p className="text-[14px] text-[#7D8185]">10:50 am</p>
                        </div>
                        <div className="flex items-center space-x-2 ">
                          <div className="relative">
                            <img
                              src="/src/assets/smallemoji.svg"
                              key={56}
                              alt="emoji"
                              className="h-[24px] w-[24px] cursor-pointer"
                              onMouseEnter={() => reachandle("hover")}
                              onMouseLeave={() => setHover(false)}
                              onClick={() => setEmoji(!emoji)}
                            />
                            <div
                              className={`z-40 absolute left-1/2 text-sm transform -translate-x-1/2 mt-1 w-[50px] h-[22px] bg-[#2B2E30] font-normal rounded-[4px] px-[8px] py-[2px] text-white text-center ${
                                hover ? "block" : "hidden"
                              }`}
                            >
                              React
                            </div>
                            <div
                              className={` absolute flex items-center justify-between left-1/2 text-sm transform -translate-x-1/2 -mt-16 w-[166px] h-[36px] bg-[#2B2E30] font-normal rounded-[38px] px-[8px] py-[2px] text-white text-center ${
                                emoji ? "block" : "hidden"
                              }`}
                            >
                              <img
                                src="/src/assets/thumbicon.png"
                                onClick={() => setConfirm(true)}
                                className="cursor-pointer w-[24px] h-[24px] rounded-full"
                              />

                              <div className="cursor-pointer">❤️</div>
                              <div className="cursor-pointer">😁</div>
                              <div className="cursor-pointer">😮</div>
                              <div className="cursor-pointer">🙏</div>
                              <img
                                src="/src/assets/moreemoji.svg"
                                className="cursor-pointer"
                              />
                            </div>
                          </div>
                          <div className="relative">
                            <img
                              src="/src/assets/smallshare.svg"
                              key={1}
                              alt="emoji"
                              className="h-[24px] w-[24px] cursor-pointer"
                              onClick={() => setReply(!reply)}
                              onMouseEnter={() => reachandle("hover1")}
                              onMouseLeave={() => setHover1(false)}
                            />
                            <div
                              className={`z-40 absolute left-1/2 text-sm transform -translate-x-1/2 mt-1 w-[50px] h-[22px] bg-[#2B2E30] font-normal rounded-[4px] px-[8px] py-[2px] text-white text-center ${
                                hover1 ? "block" : "hidden"
                              }`}
                            >
                              Reply
                            </div>
                          </div>
                          <div className="relative">
                            <img
                              src="/src/assets/smallthreedot.svg"
                              key={1}
                              alt="emoji"
                              className="h-[24px] w-[24px] cursor-pointer"
                              onClick={() => setMore(!more)}
                              onMouseEnter={() => reachandle("hover2")}
                              onMouseLeave={() => setHover2(false)}
                            />
                            <div
                              className={`z-40 absolute left-1/2 text-sm transform -translate-x-1/2 mt-1 w-[50px] h-[22px] bg-[#2B2E30] font-normal rounded-[4px] px-[8px] py-[2px] text-white text-center ${
                                hover2 ? "block" : "hidden"
                              }`}
                            >
                              More
                            </div>
                            <div
                              className={`absolute z-50 flex flex-col py-4 px-4 rounded-[12px] justify-between right-0.5  top-7  w-[193px] h-[136px] bg-[#1A1C1F] ${
                                more ? "block" : "hidden"
                              }`}
                            >
                              <div className="flex items-center gap-2  cursor-pointer">
                                <img
                                  src="/src/assets/copy.svg"
                                  alt="logo"
                                  className="h-[24px] w-[24px]"
                                />
                                <p className="text-[14px] text-white">
                                  Copy message
                                </p>
                              </div>
                              <div className="flex items-center gap-2 bg-[#2B2E30] -ml-1 px-2 w-[170px] h-[40px] cursor-pointer rounded-[8px] ">
                                <img
                                  src="/src/assets/reportr.svg"
                                  alt="logo"
                                  className="h-[24px] w-[24px]"
                                />
                                <p className="text-[14px] text-white">
                                  Report message
                                </p>
                              </div>
                              <div
                                onClick={handleClickDel}
                                className="flex items-center gap-2 cursor-pointer"
                              >
                                <img
                                  src="/src/assets/deleter.svg"
                                  alt="logo"
                                  className="h-[24px] w-[24px]"
                                />
                                <p className="text-[14px] text-white">
                                  Remove message
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <p className="ml-[47px] text-[14px] text-[#FAFBFC] tracking-tight">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore
                        </p>
                        <img
                          src={`/src/assets/${
                            confirm ? "thumbicon.png" : "doubletick.svg"
                          }`}
                          alt="logo"
                          className={`ml-[47px] h-[14px] w-[19px] ${
                            confirm
                              ? "bg-[#212426] cursor-pointer w-4 h-8 rounded-full"
                              : ""
                          }`}
                          onClick={() => setOpen(!open && confirm)}
                        />
                        <div
                          className={`absolute ml-11 px-3 -mt-[70px] flex items-center justify-between w-[281px] h-[56px] rounded-[10px] bg-[#2B2E30] ${
                            open ? "block" : "hidden"
                          } ${confirm ? "block" : "hidden"}`}
                        >
                          <img
                            src="/src/assets/user1.png"
                            className="h-[40px] w-[40px] rounded-full"
                          />
                          <span className="text-white text-base font-semibold">
                            You
                          </span>
                          <img
                            src="/src/assets/thumbicon.png"
                            className="bg-[#2B2E30] w-[24px] h-[24px] rounded-full"
                          />
                          <Button
                            onClick={() => setConfirm(false)}
                            className={`bg-[#2E9BFA] cursor-pointer h-[32px] w-[135px] rounded-[8px]  text-center  text-white ${
                              confirm ? "block" : "hidden"
                            }`}
                          >
                            Remove reaction
                          </Button>
                        </div>
                      </div>
                    </div>

                    <UserMessageCard
                      profile="/src/assets/user1.png"
                      name="Jane Cooper"
                      date="10:50 am"
                      message="The process often involves figuring out what is required, brainstorming possible ideas, creating mock prototypes and then generating the product."
                      flag={false}
                      key={2}
                      isDel={isDel}
                    />
                  </div>
                )}

                <div
                  className={`lex justify-between relative  h-[68px] px-5 w-full items-center  rounded-b-2xl ${
                    msgData === "" ? "" : "mt-[75px]"
                  }`}
                >
                  <div
                    style={{}}
                    className={`${
                      true ? "" : ""
                    } flex flex-row h-[48px]  w-full bg-[#2B2E30] space-x-5 items-center py-2.5 px-7  rounded-[18px]`}
                  >
                    <input
                      className="outline-none bg-transparent w-full text-typo-secondary rounded-sm!"
                      placeholder="Write a message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />

                    <div className="flex relative items-center gap-[24px] px-10">
                      <input
                        type="file"
                        ref={fileRef}
                        hidden
                        accept="image/*"
                        onChange={(e) => setImageFile(e.target.files)}
                      />
                      <img
                        key={1}
                        src="/src/assets/gallery.svg"
                        alt="logo"
                        className="h-[20px] w-[20px] cursor-pointer"
                        onClick={() => fileRef.current?.click()}
                      />
                      <div className="relative flex items-center h-[2px]">
                        <AudioRecorder
                          onRecordingComplete={(blob) => addAudioElement(blob)}
                          recorderControls={recorderControls}
                        />
                        <button
                          className="absolute  -mr-16"
                          onClick={recorderControls.stopRecording}
                        ></button>
                      </div>

                      <img
                        key={3}
                        src="/src/assets/emoji.svg"
                        alt="logo"
                        className="h-[20px] w-[20px] cursor-pointer"
                        onClick={() => setEmojii(!emojii)}
                      />
                      {emojii && (
                        <div className="absolute right-14 bottom-11 z-50">
                          <EmojiPicker
                            reactionsDefaultOpen={true}
                            onReactionClick={handleReaction}
                            className=""
                          />
                        </div>
                      )}

                      <button
                        onClick={handleMsg}
                        className="bg-[#2A85FF]  text-white rounded-[12px] px-4 py-2"
                      >
                        <SendIcon size={16} />
                      </button>
                    </div>
                  </div>
                </div>
                {reply && (
                  <div className="flex px-2 py-2 flex-col z-40 items-center ml-5 rounded-[8px] -mt-[131px] w-[575px] h-[58px] bg-[#202226]">
                    <div className="flex items-center gap-[430px]">
                      <p className="text-[16px] -ml-14  text-white font-normal">
                        Jerome Bell
                      </p>
                      <img
                        src="/src/assets/bigcross.svg"
                        alt="emoji"
                        className="h-[24px] w-[24px] -mr-16 cursor-pointer"
                        onClick={() => setReply(false)}
                      />
                    </div>
                    <p className="text-[14px] -ml-[73px] text-white font-thin">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod ...
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col w-[280px]">
              <div className="flex items-center justify-between  z-50">
                <div className="flex space-x-[125px]">
                  <div className="flex gap-[16px]">
                    <span className="text-white text-[16px]">Chat Details</span>
                  </div>
                </div>
              </div>

              <div className=" flex flex-col gap-[10px] mt-5">
                <UserDetailCard
                  picture="/src/assets/user1.png"
                  name="Jerome Bell"
                  username="@DianneRussell_04"
                  notification="/src/assets/notibell.svg"
                />
                <UserPhoVidCard
                  UserPicture1={UserPicData1}
                  UserPicture2={UserPicData2}
                />
                <PrivacySupportCard privacydata={PrivacySupportCardData} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat7;
