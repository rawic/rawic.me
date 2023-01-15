import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import personalProjectStyles from "../components/personal-project.module.sass";
import { useTranslation } from "react-i18next";

const Project = (props) => {
    const { t } = useTranslation("translation", {
        keyPrefix: "personal-projects",
    });

    const data = useStaticQuery(graphql`
        {
            rootwoodstudio: file(
                relativePath: { eq: "in-progress/root-wood-studio.jpg" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 700, maxHeight: 500, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            dribbi: file(relativePath: { eq: "in-progress/dribbi.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 700, maxHeight: 500, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <article className={personalProjectStyles.personalProject}>
            <figure className={personalProjectStyles.image}>
                <Img fluid={data[props.slug].childImageSharp.fluid} />
            </figure>
            <div className={personalProjectStyles.content}>
                <header>
                    {props.isFeatured ? (
                        <span className={personalProjectStyles.featured}>
                            {t("featured")}
                        </span>
                    ) : (
                        ""
                    )}
                    <h3 className={personalProjectStyles.title}>
                        {props.name}
                    </h3>
                </header>

                <p className={personalProjectStyles.description}>
                    {props.description}
                </p>

                <footer>
                    <ul className={personalProjectStyles.tagsUl}>
                        {props.tags.split(", ").map((tag) => (
                            <li key={tag}>{tag}</li>
                        ))}
                    </ul>
                    {props.githubUrl && (
                        <a
                            href={props.githubUrl}
                            className={personalProjectStyles.icon}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    )}
                    <a
                        href={props.url}
                        className={personalProjectStyles.icon}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Root Wood Studio"
                    >
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                </footer>
            </div>
        </article>
    );
};

export default Project;
