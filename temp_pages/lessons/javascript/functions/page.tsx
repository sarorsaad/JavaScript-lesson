import { Metadata } from 'next';
import FunctionDefinition from './components/FunctionDefinition';
import FunctionTypes from './components/FunctionTypes';
import ParametersDemo from './components/ParametersDemo';
import PredefinedFunctions from './components/PredefinedFunctions';

export const metadata: Metadata = {
  title: 'JavaScript Functions | Saror Academy',
  description: 'Learn about JavaScript functions, including function definitions, types, parameters, return values, and predefined functions.',
};

export default function FunctionsLesson() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8">JavaScript Functions</h1>
      <div className="space-y-12">
        <FunctionDefinition lang="en" />
        <FunctionTypes lang="en" />
        <ParametersDemo lang="en" />
        <PredefinedFunctions lang="en" />
      </div>
    </div>
  );
}
