import { FC } from 'react';
import LessonLayout from '@/components/lessons/LessonLayout';
import CodeBlock from '@/components/lessons/CodeBlock';

const NodeJSIntroduction: FC = () => {
  return (
    <LessonLayout
      title="Introduction to Node.js"
      description="Learn about Node.js, its features, and how to get started with server-side JavaScript"
    >
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">What is Node.js?</h2>
        <p>
          Node.js is a runtime environment that allows you to run JavaScript code outside of a web browser.
          It enables you to build scalable network applications and run JavaScript on the server side.
        </p>

        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Event-driven, non-blocking I/O model</li>
          <li>Built on Chrome&apos;s V8 JavaScript engine</li>
          <li>Rich ecosystem with npm (Node Package Manager)</li>
          <li>Cross-platform compatibility</li>
        </ul>

        <h3 className="text-xl font-semibold">Getting Started</h3>
        <CodeBlock
          code={`// Hello World in Node.js
console.log('Hello from Node.js!');

// Creating a simple HTTP server
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});`}
          language="javascript"
        />

        <h3 className="text-xl font-semibold">Common Use Cases</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Web servers and APIs</li>
          <li>Real-time applications</li>
          <li>Command-line tools</li>
          <li>Microservices architecture</li>
        </ul>
      </section>
    </LessonLayout>
  );
};

export default NodeJSIntroduction;
