import React from "react";

interface LatestDataItemProps {
  urlToImage?: string;
  title?: string;
  publishedAt?: string;
}

const LatestDataItem = ({
  urlToImage,
  title,
  publishedAt,
}: LatestDataItemProps) => (
  <div className="latest-item">
    <img src={urlToImage || undefined} />
    <h2>{title}</h2>
    <p>{publishedAt}</p>
  </div>
);

export default LatestDataItem;
