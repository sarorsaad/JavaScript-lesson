'use client';

import React from 'react';
import CodeBlock from '@/components/lessons/CodeBlock';

export default function ReactProcess() {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-3">4. Process of React Code Under the Hood</h3>
      
      <div className="bg-gray-900 p-6 rounded-lg space-y-8">
        <div>
          <h4 className="text-blue-400 mb-4">1. Create the Element (type, attributes, children)</h4>
          <CodeBlock language="javascript" code={`
React.createElement("p", null, "My Name Is Mohamed Mostafa")


// Converts to:
{
    type: "p",
    props: {},
    children: ["My Name Is Mohamed Mostafa"]
}
          `}/>
        </div>

        <div>
          <h4 className="text-blue-400 mb-4">2. Virtual DOM (Fiber Tree)</h4>
          <div className="bg-white p-4 rounded-lg text-center">
            <p className="text-gray-600 italic">Visualization of React&apos;s Fiber Tree structure and its connection to the Real DOM</p>
          </div>
          <CodeBlock language="javascript" code={`
// render p element
const root = ReactDOM.createRoot(document.getElementById('root'));
          `}/>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li>1. React Fiber root is initialized</li>
            <li>2. This root is linked between the real DOM and V-DOM</li>
            <li>3. Create Fiber tree with modern Async mode (pause and continue, schedule the work, split to chunks, give high priority for urgent tasks and more)</li>
          </ul>
        </div>

        <div>
          <h4 className="text-blue-400 mb-4">3. Render Process</h4>
          <CodeBlock language="javascript" code={`
root.render(p);
          `}/>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li>• Reconciliation: React compares the virtual DOM with the current state of the DOM</li>
            <li>• Virtual DOM Update: React creates or updates the actual DOM elements</li>
            <li>• Commit Phase: The final step where changes are made to the real DOM</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
