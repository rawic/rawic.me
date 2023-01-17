import '../styles/main.sass';

import { graphql } from 'gatsby';

import { SEO } from '@components';
import { Home } from '@features';
import { Layout } from '@layouts';

import type { PageProps } from 'gatsby';
const IndexPage = (props: PageProps) => {
    return (
        <Layout location={props.location}>
            <Home />
        </Layout>
    );
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
