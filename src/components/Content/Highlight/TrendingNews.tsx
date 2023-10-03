interface TrendingNewsProps {
  urlToImage?: string | null;
  title?: string;
  publishedAt?: string;
}

const TrendingNews = ({
  urlToImage,
  title,
  publishedAt,
}: TrendingNewsProps) => (
  <div className="row-list-item" key={publishedAt}>
    <div className="img-trending">
      <a>
        <img src={urlToImage || ""} />
      </a>
    </div>
    <div className="title-trending">
      <a>{title}</a>
    </div>
  </div>
);

export default TrendingNews;
