import { FC } from 'react';
import LessonLayout from '@/components/lessons/LessonLayout';
import CodeBlock from '@/components/lessons/CodeBlock';

const NodeJSEventDriven: FC = () => {
  return (
    <LessonLayout
      title="Event-Driven Architecture in Node.js"
      description="Learn about Node.js event-driven programming and the EventEmitter class"
    >
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Event-Driven Programming</h2>
        <p>
          Node.js uses an event-driven architecture where certain types of objects
          (called &quot;emitters&quot;) emit named events that cause listeners (callback functions)
          to be called.
        </p>

        <h3 className="text-xl font-semibold">The EventEmitter Class</h3>
        <CodeBlock
          code={`const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// Add an event listener
myEmitter.on('userLoggedIn', (userId) => {
    console.log(\`User \${userId} logged in\`);
});

// Emit an event
myEmitter.emit('userLoggedIn', 123);`}
          language="javascript"
        />

        <h3 className="text-xl font-semibold">Multiple Listeners</h3>
        <CodeBlock
          code={`// You can add multiple listeners for the same event
myEmitter.on('userAction', (action) => {
    console.log(\`User performed action: \${action}\`);
});

myEmitter.on('userAction', (action) => {
    // Log to analytics
    console.log(\`Analytics: tracking user action \${action}\`);
});

// Both listeners will be called
myEmitter.emit('userAction', 'click');`}
          language="javascript"
        />

        <h3 className="text-xl font-semibold">Error Events</h3>
        <CodeBlock
          code={`// Special handling for error events
myEmitter.on('error', (err) => {
    console.error('An error occurred:', err.message);
});

// Emit an error event
myEmitter.emit('error', new Error('Something went wrong'));`}
          language="javascript"
        />

        <div className="bg-yellow-50 p-4 rounded-lg mt-6">
          <h4 className="text-lg font-semibold text-yellow-800">Best Practices</h4>
          <ul className="list-disc pl-6 space-y-2 text-yellow-700">
            <li>Always handle error events to prevent crashes</li>
            <li>Remove listeners when they&apos;re no longer needed</li>
            <li>Use meaningful event names</li>
            <li>Consider using wildcard event listeners for debugging</li>
          </ul>
        </div>
      </section>
    </LessonLayout>
  );
};

export default NodeJSEventDriven;
