import '../styles/normalize.css';

import { I18nextContext } from 'gatsby-plugin-react-i18next';
import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

import { Background, Effects, Footer, Header, Menu } from '@components';

import * as layoutStyles from './layout.module.sass';
import { LayoutProps } from './Layout.types';

export const Layout = (props: LayoutProps) => {
    const context = React.useContext(I18nextContext);
    const originalPath = context.originalPath;

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    if (originalPath === '/offline-plugin-app-shell-fallback') {
        return null;
    }

    return (
        <React.Fragment>
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
        </React.Fragment>
    );
};
