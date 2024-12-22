import React from 'react';
import LessonLayout from '@/components/lessons/LessonLayout';
import { LessonMeta } from '@/types/lesson';
import BrowserArchitecture from './components/BrowserArchitecture';
import ReactInteraction from './components/ReactInteraction';
import Performance from './components/Performance';

const lessonMeta: LessonMeta = {
  title: 'عملية المتصفح',
  description: 'فهم كيفية معالجة وعرض تطبيقات React في المتصفح',
  language: 'ar',
  category: 'react',
  level: 'beginner',
  order: 2,
};

export default function BrowserProcessLesson() {
  return (
    <LessonLayout meta={lessonMeta}>
      <section className="space-y-8" dir="rtl">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h1 className="text-3xl font-bold mb-4">عملية المتصفح و React</h1>
          <p className="text-lg text-gray-700">
            فهم كيفية معالجة وعرض تطبيقات React في المتصفح أمر ضروري لبناء تطبيقات ويب فعالة.
          </p>
        </div>

        <BrowserArchitecture />
        <ReactInteraction />
        <Performance />
      </section>
    </LessonLayout>
  );
}
