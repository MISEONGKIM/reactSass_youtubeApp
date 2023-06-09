import React, { useContext } from "react";
import { ImSearch } from "react-icons/im";
import { MdKeyboardVoice } from "react-icons/md";
import { useWindowSize } from "../../../helpers/useWindowSize";
import { SearchContext } from "../../../context/SearchContext";

const SearchBar = () => {
  const { width } = useWindowSize();
  const { setShowSpecialSearchBar } = useContext(SearchContext);
  return (
    <div className={`SearchBar ${width && width <= 640 ? "smallSearch" : ""}`}>
      {width && width <= 640 ? (
        <button
          className="icon-container searchIcon"
          onClick={() => {
            setShowSpecialSearchBar(true);
          }}
        >
          <ImSearch size={20} />
        </button>
      ) : (
        <form>
          <input type="text" name="search" placeholder="Search" />
          <button>
            <ImSearch size={20} />
          </button>
        </form>
      )}

      <button className="icon-container voiceIcon">
        <MdKeyboardVoice size={25} />
      </button>
    </div>
  );
};

export default SearchBar;
