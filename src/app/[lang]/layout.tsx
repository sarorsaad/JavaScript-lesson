import { Navbar } from '@/components/navigation/Navbar'

import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode;
  params: {
    lang: 'en' | 'ar';
  };
}

export default function LangLayout({
  children,
  params: { lang },
}: LayoutProps) {
  // Cast lang parameter to union type expected by Navbar
  const currentLang = lang as 'en' | 'ar';
  
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
