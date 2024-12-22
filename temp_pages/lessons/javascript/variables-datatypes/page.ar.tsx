import React from 'react';
import LessonLayout from '@/components/lessons/LessonLayout';
import { LessonMeta } from '@/types/lesson';
import VariableIntroduction from './components/VariableIntroduction';
import DataTypes from './components/DataTypes';
import VariableDemo from './components/VariableDemo';
import DataTypeDemo from './components/DataTypeDemo';

const lessonMeta: LessonMeta = {
  title: 'المتغيرات وأنواع البيانات الأساسية في جافا سكريبت',
  description: 'تعلم عن المتغيرات في جافا سكريبت وأنواع البيانات الأساسية المتوفرة في اللغة.',
  language: 'ar',
  category: 'javascript',
  level: 'beginner',
  order: 2,
};

export default function VariablesAndDataTypesLesson() {
  return (
    <LessonLayout meta={lessonMeta}>
      <div className="space-y-12" dir="rtl">
        <VariableIntroduction lang="ar" />
        <VariableDemo lang="ar" />
        <DataTypes lang="ar" />
        <DataTypeDemo lang="ar" />
      </div>
    </LessonLayout>
  );
}
