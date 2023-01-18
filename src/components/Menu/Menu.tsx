import { Link, useTranslation } from 'gatsby-plugin-react-i18next';
import { useContext } from 'react';

import { faLaughBeam, faUser } from '@fortawesome/free-regular-svg-icons';
import { faDesktop, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as menuStyles from './menu.module.sass';

export const Menu = () => {
    const { t } = useTranslation('', {
        keyPrefix: 'navigation',
    });

    return (
        <nav>
            <ul className={menuStyles.navList}>
                <li>
                    <Link to="/" activeClassName={menuStyles.active}>
                        <span className={menuStyles.link}>{t('greetings')}</span>
                        <span className={menuStyles.dot} />
                    </Link>
                </li>
                <li>
                    <Link to="/portfolio/" activeClassName={menuStyles.active}>
                        <span className={menuStyles.link}>{t('portfolio')}</span>
                        <span className={menuStyles.dot} />
                    </Link>
                </li>
                <li>
                    <Link to="/personal-projects/" activeClassName={menuStyles.active}>
                        <span className={menuStyles.link}>{t('my-projects')}</span>
                        <span className={menuStyles.dot} />
                    </Link>
                </li>
                <li>
                    <a href="/Rafał-Wichowski-Resume.pdf" target="_blank" rel="noopener noreferrer">
                        <span className={menuStyles.link}>{t('cv')}</span>
                        <span className={menuStyles.dot} />
                    </a>
                </li>
            </ul>
            <ul className={menuStyles.mobileNav}>
                <li>
                    <Link to="/" activeClassName={menuStyles.active}>
                        <FontAwesomeIcon icon={faLaughBeam} />
                        {t('greetings')}
                    </Link>
                </li>
                <li>
                    <Link to="/portfolio/" activeClassName={menuStyles.active}>
                        <FontAwesomeIcon icon={faDesktop} />
                        {t('portfolio')}
                    </Link>
                </li>
                <li>
                    <Link to="/personal-projects/" activeClassName={menuStyles.active}>
                        <FontAwesomeIcon icon={faUser} />
                        {t('my-projects')}
                    </Link>
                </li>
                <li>
                    <a href="/Rafał-Wichowski-Resume.pdf" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faPaperclip} />
                        {t('cv')}
                    </a>
                </li>
            </ul>
        </nav>
    );
};
