import React from "react";
import SEO from "../components/seo";
import homeStyles from "../components/home.module.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Project from "../components/personal-project";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const PersonalProjectsPage = () => {
    const { t } = useTranslation("translation", {
        keyPrefix: "personal-projects",
    });

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            document.querySelector("main").className = "active";
        }, 100);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <section>
            <SEO
                title={`🤓 ${t("seo-title")}`}
                url="https://rawic.me/personal-projects/"
            />
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
                    <header
                        className={`${homeStyles.articleHeader} gradient-text`}
                    >
                        <span className={`${homeStyles.me}`}>
                            {t("heading")}
                        </span>
                        <h2 className={`${homeStyles.title}`}>
                            {t("description.part-1")}
                            <span className="break">
                                {t("description.part-2")}
                            </span>
                        </h2>
                    </header>
                    <div className={homeStyles.projectList}>
                        <Project
                            name="Root Wood Studio"
                            slug="rootwoodstudio"
                            description={t("projects.project-1.description")}
                            tags="Photoshop, Illustrator, Balsamiq Mockups"
                            url="https://projects.invisionapp.com/share/CZQAF2DKATX#/screens/362088531"
                            isFeatured
                        />
                        <Project
                            name="Dribbi"
                            slug="dribbi"
                            description={t("projects.project-2.description")}
                            tags="Sass, React, Node.js, Express, MongoDB, Photoshop"
                            url="https://projects.invisionapp.com/share/CZQAF2DKATX#/screens/362091378"
                            isFeatured
                        />
                    </div>
                </article>
            </div>
        </section>
    );
};

export default PersonalProjectsPage;
