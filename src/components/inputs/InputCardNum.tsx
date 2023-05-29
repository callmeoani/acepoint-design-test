import { useRef, useState, useEffect } from "react";
import { CardDetailsType } from "../../@types/type";
import useStorageHook from "../../hooks/useStorageHook";

type InputCardNumProps = {
  totalCardNumber: string;
  // setTotalCardNumber: React.Dispatch<React.SetStateAction<string>>;
  setTotalCardNumber: React.Dispatch<React.SetStateAction<CardDetailsType>>;
};

const InputCardNum = () => {
  const { cardNumberExpiry, setCardNumberExpiry, editOn } = useStorageHook();
  const inputRef = useRef<HTMLInputElement>(null);
  const secondRef = useRef<HTMLInputElement>(null);
  const thirdRef = useRef<HTMLInputElement>(null);
  const fourthRef = useRef<HTMLInputElement>(null);

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
    <div className={`relative flex mb-5 flex-col gap-4`}>
      <label htmlFor={"card-number"} className="flex flex-col gap-1">
        <p className="text-sm text-clrDark font-bold">Card Number</p>
        <p className="text-xs text-clrGreyPry">
          Enter the 16-digit card number on the card
        </p>
      </label>
      <div
        onClick={(e) => {
          let current = document.querySelector(".cardNum");
          if (editOn && current instanceof HTMLElement) {
            // while (current && current.tagName !== "INPUT") {
            console.log("just before the while loop: ", current);
            console.log(
              "just before the while loop, the tagName: ",
              current?.tagName
            );

            // current = current.nextElementSibling;
            while (current) {
              if (current?.tagName === "INPUT") {
                if (
                  current?.getAttribute("value")?.length ===
                  Number(current?.getAttribute("maxLength"))
                ) {
                  if (
                    current.nextElementSibling !== undefined &&
                    current.nextElementSibling !== null
                  ) {
                    current = current.nextElementSibling;
                    continue;
                  } else {
                    current = document.querySelector(".cardNum");
                    if (current instanceof HTMLElement) {
                      current?.focus();
                      break;
                    }
                  }
                  // break;
                } else {
                  if (current instanceof HTMLElement) {
                    current?.focus();
                    break;
                  }
                }
              } else {
                current = current.nextElementSibling;
                continue;
                // break;
              }

              console.log("the reeeealll element ", current);
            }
          } else {
            current = document.querySelector(".cardNum");
            if (current instanceof HTMLElement) {
              if (current?.tagName === "INPUT") {
                current.focus();
              }
            }
          }
          e.stopPropagation();
        }}
        className={`w-full rounded-md border-solid border border-clrGreyPry border-opacity-50 flex items-center h-12 pl-[5%] pr-[10%] focus:border-clrBluePry focus:outline-clrBluePry focus:bg-clrBluePry focus:bg-opacity-5 focus:outline-1 text-clrDark text-sm gap-2 
        focus-within:border-clrBluePry focus-within:outline-clrBluePry focus-within:bg-clrBluePry focus-within:bg-opacity-5 focus-within:outline-1 ${
          editOn ? "" : "bg-[#EFEFEF4D]"
        }
      `}
      >
        <input
          disabled={!editOn}
          type="text"
          placeholder="1234"
          maxLength={4}
          minLength={0}
          onKeyUp={handleKeyUp}
          ref={inputRef}
          value={cardNumberExpiry.numFirstPart}
          onChange={(e) =>
            setCardNumberExpiry((prev) => ({
              ...prev,
              numFirstPart: e.target.value,
            }))
          }
          onClick={(e) => {
            if (inputRef !== null && inputRef !== undefined) {
              inputRef?.current?.focus();
            }
            e.stopPropagation();
          }}
          className={`cardNum w-8 bg-transparent outline-none border-none focus:outline-none tracking-wide  ${
            !editOn ? "text-gray-400" : ""
          }`}
        />
        <div
          className={`text-clrDark font-bold text-center flex items-center justify-center ${
            !editOn ? "text-gray-400" : ""
          }`}
        >
          -
        </div>
        <input
          disabled={!editOn}
          type="text"
          placeholder="3456"
          maxLength={4}
          minLength={0}
          onKeyUp={handleKeyUp}
          ref={secondRef}
          value={cardNumberExpiry.numSecondPart}
          onChange={(e) =>
            setCardNumberExpiry((prev) => ({
              ...prev,
              numSecondPart: e.target.value,
            }))
          }
          onClick={(e) => {
            if (secondRef !== null && secondRef !== undefined) {
              secondRef?.current?.focus();
            }
            e.stopPropagation();
          }}
          className={`w-8 bg-transparent outline-none border-none focus:outline-none tracking-wide  ${
            !editOn ? "text-gray-400" : ""
          }`}
        />
        <div
          className={`text-clrDark font-bold text-center flex items-center justify-center ${
            !editOn ? "text-gray-400" : ""
          }`}
        >
          -
        </div>
        <input
          disabled={!editOn}
          type="text"
          placeholder="5678"
          maxLength={4}
          minLength={0}
          onKeyUp={handleKeyUp}
          ref={thirdRef}
          value={cardNumberExpiry.numThirdPart}
          onChange={(e) =>
            setCardNumberExpiry((prev) => ({
              ...prev,
              numThirdPart: e.target.value,
            }))
          }
          onClick={(e) => {
            if (thirdRef !== null && thirdRef !== undefined) {
              thirdRef?.current?.focus();
            }
            e.stopPropagation();
          }}
          className={`w-8 bg-transparent outline-none border-none focus:outline-none tracking-wide  ${
            !editOn ? "text-gray-400" : ""
          }`}
        />
        <div
          className={`text-clrDark font-bold text-center flex items-center justify-center ${
            !editOn ? "text-gray-400" : ""
          }`}
        >
          -
        </div>
        <input
          disabled={!editOn}
          type="text"
          placeholder="7890"
          maxLength={4}
          minLength={0}
          onKeyUp={handleKeyUp}
          ref={fourthRef}
          value={cardNumberExpiry.numFourthPart}
          onChange={(e) =>
            setCardNumberExpiry((prev) => ({
              ...prev,
              numFourthPart: e.target.value,
            }))
          }
          onClick={(e) => {
            if (fourthRef !== null && fourthRef !== undefined) {
              fourthRef?.current?.focus();
            }
            e.stopPropagation();
          }}
          className={`w-8 bg-transparent outline-none border-none focus:outline-none tracking-wide  ${
            !editOn ? "text-gray-400" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default InputCardNum;
