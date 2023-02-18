import { memo } from 'react';
import * as effectStyles from './backgroundEffects.module.sass';

const BackgroundEffectsRaw = () => (
    <>
        <div className={effectStyles.flash} />
        <div className={effectStyles.fogContainer}>
            <div className={`${effectStyles.fog} ${effectStyles.First}`} />
            <div className={`${effectStyles.fog} ${effectStyles.Second}`} />
        </div>
    </>
);

export const BackgroundEffects = memo(BackgroundEffectsRaw);
