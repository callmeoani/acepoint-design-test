import { useRef, useState, useEffect } from "react";
import { CardDetailsType } from "../../@types/type";
import useStorageHook from "../../hooks/useStorageHook";

type InputExpiryDateProps = {
  label: string;
  hint: string;
  isLabelSide: boolean;
  totalValue: string;
  setTotalValue: React.Dispatch<React.SetStateAction<CardDetailsType>>;
  errorMsg: string;
};

const InputExpiryDate = ({
  label,
  hint,
  isLabelSide,
  errorMsg,
}: InputExpiryDateProps) => {
  const inputRef = useRef(null);
  const { cardNumberExpiry, setCardNumberExpiry, editOn } = useStorageHook();

  const handleKeyUp = (e: any) => {
    if (e.target.value.length === e.target.maxLength) {
      if (inputRef !== null && inputRef.current !== null) {
        console.log("the current event.target: ", e.target.nextElementSibling);
        let current = e.target.nextElementSibling;
        while (current && current.tagName !== "INPUT") {
          current = current.nextElementSibling;
        }
        if (current instanceof HTMLElement) {
          current.focus();
        }
      }
    }
    if (e.target.value.length === e.target.minLength) {
      if (inputRef.current !== null && inputRef.current !== null) {
        console.log(
          "the current event.target: ",
          e.target.previousElementSibling
        );
        let current = e.target.previousElementSibling;
        console.log("here is the prev sibling", current);
        while (current && current.tagName !== "INPUT") {
          current = current.previousElementSibling;
        }
        if (current instanceof HTMLElement) {
          current.focus();
        }
      }
    }
  };

  return (
    <>
      <div
        className={`relative flex mb-5 md:mb-7 ${
          isLabelSide
            ? "flex-col gap-4 md:flex-row md:justify-between"
            : "flex-col gap-4"
        }`}
      >
        <label htmlFor={"expiry-date"} className="flex flex-col gap-1">
          <p className="text-sm text-clrDark font-bold">{label}</p>
          <p className="text-xs text-clrGreyPry">{hint}</p>
        </label>
        <div
          className="flex justify-between gap-4 items-center w-full md:max-w-[63%] "
          id="expiry-date"
        >
          <input
            disabled={!editOn}
            type="text"
            placeholder="12"
            maxLength={2}
            minLength={0}
            onKeyUp={handleKeyUp}
            ref={inputRef}
            value={cardNumberExpiry.expiryFirstPart}
            onChange={(e) =>
              setCardNumberExpiry((prev) => ({
                ...prev,
                expiryFirstPart: e.target.value,
              }))
            }
            className={`w-full rounded-md border-solid border border-clrGreyPry border-opacity-50 flex items-center h-12 pl-[5%] pr-[10%] focus:border-clrBluePry focus:outline-clrBluePry focus:bg-clrBluePry focus:bg-opacity-5 focus:outline-1 text-clrDark text-sm text-center ${
              isLabelSide ? "md:max-w-[63%]" : ""
            } ${!editOn ? "text-gray-400" : ""}`}
          />
          <p className="text-clrDark font-bold">/</p>
          <input
            disabled={!editOn}
            type="text"
            placeholder="21"
            maxLength={2}
            minLength={0}
            onKeyUp={handleKeyUp}
            ref={inputRef}
            value={cardNumberExpiry.expirySecondPart}
            onChange={(e) =>
              setCardNumberExpiry((prev) => ({
                ...prev,
                expirySecondPart: e.target.value,
              }))
            }
            className={`w-full rounded-md border-solid border border-clrGreyPry border-opacity-50 flex items-center h-12 pl-[5%] pr-[10%] focus:border-clrBluePry focus:outline-clrBluePry focus:bg-clrBluePry focus:bg-opacity-5 focus:outline-1 text-clrDark text-sm text-center ${
              isLabelSide ? "md:max-w-[63%]" : ""
            } ${!editOn ? "text-gray-400" : ""}`}
          />
        </div>
      </div>
      <p className="text-clrDanger text-xs">{errorMsg}</p>
    </>
  );
};

export default InputExpiryDate;
