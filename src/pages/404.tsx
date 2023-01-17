import { graphql } from 'gatsby';

import { SEO } from '@components';

const NotFoundPage = () => (
    <>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </>
);

export default NotFoundPage;

export const Head = () => <SEO title="404: Not found" />;

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
