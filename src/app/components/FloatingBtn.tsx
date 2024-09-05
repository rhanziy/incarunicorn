"use client";
import Link from "next/link";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import { useEffect, useState } from "react";
import theme from "../styles/theme.css";
import * as style from "./style.css";

const FloatingBtn = () => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      setIsBottom(scrollTop + clientHeight >= scrollHeight - 100);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Link href={"/contact"} scroll={false}>
      <div className={style.floatBtn} style={{ opacity: isBottom ? 0 : 1 }}>
        <div className={style.animatedDiv}>
          <ElectricBoltIcon />
          <p
            style={{
              marginLeft: theme.margin.small,
              fontWeight: 600,
              color: "#6f5d91",
            }}
          >
            문의하기
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FloatingBtn;
