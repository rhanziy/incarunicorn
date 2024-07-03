"use client";

import { Box } from "@mui/material";
import useIsMobile from "../hooks/useIsMobile";

export default function Reviews() {
  const { isMobile } = useIsMobile();

  return (
    <Box mt={2} pl={3} pr={3}>
      리뷰 페이지
    </Box>
  );
}
