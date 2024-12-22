import { Metadata } from 'next';
import ObjectIntroduction from './components/ObjectIntroduction';
import UserDefinedObjects from './components/UserDefinedObjects';
import DocumentObjects from './components/DocumentObjects';
import BuiltInObjects from './components/BuiltInObjects';
import BrowserObjects from './components/BrowserObjects';

export const metadata: Metadata = {
  title: 'JavaScript Objects | Saror Academy',
  description: 'Learn about JavaScript objects, including user-defined objects, document objects, built-in objects, and browser objects.',
};

export default function ObjectsLesson() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8">JavaScript Objects</h1>
      <div className="space-y-12">
        <ObjectIntroduction lang="en" />
        <UserDefinedObjects lang="en" />
        <DocumentObjects lang="en" />
        <BuiltInObjects lang="en" />
        <BrowserObjects lang="en" />
      </div>
    </div>
  );
}
