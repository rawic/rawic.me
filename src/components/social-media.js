import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInvision,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import * as stylesSocialMedia from "./social-media.module.sass";
import { useTranslation } from "gatsby-plugin-react-i18next";

const SocialMedia = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "social",
  });

  return (
    <ul className={stylesSocialMedia.socialMedia}>
      <li>
        <a
          href="https://github.com/rawic"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title={t("github")}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <a
          href="https://projects.invisionapp.com/share/CZQAF2DKATX"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Dribbble"
          title={t("invision")}
        >
          <FontAwesomeIcon icon={faInvision} />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/rwichowski/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
          title={t("linkedin")}
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
