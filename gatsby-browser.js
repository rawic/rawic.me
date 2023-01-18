import { wrapWithI18nProvider } from './src/layouts/Layout';

export const onRouteUpdate = () => {
    const main = document.querySelector('main');

    if (main) {
        main.className = 'active';
    }
};

export const wrapPageElement = wrapWithI18nProvider;
