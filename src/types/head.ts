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
}
