interface UserCardProps {
  name: string;
  username: string;
  photo: string;
  flag: boolean;
}

const UserCard = ({ name, username, photo, flag }: UserCardProps) => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex items-center gap-2.5">
        <img
          src={photo}
          alt="user"
          className="w-[48px] h-[48px] rounded-full"
        />
        <div className="flex flex-col ">
          <p className="text-white text-[16px]">{name}</p>
          <p className="text-[#B5B9BD] text-[14px]">{username}</p>
        </div>
      </div>
      {flag ? (
        <img src="/src/assets/SelectCircle.svg" alt="check" className="" />
      ) : (
        <div className={`w-[20px] h-[20px] rounded-full bg-[#44474A]`} />
      )}
    </div>
  );
};

export default UserCard;
