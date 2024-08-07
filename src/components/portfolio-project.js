import React, { Component } from "react"
import stylesPortfolio from './portfolio.module.sass'

class Project extends Component {
  render() {
    return (
      <li className={stylesPortfolio.singleProject}>
        <div className={stylesPortfolio.imageContainer}>
          <img className={`${stylesPortfolio.logo} ${stylesPortfolio[this.props.name]}`} src={this.props.src} alt={this.props.company}/>
        </div>
        {this.props.isPersonal ? <span className={stylesPortfolio.personal}>Własny projekt</span> : ''}
      </li>
    )
  }
}

export default Project
