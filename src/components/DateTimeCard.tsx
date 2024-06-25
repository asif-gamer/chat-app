interface DateTimeCardProps {
  month: string;
  date: string;
  year: string;
}
const DateTimeCard = ({ month, date, year }: DateTimeCardProps) => {
  return (
    <div className="flex bg-[#2b2e30] w-[127px] h-[36px] mx-auto items-center rounded-[8px]">
      <div className="items-center flex ml-[21px]  gap-1">
        <p className="text-[#FAFBFC] text-[14px]">{month}</p>
        <p className="text-[#FAFBFC] text-[14px]">{date},</p>
        <p className="text-[#FAFBFC] text-[14px]">{year}</p>
      </div>
    </div>
  );
};

export default DateTimeCard;
