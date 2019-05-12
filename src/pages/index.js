import React, { Component } from "react"

import SEO from "../components/seo"
import Home from "../components/home"
import "../styles/main.sass"

class IndexPage extends Component {
  componentDidMount() {
    setTimeout(() => {
      document.querySelector('main').className = ('active')
    }, 100)
  }

  render() {
    return (
      <React.Fragment>
        <SEO title="🤓 Front-End Developer" url="https://rawic.me" />
        <Home />
      </React.Fragment>
    )
  }
}

export default IndexPage
