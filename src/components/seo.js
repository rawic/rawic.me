/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, title, image, author, url }) {
  const { site: { siteMetadata: seo } } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            image
            author
            url
          }
        }
      }
    `
  )

  const pageTitle = title || seo.title
  const pageDescription = description || seo.description
  const pageUrl = url || seo.url

  return (
    <Helmet>
      <html lang="pl" />
      {/* General tags */}
      <title>{`${pageTitle} | Rafał Wichowski`}</title>
      <meta name="description" content={pageDescription} />
      <meta name="author" content={seo.author} />
      <meta name="image" content={seo.image} />
      <link rel="canonical" href={pageUrl} />

      {/* OpenGraph tags */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:url" content="https://rawic.me/" />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={seo.image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `pl`,
  meta: [],
  keywords: [],
  description: ``,
  image: ``,
  url: ``
}

SEO.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default SEO
