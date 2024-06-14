interface DeleteCancelProps {
  name: string;
  message: string;
}

const DeleteCancel = ({ name, message }: DeleteCancelProps) => {
  return (
    <div className="flex justify-between h-[68px] px-5 w-full items-center  rounded-b-2xl mt-14">
      <div
        style={{}}
        className={`${
          true ? "" : ""
        } flex flex-row h-[80px] w-full bg-[#212426] space-x-5 items-center py-2.5  rounded-[18px]`}
      >
        <div className="flex items-center w-full justify-between mx-auto px-6">
          <div className="flex flex-col gap-1.5">
            <p className="text-[14px] text-white ">{name}</p>
            <p className="text-[14px] text-white">{message}</p>
          </div>
          <div className="flex gap-[12px]  mt-4">
            <button className="bg-[#2B2E30] w-[67px] h-[32px] text-[14px]  text-white rounded-[8px] ">
              Delete
            </button>
            <button className="bg-[#2B2E30] w-[67px] h-[32px] text-[14px]  text-white rounded-[8px] ">
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteCancel;
