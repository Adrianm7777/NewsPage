import { useState } from "react";
import "./Latest.css";
import { useGetLatestDataQuery } from "../../../redux/Services/LatestApi/LatestApi";
import LatestDataItem from "./LatestItem";
import Loader from "../../Loader/Loader";
import ErrorApi from "../../ErrorApi/ErrorApi";

const Latest = () => {
  const [offset, setOffset] = useState(0);

  const {
    data: latestData,
    error,
    isLoading,
  } = useGetLatestDataQuery({
    country: "kr",
    category: "entertainment",
    pageSize: "12",
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    if ("status" in error) {
      const errMsg =
        "error" in error ? error.error : JSON.stringify(error.data);

      return <ErrorApi errorMessage={errMsg} />;
    } else {
      return <p>{error.message}</p>;
    }
  }

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
        {latestData?.articles?.map((article, index) => (
          <LatestDataItem
            urlToImage={article?.urlToImage}
            title={article?.title}
            publishedAt={article?.publishedAt}
            key={index}
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
