import { FC } from 'react';
import QuizComponent, { QuizQuestion } from '@/components/quiz/QuizComponent';

const questions: QuizQuestion[] = [
  {
    id: 'js-basics-1',
    question: 'What is JavaScript?',
    options: [
      'A markup language',
      'A programming language',
      'A styling language',
      'A database language'
    ],
    correctAnswer: 1,
    explanation: 'JavaScript is a programming language that enables interactive web pages and is an essential part of web applications.'
  },
  {
    id: 'js-basics-2',
    question: 'Which keyword is used to declare variables in modern JavaScript?',
    options: [
      'var',
      'let',
      'const',
      'Both let and const'
    ],
    correctAnswer: 3,
    explanation: 'Modern JavaScript uses both let and const for variable declarations. let is used for variables that can be reassigned, while const is used for constants.'
  },
  {
    id: 'js-basics-3',
    question: 'What is the correct way to write a comment in JavaScript?',
    options: [
      '<!-- comment -->',
      '/* comment */',
      '// comment',
      '# comment'
    ],
    correctAnswer: 2,
    explanation: 'Single-line comments in JavaScript start with //. For multi-line comments, you can use /* comment */.'
  }
];

const JavaScriptBasicsQuiz: FC = () => {
  return (
    <QuizComponent
      title="JavaScript Basics Quiz"
      description="Test your knowledge of JavaScript fundamentals"
      questions={questions}
      language="en"
    />
  );
};

export default JavaScriptBasicsQuiz;
