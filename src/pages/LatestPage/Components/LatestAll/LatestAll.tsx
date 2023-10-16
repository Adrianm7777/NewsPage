import { useState } from "react";
import { useGetEverythingDataQuery } from "../../../../redux/Services/EverythingApi/EverythingApi";
import AllItemTable from "../../../../reusable/AllItemTable";
import "./LatestAll.css";
import Loader from "../../../../reusable/Loader/Loader";
import ErrorApi from "../../../../reusable/ErrorApi/ErrorApi";

const LatestPageAll = () => {
  const [displayCount, setDisplayCount] = useState(12);

  const handleShowMore = () => setDisplayCount((prevCount) => prevCount + 12);

  const {
    data: everythingApi,
    isLoading,
    error,
  } = useGetEverythingDataQuery({
    q: "kpop",
    language: "en",
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
    <div className="latest-all-container">
      <div className="latest-all-header">
        <h2>ALL LATEST POST</h2>
      </div>
      <div className="latest-all-item-container">
        {everythingApi?.articles?.map(
          ({ url, urlToImage, title, publishedAt }) => (
            <AllItemTable
              url={url}
              title={title}
              urlToImage={urlToImage}
              publishedAt={publishedAt}
              key={publishedAt}
            />
          )
        )}
      </div>
      <button className="latest-all-btn" onClick={handleShowMore}>
        Show more
      </button>
    </div>
  );
};

export default LatestPageAll;
