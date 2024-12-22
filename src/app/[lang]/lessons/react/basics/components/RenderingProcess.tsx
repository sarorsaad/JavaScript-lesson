'use client';

import React from 'react';
import CodeBlock from '@/components/lessons/CodeBlock';

export default function RenderingProcess() {
  return (
    <div className="step-section mb-8">
      <h2 className="text-2xl font-bold mb-4">Step 2: Understanding React Rendering Process</h2>
      
      <div className="bg-gray-900 p-6 rounded-lg">
        <p className="text-gray-300 mb-4">
          Rendering in React is the process of displaying content on the screen.<br/>
          This is done by render() method.
        </p>

        <CodeBlock language="javascript" code={`
// Render content to root container
root.render(<App />);`}/>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg">
          <p className="text-gray-300">
            The render method takes a React element and displays it in the DOM.
            React will efficiently update only the necessary parts of the DOM when your data changes.
          </p>
        </div>
      </div>
    </div>
  );
}
