import { useEffect, useMemo, useRef, useState } from "react";

type InputBasicProps = {
  label: string;
  inputFor: string;
  hint: string;
  isLabelSide: boolean;
  // type: string;
  placeholder: string;
  isPassword: boolean;
  errorMsg: string;
  value: string;
  valueChange: React.ChangeEventHandler<HTMLInputElement>;
  centralize: boolean;
  inputType?: string;
  // ref: React.MutableRefObject<null>;
  // children:
};

const InputCardNumber = ({
  label,
  hint,
  isLabelSide,
  inputFor,
  // type,
  isPassword,
  placeholder,
  errorMsg = "",
  value,
  valueChange,
  inputType,
}: // ref,
InputBasicProps) => {
  // let totalPart = "";

  // const [gottenValue, setGottenValue] = useState("");
  // const [sampledValue, setSampledValue] = useState("")

  // let newValue = "";

  // useEffect(() => {
  //   if (inputType === "card-number") {
  //     const firstPart: string[] = [];
  //     const secondPart: string[] = [];
  //     const thirdPart: string[] = [];
  //     const fourthPart: string[] = [];
  //     const rawValue = value;

  //     if (value.length >= 0) {
  //       firstPart.push(rawValue.slice(0, 4));
  //       secondPart.push(rawValue.slice(4, 8));
  //       thirdPart.push(rawValue.slice(8, 12));
  //       fourthPart.push(rawValue.slice(12, 16));

  //       // const totalPart =
  //       //   firstPart[0] + secondPart[0] + thirdPart[0] + fourthPart[0];
  //       if (secondPart[0].length <= 0) {
  //         const newValue = firstPart[0].charAt(firstPart[0].length - 1);
  //         setGottenValue(gottenValue + newValue);
  //       } else if (secondPart.length > 0 && thirdPart[0].length <= 0) {
  //         if (secondPart[0].length === 1) {
  //           const newValue =
  //             " - " + secondPart[0].charAt(secondPart[0].length - 1);
  //           setGottenValue(gottenValue + newValue);
  //         } else {
  //           const newValue =
  //             gottenValue + secondPart[0].charAt(secondPart[0].length - 1);
  //           setGottenValue(gottenValue + newValue);
  //         }
  //       }
  //     }

  //     // newValue = rawValue;
  //   } else {
  //     // setNewValue(value);
  //   }
  // }, [inputType, value]);

  // useEffect(() => {
  //   console.log("the value: ", value);
  //   console.log("the length of value: ", value.length);
  //   console.log("the gottenValue: ", gottenValue);
  //   // const sampledValue = [];
  //   if (value.length >= 0) {
  //     // const rawValue = value;

  //     if (rawValue.length <= 4) {
  //       if (rawValue.length > gottenValue.length) {
  //         const newValue = rawValue.charAt(rawValue.length - 1);
  //         setGottenValue((prev) => prev + newValue);
  //       } else if (rawValue.length < gottenValue.length) {
  //         setGottenValue((prev) => prev.substring(0, prev.length - 1));
  //       }
  //     } else if (rawValue.length === 5) {
  //       if (rawValue.length > gottenValue.length) {
  //         const newValue = " - " + rawValue.charAt(rawValue.length - 1);
  //         setGottenValue((prev) => prev + newValue);
  //       } else if (rawValue.length < gottenValue.length) {
  //         setGottenValue((prev) => prev.substring(0, prev.length - 1));
  //       }
  //     }
  //     // setGottenValue(rawValue);
  //     console.log("vallllueeee: ", value);
  //   }
  // }, [value]);

  // useEffect(() => {
  //   const newValue = n.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1-$2-$3-$4");
  //   setGottenValue(newValue);
  // }, [value]);

  // const inputRef = useRef(null);

  // const handleKeyUp = (e: {
  //   target: { value: string | unknown[]; maxLength: number };
  //   // target: any;
  // }) => {
  //   if (e.target.value.length === e.target.maxLength) {
  //     if (inputRef.current !== null && inputRef?.current !== undefined) {
  //       // inputRef?.current?.nextSibling?.focus();
  //       console.log("the inputRef.current value:", inputRef?.current);
  //     }
  //   }
  // };

  return (
    <>
      <div
        className={`relative flex mb-5  ${
          isLabelSide
            ? "flex-col gap-4 md:flex-row md:justify-between"
            : "flex-col gap-4"
        }`}
      >
        <label htmlFor={inputFor} className="flex flex-col gap-1">
          <p className="text-sm text-clrDark font-bold">{label}</p>
          <p className="text-xs text-clrGreyPry">{hint}</p>
        </label>
        <div
          className={`w-full rounded-md border-solid border border-clrGreyPry border-opacity-50 flex items-center h-12 pl-[5%] pr-[10%] focus:border-clrBluePry focus:outline-clrBluePry focus:bg-clrBluePry focus:bg-opacity-5 focus:outline-1 text-clrDark text-sm gap-1 ${
            isLabelSide ? "md:max-w-[63%]" : ""
          }`}
        >
          <input
            type={"text"}
            id={`${inputFor}-1`}
            placeholder={placeholder}
            value={value}
            onChange={valueChange}
            className={` w-max`}
            maxLength={3}
            // onKeyUp={handleKeyUp}
            // ref={ref}
          />
          <p> - </p>
          <input
            type={"text"}
            id={`${inputFor}-2`}
            placeholder={placeholder}
            value={value}
            onChange={valueChange}
            className={``}
            maxLength={3}
            // onKeyUp={handleKeyUp}
            // ref={ref}
          />
          <p> - </p>
          <input
            type={"text"}
            id={`${inputFor}-3`}
            placeholder={placeholder}
            value={value}
            onChange={valueChange}
            className={``}
            maxLength={3}
            // onKeyUp={handleKeyUp}
            // ref={ref}
          />
          <p> - </p>
          <input
            type={"text"}
            id={`${inputFor}-4`}
            placeholder={placeholder}
            value={value}
            onChange={valueChange}
            className={``}
            maxLength={3}
            // onKeyUp={handleKeyUp}
            // ref={ref}
          />
        </div>
      </div>
      <p className="text-clrDanger text-xs">{errorMsg}</p>
    </>
  );
};

export default InputCardNumber;
