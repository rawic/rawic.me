import React, { useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import BackgroundImage from 'gatsby-background-image';
import { BackgroundProps } from './Background.types';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';

export const Background = (props: BackgroundProps) => {
    const bgRef = useRef<any>(null);
    console.log(props, 'props');

    const data = useStaticQuery(graphql`
        {
            home: file(relativePath: { eq: "home-background2.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
                }
            }
            portfolio: file(relativePath: { eq: "projects-background.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
                }
            }
            personalprojects: file(relativePath: { eq: "personal-background.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
                }
            }
        }
    `);

    const currentPage = props.page || 'home';
    const imageData = data[currentPage].childImageSharp.gatsbyImageData;
    const image = getImage(imageData);
    const bgImage = convertToBgImage(image);

    return (
        <>
            <BackgroundImage
                Tag="div"
                className="background"
                ref={bgRef}
                onLoad={() => bgRef.current?.selfRef?.classList.add('-active')}
                {...bgImage}
                preserveStackingContext
            />
            <div className="flashbg">
                <BackgroundImage {...bgImage} preserveStackingContext />
            </div>
        </>
    );
};
