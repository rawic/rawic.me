import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import { useRef } from 'react';

import { useDidUpdateEffect } from '@hooks';

import { BackgroundProps } from './Background.types';

export const Background = (props: BackgroundProps) => {
    const bgRef = useRef<any>(null);
    const flashRef = useRef<any>(null);

    useDidUpdateEffect(() => {
        if (flashRef?.current) {
            flashRef.current.classList.add('-run-immediately');
            const timeout = setTimeout(
                () => flashRef.current.classList.remove('-run-immediately'),
                1000,
            );

            return () => {
                clearTimeout(timeout);
            };
        }
    }, [bgRef.current?.selfRef]);

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
    const imageData = data[currentPage]?.childImageSharp.gatsbyImageData;
    const image = getImage(imageData);
    const bgImage = convertToBgImage(image);

    if (!bgImage) {
        return null;
    }

    return (
        <>
            <BackgroundImage
                Tag="div"
                className="background"
                ref={bgRef}
                onLoad={() => bgRef.current?.selfRef?.classList.add('-active')}
                {...bgImage}
                preserveStackingContext
                critical
            />
            <div className="flashbg" ref={flashRef} key={currentPage}>
                <BackgroundImage {...bgImage} preserveStackingContext critical />
            </div>
        </>
    );
};
