'use client';

import React, { useState } from 'react';
import CodeBlock from '@/components/lessons/CodeBlock';

interface ElementModificationProps {
  lang: string;
}

export default function ElementModification({ lang }: ElementModificationProps) {
  const [innerHTML, setInnerHTML] = useState(
    lang === 'ar' 
      ? 'النص الأصلي (انقر لرؤية innerHTML)'
      : 'Original Text (click to see innerHTML)'
  );
  const [showHTMLInfo, setShowHTMLInfo] = useState(false);
  const [showStylePlayground, setShowStylePlayground] = useState(false);
  
  // Style state
  const [styles, setStyles] = useState({
    color: '#000000',
    fontSize: '16',
    backgroundColor: '#ffffff',
    padding: '20',
    border: '2',
    borderRadius: '4'
  });

  const changeInnerHTML = () => {
    const originalText = lang === 'ar' 
      ? 'النص الأصلي (انقر لرؤية innerHTML)'
      : 'Original Text (click to see innerHTML)';
    const changedText = lang === 'ar'
      ? 'تم تغيير النص باستخدام <strong>innerHTML</strong>!'
      : 'Text changed with <strong>innerHTML</strong>!';
      
    if (innerHTML === originalText) {
      setInnerHTML(changedText);
      setShowHTMLInfo(true);
    } else {
      setInnerHTML(originalText);
      setShowHTMLInfo(false);
    }
  };

  const updateStyle = (property: string, value: string) => {
    setStyles(prev => ({ ...prev, [property]: value }));
  };

  const resetStyles = () => {
    setStyles({
      color: '#000000',
      fontSize: '16',
      backgroundColor: '#ffffff',
      padding: '20',
      border: '2',
      borderRadius: '4'
    });
  };

  return (
    <div className="step-section mb-8">
      <h2 className="text-2xl font-bold mb-4">Step 3: Modify Elements</h2>

      {/* innerHTML Example */}
      <div className="code-example bg-gray-50 p-6 rounded-lg mb-6">
        <h3 className="text-xl font-semibold mb-4">
          {lang === 'ar' ? 'تغيير innerHTML:' : 'Change innerHTML:'}
        </h3>
        <div 
          className="text-lg p-4 bg-white rounded-md mb-4"
          dangerouslySetInnerHTML={{ __html: innerHTML }}
          onClick={changeInnerHTML}
        />
        <button 
          onClick={changeInnerHTML}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          {lang === 'ar' ? 'تغيير Inner HTML' : 'Change Inner HTML'}
        </button>

        {showHTMLInfo && (
          <div className="mt-4 p-4 bg-orange-50 rounded-md">
            <p className="mb-2">📝 innerHTML allows you to modify the HTML content inside an element</p>
            <CodeBlock language="javascript" code={`
element.innerHTML = 'Text changed with <strong>innerHTML</strong>!';
            `}/>
          </div>
        )}
      </div>

      {/* Style Example */}
      <div className="code-example bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">
          {lang === 'ar' ? 'تغيير النمط:' : 'Change Style:'}
        </h3>
        <div 
          className="style-preview p-4 bg-white rounded-md mb-4"
          style={{
            color: styles.color,
            fontSize: `${styles.fontSize}px`,
            backgroundColor: styles.backgroundColor,
            padding: `${styles.padding}px`,
            border: `${styles.border}px solid #333`,
            borderRadius: `${styles.borderRadius}px`
          }}
        >
          Style will be changed
        </div>
        
        <button 
          onClick={() => setShowStylePlayground(!showStylePlayground)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          {showStylePlayground 
            ? (lang === 'ar' ? 'إخفاء أدوات التنسيق' : 'Hide Style Controls')
            : (lang === 'ar' ? 'جرب التنسيق' : 'Try Styling')
          }
        </button>

        {showStylePlayground && (
          <div className="mt-4 p-4 bg-white rounded-md">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-2">Color:</label>
                <input 
                  type="color" 
                  value={styles.color}
                  onChange={(e) => updateStyle('color', e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block mb-2">Font Size:</label>
                <input 
                  type="range" 
                  min="12" 
                  max="48" 
                  value={styles.fontSize}
                  onChange={(e) => updateStyle('fontSize', e.target.value)}
                  className="w-full"
                />
              </div>
              {/* Add more style controls as needed */}
            </div>
            
            <CodeBlock language="javascript" code={`
element.style.color = '${styles.color}';
element.style.fontSize = '${styles.fontSize}px';
element.style.backgroundColor = '${styles.backgroundColor}';
element.style.padding = '${styles.padding}px';
element.style.border = '${styles.border}px solid #333';
element.style.borderRadius = '${styles.borderRadius}px';
            `}/>
            
            <button 
              onClick={resetStyles}
              className="px-4 py-2 mt-4 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
            >
              Reset Styles
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
