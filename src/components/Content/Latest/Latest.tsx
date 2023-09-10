import { useState } from "react";
import "./Latest.css";

const Latest = () => {
  const [offset, setOffset] = useState(0);

  const windowWidth = window.innerWidth;

  const latestContentWidth = 3 * windowWidth;

  const handleNextPage = () => {
    setOffset((prevState) => prevState + windowWidth);
  };
  const handlePrevPage = () => {
    setOffset((prevState) => prevState - windowWidth);
  };
  return (
    <div className="latest-container">
      <h2>
        <a href="#">LATEST NEWS</a>
      </h2>
      <button
        className="offset-button prev"
        onClick={handlePrevPage}
        disabled={offset === 0}
      >
        Prev
      </button>
      <div
        className="latest-content"
        style={{
          transform: `translateX(-${offset.toString()}px)`,
          width: latestContentWidth,
        }}
      >
        <div className="latest-item">
          <img src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/share/1f92b.jpg" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
            finibus urna.
          </p>
        </div>
        <div className="latest-item">
          <img src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/share/1f92b.jpg" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
            finibus urna.
          </p>
        </div>
        <div className="latest-item">
          <img src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/share/1f92b.jpg" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
            finibus urna.
          </p>
        </div>
        <div className="latest-item">
          <img src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/share/1f92b.jpg" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
            finibus urna.
          </p>
        </div>
        <div className="latest-item">
          <img src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/share/1f92b.jpg" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
            finibus urna.
          </p>
        </div>
        <div className="latest-item">
          <img src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/share/1f92b.jpg" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
            finibus urna.
          </p>
        </div>
        <div className="latest-item">
          <img src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/share/1f92b.jpg" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
            finibus urna.
          </p>
        </div>
        <div className="latest-item">
          <img src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/share/1f92b.jpg" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
            finibus urna.
          </p>
        </div>
        <div className="latest-item">
          <img src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/share/1f92b.jpg" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
            finibus urna.
          </p>
        </div>
        <div className="latest-item">
          <img src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/share/1f92b.jpg" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
            finibus urna.
          </p>
        </div>
        <div className="latest-item">
          <img src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/share/1f92b.jpg" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
            finibus urna.
          </p>
        </div>
        <div className="latest-item">
          <img src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/share/1f92b.jpg" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
            finibus urna.
          </p>
        </div>
      </div>
      <button
        className="offset-button next"
        onClick={handleNextPage}
        disabled={offset >= 2 * windowWidth}
      >
        Next
      </button>
    </div>
  );
};
export default Latest;
