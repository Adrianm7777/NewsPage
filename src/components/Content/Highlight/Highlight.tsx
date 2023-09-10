import "./Highlight.css";

const Highlight = () => {
  return (
    <div className="news-container">
      <div className="main-news">
        <img src="https://www.freecodecamp.org/news/content/images/2021/08/imgTag.png" />
        <h2>
          <a href="#">title</a>
        </h2>
        <div className="day-time">
          <p>1 day ago</p>
        </div>
      </div>
      <div className="trending-news">
        <h2>
          <a href="#">TRENDING RIGHT NOW</a>
        </h2>
        <div className="row-list">
          <div className="row-list-item">
            <div className="img-trending">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrJdFxOa8blNPvui5yCD7Ufh8KoaPAUT4T9g&usqp=CAU" />
            </div>
            <div className="title-trending">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
                finibus urna.
              </p>
            </div>
          </div>
          <div className="row-list-item">
            <div className="img-trending">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrJdFxOa8blNPvui5yCD7Ufh8KoaPAUT4T9g&usqp=CAU" />
            </div>
            <div className="title-trending">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
                finibus urna.
              </p>
            </div>
          </div>
          <div className="row-list-item">
            <div className="img-trending">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrJdFxOa8blNPvui5yCD7Ufh8KoaPAUT4T9g&usqp=CAU" />
            </div>
            <div className="title-trending">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
                finibus urna.
              </p>
            </div>
          </div>
          <div className="row-list-item">
            <div className="img-trending">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrJdFxOa8blNPvui5yCD7Ufh8KoaPAUT4T9g&usqp=CAU" />
            </div>
            <div className="title-trending">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
                finibus urna.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Highlight;
