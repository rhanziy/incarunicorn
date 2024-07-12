import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import Header from "./components/Header";
<<<<<<< Updated upstream
=======
import localFont from "next/font/local";
import { Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
>>>>>>> Stashed changes

export const metadata: Metadata = {
  title: "유니콘 사업팀",
  description: "유티콘 사업팀",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
<<<<<<< Updated upstream
  return (
    <html lang="ko">
      <body>
        <Header />
        <AppRouterCacheProvider options={{ key: "css" }}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
=======
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
>>>>>>> Stashed changes
}
