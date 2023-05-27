import { FcSimCardChip } from "react-icons/fc";
import { BiWifi } from "react-icons/bi";
import { SiMastercard } from "react-icons/si";
import BulletPointer from "./BulletPointer";
const SavedCard = () => {
  return (
    <div className="px-3 pt-6 pb-4 rounded-xl bg-white bg-opacity-90 flex flex-col gap-[120px] ">
      <div className="flex items-center justify-between ">
        <FcSimCardChip size={40} color={"#f00"} />
        <BiWifi size={20} />
      </div>
      <div>
        <div>
          <p className="text-xs text-clrDark">Jonathan Michael</p>
          <div className="text-sm text-clrDark font-bold flex items-center gap-2">
            <div className="flex gap-1 ">
              <BulletPointer styling={"w-[6px] h-[6px]"} />
              <BulletPointer styling={"w-[6px] h-[6px]"} />
              <BulletPointer styling={"w-[6px] h-[6px]"} />
              <BulletPointer styling={"w-[6px] h-[6px]"} />
            </div>
            <p className="font-bold">3456</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p text-sm text-clrDark font-bold>
            09/22
          </p>
          <div className="flex flex-col items-center justify-center">
            <SiMastercard size={30} />
            <p className="text-[8px] leading-[100%] text-clrDark ">
              Master Card
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedCard;
