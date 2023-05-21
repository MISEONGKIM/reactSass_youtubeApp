import React, { useContext } from "react";
import LeftNav from "./LeftNav";
import SearchBar from "./SearchBar";
import RightNav from "./RightNav";
import { BiArrowBack } from "react-icons/bi";
import { ImSearch } from "react-icons/im";
import { MdKeyboardVoice } from "react-icons/md";
import { SearchContext } from "../../context/SearchContext";
import { useWindowSize } from "../../helpers/useWindowSize";

const NavigationBar = () => {
  const { width } = useWindowSize();
  const { showSpecialSearchBar, setShowSpecialSearchBar } =
    useContext(SearchContext);
  const specialSearchBarRender = (
    <div className="special_searchbar">
      <button onClick={() => setShowSpecialSearchBar(false)}>
        <BiArrowBack />
      </button>
      <form>
        <input type="text" name="search" placeholder="Search" />
        <button>
          <ImSearch size={20} />
        </button>
      </form>
      <button className="icon-conatiner voiceIcon">
        <MdKeyboardVoice size={25} />
      </button>
    </div>
  );
  if (width && width <= 640 && showSpecialSearchBar) {
    return <nav className="Navbar">{specialSearchBarRender}</nav>;
  }
  return (
    <nav className="Navbar">
      <LeftNav />
      <SearchBar />
      <RightNav />
    </nav>
  );
};

export default NavigationBar;
