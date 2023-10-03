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
    <a>
      <img src={urlToImage || ""} />
    </a>
    <a>{title}</a>
    <p>{publishedAt}</p>
  </div>
);

export default LatestDataItem;
