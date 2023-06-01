import { useEffect, useMemo, useState } from "react";
import useStorageHook from "../../hooks/useStorageHook";

type InputBasicProps = {
  label: string;
  inputFor: string;
  hint: string;
  isLabelSide: boolean;
  minInput?: number;
  maxInput?: number;
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
  minInput,
  maxInput,
  // type,
  isPassword,
  placeholder,
  errorMsg = "",
  value,
  valueChange,
}: InputBasicProps) => {
  const { editOn } = useStorageHook();
  return (
    <>
      <div
        className={`relative flex mb-5 md:mb-7  ${
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
          disabled={!editOn}
          type={isPassword ? "password" : "string"}
          id={inputFor}
          placeholder={placeholder}
          minLength={minInput}
          maxLength={maxInput}
          value={value}
          onChange={valueChange}
          className={`w-full rounded-md border-solid border border-clrGreyPry border-opacity-50 flex items-center h-12 pl-[5%] pr-[10%] focus:border-clrBluePry focus:outline-clrBluePry focus:bg-clrBluePry focus:bg-opacity-5 focus:outline-1 focus:text-clrBluePry active:text-clrBluePry text-clrDark text-sm ${
            isLabelSide ? "md:max-w-[63%]" : ""
          }  ${!editOn ? "text-gray-400" : ""}`}
        />
      </div>
      <p className="text-clrDanger text-xs">{errorMsg}</p>
    </>
  );
};

export default InputBasic;
