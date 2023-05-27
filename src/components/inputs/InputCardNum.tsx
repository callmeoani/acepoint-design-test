import { useRef } from "react";

const InputCardNum = () => {
  const inputRef = useRef(null);

  console.log("the input ref: ", inputRef.current);
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
        className={`w-full rounded-md border-solid border border-clrGreyPry border-opacity-50 flex items-center h-12 pl-[5%] pr-[10%] focus:border-clrBluePry focus:outline-clrBluePry focus:bg-clrBluePry focus:bg-opacity-5 focus:outline-1 text-clrDark text-sm gap-1 
      focus-within:border-clrBluePry focus-within:outline-clrBluePry focus-within:bg-clrBluePry focus-within:bg-opacity-5 focus-within:outline-1
      `}
      >
        <input
          type="text"
          placeholder="1234"
          maxLength={4}
          minLength={0}
          onKeyUp={handleKeyUp}
          ref={inputRef}
          className="cardNum max-w-[36px] bg-transparent outline-none border-none focus:outline-none"
        />
        <p>-</p>
        <input
          type="text"
          placeholder="3456"
          maxLength={4}
          minLength={0}
          onKeyUp={handleKeyUp}
          className="cardNum max-w-[36px] bg-transparent outline-none border-none focus:outline-none"
        />
        <p>-</p>
        <input
          type="text"
          placeholder="5678"
          maxLength={4}
          minLength={0}
          onKeyUp={handleKeyUp}
          className="cardNum max-w-[36px] bg-transparent outline-none border-none focus:outline-none"
        />
        <p>-</p>
        <input
          type="text"
          placeholder="7890"
          maxLength={4}
          minLength={0}
          onKeyUp={handleKeyUp}
          className="cardNum max-w-[36px] bg-transparent outline-none border-none focus:outline-none"
        />
      </div>
    </div>
  );
};

export default InputCardNum;
