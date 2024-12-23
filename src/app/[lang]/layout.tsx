import { LayoutContent } from '@/components/layout/LayoutContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Saror Academy',
  description: 'Learn programming with bilingual content',
}

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: 'en' | 'ar' }
}) {
  return (
    <html lang={params.lang}>
      <body>
        <LayoutContent lang={params.lang}>{children}</LayoutContent>
      </body>
    </html>
  )
}
