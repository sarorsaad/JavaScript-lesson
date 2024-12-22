import React from 'react';
import { LessonMeta } from '@/types/lesson';
import LessonLayout from '@/components/lessons/LessonLayout';

const meta: LessonMeta = {
  title: "مقدمة في جافا سكريبت",
  description: "تعلم أساسيات برمجة جافا سكريبت",
  language: 'ar',
  category: 'javascript',
  level: 'beginner',
  order: 1,
  videoUrl: 'https://example.com/intro-to-js.mp4', // This will be replaced with actual video URL
  titleTranslations: {
    en: "Introduction to JavaScript",
    ar: "مقدمة في جافا سكريبت"
  },
  descriptionTranslations: {
    en: "Learn the fundamentals of JavaScript programming",
    ar: "تعلم أساسيات برمجة جافا سكريبت"
  },
  transcript: {
    en: `Welcome to the Introduction to JavaScript course!
In this lesson, we'll cover:
- What is JavaScript?
- Why learn JavaScript?
- Basic JavaScript syntax
- Running your first JavaScript program`,
    ar: `مرحباً بكم في دورة مقدمة جافا سكريبت!
في هذا الدرس، سنتناول:
- ما هو جافا سكريبت؟
- لماذا نتعلم جافا سكريبت؟
- بناء الجملة الأساسي لجافا سكريبت
- تشغيل برنامج جافا سكريبت الأول الخاص بك`
  }
};

export default function IntroductionPage() {
  return (
    <LessonLayout meta={meta}>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-4">ما هو جافا سكريبت؟</h2>
          <p>
            جافا سكريبت هي لغة برمجة متعددة الاستخدامات تدعم الويب الحديث.
            تتيح لك إنشاء محتوى تفاعلي وديناميكي على مواقع الويب.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">لماذا نتعلم جافا سكريبت؟</h2>
          <ul className="list-disc pr-6">
            <li>أكثر لغات البرمجة شيوعاً في تطوير الويب</li>
            <li>تعمل في كل متصفح حديث</li>
            <li>نظام بيئي كبير من المكتبات والأطر</li>
            <li>مجتمع نشط وموارد واسعة</li>
          </ul>
        </section>
      </div>
    </LessonLayout>
  );
}
