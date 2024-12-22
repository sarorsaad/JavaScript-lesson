'use client';

import React, { useState } from 'react';
import CodeBlock from '@/components/lessons/CodeBlock';

export default function UserDefinedObjects({ lang }: { lang: 'en' | 'ar' }) {
  const [output, setOutput] = useState('');

  const content = {
    en: {
      title: '1. User-Defined Objects',
      description: 'These are custom objects created by the user to model specific behaviors or data. They can be created using:',
      creationMethods: [
        'Object literals',
        'Classes',
        'Constructor functions'
      ],
      literalsTitle: 'Object Literals in JavaScript',
      literalsDescription: 'Object literals are the simplest and most direct way to create objects in JavaScript. They use a pair of curly braces {} to define an object and its properties in a straightforward manner.',
      syntaxTitle: 'Syntax of Object Literals',
      syntaxDescription: 'An object literal is defined with key-value pairs, where:',
      keyValuePairs: [
        { key: 'Keys', desc: 'are property names (usually strings)' },
        { key: 'Values', desc: 'are data (of any type) or methods (functions)' }
      ],
      tryIt: 'Try it yourself:',
      runDemo: 'Run Demo'
    },
    ar: {
      title: '١. الكائنات المعرفة من قبل المستخدم',
      description: 'هذه كائنات مخصصة ينشئها المستخدم لنمذجة سلوكيات أو بيانات محددة. يمكن إنشاؤها باستخدام:',
      creationMethods: [
        'الكائنات الحرفية',
        'الفئات',
        'دوال المنشئ'
      ],
      literalsTitle: 'الكائنات الحرفية في جافا سكريبت',
      literalsDescription: 'الكائنات الحرفية هي أبسط وأمباشر طريقة لإنشاء الكائنات في جافا سكريبت. تستخدم زوج من الأقواس المعقوفة {} لتعريف الكائن وخصائصه بطريقة مباشرة.',
      syntaxTitle: 'صيغة الكائنات الحرفية',
      syntaxDescription: 'يتم تعريف الكائن الحرفي بأزواج المفتاح-القيمة، حيث:',
      keyValuePairs: [
        { key: 'المفاتيح', desc: 'هي أسماء الخصائص (عادةً نصوص)' },
        { key: 'القيم', desc: 'هي بيانات (من أي نوع) أو طرق (دوال)' }
      ],
      tryIt: 'جربها بنفسك:',
      runDemo: 'تشغيل العرض'
    }
  };

  const t = content[lang];

  const runUserDefinedDemo = () => {
    const person = {
      name: 'John',
      age: 30,
      greet: function() {
        return `Hello, my name is ${this.name}!`;
      }
    };
    setOutput(`Name: ${person.name}\n${person.greet()}`);
  };

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">{t.title}</h2>
      <p className="text-gray-700">{t.description}</p>
      
      <ul className="list-disc pl-6 space-y-2">
        {t.creationMethods.map((method, index) => (
          <li key={index}>{method}</li>
        ))}
      </ul>

      <div>
        <h3 className="text-xl font-semibold">{t.literalsTitle}</h3>
        <p className="text-gray-700">{t.literalsDescription}</p>
      </div>

      <div>
        <h4 className="text-lg font-semibold">{t.syntaxTitle}</h4>
        <p className="text-gray-700">{t.syntaxDescription}</p>
        <ul className="list-disc pl-6 space-y-2">
          {t.keyValuePairs.map((pair, index) => (
            <li key={index}>
              <strong>{pair.key}</strong> {pair.desc}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <CodeBlock
            language="javascript"
            code={`// Object Literal Syntax
// Creating a person object using object literal notation
const person = {
    name: 'John',    // property: value
    age: 30,         // property: value
    greet: function() {    // method
        return \`Hello, my name is \${this.name}!\`;
    }
};`}
          />
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-4">{t.tryIt}</h3>
          <button
            onClick={runUserDefinedDemo}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            {t.runDemo}
          </button>
          {output && (
            <div className="mt-4 p-4 bg-white rounded whitespace-pre-line">
              {output}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
