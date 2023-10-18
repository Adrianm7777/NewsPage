interface TrendingNewsProps {
  urlToImage?: string | null;
  title?: string;
  publishedAt?: string;
  url?: string;
}

const TrendingNews = ({
  urlToImage,
  title,
  publishedAt,
  url,
}: TrendingNewsProps) => (
  <div className="row-list-item">
    <div className="img-trending">
      <a href={url} target="_blank" rel="noopener">
        <img src={urlToImage || ""} />
      </a>
    </div>
    <div className="title-trending">
      <a href={url} target="_blank" rel="noopener">
        {title}
      </a>
    </div>
  </div>
);

export default TrendingNews;
