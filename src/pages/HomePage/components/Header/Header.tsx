import "./Header.css";
import SearchInput from "../SearchInput/SearchInput";
import SignUp from "../SignUp/SignUp";
import LinkImg from "../LinkImg/LinkImg";
import { HEADER_DATA } from "./Header.const";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import ExploreBar from "./ExploreBar/ExploreBar";
import { useState } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode", isDarkMode);
  };
  return (
    <div className="bar-container">
      <HamburgerMenu />
      <div className="navi-bar-start">
        <a className="logo1" href="/">
          <img src="https://cdn-icons-png.flaticon.com/512/4498/4498544.png" />
        </a>
      </div>

      <div className="navi-bar" onClick={(e) => e.stopPropagation()}>
        <ExploreBar />
        {HEADER_DATA.naviBarLink.map((naviBarLink) => (
          <a href={naviBarLink.href} key={naviBarLink.id}>
            {naviBarLink.name}
          </a>
        ))}
      </div>
      <div className="navi-bar-end">
        <SearchInput />
        <LinkImg
          className={"icon2"}
          onClick={toggleDarkMode}
          src="https://cdn-icons-png.flaticon.com/512/6714/6714978.png"
        />
        <SignUp />
      </div>
    </div>
  );
};

export default Header;
