import React from "react";
import footerStyles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const {
    footerContent,
    textBlock,
    header,
    textString,
    lineSeperator,
    emailLink,
    emailSpan,
    socialLinks,
    socialLink
  } = footerStyles;
  return (
    <footer className={footerContent}>
      <div className={textBlock}>
        <h1 className={header}>Want to hear more?</h1>
        <p className={textString}>
          Do you want to hear something funny, or just shoot the breeze. Send me
          an email and tell me about it. I ♥︎ emails.
        </p>
        <hr className={lineSeperator}></hr>
        <a className={emailLink}>
          Email - <span className={emailSpan}> moc.liamg@kvanhsirkkeviv </span>
        </a>
        <hr className={lineSeperator}></hr>
        <ul className={socialLinks}>
          <li className={socialLink}>
            <a>
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </li>
          <li className={socialLink}>
            <a>
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
          </li>
          <li className={socialLink}>
            <a>
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
          </li>
          <li className={socialLink}>
            <a>
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </li>
          <li className={socialLink}>
            <a>
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
