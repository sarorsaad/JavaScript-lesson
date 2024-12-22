import { Metadata } from 'next';
import FunctionDefinition from './components/FunctionDefinition';
import FunctionTypes from './components/FunctionTypes';
import ParametersDemo from './components/ParametersDemo';
import PredefinedFunctions from './components/PredefinedFunctions';

export const metadata: Metadata = {
  title: 'الدوال في جافا سكريبت | أكاديمية سرور',
  description: 'تعلم عن الدوال في جافا سكريبت، بما في ذلك تعريفات الدوال، أنواعها، المعاملات، القيم المرجعة، والدوال المعرفة مسبقاً.',
};

export default function FunctionsLesson() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4" dir="rtl">
      <h1 className="text-4xl font-bold mb-8">الدوال في جافا سكريبت</h1>
      <div className="space-y-12">
        <FunctionDefinition lang="ar" />
        <FunctionTypes lang="ar" />
        <ParametersDemo lang="ar" />
        <PredefinedFunctions lang="ar" />
      </div>
    </div>
  );
}
