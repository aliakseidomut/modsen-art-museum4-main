import React, { createContext, useState, ReactNode } from "react";
import { getAllLocalStorageKeys } from "../utils/getAllLocalStorageKeys";

interface FavoritesContext {
  ids: string[];
  updateFavorites: () => void;
}

export const FavoritesContext = createContext<FavoritesContext>({
  ids: [],
  updateFavorites: () => {},
});

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [ids, setIds] = useState<string[]>([]);

  const updateFavorites = () => {
    const keys = getAllLocalStorageKeys();
    setIds(keys);
  };

  return (
    <FavoritesContext.Provider value={{ ids, updateFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
