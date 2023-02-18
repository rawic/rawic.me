import { graphql, useStaticQuery } from 'gatsby';
import { useRef } from 'react';

import BackgroundImage from 'gatsby-background-image';

import { BackgroundProps } from './Background.types';

export const Background = (props: BackgroundProps) => {
    const bgRef = useRef<any>(null);
    const flashRef = useRef<any>(null);

    const data = useStaticQuery(graphql`
        {
            home: file(relativePath: { eq: "home-background.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            portfolio: file(relativePath: { eq: "projects-background.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            personalprojects: file(relativePath: { eq: "personal-background.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    const currentPage = props.page || 'home';
    const imageData = data[currentPage]?.childImageSharp.fluid;

    console.log(imageData, 'asd');

    const image = (
        <BackgroundImage
            className="background"
            alt=""
            fluid={imageData}
            onLoad={() => bgRef.current?.selfRef?.classList.toggle('-active')}
            ref={bgRef}
        />
    );

    return (
        <>
            {image}

            <div className="flashbg" ref={flashRef}>
                {image}
            </div>
        </>
    );
};
