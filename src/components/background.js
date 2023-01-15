import React, { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

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

  return (
    <React.Fragment>
      <BackgroundImage
        className="background"
        image={data[currentPage].childImageSharp.fullWidth}
      />
      <div className="flashbg">
        <BackgroundImage image={data[currentPage].childImageSharp.fullWidth} />
      </div>
    </React.Fragment>
  );
};

export default Background;
