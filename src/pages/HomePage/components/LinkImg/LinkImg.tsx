interface LinkImgProps {
  href?: string;
  className: string;
  src: string;
  alt?: string;
  onClick?: () => void;
}
const LinkImg = ({ className, href, src, alt = "", onClick }: LinkImgProps) => (
  <a href={href}>
    <img className={className} onClick={onClick} alt={alt} src={src} />
  </a>
);

export default LinkImg;
