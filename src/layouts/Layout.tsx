import { LazyMotion, m } from 'framer-motion';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { lazy, Suspense } from 'react';

import { Background, Footer, Header, Menu } from '@components';

import * as layoutStyles from './layout.module.sass';
import { LayoutProps } from './Layout.types';

const loadFeatures = () => import('../features/framer-motion').then((res) => res.default);

const RainEffect = lazy(() =>
    import('@components/RainEffect').then((res) => ({ default: res.RainEffect })),
);
const BackgroundEffects = lazy(() =>
    import('@components/BackgroundEffects').then((res) => ({ default: res.BackgroundEffects })),
);

export const Layout = (props: LayoutProps) => {
    const { originalPath } = useI18next();
    const pageKey = originalPath.replace(/-|\//g, '');

    return (
        <>
            <Suspense fallback={null}>
                <RainEffect />
            </Suspense>
            <Suspense fallback={null}>
                <BackgroundEffects />
            </Suspense>
            <LazyMotion features={loadFeatures}>
                <m.div
                    key={pageKey}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Background key={pageKey} page={pageKey} />
                </m.div>
                <div className={layoutStyles.pageContainer}>
                    <div className={layoutStyles.pageContent}>
                        <Header />

                        <m.main
                            key={pageKey}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {props.children}
                        </m.main>
                        <Menu />
                    </div>
                    <Footer />
                </div>
            </LazyMotion>
        </>
    );
};
