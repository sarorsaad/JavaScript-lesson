import { FC } from 'react';
import LessonLayout from '@/components/lessons/LessonLayout';
import CodeBlock from '@/components/lessons/CodeBlock';

const NodeJSGettingStarted: FC = () => {
  return (
    <LessonLayout
      title="Getting Started with Node.js"
      description="Learn how to set up Node.js and create your first project"
    >
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Installation Guide</h2>
        <p>
          To begin developing with Node.js, you&apos;ll need to install it on your system.
          Node.js comes with npm (Node Package Manager) which helps you manage project dependencies.
        </p>

        <h3 className="text-xl font-semibold">Step 1: Download and Install</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Visit <a href="https://nodejs.org" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">nodejs.org</a></li>
          <li>Download the LTS (Long Term Support) version</li>
          <li>Follow the installation instructions for your operating system</li>
        </ul>

        <h3 className="text-xl font-semibold">Step 2: Verify Installation</h3>
        <CodeBlock
          code={`# Check Node.js version
node --version

# Check npm version
npm --version`}
          language="bash"
        />

        <h3 className="text-xl font-semibold">Step 3: Create Your First Project</h3>
        <CodeBlock
          code={`# Create a new directory
mkdir my-node-project
cd my-node-project

# Initialize a new Node.js project
npm init

# Follow the prompts to create package.json`}
          language="bash"
        />

        <h3 className="text-xl font-semibold">Step 4: Create Your First Script</h3>
        <CodeBlock
          code={`// index.js
console.log('Welcome to Node.js!');

// Run with:
// node index.js`}
          language="javascript"
        />

        <div className="bg-blue-50 p-4 rounded-lg mt-6">
          <h4 className="text-lg font-semibold text-blue-800">Pro Tips</h4>
          <ul className="list-disc pl-6 space-y-2 text-blue-700">
            <li>Use version control (git) for your projects</li>
            <li>Create a .gitignore file to exclude node_modules</li>
            <li>Document your project with a README.md file</li>
            <li>Follow semantic versioning for your packages</li>
          </ul>
        </div>
      </section>
    </LessonLayout>
  );
};

export default NodeJSGettingStarted;
