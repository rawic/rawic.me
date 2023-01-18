import * as effectStyles from './backgroundEffects.module.sass';

export const BackgroundEffects = () => (
    <>
        <div className={effectStyles.flash} />
        <div className={effectStyles.fogContainer}>
            <div className={`${effectStyles.fog} ${effectStyles.First}`} />
            <div className={`${effectStyles.fog} ${effectStyles.Second}`} />
        </div>
    </>
);
