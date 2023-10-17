interface AllItemTableProps {
  urlToImage?: string | null;
  url?: string;
  title?: string;
  publishedAt?: string;
}

const AllItemTable = ({
  urlToImage,
  url,
  publishedAt,
  title,
}: AllItemTableProps) => (
  <div className="all-item">
    <div className="img-all">
      <a href={url} target="_blank">
        <img src={urlToImage || ""} />
      </a>
    </div>
    <div className="title-all">
      <a href={url} target="_blank">
        <p>{title}</p>
      </a>
    </div>
    <div className="data-all">
      <p>{publishedAt}</p>
    </div>
  </div>
);

export default AllItemTable;
