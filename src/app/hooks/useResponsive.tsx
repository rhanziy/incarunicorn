"use client";
import { useMediaQuery } from "@mui/material";

const useResponsive = () => {
  const isTablet = useMediaQuery("(max-width:767px)", { noSsr: true });
  const isMobile = useMediaQuery("(max-width:480px)", { noSsr: true });
  const isSmallMobile = useMediaQuery("(max-width:380px)", { noSsr: true });

  return { isTablet, isMobile, isSmallMobile };
};

export default useResponsive;
