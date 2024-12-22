'use client';

import React from 'react';
import CodeBlock from '@/components/lessons/CodeBlock';

export default function MultipleElements() {
  return (
    <div className="step-section mb-8">
      <h2 className="text-2xl font-bold mb-4">Step 4: Render Multiple React Elements</h2>
      
      <div className="bg-gray-900 p-6 rounded-lg">
        <CodeBlock language="javascript" code={`
// Render multiple elements wrapped in a single parent container
root.render(
  <div>
    <h1>Hello, World!</h1>
    <p>This is a paragraph.</p>
    <button>Click Me!</button>
  </div>
);`}/>

        <div className="mt-6">
          <h3 className="text-blue-400 mb-4">Live Demo:</h3>
          <div className="bg-white p-6 rounded-lg">
            <h1 className="text-2xl font-bold mb-2">Hello, World!</h1>
            <p className="mb-4">This is a paragraph.</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
              Click Me!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
