import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { LanguageContext } from '@/utils/i18n';
import '@/styles/fonts.css';

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    lang: 'en' | 'ar';
  };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  const { lang } = params;
  const isRTL = lang === 'ar';

  return (
    <div 
      className={`min-h-screen ${isRTL ? 'text-right' : 'text-left'}`}
      style={{ 
        fontFamily: isRTL ? 'var(--font-arabic)' : 'var(--font-english)'
      }}
      dir={isRTL ? 'rtl' : 'ltr'}
      lang={lang}
    >
      <LanguageContext.Provider value={lang}>
        <Navbar language={lang} />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </LanguageContext.Provider>
    </div>
  );
}
