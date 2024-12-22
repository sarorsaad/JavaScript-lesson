import './globals.css'
import { Inter, Noto_Sans_Arabic } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })
const notoSansArabic = Noto_Sans_Arabic({ 
  subsets: ['arabic'],
  variable: '--font-noto-sans-arabic',
})

export const metadata = {
  title: 'Saror Academy',
  description: 'Learn programming with bilingual lessons in English and Arabic',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={`${inter.className} ${notoSansArabic.variable}`}>
        {children}
      </body>
    </html>
  )
}
