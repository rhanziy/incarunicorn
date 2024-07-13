import { Box, Typography, keyframes } from "@mui/material";
import Link from "next/link";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import useResponsive from "@hooks/useResponsive";
import { useEffect, useState } from "react";

const blinkAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50%{
    opacity:1;
  }
  100% {
    opacity: 0;
  }`;

const FloatingBtn = () => {
  const { isMobile } = useResponsive();

  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      setIsBottom(scrollTop + clientHeight >= scrollHeight - 1);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // !isBottom && (
    <Link href={"/contact"}>
      <Box
        borderRadius={2}
        p={isMobile ? 1.5 : 2}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          position: "fixed",
          bottom: isMobile ? 24 : 30,
          right: isMobile ? 24 : 30,
          backgroundColor: "#e6d9ff",
          opacity: isBottom ? 0 : 1,
          transition: "0.3s ease-in",
          filter: "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.15))",
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            animation: `${blinkAnimation} 1.5s infinite`,
            color: "#6f5d91",
          }}
        >
          <ElectricBoltIcon />
          <Typography ml={0.5} fontWeight={600} color={"#6f5d91"}>
            문의하기
          </Typography>
        </Box>
      </Box>
    </Link>
    // )
  );
};

export default FloatingBtn;
