import React from 'react';
import LessonLayout from '@/components/lessons/LessonLayout';
import { LessonMeta } from '@/types/lesson';
import ReactContainer from './components/ReactContainer';
import RenderingProcess from './components/RenderingProcess';
import SingleElement from './components/SingleElement';
import MultipleElements from './components/MultipleElements';
import JSXIntroduction from './components/JSXIntroduction';

const lessonMeta: LessonMeta = {
  title: 'React Basics',
  description: 'Learn the fundamental concepts of React including components, rendering, and JSX',
  language: 'en',
  category: 'react',
  level: 'beginner',
  order: 1,
};

export default function ReactBasicsLesson() {
  return (
    <LessonLayout meta={lessonMeta}>
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">React Basic Lessons</h1>
        
        <ReactContainer />
        <RenderingProcess />
        <SingleElement />
        <MultipleElements />
        <JSXIntroduction />
      </section>
    </LessonLayout>
  );
}