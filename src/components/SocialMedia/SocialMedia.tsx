import { useTranslation } from 'gatsby-plugin-react-i18next';

import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as stylesSocialMedia from './social-media.module.sass';

export const SocialMedia = () => {
    const { t } = useTranslation('', {
        keyPrefix: 'social',
    });

    const github = t('github');
    const invision = t('invision');
    const linkedin = t('linkedin');

    return (
        <ul className={stylesSocialMedia.socialMedia}>
            <li>
                <a
                    href="https://github.com/rawic"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    title={github}
                >
                    <FontAwesomeIcon icon={brands('github')} />
                </a>
            </li>
            <li>
                <a
                    href="https://projects.invisionapp.com/share/CZQAF2DKATX"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="inVision"
                    title={invision}
                >
                    <FontAwesomeIcon icon={brands('invision')} />
                </a>
            </li>
            <li>
                <a
                    href="https://www.linkedin.com/in/rafalwichowski/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Linkedin"
                    title={linkedin}
                >
                    <FontAwesomeIcon icon={brands('linkedin')} />
                </a>
            </li>
        </ul>
    );
};
