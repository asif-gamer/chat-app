import UserChatCard from "@/components/UserChatCard";

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

const Chat = () => {
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
            <div className="flex flex-row h-[36px]  w-full bg-[#100d0f] space-x-5 items-center py-2.5 px-6  rounded-[18px]">
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
        <div className="w-[616px] items-center">hello</div>
        <div className="w-[292px] justify-center">hello</div>
      </div>
    </div>
  );
};

export default Chat;
