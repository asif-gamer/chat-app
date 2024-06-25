interface UserDetailsCardProps {
  picture: string;
  name: string;
  username?: string;
  notification?: string;
  flag?: boolean;
  flag2?: boolean;
}

const UserDetailCard = ({
  picture,
  name,
  username,
  notification,
  flag,
  flag2,
}: UserDetailsCardProps) => {
  return (
    <div className="flex justify-between ">
      <div className="flex gap-5 ">
        <img
          src={picture}
          alt="chat1"
          className={` ${
            flag && flag
              ? "rounded-full h-[50px] w-[50px]"
              : "h-[64px] w-[64px] rounded-[12px]"
          }  `}
        />
        <div className="flex flex-col justify-center gap-[4px] -mt-1.5 ">
          <span className="text-[#FFFFFF] text-[18px]">{name}</span>
          <span className="text-[#B5B9BD] text-[14px]">{username}</span>
        </div>
      </div>
      <img
        src={notification}
        alt="chat1"
        className={`h-[40px] w-[40px]  ${flag ? "" : "mt-2.5"} ${
          flag2 && "hidden  "
        }`}
      />
    </div>
  );
};

export default UserDetailCard;
