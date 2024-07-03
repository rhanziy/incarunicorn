import { useMediaQuery } from "@mui/material";

const useResponsive = () => {
  const isMobile = useMediaQuery("(max-width:720px)");
  const isSmallMobile = useMediaQuery("(max-width:340px)");

  return { isMobile, isSmallMobile };
};

export default useResponsive;
