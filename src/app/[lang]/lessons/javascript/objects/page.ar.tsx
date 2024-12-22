import { Metadata } from 'next';
import ObjectIntroduction from './components/ObjectIntroduction';
import UserDefinedObjects from './components/UserDefinedObjects';
import DocumentObjects from './components/DocumentObjects';
import BuiltInObjects from './components/BuiltInObjects';
import BrowserObjects from './components/BrowserObjects';

export const metadata: Metadata = {
  title: 'الكائنات في جافا سكريبت | أكاديمية سرور',
  description: 'تعلم عن الكائنات في جافا سكريبت، بما في ذلك الكائنات المعرفة من قبل المستخدم، كائنات المستند، الكائنات المدمجة، وكائنات المتصفح.',
};

export default function ObjectsLesson() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4" dir="rtl">
      <h1 className="text-4xl font-bold mb-8">الكائنات في جافا سكريبت</h1>
      <div className="space-y-12">
        <ObjectIntroduction lang="ar" />
        <UserDefinedObjects lang="ar" />
        <DocumentObjects lang="ar" />
        <BuiltInObjects lang="ar" />
        <BrowserObjects lang="ar" />
      </div>
    </div>
  );
}
