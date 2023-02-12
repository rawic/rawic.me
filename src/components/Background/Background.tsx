import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
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
    // const image = getImage(imageData);
    // const bgImage = convertToBgImage(image);

    // if (!bgImage) {
    //     return null;
    // }

    return (
        <div ref={bgRef} className="background">
            {/* <StaticImage
                src="../../images/home-background.jpg"
                alt=""
                placeholder="blurred"
                layout="fullWidth"
                quality={100}
                formats={['auto', 'webp']}
                className="background"
                onLoad={() => bgRef.current?.selfRef?.classList.add('-active')}
            /> */}

            <GatsbyImage
                onLoad={() => bgRef.current?.classList.add('-active')}
                alt=""
                image={imageData}
            />

            <div className="flashbg" ref={flashRef} key={currentPage}>
                {/* <BackgroundImage {...bgImage} preserveStackingContext /> */}

                <GatsbyImage
                    onLoad={() => bgRef.current?.classList.add('-active')}
                    alt=""
                    image={imageData}
                />

                {/* <StaticImage
                    src="../../images/home-background.jpg"
                    alt=""
                    placeholder="blurred"
                    layout="fullWidth"
                    quality={100}
                    formats={['auto', 'webp']}
                    className="background"
                    onLoad={() => bgRef.current?.selfRef?.classList.add('-active')}
                /> */}
            </div>
        </div>
    );
};
