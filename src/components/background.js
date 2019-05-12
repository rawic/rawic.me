import React, { useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const Background = (props) => {
  useEffect(() => {
    document.querySelector('.background').classList.add('-active')
  })
  const data = useStaticQuery(graphql`
    {
      home: file(relativePath: {eq: "home-background2.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 4160, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      portfolio: file(relativePath: {eq: "projects-background.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 4160, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      personalprojects: file(relativePath: {eq: "personal-background.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 4160, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  let currentPage
  if (props.page === 'portfolio' || props.page === 'personalprojects') {
    currentPage = props.page
  } else {
    currentPage = 'home'
  }

  return (
    <React.Fragment>
      <BackgroundImage className="background" fluid={data[currentPage].childImageSharp.fluid} />
      <div className="flashbg">
        <BackgroundImage fluid={data[currentPage].childImageSharp.fluid} />
      </div>
    </React.Fragment>
  )
}

export default Background
