import { useState } from "react";
import { HEADER_DATA } from "../Header.const";
import "./HamburgerMenu.css";

const HamburgerMenu = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const [isExploreOpen, setIsExploreOpen] = useState(false);

  const toggleHamburger = () => setHamburgerOpen((prevState) => !prevState);
  const toggleExplorer = () => setIsExploreOpen((prevState) => !prevState);

  return (
    <div className="hamburger-icon" onClick={toggleHamburger}>
      {Array(3)
        .fill("")
        .map((_, index) => (
          <div className="line" key={index}></div>
        ))}
      {hamburgerOpen && (
        <div className="hamburger-content" onClick={(e) => e.stopPropagation()}>
          <div className="bar">
            <a onClick={toggleExplorer}>EXPLORE</a>
            {isExploreOpen && (
              <div className="explore-dropdown-mobile">
                {HEADER_DATA.dropDown1.map((dropDown1) => (
                  <a href={dropDown1.href} key={dropDown1.id}>
                    {dropDown1.name}
                  </a>
                ))}

                {HEADER_DATA.dropDown2.map((dropDown2) => (
                  <a href={dropDown2.href} key={dropDown2.id}>
                    {dropDown2.name}
                  </a>
                ))}
                {HEADER_DATA.dropDown3.map((dropDown3) => (
                  <a href={dropDown3.href} key={dropDown3.id}>
                    {dropDown3.name}
                  </a>
                ))}
              </div>
            )}
            {HEADER_DATA.naviBarLink.map((naviBarlink) => (
              <a href={naviBarlink.href} key={naviBarlink.id}>
                {naviBarlink.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default HamburgerMenu;
