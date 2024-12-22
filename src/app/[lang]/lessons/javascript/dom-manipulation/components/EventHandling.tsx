'use client';

import React, { useState, useEffect } from 'react';
import CodeBlock from '@/components/lessons/CodeBlock';

interface LogEntry {
  time: string;
  type: string;
  details: string;
}

interface EventHandlingProps {
  lang: string;
}

export default function EventHandling({ lang }: EventHandlingProps) {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const logEvent = (eventType: string, details: string = '') => {
    const time = new Date().toLocaleTimeString();
    setLogs(prev => [{
      time,
      type: eventType,
      details
    }, ...prev].slice(0, 10)); // Keep only last 10 entries
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      logEvent('keydown', `Key: ${event.key}`);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="step-section mb-8">
      <h2 className="text-2xl font-bold mb-4">Step 4: Add Event Listeners</h2>

      <div className="code-example bg-gray-50 p-6 rounded-lg mb-6">
        <h3 className="text-xl font-semibold mb-4">
          {lang === 'ar' ? 'تجربة مستمع الأحداث' : 'Event Listener Demo'}
        </h3>
        <p className="mb-4">Interact with the box below (click, hover, or press keys)</p>

        <div 
          className="event-demo p-6 bg-gray-800 text-white rounded-lg mb-4 transition-all duration-300"
          style={{
            transform: isHovered ? 'scale(1.02)' : 'scale(1)',
            backgroundColor: isClicked ? '#4CAF50' : isHovered ? '#3E4451' : '#282C34'
          }}
          onMouseOver={() => {
            setIsHovered(true);
            logEvent('mouseover');
          }}
          onMouseOut={() => {
            setIsHovered(false);
            logEvent('mouseout');
          }}
          onClick={() => {
            setIsClicked(true);
            logEvent('click');
            setTimeout(() => setIsClicked(false), 200);
          }}
        >
          <p className="text-center">
            {lang === 'ar' ? 'تجربة الأحداث التفاعلية' : 'Interactive Event Demo'}
          </p>
          <p className="text-sm text-center mt-2">
            {lang === 'ar' ? 'جرب النقر، التحويم، أو الضغط على المفاتيح' : 'Try clicking, hovering, or pressing keys'}
          </p>
        </div>

        <div className="event-log bg-gray-900 text-white p-4 rounded-lg min-h-[200px] overflow-y-auto">
          {logs.map((log, index) => (
            <div 
              key={index}
              className="border-b border-gray-700 py-2"
            >
              <span className="text-gray-400">[{log.time}]</span>{' '}
              <span className="text-green-400">{log.type}</span>{' '}
              <span className="text-yellow-300">{log.details}</span>
            </div>
          ))}
          {logs.length === 0 && (
            <p className="text-gray-400">
              {lang === 'ar' ? 'ستظهر الأحداث هنا...' : 'Events will appear here...'}
            </p>
          )}
        </div>

        <div className="mt-6">
          <CodeBlock language="javascript" code={`
// Adding event listeners
element.addEventListener('click', function() {
    console.log('Element clicked!');
});

element.addEventListener('mouseover', function() {
    console.log('Mouse over element!');
});

element.addEventListener('mouseout', function() {
    console.log('Mouse left element!');
});

document.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
});
          `}/>
        </div>
      </div>
    </div>
  );
}
