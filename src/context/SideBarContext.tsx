import React, { ReactNode, createContext, useEffect, useState } from "react";
import { useWindowSize } from "../helpers/useWindowSize";

interface ContextStateType {
  isToggled: boolean;
  setIsToggled: React.Dispatch<React.SetStateAction<boolean>>;
  handleToggleSideBar: () => void;
}
export const SideBarContext = createContext<ContextStateType>(
  {} as ContextStateType
);

export const SideBarContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  //   const { width } = useWindowSize();
  const [isToggled, setIsToggled] = useState<boolean>(true);

  const handleToggleSideBar = () => {
    setIsToggled(!isToggled);
  };

  //   useEffect(() => {
  //     setIsToggled(width && width <= 1300 ? false : true);
  //   }, [width]);
  return (
    <SideBarContext.Provider
      value={{ isToggled, setIsToggled, handleToggleSideBar }}
    >
      {children}
    </SideBarContext.Provider>
  );
};
