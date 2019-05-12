import React, { Component } from "react"
import SEO from "../components/seo"
import homeStyles from "../components/home.module.sass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import Project from "../components/personal-project"

class PersonalProjectsPage extends Component {
  componentDidMount() {
    setTimeout(() => {
      document.querySelector("main").className = "active"
    }, 100)
  }

  render() {
    return (
      <section>
        <SEO
          title="🤓 Projekty własne"
          url="https://rawic.me/personal-projects/"
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
                # Kilka projektów nad którymi aktualnie pracuję
              </span>
              <h2 className={`${homeStyles.title}`}>
                W&nbsp;wolnym czasie staram się realizować{" "}
                <span className="break">
                  własne pomysły, którymi chętnie dzielę się z&nbsp;innymi.
                </span>
              </h2>
            </header>
            <div className={homeStyles.projectList}>
              <Project
                name="Root Wood Studio"
                slug="rootwoodstudio"
                description="Jeden z pierwszych moich pomysłów realizowanych po godzinach. Sklep internetowy z biurkami dla najbardziej wymagających (a w tym dla graczy)."
                tags="Photoshop, Illustrator, Balsamiq Mockups"
                githubUrl="https://github.com/"
                url="https://rawic.me"
                isFeatured
              />
              <Project
                name="Dribbi"
                slug="dribbi"
                description="Aplikacja, która śledzi czas wykonywanych operacji.
Podobna do aplikacji Toggl, ale w pełni darmowa i z nieco innymi funkcjami."
                tags="Sass, React, Node.js, Express, MongoDB, Photoshop"
                githubUrl="https://github.com/"
                url="https://rawic.me"
                isFeatured
              />
            </div>
          </article>
        </div>
      </section>
    )
  }
}

export default PersonalProjectsPage
