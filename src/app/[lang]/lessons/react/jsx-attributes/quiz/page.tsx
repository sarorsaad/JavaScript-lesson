import { FC } from 'react';
import QuizComponent, { QuizQuestion } from '@/components/quiz/QuizComponent';

const questions: QuizQuestion[] = [
  {
    id: 'jsx-attr-1',
    question: 'What is the correct way to write the class attribute in JSX?',
    options: [
      'class',
      'className',
      'Class',
      'cssClass'
    ],
    correctAnswer: 1,
    explanation: 'In JSX, we use className instead of class because class is a reserved keyword in JavaScript.'
  },
  {
    id: 'jsx-attr-2',
    question: 'How are boolean attributes typically expressed in JSX?',
    options: [
      'disabled="true"',
      'disabled={true}',
      'disabled="yes"',
      'disabled'
    ],
    correctAnswer: 1,
    explanation: 'Boolean attributes in JSX are expressed using curly braces with true/false values.'
  },
  {
    id: 'jsx-attr-3',
    question: 'What is the correct syntax for inline styles in JSX?',
    options: [
      'style="color: blue"',
      'style={{color: \'blue\'}}',
      'style={color: blue}',
      'styles={{color: blue}}'
    ],
    correctAnswer: 1,
    explanation: 'Inline styles in JSX require double curly braces - outer for JSX expression, inner for style object.'
  },
  {
    id: 'jsx-attr-4',
    question: 'How do you write the click event handler in JSX?',
    options: [
      'onclick',
      'onClick',
      'OnClick',
      'ONCLICK'
    ],
    correctAnswer: 1,
    explanation: 'React uses camelCase for event handlers, so onClick is the correct syntax.'
  },
  {
    id: 'jsx-attr-5',
    question: 'How do you write background-color in JSX inline styles?',
    options: [
      'background-color',
      'backgroundColor',
      'BackgroundColor',
      'background_color'
    ],
    correctAnswer: 1,
    explanation: 'CSS properties in JSX inline styles use camelCase, so background-color becomes backgroundColor.'
  }
];

const JSXAttributesQuiz: FC = () => {
  return (
    <QuizComponent
      title="JSX Attributes Quiz"
      description="Test your understanding of JSX attributes and styling"
      questions={questions}
      language="en"
    />
  );
};

export default JSXAttributesQuiz;
