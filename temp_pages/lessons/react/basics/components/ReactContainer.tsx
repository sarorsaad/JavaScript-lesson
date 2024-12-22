'use client';

import React from 'react';
import CodeBlock from '@/components/lessons/CodeBlock';

export default function ReactContainer() {
  return (
    <div className="step-section mb-8">
      <h2 className="text-2xl font-bold mb-4">Step 1: Create React Container</h2>
      
      <div className="bg-gray-900 p-6 rounded-lg">
        <p className="text-gray-300 mb-4">
          To start using React, we need to create a root container where our React components will be rendered.
        </p>

        <CodeBlock language="javascript" code={`
// Create a root container
const root = ReactDOM.createRoot(
  document.getElementById('root')
);`}/>

        <div className="mt-8">
          <h3 className="text-blue-400 mb-4">Component Hierarchy</h3>
          <div className="border-2 border-blue-400 p-6 rounded-lg">
            <div className="flex flex-col items-center">
              {/* App Component */}
              <div className="border border-white px-6 py-3 mb-6 bg-gray-800 rounded">
                <span className="text-white">&lt;App /&gt;</span>
              </div>
              
              {/* Child Components */}
              <div className="flex gap-6">
                <div className="border border-white px-4 py-2 bg-gray-800 rounded">
                  <span className="text-white">&lt;Component1 /&gt;</span>
                </div>
                <div className="border border-white px-4 py-2 bg-gray-800 rounded">
                  <span className="text-white">&lt;Component2 /&gt;</span>
                </div>
                <div className="border border-white px-4 py-2 bg-gray-800 rounded">
                  <span className="text-white">&lt;Component3 /&gt;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
