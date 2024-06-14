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

const DisplayPhoto = () => {
  return (
    <div className=" flex flex-col w-[513px] h-[353px] rounded-2xl mt-[46px] bg-[#171717]">
      <div className=" flex items-center justify-between  px-[40px] z-50 bg-[#232628] rounded-t-2xl h-[55px]  shadow-btm-border">
        <div className="flex items-center gap-4">
          <img
            src="/src/assets/arrow.svg"
            alt="arrow"
            className="w-[7.5px] h-[12px]"
          />
          <p className="text-[16px] text-white font-normal">Display photo</p>
        </div>

        <img
          src="/src/assets/cross.svg"
          alt="cross"
          className="w-[14px] h-[14px] font-semibold justify-end"
        />
      </div>

      <div className="flex flex-col gap-4 justify-between   items-center px-[30px] h-[40px] py-12 -mt-12">
        <div className="flex items-center mx-auto w-full min-h-[80px] bg-[#212426] rounded-[8px] mt-6">
          <img
            src="/src/assets/upload.svg"
            alt="group"
            className="w-[40px] h-[40px] items-center ml-32 "
          />
          <p className="text-[14px] items-center text-[#2E9BFA] font-normal ml-4">
            Upload new profile pic
          </p>
        </div>
        <div className="flex items-center mx-auto w-full min-h-[80px] bg-[#212426] rounded-[8px] -mt-2">
          <img
            src="/src/assets/galpicture.svg"
            alt="group"
            className="w-[40px] h-[40px] items-center ml-32 "
          />
          <p className="text-[14px] items-center text-[#2E9BFA] font-normal ml-4">
            Choose from templates
          </p>
        </div>
        <div className="flex items-center mx-auto w-full min-h-[80px] bg-[#212426] rounded-[8px] -mt-2">
          <p className="text-[14px]  text-[#FF523B] font-normal ml-52">
            Cancel
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisplayPhoto;
