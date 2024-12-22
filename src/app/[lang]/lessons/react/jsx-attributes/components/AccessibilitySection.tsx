'use client';

import React from 'react';
import CodeBlock from '@/components/lessons/CodeBlock';

export default function AccessibilitySection() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Accessibility Attributes</h2>

      <div className="space-y-6">
        <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-semibold text-blue-600 mb-3">📝 Note on ARIA Attributes</h3>
          <div className="space-y-4">
            <p className="text-gray-700">
              The <code>aria-*</code> attributes are named this way to denote their association with the 
              <span className="text-green-600"> Accessible Rich Internet Applications (ARIA)</span> specification, 
              which is a part of the <span className="text-green-600">Web Accessibility Initiative (WAI)</span> by 
              the <span className="text-green-600">World Wide Web Consortium (W3C)</span>.
            </p>
            <p className="text-gray-700">
              The purpose of ARIA attributes is to enhance the accessibility of web content, making it more 
              understandable and navigable for users with disabilities who rely on assistive technologies such 
              as screen readers.
            </p>
          </div>
        </div>

        <section>
          <h3 className="text-xl font-semibold mb-3">Common ARIA Attributes</h3>
          <div className="bg-gray-900 p-6 rounded-lg">
            <CodeBlock language="jsx" code={`
// Example of ARIA attributes in JSX
<button
  aria-label="Close dialog"
  aria-pressed={isPressed}
  onClick={handleClose}
>
  ✕
</button>

<div
  role="alert"
  aria-live="polite"
  aria-atomic="true"
>
  {message}
</div>
            `}/>
          </div>
        </section>
      </div>
    </div>
  );
}
