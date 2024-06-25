interface UserPhoVidCardProps {
  UserPicture1: {
    src1: string;
    src2: string;
  };
  UserPicture2?: {
    src1: string;
    src2: string;
    src3: string;
  };
  flag?: boolean;
}
const UserPhoVidCard = ({
  UserPicture1,
  UserPicture2,
  flag
}: UserPhoVidCardProps) => {
  return (
    <div className="flex flex-col gap-[10px] mt-3">
      <div className="flex justify-between items-center">
        <p className="text-white text-[14px]">Photos & Videos</p>
        <img
          src="/src/assets/downarrow.svg"
          alt="send"
          className="h-[7px] w-[14px]  "
        />
      </div>
      <div className="flex justify-between gap-[8px]">
        <img
          src={UserPicture1.src1}
          alt="chat1"
          className="h-[106px] w-[142px] rounded-[12px] object-cover "
        />
        <img
          src={UserPicture1.src2}
          alt="chat1"
          className="h-[106px] w-[142px] rounded-[12px] object-cover "
        />
      </div>
      <div className="flex justify-between gap-[8px]">
        <img
          src={UserPicture2?.src1}
          alt="chat1"
          className={`h-[106px] w-[92px] rounded-[8px] object-cover ${UserPicture2===undefined && "hidden"}`}
        />
        <img
          src={UserPicture2?.src2}
          alt="chat1"
          className={`h-[106px] w-[92px] rounded-[8px] object-cover ${UserPicture2===undefined && "hidden"}`}
        />
        <img
          src={UserPicture2?.src3}
          alt="chat1"
          className={`h-[106px] w-[92px] rounded-[8px] object-cover ${UserPicture2===undefined && "hidden"}`}
        />
      </div>
      <div className="flex items-center">
        <p className={`ml-auto text-[#2E9BFA] text-[16px] ${flag && "hidden"}`}>See all</p>
      </div>
    </div>
  );
};

export default UserPhoVidCard;
