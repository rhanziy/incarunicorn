"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontSize: 14,
    h4: {
      fontSize: 17,
      fontWeight: 600,
    },
    allVariants: {
      color: "#444",
    },
    body2: {
      color: "#b4b4b4",
      textDecoration: "underline",
    },
  },
});

export default theme;
