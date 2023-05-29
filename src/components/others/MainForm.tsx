import { useState } from "react";
import InputCardNum from "../inputs/InputCardNum";
import InputBasic from "../inputs/InputBasic";
import InputExpiryDate from "../inputs/InputExpiryDate";
import ButtonBasic from "../buttons/ButtonBasic";
import useStorageHook from "../../hooks/useStorageHook";

import { HiPencil } from "react-icons/hi";

const MainForm = () => {
  const { cardDetails, setCardDetails, editOn, setEditOn, savedCardUsed } =
    useStorageHook();

  const handlePayNow = (e: any) => {
    e.preventDefault();
  };
  const handleUpdateCard = (e: any) => {
    e.preventDefault();
  };

  return (
    <form className="relative bg-gre-400">
      <div>
        <InputCardNum
        // totalCardNumber={cardNumber}
        // setTotalCardNumber={setCardNumber}
        // totalCardNumber={cardDetails.cardNumber}
        // setTotalCardNumber={setCardDetails}
        />
      </div>
      <div>
        <InputBasic
          label="CVV Number"
          hint="Enter the 3 or 4 digit number on the card"
          isLabelSide={true}
          inputFor="cvv-number"
          placeholder="123"
          minInput={3}
          maxInput={4}
          value={cardDetails.cvv}
          valueChange={(e) => {
            setCardDetails((prev) => ({
              ...prev,
              cvv: e.target.value,
            }));
          }}
          isPassword={false}
          centralize={true}
          errorMsg={""}
        />
      </div>

      <InputExpiryDate
        label="Expiry Date"
        hint="Enter the 3 or 4 digit number on the card"
        isLabelSide={true}
        errorMsg=""
        totalValue={cardDetails.expiryDate}
        setTotalValue={setCardDetails}
      />
      <div>
        <InputBasic
          label="Password"
          hint="Enter your Dynamic password"
          isLabelSide={true}
          inputFor="password"
          placeholder="password"
          value={cardDetails.password}
          valueChange={(e) =>
            setCardDetails((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
          isPassword={true}
          centralize={true}
          errorMsg={""}
        />
      </div>

      {editOn && savedCardUsed ? (
        <ButtonBasic
          displayName="Update Card"
          stylings={"h-[50px] md:h-[60px] text-clrLight bg-clrBluePry"}
          buttonClick={(e: any) => handleUpdateCard(e)}
        />
      ) : (
        <ButtonBasic
          displayName="Pay Now"
          stylings={"h-[50px] md:h-[60px] text-clrLight bg-clrBluePry"}
          buttonClick={(e: any) => handlePayNow(e)}
        />
      )}

      {savedCardUsed && (
        <div className="absolute top-2 right-0">
          {editOn ? (
            <div className="flex flex-col md:flex-row items-center gap-2">
              <ButtonBasic
                displayName="Cancel"
                stylings=" text-red-400 text-xs md:text-sm"
                buttonClick={() => {
                  setEditOn(false);
                }}
              />
            </div>
          ) : (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault;
                setEditOn(true);
              }}
              className="flex items-center gap-1"
            >
              <HiPencil size={20} color={"#2F58CD"} />
              <p className="text-clrBluePry text-sm font-bold ">Edit</p>
            </button>
          )}
        </div>
      )}
    </form>
  );
};

export default MainForm;
