import { AnimatePresence } from 'framer-motion';

export const wrapPageElement = ({ element }) => (
    <AnimatePresence initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        {element}
    </AnimatePresence>
);
