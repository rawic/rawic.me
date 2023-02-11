import * as React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <link
            rel="preload"
            href="/fonts/GTWalsheimProLight.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            key="GTWalsheimProLight"
        />,
        <link
            rel="preload"
            href="/fonts/GTWalsheimProRegular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            key="GTWalsheimProRegular"
        />,
        <link
            rel="preload"
            href="/fonts/GTWalsheimProMedium.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            key="GTWalsheimProMedium"
        />,
        <link
            rel="preload"
            href="/fonts/GTWalsheimProBold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            key="GTWalsheimProBold"
        />,
    ]);
};
