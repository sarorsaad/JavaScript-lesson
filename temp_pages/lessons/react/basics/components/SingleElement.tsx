'use client';

import React, { useState } from 'react';
import CodeBlock from '@/components/lessons/CodeBlock';


export default function SingleElement() {
  const [demoText] = useState('Hello, World!');

  return (
    <div className="step-section mb-8">
      <h2 className="text-2xl font-bold mb-4">Step 3: Rendering Single React Element</h2>
      
      <div className="bg-gray-900 p-6 rounded-lg">
        <CodeBlock language="javascript" code={`
// Render single element
root.render(
  <h1>Hello, World!</h1>
);`}/>

        <div className="mt-6">
          <h3 className="text-blue-400 mb-4">Live Demo:</h3>
          <div className="bg-white p-6 rounded-lg">
            <h1 className="text-2xl font-bold text-gray-900">{demoText}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
