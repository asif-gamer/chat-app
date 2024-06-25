import UserCard from "@/components/UserCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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

const CreateGroup = () => {
  return (
    <div className=" flex flex-col w-[519px] h-[578px] rounded-2xl mt-[46px] bg-[#171717]">
      <div className=" flex items-center justify-between  px-[40px] z-50 bg-[#232628] rounded-t-2xl h-[55px]  shadow-btm-border">
        <div className="flex items-center gap-4">
          <img
            src="/src/assets/arrow.svg"
            alt="arrow"
            className="w-[7.5px] h-[12px]"
          />
          <p className="text-[16px] text-white font-normal">Create Group</p>
        </div>

        <img
          src="/src/assets/cross.svg"
          alt="cross"
          className="w-[14px] h-[14px] font-semibold justify-end"
        />
      </div>

      <div className="flex flex-col gap-4 justify-between   items-center px-[30px] h-[40px] py-12 -mt-12">
        <div className="text-[24px] text-white mt-7">
          Customize your group experience
        </div>

        <div className="text-[14px] text-white text-center w-[350px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </div>
        <img
          src="/src/assets/Camera.svg"
          alt="group"
          className="w-[110px] h-[124.65px] mt-5"
        />
        <p className="text-[14px] text-[#2E9BFA] -mt-2">Click to upload</p>
        <p className="text-[14px] text-white w-full mt-9">
          Give a name for your group
        </p>
        <input
          className="outline-none bg-[#232628] text-white  py-[10px] px-[16px] rounded-md w-full -mt-3  "
          placeholder="Enter group name"
        />
      </div>
      <div className="h-[68px] px-5 w-full  rounded-b-2xl mt-[400px]">
        <Button
          className="w-full h-[44px] text-white text-[16px] bg-[#2E9BFA] mt-3 "
          variant={"default"}
        >
          Create
        </Button>
      </div>
    </div>
  );
};

export default CreateGroup;
