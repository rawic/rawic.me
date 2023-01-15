import React, { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image";
import { convertToBgImage } from "gbimage-bridge";

const Background = (props) => {
  useEffect(() => {
    document.querySelector(".background")?.classList.add("-active");
  }, []);

  const data = useStaticQuery(graphql`
    {
      home: file(relativePath: { eq: "home-background2.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      portfolio: file(relativePath: { eq: "projects-background.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      personalprojects: file(relativePath: { eq: "personal-background.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  let currentPage;
  if (props.page === "portfolio" || props.page === "personalprojects") {
    currentPage = props.page;
  } else {
    currentPage = "home";
  }

  const image = getImage(data[currentPage]);
  const bgImage = convertToBgImage(image);

  return (
    <React.Fragment>
      <BackgroundImage
        className="background"
        {...bgImage}
        preserveStackingContext
      />
      <div className="flashbg">
        <BackgroundImage {...bgImage} preserveStackingContext />
      </div>
    </React.Fragment>
  );
};

export default Background;
