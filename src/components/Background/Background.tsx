import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useEffect, useRef, useState } from 'react';

import { useDidUpdateEffect } from '@hooks';

import { BackgroundProps } from './Background.types';

export const Background = (props: BackgroundProps) => {
    const [loaded, setLoaded] = useState(false);
    const bgRef = useRef<any>(null);
    const flashRef = useRef<any>(null);

    const handleLoad = () => setLoaded(true);

    useEffect(() => {
        if (bgRef.current.complete) setLoaded(true);
    }, []);

    useDidUpdateEffect(() => {
        if (flashRef?.current && loaded) {
            flashRef.current.classList.add('-run-immediately');
            const timeout = setTimeout(
                () => flashRef.current.classList.remove('-run-immediately'),
                1000,
            );

            return () => {
                clearTimeout(timeout);
            };
        }
    }, [loaded]);

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

    const currentPage = props.page || 'home';
    const imageData = data[currentPage]?.childImageSharp.gatsbyImageData;

    const image = <GatsbyImage onLoad={handleLoad} alt="" image={imageData} />;

    return (
        <div ref={bgRef} className={`background ${loaded && '-active'}`}>
            {image}

            <div className="flashbg" ref={flashRef}>
                {image}
            </div>
        </div>
    );
};
