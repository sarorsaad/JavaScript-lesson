import './globals.css'
import { Inter, Noto_Kufi_Arabic } from 'next/font/google'
import React from 'react'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-arabic',
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${notoKufiArabic.variable} min-h-screen font-sans`}>
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
