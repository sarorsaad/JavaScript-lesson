'use client';

import React from 'react';
import CodeBlock from '@/components/lessons/CodeBlock';

export default function StyleAttributes() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Style Attribute in JSX</h2>
      
      <div className="space-y-6">
        <p className="text-gray-700">
          In JSX, the <code>style</code> attribute is used to apply inline styles to React components 
          in a way that&apos;s similar to how you would in regular HTML, but with some key differences.
        </p>

        <section>
          <h3 className="text-xl font-semibold mb-3">1. JavaScript Object Syntax</h3>
          <p className="text-gray-700 mb-4">
            The <code>style</code> attribute takes a JavaScript object rather than a string. 
            The properties of this object are camelCased instead of being in kebab-case 
            (like <code>background-color</code> becomes <code>backgroundColor</code>).
          </p>

          <div className="bg-gray-900 p-6 rounded-lg">
            <CodeBlock language="jsx" code={`
const element = (
  <div style={{
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px'
  }}>
    Hello World
  </div>
);
// Note the double curly braces: outer for JSX, inner for object literal
            `}/>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3">2. Units</h3>
          <p className="text-gray-700 mb-4">
            When specifying units (like <code>px</code>, <code>em</code>, etc.), 
            these must be included in the property value as strings.
          </p>

          <div className="bg-gray-900 p-6 rounded-lg">
            <CodeBlock language="jsx" code={`
const element = (
  <div style={{
    width: '100px',
    height: '50px'
  }}>
    Box
  </div>
);
// Units must be specified as strings
            `}/>
          </div>
        </section>
      </div>
    </div>
  );
}
