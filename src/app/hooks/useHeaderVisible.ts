'use client';

import { useEffect, useState } from 'react';

const useHeaderVisible = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      setIsHeaderVisible(true);
      setIsTop(window.scrollY < 50);
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        window.scrollY > 50
          ? setIsHeaderVisible(false)
          : setIsHeaderVisible(true);
      }, 1500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);

  return { isHeaderVisible, isTop };
};

export default useHeaderVisible;
