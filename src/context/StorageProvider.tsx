import { createContext, useState, useEffect } from "react";
import { State } from "react-burger-menu";
import {
  CardDetailsType,
  CardNumberExpiryType,
  SavedCardsType,
  StorageContextType,
} from "../@types/type";

type Props = {
  children: JSX.Element;
};

// type ValueProps = {
//   isMenuOpen: boolean;
//   toggleMenu: () => void;
//   stateChangeHandler: (newState: State) => void;
// };

const StorageContext = createContext<StorageContextType | null>(null);

export const StorageProvider = ({ children }: Props) => {
  const sampleCards = [
    {
      id: "1",
      firstName: "Abdulhameed",
      lastName: "Muhammed",
      cardNumber: "2323545434545678",
      cvv: "456",
      cardType: "master",
      expiryDate: "2225",
      password: "password",
    },
    {
      id: "2",
      firstName: "Abidemi",
      lastName: "Muhammed",
      cardNumber: "2323545434545987",
      cvv: "496",
      cardType: "visa",
      expiryDate: "1130",
      password: "password",
    },
  ];

  const [savedCards, setSavedCards] = useState<SavedCardsType[]>(sampleCards);
  const [cardNumberExpiry, setCardNumberExpiry] =
    useState<CardNumberExpiryType>({
      numFirstPart: "",
      numSecondPart: "",
      numThirdPart: "",
      numFourthPart: "",
      expiryFirstPart: "",
      expirySecondPart: "",
    });
  const [cardDetails, setCardDetails] = useState<CardDetailsType>({
    cardNumber: "",
    cvv: "",
    expiryDate: "",
    password: "",
  });
  const [editOn, setEditOn] = useState<boolean>(true);
  const [savedCardUsed, setSavedCardUsed] = useState<boolean>(false);

  useEffect(() => {
    setCardDetails((prev) => ({
      ...prev,
      cardNumber: `${cardNumberExpiry.numFirstPart}${cardNumberExpiry.numSecondPart}${cardNumberExpiry.numThirdPart}${cardNumberExpiry.numFourthPart}`,
      expiryDate: `${cardNumberExpiry.expiryFirstPart} / ${cardNumberExpiry.expirySecondPart}`,
    }));
  }, [cardNumberExpiry]);

  return (
    <StorageContext.Provider
      value={{
        savedCards,
        setSavedCards,
        cardDetails,
        setCardDetails,
        cardNumberExpiry,
        setCardNumberExpiry,
        editOn,
        setEditOn,
        savedCardUsed,
        setSavedCardUsed,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};

export default StorageContext;
