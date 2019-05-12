import React, { Component } from "react"
import effectStyles from "./effects.module.sass"

class Effects extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={effectStyles.flash} />
        <div className={effectStyles.fogContainer}>
          <div className={`${effectStyles.fog} ${effectStyles.First}`} />
          <div className={`${effectStyles.fog} ${effectStyles.Second}`} />
        </div>
      </React.Fragment>
    )
  }
}

export default Effects
