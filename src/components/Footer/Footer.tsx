import * as footerStyles from './footer.module.sass';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SocialMedia } from '@components';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

export const Footer = () => {
    const { t } = useTranslation();
    const [isMsgVisible, setIsMsgVisible] = useState(false);

    return (
        <footer className={footerStyles.pageFooter}>
            <SocialMedia />
            <CopyToClipboard text="hi@rawic.me" onCopy={() => setIsMsgVisible(true)}>
                <button
                    type="button"
                    className={`tooltip -left ${footerStyles.mailButton} ${
                        isMsgVisible ? '-active' : ''
                    }`}
                    aria-label={`${t('copied')}: hi@rawic.me`}
                    onMouseLeave={() => setIsMsgVisible(false)}
                >
                    <div className={footerStyles.mailContainer}>
                        <div className={footerStyles.contactBox}>
                            <div className={footerStyles.contactMe}>
                                <div className={footerStyles.icon} />
                            </div>
                        </div>
                        <FontAwesomeIcon className={footerStyles.envelope} icon={faEnvelope} />
                    </div>
                </button>
            </CopyToClipboard>
        </footer>
    );
};
