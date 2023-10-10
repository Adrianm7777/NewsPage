import { useState } from "react";
import { useGetLatestDataQuery } from "../../../../../redux/Services/LatestApi/LatestApi";
import TrendingAllTable from "../TrendingAllTable/TrendingAllTableItem";
import "./TrendingAll.css";
import Loader from "../../../../HomePage/components/Loader/Loader";
import ErrorApi from "../../../../HomePage/components/ErrorApi/ErrorApi";

const TrendingAll = () => {
  const [displayCount, setDisplayCount] = useState(12);

  const handleShowMore = () => {
    setDisplayCount((prevCount) => prevCount + 12);
  };

  const {
    data: trendingAllData,
    isLoading,
    error,
  } = useGetLatestDataQuery({
    country: "kr",
    category: "entertainment",
    pageSize: displayCount.toString(),
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

  return (
    <div className="trending-all-container">
      <div className="trending-all-header">
        <h2>ALL TRENDING POST</h2>
      </div>
      <div className="trending-all-item-container">
        {trendingAllData?.articles?.map(
          ({ url, title, publishedAt, urlToImage }) => (
            <TrendingAllTable
              url={url}
              title={title}
              urlToImage={urlToImage}
              publishedAt={publishedAt}
              key={publishedAt}
            />
          )
        )}
      </div>

      <button className="trending-all-btn" onClick={handleShowMore}>
        Show more
      </button>
    </div>
  );
};

export default TrendingAll;
