import { useEffect } from "react";

type CardListProps = {
  cardList: object[];
};

const CardsListing = ({ cardList }: CardListProps) => {
  return (
    <div className="bg-white rounded-lg px-4 py-6">
      <h2>Available Cards</h2>
      <div></div>
    </div>
  );
};

export default CardsListing;
