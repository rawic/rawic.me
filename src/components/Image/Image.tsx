import { StaticQuery, graphql } from 'gatsby';

import { GatsbyImage } from 'gatsby-plugin-image';

export const Image = () => (
    <StaticQuery
        query={graphql`
            query {
                placeholderImage: file(relativePath: { eq: "rawic.png" }) {
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
            }
        `}
        render={(data) => <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="" />}
    />
);
