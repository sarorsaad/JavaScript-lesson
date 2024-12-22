import React from 'react';
import LessonLayout from '@/components/lessons/LessonLayout';
import { LessonMeta } from '@/types/lesson';
import BrowserArchitecture from './components/BrowserArchitecture';
import ReactInteraction from './components/ReactInteraction';
import Performance from './components/Performance';

const lessonMeta: LessonMeta = {
  title: 'Browser Process',
  description: 'Understanding how browsers process and render React applications',
  language: 'en',
  category: 'react',
  level: 'beginner',
  order: 2,
};

export default function BrowserProcessLesson() {
  return (
    <LessonLayout meta={lessonMeta}>
      <section className="space-y-8">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h1 className="text-3xl font-bold mb-4">Browser Process and React</h1>
          <p className="text-lg text-gray-700">
            Understanding how browsers process and render React applications is crucial for building efficient web applications.
          </p>
        </div>

        <BrowserArchitecture />
        <ReactInteraction />
        <Performance />
      </section>
    </LessonLayout>
  );
}
