import { LayoutContent } from '@/components/layout/LayoutContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Saror Academy',
  description: 'Learn programming with bilingual content',
}

type RootLayoutProps = {
  children: React.ReactNode
  params: { lang: 'en' | 'ar' }
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return <LayoutContent lang={params.lang}>{children}</LayoutContent>
}
