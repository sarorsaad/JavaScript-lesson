import { FC } from 'react';
import LessonLayout from '@/components/lessons/LessonLayout';
import CodeBlock from '@/components/lessons/CodeBlock';

const NodeJSEventLoop: FC = () => {
  return (
    <LessonLayout
      title="Node.js Event Loop"
      description="Understanding the Event Loop and Asynchronous Programming in Node.js"
    >
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Event Loop Architecture</h2>
        <p>
          The Event Loop is a fundamental concept in Node.js that enables non-blocking I/O
          operations despite JavaScript being single-threaded. It handles multiple operations
          efficiently through its event-driven architecture.
        </p>

        <h3 className="text-xl font-semibold">Key Components</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Call Stack - Executes synchronous code</li>
          <li>Node APIs - Handles asynchronous operations</li>
          <li>Callback Queue - Stores completed operations</li>
          <li>Event Loop - Manages the execution flow</li>
        </ul>

        <h3 className="text-xl font-semibold">Non-blocking I/O Example</h3>
        <CodeBlock
          code={`// Example of non-blocking file read
const fs = require('fs');

console.log('Starting file read...');
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File contents:', data);
});
console.log('Continuing with other tasks...');`}
          language="javascript"
        />

        <h3 className="text-xl font-semibold">Module System</h3>
        <p>
          Node.js uses the CommonJS module system to organize and reuse code. Each file
          is treated as a separate module with its own scope.
        </p>

        <CodeBlock
          code={`// math.js - Module definition
module.exports = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
};

// main.js - Module usage
const math = require('./math');
console.log(math.add(5, 3));  // Output: 8`}
          language="javascript"
        />
      </section>
    </LessonLayout>
  );
};

export default NodeJSEventLoop;
