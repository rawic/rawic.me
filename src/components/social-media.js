import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDribbble,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
import stylesSocialMedia from './social-media.module.sass'

const SocialMedia = () => (
  <ul className={stylesSocialMedia.socialMedia}>
    <li>
      <a
        href="https://github.com/rawic"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        title="Profil na GitHub"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </li>
    <li>
      <a
        href="https://dribbble.com/rawic"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Dribbble"
        title="Profil na Dribbble"
      >
        <FontAwesomeIcon icon={faDribbble} />
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/in/rwichowski/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Linkedin"
        title="Profil na Linkedin"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
    </li>
  </ul>
)

export default SocialMedia
