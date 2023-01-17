import * as effectStyles from './effects.module.sass';

export const Effects = () => (
    <>
        <div className={effectStyles.flash} />
        <div className={effectStyles.fogContainer}>
            <div className={`${effectStyles.fog} ${effectStyles.First}`} />
            <div className={`${effectStyles.fog} ${effectStyles.Second}`} />
        </div>
    </>
);
