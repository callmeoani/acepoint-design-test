import { useContext } from "react";
import StorageContext from "../context/StorageProvider";
import { StorageContextType } from "../@types/type";

const useStorageHook = () => {
  return useContext(StorageContext) as StorageContextType;
};

export default useStorageHook;
