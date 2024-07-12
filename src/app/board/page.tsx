"use client";

import { Box } from "@mui/material";
import useResponsive from "@hooks/useResponsive";

export default function Board() {
  const { isMobile } = useResponsive();

  return (
    <Box mt={2} pl={3} pr={3}>
      게시물 페이지
    </Box>
  );
}
