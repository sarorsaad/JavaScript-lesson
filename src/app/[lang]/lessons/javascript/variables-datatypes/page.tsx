import React from 'react';
import LessonLayout from '@/components/lessons/LessonLayout';
import { LessonMeta } from '@/types/lesson';
import VariableIntroduction from './components/VariableIntroduction';
import DataTypes from './components/DataTypes';
import VariableDemo from './components/VariableDemo';
import DataTypeDemo from './components/DataTypeDemo';

const lessonMeta: LessonMeta = {
  title: 'Variables and Primitive Data Types in JavaScript',
  description: 'Learn about JavaScript variables and the different primitive data types available in the language.',
  language: 'en',
  category: 'javascript',
  level: 'beginner',
  order: 2,
};

export default function VariablesAndDataTypesLesson() {
  return (
    <LessonLayout meta={lessonMeta}>
      <div className="space-y-12">
        <VariableIntroduction lang="en" />
        <VariableDemo lang="en" />
        <DataTypes lang="en" />
        <DataTypeDemo lang="en" />
      </div>
    </LessonLayout>
  );
}
