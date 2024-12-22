'use client';

import React, { useState } from 'react';
import CodeBlock from '@/components/lessons/CodeBlock';


export default function BuiltInObjects({ lang }: { lang: 'en' | 'ar' }) {
  const [output, setOutput] = useState<string[]>([]);

  const content = {
    en: {
      title: '3. Built-in Objects',
      description: 'These are standard objects provided by JavaScript to perform common tasks.',
      examples: {
        title: 'Built-in Objects Examples',
        tryIt: 'Try it yourself:',
        runDemo: 'Run Demo'
      }
    },
    ar: {
      title: '٣. الكائنات المدمجة',
      description: 'هذه كائنات قياسية توفرها جافا سكريبت لتنفيذ المهام الشائعة.',
      examples: {
        title: 'أمثلة على الكائنات المدمجة',
        tryIt: 'جربها بنفسك:',
        runDemo: 'تشغيل العرض'
      }
    }
  };

  const t = content[lang];

  const runBuiltInDemo = () => {
    setOutput([
      `PI value: ${Math.PI}`,
      `Random number: ${Math.random()}`,
      `Current date: ${new Date().toDateString()}`
    ]);
  };

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">{t.title}</h2>
      <p className="text-gray-700">{t.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <CodeBlock
            language="javascript"
            code={`// Math object example
console.log('PI value:', Math.PI);
console.log('Random number:', Math.random());

// Date object example
const today = new Date();
console.log('Current date:', today.toDateString());`}
          />
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-4">{t.examples.tryIt}</h3>
          <button
            onClick={runBuiltInDemo}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            {t.runDemo}
          </button>
          {output.length > 0 && (
            <div className="mt-4 p-4 bg-white rounded">
              {output.map((line, index) => (
                <div key={index} className="mb-2">{line}</div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
