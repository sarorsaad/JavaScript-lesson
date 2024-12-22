import React from 'react';
import LessonLayout from '@/components/lessons/LessonLayout';
import { LessonMeta } from '@/types/lesson';
import PureJavaScript from './components/PureJavaScript';
import ReactSetup from './components/ReactSetup';
import HTMLStructure from './components/HTMLStructure';
import ReactProcess from './components/ReactProcess';
import InteractiveVisualization from './components/InteractiveVisualization';

const lessonMeta: LessonMeta = {
  title: 'عناصر React',
  description: 'تعلم كيفية إنشاء وإدارة عناصر React، بما في ذلك DOM الافتراضي وعملية العرض',
  language: 'ar',
  category: 'react',
  level: 'beginner',
  order: 3,
};

export default function ReactElementsLesson() {
  return (
    <LessonLayout meta={lessonMeta}>
      <section className="mb-8" dir="rtl">
        <h1 className="text-3xl font-bold mb-4">عناصر React و DOM الافتراضي</h1>
        
        <PureJavaScript />
        <ReactSetup />
        <HTMLStructure />
        <ReactProcess />
        <InteractiveVisualization />
      </section>
    </LessonLayout>
  );
}
