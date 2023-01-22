import { PageProps } from 'gatsby';

import { ROUTES } from '@routes';

export const useNextPrevPath = (location: PageProps['location']) => {
    const { pathname } = location;
    const currentRouteIndex = ROUTES.findIndex((route) => route.path === pathname);
    const prevRoute = ROUTES[currentRouteIndex - 1];
    const nextRoute = ROUTES[currentRouteIndex + 1];

    const prevPath = prevRoute?.path;
    const nextPath = nextRoute?.path;

    return {
        prevPath,
        nextPath,
    };
};
