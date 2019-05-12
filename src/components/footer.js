import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import footerStyles from "./footer.module.sass"
import SocialMedia from "./social-media"
import {CopyToClipboard} from 'react-copy-to-clipboard'

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addClass: false,
      value: 'rawic.me@gmail.com'
    }
  }

  handleHoverOff() {
    this.setState({addClass: false })
  }

  render() {
    return (
      <footer className={footerStyles.pageFooter}>
        <SocialMedia />
          <CopyToClipboard text={this.state.value} onCopy={() => this.setState({addClass: true})}>
            <button type="button" className={`tooltip -left ${footerStyles.mailButton} ${this.state.addClass ? '-active' : ''}`} onMouseLeave={this.handleHoverOff.bind(this)} aria-label="Skopiowano: rawic.me@gmail.com">
              <div className={footerStyles.mailContainer}>
                <div className={footerStyles.contactBox}>
                  <div className={footerStyles.contactMe}>
                      <div className={footerStyles.icon} />
                  </div>
                </div>
                <FontAwesomeIcon className={footerStyles.envelope} icon={faEnvelope} />
              </div>
            </button>
        </CopyToClipboard>
      </footer>
    )
  }
}

export default Footer
