'use client';

import React, { useState } from 'react';

export default function VariableDemo({ lang }: { lang: 'en' | 'ar' }) {
  const [output, setOutput] = useState<string[]>([]);

  const content = {
    en: {
      title: 'Variable Declaration Demo',
      runDemo: 'Run Demo',
      initialValues: 'Initial values:',
      afterReassignment: 'After reassignment:'
    },
    ar: {
      title: 'عرض إعلان المتغيرات',
      runDemo: 'تشغيل العرض',
      initialValues: 'القيم الأولية:',
      afterReassignment: 'بعد إعادة التعيين:'
    }
  };

  const t = content[lang];

  const runVariableDemo = () => {
    let name = "Alice";
    const age = 25;
    let hobby = "coding";

    const initialOutput = [
      `let name: ${name}`,
      `const age: ${age}`,
      `var hobby: ${hobby}`
    ];

    // Demonstrate variable behavior
    name = "Bob";
    hobby = "reading";
    // This would cause an error: age = 26;

    const reassignmentOutput = [
      `name: ${name}`,
      `hobby: ${hobby}`,
      `age: ${age} (constant, cannot be changed)`
    ];

    setOutput([
      t.initialValues,
      ...initialOutput,
      '',
      t.afterReassignment,
      ...reassignmentOutput
    ]);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4">{t.title}</h3>
      <button
        onClick={runVariableDemo}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        {t.runDemo}
      </button>
      {output.length > 0 && (
        <div className="mt-4 p-4 bg-gray-50 rounded font-mono text-sm">
          {output.map((line, index) => (
            <div key={index} className="mb-1">
              {line}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
