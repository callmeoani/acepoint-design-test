import { useEffect, useMemo, useState } from "react";

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
  // children:
};

const InputBasic = ({
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
}: InputBasicProps) => {
  // let totalPart = "";
  const [gottenValue, setGottenValue] = useState("");

  // let newValue = "";
  console.log("the value: ", value);
  console.log("the length of value: ", value.length);
  console.log("the value: ", value);
  console.log("the gottenValue: ", gottenValue);

  useEffect(() => {
    if (inputType === "card-number") {
      const firstPart: string[] = [];
      const secondPart: string[] = [];
      const thirdPart: string[] = [];
      const fourthPart: string[] = [];
      const rawValue = value;

      if (value.length >= 0) {
        firstPart.push(rawValue.slice(0, 4));
        secondPart.push(rawValue.slice(4, 8));
        thirdPart.push(rawValue.slice(8, 12));
        fourthPart.push(rawValue.slice(12, 16));

        // const totalPart =
        //   firstPart[0] + secondPart[0] + thirdPart[0] + fourthPart[0];
        if (secondPart[0].length <= 0) {
          const newValue = firstPart[0].charAt(firstPart[0].length - 1);
          setGottenValue(newValue);
        } else if (secondPart.length > 0 && thirdPart[0].length <= 0) {
          // if (secondPart.length === 1) {
          //   setGottenValue(gottenValue + " - " + secondPart[0].charAt(0));
          // } else {
          //   const newValue =
          //     gottenValue + secondPart[0].charAt(secondPart[0].length - 1);
          //   setGottenValue(newValue);
          // }
        }

        // else if (value.length > 8 && value.length <= 12) {
        //   const newValue =
        //     firstPart[0] + " - " + secondPart[0] + " - " + thirdPart[0];
        //   setGottenValue(newValue);
        // }

        // else if (value.length > 12 && value.length <= 16) {
        //   const newValue =
        //     firstPart[0] +
        //     " - " +
        //     secondPart[0] +
        //     " - " +
        //     thirdPart[0] +
        //     " - " +
        //     fourthPart[0];
        //   setGottenValue(newValue);
        // }
      }

      // newValue = rawValue;
    } else {
      // setNewValue(value);
    }
  }, [inputType, value]);

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
        <input
          type={isPassword ? "password" : "string"}
          id={inputFor}
          placeholder={placeholder}
          value={gottenValue}
          onChange={valueChange}
          className={`w-full rounded-md border-solid border border-clrGreyPry border-opacity-50 flex items-center h-12 pl-[5%] pr-[10%] focus:border-clrBluePry focus:outline-clrBluePry focus:bg-clrBluePry focus:bg-opacity-5 focus:outline-1 text-clrDark text-sm ${
            isLabelSide ? "md:max-w-[63%]" : ""
          }`}
        />
      </div>
      <p className="text-clrDanger text-xs">{errorMsg}</p>
    </>
  );
};

export default InputBasic;
