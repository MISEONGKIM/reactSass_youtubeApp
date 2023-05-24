import React, { ReactNode } from "react";
import { createContext, useState } from "react";

interface ContextStateType {
  showSpecialSearchBar: boolean;
  setShowSpecialSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
}
export const SearchContext = createContext<ContextStateType>(
  {} as ContextStateType
);

export const SearchContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [showSpecialSearchBar, setShowSpecialSearchBar] = useState(false);

  return (
    <SearchContext.Provider
      value={{ showSpecialSearchBar, setShowSpecialSearchBar }}
    >
      {children}{" "}
    </SearchContext.Provider>
  );
};
