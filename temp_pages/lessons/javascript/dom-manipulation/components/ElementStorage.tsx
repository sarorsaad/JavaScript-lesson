'use client';

import React, { useState } from 'react';
import CodeBlock from '@/components/lessons/CodeBlock';

interface ElementStorageProps {
  lang: string;
}

export default function ElementStorage({ lang }: ElementStorageProps) {
  const [isStored, setIsStored] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);

  const demonstrateVariables = () => {
    setIsStored(prev => !prev);
    if (!isStored) {
      setTimeout(() => setInfoVisible(true), 1000);
    } else {
      setInfoVisible(false);
    }
  };

  return (
    <div className="step-section mb-8">
      <h2 className="text-2xl font-bold mb-4">Step 2: Store Elements in Variables</h2>

      <div className="code-example bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">
          {lang === 'ar' ? 'استخدام المتغيرات:' : 'Using Variables:'}
        </h3>
        <p 
          className={`text-lg p-4 bg-white rounded-md mb-4 transition-colors ${
            isStored ? 'text-blue-500' : ''
          }`}
        >
          {isStored 
            ? (lang === 'ar' ? 'تم تخزين العناصر في المتغيرات!' : 'Elements are now being stored in variables!')
            : (lang === 'ar' ? 'سيتم تخزين هذا العنصر في متغير' : 'This element will be stored in a variable')
          }
        </p>
        
        <button 
          onClick={demonstrateVariables}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          {isStored 
            ? (lang === 'ar' ? 'إعادة تعيين المتغيرات' : 'Reset Variables')
            : (lang === 'ar' ? 'تخزين في متغير' : 'Store in Variable')
          }
        </button>

        {infoVisible && (
          <div className="mt-4 p-4 bg-green-50 rounded-md">
            <p className="mb-2">✨ Elements are now stored in the variable container!</p>
            <CodeBlock language="javascript" code={`
const queryElement = document.querySelector('.selector');
const idElement = document.getElementById('myId');
            `}/>
          </div>
        )}
      </div>
    </div>
  );
}
