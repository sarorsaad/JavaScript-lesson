import React from 'react';
import LessonLayout from '@/components/lessons/LessonLayout';
import { LessonMeta } from '@/types/lesson';
import ElementSelection from './components/ElementSelection';
import ElementStorage from './components/ElementStorage';
import ElementModification from './components/ElementModification';
import EventHandling from './components/EventHandling';
import CompleteExample from './components/CompleteExample';

const lessonMeta: LessonMeta = {
  title: 'DOM Manipulation',
  description: 'Learn how to manipulate the Document Object Model (DOM) using JavaScript',
  language: 'en',
  category: 'javascript',
  level: 'intermediate',
  order: 2,
};

export default function DOMManipulationLesson() {
  return (
    <LessonLayout meta={lessonMeta}>
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">DOM Manipulation Steps Tutorial</h1>
        
        <ElementSelection lang="en" />
        <ElementStorage lang="en" />
        <ElementModification lang="en" />
        <EventHandling lang="en" />
        <CompleteExample />
      </section>
    </LessonLayout>
  );
}
