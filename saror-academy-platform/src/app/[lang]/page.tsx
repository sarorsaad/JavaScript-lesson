import { Metadata } from 'next'
import dynamic from 'next/dynamic'

const HomePageClient = dynamic(() => import('./HomePageClient'), {
  ssr: true
})
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Welcome to Saror Academy',
  description: 'Start your programming journey with our bilingual lessons',
}

export default function HomePage({ params }: { params: { lang: string } }) {
  const isArabic = params.lang === 'ar'
  
  return <HomePageClient lang={params.lang} />
}
