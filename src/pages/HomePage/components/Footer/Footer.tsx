import "./Footer.css";
import { FOOTER_DATA } from "./Footer.consts";

const Footer = () => (
  <div className="footer">
    <div className="social-media">
      <h2>Social media</h2>
      {FOOTER_DATA.socialMedia.map((socialMedia) => (
        <a href={socialMedia.href} key={socialMedia.id}>
          {socialMedia.name}
        </a>
      ))}
    </div>
    <div className="site-map">
      <div className="site-map-1">
        <h2>Sitemap</h2>
        {FOOTER_DATA.siteMap1.map((siteMap1) => (
          <a href={siteMap1.href} key={siteMap1.id}>
            {siteMap1.name}
          </a>
        ))}
      </div>
      <div className="site-map-2">
        {FOOTER_DATA.siteMap2.map((siteMap2) => (
          <a href={siteMap2.href} key={siteMap2.id}>
            {siteMap2.name}
          </a>
        ))}
      </div>
    </div>
    <div className="languages">
      <h2>Language</h2>
      <div className="language-choose">
        {FOOTER_DATA.languages.map((languages) => (
          <a key={languages.id}>{languages.name}</a>
        ))}
      </div>
    </div>
  </div>
);

export default Footer;
