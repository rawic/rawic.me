import { AnimatePresence } from 'framer-motion';
import React from 'react';

export const wrapPageElement = ({ element }) => (
    <AnimatePresence initial={false} mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        {element}
    </AnimatePresence>
);
