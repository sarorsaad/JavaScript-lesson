'use client';

import React from 'react';
import Image from 'next/image';
import CodeBlock from '@/components/lessons/CodeBlock';

export default function VariableIntroduction({ lang }: { lang: 'en' | 'ar' }) {
  const content = {
    en: {
      title: 'Understanding Variables',
      description: 'Variables are containers for storing data values. JavaScript provides three ways to declare variables:',
      proTip: {
        title: 'Pro Tip:',
        text: 'Always use const by default, and only use let when you need to reassign values. Avoid using var in modern JavaScript.'
      }
    },
    ar: {
      title: 'فهم المتغيرات',
      description: 'المتغيرات هي حاويات لتخزين القيم. توفر جافا سكريبت ثلاث طرق للإعلان عن المتغيرات:',
      proTip: {
        title: 'نصيحة احترافية:',
        text: 'استخدم const دائماً بشكل افتراضي، واستخدم let فقط عندما تحتاج إلى إعادة تعيين القيم. تجنب استخدام var في جافا سكريبت الحديثة.'
      }
    }
  };

  const t = content[lang];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">{t.title}</h2>
      <p className="text-gray-700">{t.description}</p>
      
      <div className="relative w-full h-64 my-6">
        <Image
          src="/images/javascript/variables/variable-declaration.png"
          alt="Variable Declaration Diagram"
          fill
          className="object-contain"
        />
      </div>

      <CodeBlock
        language="javascript"
        code={`// Using var (function-scoped)
var name = "John";

// Using let (block-scoped)
let age = 25;

// Using const (constant value)
const PI = 3.14159;`}
      />

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
        <strong className="block text-yellow-800">{t.proTip.title}</strong>
        <p className="text-yellow-700">{t.proTip.text}</p>
      </div>
    </section>
  );
}
