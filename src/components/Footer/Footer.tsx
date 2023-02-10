import { useTranslation } from 'gatsby-plugin-react-i18next';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { SocialMedia } from '@components';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as footerStyles from './footer.module.sass';

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
                        <FontAwesomeIcon
                            className={footerStyles.envelope}
                            icon={solid('envelope')}
                        />
                    </div>
                </button>
            </CopyToClipboard>
        </footer>
    );
};
