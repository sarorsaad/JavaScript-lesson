'use client';

import React, { useState } from 'react';
import CodeBlock from '@/components/lessons/CodeBlock';

interface ElementSelectionProps {
  lang: string;
}

export default function ElementSelection({ lang }: ElementSelectionProps) {
  const [textById, setTextById] = useState(
    lang === 'ar' 
      ? 'تم تحديد هذا العنصر باستخدام getElementById'
      : 'This element selected using getElementById'
  );
  const [textBySelector, setTextBySelector] = useState(
    lang === 'ar'
      ? 'تم تحديد هذا العنصر باستخدام querySelector'
      : 'This element selected using querySelector'
  );

  const changeTextById = () => {
    setTextById(prev => 
      prev === (lang === 'ar' ? 'تم تحديد هذا العنصر باستخدام getElementById' : 'This element selected using getElementById')
        ? (lang === 'ar' ? 'تم تغيير النص باستخدام محدد المعرف!' : 'Text changed using ID selector!')
        : (lang === 'ar' ? 'تم تحديد هذا العنصر باستخدام getElementById' : 'This element selected using getElementById')
    );
  };

  const changeTextBySelector = () => {
    setTextBySelector(prev => 
      prev === (lang === 'ar' ? 'تم تحديد هذا العنصر باستخدام querySelector' : 'This element selected using querySelector')
        ? (lang === 'ar' ? 'تم تغيير النص باستخدام querySelector!' : 'Text changed using querySelector!')
        : (lang === 'ar' ? 'تم تحديد هذا العنصر باستخدام querySelector' : 'This element selected using querySelector')
    );
  };

  return (
    <div className="step-section mb-8">
      <h2 className="text-2xl font-bold mb-4">Step 1: Select HTML Elements</h2>

      <div className="code-example bg-gray-50 p-6 rounded-lg mb-6">
        <h3 className="text-xl font-semibold mb-4">
          {lang === 'ar' ? 'التحديد بواسطة المعرف:' : 'Select by ID:'}
        </h3>
        <div className="interactive-demo">
          <p className="text-lg p-4 bg-white rounded-md mb-4">{textById}</p>
          <button 
            onClick={changeTextById}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            {lang === 'ar' ? 'تغيير النص (المعرف)' : 'Change Text (ID)'}
          </button>
        </div>
        <CodeBlock language="javascript" code={`
// Select element by ID
const element = document.getElementById('myId');
element.textContent = 'New text content';
        `}/>
      </div>

      <div className="code-example bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">
          {lang === 'ar' ? 'التحديد بواسطة المحدد:' : 'Select by Selector:'}
        </h3>
        <div className="interactive-demo">
          <p className="text-lg p-4 bg-white rounded-md mb-4">{textBySelector}</p>
          <button 
            onClick={changeTextBySelector}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            {lang === 'ar' ? 'تغيير النص (المحدد)' : 'Change Text (Selector)'}
          </button>
        </div>
        <CodeBlock language="javascript" code={`
// Select element by CSS selector
const element = document.querySelector('.my-class');
element.textContent = 'New text content';
        `}/>
      </div>
    </div>
  );
}
