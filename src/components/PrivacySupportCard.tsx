interface PrivacySupportCardProps {
  privacydata: {
    title: string;
    symbol: string;
  }[];
}

const PrivacySupportCard = ({ privacydata }: PrivacySupportCardProps) => {
  return (
    <div className="flex flex-col gap-[10px] mt-3">
      <div className="flex justify-between items-center">
        <p className="text-white text-[14px]">Privacy & Support</p>
        <img
          src="/src/assets/downarrow.svg"
          alt="send"
          className="h-[7px] w-[14px]  "
        />
      </div>
      <div className="flex flex-col gap-[24px] mt-1.5">
        {privacydata.map((data) => (
          <div className="flex gap-[12px]">
            <img src={data.symbol} alt="chat1" className="h-[20px] w-[20px] " />
            <p className="text-[#B5B9BD] text-[14px]">{data.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacySupportCard;
