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

    const schemaDescription =
        lang === 'en'
            ? 'Experienced Front-End Developer and UI Designer from Warsaw, specializing in building web applications and designing UI. Strong emphasis on attention to detail, good design, and clean code practices. Skilled in HTML5, CSS3, JavaScript, React, and more. Available for new challenges and team projects.'
            : 'Doświadczony Front-End Developer i UI Designer z Warszawy, specjalizujący się w tworzeniu aplikacji internetowych i projektowaniu interfejsu. Skupiam się na dbałości o szczegóły, dobrym designie i czystych praktykach kodowania. Posiadam znajomość HTML5, CSS3, JavaScript, React oraz innych narzędzi. Jestem gotów na nowe wyzwania.';

    const schema = {
        '@context': 'https://schema.org/',
        '@type': 'Person',
        name: 'Rafał Wichowski - RAWIC',
        jobTitle: 'Front-End Developer',
        url: 'https://rawic.me/',
        sameAs: [
            'https://www.linkedin.com/in/rafalwichowski/',
            'https://github.com/rawic',
            'https://twitter.com/rafalwichowski',
        ],
        image: 'https://rawic.me/logo.svg',
        description: {
            '@language': lang,
            '@value': schemaDescription,
        },
        contactPoint: {
            '@type': 'ContactPoint',
            email: 'hi@rawic.me',
        },
    };

    const schemaAsString = JSON.stringify(schema, null, 2);

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
            <meta property="og:image" content={`https://rawic.me/${seo.image}`} />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={pageDescription} />
            <meta name="twitter:image" content={`https://rawic.me/${seo.image}`} />
            <script type="application/ld+json">{schemaAsString}</script>

            {children}
        </>
    );
};
