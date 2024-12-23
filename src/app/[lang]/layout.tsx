'use client'

import { Navbar } from '@/components/navigation/Navbar'

type Props = {
  children: React.ReactNode,
  params: { lang: 'en' | 'ar' }
}

export default function Layout({ children, params }: Props) {
  const currentLang = params.lang
  
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
