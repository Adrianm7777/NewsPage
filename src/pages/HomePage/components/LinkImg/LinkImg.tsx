interface LinkImgProps {
  className: string;
  src: string;
  alt?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const LinkImg = ({ className, src, alt = "", onClick }: LinkImgProps) => (
  <button onClick={onClick}>
    <img className={className} alt={alt} src={src} />
  </button>
);

export default LinkImg;
