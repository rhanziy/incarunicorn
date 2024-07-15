import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import Header from "@components/Header";
import localFont from "next/font/local";
import { Suspense } from "react";
import { Loading } from "@components/Loading";

export const metadata: Metadata = {
  title: "인카금융서비스 유니콘사업팀",
  description: "인카금융서비스 유티콘사업팀 프로필 페이지입니다.",
  verification: {
    google: "4heD2gWK0Ec7ucqZvtsm8Ac1QmlvAOXwYKZgH8ZOQig",
  },
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
            <Suspense fallback={<Loading />}>
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
