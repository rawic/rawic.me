import { PageProps } from 'gatsby';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';

import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as homeStyles from './home.module.sass';

export const Home = ({ location }: { location: PageProps['location'] }) => {
    const { t } = useTranslation('', { keyPrefix: 'home' });

    const { navigate, originalPath } = useI18next();

    const thanks = t('cv.thanks');

    const { language } = useI18next();

    const cvLink = language === 'en' ? '/Rafal-Wichowski-CV.pdf' : '/Rafal-Wichowski-CV-PL.pdf';

    return (
        <div className="main-box">
            <div className={homeStyles.arrowsBox}>
                <button
                    type="button"
                    aria-hidden="true"
                    onClick={() => navigate('/personal-projects/')}
                >
                    <FontAwesomeIcon icon={solid('chevron-up')} />
                </button>
                <button type="button" aria-hidden="true" onClick={() => navigate('/portfolio/')}>
                    <FontAwesomeIcon icon={solid('chevron-down')} />
                </button>
            </div>
            <article className={homeStyles.articleBox}>
                <header className={`${homeStyles.articleHeader} gradient-text`}>
                    <h1 className={`${homeStyles.title}`}>
                        <span className={`${homeStyles.me}`}>{t('heading')}</span>
                    </h1>

                    <h2 className={`${homeStyles.title}`}>
                        {t('subheading.part-1')}
                        <span className="s-white">{t('subheading.warsaw.part-1')}</span>
                        <span className="s-red">{t('subheading.warsaw.part-2')}</span>,
                        <span className="break">{t('subheading.part-2')}</span>
                    </h2>
                </header>
                <section>
                    <h3>{t('about.heading')}</h3>
                    <p>{t('about.description')}</p>

                    <p>{t('about.description-2')}</p>
                </section>
                <section className={homeStyles.experienceBox}>
                    <h4>
                        {t('experience.heading.part-1')}
                        <span className={homeStyles.heart}>
                            <FontAwesomeIcon icon={regular('heart')} />
                        </span>{' '}
                        {t('experience.heading.part-2')}
                    </h4>
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
                        <li>
                            React (Redux, Gatsby, GraphQL, Storybook, React Testing Library, Jest)
                        </li>
                        <li>TypeScript</li>
                        <li>Strapi</li>
                        <li>Vue.js</li>
                        <li>Webpack</li>
                        <li>Parcel</li>
                    </ul>

                    <ul className={homeStyles.skillsList}>
                        <li className={homeStyles.highlight}>Design</li>
                        <li>Figma</li>
                        <li>Photoshop</li>
                        <li>Illustrator</li>
                        <li>XD</li>
                        <li>Invision</li>
                        <li>Balsamiq Mockups</li>
                    </ul>

                    <ul className={homeStyles.skillsList}>
                        <li className={homeStyles.highlight}>Git</li>
                        <li>BitBucket</li>
                        <li>GitHub</li>
                        <li>GitLab</li>
                    </ul>
                </section>

                <a
                    href={cvLink}
                    className={homeStyles.btn}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={t('cv.title') as string}
                    data-text={t('cv.data')}
                >
                    {thanks.split('').map((letter, index) => (
                        <span key={index}>{letter}</span>
                    ))}
                </a>
            </article>
        </div>
    );
};
