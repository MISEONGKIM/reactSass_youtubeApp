import React, { ReactElement } from "react";
import { createContext, useState } from "react";

interface SearchContextType {
  showSpecialSearchBar: boolean;
  setShowSpecialSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
}
export const SearchContext = createContext<SearchContextType>(
  {} as SearchContextType
);

export const SearchContextProvider = (props: ReactElement) => {
  const [showSpecialSearchBar, setShowSpecialSearchBar] = useState(false);

  return (
    <SearchContext.Provider
      value={{ showSpecialSearchBar, setShowSpecialSearchBar }}
      {...props}
    />
  );
};
