import { navigate, PageProps } from 'gatsby';
import debounce from 'lodash/debounce';
import { useCallback, useEffect } from 'react';

import { useNextPrevPath } from './useNextPrevPath';

export const useNavigateOnWheel = (location: PageProps['location']) => {
    const { prevPath, nextPath } = useNextPrevPath(location);

    const handleScroll = useCallback(
        debounce((event: WheelEvent) => {
            if (event.deltaY > 0) {
                navigate(nextPath);
            } else {
                navigate(prevPath);
            }
        }, 100),
        [prevPath, nextPath],
    );

    useEffect(() => {
        window.addEventListener('wheel', handleScroll);

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [handleScroll]);
};
