import { FC } from 'react';
import QuizComponent, { QuizQuestion } from '@/components/quiz/QuizComponent';

const questions: QuizQuestion[] = [
  {
    id: 'react-basics-1',
    question: 'What is the modern method to create a root container in React 18?',
    options: [
      'ReactDOM.render()',
      'ReactDOM.createRoot()',
      'React.createRoot()',
      'React.render()'
    ],
    correctAnswer: 1,
    explanation: 'ReactDOM.createRoot() is the modern method introduced in React 18 for creating root containers, replacing the older ReactDOM.render() method.'
  },
  {
    id: 'react-basics-2',
    question: 'Which syntax is used to embed JavaScript expressions in JSX?',
    options: [
      '[[ expression ]]',
      '(( expression ))',
      '{ expression }',
      '<< expression >>'
    ],
    correctAnswer: 2,
    explanation: 'JSX uses curly braces {} to embed JavaScript expressions within markup.'
  },
  {
    id: 'react-basics-3',
    question: 'Which of the following is a valid JSX expression?',
    options: [
      '<div>{2 + 2}</div>',
      '<div>{if(true) { return 4; }}</div>',
      '<div>{let x = 5}</div>',
      '<div>{function() { return 4; }}</div>'
    ],
    correctAnswer: 0,
    explanation: 'Simple expressions like arithmetic operations are valid in JSX. Control flow statements like if/else are not allowed directly in JSX.'
  },
  {
    id: 'react-basics-4',
    question: 'How do you render a React element to the DOM using the root container?',
    options: [
      'root.render(<App/>)',
      'root.display(<App/>)',
      'root.show(<App/>)',
      'root.mount(<App/>)'
    ],
    correctAnswer: 0,
    explanation: 'The render() method is used to render React elements to the DOM through the root container.'
  },
  {
    id: 'react-basics-5',
    question: 'What happens to JSX code when it\'s processed?',
    options: [
      'It stays as JSX',
      'It\'s converted to regular JavaScript',
      'It\'s converted to HTML',
      'It\'s converted to CSS'
    ],
    correctAnswer: 1,
    explanation: 'JSX is transformed into regular JavaScript during the build process using tools like Babel.'
  }
];

const ReactBasicsQuiz: FC = () => {
  return (
    <QuizComponent
      title="React Basics Quiz"
      description="Test your understanding of React fundamentals"
      questions={questions}
      language="en"
    />
  );
};

export default ReactBasicsQuiz;
