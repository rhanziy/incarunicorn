'use client';

import Link from 'next/link';
import useHeaderVisible from '@/app/components/header/hooks/useHeaderVisible';
import Image from 'next/image';
import * as styles from './header.css';
import CustomLink from '../CustomLink';
import { usePathname } from 'next/navigation';

function Header() {
  const { isHeaderVisible, isTop } = useHeaderVisible();
  const pathname = usePathname();

  return (
    <>
      {pathname === '/contact/pet' || pathname === '/admin' ? (
        <></>
      ) : (
        <div
          className={`${styles.header} ${!isHeaderVisible ? styles.hide : ''} ${
            isTop ? '' : styles.shadow
          }`}
        >
          <div className={styles.container}>
            <Link href="/" scroll={false}>
              <div
                style={{
                  position: 'relative',
                  width: 240,
                  height: 34,
                }}
              >
                <Image
                  src="/images/logo-horizon.png"
                  alt="로고 이미지"
                  fill
                  sizes="240px"
                  // priority
                />
              </div>
            </Link>
            <div className={styles.nav}>
              <CustomLink href="/">소개</CustomLink>
              <CustomLink href="/about">회사소개</CustomLink>
              <CustomLink href="/reviews?page=1">상담후기</CustomLink>
              <CustomLink href="/contact">상담신청</CustomLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
