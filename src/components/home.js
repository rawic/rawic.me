import React from 'react'
import homeStyles from './home.module.sass'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-regular-svg-icons"

const Home = () => {
  return (
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

          <h2 className={`${homeStyles.title}`}>
            <span className={`${homeStyles.me}`}>
              {/*# Hello, I'm Rafał Wichowski. Nice to see you here*/}
              Cześć, tu Rafał Wichowski. Miło Cię gościć.
            </span>
            {/*I'm a developer / designer from */}
            Jestem programistą z <span className="s-white">Wars</span><span className="s-red">zawy</span>,
            <span className="break">aktualnie poszukuję nowych wyzwań.</span>
            {/*<span className="s-white">Pol</span>*/}
            {/*<span className="s-red">and</span>,*/}
            {/*<span className="break"> currently not associated with any company.</span>*/}
          </h2>
        </header>
        <section>
          {/*<h3>Details</h3>*/}
          <h3>O mnie</h3>
          <p>
            Głównie programuję rozwiązania warstwy Front-End, ale ambitnie dążę do stanowiska Full Stack JavaScript Developera. Mam&nbsp;udokumentowane ponad 5-letnie doświadczenie w&nbsp;tworzeniu stron internetowych. Czasem projektuję interfejs, a&nbsp;także znam podstawy UX.
            {/*Front-End developer with ambitions to become a Full Stack*/}
            {/*(JavaScript) with documented 5+ years of experience in creating web*/}
            {/*applications. Sometimes I'm a user interface designer and I know the*/}
            {/*solid UX basics.*/}
          </p>

          <p>
            Jestem silnym pracownikiem indywidualnie i&nbsp;jako część zespołu. Chętnie uczę się  i&nbsp;pomagam innym w&nbsp;ich zadaniach. Niezależnie od wyzwania nieustannie dążę do realizacji idealnego produktu o&nbsp;odpowiedniej wydajności, użyteczności i&nbsp;dostępności. Ciężko pracuję, by to osiągnąć.
            {/*I am a strong employee individually and as part of a team. I am*/}
            {/*always happy to help others in their tasks. Regardless of the*/}
            {/*challenge, I urgently strive for the perfect end product with the*/}
            {/*right performance, usability and accessibility. I work hard to*/}
            {/*create it.*/}
          </p>
        </section>
        <section className={homeStyles.experienceBox}>
          <h4>Staram się nieustannie rozwijać <span className={homeStyles.heart}>
            <FontAwesomeIcon icon={faHeart} />
          </span> od 2012 roku</h4>
          <ul className={homeStyles.skillsList}>
            <li className={homeStyles.highlight}>HTML5</li>
            <li>Nunjucks</li>
            <li>PUG (Jade)</li>
          </ul>

          <ul className={homeStyles.skillsList}>
            <li className={homeStyles.highlight}>CSS3</li>
            <li>Sass</li>
            <li>SCSS</li>
            <li>Bootstrap</li>
            <li>Foundation</li>
          </ul>

          <ul className={homeStyles.skillsList}>
            <li className={homeStyles.highlight}>JavaScript</li>
            <li>ES5/6</li>
            <li>Ajax</li>
            <li>Jquery</li>
            <li>React (Gatsby, GraphQL)</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Gulp</li>
            <li>Webpack</li>
          </ul>

          <ul className={homeStyles.skillsList}>
            <li className={homeStyles.highlight}>Design</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>XD</li>
            <li>Invision</li>
            <li>Zeplin</li>
            <li>Figma</li>
            <li>Balsamiq Mockups</li>
          </ul>

          <ul className={homeStyles.skillsList}>
            <li className={homeStyles.highlight}>Git</li>
            <li>BitBucket</li>
            <li>GitHub</li>
          </ul>
        </section>

        <a href={"/Rafał-Wichowski-Resume.pdf"} className={homeStyles.btn} target="_blank" rel="noopener noreferrer" title="Pobierz CV" data-text="Moje CV">
          <span>D</span>
          <span>z</span>
          <span>i</span>
          <span>ę</span>
          <span>k</span>
          {/*<span>&nbsp;</span>*/}
          <span>u</span>
          <span>j</span>
          <span>ę</span>
        </a>
      </article>
    </div>
  )
}

export default Home
