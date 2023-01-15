import React from "react";
import * as stylesPortfolio from "../components/portfolio.module.sass";
import Seo from "../components/seo";
import Project from "../components/portfolio-project";
import * as homeStyles from "../components/home.module.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Layout from "../components/layout";

const PortfolioPage = (props) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "portfolio",
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      document.querySelector("main").className = "active";
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Layout location={props.location}>
      <Seo title="🤓 Portfolio" url="https://rawic.me/portfolio/" />
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
            <span className={`${homeStyles.me}`}>{t("heading")}</span>
            <h2 className={`${homeStyles.title}`}>
              {t("description.part-1")}
              <span className="break">{t("description.part-2")}</span>
            </h2>
          </header>
          <ul className={stylesPortfolio.portfolioList}>
            <Project
              company="CoinDeal"
              name="logoCoindeal"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAA0AQMAAABWy9RQAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABZJREFUeNpjYBgFo2AUjIJRMAqGLwAABugAAfbAlIIAAAAASUVORK5CYII="
            />
            <Project
              company="Rodzicowo"
              name="logoRodzicowo"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAABxAQMAAACnTQ4nAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABlJREFUeNrtwQENAAAAwqD3T20PBxQAAHBoC+sAASvGaWEAAAAASUVORK5CYII="
            />

            <Project
              company="Marine Harvest"
              name="logoMarineHarvest"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAACVAQMAAAADn6g0AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABpJREFUeNrtwQENAAAAwqD3T20ON6AAAAAeDQzOAAHcmFxRAAAAAElFTkSuQmCC"
            />
            <Project
              company="More From VR"
              name="logoMoreFromVr"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAACJAQMAAAC1l+wVAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABRJREFUeNpjYBgFo2AUjIJRQF0AAAVaAAETob3RAAAAAElFTkSuQmCC"
            />

            <Project
              company="Reality Busters"
              name="logoRealityBusters"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQkAAABdAQMAAACMzgFyAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABpJREFUeNrtwTEBAAAAwqD1T20ND6AAAACuDQy3AAHGoACMAAAAAElFTkSuQmCC"
            />
            <Project
              company="FutureNet"
              name="logoFuturenet"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQYAAABQAQMAAADBW0khAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABpJREFUeNrtwTEBAAAAwqD1T20ND6AAAODHAAqgAAEuadaRAAAAAElFTkSuQmCC"
            />
            <Project
              company="Profabrica"
              name="logoProfabrica"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQYAAABQAQMAAADBW0khAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABpJREFUeNrtwTEBAAAAwqD1T20ND6AAAODHAAqgAAEuadaRAAAAAElFTkSuQmCC"
            />
            <Project
              company="Aber"
              name="logoAber"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAeAQMAAADkYPmNAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAA5JREFUeNpjYBgFgx0AAAGkAAF+IKsZAAAAAElFTkSuQmCC"
            />

            <Project
              company="Malpin"
              name="logoMalpin"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANMAAABIAQMAAABWaFIaAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABdJREFUeNpjYBgFo2AUjIJRMApGwXADAAfgAAFTgS4yAAAAAElFTkSuQmCC"
            />
            <Project
              company="Root Wood Studio"
              name="logoRootWoodStudio"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANcAAAAeAQMAAACFVBmKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABBJREFUeNpjYBgFo2AUUAoAA0gAAfvRrjEAAAAASUVORK5CYII="
              isPersonal
            />
          </ul>
        </article>
      </div>
    </Layout>
  );
};

export default PortfolioPage;
