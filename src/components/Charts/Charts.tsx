import React from "react";
import "./Charts.css";
import Chart from "../Chart/Chart";

const Charts = () => {
  return (
    <div className="chart-container">
      <h2>MUSIC CHART</h2>
      <div className="first-two">
        <Chart
          src="https://0.soompi.io/wp-content/uploads/2023/07/26062907/Q_800-78.jpeg?w=300"
          albumTitle="Get up"
          trackTitle="Super Shy"
          href="#"
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
      <div className="place-row">
        <Chart
          src="https://0.soompi.io/wp-content/uploads/2023/08/27113219/Q_800-86.jpeg?w=300"
          albumTitle="GAME PLAN"
          trackTitle="Fast Forward"
          href="#"
          ranking={3}
          classType="chart-item"
        />

        <Chart
          src="https://0.soompi.io/wp-content/uploads/2023/05/29003130/Q_800-9-1.jpeg?w=300"
          albumTitle="I feel"
          trackTitle="Queencard"
          href="#"
          ranking={5}
          classType="chart-item"
        />

        <Chart
          src="https://0.soompi.io/wp-content/uploads/2023/04/24063119/Q_800-64.jpeg?w=300"
          albumTitle="I've IVE"
          trackTitle="I AM"
          href="#"
          ranking={7}
          classType="chart-item"
        />

        <Chart
          src="https://0.soompi.io/wp-content/uploads/2023/05/08054749/Q_800-68.jpeg?w=300"
          albumTitle="FML"
          trackTitle="Super"
          href="#"
          ranking={9}
          classType="chart-item"
        />
      </div>
      <div className="place-row">
        <Chart
          src="https://0.soompi.io/wp-content/uploads/2023/08/13085746/Q_800-83.jpeg?w=300"
          albumTitle="KILL MY DOUBT"
          trackTitle="CAKE"
          href="#"
          ranking={4}
          classType="chart-item"
        />

        <Chart
          src="https://0.soompi.io/wp-content/uploads/2023/08/27113609/Q_800-87.jpeg?w=300"
          albumTitle="Teenfresh"
          trackTitle="Bubble"
          href="#"
          ranking={6}
          classType="chart-item"
        />

        <Chart
          src="https://cdns-images.dzcdn.net/images/cover/2834f331022077235d01d862bc6de48e/500x500.jpg"
          albumTitle="UNFORGIVEN"
          trackTitle="Eve,Psyche & The Bluebeard's wife"
          href="#"
          ranking={8}
          classType="chart-item"
        />

        <Chart
          src="https://0.soompi.io/wp-content/uploads/2023/07/30011800/Q_800-81.jpeg?w=300"
          albumTitle="ISTJ"
          trackTitle="ISTJ"
          href="#"
          ranking={10}
          classType="chart-item"
        />
      </div>
      <div></div>
    </div>
  );
};

export default Charts;
