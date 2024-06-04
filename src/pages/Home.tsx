const Home = () => {
  return (
    <div className=" flex flex-col w-[616px] h-[365px] rounded-3xl mt-[106px] bg-[#171717]">
      <div className=" flex items-center justify-between  px-[40px] z-50 bg-[#232628] rounded-t-3xl h-[64px]  shadow-btm-border">
        <div className="flex items-center gap-4">
          <img
            src="/src/assets/arrow.svg"
            alt="arrow"
            className="w-[8.5px] h-[18px]"
          />
          <p className="text-[20px] text-white font-normal">New Message</p>
        </div>

        <img
          src="/src/assets/cross.svg"
          alt="cross"
          className="w-[16px] h-[16px] font-semibold justify-end"
        />
      </div>
      <div className="flex justify-between  items-center px-[75px] py-12 -mt-2  ">
        <div className=" flex flex-col gap-5 items-center justify-center w-[210px] h-[210px] bg-[#1b2430]   colorful-border">
          <img
            src="/src/assets/send.png"
            alt="plus"
            className="w-[108px] h-[104px] "
          />
          <p className="text-lg font-normal text-white">Dirct Message</p>
        </div>
        <div className="flex flex-col gap-5 items-center justify-center w-[210px] h-[210px] rounded-sm   custom-border ">
          <img
            src="/src/assets/groupImg.png"
            alt="plus"
            className="w-[108px] h-[104px] "
          />
          <p className="text-lg font-normal text-white">Create Group</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
