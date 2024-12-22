'use client';

import React from 'react';
import CodeBlock from '@/components/lessons/CodeBlock';

export default function ReactSetup() {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-3">2. React CDN Setup</h3>
      <div className="bg-yellow-50 p-4 rounded-lg mb-4 border-l-4 border-yellow-400">
        <strong>Development Version (with better error messages):</strong>
      </div>
      <div className="bg-gray-900 p-6 rounded-lg">
        <CodeBlock language="html" code={`
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
        `}/>
      </div>
    </div>
  );
}
