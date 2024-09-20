'use client';

import Link from 'next/link';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { useEffect, useState } from 'react';
import theme from '../styles/theme.css';
import * as style from './style.css';

function FloatingBtn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (scrollTop > 100 && scrollTop + clientHeight < scrollHeight - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <Link href="/contact" scroll={false}>
        <div className={style.floatBtn}>
          <div className={style.animatedDiv}>
            <ElectricBoltIcon />
            <p
              style={{
                marginLeft: theme.margin.small,
                fontWeight: 600,
                color: '#6f5d91',
              }}
            >
              문의하기
            </p>
          </div>
        </div>
      </Link>
    )
  );
}

export default FloatingBtn;
