'use client';

import React, { useState } from 'react';
import CodeBlock from '@/components/lessons/CodeBlock';

export default function FunctionDefinition({ lang }: { lang: 'en' | 'ar' }) {
  const [greetOutput, setGreetOutput] = useState('');

  const greetUser = (name: string) => {
    setGreetOutput(`Hello, ${name}!`);
  };

  const content = {
    en: {
      title: 'Function Definition',
      description: 'A function definition in JavaScript describes the structure of a function, specifying what it does when invoked. Functions allow us to encapsulate reusable blocks of code.',
      syntaxTitle: 'Syntax of Function Definition',
      components: {
        title: 'Components',
        list: [
          { label: 'function keyword', desc: 'Required for defining a function.' },
          { label: 'Function name', desc: 'Used to call (invoke) the function.' },
          { label: 'Parameters', desc: 'Optional placeholders that accept values when the function is called.' },
          { label: 'Function body', desc: 'The block of code that specifies what the function does.' },
          { label: 'Return statement', desc: '(Optional) Used to return a value from the function.' }
        ]
      },
      example: {
        title: 'Example of a Function Definition',
        tryIt: 'Try it yourself:',
        button: 'Greet Alice'
      }
    },
    ar: {
      title: 'تعريف الدالة',
      description: 'تعريف الدالة في جافا سكريبت يصف هيكل الدالة، محدداً ما تفعله عند استدعائها. تسمح لنا الدوال بتغليف كتل البرمجة القابلة لإعادة الاستخدام.',
      syntaxTitle: 'صيغة تعريف الدالة',
      components: {
        title: 'المكونات',
        list: [
          { label: 'الكلمة المفتاحية function', desc: 'مطلوبة لتعريف الدالة.' },
          { label: 'اسم الدالة', desc: 'يستخدم لاستدعاء (تنفيذ) الدالة.' },
          { label: 'المعاملات', desc: 'عناصر نائبة اختيارية تقبل القيم عند استدعاء الدالة.' },
          { label: 'جسم الدالة', desc: 'كتلة الكود التي تحدد ما تفعله الدالة.' },
          { label: 'عبارة الإرجاع', desc: '(اختياري) تستخدم لإرجاع قيمة من الدالة.' }
        ]
      },
      example: {
        title: 'مثال على تعريف الدالة',
        tryIt: 'جرب بنفسك:',
        button: 'حيي أليس'
      }
    }
  };

  const t = content[lang];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">{t.title}</h2>
      <p className="text-gray-700">{t.description}</p>

      <div>
        <h3 className="text-xl font-semibold mb-4">{t.syntaxTitle}</h3>
        <CodeBlock
          language="javascript"
          code={`function functionName(parameters) {
    // Function body: the code to execute
}`}
        />
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">{t.components.title}</h3>
        <ul className="list-disc pl-6 space-y-2">
          {t.components.list.map((item, index) => (
            <li key={index}>
              <strong>{item.label}</strong>: {item.desc}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">{t.example.title}</h3>
        <CodeBlock
          language="javascript"
          code={`function greetUser(name) {
    console.log("Hello, " + name + "!");
}`}
        />
        
        <div className="mt-4">
          <h4 className="font-semibold mb-2">{t.example.tryIt}</h4>
          <button
            onClick={() => greetUser('Alice')}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            {t.example.button}
          </button>
          {greetOutput && (
            <div className="mt-4 p-4 bg-gray-50 rounded">
              {greetOutput}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
