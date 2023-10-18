import { useState } from "react";
import "./Latest.css";
import { useGetEverythingDataQuery } from "../../../../../redux/Services/EverythingApi/EverythingApi";
import LatestDataItem from "./LatestItem";
import Loader from "../../../../../reusable/Loader/Loader";
import ErrorApi from "../../../../../reusable/ErrorApi/ErrorApi";
import { Link } from "react-router-dom";

const Latest = () => {
  const [offset, setOffset] = useState(0);

  const {
    data: everythingApi,
    error,
    isLoading,
  } = useGetEverythingDataQuery({
    language: "en",
    sortBy: "publishedAt",
    pageSize: "12",
    q: "kpop",
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
      <div className="latest-header">
        <Link to="/Latest">LATEST NEWS</Link>
      </div>

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
        {everythingApi?.articles?.map(
          ({ urlToImage, title, publishedAt, url }) => (
            <LatestDataItem
              urlToImage={urlToImage}
              title={title}
              publishedAt={publishedAt}
              url={url}
              key={publishedAt}
            />
          )
        )}
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
