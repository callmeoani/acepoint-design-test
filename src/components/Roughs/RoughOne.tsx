import React, { forwardRef } from "react";

// const RoughOne = () => {

//   return (
//     <div>RoughOne</div>
//   )
// }

interface IRoughOneProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const RoughOne = forwardRef<HTMLButtonElement, IRoughOneProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return <button ref={ref}>RoughOne</button>;
  }
);

RoughOne.displayName = "RoughOne";

export default RoughOne;
