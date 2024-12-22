'use client';

import React from 'react';
import CodeBlock from '@/components/lessons/CodeBlock';

export default function DataTypes({ lang }: { lang: 'en' | 'ar' }) {
  const content = {
    en: {
      title: 'Primitive Data Types',
      description: 'JavaScript has several primitive data types that are used to store different kinds of values:',
      types: {
        string: 'Text values',
        number: 'Numeric values (integers and decimals)',
        boolean: 'True/false values',
        undefined: 'Declared but not assigned variables',
        null: 'Intentionally empty value',
        symbol: 'Unique identifiers',
        bigint: 'Large integer values'
      }
    },
    ar: {
      title: 'أنواع البيانات الأساسية',
      description: 'تحتوي جافا سكريبت على عدة أنواع بيانات أساسية تستخدم لتخزين أنواع مختلفة من القيم:',
      types: {
        string: 'قيم نصية',
        number: 'قيم رقمية (أعداد صحيحة وعشرية)',
        boolean: 'قيم صحيح/خطأ',
        undefined: 'متغيرات معلنة لكن غير معينة',
        null: 'قيمة فارغة متعمدة',
        symbol: 'معرفات فريدة',
        bigint: 'قيم الأعداد الصحيحة الكبيرة'
      }
    }
  };

  const t = content[lang];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">{t.title}</h2>
      <p className="text-gray-700">{t.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {Object.entries(t.types).map(([type, description]) => (
            <div key={type} className="bg-white p-4 rounded-lg shadow-sm">
              <strong className="text-blue-600">{type}</strong>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>

        <div>
          <CodeBlock
            language="javascript"
            code={`// String
let text = "Hello World";

// Number
let count = 42;
let price = 19.99;

// Boolean
let isActive = true;

// Undefined
let undefinedVar;

// Null
let emptyValue = null;

// Symbol
let uniqueId = Symbol('id');

// BigInt
let bigNumber = 9007199254740991n;`}
          />
        </div>
      </div>
    </section>
  );
}
