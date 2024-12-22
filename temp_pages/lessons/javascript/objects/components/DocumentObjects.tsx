'use client';

import React, { useState } from 'react';
import CodeBlock from '@/components/lessons/CodeBlock';

export default function DocumentObjects({ lang }: { lang: 'en' | 'ar' }) {
  const [output, setOutput] = useState<string[]>([]);

  const content = {
    en: {
      title: '2. Document Objects',
      description: 'The document object is a specific JavaScript object provided by the browser that acts as the root or entry point to interact with the DOM. It represents the webpage (the HTML document) currently loaded in the browser.',
      characteristics: {
        title: 'Characteristics',
        list: [
          'It is part of the Window object (global scope in browsers)',
          'It provides methods and properties for interacting with the DOM and accessing/manipulating elements on the page',
          'It acts as a programming interface to access the content and structure of the HTML document'
        ]
      },
      examples: {
        title: 'Examples of the Document Object',
        tryIt: 'Try it yourself:',
        runDemo: 'Run Demo'
      }
    },
    ar: {
      title: '٢. كائنات المستند',
      description: 'كائن المستند هو كائن جافا سكريبت محدد يوفره المتصفح ويعمل كنقطة جذر أو دخول للتفاعل مع DOM. يمثل صفحة الويب (مستند HTML) المحملة حالياً في المتصفح.',
      characteristics: {
        title: 'الخصائص',
        list: [
          'هو جزء من كائن النافذة (النطاق العالمي في المتصفحات)',
          'يوفر طرق وخصائص للتفاعل مع DOM والوصول إلى/تعديل العناصر في الصفحة',
          'يعمل كواجهة برمجة للوصول إلى محتوى وهيكل مستند HTML'
        ]
      },
      examples: {
        title: 'أمثلة على كائن المستند',
        tryIt: 'جربها بنفسك:',
        runDemo: 'تشغيل العرض'
      }
    }
  };

  const t = content[lang];

  const runDocumentDemo = () => {
    setOutput([
      `Page title: ${document.title}`,
      `URL: ${document.URL}`,
      'New paragraph added!'
    ]);
  };

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">{t.title}</h2>
      <p className="text-gray-700">{t.description}</p>

      <div>
        <h3 className="text-xl font-semibold mb-4">{t.characteristics.title}</h3>
        <ul className="list-disc pl-6 space-y-2">
          {t.characteristics.list.map((item, index) => (
            <li key={index} className="text-gray-700">{item}</li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-4">{t.examples.title}</h3>
          <CodeBlock
            language="javascript"
            code={`// Document Object Methods and Properties
// Accessing basic document information
console.log(document.title);         // Access the page's title
console.log(document.URL);           // Get the URL of the current document

// DOM manipulation examples
const element = document.getElementById("header");  // Get element by ID
const newElement = document.createElement('p');     // Create new element
newElement.textContent = 'This is a new paragraph!';`}
          />
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-4">{t.tryIt}</h3>
          <button
            onClick={runDocumentDemo}
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
