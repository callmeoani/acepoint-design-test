import { useState } from "react";
import InputCardNum from "../inputs/InputCardNum";
import InputBasic from "../inputs/InputBasic";
import InputExpiryDate from "../inputs/InputExpiryDate";
import ButtonBasic from "../buttons/ButtonBasic";

const MainForm = () => {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cvv, setCvv] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e: any) => {
    e.preventDefault();
    console.log("card number: ", cardNumber);
    console.log("CVV number: ", cvv);
    console.log("expiry date: ", expiryDate);
    console.log("password: ", password);
  };

  return (
    <form className="">
      <div>
        <InputCardNum
          totalCardNumber={cardNumber}
          setTotalCardNumber={setCardNumber}
        />
      </div>
      <div>
        <InputBasic
          label="CVV Number"
          hint="Enter the 3 or 4 digit number on the card"
          isLabelSide={true}
          inputFor="cvv-number"
          placeholder="123"
          value={cvv}
          valueChange={(e) => setCvv(e.target.value)}
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
        totalValue={expiryDate}
        setTotalValue={setExpiryDate}
      />
      <div>
        <InputBasic
          label="Password"
          hint="Enter your Dynamic password"
          isLabelSide={true}
          inputFor="password"
          placeholder="password"
          value={password}
          valueChange={(e) => setPassword(e.target.value)}
          isPassword={true}
          centralize={true}
          errorMsg={""}
        />
      </div>
      <ButtonBasic
        displayName="Pay Now"
        stylings={"h-[50px] md:h-[60px] text-clrLight bg-clrBluePry"}
        buttonClick={(e: any) => handleClick(e)}
      />
    </form>
  );
};

export default MainForm;
