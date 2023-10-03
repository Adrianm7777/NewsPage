import { useGetLatestDataQuery } from "../../../redux/Services/LatestApi/LatestApi";
import "./Highlight.css";
import MainNews from "./MainNews";
import Loader from "../../Loader/Loader";
import ErrorApi from "../../ErrorApi/ErrorApi";
import TrendingNews from "./TrendingNews";

const Highlight = () => {
  const {
    data: mainData,
    isLoading,
    error,
  } = useGetLatestDataQuery({
    country: "jp",
    category: "entertainment",
    pageSize: "1",
  });
  const { data: trendingData } = useGetLatestDataQuery({
    country: "kr",
    category: "entertainment",
    pageSize: "4",
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
    <div className="news-container">
      <MainNews
        urlToImage={mainData?.articles[0]?.urlToImage}
        title={mainData?.articles[0]?.title}
        publishedAt={mainData?.articles[0]?.publishedAt}
        key={mainData?.articles[0]?.source?.id}
      />

      <div className="trending-news">
        <div className="trending-header">
          <a href="#">TRENDING RIGHT NOW</a>
        </div>
        <div className="row-list">
          {trendingData?.articles?.map((article) => (
            <TrendingNews
              urlToImage={article?.urlToImage}
              title={article?.title}
              key={article?.publishedAt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlight;
