import Typography from "@mui/material/Typography";
import Link from "next/link";
import styles from "./header.module.css";
import CustomLink from "./CustomLink";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          로고
        </Typography>
      </Link>
      <nav className={styles.nav}>
        <CustomLink href="/">홈</CustomLink>
        <CustomLink href="/about">프로필</CustomLink>
      </nav>
    </header>
  );
}

export default Header;
