import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import * as personalProjectStyles from "../components/personal-project.module.sass";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { getImage } from "gatsby-plugin-image"

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
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      dribbi: file(relativePath: { eq: "in-progress/dribbi.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  const image = getImage(data[props.slug]);

  console.log(t, 't');

  return (
    <article className={personalProjectStyles.personalProject}>
      <figure className={personalProjectStyles.image}>
        <GatsbyImage image={image} alt="" />
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
          <h3 className={personalProjectStyles.title}>{props.name}</h3>
        </header>

        <p className={personalProjectStyles.description}>{props.description}</p>

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
