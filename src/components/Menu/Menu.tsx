import { Link, useI18next, useTranslation } from 'gatsby-plugin-react-i18next';

import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ROUTES } from '@routes';

import * as menuStyles from './menu.module.sass';

export const Menu = () => {
    const { t } = useTranslation('', {
        keyPrefix: 'navigation',
    });

    const { language } = useI18next();

    const cvLink = language === 'en' ? '/Rafal-Wichowski-CV.pdf/' : '/Rafal-Wichowski-CV-PL.pdf/';

    return (
        <nav>
            <ul className={menuStyles.navList}>
                {ROUTES.map((r) => (
                    <li key={r.key}>
                        <Link to={r.path} activeClassName={menuStyles.active}>
                            <span className={menuStyles.link}>{t(r.key)}</span>
                            <span className={menuStyles.dot} />
                        </Link>
                    </li>
                ))}
                <li>
                    <a href={cvLink} target="_blank" rel="noopener noreferrer">
                        <span className={menuStyles.link}>{t('cv')}</span>
                        <span className={menuStyles.dot} />
                    </a>
                </li>
            </ul>

            <ul className={menuStyles.mobileNav}>
                <li>
                    <Link to="/" activeClassName={menuStyles.active}>
                        <FontAwesomeIcon icon={solid('house-chimney')} />
                        {t('greetings')}
                    </Link>
                </li>
                <li>
                    <Link to="/portfolio/" activeClassName={menuStyles.active}>
                        <FontAwesomeIcon icon={solid('layer-group')} />
                        {t('portfolio')}
                    </Link>
                </li>
                <li>
                    <Link to="/personal-projects/" activeClassName={menuStyles.active}>
                        <FontAwesomeIcon icon={solid('list-check')} />
                        {t('my-projects')}
                    </Link>
                </li>
                <li>
                    <a href={cvLink} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={solid('paperclip')} />
                        {t('cv-short')}
                    </a>
                </li>
            </ul>
        </nav>
    );
};
