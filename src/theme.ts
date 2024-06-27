"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import localFont from "next/font/local";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

const theme = createTheme({
  typography: {
    fontFamily: pretendard.style.fontFamily,
  },
});

export default theme;
