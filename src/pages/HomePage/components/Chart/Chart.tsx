import React from "react";

interface ChartProps {
  ranking: number;
  href: string;
  src: string;
  albumTitle: string;
  trackTitle: string;
  classType: "first-place" | "second-place" | "chart-item";
}

const Chart = ({
  albumTitle,
  href,
  ranking,
  src,
  trackTitle,
  classType,
}: ChartProps) => (
  <div className={classType}>
    <div className="ranking-number">{ranking}</div>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={src} />
    </a>
    <div className="chart-item-text">
      <h3>{albumTitle}</h3>
      <p>{trackTitle}</p>
    </div>
  </div>
);

export default Chart;
