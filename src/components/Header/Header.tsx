import { Link } from 'gatsby-plugin-react-i18next';

import { Logo } from '@components';

import * as headerStyles from './header.module.sass';

export const Header = ({ siteTitle = '' }) => (
    <header className={headerStyles.pageHeader}>
        <h1 className={headerStyles.logo}>
            <Link to={'/'} aria-label="RAWIC - Rafał Wichowski, Strona główna" rel="index">
                <Logo />
                <span>{siteTitle}</span>
            </Link>
        </h1>
    </header>
);
