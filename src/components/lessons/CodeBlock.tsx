import React from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = 'javascript' }: CodeBlockProps) {
  return (
    <pre className={`language-${language} bg-gray-800 text-white p-4 rounded-lg overflow-x-auto`}>
      <code>{code}</code>
    </pre>
  );
}
