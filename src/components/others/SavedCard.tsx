import { FcSimCardChip } from "react-icons/fc";
import { BiWifi } from "react-icons/bi";
import { SiMastercard } from "react-icons/si";
import BulletPointer from "./BulletPointer";
import { CardDetailsType, CardDisplayInfoType } from "../../@types/type";

type CardDetailsPropType = {
  cardDetails: CardDisplayInfoType;
  setShowSavedCards: React.Dispatch<React.SetStateAction<boolean>>;
  setShowCardsDetails: React.Dispatch<React.SetStateAction<boolean>>;
};

const SavedCard = ({
  cardDetails,
  setShowSavedCards,
  setShowCardsDetails,
}: CardDetailsPropType) => {
  return (
    <div className="px-3 pt-6 pb-4 rounded-xl bg-white bg-opacity-90 flex flex-col gap-[120px] ">
      <div className="flex items-center justify-between ">
        <button
          onClick={() => {
            console.log("Buuttton clicked!!!");
            setShowCardsDetails(false);
            setShowSavedCards(true);
          }}
        >
          <FcSimCardChip size={40} />
        </button>

        <BiWifi size={20} />
      </div>
      <div>
        <div>
          <p className="text-xs text-clrDark">{cardDetails.name}</p>
          <div className="text-sm text-clrDark font-bold flex items-center gap-2">
            <div className="flex gap-1 ">
              <BulletPointer styling={"w-[6px] h-[6px]"} />
              <BulletPointer styling={"w-[6px] h-[6px]"} />
              <BulletPointer styling={"w-[6px] h-[6px]"} />
              <BulletPointer styling={"w-[6px] h-[6px]"} />
            </div>
            <p className="font-bold">{cardDetails.cardNumber.slice(-4)}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-clrDark font-bold">
            {cardDetails.expiryDate.slice(0, 2)}/
            {cardDetails.expiryDate.slice(-2)}
          </p>
          <div className="flex flex-col items-center justify-center">
            <SiMastercard size={30} />
            <p className="text-[8px] leading-[100%] text-clrDark ">
              {cardDetails.cardType === "masterCard"
                ? "Master Card"
                : cardDetails.cardType === "visa"
                ? "Visa"
                : "Express"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedCard;
