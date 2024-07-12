import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import Header from "./components/Header";
import localFont from "next/font/local";
import { Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";

export const metadata: Metadata = {
  title: "인카금융서비스 유니콘사업팀",
  description: "인카금융서비스 유티콘사업팀 프로필 페이지입니다.",
};

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  {
    return (
      <html lang="ko">
        <body className={pretendard.className}>
          <Header />
          <div className={"main"}>
            <Suspense
              fallback={
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
              }
            >
              <AppRouterCacheProvider options={{ key: "css" }}>
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
              </AppRouterCacheProvider>
            </Suspense>
          </div>
        </body>
      </html>
    );
  }
}
