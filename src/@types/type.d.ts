export type SummaryType = {
  key: number;
  summary: { title: string; value: string; icon?: string };
};

export type SavedCardsType = {
  id: string;
  firstName: string;
  lastName: string;
  cardNumber: string;
  cvv: string;
  cardType: string;
  expiryDate: string;
  password: string;
};

export type CardDetailsType = {
  cardNumber: string;
  cvv: string;
  expiryDate: string;
  password: string;
};

// export type EditOnType = boolean

export type CardNumberExpiryType = {
  numFirstPart: string;
  numSecondPart: string;
  numThirdPart: string;
  numFourthPart: string;
  expiryFirstPart: string;
  expirySecondPart: string;
};

export type StorageContextType = {
  savedCards: SavedCardsType[];
  setSavedCards: React.Dispatch<React.SetStateAction<SavedCardsType[]>>;
  cardDetails: CardDetailsType;
  setCardDetails: React.Dispatch<React.SetStateAction<CardDetailsType>>;
  cardNumberExpiry: CardNumberExpiryType;
  setCardNumberExpiry: React.Dispatch<
    React.SetStateAction<CardNumberExpiryType>
  >;
  editOn: boolean;
  setEditOn: React.Dispatch<React.SetStateAction<boolean>>;
  savedCardUsed: boolean;
  setSavedCardUsed: React.Dispatch<React.SetStateAction<boolean>>;
};

export type CardDisplayInfoType = {
  name: string;
  cardNumber: string;
  expiryDate: string;
  cardType: string;
};
