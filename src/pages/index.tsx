import '../styles/main.sass';

import { graphql } from 'gatsby';

import { SEO } from '@components';
import { Home } from '@features';
import { HeadProps } from '@types';

import type { PageProps } from 'gatsby';
const IndexPage = (props: PageProps) => {
    return <Home location={props.location} />;
};

export default IndexPage;

export const Head = ({ data }: HeadProps) => {
    const { data: locales, language } = data.locales.edges[0].node;
    const obj = locales ? JSON.parse(locales) : {};
    const { title, description } = obj.seo.home;
    const lang = language === 'pl' ? 'pl/' : '';
    const url = `https://rawic.me/${lang}`;

    return <SEO title={`🤓 ${title}`} description={description} url={url} lang={language} />;
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
