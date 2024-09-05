import type { Metadata, Viewport } from "next";
import "./styles/theme.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Header from "@components/Header";
import localFont from "next/font/local";
import { Suspense } from "react";
import { LoadingSpinner } from "@/app/components/LoadingSpinner";
import * as style from "./layout.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : (process.env.NEXT_PUBLIC_API_URL as string);

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "인카금융서비스 유니콘사업팀",
  description: "인카금융서비스 유티콘사업팀 프로필 페이지입니다.",
  verification: {
    google: "M17LG2erv77dnlD8MV30BuFwITyiKmCJzbGUBl5Giy0",
    other: {
      "naver-site-verification": "2dc89d08d48552e47cb40ffb97e5abc9b7f152a6",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
      <html lang="ko" suppressHydrationWarning>
        <body className={pretendard.className}>
          <AppRouterCacheProvider options={{ key: "css" }}>
            <Header />
            <div className={style.container}>
              <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
            </div>
          </AppRouterCacheProvider>
        </body>
      </html>
    );
  }
}
