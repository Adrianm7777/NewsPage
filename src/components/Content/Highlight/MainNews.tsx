interface MainNewsProps {
  urlToImage?: string | null;
  title?: string;
  publishedAt?: string;
  id?: string;
}

const MainNews = ({ urlToImage, title, publishedAt, id }: MainNewsProps) => (
  <div className="main-news" key={id}>
    <div className="main-news-img">
      <a href="#">
        <img src={urlToImage || ""} />
      </a>
    </div>
    <div className="main-news-title">
      <a href="#">{title}</a>
    </div>
    <div className="day-time">
      <p>{publishedAt}</p>
    </div>
  </div>
);

export default MainNews;
