interface LatestDataItemProps {
  urlToImage?: string | null;
  title?: string;
  publishedAt?: string;
}

const LatestDataItem = ({
  urlToImage,
  title,
  publishedAt,
}: LatestDataItemProps) => (
  <div className="latest-item">
    <img src={urlToImage || ""} />
    <h2>{title}</h2>
    <p>{publishedAt}</p>
  </div>
);

export default LatestDataItem;
