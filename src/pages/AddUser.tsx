import UserCard from "@/components/UserCard";
import { Button } from "@/components/ui/button";

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

const AddUser = () => {
  return (
    <div className=" flex flex-col w-[616px] h-[590px] rounded-2xl mt-[46px] bg-[#171717]">
      <div className=" flex items-center justify-between  px-[40px] z-50 bg-[#232628] rounded-t-2xl h-[55px]  shadow-btm-border">
        <div className="flex items-center gap-4">
          <img
            src="/src/assets/arrow.svg"
            alt="arrow"
            className="w-[7.5px] h-[12px]"
          />
          <p className="text-[16px] text-white font-normal">Add  Users</p>
        </div>

        <img
          src="/src/assets/cross.svg"
          alt="cross"
          className="w-[14px] h-[14px] font-semibold justify-end"
        />
      </div>
      <div className="flex justify-between   items-center px-[30px] h-[40px] py-12 -mt-2">
        <div
          style={{
            boxShadow: true
              ? "0px 0px 8px 2px #2A85FF99"
              : "0px 8px 64px 0px #0000001A",
            width: true ? "616px" : "532px",
          }}
          className={`${
            true ? "border-typo-blue border-[2px]" : ""
          } flex flex-row h-9 bg-[#2B2E30] space-x-5 items-center py-2.5 px-6  rounded-[18px]`}
        >
          <img className="h-5 w-5" src="/src/assets/search-icon.svg" />
          <input
            className="outline-none bg-transparent w-full text-typo-secondary"
            placeholder="Search people"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-between   items-center px-[30px] h-[40px] py-12 -mt-12">
        {data.map((user) => (
          <UserCard
            name={user.name}
            username={user.username}
            photo={user.photo}
            flag={false}
          />
        ))}

        <UserCard
          name="Jane Cooper"
          username="Rachelle Mayfield"
          photo="/src/assets/cooper.png"
          flag={true}
        />
        {data2.map((user) => (
          <UserCard
            name={user.name}
            username={user.username}
            photo={user.photo}
            flag={false}
          />
        ))}
      </div>
      <div className="h-[68px] px-5 w-full bg-[#44474A] rounded-b-2xl mt-[330px]">
        <Button
          className="w-full h-[44px] text-white text-[16px] bg-[#2E9BFA] mt-3 "
          variant={"default"}
        >
         Add
        </Button>
      </div>
    </div>
  );
};

export default AddUser;
