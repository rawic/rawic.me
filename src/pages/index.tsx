import '../styles/main.sass';

import { graphql } from 'gatsby';

import { SEO } from '@components';
import { Home } from '@features';

import type { PageProps } from 'gatsby';
const IndexPage = (props: PageProps) => {
    return <Home />;
};

export default IndexPage;

export const Head = () => <SEO title="🤓 Front-End Developer" url="https://rawic.me" />;

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
