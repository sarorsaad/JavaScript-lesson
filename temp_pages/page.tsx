import React from 'react';
import Link from 'next/link';


interface HomePageProps {
  params: {
    lang: string;
  };
}

// Validate language parameter
const isValidLang = (lang: string): lang is 'en' | 'ar' => {
  return ['en', 'ar'].includes(lang);
}

export default function HomePage({ params: { lang } }: HomePageProps) {
  if (!isValidLang(lang)) {
    return null; // Let Next.js handle invalid language routes
  }
  const content = {
    en: {
      title: 'Welcome to SarorAcademy',
      description: 'Learn programming with comprehensive bilingual courses',
      courses: {
        title: 'Available Courses',
        javascript: 'JavaScript Fundamentals',
        react: 'React Development',
        nodejs: 'Node.js Essentials'
      },
      startLearning: 'Start Learning'
    },
    ar: {
      title: 'مرحباً بك في أكاديمية سرور',
      description: 'تعلم البرمجة مع دورات شاملة ثنائية اللغة',
      courses: {
        title: 'الدورات المتاحة',
        javascript: 'أساسيات جافا سكريبت',
        react: 'تطوير رياكت',
        nodejs: 'أساسيات نود جي إس'
      },
      startLearning: 'ابدأ التعلم'
    }
  };

  const text = content[lang];
  const isRTL = lang === 'ar';

  return (
    <div className={`py-12 ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            {text.title}
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
            {text.description}
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{text.courses.title}</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { path: 'javascript', title: text.courses.javascript },
              { path: 'react', title: text.courses.react },
              { path: 'nodejs', title: text.courses.nodejs }
            ].map((course) => (
              <Link
                key={course.path}
                href={`/${lang}/lessons/${course.path}`}
                className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
              >
                <div className="flex-1 min-w-0">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900">{course.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
