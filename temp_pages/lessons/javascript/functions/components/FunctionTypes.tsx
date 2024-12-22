'use client';

import React, { useState } from 'react';
// Removed unused import

export default function FunctionTypes({ lang }: { lang: 'en' | 'ar' }) {
  const [output, setOutput] = useState('');

  const content = {
    en: {
      title: 'Types of Functions',
      visualGuide: 'Visual Syntax Guide',
      colorGuide: {
        title: 'Color Guide:',
        colors: [
          { color: '#ff7979', label: 'Red', desc: 'Keywords (function, const)' },
          { color: '#6c5ce7', label: 'Purple', desc: 'Function names' },
          { color: '#00b894', label: 'Green', desc: 'Parameters' },
          { color: '#fdcb6e', label: 'Yellow', desc: 'Assignment operator' },
          { color: '#e17055', label: 'Orange', desc: 'Arrow symbol' },
          { color: '#74b9ff', label: 'Blue', desc: 'Function body' }
        ]
      },
      functionTypes: {
        declaration: 'Function Declaration',
        expression: 'Function Expression',
        arrow: 'Arrow Function',
        tryDifferent: 'Try Different Function Types:',
        buttons: {
          named: 'Named Function',
          anonymous: 'Anonymous Function',
          arrow: 'Arrow Function'
        }
      }
    },
    ar: {
      title: 'أنواع الدوال',
      visualGuide: 'دليل الصيغة المرئي',
      colorGuide: {
        title: 'دليل الألوان:',
        colors: [
          { color: '#ff7979', label: 'أحمر', desc: 'الكلمات المفتاحية (function, const)' },
          { color: '#6c5ce7', label: 'بنفسجي', desc: 'أسماء الدوال' },
          { color: '#00b894', label: 'أخضر', desc: 'المعاملات' },
          { color: '#fdcb6e', label: 'أصفر', desc: 'عامل التخصيص' },
          { color: '#e17055', label: 'برتقالي', desc: 'رمز السهم' },
          { color: '#74b9ff', label: 'أزرق', desc: 'جسم الدالة' }
        ]
      },
      functionTypes: {
        declaration: 'إعلان الدالة',
        expression: 'تعبير الدالة',
        arrow: 'دالة السهم',
        tryDifferent: 'جرب أنواع الدوال المختلفة:',
        buttons: {
          named: 'دالة مسماة',
          anonymous: 'دالة مجهولة',
          arrow: 'دالة سهمية'
        }
      }
    }
  };

  const t = content[lang];

  const testNamedFunction = () => {
    setOutput('Called a named function!');
  };

  const testAnonymousFunction = function() {
    setOutput('Called an anonymous function!');
  };

  const testArrowFunction = () => {
    setOutput('Called an arrow function!');
  };

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">{t.title}</h2>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold">{t.visualGuide}</h3>
        
        {/* Function Declaration */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="font-semibold mb-4">1. {t.functionTypes.declaration}</h4>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded" style={{ backgroundColor: '#ff7979', color: 'white' }}>function</span>
            <span className="px-3 py-1 rounded" style={{ backgroundColor: '#6c5ce7', color: 'white' }}>name</span>
            <span className="px-3 py-1 rounded" style={{ backgroundColor: '#00b894', color: 'white' }}>()</span>
            <span className="px-3 py-1 rounded" style={{ backgroundColor: '#74b9ff', color: 'white' }}>{'{}'}</span>
          </div>
        </div>

        {/* Function Expression */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="font-semibold mb-4">2. {t.functionTypes.expression}</h4>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded" style={{ backgroundColor: '#ff7979', color: 'white' }}>const</span>
            <span className="px-3 py-1 rounded" style={{ backgroundColor: '#6c5ce7', color: 'white' }}>name</span>
            <span className="px-3 py-1 rounded" style={{ backgroundColor: '#fdcb6e', color: 'black' }}>=</span>
            <span className="px-3 py-1 rounded" style={{ backgroundColor: '#ff7979', color: 'white' }}>function</span>
            <span className="px-3 py-1 rounded" style={{ backgroundColor: '#00b894', color: 'white' }}>()</span>
            <span className="px-3 py-1 rounded" style={{ backgroundColor: '#74b9ff', color: 'white' }}>{'{}'}</span>
          </div>
        </div>

        {/* Arrow Function */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="font-semibold mb-4">3. {t.functionTypes.arrow}</h4>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded" style={{ backgroundColor: '#ff7979', color: 'white' }}>const</span>
            <span className="px-3 py-1 rounded" style={{ backgroundColor: '#6c5ce7', color: 'white' }}>name</span>
            <span className="px-3 py-1 rounded" style={{ backgroundColor: '#fdcb6e', color: 'black' }}>=</span>
            <span className="px-3 py-1 rounded" style={{ backgroundColor: '#00b894', color: 'white' }}>()</span>
            <span className="px-3 py-1 rounded" style={{ backgroundColor: '#e17055', color: 'white' }}>{'=>'}</span>
            <span className="px-3 py-1 rounded" style={{ backgroundColor: '#74b9ff', color: 'white' }}>{'{}'}</span>
          </div>
        </div>

        {/* Color Guide */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="font-semibold">{t.colorGuide.title}</p>
          <ul className="mt-2 space-y-1">
            {t.colorGuide.colors.map((item, index) => (
              <li key={index}>
                <span style={{ color: item.color }}>{item.label}</span>: {item.desc}
              </li>
            ))}
          </ul>
        </div>

        {/* Interactive Demo */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="font-semibold mb-4">{t.functionTypes.tryDifferent}</h4>
          <div className="space-x-2">
            <button
              onClick={testNamedFunction}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              {t.functionTypes.buttons.named}
            </button>
            <button
              onClick={testAnonymousFunction}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              {t.functionTypes.buttons.anonymous}
            </button>
            <button
              onClick={testArrowFunction}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              {t.functionTypes.buttons.arrow}
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
