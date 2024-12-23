import { Navbar } from '@/components/navigation/Navbar'
import { ReactNode } from 'react'

export default function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  const currentLang = params.lang as 'en' | 'ar';
  
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
