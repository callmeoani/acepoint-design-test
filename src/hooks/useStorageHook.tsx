import { useContext } from "react";
import StorageContext from "../context/StorageProvider";

const useStorageHook = () => {
  return useContext(StorageContext);
};

export default useStorageHook;
