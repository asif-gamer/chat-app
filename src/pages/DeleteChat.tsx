import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

const DeleteChat = () => {
  return (
    <div className=" flex flex-col w-[616px] h-[468px] rounded-2xl mt-[100px] bg-[#171717]">
      <div className=" flex items-center justify-between  px-[40px] z-50 bg-[#232628] rounded-t-2xl h-[64px]  shadow-btm-border">
        <div className="flex items-center gap-4">
          <img
            src="/src/assets/arrow.svg"
            alt="arrow"
            className="w-[7.5px] h-[12px]"
          />
          <p className="text-[16px] text-white font-normal">Remove message</p>
        </div>

        <img
          src="/src/assets/cross.svg"
          alt="cross"
          className="w-[14px] h-[14px] font-semibold justify-end"
        />
      </div>

      <div className="flex flex-col gap-6 justify-between   items-center px-[30px] h-[40px] py-12 -mt-12">
        <div className="flex items-center mx-auto w-full min-h-[80px] bg-[#212426] justify-between px-5 rounded-[8px] mt-6">
          <div className="flex flex-col">
            <p className="text-[18px] font-medium text-white">
              Remove for everyone
            </p>
            <p className="text-[14px] font-thin text-white">
              Lorem ipsum dolor sit amet, consectetur{" "}
            </p>
          </div>

          <img
            src="/src/assets/SelectCircle.svg"
            alt="group"
            className=" items-center  "
          />
        </div>
        <div className="flex items-center mx-auto w-full min-h-[80px] justify-between px-5 bg-[#212426] rounded-[8px] -mt-2">
          <div className="flex flex-col">
            <p className="text-[18px] font-medium text-white">Remove for me</p>
            <p className="text-[14px] font-thin text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
            </p>
          </div>

          <div className="bg-[#2B2E30] h-[20px] w-[20px] rounded-full" />
        </div>
        <div className="flex justify-between gap-4 mt-28">
          <Link to="/chat7">
            <Button className="w-[276px] h-[44px] bg-[#2B2E30] rounded-[8px] text-white">
              Close
            </Button>
          </Link>
          <Link to="/chat8">
            <Button className="w-[276px] h-[44px] bg-[#2E9BFA] rounded-[8px] text-white">
              Done
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeleteChat;
