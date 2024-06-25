interface UserMessageViewCardProps {
    profile: string;
    name: string;
    username: string;
    message: string;
    
}

const UserMessageViewCard = ({profile,name,username,message}:UserMessageViewCardProps) => {
  return (
    <div className="flex justify-between   items-center px-[30px] h-[40px] py-12 -mt-11">
      <div className="flex flex-col items-center mt-[200px] px-[100px] gap-[12px]">
        <img
          src={profile}
          alt="logo"
          className="h-[64px] w-[64px] rounded-full"
        />
        <p className="text-[18px] text-white ">{name}</p>
        <p className="text-[14px] text-[#B5B9BD] -mt-2">{username}</p>
        <p className="text-[12px] text-[#B5B9BD] text-center">
          {message}
        </p>
      </div>
    </div>
  );
};

export default UserMessageViewCard;
