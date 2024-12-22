'use client';

import React, { useState } from 'react';
import CodeBlock from '@/components/lessons/CodeBlock';

export default function DynamicStyling() {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Dynamic Styling</h2>

      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold mb-3">Dynamic Values</h3>
          <p className="text-gray-700 mb-4">
            You can use JavaScript expressions within curly braces <code>{'{}'}</code> to set style values 
            dynamically based on state or props.
          </p>

          <div className="bg-gray-900 p-6 rounded-lg space-y-6">
            <CodeBlock language="jsx" code={`
const isActive = true;
const element = (
  <div style={{
    backgroundColor: isActive ? 'green' : 'red'
  }}>
    Conditional Styling
  </div>
);
// Style changes based on isActive value
            `}/>

            <div className="mt-4">
              <h4 className="text-blue-400 mb-2">Live Demo:</h4>
              <div 
                style={{
                  backgroundColor: isActive ? 'green' : 'red',
                  color: 'white',
                  padding: '20px',
                  borderRadius: '5px'
                }}
                onClick={() => setIsActive(!isActive)}
                className="cursor-pointer"
              >
                Click to toggle style! Currently: {isActive ? 'Active' : 'Inactive'}
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3">Complete Example</h3>
          <div className="bg-gray-900 p-6 rounded-lg">
            <CodeBlock language="jsx" code={`
import React from 'react';

const MyComponent = () => {
  const isActive = true;
  return (
    <div style={{
      backgroundColor: isActive ? 'green' : 'red',
      color: 'white',
      padding: '20px',
      borderRadius: '5px'
    }}>
      This is a styled component!
    </div>
  );
};

export default MyComponent;
// A complete React component with dynamic styling
            `}/>
          </div>
        </section>

        <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-blue-500">
          <p className="text-gray-700">
            <span className="font-bold">⚠️ Important Note:</span> Inline styles do not support all CSS features, 
            such as pseudo-classes (like <code>:hover</code>) or media queries. For those, external CSS or  
            CSS-in-JS solutions (like styled-components) are typically used.
          </p>
        </div>
      </div>
    </div>
  );
}
