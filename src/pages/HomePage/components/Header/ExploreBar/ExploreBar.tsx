import { useEffect, useState } from "react";
import { HEADER_DATA } from "../Header.const";
import "./ExploreBar.css";

const ExploreBar = () => {
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  const toggleExplorer = () => setIsExploreOpen((prevState) => !prevState);

  useEffect(() => {
    const exploreClose = () => setIsExploreOpen(false);

    if (isExploreOpen) document.body.addEventListener("click", exploreClose);

    return () => document.body.removeEventListener("click", exploreClose);
  }, [isExploreOpen]);

  return (
    <div>
      <a className="explore-arrow" onClick={toggleExplorer}>
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
    </div>
  );
};

export default ExploreBar;
