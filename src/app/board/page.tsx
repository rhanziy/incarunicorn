"use client";

import { Box, useMediaQuery } from "@mui/material";

export default function Home() {
  const matches = useMediaQuery("(max-width:700px)");

  return (
    <Box mt={2} pl={6} pr={6}>
      게시물 페이지
    </Box>
  );
}
