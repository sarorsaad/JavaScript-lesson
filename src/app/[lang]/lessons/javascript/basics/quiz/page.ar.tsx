import { FC } from 'react';
import QuizComponent, { QuizQuestion } from '@/components/quiz/QuizComponent';

const questions: QuizQuestion[] = [
  {
    id: 'js-basics-1',
    question: 'ما هو جافا سكريبت؟',
    options: [
      'لغة ترميز',
      'لغة برمجة',
      'لغة تنسيق',
      'لغة قواعد بيانات'
    ],
    correctAnswer: 1,
    explanation: 'جافا سكريبت هي لغة برمجة تمكن صفحات الويب التفاعلية وهي جزء أساسي من تطبيقات الويب.'
  },
  {
    id: 'js-basics-2',
    question: 'ما هي الكلمة المفتاحية المستخدمة لتعريف المتغيرات في جافا سكريبت الحديثة؟',
    options: [
      'var',
      'let',
      'const',
      'كلاهما let و const'
    ],
    correctAnswer: 3,
    explanation: 'تستخدم جافا سكريبت الحديثة كلاً من let و const لتعريف المتغيرات. يستخدم let للمتغيرات التي يمكن إعادة تعيينها، بينما يستخدم const للثوابت.'
  },
  {
    id: 'js-basics-3',
    question: 'ما هي الطريقة الصحيحة لكتابة تعليق في جافا سكريبت؟',
    options: [
      '<!-- تعليق -->',
      '/* تعليق */',
      '// تعليق',
      '# تعليق'
    ],
    correctAnswer: 2,
    explanation: 'تبدأ التعليقات أحادية السطر في جافا سكريبت بـ //. للتعليقات متعددة الأسطر، يمكنك استخدام /* تعليق */.'
  }
];

const JavaScriptBasicsQuizArabic: FC = () => {
  return (
    <QuizComponent
      title="اختبار أساسيات جافا سكريبت"
      description="اختبر معرفتك بأساسيات جافا سكريبت"
      questions={questions}
      language="ar"
    />
  );
};

export default JavaScriptBasicsQuizArabic;
