import Typography from "@mui/material/Typography";
import Link from "next/link";
import styles from "./page.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          로고
        </Typography>
      </Link>
      <nav className={styles.nav}>
        <Link href="/">홈</Link>
        <Link href="/about">소개</Link>
      </nav>
    </header>
  );
}

export default Header;
