import { Metadata } from 'next'
import LayoutContent from '@/components/layout/LayoutContent'

export const metadata: Metadata = {
  title: 'Saror Academy',
  description: 'Learn programming with bilingual lessons in English and Arabic',
}

export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'ar' }
  ]
}

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  // Validate lang parameter
  if (params.lang !== 'en' && params.lang !== 'ar') {
    throw new Error(`Invalid language: ${params.lang}`)
  }

  const isArabic = params.lang === 'ar'

  return (
    <html lang={params.lang} dir={isArabic ? 'rtl' : 'ltr'}>
      <body className={`${isArabic ? 'font-arabic' : 'font-sans'} bg-background text-foreground antialiased`}>
        <LayoutContent lang={params.lang as 'en' | 'ar'}>
          {children}
        </LayoutContent>
      </body>
    </html>
  )
}
