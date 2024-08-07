import React, { Component } from "react"
import stylesPortfolio from '../components/portfolio.module.sass'
import SEO from "../components/seo"
import Project from "../components/portfolio-project"
import homeStyles from "../components/home.module.sass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"

class PortfolioPage extends Component {
  componentDidMount() {
    setTimeout(() => {
      document.querySelector('main').className = ('active')
    }, 100)
  }

  render() {
    return (
      <React.Fragment>
        <SEO
          title="🤓 Portfolio"
          url="https://rawic.me/portfolio/"
        />
        <div className="main-box">
          <div className={homeStyles.arrowsBox}>
            <button type="button" aria-hidden="true">
              <FontAwesomeIcon icon={faChevronUp} />
            </button>
            <button type="button" aria-hidden="true">
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
          </div>
          <article className={homeStyles.articleBox}>
            <header className={`${homeStyles.articleHeader} gradient-text`}>
              <span className={`${homeStyles.me}`}>
                {/*# Some projects in which I participated*/}
                Niektóre projekty, w których uczestniczyłem
              </span>
              <h2 className={`${homeStyles.title}`}>
                {/*It was a great pleasure to be able to work on <span className="break">these projects.</span>*/}
                Praca nad tymi aplikacjami była dla mnie <span className="break">wielką przyjemnością. Dziękuję.</span>
              </h2>
            </header>
            <ul className={stylesPortfolio.portfolioList}>
              <Project company="CoinDeal" name="logoCoindeal" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAA0AQMAAABWy9RQAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABZJREFUeNpjYBgFo2AUjIJRMAqGLwAABugAAfbAlIIAAAAASUVORK5CYII="/>
              <Project company="Rodzicowo" name="logoRodzicowo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAABxAQMAAACnTQ4nAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABlJREFUeNrtwQENAAAAwqD3T20PBxQAAHBoC+sAASvGaWEAAAAASUVORK5CYII="/>

              <Project company="Marine Harvest" name="logoMarineHarvest" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAACVAQMAAAADn6g0AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABpJREFUeNrtwQENAAAAwqD3T20ON6AAAAAeDQzOAAHcmFxRAAAAAElFTkSuQmCC"/>
              <Project company="More From VR" name="logoMoreFromVr" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAACJAQMAAAC1l+wVAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABRJREFUeNpjYBgFo2AUjIJRQF0AAAVaAAETob3RAAAAAElFTkSuQmCC"/>

              <Project company="Reality Busters" name="logoRealityBusters" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQkAAABdAQMAAACMzgFyAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABpJREFUeNrtwTEBAAAAwqD1T20ND6AAAACuDQy3AAHGoACMAAAAAElFTkSuQmCC"/>
              <Project company="FutureNet" name="logoFuturenet" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQYAAABQAQMAAADBW0khAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABpJREFUeNrtwTEBAAAAwqD1T20ND6AAAODHAAqgAAEuadaRAAAAAElFTkSuQmCC"/>
              <Project company="Profabrica" name="logoProfabrica" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQYAAABQAQMAAADBW0khAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABpJREFUeNrtwTEBAAAAwqD1T20ND6AAAODHAAqgAAEuadaRAAAAAElFTkSuQmCC"/>
              <Project company="Aber" name="logoAber" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAeAQMAAADkYPmNAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAA5JREFUeNpjYBgFgx0AAAGkAAF+IKsZAAAAAElFTkSuQmCC"/>

              <Project company="Malpin" name="logoMalpin" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANMAAABIAQMAAABWaFIaAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABdJREFUeNpjYBgFo2AUjIJRMApGwXADAAfgAAFTgS4yAAAAAElFTkSuQmCC"/>
              <Project company="Root Wood Studio" name="logoRootWoodStudio" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANcAAAAeAQMAAACFVBmKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABBJREFUeNpjYBgFo2AUUAoAA0gAAfvRrjEAAAAASUVORK5CYII=" isPersonal/>
            </ul>
          </article>
        </div>
      </React.Fragment>
    )
  }
}

export default PortfolioPage
