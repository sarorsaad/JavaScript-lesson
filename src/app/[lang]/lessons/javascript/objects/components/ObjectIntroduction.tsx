'use client';

import React from 'react';
import Image from 'next/image';

export default function ObjectIntroduction({ lang }: { lang: 'en' | 'ar' }) {
  const content = {
    en: {
      title: 'What is an Object?',
      description: 'In JavaScript, objects are containers that store related data and code. Think of them as real-world objects with properties and behaviors.'
    },
    ar: {
      title: 'ما هو الكائن؟',
      description: 'في جافا سكريبت، الكائنات هي حاويات تخزن البيانات والكود المرتبط. فكر فيها كأشياء من العالم الحقيقي لها خصائص وسلوكيات.'
    }
  };

  const t = content[lang];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">{t.title}</h2>
      <div className="flex justify-center items-center gap-8 flex-wrap">
        <div className="relative w-64 h-64">
          <Image
            src="/images/javascript/objects/object-example.png"
            alt="Object Example"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative w-64 h-64">
          <Image
            src="/images/javascript/objects/object-syntax.jpg"
            alt="Object Syntax"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <p className="text-gray-700">{t.description}</p>
    </section>
  );
}
