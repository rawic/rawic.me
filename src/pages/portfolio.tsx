import { graphql, PageProps } from 'gatsby';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';

import { SEO } from '@components';
import { PortfolioProject } from '@features';
import * as homeStyles from '@features/Home/home.module.sass';
import * as stylesPortfolio from '@features/PortfolioProject/portfolio.module.sass';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HeadProps } from '@types';
import Layout from '@layouts';

const PortfolioPage = ({ location }: { location: PageProps['location'] }) => {
    const { t } = useTranslation('', {
        keyPrefix: 'portfolio',
    });

    const { navigate } = useI18next();

    return (
        <Layout>
            <div className="main-box">
                <div className={homeStyles.arrowsBox}>
                    <button type="button" aria-hidden="true" onClick={() => navigate('/')}>
                        <FontAwesomeIcon icon={solid('chevron-up')} />
                    </button>
                    <button
                        type="button"
                        aria-hidden="true"
                        onClick={() => navigate('/personal-projects/')}
                    >
                        <FontAwesomeIcon icon={solid('chevron-down')} />
                    </button>
                </div>
                <article className={homeStyles.articleBox}>
                    <header className={`${homeStyles.articleHeader} gradient-text`}>
                        <h1 className={`${homeStyles.me}`}>{t('heading')}</h1>
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
        </Layout>
    );
};

export default PortfolioPage;

export const Head = ({ data }: HeadProps) => {
    const { data: locales, language } = data.locales.edges[0].node;
    const obj = locales ? JSON.parse(locales) : {};
    const { title, description } = obj.seo.portfolio;
    const lang = language === 'pl' ? 'pl/' : '';
    const url = `https://rawic.me/${lang}portfolio/`;

    return (
        <>
            <SEO title={`🤓 ${title}`} description={description} url={url} lang={language} />
        </>
    );
};

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
