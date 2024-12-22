'use client';

import React, { useState } from 'react';
import CodeBlock from '@/components/lessons/CodeBlock';

export default function PredefinedFunctions({ lang }: { lang: 'en' | 'ar' }) {
  const [mathOutput, setMathOutput] = useState('');
  const [conversionOutput, setConversionOutput] = useState('');
  const [domOutput, setDomOutput] = useState('');
  const [demoElementColor, setDemoElementColor] = useState('#e8f0fe');

  const content = {
    en: {
      title: 'Predefined Functions in JavaScript',
      description: 'JavaScript provides many built-in functions that you can use directly without defining them first. These functions are part of the JavaScript standard library and are available across all JavaScript environments.',
      note: {
        title: 'Note:',
        text: 'Predefined functions are essential tools that help you perform common programming tasks without writing the functionality from scratch.'
      },
      commonFunctions: {
        title: 'Common Predefined Functions',
        list: [
          { name: 'alert()', desc: 'Displays an alert dialog box' },
          { name: 'console.log()', desc: 'Outputs messages to the console' },
          { name: 'Math.pow()', desc: 'Calculates exponentiation' },
          { name: 'parseInt()', desc: 'Converts strings to numbers' },
          { name: 'document.querySelector()', desc: 'Selects DOM elements' }
        ]
      },
      examples: {
        math: {
          title: 'Math Functions Examples',
          tryIt: 'Try Math Functions:',
          buttons: {
            sqrt: '√16',
            power: '2³',
            random: 'Random',
            round: 'Round 3.7'
          }
        },
        conversion: {
          title: 'String to Number Conversion',
          tryIt: 'Try Conversion Functions:',
          buttons: {
            parseInt: 'Parse Int "123"',
            parseFloat: 'Parse Float "3.14"'
          }
        },
        dom: {
          title: 'DOM Selection Example',
          demoText: 'This is a demo element',
          button: 'Select and Modify Element'
        }
      }
    },
    ar: {
      title: 'الدوال المُعرَّفة مسبقاً في جافا سكريبت',
      description: 'توفر جافا سكريبت العديد من الدوال المدمجة التي يمكنك استخدامها مباشرة دون تعريفها أولاً. هذه الدوال جزء من المكتبة القياسية لجافا سكريبت ومتوفرة في جميع بيئات جافا سكريبت.',
      note: {
        title: 'ملاحظة:',
        text: 'الدوال المُعرَّفة مسبقاً هي أدوات أساسية تساعدك في تنفيذ مهام البرمجة الشائعة دون كتابة الوظائف من الصفر.'
      },
      commonFunctions: {
        title: 'الدوال المُعرَّفة مسبقاً الشائعة',
        list: [
          { name: 'alert()', desc: 'يعرض مربع حوار تنبيه' },
          { name: 'console.log()', desc: 'يُخرج رسائل إلى وحدة التحكم' },
          { name: 'Math.pow()', desc: 'يحسب الأس' },
          { name: 'parseInt()', desc: 'يحول النصوص إلى أرقام' },
          { name: 'document.querySelector()', desc: 'يحدد عناصر DOM' }
        ]
      },
      examples: {
        math: {
          title: 'أمثلة على دوال الرياضيات',
          tryIt: 'جرب دوال الرياضيات:',
          buttons: {
            sqrt: 'الجذر التربيعي لـ 16',
            power: '2 أس 3',
            random: 'رقم عشوائي',
            round: 'تقريب 3.7'
          }
        },
        conversion: {
          title: 'تحويل النص إلى رقم',
          tryIt: 'جرب دوال التحويل:',
          buttons: {
            parseInt: 'تحويل "123" إلى عدد صحيح',
            parseFloat: 'تحويل "3.14" إلى عدد عشري'
          }
        },
        dom: {
          title: 'مثال على تحديد DOM',
          demoText: 'هذا عنصر تجريبي',
          button: 'حدد وعدل العنصر'
        }
      }
    }
  };

  const t = content[lang];

  const calculateSquareRoot = (num: number) => {
    const result = Math.sqrt(num);
    setMathOutput(`${lang === 'en' ? 'Square root of' : 'الجذر التربيعي لـ'} ${num} = ${result}`);
  };

  const calculatePower = (base: number, exponent: number) => {
    const result = Math.pow(base, exponent);
    setMathOutput(`${base}${lang === 'en' ? ' raised to power ' : ' أس '}${exponent} = ${result}`);
  };

  const generateRandom = () => {
    const result = Math.random();
    setMathOutput(`${lang === 'en' ? 'Random number' : 'رقم عشوائي'}: ${result}`);
  };

  const roundNumber = (num: number) => {
    const result = Math.round(num);
    setMathOutput(`${num} ${lang === 'en' ? 'rounded' : 'مقرب'} = ${result}`);
  };

  const convertToInt = (str: string) => {
    const result = parseInt(str);
    setConversionOutput(`parseInt("${str}") = ${result} (${lang === 'en' ? 'type' : 'النوع'}: ${typeof result})`);
  };

  const convertToFloat = (str: string) => {
    const result = parseFloat(str);
    setConversionOutput(`parseFloat("${str}") = ${result} (${lang === 'en' ? 'type' : 'النوع'}: ${typeof result})`);
  };

  const selectAndModify = () => {
    setDemoElementColor(demoElementColor === '#e8f0fe' ? '#fce8e6' : '#e8f0fe');
    setDomOutput(lang === 'en' ? 'Element background color changed!' : 'تم تغيير لون خلفية العنصر!');
  };

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">{t.title}</h2>
      <p className="text-gray-700">{t.description}</p>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
        <p><strong>{t.note.title}</strong> {t.note.text}</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">{t.commonFunctions.title}</h3>
        <ul className="list-disc pl-6 space-y-2">
          {t.commonFunctions.list.map((func, index) => (
            <li key={index}>
              <strong>{func.name}</strong> - {func.desc}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">{t.examples.math.title}</h3>
        <CodeBlock
          language="javascript"
          code={`// Square root
let squareRoot = Math.sqrt(16); // Returns 4

// Power
let power = Math.pow(2, 3);    // Returns 8

// Random number
let random = Math.random();     // Returns number between 0 and 1

// Round numbers
let rounded = Math.round(3.7);  // Returns 4`}
        />

        <div className="mt-4">
          <h4 className="font-semibold mb-2">{t.examples.math.tryIt}</h4>
          <div className="space-x-2">
            <button
              onClick={() => calculateSquareRoot(16)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              {t.examples.math.buttons.sqrt}
            </button>
            <button
              onClick={() => calculatePower(2, 3)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              {t.examples.math.buttons.power}
            </button>
            <button
              onClick={generateRandom}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              {t.examples.math.buttons.random}
            </button>
            <button
              onClick={() => roundNumber(3.7)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              {t.examples.math.buttons.round}
            </button>
          </div>
          {mathOutput && (
            <div className="mt-4 p-4 bg-gray-50 rounded">
              {mathOutput}
            </div>
          )}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">{t.examples.conversion.title}</h3>
        <CodeBlock
          language="javascript"
          code={`// parseInt() - converts string to integer
let intNumber = parseInt("123");    // Returns 123

// parseFloat() - converts string to floating-point
let floatNumber = parseFloat("3.14"); // Returns 3.14`}
        />


        <div className="mt-4">
          <h4 className="font-semibold mb-2">{t.examples.conversion.tryIt}</h4>
          <div className="space-x-2">
            <button
              onClick={() => convertToInt('123')}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              {t.examples.conversion.buttons.parseInt}
            </button>
            <button
              onClick={() => convertToFloat('3.14')}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              {t.examples.conversion.buttons.parseFloat}
            </button>
          </div>
          {conversionOutput && (
            <div className="mt-4 p-4 bg-gray-50 rounded">
              {conversionOutput}
            </div>
          )}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">{t.examples.dom.title}</h3>
        <CodeBlock
          language="javascript"
          code={`// Select element by ID
let element = document.querySelector('#myElement');

// Select element by class
let elements = document.querySelector('.myClass');`}
        />

        <div className="mt-4">
          <div
            style={{ backgroundColor: demoElementColor }}
            className="p-4 rounded mb-4"
          >
            {t.examples.dom.demoText}
          </div>
          <button
            onClick={selectAndModify}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            {t.examples.dom.button}
          </button>
          {domOutput && (
            <div className="mt-4 p-4 bg-gray-50 rounded">
              {domOutput}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
