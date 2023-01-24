import { useCallback, useEffect, useState } from 'react';

import * as rainEffectStyles from './rain-effect.module.sass';

interface Drop {
    left?: string;
    right?: string;
    bottom?: string;
    animationDelay?: string;
    animationDuration?: string;
}

export const RainEffect = () => {
    const [raindrops, setRaindrops] = useState<Drop[]>([]);
    const [backRaindrops, setBackRaindrops] = useState<Drop[]>([]);

    const generateRain = () => {
        let position = 0;
        let newRaindrops = [];
        let newBackRaindrops = [];

        while (position < 100) {
            const randoHundo = Math.floor(Math.random() * 98) + 1;
            const randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);

            position += randoFiver;
            newRaindrops.push({
                left: `${position}%`,
                bottom: `${randoFiver + randoFiver - 1 + 85}%`,
                // animationDelay: `0.${randoHundo}s`,
                animationDuration: `0.8${randoHundo}s`,
            });
            newBackRaindrops.push({
                right: `${position}%`,
                bottom: `${randoFiver + randoFiver - 1 + 85}%`,
                // animationDelay: `0.95${randoHundo}s`,
                animationDuration: `0.95${randoHundo}s`,
            });
        }

        setRaindrops(newRaindrops);
        setBackRaindrops(newBackRaindrops);
    };

    useEffect(() => {
        generateRain();
    }, []);

    return (
        <div className={rainEffectStyles.rain}>
            <div className={rainEffectStyles.rain}>
                {raindrops.map((drop, index) => (
                    <div key={index} className={rainEffectStyles.drop} style={drop}>
                        <div className={rainEffectStyles.stem} style={drop}></div>
                        <div className={rainEffectStyles.splat} style={drop}></div>
                    </div>
                ))}
            </div>
            <div className={`${rainEffectStyles.rain} ${rainEffectStyles.backRow}`}>
                {backRaindrops.map((drop, index) => (
                    <div key={index} className={rainEffectStyles.drop} style={drop}>
                        <div className={rainEffectStyles.stem} style={drop}></div>
                        <div className={rainEffectStyles.splat} style={drop}></div>
                    </div>
                ))}
            </div>
        </div>
    );
};
