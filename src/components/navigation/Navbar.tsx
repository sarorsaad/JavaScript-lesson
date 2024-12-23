"use client";

import React, { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface NavbarProps {
  lang: 'en' | 'ar';
}

export const Navbar: FC<NavbarProps> = ({ lang }) => {
  const router = useRouter();
  const isRTL = lang === 'ar';

  const navigation = {
    en: {
      home: 'Home',
      javascript: 'JavaScript',
      react: 'React',
      nodejs: 'Node.js',
      quizzes: 'Quizzes',
      switchLanguage: 'العربية'
    },
    ar: {
      home: 'الرئيسية',
      javascript: 'جافا سكريبت',
      react: 'رياكت',
      nodejs: 'نود جي إس',
      quizzes: 'اختبارات',
      switchLanguage: 'English'
    }
  };

  const text = navigation[lang];
  const otherLang = lang === 'en' ? 'ar' : 'en';

  const switchLanguage = () => {
    const currentPath = window.location.pathname;
    const newPath = currentPath === `/${lang}` 
      ? `/${otherLang}`
      : currentPath.replace(`/${lang}/`, `/${otherLang}/`);
    router.push(newPath);
  };

  return (
    <nav className={`bg-gray-800 ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href={`/${lang}`} className="text-white font-bold text-xl">
                SarorAcademy
              </Link>
            </div>
            <div className="hidden md:block">
              <div className={`${isRTL ? 'mr-10' : 'ml-10'} flex items-baseline space-x-4`}>
                <Link
                  href={`/${lang}/lessons/javascript`}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {text.javascript}
                </Link>
                <Link
                  href={`/${lang}/lessons/react`}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {text.react}
                </Link>
                <Link
                  href={`/${lang}/lessons/nodejs`}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {text.nodejs}
                </Link>
                <Link
                  href={`/${lang}/quizzes`}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {text.quizzes}
                </Link>
              </div>
            </div>
          </div>
          <button
            onClick={switchLanguage}
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            {text.switchLanguage}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
