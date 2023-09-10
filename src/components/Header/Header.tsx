import { useEffect, useState } from "react";
import "./Header.css";
import SearchInput from "../SearchInput/SearchInput";
import SignUp from "../SignUp/SignUp";
import LinkImg from "../LinkImg/LinkImg";
import { HEADER_DATA } from "./Header.const";
import { click } from "@testing-library/user-event/dist/click";

const Header = () => {
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  const toggleExplorer = () => setIsExploreOpen((prevState) => !prevState);

  useEffect(() => {
    const exploreClose = () => setIsExploreOpen(false);

    if (isExploreOpen) document.body.addEventListener("click", exploreClose);

    return () => document.body.removeEventListener("click", exploreClose);
  }, [isExploreOpen]);

  return (
    <div className="Bar-container">
      <div className="hamburger-menu">
        <div className="line-1"></div>
        <div className="line-1"></div>
        <div className="line-1"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="navi-bar-start">
        <LinkImg
          className="logo1"
          href="#"
          src="https://cdn-icons-png.flaticon.com/512/4498/4498544.png"
        />
      </div>

      <div className="navi-bar" onClick={(e) => e.stopPropagation()}>
        <a className="explore-arrow" href="#" onClick={toggleExplorer}>
          EXPLORE
        </a>
        {isExploreOpen && (
          <div className="explore-dropdown ">
            <div className="dropdown-block">
              {HEADER_DATA.dropDown1.map((dropDown1) => (
                <a href={dropDown1.href} key={dropDown1.id}>
                  {dropDown1.name}
                </a>
              ))}
            </div>
            <div className="dropdown-block">
              {HEADER_DATA.dropDown2.map((dropDown2) => (
                <a href={dropDown2.href} key={dropDown2.id}>
                  {dropDown2.name}
                </a>
              ))}
            </div>
            <div className="dropdown-block">
              {HEADER_DATA.dropDown3.map((dropDown3) => (
                <a href={dropDown3.href} key={dropDown3.id}>
                  {dropDown3.name}
                </a>
              ))}
            </div>
          </div>
        )}
        {HEADER_DATA.naviBarLink.map((naviBarLink) => (
          <a href={naviBarLink.href} key={naviBarLink.id}>
            {naviBarLink.name}
          </a>
        ))}
      </div>
      <div className="navi-bar-end">
        <SearchInput />
        <LinkImg
          className="icon2"
          href="darkmode"
          src="https://cdn-icons-png.flaticon.com/512/6714/6714978.png"
        />
        <SignUp />
      </div>
    </div>
  );
};

export default Header;
