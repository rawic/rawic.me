import { graphql, useStaticQuery } from 'gatsby';
import { useRef, useEffect, useState } from 'react';

import BackgroundImage from 'gatsby-background-image';
import { Suspense } from 'react';

import { BackgroundProps } from './Background.types';

export const Background = (props: BackgroundProps) => {
    const bgRef = useRef<any>(null);
    const flashRef = useRef<any>(null);
    const [isLoaded, setIsLoaded] = useState(false);

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

    useEffect(() => {
        if (bgRef.current?.selfRef?.classList && !isLoaded) {
            bgRef.current.selfRef.classList.add('-active');
            setIsLoaded(true);
        }
    }, [bgRef, isLoaded]);

    if (!imageData) {
        return null;
    }

    return (
        <Suspense fallback={null}>
            <BackgroundImage className="background" alt="" fluid={imageData} ref={bgRef} />

            <div className="flashbg" ref={flashRef}>
                <BackgroundImage className="background" alt="" fluid={imageData} />
            </div>
        </Suspense>
    );
};
