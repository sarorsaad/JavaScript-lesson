'use client';

import React, { useState } from 'react';

export default function DataTypeDemo({ lang }: { lang: 'en' | 'ar' }) {
  const [typeOutput, setTypeOutput] = useState<string[]>([]);
  const [userInput, setUserInput] = useState('');
  const [userTypeOutput, setUserTypeOutput] = useState('');

  const content = {
    en: {
      title: 'Data Type Checker',
      checkTypes: 'Check Types',
      tryYourself: 'Try it yourself!',
      enterValue: 'Enter a value and we\'ll tell you its type:',
      checkType: 'Check Type',
      yourInput: 'Your input',
      is: 'is a',
    },
    ar: {
      title: 'فاحص نوع البيانات',
      checkTypes: 'فحص الأنواع',
      tryYourself: 'جربها بنفسك!',
      enterValue: 'أدخل قيمة وسنخبرك عن نوعها:',
      checkType: 'فحص النوع',
      yourInput: 'مدخلاتك',
      is: 'هي',
    }
  };

  const t = content[lang];

  const checkDataTypes = () => {
    const examples = {
      string: "Hello World",
      number: 42,
      boolean: true,
      undefined: undefined,
      null: null,
      symbol: Symbol('id'),
      bigint: BigInt(9007199254740991)
    };

    const output = Object.entries(examples).map(([type, value]) => 
      `${type}: ${String(value)} (typeof: ${typeof value})`
    );

    setTypeOutput(output);
  };

  const checkUserInput = () => {
    // Try to parse as number
    const numberValue = Number(userInput);
    if (!isNaN(numberValue)) {
      setUserTypeOutput('number');
      return;
    }

    // Check for boolean
    if (userInput.toLowerCase() === 'true' || userInput.toLowerCase() === 'false') {
      setUserTypeOutput('boolean');
      return;
    }

    // Default to string
    setUserTypeOutput('string');
  };

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4">{t.title}</h3>
        <button
          onClick={checkDataTypes}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          {t.checkTypes}
        </button>
        {typeOutput.length > 0 && (
          <div className="mt-4 p-4 bg-gray-50 rounded font-mono text-sm">
            {typeOutput.map((line, index) => (
              <div key={index} className="mb-1">
                {line}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4">{t.tryYourself}</h3>
        <p className="text-gray-600 mb-4">{t.enterValue}</p>
        <div className="space-y-4">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button
            onClick={checkUserInput}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            {t.checkType}
          </button>
          {userTypeOutput && (
            <div className="p-4 bg-gray-50 rounded">
              {`${t.yourInput} "${userInput}" ${t.is} `}
              <strong>{userTypeOutput}</strong>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
