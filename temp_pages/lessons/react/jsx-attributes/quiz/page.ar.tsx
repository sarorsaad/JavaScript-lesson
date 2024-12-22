import { FC } from 'react';
import QuizComponent, { QuizQuestion } from '@/components/quiz/QuizComponent';

const questions: QuizQuestion[] = [
  {
    id: 'jsx-attr-1',
    question: 'ما هي الطريقة الصحيحة لكتابة خاصية class في JSX؟',
    options: [
      'class',
      'className',
      'Class',
      'cssClass'
    ],
    correctAnswer: 1,
    explanation: 'في JSX، نستخدم className بدلاً من class لأن class كلمة محجوزة في JavaScript.'
  },
  {
    id: 'jsx-attr-2',
    question: 'كيف يتم التعبير عن الخصائص المنطقية عادةً في JSX؟',
    options: [
      'disabled="true"',
      'disabled={true}',
      'disabled="yes"',
      'disabled'
    ],
    correctAnswer: 1,
    explanation: 'يتم التعبير عن الخصائص المنطقية في JSX باستخدام الأقواس المعقوفة مع قيم true/false.'
  },
  {
    id: 'jsx-attr-3',
    question: 'ما هي الصيغة الصحيحة للأنماط المضمنة في JSX؟',
    options: [
      'style="color: blue"',
      'style={{color: \'blue\'}}',
      'style={color: blue}',
      'styles={{color: blue}}'
    ],
    correctAnswer: 1,
    explanation: 'تتطلب الأنماط المضمنة في JSX أقواس معقوفة مزدوجة - الخارجية للتعبير JSX، والداخلية لكائن النمط.'
  },
  {
    id: 'jsx-attr-4',
    question: 'كيف تكتب معالج حدث النقر في JSX؟',
    options: [
      'onclick',
      'onClick',
      'OnClick',
      'ONCLICK'
    ],
    correctAnswer: 1,
    explanation: 'يستخدم React نمط camelCase لمعالجات الأحداث، لذا فإن onClick هو الصيغة الصحيحة.'
  },
  {
    id: 'jsx-attr-5',
    question: 'كيف تكتب background-color في الأنماط المضمنة في JSX؟',
    options: [
      'background-color',
      'backgroundColor',
      'BackgroundColor',
      'background_color'
    ],
    correctAnswer: 1,
    explanation: 'تستخدم خصائص CSS في الأنماط المضمنة في JSX نمط camelCase، لذا يصبح background-color هو backgroundColor.'
  }
];

const JSXAttributesQuizArabic: FC = () => {
  return (
    <QuizComponent
      title="اختبار خصائص JSX"
      description="اختبر فهمك لخصائص JSX والتنسيق"
      questions={questions}
      language="ar"
    />
  );
};

export default JSXAttributesQuizArabic;
