import { useEffect, useState } from "react";
import "./SearchInput.css";

const SearchInput = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => setIsSearchVisible((prevState) => !prevState);

  useEffect(() => {
    const searchClose = () => {
      setIsSearchVisible(false);
    };
    if (isSearchVisible) {
      document.body.addEventListener("click", searchClose);
    }
    return () => {
      document.body.removeEventListener("click", searchClose);
    };
  }, [isSearchVisible]);

  return (
    <div
      className="search-input-container"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className={`${isSearchVisible ? "expanded" : ""}`}
        onClick={toggleSearch}
      >
        <img
          className="icon2"
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"
        />
        <input
          className={`inputSearch ${isSearchVisible ? "expanded" : ""} `}
          type="text"
          placeholder="Search"
          onClick={(e) => e.stopPropagation()}
        />
      </button>
    </div>
  );
};

export default SearchInput;
