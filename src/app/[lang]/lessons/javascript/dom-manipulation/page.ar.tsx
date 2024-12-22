import React from 'react';
import LessonLayout from '@/components/lessons/LessonLayout';
import { LessonMeta } from '@/types/lesson';
import ElementSelection from './components/ElementSelection';
import ElementStorage from './components/ElementStorage';
import ElementModification from './components/ElementModification';
import EventHandling from './components/EventHandling';
import CompleteExample from './components/CompleteExample';

const lessonMeta: LessonMeta = {
  title: 'التعامل مع DOM',
  description: 'تعلم كيفية التعامل مع Document Object Model (DOM) باستخدام جافا سكريبت',
  language: 'ar',
  category: 'javascript',
  level: 'intermediate',
  order: 2,
};

export default function DOMManipulationLesson() {
  return (
    <LessonLayout meta={lessonMeta}>
      <section className="mb-8" dir="rtl">
        <h1 className="text-3xl font-bold mb-4">دليل خطوات التعامل مع DOM</h1>
        
        <ElementSelection lang="ar" />
        <ElementStorage lang="ar" />
        <ElementModification lang="ar" />
        <EventHandling lang="ar" />
        <CompleteExample />
      </section>
    </LessonLayout>
  );
}
