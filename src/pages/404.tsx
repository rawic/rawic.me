import { graphql } from 'gatsby';

import { SEO } from '@components';
import { HeadProps } from '@types';

const NotFoundPage = () => (
    <>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </>
);

export default NotFoundPage;

export const Head = ({
    data,
    pageContext: {
        i18n: { originalPath },
    },
}: HeadProps) => {
    const { language } = data.locales.edges[0].node;
    const lang = language === 'pl' ? 'pl/' : '';
    const url = `https://rawic.me/${lang}`;
    const altUrl = `https://rawic.me${language === 'en' ? '/pl' : ''}${originalPath}`;

    return <SEO title="404: Not found" url={url} lang={language} altUrl={altUrl} />;
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
