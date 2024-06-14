interface UserMessageCardProps {
  profile: string;
  name: string;
  date: string;
  emoji?: string[];
  message: string;
  tick?: string;
  flag?: boolean;
}
const UserMessageCard = ({
  profile,
  name,
  date,
  emoji,
  message,
  tick,
  flag,
}: UserMessageCardProps) => {
  return (
    <div
      className={`flex flex-col w-[568px] mx-auto -mb-4 gap-[4px] rounded-[12px] p-3 ${
        flag ? "bg-[#212426]" : ""
      }`}
    >
      <div className="flex justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={profile}
            alt="logo"
            className="h-[32px] w-[32px] rounded-full"
          />
          <p className="text-[16px] text-[#FAFBFC]">{name}</p>
          <p className="text-[14px] text-[#7D8185]">{date}</p>
        </div>
        <div className="flex items-center space-x-2">
          {emoji?.map((data,key) => (
            <img src={data} key={key} alt="emoji" className="h-[24px] w-[24px]" />
          ))}
        </div>
      </div>
      <p className="ml-[47px] text-[14px] text-[#FAFBFC] tracking-tight">
        {message}
      </p>
      <img
        src={tick}
        alt="logo"
        className={`ml-[47px] h-[11px] w-[17px] ${flag ? "" : "hidden"}`}
      />
    </div>
  );
};

export default UserMessageCard;
