import React from 'react';
import { AnimatePresence } from 'framer-motion';

export const wrapPageElement = ({ element }) => (
    <AnimatePresence
        exitBeforeEnter
        initial={false}
        mode="wait"
        onExitComplete={() => window.scrollTo(0, 0)}
    >
        {element}
    </AnimatePresence>
);
