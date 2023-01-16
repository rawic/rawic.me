import React from "react";
import { Link } from "gatsby";
import * as menuStyles from "./menu.module.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { faUser, faLaughBeam } from "@fortawesome/free-regular-svg-icons";
import { useTranslation } from "gatsby-plugin-react-i18next";

const Menu = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "navigation",
  });

  const isCurrent = ({ isCurrent }) => {
    return isCurrent ? { className: menuStyles.active } : null;
  };

  return (
    <nav>
      <ul className={menuStyles.navList}>
        <li>
          <Link to="/" getProps={isCurrent}>
            <span className={menuStyles.link}>{t("greetings")}</span>
            <span className={menuStyles.dot} />
          </Link>
        </li>
        <li>
          <Link to="/portfolio/" getProps={isCurrent}>
            <span className={menuStyles.link}>{t("portfolio")}</span>
            <span className={menuStyles.dot} />
          </Link>
        </li>
        <li>
          <Link to="/personal-projects/" getProps={isCurrent}>
            <span className={menuStyles.link}>{t("my-projects")}</span>
            <span className={menuStyles.dot} />
          </Link>
        </li>
        <li>
          <a
            href="/Rafał-Wichowski-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={menuStyles.link}>{t("cv")}</span>
            <span className={menuStyles.dot} />
          </a>
        </li>
      </ul>
      <ul className={menuStyles.mobileNav}>
        <li>
          <Link to="/" getProps={isCurrent}>
            <FontAwesomeIcon icon={faLaughBeam} />
            {t("greetings")}
          </Link>
        </li>
        <li>
          <Link to="/portfolio/" getProps={isCurrent}>
            <FontAwesomeIcon icon={faDesktop} />
            {t("portfolio")}
          </Link>
        </li>
        <li>
          <Link to="/personal-projects/" getProps={isCurrent}>
            <FontAwesomeIcon icon={faUser} />
            {t("my-projects")}
          </Link>
        </li>
        <li>
          <a
            href="/Rafał-Wichowski-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faPaperclip} />
            {t("cv")}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
