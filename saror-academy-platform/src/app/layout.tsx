import './globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Saror Academy',
  description: 'Learn programming with bilingual lessons in English and Arabic',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}
