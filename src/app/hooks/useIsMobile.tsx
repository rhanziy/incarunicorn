import { useMediaQuery } from "@mui/material";

const useResponsive = () => {
  const isTablet = useMediaQuery("(max-width:767px)");
  const isMobile = useMediaQuery("(max-width:480px)");
  const isSmallMobile = useMediaQuery("(max-width:380px)");

  return { isTablet, isMobile, isSmallMobile };
};

export default useResponsive;
