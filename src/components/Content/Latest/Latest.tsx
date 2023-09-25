import { useState } from "react";
import "./Latest.css";
import { useGetLatestDataQuery } from "../../../redux/Services/LatestApi/LatestApi";
import LatestDataItem from "./LatestItem";

const Latest = () => {
  const { data: latestdata } = useGetLatestDataQuery({
    country: "kr",
    category: "entertainment",
  });

  const [offset, setOffset] = useState(0);

  const windowWidth = window.innerWidth;

  const latestContentWidth = 3 * windowWidth;

  const disabledWidth = 2 * windowWidth;

  const handleNextPage = () =>
    setOffset((prevState) => prevState + windowWidth);
  const handlePrevPage = () =>
    setOffset((prevState) => prevState - windowWidth);

  return (
    <div className="latest-container">
      <a href="#">LATEST NEWS</a>
      <button
        className="offset-button prev"
        onClick={handlePrevPage}
        disabled={offset === 0}
      >
        Prev
      </button>
      <div
        className="latest-content"
        style={{
          transform: `translateX(-${offset.toString()}px)`,
          width: latestContentWidth,
        }}
      >
        {latestdata?.articles.slice(0, 12).map((article) => (
          <LatestDataItem
            urlToImage={article.urlToImage || undefined}
            title={article.title}
            publishedAt={article.publishedAt}
          />
        ))}
      </div>
      <button
        className="offset-button next"
        onClick={handleNextPage}
        disabled={offset >= disabledWidth}
      >
        Next
      </button>
    </div>
  );
};
export default Latest;
