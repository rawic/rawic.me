import { AnimatePresence } from 'framer-motion';
import { Layout } from './src/layouts';
import React from 'react';

export const wrapPageElement = ({ element }) => {
    const newElement = React.cloneElement(
        element,
        element.props,
        React.cloneElement(
            element.props.children,
            element.props.children.props,
            React.createElement(Layout, undefined, element.props.children.props.children),
        ),
    );

    return <AnimatePresence>{newElement}</AnimatePresence>;
};
