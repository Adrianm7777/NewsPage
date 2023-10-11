interface LatestDataItemProps {
  urlToImage?: string | null;
  title?: string;
  publishedAt?: string;
  url?: string;
}

const LatestDataItem = ({
  urlToImage,
  title,
  publishedAt,
  url,
}: LatestDataItemProps) => (
  <div className="latest-item">
    <a href={url}>
      <img src={urlToImage || ""} />
    </a>
    <a href={url}>{title}</a>
    <p>{publishedAt}</p>
  </div>
);

export default LatestDataItem;
