import { useEffect } from "react";
import { SavedCardsType } from "../../@types/type";
import BulletPointer from "./BulletPointer";
import useStorageHook from "../../hooks/useStorageHook";

type CardListType = {
  cardList: SavedCardsType[];
};

const CardsListing = ({ cardList }: CardListType) => {
  const { setCardNumberExpiry, setCardDetails } = useStorageHook();

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
  };

  return (
    <div className="bg-white rounded-lg px-4 py-6">
      <h2>Available Cards</h2>
      <ul>
        {cardList.map((card) => (
          <li key={card.id}>
            <button onClick={() => handleCardClick(card)}>
              <p>
                {card.firstName} {card.lastName}
              </p>
              <div className="flex items-center justify-center gap-3 ">
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
    </div>
  );
};

export default CardsListing;
