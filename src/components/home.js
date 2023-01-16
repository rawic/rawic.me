import React from "react";
import * as homeStyles from "./home.module.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useTranslation } from "gatsby-plugin-react-i18next";

const Home = () => {
  const { t } = useTranslation();

  const thanks = t("home.cv.thanks");

  return (
    <div className="main-box">
      <div className={homeStyles.arrowsBox}>
        <button type="button" aria-hidden="true">
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
        <button type="button" aria-hidden="true">
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </div>
      <article className={homeStyles.articleBox}>
        <header className={`${homeStyles.articleHeader} gradient-text`}>
          <h2 className={`${homeStyles.title}`}>
            <span className={`${homeStyles.me}`}>{t("home.heading")}</span>
            {t("subheading.part-1")}
            <span className="s-white">{t("subheading.warsaw.part-1")}</span>
            <span className="s-red">{t("subheading.warsaw.part-2")}</span>,
            <span className="break">{t("subheading.part-2")}</span>
          </h2>
        </header>
        <section>
          <h3>{t("about.heading")}</h3>
          <p>{t("about.description")}</p>

          <p>{t("about.description-2")}</p>
        </section>
        <section className={homeStyles.experienceBox}>
          <h4>
            {t("experience.heading.part-1")}
            <span className={homeStyles.heart}>
              <FontAwesomeIcon icon={faHeart} />
            </span>{" "}
            {t("experience.heading.part-2")}
          </h4>
          <ul className={homeStyles.skillsList}>
            <li className={homeStyles.highlight}>HTML5</li>
            <li>Nunjucks</li>
            <li>PUG (Jade)</li>
          </ul>

          <ul className={homeStyles.skillsList}>
            <li className={homeStyles.highlight}>CSS3</li>
            <li>Sass</li>
            <li>SCSS</li>
            <li>Bootstrap</li>
            <li>Foundation</li>
          </ul>

          <ul className={homeStyles.skillsList}>
            <li className={homeStyles.highlight}>JavaScript</li>
            <li>ES5/6</li>
            <li>
              React (Redux, Gatsby, GraphQL, Storybook, React Testing Library,
              Jest)
            </li>
            <li>TypeScript</li>
            <li>Strapi</li>
            <li>Vue.js</li>
            <li>Webpack</li>
            <li>Parcel</li>
          </ul>

          <ul className={homeStyles.skillsList}>
            <li className={homeStyles.highlight}>Design</li>
            <li>Figma</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>XD</li>
            <li>Invision</li>
            <li>Balsamiq Mockups</li>
          </ul>

          <ul className={homeStyles.skillsList}>
            <li className={homeStyles.highlight}>Git</li>
            <li>BitBucket</li>
            <li>GitHub</li>
            <li>GitLab</li>
          </ul>
        </section>

        <a
          href={"/Rafał-Wichowski-Resume.pdf"}
          className={homeStyles.btn}
          target="_blank"
          rel="noopener noreferrer"
          title={t("cv.title")}
          data-text={t("cv.data")}
        >
          {thanks.split("").map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </a>
      </article>
    </div>
  );
};

export default Home;
