import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '买电车还是油车计算器 - 帮您做出明智的选择',
  description: '通过年行驶里程、充电条件、使用场景等多个维度，科学计算是否适合购买电动汽车或燃油车。',
  keywords: '电动汽车,新能源车,燃油车,购车计算器,用车成本',
  authors: [{ name: '车辆推荐系统' }],
  openGraph: {
    title: '买电车还是油车计算器 - 帮您做出明智的选择',
    description: '通过年行驶里程、充电条件、使用场景等多个维度，科学计算是否适合购买电动汽车或燃油车。',
    type: 'website',
    locale: 'zh_CN',
    image: 'https://img.dakaiai.app/file/AgACAgEAAyEGAASJ9vGyAAMNZ0axvMaVItDWKif-H1CU1fyLKBoAAtCtMRsQJzlG99pOFtbsTQMBAAMCAAN5AAM2BA.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: '买电车还是油车计算器 - 帮您做出明智的选择',
    description: '通过年行驶里程、充电条件、使用场景等多个维度，科学计算是否适合购买电动汽车或燃油车。',
    image: 'https://img.dakaiai.app/file/AgACAgEAAyEGAASJ9vGyAAMNZ0axvMaVItDWKif-H1CU1fyLKBoAAtCtMRsQJzlG99pOFtbsTQMBAAMCAAN5AAM2BA.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

