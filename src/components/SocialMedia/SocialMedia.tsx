import { useTranslation } from 'gatsby-plugin-react-i18next';

import { faGithub, faInvision, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
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
                    <FontAwesomeIcon icon={faGithub} />
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
                    <FontAwesomeIcon icon={faInvision} />
                </a>
            </li>
            <li>
                <a
                    href="https://www.linkedin.com/in/rwichowski/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Linkedin"
                    title={linkedin}
                >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
            </li>
        </ul>
    );
};