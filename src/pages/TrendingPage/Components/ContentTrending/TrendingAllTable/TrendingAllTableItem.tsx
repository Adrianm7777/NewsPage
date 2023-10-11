interface TrendingAllTableProps {
  urlToImage?: string | null;
  url?: string;
  title?: string;
  publishedAt?: string;
}

const TrendingAllTable = ({
  publishedAt,
  title,
  url,
  urlToImage,
}: TrendingAllTableProps) => (
  <div className="trending-all-item">
    <div className="img-trending-all">
      <a href={url} target="_blank">
        <img src={urlToImage || ""} />
      </a>
    </div>
    <div className="title-trending-all">
      <a href={url} target="_blank">
        {title}
      </a>
    </div>
    <div className="date-trending-all">
      <p>{publishedAt}</p>
    </div>
  </div>
);
export default TrendingAllTable;
