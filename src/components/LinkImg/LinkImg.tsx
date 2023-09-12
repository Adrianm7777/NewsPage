interface LinkImgProps {
  href: string;
  className: string;
  src: string;
  alt?: string;
}
const LinkImg = ({ className, href, src, alt = "" }: LinkImgProps) => (
  <a href={href}>
    <img className={className} alt={alt} src={src} />
  </a>
);

export default LinkImg;
