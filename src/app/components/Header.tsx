"use client";
import Link from "next/link";
import styles from "./header.module.css";
import CustomLink from "./CustomLink";
import useHeaderVisible from "@hooks/useHeaderVisible";
import Image from "next/image";
import useResponsive from "@hooks/useResponsive";
import { Box } from "@mui/material";

function Header() {
  const { isMobile } = useResponsive();
  const { isHeaderVisible, isTop } = useHeaderVisible();

  return (
    <>
      <header
        className={`${styles.header} ${!isHeaderVisible ? styles.hide : ""} ${
          isTop ? "" : styles.shadow
        }`}
      >
        <div className={styles.container}>
          <Link href="/">
            <Box
              sx={{
                width: isMobile ? 220 : 260,
                height: isMobile ? 28 : 34,
              }}
            >
              <Image
                src="/images/logo-horizon.png"
                alt="로고 이미지"
                width={100}
                height={100}
                layout="responsive"
                priority
              />
            </Box>
          </Link>
          <nav className={styles.nav}>
            <CustomLink href="/">소개</CustomLink>
            {/* <CustomLink href="/board">게시물</CustomLink> */}
            <CustomLink href="/reviews">상담후기</CustomLink>
            <CustomLink href="/contact">상담신청</CustomLink>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
