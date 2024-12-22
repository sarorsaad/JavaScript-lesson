import React from 'react';
import LessonLayout from '@/components/lessons/LessonLayout';
import { LessonMeta } from '@/types/lesson';

const lessonMeta: LessonMeta = {
  title: 'What is React?',
  description: 'Learn about React, its key features, and why it\'s popular for building user interfaces.',
  language: 'en',
  category: 'react',
  level: 'beginner',
  order: 1,
};

export default function ReactIntroductionLesson() {
  return (
    <LessonLayout meta={lessonMeta}>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Definition</h2>
        <p className="mb-4">React is a JavaScript library for building user interfaces</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Key Features</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">1. Component-Based</h3>
          <p className="mb-2">You can build encapsulated, reusable UI components</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">2. Declarative</h3>
          <p className="mb-2">Describe how your UI should look in each state</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">3. Learn Once, Write Anywhere</h3>
          <p className="mb-2">Can be used for web, mobile (React Native), and desktop applications</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Why React?</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">1. Popularity</h3>
          <p className="mb-2">Most popular JavaScript library for building UIs</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">2. Community Support</h3>
          <ul className="list-disc list-inside mb-2">
            <li>Large ecosystem of libraries and tools</li>
            <li>Extensive documentation and resources</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">3. Performance</h3>
          <ul className="list-disc list-inside mb-2">
            <li>Virtual DOM for efficient updates</li>
            <li>Optimized rendering</li>
            <li>Better user experience</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">4. Flexibility</h3>
          <ul className="list-disc list-inside mb-2">
            <li>Can be integrated with other libraries or frameworks</li>
            <li>Works well with existing code</li>
          </ul>
        </div>
      </section>
    </LessonLayout>
  );
}
