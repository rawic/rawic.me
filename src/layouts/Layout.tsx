import '../styles/normalize.css';

import { domAnimation, LazyMotion } from 'framer-motion';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { useCallback, useEffect } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

import { Background, BackgroundEffects, Footer, Header, Menu, RainEffect } from '@components';

import * as layoutStyles from './layout.module.sass';
import { LayoutProps } from './Layout.types';

const loadFeatures = () => import('../features/framer-motion').then((res) => res.default);

export const Layout = (props: LayoutProps) => {
    const { originalPath } = useI18next();

    return (
        <>
            {/* <Background page={originalPath.replace(/-|\//g, '')} /> */}
            <BackgroundEffects />
            <RainEffect />
            <div className={layoutStyles.pageContainer}>
                <div className={layoutStyles.pageContent}>
                    <Header />
                    <main>
                        <LazyMotion features={loadFeatures} strict>
                            {props.children}
                        </LazyMotion>
                    </main>
                    <Menu />
                </div>
                <Footer />
            </div>
        </>
    );
};
