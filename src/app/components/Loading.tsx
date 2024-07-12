import { Box, CircularProgress } from "@mui/material";

export const Loading = () => {
  return (
    <Box
      position="fixed"
      width="100%"
      height="100%"
      top={0}
      left={0}
      zIndex={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />
    </Box>
  );
};
