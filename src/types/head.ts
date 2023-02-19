export interface HeadProps {
    data: {
        locales: {
            edges: {
                node: {
                    data: string;
                    language: string;
                };
            }[];
        };
    };
    pageContext: {
        i18n: {
            originalPath: string;
        };
    };
}
