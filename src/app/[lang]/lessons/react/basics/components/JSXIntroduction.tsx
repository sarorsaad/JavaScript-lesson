'use client';

import React from 'react';
import CodeBlock from '@/components/lessons/CodeBlock';

export default function JSXIntroduction() {
  return (
    <div className="step-section mb-8">
      <h2 className="text-2xl font-bold mb-4">Step 5: Introduction to JSX</h2>
      
      <div className="bg-gray-900 p-6 rounded-lg border-4 border-red-500">
        <h3 className="text-blue-400 text-xl mb-4">
          JSX: Write HTML-like code within JavaScript
        </h3>
        
        <p className="text-gray-300 mb-6">
          JSX stands for JavaScript XML, and it&apos;s a syntax extension for JavaScript used in React. 
          It allows you to write HTML-like code directly in JavaScript.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* JSX Example */}
          <div>
            <h4 className="text-blue-400 mb-4">JSX Syntax</h4>
            <CodeBlock language="jsx" code={`
// JSX Example
root.render(
  <div>
    <h1>Hello, World!</h1>
    <p>This is JSX!</p>
  </div>
);`}/>
          </div>

          {/* Regular JavaScript */}
          <div>
            <h4 className="text-blue-400 mb-4">Equivalent JavaScript</h4>
            <CodeBlock language="javascript" code={`
// Without JSX
root.render(
  React.createElement('div', null, [
    React.createElement('h1', null, 'Hello, World!'),
    React.createElement('p', null, 'This is JSX!')
  ])
);`}/>
          </div>
        </div>

        <div>
          <h3 className="text-blue-400 mb-4">Live Demo:</h3>
          <div className="bg-white p-6 rounded-lg">
            <h1 className="text-2xl font-bold mb-2">Hello, World!</h1>
            <p>This is JSX!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
