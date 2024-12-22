'use client';

import React, { useState } from 'react';

export default function InteractiveVisualization() {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 3;

  const explanations = [
    "Click 'Next Step' to start the visualization",
    "React creates an element using React.createElement()",
    "React converts the element to a Virtual DOM node",
    "React renders the element to the Real DOM"
  ];

  const showElementCreation = () => (
    <div className="element-creation animate-fade-in">
      <pre className="bg-gray-800 p-4 rounded text-gray-300">
{`React.createElement("p", null, "My Name Is Mohamed Mostafa")
↓
{
    type: "p",
    props: {},
    children: ["My Name Is Mohamed Mostafa"]
}`}
      </pre>
    </div>
  );

  const showVirtualDOM = () => (
    <div className="relative h-[300px] bg-gray-800 rounded p-4">
      <div className="absolute top-[20px] left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-6 py-2 rounded-full">
        Root
      </div>
      <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-6 py-2 rounded-full">
        P Element
      </div>
      <div className="absolute top-[180px] left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-6 py-2 rounded-full">
        Text Node
      </div>
      {currentStep === 2 && (
        <>
          <div className="absolute top-[60px] left-1/2 w-[2px] h-[40px] bg-blue-500 transform -translate-x-1/2"></div>
          <div className="absolute top-[140px] left-1/2 w-[2px] h-[40px] bg-blue-500 transform -translate-x-1/2"></div>
        </>
      )}
    </div>
  );

  const showRealDOM = () => (
    <div className="bg-white p-4 rounded animate-fade-in">
      <p className="text-gray-800">
        My Name Is Mohamed Mostafa
      </p>
    </div>
  );

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-3">5. Interactive Visualization</h3>
      
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h4 className="text-lg font-semibold mb-4">Watch React in Action</h4>
        
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
            disabled={currentStep === 0}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Previous Step
          </button>
          <button
            onClick={() => setCurrentStep(prev => Math.min(totalSteps, prev + 1))}
            disabled={currentStep === totalSteps}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Next Step
          </button>
          <button
            onClick={() => setCurrentStep(0)}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            Reset
          </button>
        </div>


        <div className="grid grid-cols-3 gap-4">
          <div className={`p-4 rounded-lg ${currentStep === 1 ? 'ring-2 ring-blue-500' : 'bg-gray-100'}`}>
            <h5 className="font-semibold mb-2">1. Element Creation</h5>
            {currentStep >= 1 && showElementCreation()}
          </div>

          <div className={`p-4 rounded-lg ${currentStep === 2 ? 'ring-2 ring-blue-500' : 'bg-gray-100'}`}>
            <h5 className="font-semibold mb-2">2. Virtual DOM</h5>
            {currentStep >= 2 && showVirtualDOM()}
          </div>

          <div className={`p-4 rounded-lg ${currentStep === 3 ? 'ring-2 ring-blue-500' : 'bg-gray-100'}`}>
            <h5 className="font-semibold mb-2">3. Real DOM</h5>
            {currentStep >= 3 && showRealDOM()}
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-100 rounded text-center">
          {explanations[currentStep]}
        </div>
      </div>
    </div>
  );
}
