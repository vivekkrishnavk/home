import React from "react";
import containerStyles from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const Header = () => (
  <header className={containerStyles.header}>
    <div className={containerStyles.sideTop}>
      <a>
        <h1 className={containerStyles.brandName}>Vivek Krishna</h1>
      </a>
      <hr className={containerStyles.separator} />
      <p className={containerStyles.jobTitle}>Java developer</p>
      <p className={containerStyles.jobTitle}>React developer</p>
      <p className={containerStyles.jobTitle}>Full-stack developer</p>
    </div>
    <div className={containerStyles.sideNav}>
      <nav>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Clients</a>
          </li>
          <li>
            <a>Portfolio</a>
          </li>
          <li>
            <a>Articles</a>
          </li>
          <li>
            <a>Notes</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
    <div className={containerStyles.sidebottom}>
      <p className={containerStyles.jobTitle}>
        Like what you see? Send me an email and tell me about it
        <a>
          <span> moc.liamg@kvanhsirkkeviv </span>
        </a>
        <br />I ♥︎ emails.
      </p>
      <hr className={containerStyles.separator} />
      <ul className={containerStyles.socialLinks}>
        <li className={containerStyles.socialLink}>
          <a>
            <FontAwesomeIcon icon={faGithub} size="md" />
          </a>
        </li>
        <li className={containerStyles.socialLink}>
          <a>
            <FontAwesomeIcon icon={faTwitter} size="md" />
          </a>
        </li>
        <li className={containerStyles.socialLink}>
          <a>
            <FontAwesomeIcon icon={faFacebook} size="md" />
          </a>
        </li>
        <li className={containerStyles.socialLink}>
          <a>
            <FontAwesomeIcon icon={faInstagram} size="md" />
          </a>
        </li>
        <li className={containerStyles.socialLink} size="md">
          <a>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
