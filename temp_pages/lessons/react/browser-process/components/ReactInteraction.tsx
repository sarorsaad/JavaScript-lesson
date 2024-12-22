'use client';

import React from 'react';
import CodeBlock from '@/components/lessons/CodeBlock';

export default function ReactInteraction() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">React and Browser Interaction</h2>
      
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-blue-800">Virtual DOM</h3>
          <div className="space-y-3">
            <p className="text-gray-700">React maintains a lightweight copy of the DOM in memory</p>
            <p className="text-gray-700 font-arabic" dir="rtl">يحتفظ React بنسخة خفيفة من DOM في الذاكرة</p>
            
            <CodeBlock language="javascript" code={`
// React creates virtual elements
const virtualElement = React.createElement('div', {
  className: 'greeting'
}, 'Hello World');

// React updates the real DOM efficiently
ReactDOM.render(virtualElement, document.getElementById('root'));
            `}/>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3 text-blue-800">Reconciliation Process</h3>
          <div className="space-y-3">
            <p className="text-gray-700">React efficiently updates the DOM by:</p>
            <p className="text-gray-700 font-arabic" dir="rtl">يقوم React بتحديث DOM بكفاءة عن طريق:</p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <p className="text-gray-700">Comparing Virtual DOM with Real DOM</p>
                <p className="text-gray-700 font-arabic" dir="rtl">مقارنة DOM الافتراضي مع DOM الحقيقي</p>
              </li>
              <li>
                <p className="text-gray-700">Calculating minimum required changes</p>
                <p className="text-gray-700 font-arabic" dir="rtl">حساب الحد الأدنى من التغييرات المطلوبة</p>
              </li>
              <li>
                <p className="text-gray-700">Batching multiple changes together</p>
                <p className="text-gray-700 font-arabic" dir="rtl">تجميع التغييرات المتعددة معًا</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
