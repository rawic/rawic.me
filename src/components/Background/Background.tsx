import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useEffect, useState } from 'react';

import { BackgroundProps } from './Background.types';

export const Background = (props: BackgroundProps) => {
    const [loaded, setLoaded] = useState(false);

    const handleLoad = () => setLoaded(true);

    const data = useStaticQuery(graphql`
        {
            home: file(relativePath: { eq: "home-background.jpg" }) {
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

    useEffect(() => {
        const background = document.querySelector('.background');
        if (loaded && background) {
            background.classList.add('-active');
        }
    }, [loaded]);

    const currentPage = props.page || 'home';
    const imageData = data[currentPage]?.childImageSharp.gatsbyImageData;

    return (
        <div className="background">
            <GatsbyImage onLoad={handleLoad} alt="" image={imageData} />
            <div className="flashbg">
                <GatsbyImage onLoad={handleLoad} alt="" image={imageData} />
            </div>
        </div>
    );
};
