import React from "react"
import { Link } from "gatsby"
import menuStyles from "./menu.module.sass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDesktop, faPaperclip } from "@fortawesome/free-solid-svg-icons"
import { faUser, faLaughBeam } from "@fortawesome/free-regular-svg-icons"

const Menu = () => {
  const isCurrent = ({ isCurrent }) => {
    return isCurrent  ? { className: menuStyles.active } : null
  }
  return (
    <nav>
      <ul className={menuStyles.navList}>
        <li>
          <Link to="/" getProps={isCurrent}>
            <span className={menuStyles.link}>
              {/*Greetings*/}
              Cześć
            </span>
            <span className={menuStyles.dot} />
          </Link>
        </li>
        <li>
          <Link to="/portfolio/" getProps={isCurrent}>
            <span className={menuStyles.link}>
              {/*Projects*/}
              Portfolio
            </span>
            <span className={menuStyles.dot} />
          </Link>
        </li>
        <li>
          <Link to="/personal-projects/" getProps={isCurrent}>
            <span className={menuStyles.link}>
              {/*In progress*/}
              Moje projekty
            </span>
            <span className={menuStyles.dot} />
          </Link>
        </li>
        <li>
          <a
            href="/Rafał-Wichowski-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={menuStyles.link}>
              {/*Resume*/}
              Curriculum vitae
            </span>
            <span className={menuStyles.dot} />
          </a>
        </li>
      </ul>
      <ul className={menuStyles.mobileNav}>
        <li>
          <Link to="/" getProps={isCurrent}>
            {/*Greetings*/}
            <FontAwesomeIcon icon={faLaughBeam} />
            Cześć
          </Link>
        </li>
        <li>
          <Link to="/portfolio/" getProps={isCurrent}>
            {/*Projects*/}
            <FontAwesomeIcon icon={faDesktop} />
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/personal-projects/" getProps={isCurrent}>
            {/*In progress*/}
            <FontAwesomeIcon icon={faUser} />
            Po godzinach
          </Link>
        </li>
        <li>
          <a
            href="/Rafał-Wichowski-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/*Resume*/}
            <FontAwesomeIcon icon={faPaperclip} />
            CV
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
