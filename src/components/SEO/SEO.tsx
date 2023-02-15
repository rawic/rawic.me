import { graphql, useStaticQuery } from 'gatsby';

import { SEOProps } from './SEO.types';

export const SEO = ({
    description,
    title,
    image,
    author,
    url,
    children,
    lang = 'en',
}: SEOProps) => {
    const {
        site: { siteMetadata: seo },
    } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        image
                        author
                        url
                        siteUrl
                    }
                }
            }
        `,
    );

    const pageTitle = title || seo.title;
    const pageDescription = description || seo.description;
    const pageUrl = url || seo.url;

    return (
        <>
            {/* General tags */}
            <html lang={lang} />
            <title>{`${pageTitle}`}</title>
            <meta name="description" content={pageDescription} />
            <meta name="author" content={seo.author} />
            <meta name="image" content={seo.image} />
            <link rel="canonical" href={pageUrl} />

            {/* OpenGraph tags */}
            <meta property="og:title" content={pageTitle} />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:image" content={`${seo.siteUrl}/${seo.image}`} />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={pageDescription} />
            <meta name="twitter:image" content={`${seo.siteUrl}/${seo.image}`} />
            {children}
        </>
    );
};
