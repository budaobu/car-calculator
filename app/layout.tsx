import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '买电车还是油车计算器 - 帮您做出明智的选择',
  description: '通过年行驶里程、充电条件、使用场景等多个维度，科学计算是否适合购买电动汽车或燃油车。',
  keywords: '电动汽车,新能源车,燃油车,购车计算器,用车成本',
  authors: [{ name: '车辆推荐系统' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: '买电车还是油车计算器 - 帮您做出明智的选择',
    description: '通过年行驶里程、充电条件、使用场景等多个维度，科学计算是否适合购买电动汽车或燃油车。',
    type: 'website',
    locale: 'zh_CN',
    images: [
      {
        url: 'https://car.livemorefun.com/og-image.png',
        width: 1200,
        height: 630,
        alt: '买电车还是油车计算器'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: '买电车还是油车计算器 - 帮您做出明智的选择',
    description: '通过年行驶里程、充电条件、使用场景等多个维度，科学计算是否适合购买电动汽车或燃油车。',
    images: [
      'https://car.livemorefun.com/og-image.png'
    ]
  },
  other: {
    'google-site-verification': 'sGlqgAPbK-u7Wa1yVSCJO-bMoN7irMVCkUsJTtX3B4k',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
