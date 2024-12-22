'use client';

import React, { useState } from 'react';
import CodeBlock from '@/components/lessons/CodeBlock';

export default function ParametersDemo({ lang }: { lang: 'en' | 'ar' }) {
  const [output, setOutput] = useState('');

  const content = {
    en: {
      title: 'Parameters and Return Values',
      example: {
        title: 'Function with Parameters and Return Value',
        calculator: 'Calculator Demo:',
        add: 'Add 5 + 3',
        multiply: 'Multiply 4 × 6'
      }
    },
    ar: {
      title: 'المعاملات والقيم المرجعة',
      example: {
        title: 'دالة مع معاملات وقيمة مرجعة',
        calculator: 'تجربة الحاسبة:',
        add: 'اجمع 5 + 3',
        multiply: 'اضرب 4 × 6'
      }
    }
  };

  const t = content[lang];

  const calculateSum = (a: number, b: number) => {
    const result = a + b;
    setOutput(`${a} + ${b} = ${result}`);
  };

  const calculateProduct = (a: number, b: number) => {
    const result = a * b;
    setOutput(`${a} × ${b} = ${result}`);
  };

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">{t.title}</h2>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">{t.example.title}</h3>
        <CodeBlock
          language="javascript"
          code={`function addNumbers(a, b) {
    return a + b;
}


let result = addNumbers(5, 3);
console.log(result); // Output: 8`}
        />

        <div className="mt-6">
          <h4 className="font-semibold mb-4">{t.example.calculator}</h4>
          <div className="space-x-2">
            <button
              onClick={() => calculateSum(5, 3)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              {t.example.add}
            </button>
            <button
              onClick={() => calculateProduct(4, 6)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              {t.example.multiply}
            </button>
          </div>
          {output && (
            <div className="mt-4 p-4 bg-gray-50 rounded">
              {output}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
