interface MainNewsProps {
  urlToImage?: string | null;
  title?: string;
  publishedAt?: string;
  url?: string;
}

const MainNews = ({ urlToImage, title, publishedAt, url }: MainNewsProps) => (
  <div className="main-news">
    <div className="main-news-img">
      <a href={url} target="_blank" rel="noopener">
        <img src={urlToImage || ""} />
      </a>
    </div>
    <div className="main-news-title">
      <a href={url} target="_blank" rel="noopener">
        {title}
      </a>
    </div>
    <div className="day-time">
      <p>{publishedAt}</p>
    </div>
  </div>
);

export default MainNews;
