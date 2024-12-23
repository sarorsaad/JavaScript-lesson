import { Navbar } from '@/components/navigation/Navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Saror Academy',
  description: 'Learn programming with bilingual content',
}

interface LayoutProps {
  children: React.ReactNode
  params: {
    lang: string
  }
}

export default function RootLayout(props: LayoutProps) {
  const { children, params } = props
  const currentLang = params.lang as 'en' | 'ar'
  
  return (
    <div dir={currentLang === 'ar' ? 'rtl' : 'ltr'} 
         className="min-h-screen" lang={currentLang}>
      <Navbar lang={currentLang} />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
}
