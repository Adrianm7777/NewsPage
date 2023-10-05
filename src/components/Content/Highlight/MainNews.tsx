interface MainNewsProps {
  urlToImage?: string | null;
  title?: string;
  publishedAt?: string;
  url?: string;
}

const MainNews = ({ urlToImage, title, publishedAt, url }: MainNewsProps) => (
  <div className="main-news" key={publishedAt}>
    <div className="main-news-img">
      <a href={url} target="_blank">
        <img src={urlToImage || ""} />
      </a>
    </div>
    <div className="main-news-title">
      <a href={url} target="_blank">
        {title}
      </a>
    </div>
    <div className="day-time">
      <p>{publishedAt}</p>
    </div>
  </div>
);

export default MainNews;
