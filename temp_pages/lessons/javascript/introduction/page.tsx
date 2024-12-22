import React from 'react';
import { LessonMeta } from '@/types/lesson';
import LessonLayout from '@/components/lessons/LessonLayout';

const meta: LessonMeta = {
  title: "Introduction to JavaScript",
  description: "Learn the fundamentals of JavaScript programming",
  language: 'en',
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
          <h2 className="text-2xl font-bold mb-4">What is JavaScript?</h2>
          <p>
            JavaScript is a versatile programming language that powers the modern web.
            It allows you to create interactive and dynamic content on websites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Why Learn JavaScript?</h2>
          <ul className="list-disc pl-6">
            <li>Most popular programming language for web development</li>
            <li>Runs in every modern browser</li>
            <li>Large ecosystem of libraries and frameworks</li>
            <li>Active community and extensive resources</li>
          </ul>
        </section>
      </div>
    </LessonLayout>
  );
}
