import React from "react";
import sayKarenLogo from "../Assests/sayKarenWhite.png";
import headphones from "./../Assests/headphones.png";

const Footer = () => (
  <footer id="footer" className="footerDetails">
    <section>
      Website created by:
      <a href="http://saykaren.com" target="_blank" rel="noopener noreferrer">
        <img
          src={sayKarenLogo}
          className="footerDetails"
          id="sayKarenLogo"
          alt="sayKaren.com"
        />
      </a>
    </section>
    <section className="music">
      <a
        href="https://open.spotify.com/playlist/5CcMpyH0f05YXqwNrHEvHz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={headphones} alt="music" />
      </a>
    </section>
  </footer>
);

export default Footer;
