import '../styles/normalize.css';

import { I18nextContext } from 'gatsby-plugin-react-i18next';
import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

import { Background, Effects, Footer, Header, Menu } from '@components';

import * as layoutStyles from './layout.module.sass';
import { LayoutProps } from './Layout.types';
import i18next from 'i18next';
import * as ReactI18next from 'react-i18next';
import { useI18next } from 'gatsby-plugin-react-i18next';

export const AlternateLinksContext = React.createContext([]);

export function wrapWithI18nProvider({ element, props }) {
    const i18n = i18next
        .createInstance({
            lng: props.pageContext.language,
            interpolation: { escapeValue: false },
            initImmediate: false,
            resources: props.pageContext.i18nResources,
        })
        .use(ReactI18next.initReactI18next);
    // noinspection JSIgnoredPromiseFromCall
    i18n.init();
    return (
        <ReactI18next.I18nextProvider i18n={i18n}>
            <AlternateLinksContext.Provider
                value={props.pageContext && props.pageContext.alternateLinks}
            >
                <Layout {...props}>{element}</Layout>
            </AlternateLinksContext.Provider>
        </ReactI18next.I18nextProvider>
    );
}

export const Layout = (props: LayoutProps) => {
    const { languages, originalPath, t, i18n } = useI18next();

    console.log(languages, originalPath);

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    if (originalPath === '/offline-plugin-app-shell-fallback') {
        return null;
    }

    return (
        <>
            <Background page={originalPath.replace(/-|\//g, '')} />
            <Effects />
            <Particles
                id="tsparticles"
                className={layoutStyles.particlesJs}
                init={particlesInit}
                options={{
                    particles: {
                        number: {
                            value: 62,
                        },
                        color: {
                            value: '#ffffff',
                        },
                        shape: {
                            type: 'circle',
                            polygon: {
                                sides: 5,
                            },
                        },
                        opacity: {
                            value: { min: 0.1, max: 1 },
                            animation: {
                                enable: true,
                                speed: { min: 0.1, max: 3 },
                                sync: false,
                            },
                        },
                        size: {
                            value: { min: 1, max: 2 },
                        },
                        move: {
                            enable: true,
                            speed: { min: 0.1, max: 2 },
                            direction: 'none',
                            random: true,
                            straight: false,
                            outModes: 'out',
                        },
                    },
                    interactivity: {
                        detectsOn: 'canvas',
                        events: {
                            resize: true,
                        },
                        modes: {
                            grab: {
                                distance: 400,
                                links: {
                                    opacity: 1,
                                },
                            },
                            bubble: {
                                distance: 250,
                                size: 0,
                                duration: 2,
                            },
                            repulse: {
                                distance: 400,
                                duration: 0.4,
                            },
                            push: {
                                quantity: 4,
                            },
                            remove: {
                                quantity: 2,
                            },
                        },
                    },
                    detectRetina: true,
                }}
            />
            <div className={layoutStyles.pageContainer}>
                <div className={layoutStyles.pageContent}>
                    <Header />
                    <main tabIndex="-1">{props.children}</main>
                    <Menu />
                </div>
                <Footer />
            </div>
        </>
    );
};
