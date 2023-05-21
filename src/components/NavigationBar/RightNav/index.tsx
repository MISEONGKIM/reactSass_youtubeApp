import React from "react";
import { MdApps, MdNotifications, MdVideoCall } from "react-icons/md";
import { Tooltip as ReactTooltip } from "react-tooltip";
const RightNav = () => {
  return (
    <div className="buttons">
      <button className="icon-container">
        <MdVideoCall
          size={25}
          data-tooltip-content="Create"
          data-tooltip-id="navbar"
        />
      </button>
      <button className="icon-container">
        <MdApps size={25} />
      </button>
      <button className="icon-container">
        <MdNotifications
          size={25}
          data-tooltip-content="Notifications"
          data-tooltip-id="navbar"
        />
      </button>

      <ReactTooltip
        id="navbar"
        style={{
          backgroundColor: "gray",
        }}
        delayHide={150}
        noArrow
      />
    </div>
  );
};

export default RightNav;
