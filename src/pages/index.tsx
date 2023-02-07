import '../styles/main.sass';

import { graphql } from 'gatsby';

import { SEO } from '@components';
import { Home } from '@features';

import type { PageProps } from 'gatsby';
const IndexPage = (props: PageProps) => {
    return <Home location={props.location} />;
};

export default IndexPage;

interface HeadProps {
    data: {
        locales: {
            edges: {
                node: {
                    data: string;
                };
            }[];
        };
    };
}

export const Head = ({ data }: HeadProps) => {
    const locales = data.locales.edges[0].node.data;
    let obj = undefined;

    if (locales) {
        obj = JSON.parse(locales);
    }

    return (
        <SEO
            title={`🤓 ${obj?.['seo']['home']['title']}`}
            description={obj?.['seo']['home']['description']}
            url="https://rawic.me/"
        />
    );
};

export const query = graphql`
    query ($language: String!) {
        locales: allLocale(filter: { language: { eq: $language } }) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }
    }
`;
