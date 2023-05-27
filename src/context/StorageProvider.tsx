import { createContext, useState } from "react";
import { State } from "react-burger-menu";
import { SavedCardsType, StorageContextType } from "../@types/type";

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
      firstName: "Abdulhameed",
      lastName: "Muhammed",
      cardNumber: "2323545434545678",
      cvv: "456",
      expiryDate: "2225",
      password: "password",
    },
    {
      firstName: "Abidemi",
      lastName: "Muhammed",
      cardNumber: "2323545434545987",
      cvv: "496",
      expiryDate: "1125",
      password: "password",
    },
  ];

  const [savedCards, setSavedCards] = useState<SavedCardsType[]>(sampleCards);

  return (
    <StorageContext.Provider
      value={{
        savedCards,
        setSavedCards,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};

export default StorageContext;
