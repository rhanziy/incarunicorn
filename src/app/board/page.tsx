"use client";

import { Box } from "@mui/material";
import useIsMobile from "../hooks/useIsMobile";

export default function Board() {
  const { isMobile } = useIsMobile();

  return (
    <Box mt={2} pl={3} pr={3}>
      게시물 페이지
    </Box>
  );
}
