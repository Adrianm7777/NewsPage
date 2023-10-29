interface MainNewsProps {
  urlToImage?: string | null;
  title?: string;
  publishedAt?: string;
  url?: string;
}

const MainNews = ({ urlToImage, title, publishedAt, url }: MainNewsProps) => (
  <div className="main-news">
    <div className="main-news-img">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={urlToImage || ""} />
      </a>
    </div>
    <div className="main-news-title">
      <a href={url} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    </div>
    <div className="day-time">
      <p>{publishedAt}</p>
    </div>
  </div>
);

export default MainNews;
