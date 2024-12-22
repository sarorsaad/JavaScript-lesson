'use client';

import React from 'react';
import CodeBlock from '@/components/lessons/CodeBlock';

export default function AttributeBasics() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Key Points about Attributes</h2>

      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold mb-3">1. Definition</h3>
          <p className="text-gray-700">
            Attributes provide extra details about an element. For example, an attribute can specify an element&apos;s 
            class, ID, style, or event handlers.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3">2. Structure</h3>
          <p className="text-gray-700 mb-4">
            Attributes can be written in both HTML and JSX. Here&apos;s how they compare:
          </p>

          <div className="bg-gray-900 p-6 rounded-lg space-y-6">
            <div>
              <h4 className="text-blue-400 mb-2">HTML Attributes:</h4>
              <CodeBlock language="html" code={`
<button class="btn" id="submitButton" disabled="true">Submit</button>
<!-- HTML uses kebab-case and string values -->
              `}/>
            </div>

            <div>
              <h4 className="text-blue-400 mb-2">JSX Attributes:</h4>
              <CodeBlock language="jsx" code={`
<button className="btn" id="submitButton" disabled={true}>Submit</button>
{/* JSX uses camelCase and curly braces for JavaScript expressions */}
              `}/>
            </div>

            <div className="bg-gray-800 p-4 rounded">
              <p className="text-gray-300 font-semibold mb-2">Key differences:</p>
              <ul className="space-y-2 text-gray-300">
                <li><code className="text-blue-400">class</code> → <code className="text-pink-400">className</code> in JSX</li>
                <li>Boolean attributes can use <code className="text-green-400">{'{JavaScript}'}</code> values in JSX</li>
                <li>Event handlers use camelCase in JSX (e.g., <code className="text-blue-400">onclick</code> → <code className="text-pink-400">onClick</code>)</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3">3. Types of Attributes</h3>
          <ul className="space-y-3 text-gray-700">
            <li>
              <span className="font-semibold text-blue-600">Standard Attributes:</span>
              {' '}Common attributes like <code>class</code>, <code>id</code>, <code>style</code>, and <code>data-*</code>
            </li>
            <li>
              <span className="font-semibold text-blue-600">Event Attributes:</span>
              {' '}Used for handling events, such as <code>onClick</code>, <code>onChange</code>
            </li>
            <li>
              <span className="font-semibold text-blue-600">Boolean Attributes:</span>
              {' '}Attributes that can be true or false, like <code>disabled</code> or <code>checked</code>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
