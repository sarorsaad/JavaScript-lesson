'use client';

import React, { useState } from 'react';
import CodeBlock from '@/components/lessons/CodeBlock';

export default function BrowserObjects({ lang }: { lang: 'en' | 'ar' }) {
  const [output, setOutput] = useState<string[]>([]);

  const content = {
    en: {
      title: '4. Browser Objects',
      description: 'These are objects provided by the browser to interact with the browser environment.',
      examples: {
        title: 'Browser Objects Examples',
        tryIt: 'Try it yourself:',
        runDemo: 'Run Demo'
      }
    },
    ar: {
      title: '٤. كائنات المتصفح',
      description: 'هذه كائنات يوفرها المتصفح للتفاعل مع بيئة المتصفح.',
      examples: {
        title: 'أمثلة على كائنات المتصفح',
        tryIt: 'جربها بنفسك:',
        runDemo: 'تشغيل العرض'
      }
    }
  };

  const t = content[lang];

  const runBrowserDemo = () => {
    setOutput([
      `Window width: ${window.innerWidth}`,
      `Window height: ${window.innerHeight}`,
      `Browser: ${navigator.userAgent}`
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
            code={`// Window object properties
console.log('Window width:', window.innerWidth);
console.log('Window height:', window.innerHeight);

// Navigator object
console.log('Browser:', navigator.userAgent);`}
          />
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-4">{t.examples.tryIt}</h3>
          <button
            onClick={runBrowserDemo}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            {t.examples.tryIt}
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
