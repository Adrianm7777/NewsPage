import React from "react";
import "./Charts.css";
import Chart from "../Chart/Chart";

const Charts = () => (
  <div className="chart-container">
    <h2>MUSIC CHART</h2>
    <div className="first-two">
      <Chart
        src="https://0.soompi.io/wp-content/uploads/2023/07/26062907/Q_800-78.jpeg?w=300"
        albumTitle="Get up"
        trackTitle="Super Shy"
        href="https://www.yesasia.com/global/newjeans-ep-album-vol-2-get-up-the-powerpuff-girls-x-nj-box-version/1123171780-0-0-0-en/info.html?sscid=a1k7_3ulmm"
        ranking={1}
        classType="first-place"
      />

      <Chart
        src="https://0.soompi.io/wp-content/uploads/2023/07/30012039/Q_800-82.jpeg?w=300"
        albumTitle="Seven"
        trackTitle="Seven (feat. Latto)"
        href="#"
        ranking={2}
        classType="second-place"
      />
    </div>
    <div className="two-row">
      <div className="place-row">
        <Chart
          src="https://0.soompi.io/wp-content/uploads/2023/08/27113219/Q_800-86.jpeg?w=300"
          albumTitle="GAME PLAN"
          trackTitle="Fast Forward"
          href="https://www.yesasia.com/global/jeon-somi-ep-album-game-plan-photobook-version-random-version/1123800213-0-0-0-en/info.html?sscid=a1k7_3uo32"
          ranking={3}
          classType="chart-item"
        />

        <Chart
          src="https://0.soompi.io/wp-content/uploads/2023/05/29003130/Q_800-9-1.jpeg?w=300"
          albumTitle="I feel"
          trackTitle="Queencard"
          href="https://www.yesasia.com/global/g-i-dle-mini-album-vol-6-i-feel-random-version/1121509632-0-0-0-en/info.html?sscid=a1k7_3urh6"
          ranking={5}
          classType="chart-item"
        />

        <Chart
          src="https://0.soompi.io/wp-content/uploads/2023/04/24063119/Q_800-64.jpeg?w=300"
          albumTitle="I've IVE"
          trackTitle="I AM"
          href="https://www.yesasia.com/global/ive-vol-1-ive-ive-random-version/1120970120-0-0-0-en/info.html?sscid=a1k7_3uoo0"
          ranking={7}
          classType="chart-item"
        />

        <Chart
          src="https://0.soompi.io/wp-content/uploads/2023/05/08054749/Q_800-68.jpeg?w=300"
          albumTitle="FML"
          trackTitle="Super"
          href="https://www.yesasia.com/global/seventeen-mini-album-vol-10-fml-random-version/1121184905-0-0-0-en/info.html?sscid=a1k7_3uteo"
          ranking={9}
          classType="chart-item"
        />
      </div>

      <div className="place-row">
        <Chart
          src="https://0.soompi.io/wp-content/uploads/2023/08/13085746/Q_800-83.jpeg?w=300"
          albumTitle="KILL MY DOUBT"
          trackTitle="CAKE"
          href="https://www.yesasia.com/global/itzy-mini-album-vol-7-kill-my-doubt-standard-version-random-version/1123195047-0-0-0-en/info.html?sscid=a1k7_3usrg"
          ranking={4}
          classType="chart-item"
        />

        <Chart
          src="https://0.soompi.io/wp-content/uploads/2023/08/27113609/Q_800-87.jpeg?w=300"
          albumTitle="Teenfresh"
          trackTitle="Bubble"
          href="https://www.yesasia.com/global/stayc-mini-album-vol-3-teenfresh-bubble-version/1123790357-0-0-0-en/info.html?sscid=a1k7_3uuo6"
          ranking={6}
          classType="chart-item"
        />

        <Chart
          src="https://cdns-images.dzcdn.net/images/cover/2834f331022077235d01d862bc6de48e/500x500.jpg"
          albumTitle="UNFORGIVEN"
          trackTitle="Eve,Psyche & The Bluebeard's wife"
          href="https://www.yesasia.com/global/le-sserafim-vol-1-unforgiven-random-version/1121225101-0-0-0-en/info.html?sscid=a1k7_3up1y"
          ranking={8}
          classType="chart-item"
        />

        <Chart
          src="https://0.soompi.io/wp-content/uploads/2023/07/30011800/Q_800-81.jpeg?w=300"
          albumTitle="ISTJ"
          trackTitle="ISTJ"
          href="https://www.yesasia.com/global/nct-dream-vol-3-istj-poster-version-random-version/1123052418-0-0-0-en/info.html?sscid=a1k7_3us3j"
          ranking={10}
          classType="chart-item"
        />
      </div>
    </div>
  </div>
);

export default Charts;
