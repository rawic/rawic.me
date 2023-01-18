import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { SEO } from '@components';
import { PersonalProject } from '@features';
import * as homeStyles from '@features/Home/home.module.sass';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Layout } from '@layouts';

const PersonalProjectsPage = (props) => {
    const { t } = useTranslation('', {
        keyPrefix: 'personal-projects',
    });

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
                    <span className={`${homeStyles.me}`}>{t('heading')}</span>
                    <h2 className={`${homeStyles.title}`}>
                        {t('description.part-1')}
                        <span className="break">{t('description.part-2')}</span>
                    </h2>
                </header>
                <div className={homeStyles.projectList}>
                    <PersonalProject
                        name="Root Wood Studio"
                        slug="rootwoodstudio"
                        description={t('projects.project-1.description')}
                        tags="Photoshop, Illustrator, Balsamiq Mockups"
                        url="https://projects.invisionapp.com/share/CZQAF2DKATX#/screens/362088531"
                        isFeatured
                    />
                    <PersonalProject
                        name="Dribbi"
                        slug="dribbi"
                        description={t('projects.project-2.description')}
                        tags="Sass, React, Node.js, Express, MongoDB, Photoshop"
                        url="https://projects.invisionapp.com/share/CZQAF2DKATX#/screens/362091378"
                        isFeatured
                    />
                </div>
            </article>
        </div>
    );
};

export default PersonalProjectsPage;

export const Head = ({ location, params, data, pageContext }) => {
    const locales = data.locales.edges[0].node.data;
    let obj = undefined;

    if (locales) {
        obj = JSON.parse(locales);
    }

    return (
        <SEO
            title={`🤓 ${obj?.['personal-projects']['seo-title']}`}
            url="https://rawic.me/personal-projects/"
        />
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
