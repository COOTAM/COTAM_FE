import { useState } from 'react';
import useIntersect from './useIntersect';

const useIsVisible = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useIntersect((entry) => {
    if (entry.isIntersecting) {
      return setIsVisible(true);
    }

    if (!entry.isIntersecting) {
      return setIsVisible(false);
    }
  });

  return { isVisible, ref };
};

export default useIsVisible;
