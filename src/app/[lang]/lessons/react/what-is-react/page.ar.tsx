import React from 'react';
import LessonLayout from '@/components/lessons/LessonLayout';
import { LessonMeta } from '@/types/lesson';
import FeatureCard from './components/FeatureCard';


const lessonMeta: LessonMeta = {
  title: 'ما هو React؟',
  description: 'مقدمة إلى React، ميزاته الرئيسية، وسبب شعبيته',
  language: 'ar',
  category: 'react',
  level: 'beginner',
  order: 1,
};

const features = [
  {
    title: 'Component-Based',
    arabicTitle: 'مبني على المكونات',
    arabicContent: 'يمكنك بناء عناصر واجهة المستخدم المعزولة والقابلة لإعادة الاستخدام',
    englishContent: 'You can build encapsulated, reusable UI components'
  },
  {
    title: 'Declarative',
    arabicTitle: 'تصريحي',
    arabicContent: 'تصف كيف يجب أن تبدو واجهة المستخدم في كل حالة',
    englishContent: 'Describe how your UI should look in each state'
  },
  {
    title: 'Learn Once, Write Anywhere',
    arabicTitle: 'تعلم مرة واحدة، اكتب في أي مكان',
    arabicContent: 'تعلم مرة واحدة، اكتب في أي مكان',
    englishContent: 'Can be used for web, mobile (React Native), and desktop applications'
  }
];

const whyReactFeatures = [
  {
    title: 'Popularity',
    arabicTitle: 'الشعبية',
    arabicContent: 'أكثر مكتبة JavaScript شعبية لبناء واجهات المستخدم',
    englishContent: 'Most popular JavaScript library for building UIs'
  },
  {
    title: 'Community Support',
    arabicTitle: 'دعم المجتمع',
    arabicContent: 'مجتمع كبير من المطورين',
    englishContent: 'Large ecosystem of libraries and tools'
  },
  {
    title: 'Performance',
    arabicTitle: 'الأداء',
    arabicContent: 'أداء عالي مع Virtual DOM',
    englishContent: 'High performance with Virtual DOM'
  },
  {
    title: 'Flexibility',
    arabicTitle: 'المرونة',
    arabicContent: 'يمكن استخدامه مع أي مكتبة أو إطار عمل آخر',
    englishContent: 'Can be integrated with other libraries or frameworks'
  }
];

export default function WhatIsReactLesson() {
  return (
    <LessonLayout meta={lessonMeta}>
      <div className="space-y-8" dir="rtl">
        <div className="bg-blue-50 p-6 rounded-lg text-center">
          <p className="text-xl text-blue-800 mb-2 font-arabic">
            React هي مكتبة JavaScript لبناء واجهات المستخدم
          </p>
          <p className="text-xl text-blue-600">
            React is a JavaScript library for building user interfaces
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.arabicTitle}
              arabicTitle={feature.title}
              arabicContent={feature.arabicContent}
              englishContent={feature.englishContent}
              isRTL={true}
            />
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">لماذا React؟</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {whyReactFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.arabicTitle}
                arabicTitle={feature.title}
                arabicContent={feature.arabicContent}
                englishContent={feature.englishContent}
                isRTL={true}
              />
            ))}
          </div>
        </div>
      </div>
    </LessonLayout>
  );
}
