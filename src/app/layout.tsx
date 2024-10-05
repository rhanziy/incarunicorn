import type { Metadata, Viewport } from 'next';
import './styles/theme.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Header from '@/app/components/header/Header';
import localFont from 'next/font/local';
import { LoadingSpinner } from '@/app/components/loading/LoadingSpinner';
import * as style from './layout.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_API_URL as string),
  title: '인카금융서비스 유니콘사업단',
  description: '인카금융서비스 유니콘사업단 페이지입니다.',
  verification: {
    google: 'M17LG2erv77dnlD8MV30BuFwITyiKmCJzbGUBl5Giy0',
    other: {
      'naver-site-verification': '417ba1649b49bd2cad3dd1b1636316c39491e34a',
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
  openGraph: {
    images: [
      {
        url: './opengraph-image.png',
        alt: '썸네일 이미지',
      },
    ],
  },
};

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
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
          <AppRouterCacheProvider options={{ key: 'css' }}>
            <Header />
            <div className={style.container}>
              <LoadingSpinner />
              {children}
            </div>
          </AppRouterCacheProvider>
        </body>
      </html>
    );
  }
}
