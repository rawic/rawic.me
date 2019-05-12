import React from "react"
import Particles from "react-particles-js"

import "../styles/normalize.css"
import Effects from "../components/effects"
import Menu from "../components/menu"
import Header from "../components/header"
import Footer from "../components/footer"
import layoutStyles from "../components/layout.module.sass"
import Background from "../components/background"

const Layout = (props) => {
  if (props.location.pathname === '/offline-plugin-app-shell-fallback') return null

  return (
    <React.Fragment>
      <Background page={props.location.pathname.replace(/-|\//g,'')}/>
      <Effects />
      <Particles
        className={layoutStyles.particlesJs}
        params={{
          particles: {
            number: {
              value: 62,
              density: {
                enable: false,
                value_area: 10000,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false,
              },
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: false,
                speed: 0,
                size_min: 0,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 600,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onresize: {
                enable: true,
                density_auto: true,
                density_area: 400
              },
              onhover: {
                enable: false,
                mode: "bubble",
              },
              onclick: {
                enable: false,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 250,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3,
              },
              repulse: {
                distance: 400,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <div className={layoutStyles.pageContainer}>
        <div className={layoutStyles.pageContent}>
          {/*<Header siteTitle={data.site.siteMetadata.title} />*/}
          <Header />
          <main tabIndex="-1">{props.children}</main>
          <Menu />
        </div>
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Layout
