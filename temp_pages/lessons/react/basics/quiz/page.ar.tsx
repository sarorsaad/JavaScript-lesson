import { FC } from 'react';
import QuizComponent, { QuizQuestion } from '@/components/quiz/QuizComponent';

const questions: QuizQuestion[] = [
  {
    id: 'react-basics-1',
    question: 'ما هي الطريقة الحديثة لإنشاء حاوية الجذر في React 18؟',
    options: [
      'ReactDOM.render()',
      'ReactDOM.createRoot()',
      'React.createRoot()',
      'React.render()'
    ],
    correctAnswer: 1,
    explanation: 'ReactDOM.createRoot() هي الطريقة الحديثة التي تم تقديمها في React 18 لإنشاء حاويات الجذر، وهي تحل محل الطريقة القديمة ReactDOM.render().'
  },
  {
    id: 'react-basics-2',
    question: 'ما هي الصيغة المستخدمة لتضمين تعبيرات JavaScript في JSX؟',
    options: [
      '[[ expression ]]',
      '(( expression ))',
      '{ expression }',
      '<< expression >>'
    ],
    correctAnswer: 2,
    explanation: 'يستخدم JSX الأقواس المعقوفة {} لتضمين تعبيرات JavaScript داخل الترميز.'
  },
  {
    id: 'react-basics-3',
    question: 'أي من التعبيرات التالية صحيح في JSX؟',
    options: [
      '<div>{2 + 2}</div>',
      '<div>{if(true) { return 4; }}</div>',
      '<div>{let x = 5}</div>',
      '<div>{function() { return 4; }}</div>'
    ],
    correctAnswer: 0,
    explanation: 'التعبيرات البسيطة مثل العمليات الحسابية صالحة في JSX. عبارات التحكم مثل if/else غير مسموح بها مباشرة في JSX.'
  },
  {
    id: 'react-basics-4',
    question: 'كيف تقوم بعرض عنصر React في DOM باستخدام حاوية الجذر؟',
    options: [
      'root.render(<App/>)',
      'root.display(<App/>)',
      'root.show(<App/>)',
      'root.mount(<App/>)'
    ],
    correctAnswer: 0,
    explanation: 'يتم استخدام طريقة render() لعرض عناصر React في DOM من خلال حاوية الجذر.'
  },
  {
    id: 'react-basics-5',
    question: 'ماذا يحدث لكود JSX عندما تتم معالجته؟',
    options: [
      'يبقى كما هو JSX',
      'يتم تحويله إلى JavaScript عادي',
      'يتم تحويله إلى HTML',
      'يتم تحويله إلى CSS'
    ],
    correctAnswer: 1,
    explanation: 'يتم تحويل JSX إلى JavaScript عادي أثناء عملية البناء باستخدام أدوات مثل Babel.'
  }
];

const ReactBasicsQuizArabic: FC = () => {
  return (
    <QuizComponent
      title="اختبار أساسيات React"
      description="اختبر فهمك لأساسيات React"
      questions={questions}
      language="ar"
    />
  );
};

export default ReactBasicsQuizArabic;
