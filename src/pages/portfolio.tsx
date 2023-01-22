import { motion } from 'framer-motion';
import { graphql, navigate, PageProps } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { SEO } from '@components';
import { PortfolioProject } from '@features';
import * as homeStyles from '@features/Home/home.module.sass';
import * as stylesPortfolio from '@features/PortfolioProject/portfolio.module.sass';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNextPrevPath } from '@hooks';

const PortfolioPage = ({ location }: { location: PageProps['location'] }) => {
    const { prevPath, nextPath } = useNextPrevPath(location);
    const { t } = useTranslation('', {
        keyPrefix: 'portfolio',
    });

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                ease: 'linear',
                duration: 0.5,
            }}
        >
            <div className="main-box">
                <div className={homeStyles.arrowsBox}>
                    <button
                        type="button"
                        aria-hidden="true"
                        onClick={() => {
                            navigate(prevPath);
                        }}
                    >
                        <FontAwesomeIcon icon={faChevronUp} />
                    </button>
                    <button
                        type="button"
                        aria-hidden="true"
                        onClick={() => {
                            navigate(nextPath);
                        }}
                    >
                        <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                </div>
                <article className={homeStyles.articleBox}>
                    <header className={`${homeStyles.articleHeader} gradient-text`}>
                        <span className={`${homeStyles.me}`}>{t('heading')}</span>
                        <h2 className={`${homeStyles.title}`}>
                            {t('description.part-1')}
                            <span className="break">{t('description.part-2')}</span>
                        </h2>
                    </header>
                    <ul className={stylesPortfolio.portfolioList}>
                        <PortfolioProject
                            company="CoinDeal"
                            name="logoCoindeal"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAA0AQMAAABWy9RQAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABZJREFUeNpjYBgFo2AUjIJRMAqGLwAABugAAfbAlIIAAAAASUVORK5CYII="
                        />
                        <PortfolioProject
                            company="Rodzicowo"
                            name="logoRodzicowo"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAABxAQMAAACnTQ4nAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABlJREFUeNrtwQENAAAAwqD3T20PBxQAAHBoC+sAASvGaWEAAAAASUVORK5CYII="
                        />

                        <PortfolioProject
                            company="Marine Harvest"
                            name="logoMarineHarvest"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAACVAQMAAAADn6g0AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABpJREFUeNrtwQENAAAAwqD3T20ON6AAAAAeDQzOAAHcmFxRAAAAAElFTkSuQmCC"
                        />
                        <PortfolioProject
                            company="More From VR"
                            name="logoMoreFromVr"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAACJAQMAAAC1l+wVAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABRJREFUeNpjYBgFo2AUjIJRQF0AAAVaAAETob3RAAAAAElFTkSuQmCC"
                        />

                        <PortfolioProject
                            company="Reality Busters"
                            name="logoRealityBusters"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQkAAABdAQMAAACMzgFyAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABpJREFUeNrtwTEBAAAAwqD1T20ND6AAAACuDQy3AAHGoACMAAAAAElFTkSuQmCC"
                        />
                        <PortfolioProject
                            company="FutureNet"
                            name="logoFuturenet"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQYAAABQAQMAAADBW0khAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABpJREFUeNrtwTEBAAAAwqD1T20ND6AAAODHAAqgAAEuadaRAAAAAElFTkSuQmCC"
                        />
                        <PortfolioProject
                            company="Profabrica"
                            name="logoProfabrica"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQYAAABQAQMAAADBW0khAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABpJREFUeNrtwTEBAAAAwqD1T20ND6AAAODHAAqgAAEuadaRAAAAAElFTkSuQmCC"
                        />
                        <PortfolioProject
                            company="Aber"
                            name="logoAber"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAeAQMAAADkYPmNAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAA5JREFUeNpjYBgFgx0AAAGkAAF+IKsZAAAAAElFTkSuQmCC"
                        />

                        <PortfolioProject
                            company="Malpin"
                            name="logoMalpin"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANMAAABIAQMAAABWaFIaAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABdJREFUeNpjYBgFo2AUjIJRMApGwXADAAfgAAFTgS4yAAAAAElFTkSuQmCC"
                        />
                        <PortfolioProject
                            company="Root Wood Studio"
                            name="logoRootWoodStudio"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANcAAAAeAQMAAACFVBmKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABBJREFUeNpjYBgFo2AUUAoAA0gAAfvRrjEAAAAASUVORK5CYII="
                            isPersonal
                        />
                    </ul>
                </article>
            </div>
        </motion.div>
    );
};

export default PortfolioPage;

export const Head = () => <SEO title="🤓 Portfolio" url="https://rawic.me/portfolio/" />;

export const query = graphql`
    query ($language: String!) {
        locales: allLocale(filter: { language: { eq: $language } }) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }
    }
`;
