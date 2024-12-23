'use client'

import { Navbar } from '@/components/navigation/Navbar'

type Props = {
  children: React.ReactNode;
  lang: 'en' | 'ar';
};

export function LayoutContent({ children, lang }: Props) {
  const direction = lang === 'ar' ? 'rtl' : 'ltr';
  
  return (
    <div dir={direction} className="min-h-screen" lang={lang}>
      <Navbar lang={lang} />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
}
