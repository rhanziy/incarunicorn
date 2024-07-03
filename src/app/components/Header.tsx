import Typography from "@mui/material/Typography";
import Link from "next/link";
import styles from "./header.module.css";
import CustomLink from "./CustomLink";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          유니콘사업팀
        </Typography>
      </Link>
      <nav className={styles.nav}>
        <CustomLink href="/">소개</CustomLink>
        <CustomLink href="/board">게시물</CustomLink>
        <CustomLink href="/reviews">고객후기</CustomLink>
        <CustomLink href="/contact">상담신청</CustomLink>
      </nav>
    </header>
  );
}

export default Header;
