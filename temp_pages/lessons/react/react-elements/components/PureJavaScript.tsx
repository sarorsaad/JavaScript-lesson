'use client';

import React, { useState } from 'react';
import CodeBlock from '@/components/lessons/CodeBlock';

export default function PureJavaScript() {
  const [output, setOutput] = useState<string>('');

  const runPureJS = () => {
    setOutput('My Name Is Mohamed Mostafa');
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-3">1. Pure JavaScript Approach</h3>
      <div className="bg-gray-900 p-6 rounded-lg mb-4">
        <CodeBlock language="javascript" code={`
// create p element
const p = document.createElement('p');

// create text node
const text = document.createTextNode('My Name Is Mohamed Mostafa');

// append text to p
p.appendChild(text);

// append p to body
document.body.appendChild(p);
        `}/>
      </div>
      <button 
        onClick={runPureJS}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Run Pure JS Example
      </button>
      {output && (
        <div className="mt-4 p-4 border border-gray-300 rounded">
          <p>{output}</p>
        </div>
      )}
    </div>
  );
}
