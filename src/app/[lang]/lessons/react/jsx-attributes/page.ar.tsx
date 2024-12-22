import React from 'react';
import LessonLayout from '@/components/lessons/LessonLayout';
import { LessonMeta } from '@/types/lesson';
import AttributeBasics from './components/AttributeBasics';
import StyleAttributes from './components/StyleAttributes';
import DynamicStyling from './components/DynamicStyling';
import AccessibilitySection from './components/AccessibilitySection';

const lessonMeta: LessonMeta = {
  title: 'خصائص JSX',
  description: 'تعلم كيفية استخدام الخصائص في JSX، بما في ذلك التنسيق وخصائص ARIA للوصول',
  language: 'ar',
  category: 'react',
  level: 'beginner',
  order: 2,
};

export default function JSXAttributesLesson() {
  return (
    <LessonLayout meta={lessonMeta}>
      <section className="mb-8" dir="rtl">
        <h1 className="text-3xl font-bold mb-4">الخصائص في تطوير الويب</h1>
        
        <p className="text-gray-700 mb-6">
          الخصائص في تطوير الويب تشير إلى المعلومات الإضافية التي يمكن إضافتها إلى عناصر HTML أو JSX 
          لتحديد خصائصها وسلوكها أو علاقاتها. وهي تعدل كيفية عرض العنصر أو 
          كيفية تفاعله مع المستخدم.
        </p>

        <AttributeBasics />
        <StyleAttributes />
        <DynamicStyling />
        <AccessibilitySection />
      </section>
    </LessonLayout>
  );
}
