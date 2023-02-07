import { SEO } from '@components';

const NotFoundPage = () => (
    <>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </>
);

export default NotFoundPage;

export const Head = () => <SEO title="404: Not found" />;
