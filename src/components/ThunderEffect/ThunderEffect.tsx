import { animate, motion, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import * as stylesThunderEffect from './thunderEffect.module.sass';

export const ThunderEffect = ({ path }) => {
    const [isVisible, setIsVisible] = useState(null);
    const myRef = useRef({
        path: null,
    });

    console.log('rerender');

    useEffect(() => {
        // set the path on initial load
        if (!myRef.current.path) {
            myRef.current.path = path;
        }
        // then make sure dialog is closed on route change
        else if (myRef.current.path !== path) {
            if (isVisible) {
                toggleState({ status: false });
                myRef.current.path = path;
            }
        }
    });

    const toggleState = ({ props }) => {
        let status;

        if (props) {
            status = props.status;
        } else {
            status = !isVisible;
        }

        setIsVisible(status);
    };

    return (
        <>
            <motion.div
                className={stylesThunderEffect.thunder}
                key={path}
                initial={{ opacity: 0.6 }}
                animate={{ opacity: 0 }}
                transition={{
                    duration: 0.5,
                }}
            />
            <button onClick={() => toggleState({ status: false })}>rerender</button>
        </>
    );
};
