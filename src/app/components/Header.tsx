"use client";
import Link from "next/link";
import styles from "./header.module.css";
import CustomLink from "./CustomLink";
import useHeaderVisible from "@hooks/useHeaderVisible";
import Image from "next/image";
import { Box } from "@mui/material";

function Header() {
  const { isHeaderVisible, isTop } = useHeaderVisible();

  return (
    <>
      <Box
        className={`${styles.header} ${!isHeaderVisible ? styles.hide : ""} ${
          isTop ? "" : styles.shadow
        }`}
      >
        <Box className={styles.container}>
          <Box
            sx={{
              width: 240,
              height: 30,
            }}
          >
            <Link href="/" scroll={false}>
              <Image
                src="/images/logo-horizon.png"
                alt="로고 이미지"
                width={100}
                height={100}
                layout="responsive"
                priority
              />
            </Link>
          </Box>
          <Box className={styles.nav}>
            <CustomLink href="/">소개</CustomLink>
            {/* <CustomLink href="/board">게시물</CustomLink> */}
            <CustomLink href="/reviews">상담후기</CustomLink>
            <CustomLink href="/contact">상담신청</CustomLink>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Header;
