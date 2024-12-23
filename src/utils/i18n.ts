"use client";
import { createContext, useContext } from 'react';

export type Language = 'en' | 'ar';

export interface TranslationKey {
  en: string;
  ar: string;
}

export interface TranslationDictionary {
  [key: string]: TranslationKey;
}

export const defaultDictionary: TranslationDictionary = {
  // Common UI elements
  loading: {
    en: 'Loading...',
    ar: 'جاري التحميل...'
  },
  error: {
    en: 'An error occurred',
    ar: 'حدث خطأ'
  },
  next: {
    en: 'Next',
    ar: 'التالي'
  },
  previous: {
    en: 'Previous',
    ar: 'السابق'
  },
  
  // Navigation
  home: {
    en: 'Home',
    ar: 'الرئيسية'
  },
  courses: {
    en: 'Courses',
    ar: 'الدورات'
  },
  quizzes: {
    en: 'Quizzes',
    ar: 'الاختبارات'
  },
  
  // Course categories
  javascript: {
    en: 'JavaScript',
    ar: 'جافا سكريبت'
  },
  react: {
    en: 'React',
    ar: 'رياكت'
  },
  nodejs: {
    en: 'Node.js',
    ar: 'نود جي إس'
  },
  
  // Common lesson elements
  example: {
    en: 'Example',
    ar: 'مثال'
  },
  exercise: {
    en: 'Exercise',
    ar: 'تمرين'
  },
  solution: {
    en: 'Solution',
    ar: 'الحل'
  },
  tryIt: {
    en: 'Try it yourself',
    ar: 'جرب بنفسك'
  }
};

export const LanguageContext = createContext<Language>('en');

export const useLanguage = () => {
  const lang = useContext(LanguageContext);
  return lang;
};

export const useTranslation = () => {
  const lang = useLanguage();
  
  const t = (key: keyof typeof defaultDictionary) => {
    return defaultDictionary[key][lang];
  };
  
  return { t, lang };
};

export const getDirection = (lang: Language) => {
  return lang === 'ar' ? 'rtl' : 'ltr';
};

export const getFontFamily = (lang: Language) => {
  return lang === 'ar' ? 'var(--font-arabic)' : 'var(--font-english)';
};
