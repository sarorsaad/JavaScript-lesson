import React from 'react';
import { LessonMeta } from '@/types/lesson';
import { useLanguage, getDirection, getFontFamily } from '@/utils/i18n';
import VideoLesson from './VideoLesson';

interface LessonLayoutProps {
  meta: LessonMeta;
  children: React.ReactNode;
}

export default function LessonLayout({ meta, children }: LessonLayoutProps) {
  const lang = useLanguage();
  const dir = getDirection(lang);
  const fontFamily = getFontFamily(lang);
  const isRTL = lang === 'ar';

  return (
    <article 
      className={`max-w-4xl mx-auto px-4 py-8 ${isRTL ? 'text-right' : 'text-left'}`}
      dir={dir}
      style={{ fontFamily }}
    >
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{meta.title}</h1>
        <p className="text-gray-600">{meta.description}</p>
        <div className={`flex gap-2 mt-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">{meta.category}</span>
          <span className="px-2 py-1 bg-green-100 text-green-800 rounded">{meta.level}</span>
        </div>
      </header>
      <div className={`prose max-w-none ${isRTL ? 'rtl' : ''}`}>
        {children}
      </div>
      {meta.videoUrl && (
        <VideoLesson
          videoUrl={meta.videoUrl}
          title={meta.titleTranslations || {
            en: meta.title,
            ar: meta.title
          }}
          description={meta.descriptionTranslations || {
            en: meta.description,
            ar: meta.description
          }}
          transcript={meta.transcript}
        />
      )}
    </article>
  );
}
