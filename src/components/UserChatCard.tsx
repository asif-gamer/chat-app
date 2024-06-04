interface UserChatProp {
  profilePic: string;
  name: string;
  chat: string;
  flag:boolean;
}

const UserChatCard = ({ profilePic, name, chat,flag }: UserChatProp) => {
  return (
    <div className={`flex justify-between px-3 py-3 h-[64px] ${flag?'rounded-xl bg-[#1a1c1f]':''}`}>
      <div className="flex gap-5 ">
        <img
          src={profilePic}
          alt="chat1"
          className="h-[36px] w-[36px] rounded mt-[2.9px]"
        />
        <div className="flex flex-col justify-between  ">
          <span className="text-[#FFFFFF] text-[12px]">{name}</span>
          <span className="text-[#FAFBFC] text-[12px]">{chat}</span>
        </div>
      </div>
      <span className="text-[#C4C8CC] text-[12px]">9:53 am</span>
    </div>
  );
};

export default UserChatCard;
