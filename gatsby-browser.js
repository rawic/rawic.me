import React from 'react';
import { AnimatePresence } from 'framer-motion';

export const wrapPageElement = ({ element }) => (
    <AnimatePresence exitBeforeEnter mode="wait" initial={false}>
        {element}
    </AnimatePresence>
);
