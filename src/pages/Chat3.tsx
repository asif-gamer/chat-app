import DateTimeCard from "@/components/DateTimeCard";
import DeleteCancel from "@/components/DeleteCancel";
import PrivacySupportCard from "@/components/PrivacySupportCard";
import UserChatCard from "@/components/UserChatCard";
import UserDetailCard from "@/components/UserDetailCard";
import UserMessageCard from "@/components/UserMessageCard";
import UserMessageViewCard from "@/components/UserMessageViewCard";
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

const Chat3 = () => {
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
            <UserMessageViewCard
              profile="/src/assets/cooper.png"
              name="Jerome Bell"
              username="@DianneRussell_04"
              message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "
            />

            <div className="flex flex-col w-full mx-auto gap-7 mt-36">
              <DateTimeCard month="May" date="12" year="2021" />

              <UserMessageCard
                profile="/src/assets/cooper.png"
                name="Jerome Bell"
                date="10:50 am"
                message="Hi Dear"
              />
              <DeleteCancel
               name="Chat Request"
               message="Cameron Williamson wants to chat with you"
              />

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
  );
};

export default Chat3;
