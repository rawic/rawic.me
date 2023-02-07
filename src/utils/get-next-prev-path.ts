import { PageProps } from 'gatsby';

import { ROUTES } from '@routes';

export const getNextPrevPath = (path: string) => {
    const currentRouteIndex = ROUTES.findIndex((route) => route.path === path);
    const prevRoute = ROUTES[currentRouteIndex - 1];
    const nextRoute = ROUTES[currentRouteIndex + 1];

    const prevPath = prevRoute?.path || '/personal-projects/';
    const nextPath = nextRoute?.path || '/';

    return {
        prevPath,
        nextPath,
    };
};
