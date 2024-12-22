'use client';

import React from 'react';
import CodeBlock from '@/components/lessons/CodeBlock';

export default function HTMLStructure() {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-3">3. HTML Structure for React</h3>
      <div className="bg-yellow-50 p-4 rounded-lg mb-4 border-l-4 border-yellow-400">
        <strong>Important:</strong> React needs an entry point (root element) to work!
      </div>
      <div className="bg-gray-900 p-6 rounded-lg">
        <CodeBlock language="html" code={`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="root">
        <!-- all elements will be rendered here -->
    </div>
    
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="react-code.js"></script>
</body>
</html>
        `}/>
      </div>
    </div>
  );
}
