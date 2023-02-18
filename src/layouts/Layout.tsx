import '../styles/normalize.css';

import { LazyMotion, m } from 'framer-motion';
import { useI18next } from 'gatsby-plugin-react-i18next';

import { Background, BackgroundEffects, Footer, Header, Menu, RainEffect } from '@components';

import * as layoutStyles from './layout.module.sass';
import { LayoutProps } from './Layout.types';

const loadFeatures = () => import('../features/framer-motion').then((res) => res.default);

export const Layout = (props: LayoutProps) => {
    const { originalPath } = useI18next();

    return (
        <>
            <Background key={originalPath} page={originalPath.replace(/-|\//g, '')} />
            <BackgroundEffects />
            <RainEffect />
            <div className={layoutStyles.pageContainer}>
                <div className={layoutStyles.pageContent}>
                    <Header />
                    <LazyMotion features={loadFeatures}>
                        <m.main
                            key={originalPath}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {props.children}
                        </m.main>
                    </LazyMotion>
                    <Menu />
                </div>
                <Footer />
            </div>
        </>
    );
};
