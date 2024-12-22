'use client';

import React, { useState } from 'react';

export function VariableDemo() {
  const [output, setOutput] = useState('');

  const runDemo = () => {
    let name = "Alice";
    const age = 25;
    let hobby = "coding";

    let result = `
      let name: ${name}
      const age: ${age}
      var hobby: ${hobby}
    `;

    name = "Bob";
    hobby = "reading";

    result += `\n
      After reassignment:
      name: ${name}
      hobby: ${hobby}
      age: ${age} (constant, cannot be changed)
    `;

    setOutput(result);
  };


  return (
    <div>
      <button 
        onClick={runDemo}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Run Demo
      </button>
      <pre className="mt-4 whitespace-pre-wrap">{output}</pre>
    </div>
  );
}

export function TypeChecker() {
  const [output, setOutput] = useState('');
  const [userInput, setUserInput] = useState('');
  const [userTypeOutput, setUserTypeOutput] = useState('');

  const checkTypes = () => {
    const examples = {
      string: "Hello World",
      number: 42,
      boolean: true,
      undefined: undefined,
      null: null,
      symbol: Symbol('id'),
      bigint: BigInt(9007199254740991)
    };

    const result = Object.entries(examples)
      .map(([type, value]) => `${type}: ${String(value)} (typeof: ${typeof value})`)
      .join('\n');

    setOutput(result);
  };

  const checkUserInput = () => {
    const input = userInput;
    
    // Try to parse as number
    const numberValue = Number(input);
    if (!isNaN(numberValue)) {
      setUserTypeOutput(`Your input "${input}" is a number`);
      return;
    }

    // Check for boolean
    if (input.toLowerCase() === 'true' || input.toLowerCase() === 'false') {
      setUserTypeOutput(`Your input "${input}" is a boolean`);
      return;
    }

    // Default to string
    setUserTypeOutput(`Your input "${input}" is a string`);
  };

  return (
    <div>
      <button 
        onClick={checkTypes}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Check Types
      </button>
      <pre className="mt-4 whitespace-pre-wrap">{output}</pre>

      <div className="mt-8">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter a value to check its type..."
        />
        <button
          onClick={checkUserInput}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Check Type
        </button>
        <div className="mt-4">{userTypeOutput}</div>
      </div>
    </div>
  );
}
