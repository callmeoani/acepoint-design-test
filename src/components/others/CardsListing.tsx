import { useEffect } from "react";
import {
  CardDetailsType,
  CardDisplayInfoType,
  SavedCardsType,
} from "../../@types/type";
import BulletPointer from "./BulletPointer";
import useStorageHook from "../../hooks/useStorageHook";
import { MdOutlineCancel } from "react-icons/md";

type CardListType = {
  cardList: SavedCardsType[];
  setShowSavedCards: React.Dispatch<React.SetStateAction<boolean>>;
  setShowCardsDetails: React.Dispatch<React.SetStateAction<boolean>>;
  setCardDisplayInfo: React.Dispatch<React.SetStateAction<CardDisplayInfoType>>;
};

const CardsListing = ({
  cardList,
  setShowSavedCards,
  setShowCardsDetails,
  setCardDisplayInfo,
}: CardListType) => {
  const { setCardNumberExpiry, setCardDetails, setSavedCardUsed, setEditOn } =
    useStorageHook();

  const handleCardClick = (card: SavedCardsType) => {
    setCardNumberExpiry((prev) => ({
      ...prev,
      expiryFirstPart: card.expiryDate.slice(0, 2),
      expirySecondPart: card.expiryDate.slice(-2),
      numFirstPart: card.cardNumber.slice(0, 5),
      numSecondPart: card.cardNumber.slice(5, 9),
      numThirdPart: card.cardNumber.slice(9, 13),
      numFourthPart: card.cardNumber.slice(-4),
    }));

    setCardDetails((prev) => ({
      ...prev,
      cvv: card.cvv,
      password: card.password,
    }));
    setSavedCardUsed(true);
    setEditOn(false);

    setCardDisplayInfo((prev) => ({
      ...prev,
      name: `${card.firstName} ${card.lastName}`,
      cardNumber: card.cardNumber,
      expiryDate: `${card.expiryDate}`,
      cardType: "masterCard",
    }));

    setShowSavedCards(false);
    setShowCardsDetails(true);
  };

  return (
    <div className="relative bg-white rounded-lg px-4 py-6 shadow-lg">
      <h2 className="text-xl font-bold mb-3">Your saved cards</h2>
      <ul className="flex flex-col gap-2">
        {cardList.map((card) => (
          <li
            key={card.id}
            className="border-b-solid border-b-clrLight border-b pb-2"
          >
            <button onClick={() => handleCardClick(card)}>
              <p className="text-sm md:text-base ">
                {card.firstName} {card.lastName}
              </p>
              <div className="flex items-center gap-3 ">
                <div className="flex items-center justify-center gap-1">
                  <BulletPointer styling="w-[6px] h-[6px]" />
                  <BulletPointer styling="w-[6px] h-[6px]" />
                  <BulletPointer styling="w-[6px] h-[6px]" />
                  <BulletPointer styling="w-[6px] h-[6px]" />
                </div>
                {card.cardNumber.slice(-4)}
              </div>
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => {
          setShowSavedCards(false);
        }}
        className="absolute top-3 right-3 text-clrDark opacity-40 hover:opacity-100 active:text-clrDanger "
      >
        <MdOutlineCancel
          size={30}
          // color="#16213E"
        />
      </button>
    </div>
  );
};

export default CardsListing;
