import React from 'react';
import LessonLayout from '@/components/lessons/LessonLayout';
import { LessonMeta } from '@/types/lesson';
import AttributeBasics from './components/AttributeBasics';
import StyleAttributes from './components/StyleAttributes';
import DynamicStyling from './components/DynamicStyling';
import AccessibilitySection from './components/AccessibilitySection';

const lessonMeta: LessonMeta = {
  title: 'JSX Attributes',
  description: 'Learn how to use attributes in JSX, including styling and ARIA attributes for accessibility',
  language: 'en',
  category: 'react',
  level: 'beginner',
  order: 2,
};

export default function JSXAttributesLesson() {
  return (
    <LessonLayout meta={lessonMeta}>
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Attributes in Web Development</h1>
        
        <p className="text-gray-700 mb-6">
          Attributes in web development refer to additional information that can be added to HTML or JSX elements 
          to define their properties, behaviors, or relationships. They modify how an element is displayed or 
          how it interacts with the user.
        </p>

        <AttributeBasics />
        <StyleAttributes />
        <DynamicStyling />
        <AccessibilitySection />
      </section>
    </LessonLayout>
  );
}
