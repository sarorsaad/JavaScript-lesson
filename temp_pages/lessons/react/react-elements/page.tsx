import React from 'react';
import LessonLayout from '@/components/lessons/LessonLayout';
import { LessonMeta } from '@/types/lesson';
import PureJavaScript from './components/PureJavaScript';
import ReactSetup from './components/ReactSetup';
import HTMLStructure from './components/HTMLStructure';
import ReactProcess from './components/ReactProcess';
import InteractiveVisualization from './components/InteractiveVisualization';

const lessonMeta: LessonMeta = {
  title: 'React Elements',
  description: 'Learn how React creates and manages elements, including the Virtual DOM and rendering process',
  language: 'en',
  category: 'react',
  level: 'beginner',
  order: 3,
};

export default function ReactElementsLesson() {
  return (
    <LessonLayout meta={lessonMeta}>
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">React Elements and the Virtual DOM</h1>
        
        <PureJavaScript />
        <ReactSetup />
        <HTMLStructure />
        <ReactProcess />
        <InteractiveVisualization />
      </section>
    </LessonLayout>
  );
}
