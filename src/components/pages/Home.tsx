import { ProviderProps, useRef, useState, useContext } from "react";
import ButtonBasic from "../buttons/ButtonBasic";
import InputBasic from "../inputs/InputBasic";
import CountDown from "../timings/CountDown";
import { ImMenu } from "react-icons/im";
import { BiReceipt } from "react-icons/bi";
import { AiFillApple } from "react-icons/ai";
import { BsFillCreditCardFill } from "react-icons/bs";
import { slide as Menu, State } from "react-burger-menu";
import useStorageHook from "../../hooks/useStorageHook";
import {
  CardDetailsType,
  CardDisplayInfoType,
  StorageContextType,
  SummaryType,
} from "../../@types/type";
import SavedCard from "../others/SavedCard";
import MainForm from "../others/MainForm";
import CardsListing from "../others/CardsListing";
import StorageContext from "../../context/StorageProvider";

const Home = () => {
  const [showSavedCards, setShowSavedCards] = useState(false);
  const [showCardDetails, setShowCardsDetails] = useState(false);
  const [cardDisplayInfo, setCardDisplayInfo] = useState<CardDisplayInfoType>({
    name: "",
    cardNumber: "",
    expiryDate: "",
    cardType: "",
  });

  const { savedCards, setSavedCards } = useStorageHook();

  const productSummaryData = [
    {
      title: "Company",
      value: "Apple",
      icon: "apple",
    },
    {
      title: "Product",
      value: "MacBook Air",
    },
    {
      title: "VAT(20%)",
      value: "$100.00",
    },
  ];

  const ProductSummary = ({ summary }: SummaryType) => {
    return (
      <div className="flex justify-between items-center text-sm">
        <p className="text-clrGreyPry font-semibole ">{summary.title}</p>
        <div className="text-clrDark text-left flex items-center gap-2 font-bold">
          {summary.icon === "apple" ? (
            <div className="rounded-full w-5 h-5 bg-clrDark flex items-center justify-center">
              <AiFillApple size={15} color={"#fff"} />
            </div>
          ) : null}
          <p>{summary.value}</p>
        </div>
      </div>
    );
  };

  console.log("all cards: ", savedCards);

  // for card input

  return (
    <main className="relative flex flex-col md:flex-row md:gap-[5%] ">
      <div className="md:flex-1">
        <div className="relative flex justify-between items-center mb-80 md:mb-10">
          <div className="flex items-center gap-2">
            <div className="relative rounded-full bg-clrBluePry w-12 h-12 flex items-center justify-center">
              <BsFillCreditCardFill
                size={20}
                color={"#fff"}
                className="transform -rotate-12"
              />
            </div>
            <p className="text-clrDark text-xl">
              <span className="font-bold">AceCoin</span>Pay
            </p>
          </div>
          <div className="relative"></div>
        </div>

        <div>
          <MainForm />
        </div>
      </div>
      <div className="absolute md:relative w-full top-20 md:top-0  md:max-w-[30%] md:flex md:flex-col ">
        <div className="relative md:static">
          <ButtonBasic
            displayName="Cards"
            stylings={
              "mb-5 md:mb-10 mx-auto h-[30px] md:h-[40px] max-w-[80px] bg-clrBluePry text-clrLight"
            }
            buttonClick={() => {
              console.log("cards button clicked=======");
              setShowSavedCards(true);
            }}
          />

          {showSavedCards && (
            <div className="absolute left-[50%] -translate-x-[50%] top-2 w-[80%] ">
              <CardsListing
                cardList={savedCards}
                setShowSavedCards={setShowSavedCards}
                setShowCardsDetails={setShowCardsDetails}
                setCardDisplayInfo={setCardDisplayInfo}
              />
            </div>
          )}
          {showCardDetails && (
            <div className="absolute left-[50%] -translate-x-[50%] top-2 w-[80%] ">
              <SavedCard
                cardDetails={cardDisplayInfo}
                setShowSavedCards={setShowSavedCards}
                setShowCardsDetails={setShowCardsDetails}
              />
            </div>
          )}
        </div>
        <div className="bg-[#F1F6F9] px-5 py-6 rounded-lg mb8 flex-1 md:flex md:flex-col  ">
          <div className="hidden md:flex md:flex-1 ">Hello there</div>
          <div>
            <div className="flex flex-col gap-2 md:gap-3">
              {productSummaryData.map((summary, index) => (
                <ProductSummary key={index} summary={summary} />
              ))}
            </div>
            <div className="relative">
              <div className="absolute w-6 h-6 rounded-full bg-white top-[50%] -translate-y-[50%] -left-8"></div>
              <hr className=" w-full bg-clrGreyPry border-dotted border-1 my-4  " />
              <div className="absolute w-6 h-6 rounded-full bg-white top-[50%] -translate-y-[50%] -right-8"></div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col text-sm">
                <p className="text-clrGreyPry">You have to Pay</p>
                <p className="text-clrDark text-2xl align-baseline font-bold ">
                  549
                  <span className="text-sm font-semibold">
                    .99 <span className="text-clrGreyPry">USD</span>
                  </span>
                </p>
              </div>
              <BiReceipt size={30} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
