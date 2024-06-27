import Image from "next/image";
import styles from "./page.module.css";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <main className={styles.main}>
      <Box>
        홈
        {/* <Image
          src="/next.svg"
          alt="Next Logo"
          className={styles.vercelLogo}
          width={100}
          height={24}
          priority
        /> */}
      </Box>
    </main>
  );
}
