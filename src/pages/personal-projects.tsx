import { motion } from 'framer-motion';
import { graphql, PageProps } from 'gatsby';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';

import { SEO } from '@components';
import { PersonalProject } from '@features';
import * as homeStyles from '@features/Home/home.module.sass';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ROUTES } from '@routes';

const PersonalProjectsPage = ({ location }: { location: PageProps['location'] }) => {
    const { t } = useTranslation('', {
        keyPrefix: 'personal-projects',
    });

    const { navigate } = useI18next();

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
                        onClick={() => navigate('/portfolio/')}
                    >
                        <FontAwesomeIcon icon={faChevronUp} />
                    </button>
                    <button type="button" aria-hidden="true" onClick={() => navigate('/')}>
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
        </motion.div>
    );
};

export default PersonalProjectsPage;

interface HeadProps {
    data: {
        locales: {
            edges: {
                node: {
                    data: string;
                };
            }[];
        };
    };
}

export const Head = ({ data }: HeadProps) => {
    const locales = data.locales.edges[0].node.data;
    let obj = undefined;

    if (locales) {
        obj = JSON.parse(locales);
    }

    return (
        <SEO
            title={`🤓 ${obj?.['seo']['personal-projects']['title']}`}
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