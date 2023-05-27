export type SummaryType = {
  key: number;
  summary: { title: string; value: string; icon?: string };
};

export type SavedCardsType = {
  firstName: string;
  lastName: string;
  cardNumber: string;
  cvv: string;
  expiryDate: string;
  password: string;
};

export type StorageContextType = {
  savedCards: SavedCardsType[];
  setSavedCards: React.Dispatch<React.SetStateAction<SavedCardsType[]>>;
};
