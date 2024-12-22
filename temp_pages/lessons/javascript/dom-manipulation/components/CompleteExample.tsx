'use client';

import React, { useState } from 'react';
import CodeBlock from '@/components/lessons/CodeBlock';

export default function CompleteExample() {
  const [clicks, setClicks] = useState<string[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const timeStamp = new Date().toLocaleTimeString();
    setClicks(prev => [...prev, timeStamp]);
  };

  // Removed unused function

  return (
    <div className="step-section mb-8">
      <h2 className="text-2xl font-bold mb-4">Step 5: Complete DOM Example</h2>
      <p className="mb-4">Let&apos;s see how to combine element selection, modification, and events together in one example.</p>

      <div className="code-example bg-gray-50 p-6 rounded-lg mb-6">
        <h3 className="text-xl font-semibold mb-4">HTML Code:</h3>
        <CodeBlock language="html" code={`
<!-- Just an empty div with an ID -->
<div id="root"></div>
        `}/>
      </div>

      <div className="code-example bg-gray-50 p-6 rounded-lg mb-6">
        <h3 className="text-xl font-semibold mb-4">JavaScript Code:</h3>
        <CodeBlock language="javascript" code={`
// 1. Select the element
const rootElement = document.getElementById('root');

// 2. Create and append new elements
const title = document.createElement('h3');
title.textContent = 'Interactive Element';
rootElement.appendChild(title);

const paragraph = document.createElement('p');
paragraph.textContent = 'Click me or hover over me!';
rootElement.appendChild(paragraph);

// 3. Modify the element's style
rootElement.style.padding = '20px';
rootElement.style.border = '2px solid #4CAF50';
rootElement.style.borderRadius = '8px';
rootElement.style.cursor = 'pointer';
rootElement.style.backgroundColor = '#1e1e1e';
rootElement.style.transition = 'all 0.3s ease';

// 4. Add multiple event listeners
rootElement.addEventListener('click', function() {
    this.style.backgroundColor = getRandomColor();
    const timeStamp = document.createElement('p');
    timeStamp.textContent = 'Clicked at: ' + new Date().toLocaleTimeString();
    this.appendChild(timeStamp);
});

rootElement.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.05)';
});

rootElement.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});
        `}/>
      </div>

      <div className="demo-section">
        <h3 className="text-xl font-semibold mb-4">Live Demo:</h3>
        <div 
          className="p-5 border-2 border-green-500 rounded-lg cursor-pointer transition-all duration-300"
          style={{
            backgroundColor: '#1e1e1e',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
          onClick={handleClick}
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
        >
          <h3 className="text-2xl text-green-500 mb-2">Interactive Element</h3>
          <p className="text-white mb-4">Click me or hover over me!</p>
          {clicks.map((time, index) => (
            <p key={index} className="text-green-400 text-sm">
              Clicked at: {time}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
