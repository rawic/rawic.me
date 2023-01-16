import React, { useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import BackgroundImage from "gatsby-background-image";
import { convertToBgImage } from "gbimage-bridge";

const Background = (props) => {
  const bgRef = useRef();

  const data = useStaticQuery(graphql`
    {
      home: file(relativePath: { eq: "home-background2.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      portfolio: file(relativePath: { eq: "projects-background.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      personalprojects: file(relativePath: { eq: "personal-background.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const currentPage = props.page || "home";
  const image = getImage(data[currentPage]);
  const imageData = data[currentPage].childImageSharp.fluid;

  return (
    <React.Fragment>
      <BackgroundImage
        className="background"
        ref={bgRef}
        onLoad={() => bgRef.current?.selfRef.classList.add("-active")}
        fluid={imageData}
        preserveStackingContext
      />
      <div className="flashbg">
        <BackgroundImage fluid={imageData} preserveStackingContext />
      </div>
    </React.Fragment>
  );
};

export default Background;
