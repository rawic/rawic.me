import '../styles/normalize.css';

import { useI18next } from 'gatsby-plugin-react-i18next';
import { useCallback, useEffect } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

import { Background, BackgroundEffects, Footer, Header, Menu, RainEffect } from '@components';

import * as layoutStyles from './layout.module.sass';
import { LayoutProps } from './Layout.types';

export const Layout = (props: LayoutProps) => {
    const { originalPath } = useI18next();

    return (
        <>
            <Background page={originalPath.replace(/-|\//g, '')} />
            <BackgroundEffects />
            <RainEffect />
            <div className={layoutStyles.pageContainer}>
                <div className={layoutStyles.pageContent}>
                    <Header />
                    <main>{props.children}</main>
                    <Menu />
                </div>
                <Footer />
            </div>
        </>
    );
};
