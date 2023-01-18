import { motion } from 'framer-motion';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import React, { useEffect, useRef } from 'react';

import { BackgroundProps } from './Background.types';

export const Background = (props: BackgroundProps) => {
    const bgRef = useRef<any>(null);
    const flashRef = useRef<any>(null);

    console.log(props, 'asd');

    // add class to flashRef element every time bgRef changes
    // useEffect(() => {
    //     if (flashRef?.current) {
    //         flashRef.current.classList.add('-run-immediately');
    //     }
    // }, [bgRef]);

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
            <motion.div
                className="flashbg"
                ref={flashRef}
                initial={{ opacity: 1 }}
                // animate={{ opacity: 0 }}
                transition={{
                    type: 'spring',
                    // damping: 10,
                    // stiffness: 200,
                    bounce: 0.1,
                    // velocity: 3,
                    // duration: 0.2,
                    repeatType: 'reverse',
                    repeat: 0,
                }}
                animate={{
                    opacity: 0,
                    filter: 'blur(15px)',
                    // transitionEnd: {
                    //     opacity: 0,
                    // },
                }}
                // transition={{ duration: 0.5 }}
                key={currentPage}
            >
                <BackgroundImage {...bgImage} preserveStackingContext />
            </motion.div>
        </>
    );
};
