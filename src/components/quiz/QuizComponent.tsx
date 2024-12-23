"use client";
import { FC, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface QuizProps {
  questions: QuizQuestion[];
  title: string;
  description?: string;
  language?: 'en' | 'ar';
  onComplete?: (score: number, total: number) => void;
}

const QuizComponent: FC<QuizProps> = ({
  questions,
  title,
  description,
  language = 'en',
  onComplete,
}) => {
  const [currentAnswers, setCurrentAnswers] = useState<{ [key: string]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (questionId: string, answerIndex: number) => {
    setCurrentAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex,
    }));
  };

  const calculateScore = () => {
    let newScore = 0;
    questions.forEach((question) => {
      if (currentAnswers[question.id] === question.correctAnswer) {
        newScore++;
      }
    });
    return newScore;
  };

  const handleSubmit = () => {
    const finalScore = calculateScore();
    setScore(finalScore);
    setShowResults(true);
    if (onComplete) {
      onComplete(finalScore, questions.length);
    }
  };

  const handleReset = () => {
    setCurrentAnswers({});
    setShowResults(false);
    setScore(0);
  };

  return (
    <div className={`max-w-4xl mx-auto p-6 ${language === 'ar' ? 'text-right' : 'text-left'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {description && <p className="text-gray-600 mb-6">{description}</p>}

      {showResults && (
        <Card className="mb-6 p-4 bg-blue-50">
          <h3 className="text-xl font-semibold">
            {language === 'en' ? 'Quiz Results' : 'نتائج الاختبار'}
          </h3>
          <p className="text-lg">
            {language === 'en' 
              ? `Score: ${score} out of ${questions.length}`
              : `النتيجة: ${score} من ${questions.length}`}
          </p>
          <Button onClick={handleReset} className="mt-4">
            {language === 'en' ? 'Try Again' : 'حاول مرة أخرى'}
          </Button>
        </Card>
      )}

      {questions.map((question) => (
        <Card key={question.id} className="mb-6 p-4">
          <p className="text-lg font-medium mb-4">{question.question}</p>
          <RadioGroup
            value={currentAnswers[question.id]?.toString()}
            onValueChange={(value) => handleAnswerSelect(question.id, parseInt(value))}
          >
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value={index.toString()} id={`${question.id}-${index}`} />
                <Label htmlFor={`${question.id}-${index}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
          {showResults && (
            <div className={`mt-4 p-3 rounded-md ${
              currentAnswers[question.id] === question.correctAnswer
                ? 'bg-green-50 text-green-800'
                : 'bg-red-50 text-red-800'
            }`}>
              {currentAnswers[question.id] === question.correctAnswer
                ? (language === 'en' ? '✓ Correct!' : '✓ إجابة صحيحة!')
                : (language === 'en' ? '✗ Incorrect' : '✗ إجابة خاطئة')}
              {question.explanation && (
                <p className="mt-2 text-sm">{question.explanation}</p>
              )}
            </div>
          )}
        </Card>
      ))}

      {!showResults && (
        <Button onClick={handleSubmit} className="w-full">
          {language === 'en' ? 'Submit Quiz' : 'إرسال الإجابات'}
        </Button>
      )}
    </div>
  );
};

export default QuizComponent;
