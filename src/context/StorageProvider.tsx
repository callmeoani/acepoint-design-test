import { createContext, useState } from "react";
import { State } from "react-burger-menu";

type Props = {
  children: JSX.Element;
};

// type ValueProps = {
//   isMenuOpen: boolean;
//   toggleMenu: () => void;
//   stateChangeHandler: (newState: State) => void;
// };

const StorageContext = createContext({});

export const StorageProvider = ({ children }: Props) => {
  // const [auth, setAuth] = useState(false);
  const [menuOpenState, setMenuOpenState] = useState(false);
  return (
    <StorageContext.Provider
      value={{
        menuOpenState,
        setMenuOpenState,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};

export default StorageContext;
