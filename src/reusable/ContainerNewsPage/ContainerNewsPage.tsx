import Loader from "../../reusable/Loader/Loader";
import ErrorApi from "../../reusable/ErrorApi/ErrorApi";
import AllItemTable from "../AllItemTable/AllItemTable";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";
import "./ContainerNewsPage.css";

interface Props {
  data?: LatestDataResponse;
  label: string;
  setDisplayCount: React.Dispatch<React.SetStateAction<number>>;
  error: FetchBaseQueryError | SerializedError | undefined;
  isLoading: boolean;
}

const ContainerNewsPage = ({
  data,
  label,
  setDisplayCount,
  isLoading,
  error,
}: Props) => {
  const LOADING_ARTICLE_NUM = 12;

  const handleShowMore = () =>
    setDisplayCount((prevCount) => prevCount + LOADING_ARTICLE_NUM);

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
    <div className="all-container">
      <div className="all-header">
        <h2>{label}</h2>
      </div>
      <div className="all-item-container">
        {data?.articles?.map(({ url, title, publishedAt, urlToImage }) => (
          <AllItemTable
            url={url}
            title={title}
            urlToImage={urlToImage}
            publishedAt={publishedAt}
            key={publishedAt}
          />
        ))}
      </div>
      <button className="all-btn" onClick={handleShowMore}>
        Show more
      </button>
    </div>
  );
};

export default ContainerNewsPage;
