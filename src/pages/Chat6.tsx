import DateTimeCard from "@/components/DateTimeCard";
import PrivacySupportCard from "@/components/PrivacySupportCard";
import UserChatCard from "@/components/UserChatCard";
import UserDetailCard from "@/components/UserDetailCard";
import UserMessageCard from "@/components/UserMessageCard";
import UserPhoVidCard from "@/components/UserPhoVidCard";

const UserChatDataA = [
  {
    name: "Kathryn Murphy",
    username: "Haha terrifying 😂",
    photo: "/src/assets/murphy.png",
  },
];

const UserChatDataB = [
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


const PrivacySupportCardData = [
 
  {
    title: "Delete Chat",
    symbol: "/src/assets/report.svg",
  },

];

const Chat6 = () => {
  return (
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
            {UserChatDataA.map((data) => (
              <UserChatCard
                profilePic={data.photo}
                name={data.name}
                chat={data.username}
                flag={false}
              />
            ))}
            <UserChatCard
              profilePic="/src/assets/chat1.png"
              name="Kathryn Murphy"
              chat="Haha terrifying 😂"
              flag={true}
            />
            {UserChatDataB.map((data) => (
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
            <UserMessageCard
              profile="/src/assets/user1.png"
              name="Jerome Bell"
              date="10:50 am"
              emoji={[
                "/src/assets/smallemoji.svg",
                "/src/assets/smallshare.svg",
                "/src/assets/smallthreedot.svg",
              ]}
              message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "
              tick="/src/assets/doubletick.svg"
              flag={true}
              key={1}
            />
            <UserMessageCard
              profile="/src/assets/user1.png"
              name="Jane Cooper"
              date="10:50 am"
              message="The process often involves figuring out what is required, brainstorming possible ideas, creating mock prototypes and then generating the product."
              flag={false}
              key={2}
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

            <div className="flex justify-between h-[68px] w-full items-center  rounded-b-2xl mt-5">
              <div
                style={{}}
                className={`${
                  true ? "" : ""
                } flex flex-row h-[49px]  w-[615px] text-white bg-[#2B2E30] text-[12px] space-x-5 items-center py-2.5 px-7  rounded-[18px]`}
              >
                <p className="text-center ml-14">You cant send message to this group because you are no longer a member</p>
              
              </div>
            </div>
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
              notification="/src/assets/notibell.svg"
              flag={true}
            />
            <UserPhoVidCard UserPicture1={UserPicData1} flag={true} />
            <div className="flex flex-col gap-3 mt-1">
              <div className="flex justify-between">
                <p className="text-[14px] text-white">3 Members</p>
                <img
                  src="/src/assets/search-icon.svg"
                  alt="send"
                  className="h-[16px] w-[16px]  "
                />
              </div>
              <div className="flex justify-between ">
                <div className="flex gap-5 ">
                  <img
                    src="/src/assets/smalluser1.svg"
                    alt="chat1"
                    className={`
            
               "rounded-full h-[40px] w-[37.45px]"
           `}
                  />
                  <div className="flex flex-col justify-center gap-[4px] -mt-1.5 ">
                    <span className="text-[#B5B9BD] text-center text-[14px]">
                      You
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between ">
                <div className="flex gap-5 ">
                  <img
                    src="/src/assets/smalluser1.svg"
                    alt="chat1"
                    className={`
            
               "rounded-full h-[40px] w-[37.45px]"
           `}
                  />
                  <div className="flex flex-col py-2 gap-[4px] -mt-1.5 ">
                    <span className="text-white  text-[14px]">
                    Jerome Bell
                    </span>
                    <span className="text-[#B5B9BD] text-[10px]">@DianneRussell_04</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-24">
            <PrivacySupportCard privacydata={PrivacySupportCardData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat6;
