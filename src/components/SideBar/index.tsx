import React, { useContext, useEffect } from "react";
import { useWindowSize } from "../../helpers/useWindowSize";
import SmallSideBar from "./SmallSideBar";
import BigSideBar from "./BigSideBar";
import { SideBarContext } from "../../context/SideBarContext";

const SideBar = () => {
  const { width } = useWindowSize();
  const { isToggled, setIsToggled } = useContext(SideBarContext);
  useEffect(() => {
    setIsToggled(width && width <= 1300 ? false : true);
  }, [width]);
  if (width && width < 792) return null;
  if (isToggled) return <BigSideBar />;
  return <SmallSideBar />;
};

export default SideBar;
